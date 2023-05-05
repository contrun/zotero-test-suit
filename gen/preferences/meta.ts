/* eslint-disable no-magic-numbers, @typescript-eslint/quotes, max-len, quote-props, comma-dangle, eol-last */

export const names = [
  "ascii",
  "asciiBibLaTeX",
  "asciiBibTeX",
  "autoAbbrev",
  "autoAbbrevStyle",
  "autoExport",
  "autoExportDelay",
  "autoExportIdleWait",
  "autoExportPathReplaceDiacritics",
  "autoExportPathReplaceDirSep",
  "autoExportPathReplaceSpace",
  "automaticTags",
  "autoPinDelay",
  "auxImport",
  "baseAttachmentPath",
  "biblatexExtendedDateFormat",
  "biblatexExtendedNameFormat",
  "biblatexExtractEprint",
  "bibtexParticleNoOp",
  "bibtexURL",
  "cache",
  "cacheFlushInterval",
  "charmap",
  "citeCommand",
  "citekeyFold",
  "citekeyFormat",
  "citekeyFormatEditing",
  "citekeySearch",
  "citekeyUnsafeChars",
  "csquotes",
  "DOIandURL",
  "exportBibTeXStrings",
  "exportBraceProtection",
  "exportTitleCase",
  "extraMergeCitekeys",
  "extraMergeCSL",
  "extraMergeTeX",
  "git",
  "import",
  "importBibTeXStrings",
  "importCaseProtection",
  "importCitationKey",
  "importExtra",
  "importJabRefAbbreviations",
  "importJabRefStrings",
  "importNoteToExtra",
  "importSentenceCase",
  "importUnknownTexCommand",
  "itemObserverDelay",
  "jabrefFormat",
  "jieba",
  "keyConflictPolicy",
  "keyScope",
  "kuroshiro",
  "language",
  "logEvents",
  "mapMath",
  "mapText",
  "mapUnicode",
  "parseParticles",
  "patchDates",
  "platform",
  "postscript",
  "postscriptOverride",
  "preferencesOverride",
  "qualityReport",
  "quickCopyEta",
  "quickCopyMode",
  "quickCopyOrgMode",
  "quickCopyPandocBrackets",
  "quickCopySelectLink",
  "rawImports",
  "rawLaTag",
  "relativeFilePaths",
  "retainCache",
  "scrubDatabase",
  "separatorList",
  "separatorNames",
  "skipFields",
  "skipWords",
  "startupProgress",
  "strings",
  "stringsOverride",
  "testing",
  "verbatimFields",
  "warnBulkModify",
  "warnTitleCased"
] as const

export type PreferenceName = typeof names[number]

export const affects: Partial<Record<PreferenceName, string[]>> = {
  "ascii": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "asciiBibLaTeX": [
    "Better BibLaTeX"
  ],
  "asciiBibTeX": [
    "Better BibTeX"
  ],
  "autoAbbrev": [
    "Better BibLaTeX",
    "Better BibTeX",
    "Better CSL JSON",
    "Better CSL YAML"
  ],
  "autoAbbrevStyle": [
    "Better BibLaTeX",
    "Better BibTeX",
    "Better CSL JSON",
    "Better CSL YAML"
  ],
  "automaticTags": [
    "Better BibLaTeX",
    "Better BibTeX",
    "Better CSL JSON",
    "Better CSL YAML"
  ],
  "baseAttachmentPath": [
    "Better BibLaTeX",
    "Better BibTeX",
    "Better CSL JSON",
    "Better CSL YAML"
  ],
  "biblatexExtendedDateFormat": [
    "Better BibLaTeX"
  ],
  "biblatexExtendedNameFormat": [
    "Better BibLaTeX"
  ],
  "biblatexExtractEprint": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "bibtexParticleNoOp": [
    "Better BibTeX"
  ],
  "bibtexURL": [
    "Better BibTeX"
  ],
  "cache": [
    "Better BibLaTeX",
    "Better BibTeX",
    "Better CSL JSON",
    "Better CSL YAML"
  ],
  "charmap": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "csquotes": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "DOIandURL": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "exportBibTeXStrings": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "exportBraceProtection": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "exportTitleCase": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "jabrefFormat": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "language": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "mapMath": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "mapText": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "mapUnicode": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "parseParticles": [
    "Better BibLaTeX",
    "Better BibTeX",
    "Better CSL JSON",
    "Better CSL YAML"
  ],
  "postscript": [
    "Better BibLaTeX",
    "Better BibTeX",
    "Better CSL JSON",
    "Better CSL YAML"
  ],
  "qualityReport": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "rawLaTag": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "relativeFilePaths": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "separatorList": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "separatorNames": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "skipFields": [
    "Better BibLaTeX",
    "Better BibTeX",
    "Better CSL JSON",
    "Better CSL YAML"
  ],
  "skipWords": [
    "Better BibLaTeX",
    "Better BibTeX"
  ],
  "strings": [
    "Better BibLaTeX",
    "Better BibTeX"
  ]
}

