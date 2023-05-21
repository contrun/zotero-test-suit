import os
import pathlib
import os.path
import json
import time

from urllib.parse import urlparse, urlunparse, parse_qsl, urlencode

import pyautogui
import w3lib.url
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.service import Service
from selenium.common.exceptions import WebDriverException

import zotero

ROOT = pathlib.Path(__file__).resolve().parent

FIXTURES = os.path.join(ROOT, "fixtures")

DRIVER_TIME_OUT_SECONDS = 10

WAIT_FOR_CONNECTOR_SECONDS = 10


def get_driver():
    options = Options()
    firefox_profile = None
    driver = webdriver.Firefox(firefox_profile=firefox_profile, options=options)
    plugins = ["connector/connector.xpi", "connector/uBlock0_1.49.2.firefox.signed.xpi"]
    for plugin in plugins:
        p = os.path.join(os.path.dirname(__file__), plugin)
        driver.install_addon(p, temporary=True)
    driver.set_page_load_timeout(DRIVER_TIME_OUT_SECONDS)
    driver.implicitly_wait(DRIVER_TIME_OUT_SECONDS)
    return driver


def clean_url(url):
    parsed = urlparse(url)
    qd = parse_qsl(parsed.query, keep_blank_values=True)
    filtered = list((k, v) for k, v in qd if not k.startswith("utm_"))
    newurl = urlunparse(
        parsed._replace(
            query=urlencode(filtered, doseq=True),
        )
    )
    return w3lib.url.canonicalize_url(newurl)


def get_items_for_url(z, url):
    cleaned_url = clean_url(url)
    items = z.execute(
        """
        var s = new Zotero.Search();
        s.libraryID = Zotero.Libraries.userLibraryID;
        s.addCondition('itemType', 'is', 'webpage');
        s.addCondition('url', 'is', url);
        var itemIDs = await s.search();
        if (!itemIDs.length) {
            return [];
        }
        var items = await Zotero.Items.getAsync(itemIDs);
        return items;
            """,
        url=cleaned_url,
    )
    return items


def save_url(z, driver, url):
    # Check url already exists before saving it.
    items = get_items_for_url(z, url)
    if len(items) >= 1:
        print(f"{len(items)} items associated to {url} already saved")
        print(json.dumps(items, indent=4, sort_keys=True))
        return False

    driver.get(url)
    # Website may be redirected to another URL.
    if url != driver.current_url:
        return save_url(z, driver, driver.current_url)

    print(f"Trying to saving {url}")
    # Save url to zotero by pressing the zotero connector shortcut.
    # Note ctrl+shift+f is the shortcut of a customized version of zotero connector.
    # Official zotero connector uses ctrl+shift+s, which is occupied by firefox for screenshot.
    pyautogui.hotkey("ctrl", "shift", "f")
    # TODO: maybe check url is indeed saved, otherwise throw exception.
    print(f"{url} saved")
    return True


def main():
    config = zotero.ZoteroConfig(
        start_new=False,
        profile_name="zotero-saver",
        extensions=[
            os.path.join(ROOT, "xpi"),
        ],
        preference_files=[
            os.path.join(ROOT, "preferences.toml"),
        ],
    )
    z = zotero.Zotero(config)

    driver = get_driver()
    try:
        for url in [
            "about:wrongurl",
            "http://example.com",
            "https://baidu.com/",
            "https://google.com",
        ]:
            try:
                if save_url(z, driver, url):
                    time.sleep(WAIT_FOR_CONNECTOR_SECONDS)
            except WebDriverException as e:
                print(f"Failed to save {url}: {e}")
    except (KeyboardInterrupt, SystemExit):
        print("exiting")
    finally:
        time.sleep(10)
        driver.quit()


if __name__ == "__main__":
    main()
