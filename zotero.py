import sqlite3
import uuid
import json
import os

import platform
import configparser
import glob
from selenium import webdriver
import toml
import urllib
from munch import Munch
from utils import (
    running,
    nested_dict_iter,
    benchmark,
    ROOT,
)
import utils
import shutil
import shlex
import time
import psutil
import subprocess
import atexit
import time


import threading
import socket
from pygit2 import Repository
from lxml import etree

from ruamel.yaml import YAML

yaml = YAML(typ="safe")
yaml.default_flow_style = False

EXPORTED = os.path.join(ROOT, "exported")
FIXTURES = os.path.join(ROOT, "fixtures")


def install_proxies(xpis, profile):
    for xpi in xpis:
        assert os.path.isdir(xpi)
        utils.print(f"installing {xpi}")
        rdf = etree.parse(os.path.join(xpi, "install.rdf"))
        xpi_id = rdf.xpath(
            "/rdf:RDF/rdf:Description/em:id",
            namespaces={
                "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                "em": "http://www.mozilla.org/2004/em-rdf#",
            },
        )[0].text
        proxy = os.path.join(profile, "extensions", xpi_id)
        if not os.path.isdir(os.path.dirname(proxy)):
            os.mkdir
            os.makedirs(os.path.dirname(proxy))
        elif os.path.isdir(proxy) and not os.path.islink(proxy):
            shutil.rmtree(proxy)
        elif os.path.exists(proxy):
            os.remove(proxy)
        with open(proxy, "w") as f:
            f.write(xpi)

    with open(os.path.join(profile, "prefs.js"), "r+") as f:
        utils.print("stripping prefs.js")
        lines = f.readlines()
        f.seek(0)
        for line in lines:
            if "extensions.lastAppBuildId" in line:
                continue
            if "extensions.lastAppVersion" in line:
                continue
            f.write(line)
        f.truncate()


def install_xpis(path, profile):
    if not os.path.exists(path):
        return
    utils.print(f"Installing xpis in {path}")

    for xpi in glob.glob(os.path.join(path, "*.xpi")):
        utils.print(f"installing {xpi}")
        profile.add_extension(xpi)


class Pinger:
    def __init__(self, every):
        self.every = every

    def __enter__(self):
        self.stop = threading.Event()
        threading.Timer(
            self.every, self.display, [time.time(), self.every, self.stop]
        ).start()

    def __exit__(self, *_args):
        self.stop.set()

    def display(self, start, every, stop):
        if stop.is_set():
            return

        utils.print(".", end="")
        threading.Timer(every, self.display, [start, every, stop]).start()