export type Preferences = {
  ascii: string
  asciiBibLaTeX: boolean
  asciiBibTeX: boolean
  autoAbbrev: boolean
  autoAbbrevStyle: string
  autoExport: "off" | "immediate" | "idle"
  autoExportDelay: number
  autoExportIdleWait: number
  autoExportPathReplaceDiacritics: boolean
  autoExportPathReplaceDirSep: string
  autoExportPathReplaceSpace: string
  automaticTags: boolean
  autoPinDelay: number
  auxImport: boolean
  baseAttachmentPath: string
  biblatexExtendedDateFormat: boolean
  biblatexExtendedNameFormat: boolean
  biblatexExtractEprint: boolean
  bibtexParticleNoOp: boolean
  bibtexURL: "off" | "note" | "note-url-ish" | "url" | "url-ish"
  cache: boolean
  cacheFlushInterval: number
  charmap: string
  citeCommand: string
  citekeyFold: boolean
  citekeyFormat: string
  citekeyFormatEditing: string
  citekeySearch: boolean
  citekeyUnsafeChars: string
  csquotes: string
  DOIandURL: "both" | "doi" | "url"
  exportBibTeXStrings: "off" | "detect" | "match" | "match+reverse"
  exportBraceProtection: boolean
  exportTitleCase: boolean
  extraMergeCitekeys: boolean
  extraMergeCSL: boolean
  extraMergeTeX: boolean
  git: string
  import: boolean
  importBibTeXStrings: boolean
  importCaseProtection: "as-needed" | "on" | "off"
  importCitationKey: boolean
  importExtra: boolean
  importJabRefAbbreviations: boolean
  importJabRefStrings: boolean
  importNoteToExtra: string
  importSentenceCase: "on+guess" | "on" | "off"
  importUnknownTexCommand: string
  itemObserverDelay: number
  jabrefFormat: 0 | 3 | 4 | 5
  jieba: boolean
  keyConflictPolicy: "change" | "keep"
  keyScope: "global" | "library"
  kuroshiro: boolean
  language: "langid" | "language" | "both"
  logEvents: boolean
  mapMath: string
  mapText: string
  mapUnicode: "minimal-packages" | "conservative" | "text" | "math" | "creator"
  parseParticles: boolean
  patchDates: string
  platform: string
  postscript: string
  postscriptOverride: string
  preferencesOverride: string
  qualityReport: boolean
  quickCopyEta: string
  quickCopyMode: "latex" | "citekeys" | "pandoc" | "orgmode" | "orgRef" | "orgRef3" | "rtfScan" | "roamCiteKey" | "atom" | "gitbook" | "selectlink" | "eta"
  quickCopyOrgMode: "zotero" | "citationkey"
  quickCopyPandocBrackets: boolean
  quickCopySelectLink: "zotero" | "citationkey"
  rawImports: boolean
  rawLaTag: string
  relativeFilePaths: boolean
  retainCache: boolean
  scrubDatabase: boolean
  separatorList: string
  separatorNames: string
  skipFields: string
  skipWords: string
  startupProgress: string
  strings: string
  stringsOverride: string
  testing: boolean
  verbatimFields: string
  warnBulkModify: number
  warnTitleCased: boolean
}

