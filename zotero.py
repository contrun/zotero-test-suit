import atexit
import configparser
import glob
import json
import os
import pathlib
import platform
import shlex
import shutil
import socket
import subprocess
import sys
import threading
import time
import urllib
import uuid

import psutil
import toml
from munch import Munch
from selenium import webdriver


def strip_obj(data):
    if type(data) == list:
        stripped = [strip_obj(e) for e in data]
        return [e for e in stripped if e not in ["", "", {}, None, []]]

    if type(data) == dict:
        stripped = {k: strip_obj(v) for (k, v) in data.items()}
        return {k: v for (k, v) in stripped.items() if v not in ["", "", {}, None, []]}

    return data


def my_log(txt, end="\n"):
    sys.stdout.write(str(txt) + end)
    sys.stdout.flush()


def install_xpis(profile, *paths):
    def install_xpi(profile, path):
        if not os.path.exists(path):
            return

        if os.path.isfile(path):
            my_log(f"installing {path} to {profile.path}")
            profile.add_extension(path)
        else:
            for path in glob.glob(os.path.join(path, "*.xpi")):
                my_log(f"installing {path} to {profile.path}")
                profile.add_extension(path)
        if not os.path.exists(path):
            return

    for path in paths:
        install_xpi(profile, path)


def update_profile_ini(ini_file, profile_name, profile_path):
    os.makedirs(profile_path, exist_ok=True)

    ini = configparser.RawConfigParser()
    ini.optionxform = str
    if os.path.exists(ini_file):
        ini.read(ini_file)

    if not ini.has_section("General"):
        ini.add_section("General")

    id = None
    for p in ini.sections():
        for k, v in ini.items(p):
            if k == "Name" and v == profile_name:
                id = p

    if not id:
        free = 0
        while True:
            id = f"Profile{free}"
            if not ini.has_section(id):
                break
            free += 1
        ini.add_section(id)
        ini.set(id, "Name", profile_name)

    ini.set(id, "IsRelative", 0)
    ini.set(id, "Path", profile_path)
    ini.set(id, "Default", None)
    with open(ini_file, "w") as f:
        ini.write(f, space_around_delimiters=False)


def running(program):
    if platform.system() == "Darwin":
        try:
            count = int(
                subprocess.check_output(
                    [
                        "osascript",
                        "-e",
                        'tell application "System Events"',
                        "-e",
                        f'count (every process whose name is "{program}")',
                        "-e",
                        "end tell",
                    ]
                ).strip()
            )
        except subprocess.CalledProcessError as err:
            print(err.output)
            if err.output.decode("utf-8") == "Application isn’t running.":
                return False
            raise
        else:
            return True

    else:
        count = 0
        for proc in psutil.process_iter():
            try:
                # Check if process name contains the given name string.
                if program.lower() in proc.name().lower():
                    count += 1
                    print(
                        f"{program} is running, name = {proc.name()}, pid = {proc.pid}"
                    )
                    return True
            except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
                pass
        return False


def nested_dict_iter(nested, root=[]):
    for key, value in nested.items():
        if isinstance(value, dict):
            for inner_key, inner_value in nested_dict_iter(value, root + [key]):
                yield inner_key, inner_value
        else:
            yield ".".join(root) + "." + key, value
            yield ".".join(root) + "." + key, value


class HashableDict(dict):
    def __hash__(self):
        # lower case before hash?
        return str(hash(json.dumps(self, sort_keys=True)))


class Benchmark(object):
    def __init__(self, name):
        self.name = name

    def __enter__(self):
        self.started = time.time()
        return self

    def __exit__(self, ty, val, tb):
        print("{} {:.2f}s".format(self.name, self.elapsed))
        return False

    @property
    def elapsed(self):
        return time.time() - self.started


class Pinger:
    def __init__(self, every):
        self.every = every

    def __enter__(self):
        self.stop = threading.Event()
        threading.Timer(
            self.every, self.display, [time.time(), self.every, self.stop]
        ).start()

    def __exit__(self, *args):
        self.stop.set()

    def display(self, start, every, stop):
        if stop.is_set():
            return

        my_log(".", end="")
        threading.Timer(every, self.display, [start, every, stop]).start()


