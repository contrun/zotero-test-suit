import zotero


def main():
    pass


if __name__ == "__main__":
    config = {
        "client": "zotero",
        "worker": "false",
        "logging": "false",
        "caching": "true",
        "kill": "true",
        "slow": "true",
    }
    zotero = zotero.Zotero(config)
