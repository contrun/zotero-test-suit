import os
import time

from selenium import webdriver

from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.firefox_profile import FirefoxProfile
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

def main():
    print(f"starting")
    options = Options()
    # options.add_argument('--headless')
    service = Service()
    service.executable_path = "firefox-developer-edition"
    driver = webdriver.Firefox(service=service, options=options)
    print(f"obtained webdriver")

    zotero_connector = os.path.join(
        os.path.dirname(__file__), "connector/connector.xpi"
    )
    print(f"installing {zotero_connector}")
    driver.install_addon(zotero_connector, temporary=True)
    driver.install_addon(
        os.path.join(
            os.path.dirname(__file__), "connector/uBlock0_1.49.2.firefox.signed.xpi"
        )
    )
    print(f"installing {zotero_connector}")

    driver.get("about:blank")
    ActionChains(driver).key_down(Keys.LEFT_SHIFT).key_down(Keys.LEFT_CONTROL).send_keys('f').key_down(Keys.LEFT_SHIFT).key_up(Keys.LEFT_CONTROL).perform()
    print(f"Priming zotero connector")
    ActionChains(driver).key_down(Keys.LEFT_SHIFT).key_down(Keys.LEFT_CONTROL).send_keys('f').key_down(Keys.LEFT_SHIFT).key_up(Keys.LEFT_CONTROL).perform()
    url = "moz-extension://7646e299-3b24-4b7f-bc81-e9fca09bd4bc/dashboard.html" # ublock origin
    url = "http://baidu.com"
    driver.get(url)
    html = driver.find_element(By.XPATH, "/html")
    # html.key_down(Keys.LEFT_SHIFT).key_down(Keys.LEFT_CONTROL).send_keys('f').key_down(Keys.LEFT_SHIFT).key_up(Keys.LEFT_CONTROL).perform()
    input_box = driver.find_element(By.XPATH, r'//*[@id="kw"]')
    input_box.send_keys("abc")
    print(f"opening {url}")
    ActionChains(driver).send_keys('f').perform()
    ActionChains(driver).key_down(Keys.LEFT_CONTROL).send_keys('f').key_up(Keys.LEFT_CONTROL).perform()

    while True:
        pass
    print(f"finished opening {url}")
    driver.quit()


if __name__ == "__main__":
    main()
