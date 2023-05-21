import os

import pyautogui
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.service import Service
from selenium.common.exceptions import WebDriverException

DRIVER_TIME_OUT_SECONDS = 10


def get_driver():
    options = Options()
    service = Service()
    firefox_profile = None
    driver = webdriver.Firefox(
        firefox_profile=firefox_profile, service=service, options=options
    )
    plugins = ["connector/connector.xpi", "connector/uBlock0_1.49.2.firefox.signed.xpi"]
    for plugin in plugins:
        p = os.path.join(os.path.dirname(__file__), plugin)
        driver.install_addon(p, temporary=True)
    driver.set_page_load_timeout(DRIVER_TIME_OUT_SECONDS)
    driver.implicitly_wait(DRIVER_TIME_OUT_SECONDS)
    return driver


def save_url(driver, url):
    # TODO: check url already exists before saving it.
    driver.get(url)
    print(f"Trying to saving {url}")
    # Save url to zotero by pressing the zotero connector shortcut.
    # Note ctrl+shift+f is the shortcut of a customized version of zotero connector.
    # Official zotero connector uses ctrl+shift+s, which is occupied by firefox for screenshot.
    pyautogui.hotkey("ctrl", "shift", "f")
    # TODO: maybe check url is indeed saved, otherwise throw exception.
    print(f"{url} saved")


def main():
    driver = get_driver()
    try:
        for url in ["about:wrongurl", "http://example.com", "https://google.com"]:
            try:
                save_url(driver, url)
            except WebDriverException as e:
                print(f"Failed to save {url}: {e}")
        while True:
            pass
    except (KeyboardInterrupt, SystemExit):
        print("exiting")
    finally:
        driver.quit()


if __name__ == "__main__":
    main()