export const defaults: Preferences = {
  ascii: "",
  asciiBibLaTeX: false,
  asciiBibTeX: true,
  autoAbbrev: false,
  autoAbbrevStyle: "",
  autoExport: "immediate",
  autoExportDelay: 5,
  autoExportIdleWait: 10,
  autoExportPathReplaceDiacritics: false,
  autoExportPathReplaceDirSep: "-",
  autoExportPathReplaceSpace: " ",
  automaticTags: true,
  autoPinDelay: 0,
  auxImport: false,
  baseAttachmentPath: "",
  biblatexExtendedDateFormat: true,
  biblatexExtendedNameFormat: true,
  biblatexExtractEprint: true,
  bibtexParticleNoOp: false,
  bibtexURL: "off",
  cache: true,
  cacheFlushInterval: 5,
  charmap: "",
  citeCommand: "cite",
  citekeyFold: true,
  citekeyFormat: "auth.lower + shorttitle(3,3) + year",
  citekeyFormatEditing: "",
  citekeySearch: true,
  citekeyUnsafeChars: "\\\"#%'(),={}~",
  csquotes: "",
  DOIandURL: "both",
  exportBibTeXStrings: "off",
  exportBraceProtection: true,
  exportTitleCase: true,
  extraMergeCitekeys: false,
  extraMergeCSL: false,
  extraMergeTeX: false,
  git: "config",
  import: true,
  importBibTeXStrings: true,
  importCaseProtection: "as-needed",
  importCitationKey: true,
  importExtra: true,
  importJabRefAbbreviations: true,
  importJabRefStrings: true,
  importNoteToExtra: "",
  importSentenceCase: "on+guess",
  importUnknownTexCommand: "ignore",
  itemObserverDelay: 5,
  jabrefFormat: 0,
  jieba: false,
  keyConflictPolicy: "keep",
  keyScope: "library",
  kuroshiro: false,
  language: "langid",
  logEvents: false,
  mapMath: "",
  mapText: "",
  mapUnicode: "conservative",
  parseParticles: true,
  patchDates: "dateadded=dateAdded, date-added=dateAdded, datemodified=dateModified, date-modified=dateModified",
  platform: "",
  postscript: "",
  postscriptOverride: "",
  preferencesOverride: "",
  qualityReport: false,
  quickCopyEta: "",
  quickCopyMode: "latex",
  quickCopyOrgMode: "zotero",
  quickCopyPandocBrackets: false,
  quickCopySelectLink: "zotero",
  rawImports: false,
  rawLaTag: "#LaTeX",
  relativeFilePaths: false,
  retainCache: false,
  scrubDatabase: false,
  separatorList: "and",
  separatorNames: "and",
  skipFields: "",
  skipWords: "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum",
  startupProgress: "popup",
  strings: "",
  stringsOverride: "",
  testing: false,
  verbatimFields: "url,doi,file,pdf,ids,eprint,/^verb[a-z]$/,groups,/^citeulike-linkout-[0-9]+$/, /^bdsk-url-[0-9]+$/",
  warnBulkModify: 10,
  warnTitleCased: false,
}

