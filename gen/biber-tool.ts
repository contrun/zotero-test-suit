/* eslint-disable quote-props, @typescript-eslint/quotes, @typescript-eslint/indent, comma-dangle, prefer-arrow/prefer-arrow-functions, object-shorthand, max-len */

import { qualityReport as qr } from '../content/bibertool-qr-check'

const fieldSet = {
  'optional': new Set([
    'abstract',
    'annotation',
    'authortype',
    'bookpagination',
    'crossref',
    'date',
    'doi',
    'eprint',
    'eprintclass',
    'eprinttype',
    'entryset',
    'entrysubtype',
    'execute',
    'file',
    'gender',
    'ids',
    'indextitle',
    'indexsorttitle',
    'isan',
    'ismn',
    'iswc',
    'keywords',
    'label',
    'langid',
    'langidopts',
    'library',
    'lista',
    'listb',
    'listc',
    'listd',
    'liste',
    'listf',
    'month',
    'namea',
    'nameb',
    'namec',
    'nameatype',
    'namebtype',
    'namectype',
    'nameaddon',
    'options',
    'origdate',
    'origlocation',
    'origpublisher',
    'origtitle',
    'pagination',
    'presort',
    'related',
    'relatedoptions',
    'relatedstring',
    'relatedtype',
    'shortauthor',
    'shorteditor',
    'shorthand',
    'shorthandintro',
    'shortjournal',
    'shortseries',
    'shorttitle',
    'sortkey',
    'sortname',
    'sortshorthand',
    'sorttitle',
    'sortyear',
    'url',
    'urldate',
    'usera',
    'userb',
    'userc',
    'userd',
    'usere',
    'userf',
    'verba',
    'verbb',
    'verbc',
    'xdata',
    'xref',
    'year'
  ]),
  'optional_set': new Set([
    'entryset'
  ]),
  'optional_article': new Set([
    'addendum',
    'annotator',
    'author',
    'commentator',
    'editor',
    'editora',
    'editorb',
    'editorc',
    'editortype',
    'editoratype',
    'editorbtype',
    'editorctype',
    'eid',
    'issn',
    'issue',
    'issuetitle',
    'issuesubtitle',
    'issuetitleaddon',
    'journalsubtitle',
    'journaltitle',
    'journaltitleaddon',
    'language',
    'note',
    'number',
    'origlanguage',
    'pages',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'translator',
    'version',
    'volume'
  ]),
  'optional_bibnote': new Set([
    'note'
  ]),
  'optional_book': new Set([
    'author',
    'addendum',
    'afterword',
    'annotator',
    'chapter',
    'commentator',
    'edition',
    'editor',
    'editora',
    'editorb',
    'editorc',
    'editortype',
    'editoratype',
    'editorbtype',
    'editorctype',
    'eid',
    'foreword',
    'introduction',
    'isbn',
    'language',
    'location',
    'maintitle',
    'maintitleaddon',
    'mainsubtitle',
    'note',
    'number',
    'origlanguage',
    'pages',
    'pagetotal',
    'part',
    'publisher',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'translator',
    'volume',
    'volumes'
  ]),
  'optional_mvbook': new Set([
    'addendum',
    'afterword',
    'annotator',
    'author',
    'commentator',
    'edition',
    'editor',
    'editora',
    'editorb',
    'editorc',
    'editortype',
    'editoratype',
    'editorbtype',
    'editorctype',
    'foreword',
    'introduction',
    'isbn',
    'language',
    'location',
    'note',
    'number',
    'origlanguage',
    'pagetotal',
    'publisher',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'translator',
    'volume',
    'volumes'
  ]),
  'optional_bookinbook_inbook_suppbook': new Set([
    'addendum',
    'afterword',
    'annotator',
    'author',
    'booktitle',
    'bookauthor',
    'booksubtitle',
    'booktitleaddon',
    'chapter',
    'commentator',
    'edition',
    'editor',
    'editora',
    'editorb',
    'editorc',
    'editortype',
    'editoratype',
    'editorbtype',
    'editorctype',
    'eid',
    'foreword',
    'introduction',
    'isbn',
    'language',
    'location',
    'mainsubtitle',
    'maintitle',
    'maintitleaddon',
    'note',
    'number',
    'origlanguage',
    'part',
    'publisher',
    'pages',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'translator',
    'volume',
    'volumes'
  ]),
  'optional_booklet': new Set([
    'addendum',
    'author',
    'chapter',
    'editor',
    'editortype',
    'eid',
    'howpublished',
    'language',
    'location',
    'note',
    'pages',
    'pagetotal',
    'pubstate',
    'subtitle',
    'title',
    'titleaddon',
    'type'
  ]),
  'optional_collection_reference': new Set([
    'addendum',
    'afterword',
    'annotator',
    'chapter',
    'commentator',
    'edition',
    'editor',
    'editora',
    'editorb',
    'editorc',
    'editortype',
    'editoratype',
    'editorbtype',
    'editorctype',
    'eid',
    'foreword',
    'introduction',
    'isbn',
    'language',
    'location',
    'mainsubtitle',
    'maintitle',
    'maintitleaddon',
    'note',
    'number',
    'origlanguage',
    'pages',
    'pagetotal',
    'part',
    'publisher',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'translator',
    'volume',
    'volumes'
  ]),
  'optional_mvcollection_mvreference': new Set([
    'addendum',
    'afterword',
    'annotator',
    'author',
    'commentator',
    'edition',
    'editor',
    'editora',
    'editorb',
    'editorc',
    'editortype',
    'editoratype',
    'editorbtype',
    'editorctype',
    'foreword',
    'introduction',
    'isbn',
    'language',
    'location',
    'note',
    'number',
    'origlanguage',
    'publisher',
    'pubstate',
    'subtitle',
    'title',
    'titleaddon',
    'translator',
    'volume',
    'volumes'
  ]),
  'optional_incollection_inreference_suppcollection': new Set([
    'addendum',
    'afterword',
    'annotator',
    'author',
    'booksubtitle',
    'booktitle',
    'booktitleaddon',
    'chapter',
    'commentator',
    'edition',
    'editor',
    'editora',
    'editorb',
    'editorc',
    'editortype',
    'editoratype',
    'editorbtype',
    'editorctype',
    'eid',
    'foreword',
    'introduction',
    'isbn',
    'language',
    'location',
    'mainsubtitle',
    'maintitle',
    'maintitleaddon',
    'note',
    'number',
    'origlanguage',
    'pages',
    'part',
    'publisher',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'translator',
    'volume',
    'volumes'
  ]),
  'optional_dataset': new Set([
    'addendum',
    'author',
    'edition',
    'editor',
    'editortype',
    'language',
    'location',
    'note',
    'number',
    'organization',
    'publisher',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'type',
    'version'
  ]),
  'optional_manual': new Set([
    'addendum',
    'author',
    'chapter',
    'edition',
    'editor',
    'editortype',
    'eid',
    'isbn',
    'language',
    'location',
    'note',
    'number',
    'organization',
    'pages',
    'pagetotal',
    'publisher',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'type',
    'version'
  ]),
  'optional_misc_software': new Set([
    'addendum',
    'author',
    'editor',
    'editortype',
    'howpublished',
    'language',
    'location',
    'note',
    'organization',
    'pubstate',
    'subtitle',
    'title',
    'titleaddon',
    'type',
    'version'
  ]),
  'optional_online': new Set([
    'addendum',
    'author',
    'editor',
    'editortype',
    'language',
    'note',
    'organization',
    'pubstate',
    'subtitle',
    'title',
    'titleaddon',
    'version'
  ]),
  'optional_patent': new Set([
    'addendum',
    'author',
    'holder',
    'location',
    'note',
    'number',
    'pubstate',
    'subtitle',
    'title',
    'titleaddon',
    'type',
    'version'
  ]),
  'optional_periodical': new Set([
    'addendum',
    'editor',
    'editora',
    'editorb',
    'editorc',
    'editortype',
    'editoratype',
    'editorbtype',
    'editorctype',
    'issn',
    'issue',
    'issuesubtitle',
    'issuetitle',
    'issuetitleaddon',
    'language',
    'note',
    'number',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'volume',
    'date'
  ]),
  'optional_mvproceedings': new Set([
    'addendum',
    'editor',
    'editortype',
    'eventdate',
    'eventtitle',
    'eventtitleaddon',
    'isbn',
    'language',
    'location',
    'note',
    'number',
    'organization',
    'pagetotal',
    'publisher',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'venue',
    'volumes'
  ]),
  'optional_proceedings': new Set([
    'addendum',
    'chapter',
    'editor',
    'editortype',
    'eid',
    'eventdate',
    'eventtitle',
    'eventtitleaddon',
    'isbn',
    'language',
    'location',
    'mainsubtitle',
    'maintitle',
    'maintitleaddon',
    'note',
    'number',
    'organization',
    'pages',
    'pagetotal',
    'part',
    'publisher',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'venue',
    'volume',
    'volumes'
  ]),
  'optional_inproceedings': new Set([
    'addendum',
    'author',
    'booksubtitle',
    'booktitle',
    'booktitleaddon',
    'chapter',
    'editor',
    'editortype',
    'eid',
    'eventdate',
    'eventtitle',
    'eventtitleaddon',
    'isbn',
    'language',
    'location',
    'mainsubtitle',
    'maintitle',
    'maintitleaddon',
    'note',
    'number',
    'organization',
    'pages',
    'part',
    'publisher',
    'pubstate',
    'series',
    'subtitle',
    'title',
    'titleaddon',
    'venue',
    'volume',
    'volumes'
  ]),
  'optional_report': new Set([
    'addendum',
    'author',
    'chapter',
    'eid',
    'institution',
    'isrn',
    'language',
    'location',
    'note',
    'number',
    'pages',
    'pagetotal',
    'pubstate',
    'subtitle',
    'title',
    'titleaddon',
    'type',
    'version'
  ]),
  'optional_thesis': new Set([
    'addendum',
    'author',
    'chapter',
    'eid',
    'institution',
    'language',
    'location',
    'note',
    'pages',
    'pagetotal',
    'pubstate',
    'subtitle',
    'title',
    'titleaddon',
    'type'
  ]),
  'optional_unpublished': new Set([
    'addendum',
    'author',
    'eventdate',
    'eventtitle',
    'eventtitleaddon',
    'howpublished',
    'language',
    'location',
    'note',
    'pubstate',
    'subtitle',
    'title',
    'titleaddon',
    'type',
    'venue'
  ])
}
const allowed = {
  article: [
      fieldSet.optional,
      fieldSet.optional_article,
  ],
  artwork: [
      fieldSet.optional,
  ],
  audio: [
      fieldSet.optional,
  ],
  bibnote: [
      fieldSet.optional,
      fieldSet.optional_bibnote,
  ],
  book: [
      fieldSet.optional,
      fieldSet.optional_book,
  ],
  bookinbook: [
      fieldSet.optional,
      fieldSet.optional_bookinbook_inbook_suppbook,
  ],
  booklet: [
      fieldSet.optional,
      fieldSet.optional_booklet,
  ],
  collection: [
      fieldSet.optional,
      fieldSet.optional_collection_reference,
  ],
  commentary: [
      fieldSet.optional,
  ],
  customa: [
      fieldSet.optional,
  ],
  customb: [
      fieldSet.optional,
  ],
  customc: [
      fieldSet.optional,
  ],
  customd: [
      fieldSet.optional,
  ],
  custome: [
      fieldSet.optional,
  ],
  customf: [
      fieldSet.optional,
  ],
  dataset: [
      fieldSet.optional,
      fieldSet.optional_dataset,
  ],
  inbook: [
      fieldSet.optional,
      fieldSet.optional_bookinbook_inbook_suppbook,
  ],
  incollection: [
      fieldSet.optional,
      fieldSet.optional_incollection_inreference_suppcollection,
  ],
  inproceedings: [
      fieldSet.optional,
      fieldSet.optional_inproceedings,
  ],
  inreference: [
      fieldSet.optional,
      fieldSet.optional_incollection_inreference_suppcollection,
  ],
  image: [
      fieldSet.optional,
  ],
  jurisdiction: [
      fieldSet.optional,
  ],
  legal: [
      fieldSet.optional,
  ],
  legislation: [
      fieldSet.optional,
  ],
  letter: [
      fieldSet.optional,
  ],
  manual: [
      fieldSet.optional,
      fieldSet.optional_manual,
  ],
  misc: [
      fieldSet.optional,
      fieldSet.optional_misc_software,
  ],
  movie: [
      fieldSet.optional,
  ],
  music: [
      fieldSet.optional,
  ],
  mvcollection: [
      fieldSet.optional,
      fieldSet.optional_mvcollection_mvreference,
  ],
  mvreference: [
      fieldSet.optional,
      fieldSet.optional_mvcollection_mvreference,
  ],
  mvproceedings: [
      fieldSet.optional,
      fieldSet.optional_mvproceedings,
  ],
  mvbook: [
      fieldSet.optional,
      fieldSet.optional_mvbook,
  ],
  online: [
      fieldSet.optional,
      fieldSet.optional_online,
  ],
  patent: [
      fieldSet.optional,
      fieldSet.optional_patent,
  ],
  performance: [
      fieldSet.optional,
  ],
  periodical: [
      fieldSet.optional,
      fieldSet.optional_periodical,
  ],
  proceedings: [
      fieldSet.optional,
      fieldSet.optional_proceedings,
  ],
  reference: [
      fieldSet.optional,
      fieldSet.optional_collection_reference,
  ],
  report: [
      fieldSet.optional,
      fieldSet.optional_report,
  ],
  review: [
      fieldSet.optional,
  ],
  set: [
      fieldSet.optional,
      fieldSet.optional_set,
  ],
  software: [
      fieldSet.optional,
      fieldSet.optional_misc_software,
  ],
  standard: [
      fieldSet.optional,
  ],
  suppbook: [
      fieldSet.optional,
      fieldSet.optional_bookinbook_inbook_suppbook,
  ],
  suppcollection: [
      fieldSet.optional,
      fieldSet.optional_incollection_inreference_suppcollection,
  ],
  suppperiodical: [
      fieldSet.optional,
  ],
  thesis: [
      fieldSet.optional,
      fieldSet.optional_thesis,
  ],
  unpublished: [
      fieldSet.optional,
      fieldSet.optional_unpublished,
  ],
  video: [
      fieldSet.optional,
  ],
  xdata: [
      fieldSet.optional,
  ],
}
const required = [
    {
      types: new Set(["article","book","bookinbook","booklet","collection","inbook","incollection","inproceedings","inreference","manual","misc","mvbook","mvcollection","online","patent","periodical","proceedings","reference","report","set","suppbook","suppcollection","suppperiodical","thesis","unpublished"]),
      check: function(ref, report) {
            if (!ref.has.date === !ref.has.year) report.push("Exactly one of 'date' / 'year' must be present")
      }
    },
    {
      types: new Set(["set"]),
      check: function(ref, report) {
            if (!ref.has.entryset) report.push("Missing required field 'entryset'")
      }
    },
    {
      types: new Set(["article"]),
      check: function(ref, report) {
            if (!ref.has.author) report.push("Missing required field 'author'")
            if (!ref.has.journaltitle) report.push("Missing required field 'journaltitle'")
            if (!ref.has.title) report.push("Missing required field 'title'")
      }
    },
    {
      types: new Set(["book","mvbook"]),
      check: function(ref, report) {
            if (!ref.has.author) report.push("Missing required field 'author'")
            if (!ref.has.title) report.push("Missing required field 'title'")
      }
    },
    {
      types: new Set(["bookinbook","inbook","suppbook"]),
      check: function(ref, report) {
            if (!ref.has.author) report.push("Missing required field 'author'")
            if (!ref.has.title) report.push("Missing required field 'title'")
            if (!ref.has.booktitle) report.push("Missing required field 'booktitle'")
      }
    },
    {
      types: new Set(["booklet"]),
      check: function(ref, report) {
            if (!(ref.has.author || ref.has.editor)) report.push("At least one of 'author' / 'editor' must be present")
            if (!ref.has.title) report.push("Missing required field 'title'")
      }
    },
    {
      types: new Set(["collection","mvcollection","mvreference","reference"]),
      check: function(ref, report) {
            if (!ref.has.editor) report.push("Missing required field 'editor'")
            if (!ref.has.title) report.push("Missing required field 'title'")
      }
    },
    {
      types: new Set(["incollection","inreference","suppcollection"]),
      check: function(ref, report) {
            if (!ref.has.author) report.push("Missing required field 'author'")
            if (!ref.has.editor) report.push("Missing required field 'editor'")
            if (!ref.has.title) report.push("Missing required field 'title'")
            if (!ref.has.booktitle) report.push("Missing required field 'booktitle'")
      }
    },
    {
      types: new Set(["dataset"]),
      check: function(ref, report) {
            if (!ref.has.title) report.push("Missing required field 'title'")
      }
    },
    {
      types: new Set(["manual"]),
      check: function(ref, report) {
            if (!ref.has.title) report.push("Missing required field 'title'")
      }
    },
    {
      types: new Set(["misc","software"]),
      check: function(ref, report) {
            if (!ref.has.title) report.push("Missing required field 'title'")
      }
    },
    {
      types: new Set(["online"]),
      check: function(ref, report) {
            if (!ref.has.title) report.push("Missing required field 'title'")
            if (!(ref.has.url || ref.has.doi || ref.has.eprint)) report.push("At least one of 'url' / 'doi' / 'eprint' must be present")
      }
    },
    {
      types: new Set(["patent"]),
      check: function(ref, report) {
            if (!ref.has.author) report.push("Missing required field 'author'")
            if (!ref.has.title) report.push("Missing required field 'title'")
            if (!ref.has.number) report.push("Missing required field 'number'")
      }
    },
    {
      types: new Set(["periodical"]),
      check: function(ref, report) {
            if (!ref.has.editor) report.push("Missing required field 'editor'")
            if (!ref.has.title) report.push("Missing required field 'title'")
      }
    },
    {
      types: new Set(["mvproceedings","proceedings"]),
      check: function(ref, report) {
            if (!ref.has.title) report.push("Missing required field 'title'")
      }
    },
    {
      types: new Set(["inproceedings"]),
      check: function(ref, report) {
            if (!ref.has.author) report.push("Missing required field 'author'")
            if (!ref.has.title) report.push("Missing required field 'title'")
            if (!ref.has.booktitle) report.push("Missing required field 'booktitle'")
      }
    },
    {
      types: new Set(["report"]),
      check: function(ref, report) {
            if (!ref.has.author) report.push("Missing required field 'author'")
            if (!ref.has.title) report.push("Missing required field 'title'")
            if (!ref.has.type) report.push("Missing required field 'type'")
            if (!ref.has.institution) report.push("Missing required field 'institution'")
      }
    },
    {
      types: new Set(["thesis"]),
      check: function(ref, report) {
            if (!ref.has.author) report.push("Missing required field 'author'")
            if (!ref.has.title) report.push("Missing required field 'title'")
            if (!ref.has.type) report.push("Missing required field 'type'")
            if (!ref.has.institution) report.push("Missing required field 'institution'")
      }
    },
    {
      types: new Set(["unpublished"]),
      check: function(ref, report) {
            if (!ref.has.author) report.push("Missing required field 'author'")
            if (!ref.has.title) report.push("Missing required field 'title'")
      }
    },
]

