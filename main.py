import zotero


def main():
    config = {
        "client": "zotero",
        "worker": "false",
        "logging": "false",
        "caching": "true",
        "kill": "true",
        "slow": "true",
    }
    _zotero = zotero.Zotero(config)
    while True:
        pass

if __name__ == "__main__":
    main()
