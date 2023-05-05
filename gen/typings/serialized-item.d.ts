import { Fields } from '../../content/extra'
import type { arXiv } from '../../content/arXiv'

export interface Collection {
  // id?: string
  key: string
  name: string
  // collections: string[] | ZoteroCollection[]
  collections: string[]
  items: number[]
  parent?: string
}

export interface Tag { tag: string, type?: number }
export interface Creator { creatorType: string, name?: string, firstName?: string, lastName?:string, fieldMode?: number, source?: string }

interface ItemBase {
  itemKey: string
  itemID: number
  libraryID: number
  uri: string
  dateAdded: string
  dateModified: string
}

export interface Note extends ItemBase {
  itemType: 'note' | 'annotation'

  note: string
}

export interface Attachment extends ItemBase {
  itemType: 'attachment'

  path: string
  title?: string
  mimeType?: string
  localPath?: string
  defaultPath?: string
  relations: { 'dc:relation': string[] }

  saveFile(path: string, overwrite: boolean): void
}

export interface RegularItem extends ItemBase {
  itemType: 'artwork' | 'audioRecording' | 'bill' | 'blogPost' | 'book' | 'bookSection' | 'case' | 'classic' | 'computerProgram' | 'conferencePaper' | 'dataset' | 'dictionaryEntry' | 'document' | 'email' | 'encyclopediaArticle' | 'film' | 'forumPost' | 'gazette' | 'hearing' | 'instantMessage' | 'interview' | 'journalArticle' | 'legalCommentary' | 'letter' | 'magazineArticle' | 'manuscript' | 'map' | 'newspaperArticle' | 'patent' | 'podcast' | 'preprint' | 'presentation' | 'radioBroadcast' | 'regulation' | 'report' | 'standard' | 'statute' | 'thesis' | 'treaty' | 'tvBroadcast' | 'videoRecording' | 'webpage'
  citationKey: string

  // fields common to all items
  creators: Array<Creator>
  tags: Array<Tag>
  notes: Array<Note>
  attachments: Array<Attachment>

  raw: boolean
  autoJournalAbbreviation?: string
  $cacheable?: boolean
  $unused?: Set<string>

  DOI: string
  ISBN: string
  ISSN: string
  abstractNote: string
  accessDate: string
  adminFlag: string
  adoptionDate: string
  applicationNumber: string
  archive: string
  archiveCollection: string
  archiveLocation: string
  artworkSize: string
  assignee: string
  authority: string
  callNumber: string
  citationKey: string
  code: string
  codeNumber: string
  committee: string
  conferenceDate: string
  conferenceName: string
  country: string
  court: string
  date: string
  dateAmended: string
  division: string
  documentName: string
  documentNumber: string
  edition: string
  extra: string
  filingDate: string
  gazetteFlag: string
  history: string
  institution: string
  issue: string
  issuingAuthority: string
  journalAbbreviation: string
  jurisdiction: string
  language: string
  legalStatus: string
  legislativeBody: string
  libraryCatalog: string
  medium: string
  meetingName: string
  meetingNumber: string
  newsCaseDate: string
  numPages: string
  number: string
  numberOfVolumes: string
  openingDate: string
  opus: string
  originalDate: string
  pages: string
  parentTreaty: string
  place: string
  priorityDate: string
  priorityNumbers: string
  programmingLanguage: string
  publicationDate: string
  publicationNumber: string
  publicationTitle: string
  publisher: string
  references: string
  regnalYear: string
  reign: string
  reporter: string
  resolutionLabel: string
  rights: string
  runningTime: string
  scale: string
  section: string
  series: string
  seriesNumber: string
  seriesText: string
  seriesTitle: string
  session: string
  shortTitle: string
  signingDate: string
  status: string
  supplementName: string
  system: string
  title: string
  type: string
  url: string
  versionNumber: string
  volume: string
  volumeTitle: string
  yearAsVolume: string

  relations: { 'dc:relation': string[] }
  cslType: string
  cslVolumeTitle: string
  collections: string[]
  extraFields: Fields
  arXiv: arXiv,

  multi?: {
    _keys: {
      title: Record<string, string>
    }
    main: {
      title: string
    }
  }
}

export type Item = RegularItem | Note | Attachment
