from selenium import webdriver
import time
from pykeyboard import PyKeyboard  # 模拟键盘

def main():
    options = webdriver.ChromeOptions()
    prefs = {
        'profile.default_content_setting_values':
            {
                'notifications': 2
            }
    }
    options.add_experimental_option('prefs', prefs)  # 关掉浏览器左上角的通知提示
    options.add_argument("disable-infobars")  # 关闭'chrome正受到自动测试软件的控制'提示
    driver = webdriver.Chrome(chrome_options=options)
    driver.maximize_window()
    driver.implicitly_wait(10)
    driver.get("https://wenku.baidu.com/")  # 百度文库
    k = PyKeyboard()  # 实例化
    k.press_keys(['Command', 'F'])  # 这里传入输入的键盘组合（Mac电脑是command+a实现全选，Windows应该是ctrl+a)
    print("快捷键操作成功")
    time.sleep(5)
    driver.quit()

if __name__ == '__main__':
    main()