class Config:
    def __init__(self, userdata):
        self.data = [
            {
                "db": "",
                "locale": userdata.get("locale", ""),
                "first_run": userdata.get("first-run", "false") == "true",
                "timeout": 120,
                "profile": "",
                "trace_factor": 1,
            }
        ]
        trace = os.path.join(ROOT, ".trace.json")
        if os.path.exists(trace):
            with open(trace) as f:
                trace = json.load(f)
                if Repository(".").head.shorthand in trace:
                    self.data[0]["trace_factor"] = 10
        self.reset()

    def __getattr__(self, name):
        value = [frame for frame in self.data if name in frame]
        if len(value) == 0:
            raise AttributeError(f"'{type(self)}' object has no attribute '{name}'")

        value = value[0][name]
        if name == "db" and value == "":
            value = None
        return value

    def __setattr__(self, name, value):
        if name == "data":
            super().__setattr__(name, value)
        else:
            self.update(**{name: value})

    def update(self, **kwargs):
        for k, v in kwargs.items():
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
    def __init__(self, userdata):
        assert not running("Zotero"), "Zotero is running"

        self.client = userdata.get("client", "zotero")
        self.beta = userdata.get("beta") == "true"
        self.dev = userdata.get("dev") == "true"
        self.password = str(uuid.uuid4())
        self.import_at_start = userdata.get("import", None)
        if self.import_at_start:
            self.import_at_start = os.path.abspath(self.import_at_start)

        self.config = Config(userdata)

        self.proc = None

        if os.path.exists(EXPORTED):
            shutil.rmtree(EXPORTED)
        os.makedirs(EXPORTED)

        if self.client == "zotero":
            self.port = 23119
        elif self.client == "jurism":
            self.port = 24119
        else:
            raise ValueError(f'Unexpected client "{self.client}"')

        self.zotero = self.client == "zotero"
        self.jurism = self.client == "jurism"

        with open(os.path.join(ROOT, "gen/translators.json")) as f:
            self.translators = json.load(f, object_hook=Munch)

        if userdata.get("kill", "true") == "true":
            atexit.register(self.shutdown)

        self.testing = userdata.get("testing", "true") == "true"
        self.worker = userdata.get("worker", "true") == "true"
        self.caching = userdata.get("caching", "true") == "true"

        self.preferences = Preferences(self)
        self.redir = ">"
        self.start()
        self.redir = ">>"

    def execute(self, script, **args):
        for var, value in args.items():
            script = f"const {var} = {json.dumps(value)};\n" + script

        with Pinger(20):
            req = urllib.request.Request(
                f"http://127.0.0.1:{self.port}/debug-bridge/execute?password={self.password}",
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
            utils.print(
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
                utils.print("process {} survived SIGTERM; trying SIGKILL" % p)
                try:
                    p.kill()
                except psutil.NoSuchProcess:
                    pass
            gone, alive = psutil.wait_procs(alive, timeout=5, callback=on_terminate)
            if alive:
                for p in alive:
                    utils.print("process {} survived SIGKILL; giving up" % p)
        self.proc = None
        assert not running("Zotero")

    def restart(self, **kwargs):
        self.shutdown()
        self.config.update(**kwargs)
        self.start()

    def start(self):
        self.needs_restart = False
        profile = self.create_profile()
        shutil.rmtree(
            os.path.join(profile.path, self.client, "better-bibtex"), ignore_errors=True
        )

        if self.client == "zotero":
            datadir_profile = "-datadir profile"
        else:
            utils.print(
                "\n\n** WORKAROUNDS FOR JURIS-M IN PLACE -- SEE https://github.com/Juris-M/zotero/issues/34 **\n\n"
            )
            datadir_profile = ""
        cmd = f'{shlex.quote(profile.binary)} -P {shlex.quote(profile.name)} -jsconsole -purgecaches -ZoteroDebugText {datadir_profile} {self.redir} {shlex.quote(profile.path + ".log")} 2>&1'
        utils.print(f"Starting {self.client}: {cmd}")
        self.proc = subprocess.Popen(cmd, shell=True)
        utils.print(f"{self.client} started: {self.proc.pid}")

        ready = False
        self.config.stash()
        self.config.timeout = 2
        with benchmark(f"starting {self.client}") as bm:
            for _ in range(120):
                utils.print("connecting... (%.2fs)" % (bm.elapsed,))

                try:
                    ready = self.execute(
                        """
            if (!Zotero.BetterBibTeX) {
              Zotero.debug('{better-bibtex:debug bridge}: startup: BetterBibTeX not loaded')
              return false;
            }
            if (!Zotero.BetterBibTeX.ready) {
              if (typeof Zotero.BetterBibTeX.ready === 'boolean') {
                Zotero.debug('{better-bibtex:debug bridge}: startup: BetterBibTeX initialization error')
              } else {
                Zotero.debug('{better-bibtex:debug bridge}: startup: BetterBibTeX not initialized')
              }
              return false;
            }

            Zotero.debug('{better-bibtex:debug bridge}: startup: waiting for BetterBibTeX ready...')
            await Zotero.BetterBibTeX.ready;
            if (testing && !Zotero.Prefs.get('translators.better-bibtex.testing')) throw new Error('translators.better-bibtex.testing not set!')
            Zotero.debug('{better-bibtex:debug bridge}: startup: BetterBibTeX ready!');
            return true;
          """,
                        testing=self.testing,
                    )
                    if ready:
                        break

                except (urllib.error.HTTPError, urllib.error.URLError, socket.timeout):
                    pass
                time.sleep(1)

        assert ready, f"{self.client} did not start"
        self.config.pop()

        if self.import_at_start:
            prefs = {}
            if self.import_at_start.endswith(".json"):
                with open(self.import_at_start) as f:
                    data = json.load(f)
                    prefs = data.get("config", {}).get("preferences", {})
            utils.print(
                f"import at start: {json.dumps(self.import_at_start)}, {json.dumps(prefs)}"
            )
            self.execute(
                "return await Zotero.BetterBibTeX.TestSupport.importFile(file, true, prefs)",
                file=self.import_at_start,
                prefs=prefs,
            )
            self.import_at_start = None

    def create_profile(self):
        profile = Munch(name="BBTZ5TEST")

        profile.path = os.path.expanduser(f"~/.{profile.name}")

        profile.profiles = {
            # 'Linux': os.path.expanduser(f'~/.{self.client}/{self.client}'),
            "Linux": os.path.expanduser(f"~/.{self.client}/zotero"),
            # 'Darwin': os.path.expanduser('~/Library/Application Support/' + {'zotero': 'Zotero', 'jurism': 'Juris-M'}[self.client]),
            "Darwin": os.path.expanduser("~/Library/Application Support/Zotero"),
        }[platform.system()]
        os.makedirs(profile.profiles, exist_ok=True)

        variant = ""
        if self.beta:
            variant = "-beta"
        elif self.dev:
            variant = "-dev"
        profile.binary = {
            "Linux": f"/usr/lib/{self.client}{variant}/{self.client}",
            "Darwin": f"/Applications/{self.client.title()}{variant}.app/Contents/MacOS/{self.client}",
        }[platform.system()]

        # create profile
        profile.ini = os.path.join(profile.profiles, "profiles.ini")

        ini = configparser.RawConfigParser()
        ini.optionxform = str
        if os.path.exists(profile.ini):
            ini.read(profile.ini)

        if not ini.has_section("General"):
            ini.add_section("General")

        profile.id = None
        for p in ini.sections():
            for k, v in ini.items(p):
                if k == "Name" and v == profile.name:
                    profile.id = p

        if not profile.id:
            free = 0
            while True:
                profile.id = f"Profile{free}"
                if not ini.has_section(profile.id):
                    break
                free += 1
            ini.add_section(profile.id)
            ini.set(profile.id, "Name", profile.name)

        ini.set(profile.id, "IsRelative", 0)
        ini.set(profile.id, "Path", profile.path)
        ini.set(profile.id, "Default", None)
        with open(profile.ini, "w") as f:
            ini.write(f, space_around_delimiters=False)

        # layout profile
        if self.config.profile:
            profile.firefox = webdriver.FirefoxProfile(
                os.path.join(ROOT, "test/db", self.config.profile)
            )
            profile.firefox.set_preference(
                "extensions.zotero.dataDir", os.path.join(profile.path, self.client)
            )
            profile.firefox.set_preference("extensions.zotero.useDataDir", True)
            profile.firefox.set_preference(
                "extensions.zotero.translators.better-bibtex.removeStock", False
            )
        else:
            profile.firefox = webdriver.FirefoxProfile(
                os.path.join(FIXTURES, "profile", self.client)
            )

        install_xpis(os.path.join(ROOT, "xpi"), profile.firefox)

        install_xpis(os.path.join(ROOT, "other-xpis"), profile.firefox)
        if self.config.db:
            install_xpis(
                os.path.join(ROOT, "test/db", self.config.db, "xpis"), profile.firefox
            )
        if self.config.profile:
            install_xpis(
                os.path.join(ROOT, "test/db", self.config.profile, "xpis"),
                profile.firefox,
            )

        profile.firefox.set_preference("extensions.zotero.debug.memoryInfo", True)
        profile.firefox.set_preference(
            "extensions.zotero.translators.better-bibtex.testing", self.testing
        )
        profile.firefox.set_preference(
            "extensions.zotero.translators.better-bibtex.logEvents", self.testing
        )
        profile.firefox.set_preference(
            "extensions.zotero.translators.better-bibtex.caching", self.caching
        )
        profile.firefox.set_preference(
            "extensions.zotero.translators.better-bibtex.scrubDatabase", True
        )
        # don't nag about the Z7 beta for a day
        profile.firefox.set_preference(
            "extensions.zotero.hiddenNotices",
            json.dumps({"z7-beta-warning": time.time() + 86400}),
        )
        profile.firefox.set_preference("intl.accept_languages", "en-GB")
        profile.firefox.set_preference("intl.locale.requested", "en-GB")

        profile.firefox.set_preference(
            "extensions.zotero.debug-bridge.password", self.password
        )
        profile.firefox.set_preference(
            "dom.max_chrome_script_run_time", self.config.timeout
        )
        utils.print(f"dom.max_chrome_script_run_time={self.config.timeout}")

        with open(os.path.join(os.path.dirname(__file__), "preferences.toml")) as f:
            preferences = toml.load(f)
            for p, v in nested_dict_iter(preferences["general"]):
                profile.firefox.set_preference(p, v)

            if self.config.locale == "fr":
                for p, v in nested_dict_iter(preferences["fr"]):
                    profile.firefox.firefox.set_preference(p, v)

        if not self.config.first_run:
            profile.firefox.set_preference(
                "extensions.zotero.translators.better-bibtex.citekeyFormat",
                "[auth:lower][year] | [=forumPost/WebPage][Auth:lower:capitalize][Date:format-date=%Y-%m-%d.%H\\:%M\\:%S:prefix=.][PublicationTitle:lower:capitalize:prefix=.][shorttitle3_3:lower:capitalize:prefix=.][Pages:prefix=.p.][Volume:prefix=.Vol.][NumberofVolumes:prefix=de] | [Auth:lower:capitalize][date=%oY:prefix=.][PublicationTitle:lower:capitalize:prefix=.][shorttitle3_3:lower:capitalize:prefix=.][Pages:prefix=.p.][Volume:prefix=.Vol.][NumberofVolumes:prefix=de]",
            )

        if self.client == "jurism":
            utils.print(
                "\n\n** WORKAROUNDS FOR JURIS-M IN PLACE -- SEE https://github.com/Juris-M/zotero/issues/34 **\n\n"
            )
            profile.firefox.set_preference(
                "extensions.zotero.dataDir", os.path.join(profile.path, "jurism")
            )
            profile.firefox.set_preference("extensions.zotero.useDataDir", True)
            profile.firefox.set_preference(
                "extensions.zotero.translators.better-bibtex.removeStock", False
            )

        profile.firefox.update_preferences()

        shutil.rmtree(profile.path, ignore_errors=True)
        shutil.move(profile.firefox.path, profile.path)
        profile.firefox = None

        if self.config.db:
            self.needs_restart = True
            utils.print(f"restarting using {self.config.db}")
            dbs = os.path.join(ROOT, "test", "db", self.config.db)
            if not os.path.exists(dbs):
                os.makedirs(dbs)

            db_zotero = os.path.join(dbs, f"{self.client}.sqlite")
            db_zotero_alt = os.path.join(dbs, self.client, f"{self.client}.sqlite")
            if not os.path.exists(db_zotero) and not os.path.exists(db_zotero_alt):
                urllib.request.urlretrieve(
                    f"https://github.com/retorquere/zotero-better-bibtex/releases/download/test-database/{self.config.db}.zotero.sqlite",
                    db_zotero,
                )
            if not os.path.exists(db_zotero):
                db_zotero = db_zotero_alt
            shutil.copy(
                db_zotero,
                os.path.join(profile.path, self.client, os.path.basename(db_zotero)),
            )

            db_bbt = os.path.join(dbs, "better-bibtex.sqlite")
            db_bbt_alt = os.path.join(dbs, self.client, "better-bibtex.sqlite")
            if not os.path.exists(db_bbt) and not os.path.exists(db_bbt_alt):
                urllib.request.urlretrieve(
                    f"https://github.com/retorquere/zotero-better-bibtex/releases/download/test-database/{self.config.db}.better-bibtex.sqlite",
                    db_bbt,
                )
            if not os.path.exists(db_bbt):
                db_bbt = db_bbt_alt
            shutil.copy(
                db_bbt,
                os.path.join(profile.path, self.client, os.path.basename(db_bbt)),
            )

            # remove any auto-exports that may exist
            db = sqlite3.connect(
                os.path.join(profile.path, self.client, os.path.basename(db_bbt))
            )
            ae = None
            for (ae,) in db.execute(
                'SELECT data FROM "better-bibtex" WHERE name = ?',
                ["better-bibtex.autoexport"],
            ):
                ae = json.loads(ae)
                ae["data"] = []
            if ae:
                db.execute(
                    'UPDATE "better-bibtex" SET data = ? WHERE name = ?',
                    [json.dumps(ae), "better-bibtex.autoexport"],
                )
                db.commit()
            db.close()

        return profile


def strip_obj(data):
    if type(data) == list:
        stripped = [strip_obj(e) for e in data]
        return [e for e in stripped if e not in ["", "", {}, None, []]]

    if type(data) == dict:
        stripped = {k: strip_obj(v) for (k, v) in data.items()}
        return {k: v for (k, v) in stripped.items() if v not in ["", "", {}, None, []]}

    return data


class Preferences:
    def __init__(self, zotero):
        self.zotero = zotero
        self.pref = {}
        self.prefix = "translators.better-bibtex."

        with open(os.path.join(ROOT, "schema/BetterBibTeX JSON.json")) as f:
            schema = json.load(f, object_hook=Munch)
            self.supported = {
                self.prefix
                + pref: {"string": str, "boolean": bool, "number": int}[tpe.type]
                for pref, tpe in schema.properties.config.properties.preferences.properties.items()
            }
        self.supported[self.prefix + "removeStock"] = bool
        self.supported[self.prefix + "ignorePostscriptErrors"] = bool

    def __setitem__(self, key, value):
        if key[0] == ".":
            key = self.prefix + key[1:]

        if key.startswith(self.prefix):
            assert key in self.supported, f'Unknown preference "{key}"'
            assert (
                type(value) == self.supported[key]
            ), f"Unexpected value of type {type(value)} for preference {key}"

        if key == "translators.better-bibtex.postscript":
            with open(os.path.join(FIXTURES, value)) as f:
                value = f.read()

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