export const options: Partial<Record<PreferenceName, Record<string, string>>> = {
  "autoExport": {
    "off": "Paused",
    "immediate": "On Change",
    "idle": "When Idle"
  },
  "bibtexURL": {
    "off": "no",
    "note": "in the 'note' field",
    "note-url-ish": "in the 'note' field, but assuming the 'url' package is not loaded",
    "url": "in the 'url' field",
    "url-ish": "in the 'url' field, but assuming the 'url' package is not loaded"
  },
  "DOIandURL": {
    "both": "both",
    "doi": "DOI",
    "url": "URL"
  },
  "exportBibTeXStrings": {
    "off": "No",
    "detect": "Assume single-word fields to be @string vars",
    "match": "Match against the @string declarations below",
    "match+reverse": "Match against the @string declarations and their values below"
  },
  "importCaseProtection": {
    "as-needed": "minimal",
    "on": "yes",
    "off": "no"
  },
  "importSentenceCase": {
    "on+guess": "yes, but try to exclude already-sentence-cased titles",
    "on": "yes",
    "off": "no (import titles as-is)"
  },
  "jabrefFormat": {
    "0": "no",
    "3": "for JabRef 3",
    "4": "for JabRef 4",
    "5": "for JabRef 5"
  },
  "keyConflictPolicy": {
    "change": "postfixed (causes key changes)",
    "keep": "kept (causes key duplicates)"
  },
  "keyScope": {
    "global": "across all libraries",
    "library": "within each library"
  },
  "language": {
    "langid": "langid",
    "language": "language",
    "both": "both"
  },
  "mapUnicode": {
    "minimal-packages": "Minimize additional latex packages required",
    "conservative": "Minimize the number of switches between math-mode and text-mode",
    "text": "Prefer text-mode replacements",
    "math": "Prefer math-mode replacements",
    "creator": "Add braces to accented characters to assist simple latex parsers"
  },
  "quickCopyMode": {
    "latex": "LaTeX citation",
    "citekeys": "Cite Keys",
    "pandoc": "Pandoc citation",
    "orgmode": "Org-mode select link",
    "orgRef": "org-ref citation",
    "orgRef3": "org-ref v3 citation",
    "rtfScan": "RTF Scan marker",
    "roamCiteKey": "Roam Cite Key",
    "atom": "Atom (https://atom.io/packages/zotero-citations)",
    "gitbook": "GitBook",
    "selectlink": "Zotero select link",
    "eta": "Eta template"
  },
  "quickCopyOrgMode": {
    "zotero": "using Zotero item key",
    "citationkey": "using Better BibTeX citation key"
  },
  "quickCopySelectLink": {
    "zotero": "using Zotero item key",
    "citationkey": "using Better BibTeX citation key"
  }
}

