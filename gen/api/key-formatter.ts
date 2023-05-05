/* eslint-disable quote-props, comma-dangle, no-magic-numbers */
export const methods = {
  '$text': {
    'name': '$text',
    'parameters': [
      'text'
    ],
    'defaults': [
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'text': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': [
        'text'
      ]
    }
  },
  '$type': {
    'name': '$type',
    'parameters': [
      'allowed'
    ],
    'defaults': [
      undefined
    ],
    'rest': 'allowed',
    'schema': {
      'type': 'object',
      'properties': {
        'allowed': {
          'type': 'array',
          'items': {
            'type': 'string',
            'enum': [
              'artwork',
              'audioRecording',
              'bill',
              'blogPost',
              'book',
              'bookSection',
              'case',
              'classic',
              'computerProgram',
              'conferencePaper',
              'dataset',
              'dictionaryEntry',
              'document',
              'email',
              'encyclopediaArticle',
              'film',
              'forumPost',
              'gazette',
              'hearing',
              'instantMessage',
              'interview',
              'journalArticle',
              'legalCommentary',
              'letter',
              'magazineArticle',
              'manuscript',
              'map',
              'newspaperArticle',
              'patent',
              'podcast',
              'preprint',
              'presentation',
              'radioBroadcast',
              'regulation',
              'report',
              'standard',
              'statute',
              'thesis',
              'treaty',
              'tvBroadcast',
              'videoRecording',
              'webpage'
            ]
          }
        }
      },
      'additionalProperties': false,
      'required': [
        'allowed'
      ]
    }
  },
  '$language': {
    'name': '$language',
    'parameters': [
      'name'
    ],
    'defaults': [
      undefined
    ],
    'rest': 'name',
    'schema': {
      'type': 'object',
      'properties': {
        'name': {
          'type': 'array',
          'items': {
            'type': 'string',
            'enum': [
              'ame',
              'american',
              'american english',
              'americanenglish',
              'ar',
              'ar-ar',
              'ar-dz',
              'ar-eg',
              'ar-iq',
              'ar-jo',
              'ar-lb',
              'ar-ma',
              'ar-ps',
              'ar-sa',
              'ar-sy',
              'ar-tn',
              'ara',
              'arabic',
              'arabic-algeria',
              'arabic-dz',
              'arabic-eg',
              'arabic-egypt',
              'arabic-iq',
              'arabic-iraq',
              'arabic-jo',
              'arabic-jordan',
              'arabic-lb',
              'arabic-lebanon',
              'arabic-ma',
              'arabic-morocco',
              'arabic-palestinianterritories',
              'arabic-ps',
              'arabic-sa',
              'arabic-saudiarabia',
              'arabic-sy',
              'arabic-syria',
              'arabic-tn',
              'arabic-tunisia',
              'australian',
              'australian english',
              'australianenglish',
              'austrian',
              'austrian german',
              'austrian-traditional',
              'austriangerman',
              'austriangerman-traditional',
              'bri',
              'british',
              'british english',
              'britishenglish',
              'canadian',
              'canadian english',
              'canadianenglish',
              'chinese',
              'chinese-hans',
              'chinese-hans-hk',
              'chinese-hans-mo',
              'chinese-hans-sg',
              'chinese-hant',
              'chinese-hant-hk',
              'chinese-hant-mo',
              'chinese-simplified',
              'chinese-simplified-hongkongsarchina',
              'chinese-simplified-macausarchina',
              'chinese-simplified-singapore',
              'chinese-traditional',
              'chinese-traditional-hongkongsarchina',
              'chinese-traditional-macausarchina',
              'de',
              'de-1901',
              'de-1996',
              'de-at',
              'de-at-1901',
              'de-at-1996',
              'de-ch',
              'de-ch-1901',
              'de-ch-1996',
              'de-de',
              'deutsch',
              'en',
              'en-au',
              'en-ca',
              'en-en',
              'en-gb',
              'en-nz',
              'en-us',
              'eng',
              'english',
              'english-au',
              'english-australia',
              'english-ca',
              'english-canada',
              'english-gb',
              'english-newzealand',
              'english-nz',
              'english-unitedkingdom',
              'english-unitedstates',
              'english-us',
              'ger',
              'german',
              'german-at',
              'german-at-traditional',
              'german-austria',
              'german-austria-traditional',
              'german-ch',
              'german-ch-traditional',
              'german-switzerland',
              'german-switzerland-traditional',
              'german-traditional',
              'ja',
              'ja-ja',
              'jap',
              'japanese',
              'nau',
              'naustrian',
              'new',
              'newzealand',
              'nge',
              'ngerman',
              'nsw',
              'nswissgerman',
              'schweizer hochdeutsch',
              'swiss high german',
              'swisshighgerman',
              'swisshighgerman-traditional',
              'tw',
              'ukenglish',
              'usenglish',
              'zh',
              'zh-hans',
              'zh-hans-hk',
              'zh-hans-mo',
              'zh-hans-sg',
              'zh-hant',
              'zh-hant-hk',
              'zh-hant-mo',
              'zh-tw',
              'zh-zh',
              '\xF6sterreichisches deutsch',
              '\u0627\u0644\u0639\u0631\u0628\u064A\u0629',
              '\u4E2D\u6587',
              '\u65E5\u672C\u8A9E'
            ]
          }
        }
      },
      'additionalProperties': false,
      'required': [
        'name'
      ]
    }
  },
  '$zotero': {
    'name': '$zotero',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$item': {
    'name': '$item',
    'parameters': [
      'id'
    ],
    'defaults': [
      'key'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'id': {
          'type': 'string',
          'enum': [
            'id',
            'key'
          ]
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$inspirehep': {
    'name': '$inspireHep',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$getfield': {
    'name': '$getField',
    'parameters': [
      'name'
    ],
    'defaults': [
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'name': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': [
        'name'
      ]
    }
  },
  '$library': {
    'name': '$library',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$authors': {
    'name': '$authors',
    'parameters': [
      'n',
      'creator',
      'name',
      'etal',
      'sep',
      'min',
      'max'
    ],
    'defaults': [
      0,
      '*',
      '%(f)s',
      '',
      ' ',
      0,
      0
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'n': {
          'anyOf': [
            {
              'type': 'number'
            },
            {
              'type': 'array',
              'prefixItems': [
                {
                  'type': 'number'
                },
                {
                  'type': 'number'
                }
              ],
              'items': false,
              'minItems': 2,
              'maxItems': 2
            }
          ]
        },
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        },
        'name': {
          'type': 'string'
        },
        'etal': {
          'type': 'string'
        },
        'sep': {
          'type': 'string'
        },
        'min': {
          'type': 'number'
        },
        'max': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$auth': {
    'name': '$auth',
    'parameters': [
      'n',
      'm',
      'creator',
      'initials'
    ],
    'defaults': [
      0,
      1,
      '*',
      false
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'n': {
          'type': 'number'
        },
        'm': {
          'type': 'number'
        },
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        },
        'initials': {
          'type': 'boolean'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$authforeini': {
    'name': '$authForeIni',
    'parameters': [
      'creator'
    ],
    'defaults': [
      '*'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$authorlastforeini': {
    'name': '$authorLastForeIni',
    'parameters': [
      'creator'
    ],
    'defaults': [
      '*'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$authorlast': {
    'name': '$authorLast',
    'parameters': [
      'creator',
      'initials'
    ],
    'defaults': [
      '*',
      false
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        },
        'initials': {
          'type': 'boolean'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$authorsalpha': {
    'name': '$authorsAlpha',
    'parameters': [
      'creator',
      'initials',
      'sep'
    ],
    'defaults': [
      '*',
      false,
      ' '
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        },
        'initials': {
          'type': 'boolean'
        },
        'sep': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$authini': {
    'name': '$authIni',
    'parameters': [
      'n',
      'creator',
      'initials',
      'sep'
    ],
    'defaults': [
      0,
      '*',
      false,
      '.'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'n': {
          'type': 'number'
        },
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        },
        'initials': {
          'type': 'boolean'
        },
        'sep': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$authorini': {
    'name': '$authorIni',
    'parameters': [
      'creator',
      'initials',
      'sep'
    ],
    'defaults': [
      '*',
      false,
      '.'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        },
        'initials': {
          'type': 'boolean'
        },
        'sep': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$authauthea': {
    'name': '$authAuthEa',
    'parameters': [
      'creator',
      'initials',
      'sep'
    ],
    'defaults': [
      '*',
      false,
      '.'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        },
        'initials': {
          'type': 'boolean'
        },
        'sep': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$authetal': {
    'name': '$authEtAl',
    'parameters': [
      'creator',
      'initials',
      'sep'
    ],
    'defaults': [
      '*',
      false,
      ' '
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        },
        'initials': {
          'type': 'boolean'
        },
        'sep': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$authetal2': {
    'name': '$authEtal2',
    'parameters': [
      'creator',
      'initials',
      'sep'
    ],
    'defaults': [
      '*',
      false,
      '.'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        },
        'initials': {
          'type': 'boolean'
        },
        'sep': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$authshort': {
    'name': '$authshort',
    'parameters': [
      'creator',
      'initials',
      'sep'
    ],
    'defaults': [
      '*',
      false,
      '.'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'creator': {
          'type': 'string',
          'enum': [
            'author',
            'editor',
            'translator',
            'collaborator',
            '*'
          ]
        },
        'initials': {
          'type': 'boolean'
        },
        'sep': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$journal': {
    'name': '$journal',
    'parameters': [
      'abbrev'
    ],
    'defaults': [
      'abbrev+auto'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'abbrev': {
          'type': 'string',
          'enum': [
            'abbrev',
            'abbrev+auto',
            'auto',
            'off'
          ]
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$firstpage': {
    'name': '$firstpage',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$lastpage': {
    'name': '$lastpage',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$keyword': {
    'name': '$keyword',
    'parameters': [
      'n'
    ],
    'defaults': [
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'n': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': [
        'n'
      ]
    }
  },
  '$shorttitle': {
    'name': '$shorttitle',
    'parameters': [
      'n',
      'm'
    ],
    'defaults': [
      3,
      0
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'n': {
          'type': 'number'
        },
        'm': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$veryshorttitle': {
    'name': '$veryshorttitle',
    'parameters': [
      'n',
      'm'
    ],
    'defaults': [
      1,
      0
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'n': {
          'type': 'number'
        },
        'm': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$shortyear': {
    'name': '$shortyear',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$year': {
    'name': '$year',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$date': {
    'name': '$date',
    'parameters': [
      'format'
    ],
    'defaults': [
      '%Y-%m-%d'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'format': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$extra': {
    'name': '$extra',
    'parameters': [
      'variable'
    ],
    'defaults': [
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'variable': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': [
        'variable'
      ]
    }
  },
  '$origyear': {
    'name': '$origyear',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$origdate': {
    'name': '$origdate',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$month': {
    'name': '$month',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$title': {
    'name': '$title',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '$infix': {
    'name': '$infix',
    'parameters': [
      'format',
      'start'
    ],
    'defaults': [
      '%(a)s',
      0
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'format': {
          'type': 'string'
        },
        'start': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$postfix': {
    'name': '$postfix',
    'parameters': [
      'format',
      'start'
    ],
    'defaults': [
      '%(a)s',
      0
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'format': {
          'type': 'string'
        },
        'start': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '$len': {
    'name': '$len',
    'parameters': [
      'relation',
      'length'
    ],
    'defaults': [
      '>',
      0
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'relation': {
          'type': 'string',
          'enum': [
            '!=',
            '<',
            '<=',
            '=',
            '>',
            '>='
          ]
        },
        'length': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '_default': {
    'name': '_default',
    'parameters': [
      'text'
    ],
    'defaults': [
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'text': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': [
        'text'
      ]
    }
  },
  '_len': {
    'name': '_len',
    'parameters': [
      'relation',
      'length'
    ],
    'defaults': [
      '>',
      0
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'relation': {
          'type': 'string',
          'enum': [
            '!=',
            '<',
            '<=',
            '=',
            '>',
            '>='
          ]
        },
        'length': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '_match': {
    'name': '_match',
    'parameters': [
      'match',
      'clean'
    ],
    'defaults': [
      undefined,
      false
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'match': {
          'anyOf': [
            {
              'instanceof': 'RegExp'
            },
            {
              'type': 'string'
            }
          ]
        },
        'clean': {
          'type': 'boolean'
        }
      },
      'additionalProperties': false,
      'required': [
        'match'
      ]
    }
  },
  '_discard': {
    'name': '_discard',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_localtime': {
    'name': '_localTime',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_formatdate': {
    'name': '_formatDate',
    'parameters': [
      'format'
    ],
    'defaults': [
      '%Y-%m-%d'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'format': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '_numeric': {
    'name': '_numeric',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_replace': {
    'name': '_replace',
    'parameters': [
      'find',
      'replace'
    ],
    'defaults': [
      undefined,
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'find': {
          'anyOf': [
            {
              'type': 'string'
            },
            {
              'instanceof': 'RegExp'
            }
          ]
        },
        'replace': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': [
        'find',
        'replace'
      ]
    }
  },
  '_condense': {
    'name': '_condense',
    'parameters': [
      'sep'
    ],
    'defaults': [
      ''
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'sep': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '_prefix': {
    'name': '_prefix',
    'parameters': [
      'prefix'
    ],
    'defaults': [
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'prefix': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': [
        'prefix'
      ]
    }
  },
  '_postfix': {
    'name': '_postfix',
    'parameters': [
      'postfix'
    ],
    'defaults': [
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'postfix': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': [
        'postfix'
      ]
    }
  },
  '_abbr': {
    'name': '_abbr',
    'parameters': [
      'chars'
    ],
    'defaults': [
      1
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'chars': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '_acronym': {
    'name': '_acronym',
    'parameters': [
      'list'
    ],
    'defaults': [
      'acronyms'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'list': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '_lower': {
    'name': '_lower',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_upper': {
    'name': '_upper',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_skipwords': {
    'name': '_skipwords',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_select': {
    'name': '_select',
    'parameters': [
      'start',
      'n'
    ],
    'defaults': [
      1,
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'start': {
          'type': 'number'
        },
        'n': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '_substring': {
    'name': '_substring',
    'parameters': [
      'start',
      'n'
    ],
    'defaults': [
      1,
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'start': {
          'type': 'number'
        },
        'n': {
          'type': 'number'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '_ascii': {
    'name': '_ascii',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_alphanum': {
    'name': '_alphanum',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_capitalize': {
    'name': '_capitalize',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_nopunct': {
    'name': '_nopunct',
    'parameters': [
      'dash'
    ],
    'defaults': [
      '-'
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'dash': {
          'type': 'string'
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '_nopunctordash': {
    'name': '_nopunctordash',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_ideographs': {
    'name': '_ideographs',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_jieba': {
    'name': '_jieba',
    'parameters': [
      'mode'
    ],
    'defaults': [
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'mode': {
          'type': 'string',
          'enum': [
            'cn',
            'hant',
            'tw'
          ]
        }
      },
      'additionalProperties': false,
      'required': []
    }
  },
  '_kuromoji': {
    'name': '_kuromoji',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_clean': {
    'name': '_clean',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_pinyin': {
    'name': '_pinyin',
    'parameters': [],
    'defaults': [],
    'schema': {
      'type': 'object',
      'properties': {},
      'additionalProperties': false,
      'required': []
    }
  },
  '_transliterate': {
    'name': '_transliterate',
    'parameters': [
      'mode'
    ],
    'defaults': [
      undefined
    ],
    'schema': {
      'type': 'object',
      'properties': {
        'mode': {
          'type': 'string',
          'enum': [
            'ar',
            'arabic',
            'chinese',
            'de',
            'german',
            'ja',
            'japanese',
            'minimal',
            'mn',
            'mongolian',
            'ru',
            'russian',
            'tw',
            'uk',
            'ukranian',
            'zh',
            'zh-hant'
          ]
        }
      },
      'additionalProperties': false,
      'required': []
    }
  }
} as const