export function qualityReport(explanation: Record<string, string>): string[] {
  const type = this.entrytype.toLowerCase()

  if (!allowed[type]) return

  const unexpected: string[] = Object.keys(this.has).filter((field: string) => !allowed[type].find((set: Set<string>) => set.has(field)))
  const report: string[] = unexpected.map(field => "Unexpected field '" + field + "'" + (explanation[field] ? (' (' + explanation[field] + ')'): ''))

  for (const test of required) {
    if (test.types.has(type)) test.check(this, report)
  }

    for (const field of ["isbn"]) {
      if (this.has[field]) {
        const warning = qr(this.has[field].value, "isbn", null)
        if (warning) report.push("'" + field + "': " + warning)
      }
    }
    for (const field of ["issn"]) {
      if (this.has[field]) {
        const warning = qr(this.has[field].value, "issn", null)
        if (warning) report.push("'" + field + "': " + warning)
      }
    }
    for (const field of ["ismn"]) {
      if (this.has[field]) {
        const warning = qr(this.has[field].value, "ismn", null)
        if (warning) report.push("'" + field + "': " + warning)
      }
    }
    for (const field of ["gender"]) {
      if (this.has[field]) {
        const warning = qr(this.has[field].value, "pattern", "(?:sf|sm|sn|pf|pm|pn|pp)")
        if (warning) report.push("'" + field + "': " + warning)
      }
    }

  return report
}