class ZoteroConfig:
    def __init__(self, **config):
        self.data = [
            {
                "profile_name": "zotero-test-suit",
                "profile_path": "",
                "locale": "",
                "first_run": True,
                "timeout": 120,
                "trace_factor": 1,
                "client": "zotero",
                "beta": False,
                "dev": False,
                "password": str(uuid.uuid4()),
                "testing": False,
                "kill_at_exit": True,
                "start_new": True,
                "existing_profile_path": "",
                "extensions": [],
                "preferences": [],
                "preference_files": [],
                "port": 0,
            }
        ]
        self.reset()
        self.update(**config)

    def __getattr__(self, name):
        value = [frame for frame in self.data if name in frame]
        if len(value) == 0:
            raise AttributeError(f"'{type(self)}' object has no attribute '{name}'")

        value = value[0][name]
        if name == "port" and value == 0:
            if self.client == "zotero":
                return 23119
            elif self.client == "jurism":
                return 24119
            else:
                raise ValueError(f'Unexpected client "{self.client}"')
        return value

    def __setattr__(self, name, value):
        if name == "data":
            super().__setattr__(name, value)
        else:
            self.update(**{name: value})

    def update(self, **config):
        for k, v in config.items():
            if not k in self.data[-1]:
                raise AttributeError(f"'{type(self)}' object has no attribute '{k}'")
            if type(v) != type(self.data[-1][k]):
                raise ValueError(f"{type(self)}.{k} must be of type {self.data[-1][k]}")
            self.data[0][k] = v

    def stash(self):
        self.data.insert(0, {})

    def pop(self):
        if len(self.data) <= 1:
            raise ValueError("cannot pop last frame")
        self.data.pop(0)

    def reset(self):
        self.data = self.data[-1:]
        self.stash()

    def __str__(self):
        return str(self.data)


