import pathlib
import os.path

import zotero

ROOT = pathlib.Path(__file__).resolve().parent

FIXTURES = os.path.join(ROOT, "fixtures")


def main():
    config = zotero.ZoteroConfig(
        existing_profile_path=os.path.join(FIXTURES, "profile", "zotero"),
        extensions=[
            os.path.join(ROOT, "xpi"),
        ],
        preference_files=[
            os.path.join(ROOT, "preferences.toml"),
        ],
    )
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
