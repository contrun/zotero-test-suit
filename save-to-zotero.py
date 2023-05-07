import os

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service


def main():
    print(f"starting")
    options = Options()
    options.add_argument("--no-sandbox")
    options.add_extension(
        os.path.join(os.path.dirname(__file__), "connector/extension_5_0_108_0.crx")
    )
    service = Service()
    service.executable_path = "chromium"
    driver = webdriver.Chrome(service=service, options=options)
    print(f"obtained webdriver")

    # zotero_connector = os.path.join(
    #     os.path.dirname(__file__), "connector/extension_5_0_108_0.crx"
    # )
    # print(f"installing {zotero_connector}")
    # driver.install_addon(zotero_connector)
    # print(f"installing {zotero_connector}")

    url = "moz-extension://eae1d601-094c-486e-b8d1-edd8e0a7bfdb/"
    url = "http://baidu.com"
    print(f"opening {url}")
    driver.get(url)

    while True:
        pass
    print(f"finished opening {url}")
    driver.quit()


if __name__ == "__main__":
    main()