class Zotero:
    def __init__(self, config=None, **kwargs):
        assert not running("Zotero"), "Zotero is running"

        if config:
            config.update(**kwargs)
        else:
            config = ZoteroConfig(**kwargs)

        self.config = config

        if self.config.kill_at_exit:
            atexit.register(self.shutdown)

        self.proc = None
        self.preferences = Preferences(self)
        self.redir = ">"
        self.start()
        self.redir = ">>"

    def execute(self, script, **args):
        for var, value in args.items():
            script = f"const {var} = {json.dumps(value)};\n" + script

        with Pinger(20):
            req = urllib.request.Request(
                f"http://127.0.0.1:{self.config.port}/debug-bridge/execute?password={self.config.password}",
                data=script.encode("utf-8"),
                headers={"Content-type": "application/javascript"},
            )
            res = (
                urllib.request.urlopen(
                    req, timeout=self.config.timeout * self.config.trace_factor
                )
                .read()
                .decode()
            )
            return json.loads(res)

    def shutdown(self):
        if self.proc is None:
            return

        # graceful shutdown
        try:
            self.execute(
                """
        const appStartup = Components.classes['@mozilla.org/toolkit/app-startup;1'].getService(Components.interfaces.nsIAppStartup);
        appStartup.quit(Components.interfaces.nsIAppStartup.eAttemptQuit);
      """
            )
        except:
            pass

        def on_terminate(proc):
            my_log(
                "process {} terminated with exit code {}".format(proc, proc.returncode)
            )

        zotero = psutil.Process(self.proc.pid)
        alive = zotero.children(recursive=True)
        alive.append(zotero)

        for p in alive:
            try:
                p.terminate()
            except psutil.NoSuchProcess:
                pass
        gone, alive = psutil.wait_procs(alive, timeout=5, callback=on_terminate)

        if alive:
            for p in alive:
                my_log("process {} survived SIGTERM; trying SIGKILL" % p)
                try:
                    p.kill()
                except psutil.NoSuchProcess:
                    pass
            gone, alive = psutil.wait_procs(alive, timeout=5, callback=on_terminate)
            if alive:
                for p in alive:
                    my_log("process {} survived SIGKILL; giving up" % p)
        self.proc = None
        assert not running("Zotero")

    def restart(self, **kwargs):
        self.shutdown()
        self.config.update(**kwargs)
        self.start()

    def start(self):
        self.needs_restart = False
        profile = self._create_profile()

        if self.config.client == "zotero":
            datadir_profile = "-datadir profile"
        else:
            my_log(
                "\n\n** WORKAROUNDS FOR JURIS-M IN PLACE -- SEE https://github.com/Juris-M/zotero/issues/34 **\n\n"
            )
            datadir_profile = ""
        cmd = f'{shlex.quote(profile.binary)} -P {shlex.quote(profile.name)} -jsconsole -purgecaches -ZoteroDebugText {datadir_profile} {self.redir} {shlex.quote(profile.path + ".log")} 2>&1'
        my_log(f"Starting {self.config.client}: {cmd}")
        self.proc = subprocess.Popen(cmd, shell=True)
        my_log(f"{self.config.client} started: {self.proc.pid}")

        ready = False
        self.config.stash()
        self.config.timeout = 2
        with Benchmark(f"starting {self.config.client}") as bm:
            for _ in range(120):
                my_log("connecting... (%.2fs)" % (bm.elapsed,))

                try:
                    ready = self.execute(
                        """
                        Zotero.debug('{better-bibtex:debug bridge}: startup: BetterBibTeX ready!');
                        return true;
                        """,
                        testing=self.config.testing,
                    )
                    if ready:
                        break

                except (urllib.error.HTTPError, urllib.error.URLError, socket.timeout):
                    pass
                time.sleep(1)

        assert ready, f"{self.config.client} did not start"
        self.config.pop()

    def _create_profile(self):
        profile = Munch(name=self.config.profile_name)

        profile.path = self.config.profile_path or os.path.expanduser(
            f"~/.{profile.name}"
        )

        profile.profiles = {
            "Linux": os.path.expanduser(f"~/.{self.config.client}/zotero"),
            "Darwin": os.path.expanduser("~/Library/Application Support/Zotero"),
        }[platform.system()]
        os.makedirs(profile.profiles, exist_ok=True)

        variant = ""
        if self.config.beta:
            variant = "-beta"
        elif self.config.dev:
            variant = "-dev"
        profile.binary = {
            "Linux": f"/usr/lib/{self.config.client}{variant}/{self.config.client}",
            "Darwin": f"/Applications/{self.config.client}{variant}.app/Contents/MacOS/{self.config.client}",
        }[platform.system()]

        ini_file = os.path.join(profile.profiles, "profiles.ini")
        update_profile_ini(ini_file, profile.name, profile.path)

        if self.config.start_new:
            my_log(f"Removing existing profile at {profile.path}")
            shutil.rmtree(profile.path, ignore_errors=True)
            os.makedirs(profile.path, exist_ok=True)

        if self.config.existing_profile_path:
            shutil.copytree(
                self.config.existing_profile_path, profile.path, dirs_exist_ok=True
            )

        self._install_extensions_and_update_preferences(profile.path)

        return profile

    def _install_extensions_and_update_preferences(self, path):
        firefox_profile = webdriver.FirefoxProfile()

        install_xpis(firefox_profile, *self.config.extensions)

        default_preferences = {
            "extensions.zotero.debug.memoryInfo": True,
            # don't nag about the Z7 beta for a day
            "extensions.zotero.hiddenNotices": json.dumps(
                {"z7-beta-warning": time.time() + 86400}
            ),
            "extensions.zotero.debug-bridge.password": self.config.password,
            "dom.max_chrome_script_run_time": self.config.timeout,
        }

        if self.config.client == "jurism":
            # WORKAROUNDS FOR JURIS-M IN PLACE -- SEE https://github.com/Juris-M/zotero/issues/34
            default_preferences["extensions.zotero.dataDir"] = os.path.join(
                path, "jurism"
            )
            default_preferences["extensions.zotero.useDataDir"] = True

        for preference in [default_preferences] + self.config.preferences:
            for k, v in preference.items():
                firefox_profile.set_preference(k, v)

        for preference_file in self.config.preference_files:
            with open(preference_file) as f:
                preferences = toml.load(f)
                for p, v in nested_dict_iter(preferences["general"]):
                    firefox_profile.set_preference(p, v)

                if self.config.locale == "fr":
                    for p, v in nested_dict_iter(preferences["fr"]):
                        firefox_profile.set_preference(p, v)

        firefox_profile.update_preferences()

        shutil.copytree(firefox_profile.path, path, dirs_exist_ok=True)
        shutil.rmtree(firefox_profile.path)


class Preferences:
    def __init__(self, zotero):
        self.zotero = zotero
        self.pref = {}

    def __setitem__(self, key, value):
        self.pref[key] = value
        self.zotero.execute("Zotero.Prefs.set(pref, value)", pref=key, value=value)

    def keys(self):
        return self.pref.keys()

    def parse(self, value):
        value = value.strip()

        if value in ["true", "false"]:
            return value == "true"

        try:
            return int(value)
        except:
            pass

        if len(value) >= 2:
            if value[0] == '"' and value[-1] == '"':
                return json.loads(value)
            if value[0] == "'" and value[-1] == "'":
                return value[1:-1]

        return value
