import os

from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
from selenium import webdriver
from selenium.webdriver.firefox.service import Service


def main():
    print(f"starting")
    options = Options()
    # options.add_argument('--headless')
    service = Service()
    driver = webdriver.Firefox(service=service, options=options)
    print(f"obtained webdriver")

    zotero_connector = os.path.join(
        os.path.dirname(__file__), "connector/Zotero_Connector-5.0.108.xpi"
    )
    print(f"installing {zotero_connector}")
    driver.install_addon(zotero_connector)
    driver.install_addon(
        os.path.join(
            os.path.dirname(__file__), "connector/uBlock0_1.49.2.firefox.signed.xpi"
        )
    )
    print(f"installing {zotero_connector}")

    url = "http://baidu.com"
    print(f"opening {url}")
    driver.get(url)

    while True:
        pass
    print(f"finished opening {url}")
    driver.quit()


if __name__ == "__main__":
    main()