type LokiRecord = {
  type: 'object'
  additionalProperties: false
  properties: any
  required: string[]
}
export const schema: {
  autoExport: { preferences: PreferenceName[], displayOptions: string[] }
  translator: Record<string, { cache: false | LokiRecord, autoexport: false | LokiRecord, displayOptions: string[], preferences: PreferenceName[] }>
} = {
  "autoExport": {
    "preferences": [
      "asciiBibLaTeX",
      "asciiBibTeX",
      "biblatexExtendedNameFormat",
      "bibtexParticleNoOp",
      "bibtexURL",
      "DOIandURL"
    ],
    "displayOptions": [
      "exportNotes",
      "useJournalAbbreviation"
    ]
  },
  "translator": {
    "Better BibLaTeX": {
      "autoexport": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "enum": [
              "collection",
              "library"
            ]
          },
          "id": {
            "type": "integer"
          },
          "path": {
            "type": "string",
            "minLength": 1
          },
          "status": {
            "enum": [
              "scheduled",
              "running",
              "done",
              "error"
            ]
          },
          "translatorID": {
            "const": "f895aa0d-f28e-47fe-b247-2ea77c6ed583"
          },
          "exportNotes": {
            "type": "boolean"
          },
          "useJournalAbbreviation": {
            "type": "boolean"
          },
          "asciiBibLaTeX": {
            "type": "boolean"
          },
          "biblatexExtendedNameFormat": {
            "type": "boolean"
          },
          "DOIandURL": {
            "enum": [
              "both",
              "doi",
              "url"
            ]
          },
          "error": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          },
          "meta": {
            "type": "object"
          },
          "$loki": {
            "type": "integer"
          }
        },
        "required": [
          "type",
          "id",
          "path",
          "status",
          "translatorID",
          "exportNotes",
          "useJournalAbbreviation",
          "asciiBibLaTeX",
          "biblatexExtendedNameFormat",
          "DOIandURL"
        ]
      },
      "cache": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "itemID": {
            "type": "integer"
          },
          "entry": {
            "type": "string"
          },
          "exportNotes": {
            "type": "boolean"
          },
          "useJournalAbbreviation": {
            "type": "boolean"
          },
          "asciiBibLaTeX": {
            "type": "boolean"
          },
          "biblatexExtendedNameFormat": {
            "type": "boolean"
          },
          "DOIandURL": {
            "enum": [
              "both",
              "doi",
              "url"
            ]
          },
          "metadata": {
            "type": "object"
          },
          "meta": {
            "type": "object"
          },
          "$loki": {
            "type": "integer"
          }
        },
        "required": [
          "itemID",
          "exportNotes",
          "useJournalAbbreviation",
          "asciiBibLaTeX",
          "biblatexExtendedNameFormat",
          "DOIandURL",
          "entry"
        ]
      },
      "preferences": [
        "asciiBibLaTeX",
        "biblatexExtendedNameFormat",
        "DOIandURL"
      ],
      "displayOptions": [
        "exportNotes",
        "useJournalAbbreviation"
      ]
    },
    "Better BibTeX": {
      "autoexport": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "enum": [
              "collection",
              "library"
            ]
          },
          "id": {
            "type": "integer"
          },
          "path": {
            "type": "string",
            "minLength": 1
          },
          "status": {
            "enum": [
              "scheduled",
              "running",
              "done",
              "error"
            ]
          },
          "translatorID": {
            "const": "ca65189f-8815-4afe-8c8b-8c7c15f0edca"
          },
          "exportNotes": {
            "type": "boolean"
          },
          "useJournalAbbreviation": {
            "type": "boolean"
          },
          "asciiBibTeX": {
            "type": "boolean"
          },
          "bibtexParticleNoOp": {
            "type": "boolean"
          },
          "bibtexURL": {
            "enum": [
              "off",
              "note",
              "note-url-ish",
              "url",
              "url-ish"
            ]
          },
          "DOIandURL": {
            "enum": [
              "both",
              "doi",
              "url"
            ]
          },
          "error": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          },
          "meta": {
            "type": "object"
          },
          "$loki": {
            "type": "integer"
          }
        },
        "required": [
          "type",
          "id",
          "path",
          "status",
          "translatorID",
          "exportNotes",
          "useJournalAbbreviation",
          "asciiBibTeX",
          "bibtexParticleNoOp",
          "bibtexURL",
          "DOIandURL"
        ]
      },
      "cache": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "itemID": {
            "type": "integer"
          },
          "entry": {
            "type": "string"
          },
          "exportNotes": {
            "type": "boolean"
          },
          "useJournalAbbreviation": {
            "type": "boolean"
          },
          "asciiBibTeX": {
            "type": "boolean"
          },
          "bibtexParticleNoOp": {
            "type": "boolean"
          },
          "bibtexURL": {
            "enum": [
              "off",
              "note",
              "note-url-ish",
              "url",
              "url-ish"
            ]
          },
          "DOIandURL": {
            "enum": [
              "both",
              "doi",
              "url"
            ]
          },
          "metadata": {
            "type": "object"
          },
          "meta": {
            "type": "object"
          },
          "$loki": {
            "type": "integer"
          }
        },
        "required": [
          "itemID",
          "exportNotes",
          "useJournalAbbreviation",
          "asciiBibTeX",
          "bibtexParticleNoOp",
          "bibtexURL",
          "DOIandURL",
          "entry"
        ]
      },
      "preferences": [
        "asciiBibTeX",
        "bibtexParticleNoOp",
        "bibtexURL",
        "DOIandURL"
      ],
      "displayOptions": [
        "exportNotes",
        "useJournalAbbreviation"
      ]
    },
    "Better CSL JSON": {
      "autoexport": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "enum": [
              "collection",
              "library"
            ]
          },
          "id": {
            "type": "integer"
          },
          "path": {
            "type": "string",
            "minLength": 1
          },
          "status": {
            "enum": [
              "scheduled",
              "running",
              "done",
              "error"
            ]
          },
          "translatorID": {
            "const": "f4b52ab0-f878-4556-85a0-c7aeedd09dfc"
          },
          "exportNotes": {
            "type": "boolean"
          },
          "useJournalAbbreviation": {
            "type": "boolean"
          },
          "error": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          },
          "meta": {
            "type": "object"
          },
          "$loki": {
            "type": "integer"
          }
        },
        "required": [
          "type",
          "id",
          "path",
          "status",
          "translatorID"
        ]
      },
      "cache": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "itemID": {
            "type": "integer"
          },
          "entry": {
            "type": "string"
          },
          "exportNotes": {
            "type": "boolean"
          },
          "useJournalAbbreviation": {
            "type": "boolean"
          },
          "metadata": {
            "type": "object"
          },
          "meta": {
            "type": "object"
          },
          "$loki": {
            "type": "integer"
          }
        },
        "required": [
          "itemID",
          "exportNotes",
          "useJournalAbbreviation",
          "entry"
        ]
      },
      "preferences": [],
      "displayOptions": []
    },
    "Better CSL YAML": {
      "autoexport": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "enum": [
              "collection",
              "library"
            ]
          },
          "id": {
            "type": "integer"
          },
          "path": {
            "type": "string",
            "minLength": 1
          },
          "status": {
            "enum": [
              "scheduled",
              "running",
              "done",
              "error"
            ]
          },
          "translatorID": {
            "const": "0f238e69-043e-4882-93bf-342de007de19"
          },
          "exportNotes": {
            "type": "boolean"
          },
          "useJournalAbbreviation": {
            "type": "boolean"
          },
          "error": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          },
          "meta": {
            "type": "object"
          },
          "$loki": {
            "type": "integer"
          }
        },
        "required": [
          "type",
          "id",
          "path",
          "status",
          "translatorID"
        ]
      },
      "cache": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "itemID": {
            "type": "integer"
          },
          "entry": {
            "type": "string"
          },
          "exportNotes": {
            "type": "boolean"
          },
          "useJournalAbbreviation": {
            "type": "boolean"
          },
          "metadata": {
            "type": "object"
          },
          "meta": {
            "type": "object"
          },
          "$loki": {
            "type": "integer"
          }
        },
        "required": [
          "itemID",
          "exportNotes",
          "useJournalAbbreviation",
          "entry"
        ]
      },
      "preferences": [],
      "displayOptions": []
    },
    "BetterBibTeX JSON": {
      "autoexport": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "enum": [
              "collection",
              "library"
            ]
          },
          "id": {
            "type": "integer"
          },
          "path": {
            "type": "string",
            "minLength": 1
          },
          "status": {
            "enum": [
              "scheduled",
              "running",
              "done",
              "error"
            ]
          },
          "translatorID": {
            "const": "36a3b0b5-bad0-4a04-b79b-441c7cef77db"
          },
          "exportNotes": {
            "type": "boolean"
          },
          "useJournalAbbreviation": {
            "type": "boolean"
          },
          "error": {
            "type": "string"
          },
          "recursive": {
            "type": "boolean"
          },
          "meta": {
            "type": "object"
          },
          "$loki": {
            "type": "integer"
          }
        },
        "required": [
          "type",
          "id",
          "path",
          "status",
          "translatorID",
          "exportNotes"
        ]
      },
      "cache": false,
      "preferences": [],
      "displayOptions": [
        "exportNotes"
      ]
    }
  }
}
