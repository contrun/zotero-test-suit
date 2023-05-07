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
    z = zotero.Zotero(config)
    items = z.execute(
        """
        var s = new Zotero.Search();
        s.libraryID = Zotero.Libraries.userLibraryID;
        s.addCondition('title', 'is', 'On problems of Moser and Hanson');
        var itemIDs = await s.search();
        if (!itemIDs.length) {
            return [];
        }
        var items = await Zotero.Items.getAsync(itemIDs);
        return items;
            """
    )
    print(items)
    while True:
        pass


if __name__ == "__main__":
    main()
