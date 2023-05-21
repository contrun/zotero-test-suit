with import <nixpkgs> { };
(python3.withPackages (ps:
  with ps; [
    munch
    psutil
    selenium
    toml
    pyautogui
    w3lib
    geckodriver
  ])).env
