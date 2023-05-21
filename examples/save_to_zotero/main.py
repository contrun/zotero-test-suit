import os
import pathlib
import os.path
import json
import time
import glob

from urllib.parse import urlparse, urlunparse, parse_qsl, urlencode

import pyautogui
import w3lib.url
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.service import Service
from selenium.common.exceptions import WebDriverException

from zotero_test_suit import Zotero, ZoteroConfig


class NotSavedException(Exception):
    def __init__(self, e, url):
        self.message = f"Exception happened while saving {url}: {e}"
        self.exception = e
        self.url = url


ROOT = pathlib.Path(__file__).resolve().parent.parent.parent

DRIVER_TIME_OUT_SECONDS = 10

WAIT_FOR_CONNECTOR_SECONDS = 10


def install_extenstions(driver, path):
    if not os.path.exists(path):
        return
    if os.path.isfile(path):
        driver.install_addon(path, temporary=True)
    else:
        for path in glob.glob(os.path.join(path, "*.xpi")):
            driver.install_addon(path, temporary=True)

def get_driver():
    options = Options()
    firefox_profile = None
    driver = webdriver.Firefox(firefox_profile=firefox_profile, options=options)
    install_extenstions(driver, os.path.join(ROOT, "extensions/firefox"))
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


def get_items_for_url(z, url, webpage_only=True):
    cleaned_url = clean_url(url)

    items = z.execute(
        """
        var s = new Zotero.Search();
        s.libraryID = Zotero.Libraries.userLibraryID;
        s.addCondition('url', 'is', url);
        if (webpage_only) {
            s.addCondition('itemType', 'is', 'webpage');
        }
        var itemIDs = await s.search();
        if (!itemIDs.length) {
            return [];
        }
        var items = await Zotero.Items.getAsync(itemIDs);
        return items;
            """,
        url=cleaned_url,
        webpage_only=webpage_only,
    )
    return items


def save_url(z, driver, url):
    try:
        result = try_save_url(z, driver, url)
        if not result:
            return result
        url = result
        # Wait a few seconds as it takes time for the zotero connector to snapshot the website
        time.sleep(WAIT_FOR_CONNECTOR_SECONDS)
        items = get_items_for_url(z, url, webpage_only=False)
        if items:
            print(f"Saving {url} succeeded")
            print(json.dumps(items, indent=4, sort_keys=True))
            return url
        raise NotSavedException(Exception("Not saved"), url)
    except WebDriverException as e:
        raise NotSavedException(e, url)


def try_save_url(z, driver, url):
    """
    Save url to zotero. Return None if URL already saved or the genuine url saved.
    """
    # Check url already exists before saving it.
    # Note that item may not be saved as a webpage (could be a journal article etc)
    items = get_items_for_url(z, url, webpage_only=False)
    if items:
        print(f"{len(items)} items associated to {url} already saved")
        print(json.dumps(items, indent=4, sort_keys=True))
        return None

    driver.get(url)
    # Website may be redirected to another URL.
    if url != driver.current_url:
        return try_save_url(z, driver, driver.current_url)

    print(f"Trying to saving {url}")
    # Save url to zotero by pressing the zotero connector shortcut.
    # Note ctrl+shift+f is the shortcut of a customized version of zotero connector.
    # Official zotero connector uses ctrl+shift+s, which is occupied by firefox for screenshot.
    pyautogui.hotkey("ctrl", "shift", "f")
    return url


def main():
    config = ZoteroConfig(
        start_new=False,
        profile_name="zotero-saver",
        extensions=[
            os.path.join(ROOT, "extensions/zotero"),
        ],
        preference_files=[
            os.path.join(ROOT, "preferences/preferences.toml"),
        ],
    )
    z = Zotero(config)

    driver = get_driver()
    try:
        with open("urllist") as f:
            for line in f:
                url = line.rstrip()
                try:
                    save_url(z, driver, url)
                except NotSavedException as e:
                    print(f"Failed to save {e.url}: {e.exception}")
    except (KeyboardInterrupt, SystemExit):
        print("exiting")
    finally:
        time.sleep(10)
        driver.quit()


if __name__ == "__main__":
    main()
