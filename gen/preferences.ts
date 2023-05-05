/* eslint-disable no-magic-numbers, @typescript-eslint/quotes, max-len */

declare const Zotero: any

import { Preferences, names, defaults } from './preferences/meta'
import { fromEntries } from '../content/object'

export class PreferenceManager {
  public default = defaults
  public prefix = 'translators.better-bibtex.'

  set ascii(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.ascii) return
    if (typeof v !== 'string') throw new Error(`ascii must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.ascii', v)
  }
  get ascii(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.ascii') as string
    return typeof v === 'undefined' ? "" : v
  }

  set asciiBibLaTeX(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.asciiBibLaTeX) return
    if (typeof v !== 'boolean') throw new Error(`asciiBibLaTeX must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.asciiBibLaTeX', v)
  }
  get asciiBibLaTeX(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.asciiBibLaTeX') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set asciiBibTeX(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.asciiBibTeX) return
    if (typeof v !== 'boolean') throw new Error(`asciiBibTeX must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.asciiBibTeX', v)
  }
  get asciiBibTeX(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.asciiBibTeX') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set autoAbbrev(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.autoAbbrev) return
    if (typeof v !== 'boolean') throw new Error(`autoAbbrev must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.autoAbbrev', v)
  }
  get autoAbbrev(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.autoAbbrev') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set autoAbbrevStyle(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.autoAbbrevStyle) return
    if (typeof v !== 'string') throw new Error(`autoAbbrevStyle must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.autoAbbrevStyle', v)
  }
  get autoAbbrevStyle(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.autoAbbrevStyle') as string
    return typeof v === 'undefined' ? "" : v
  }

  set autoExport(v: "off" | "immediate" | "idle" | undefined) {
    if (typeof v === 'undefined') v = "immediate"
    if (v === this.autoExport) return
    if (!["off","immediate","idle"].includes(v)) throw new Error(`autoExport must be one of ["off","immediate","idle"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.autoExport', v)
  }
  get autoExport(): "off" | "immediate" | "idle" {
    const v: "off" | "immediate" | "idle" = Zotero.Prefs.get('translators.better-bibtex.autoExport') as "off" | "immediate" | "idle"
    return typeof v === 'undefined' ? "immediate" : v
  }

  set autoExportDelay(v: number | undefined) {
    if (typeof v === 'undefined') v = 5
    if (v === this.autoExportDelay) return
    if (typeof v !== 'number') throw new Error(`autoExportDelay must be of type number, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.autoExportDelay', v)
  }
  get autoExportDelay(): number {
    const v: number = Zotero.Prefs.get('translators.better-bibtex.autoExportDelay') as number
    return typeof v === 'undefined' ? 5 : v
  }

  set autoExportIdleWait(v: number | undefined) {
    if (typeof v === 'undefined') v = 10
    if (v === this.autoExportIdleWait) return
    if (typeof v !== 'number') throw new Error(`autoExportIdleWait must be of type number, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.autoExportIdleWait', v)
  }
  get autoExportIdleWait(): number {
    const v: number = Zotero.Prefs.get('translators.better-bibtex.autoExportIdleWait') as number
    return typeof v === 'undefined' ? 10 : v
  }

  set autoExportPathReplaceDiacritics(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.autoExportPathReplaceDiacritics) return
    if (typeof v !== 'boolean') throw new Error(`autoExportPathReplaceDiacritics must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.autoExportPathReplaceDiacritics', v)
  }
  get autoExportPathReplaceDiacritics(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.autoExportPathReplaceDiacritics') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set autoExportPathReplaceDirSep(v: string | undefined) {
    if (typeof v === 'undefined') v = "-"
    if (v === this.autoExportPathReplaceDirSep) return
    if (typeof v !== 'string') throw new Error(`autoExportPathReplaceDirSep must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.autoExportPathReplaceDirSep', v)
  }
  get autoExportPathReplaceDirSep(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.autoExportPathReplaceDirSep') as string
    return typeof v === 'undefined' ? "-" : v
  }

  set autoExportPathReplaceSpace(v: string | undefined) {
    if (typeof v === 'undefined') v = " "
    if (v === this.autoExportPathReplaceSpace) return
    if (typeof v !== 'string') throw new Error(`autoExportPathReplaceSpace must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.autoExportPathReplaceSpace', v)
  }
  get autoExportPathReplaceSpace(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.autoExportPathReplaceSpace') as string
    return typeof v === 'undefined' ? " " : v
  }

  set automaticTags(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.automaticTags) return
    if (typeof v !== 'boolean') throw new Error(`automaticTags must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.automaticTags', v)
  }
  get automaticTags(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.automaticTags') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set autoPinDelay(v: number | undefined) {
    if (typeof v === 'undefined') v = 0
    if (v === this.autoPinDelay) return
    if (typeof v !== 'number') throw new Error(`autoPinDelay must be of type number, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.autoPinDelay', v)
  }
  get autoPinDelay(): number {
    const v: number = Zotero.Prefs.get('translators.better-bibtex.autoPinDelay') as number
    return typeof v === 'undefined' ? 0 : v
  }

  set auxImport(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.auxImport) return
    if (typeof v !== 'boolean') throw new Error(`auxImport must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.auxImport', v)
  }
  get auxImport(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.auxImport') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set baseAttachmentPath(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.baseAttachmentPath) return
    if (typeof v !== 'string') throw new Error(`baseAttachmentPath must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.baseAttachmentPath', v)
  }
  get baseAttachmentPath(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.baseAttachmentPath') as string
    return typeof v === 'undefined' ? "" : v
  }

  set biblatexExtendedDateFormat(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.biblatexExtendedDateFormat) return
    if (typeof v !== 'boolean') throw new Error(`biblatexExtendedDateFormat must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.biblatexExtendedDateFormat', v)
  }
  get biblatexExtendedDateFormat(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.biblatexExtendedDateFormat') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set biblatexExtendedNameFormat(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.biblatexExtendedNameFormat) return
    if (typeof v !== 'boolean') throw new Error(`biblatexExtendedNameFormat must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.biblatexExtendedNameFormat', v)
  }
  get biblatexExtendedNameFormat(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.biblatexExtendedNameFormat') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set biblatexExtractEprint(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.biblatexExtractEprint) return
    if (typeof v !== 'boolean') throw new Error(`biblatexExtractEprint must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.biblatexExtractEprint', v)
  }
  get biblatexExtractEprint(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.biblatexExtractEprint') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set bibtexParticleNoOp(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.bibtexParticleNoOp) return
    if (typeof v !== 'boolean') throw new Error(`bibtexParticleNoOp must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.bibtexParticleNoOp', v)
  }
  get bibtexParticleNoOp(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.bibtexParticleNoOp') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set bibtexURL(v: "off" | "note" | "note-url-ish" | "url" | "url-ish" | undefined) {
    if (typeof v === 'undefined') v = "off"
    if (v === this.bibtexURL) return
    if (!["off","note","note-url-ish","url","url-ish"].includes(v)) throw new Error(`bibtexURL must be one of ["off","note","note-url-ish","url","url-ish"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.bibtexURL', v)
  }
  get bibtexURL(): "off" | "note" | "note-url-ish" | "url" | "url-ish" {
    const v: "off" | "note" | "note-url-ish" | "url" | "url-ish" = Zotero.Prefs.get('translators.better-bibtex.bibtexURL') as "off" | "note" | "note-url-ish" | "url" | "url-ish"
    return typeof v === 'undefined' ? "off" : v
  }

  set cache(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.cache) return
    if (typeof v !== 'boolean') throw new Error(`cache must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.cache', v)
  }
  get cache(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.cache') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set cacheFlushInterval(v: number | undefined) {
    if (typeof v === 'undefined') v = 5
    if (v === this.cacheFlushInterval) return
    if (typeof v !== 'number') throw new Error(`cacheFlushInterval must be of type number, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.cacheFlushInterval', v)
  }
  get cacheFlushInterval(): number {
    const v: number = Zotero.Prefs.get('translators.better-bibtex.cacheFlushInterval') as number
    return typeof v === 'undefined' ? 5 : v
  }

  set charmap(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.charmap) return
    if (typeof v !== 'string') throw new Error(`charmap must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.charmap', v)
  }
  get charmap(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.charmap') as string
    return typeof v === 'undefined' ? "" : v
  }

  set citeCommand(v: string | undefined) {
    if (typeof v === 'undefined') v = "cite"
    if (v === this.citeCommand) return
    if (typeof v !== 'string') throw new Error(`citeCommand must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.citeCommand', v)
  }
  get citeCommand(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.citeCommand') as string
    return typeof v === 'undefined' ? "cite" : v
  }

  set citekeyFold(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.citekeyFold) return
    if (typeof v !== 'boolean') throw new Error(`citekeyFold must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.citekeyFold', v)
  }
  get citekeyFold(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.citekeyFold') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set citekeyFormat(v: string | undefined) {
    if (typeof v === 'undefined') v = "​auth.lower + shorttitle(3,3) + year"
    if (v === this.citekeyFormat) return
    if (typeof v !== 'string') throw new Error(`citekeyFormat must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.citekeyFormat', v)
  }
  get citekeyFormat(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.citekeyFormat') as string
    return typeof v === 'undefined' ? "​auth.lower + shorttitle(3,3) + year" : v
  }

  set citekeyFormatEditing(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.citekeyFormatEditing) return
    if (typeof v !== 'string') throw new Error(`citekeyFormatEditing must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.citekeyFormatEditing', v)
  }
  get citekeyFormatEditing(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.citekeyFormatEditing') as string
    return typeof v === 'undefined' ? "" : v
  }

  set citekeySearch(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.citekeySearch) return
    if (typeof v !== 'boolean') throw new Error(`citekeySearch must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.citekeySearch', v)
  }
  get citekeySearch(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.citekeySearch') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set citekeyUnsafeChars(v: string | undefined) {
    if (typeof v === 'undefined') v = "\\\"#%'(),={}~"
    if (v === this.citekeyUnsafeChars) return
    if (typeof v !== 'string') throw new Error(`citekeyUnsafeChars must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.citekeyUnsafeChars', v)
  }
  get citekeyUnsafeChars(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.citekeyUnsafeChars') as string
    return typeof v === 'undefined' ? "\\\"#%'(),={}~" : v
  }

  set csquotes(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.csquotes) return
    if (typeof v !== 'string') throw new Error(`csquotes must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.csquotes', v)
  }
  get csquotes(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.csquotes') as string
    return typeof v === 'undefined' ? "" : v
  }

  set DOIandURL(v: "both" | "doi" | "url" | undefined) {
    if (typeof v === 'undefined') v = "both"
    if (v === this.DOIandURL) return
    if (!["both","doi","url"].includes(v)) throw new Error(`DOIandURL must be one of ["both","doi","url"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.DOIandURL', v)
  }
  get DOIandURL(): "both" | "doi" | "url" {
    const v: "both" | "doi" | "url" = Zotero.Prefs.get('translators.better-bibtex.DOIandURL') as "both" | "doi" | "url"
    return typeof v === 'undefined' ? "both" : v
  }

  set exportBibTeXStrings(v: "off" | "detect" | "match" | "match+reverse" | undefined) {
    if (typeof v === 'undefined') v = "off"
    if (v === this.exportBibTeXStrings) return
    if (!["off","detect","match","match+reverse"].includes(v)) throw new Error(`exportBibTeXStrings must be one of ["off","detect","match","match+reverse"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.exportBibTeXStrings', v)
  }
  get exportBibTeXStrings(): "off" | "detect" | "match" | "match+reverse" {
    const v: "off" | "detect" | "match" | "match+reverse" = Zotero.Prefs.get('translators.better-bibtex.exportBibTeXStrings') as "off" | "detect" | "match" | "match+reverse"
    return typeof v === 'undefined' ? "off" : v
  }

  set exportBraceProtection(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.exportBraceProtection) return
    if (typeof v !== 'boolean') throw new Error(`exportBraceProtection must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.exportBraceProtection', v)
  }
  get exportBraceProtection(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.exportBraceProtection') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set exportTitleCase(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.exportTitleCase) return
    if (typeof v !== 'boolean') throw new Error(`exportTitleCase must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.exportTitleCase', v)
  }
  get exportTitleCase(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.exportTitleCase') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set extraMergeCitekeys(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.extraMergeCitekeys) return
    if (typeof v !== 'boolean') throw new Error(`extraMergeCitekeys must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.extraMergeCitekeys', v)
  }
  get extraMergeCitekeys(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.extraMergeCitekeys') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set extraMergeCSL(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.extraMergeCSL) return
    if (typeof v !== 'boolean') throw new Error(`extraMergeCSL must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.extraMergeCSL', v)
  }
  get extraMergeCSL(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.extraMergeCSL') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set extraMergeTeX(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.extraMergeTeX) return
    if (typeof v !== 'boolean') throw new Error(`extraMergeTeX must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.extraMergeTeX', v)
  }
  get extraMergeTeX(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.extraMergeTeX') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set git(v: string | undefined) {
    if (typeof v === 'undefined') v = "config"
    if (v === this.git) return
    if (typeof v !== 'string') throw new Error(`git must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.git', v)
  }
  get git(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.git') as string
    return typeof v === 'undefined' ? "config" : v
  }

  set import(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.import) return
    if (typeof v !== 'boolean') throw new Error(`import must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.import', v)
  }
  get import(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.import') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set importBibTeXStrings(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.importBibTeXStrings) return
    if (typeof v !== 'boolean') throw new Error(`importBibTeXStrings must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.importBibTeXStrings', v)
  }
  get importBibTeXStrings(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.importBibTeXStrings') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set importCaseProtection(v: "as-needed" | "on" | "off" | undefined) {
    if (typeof v === 'undefined') v = "as-needed"
    if (v === this.importCaseProtection) return
    if (!["as-needed","on","off"].includes(v)) throw new Error(`importCaseProtection must be one of ["as-needed","on","off"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.importCaseProtection', v)
  }
  get importCaseProtection(): "as-needed" | "on" | "off" {
    const v: "as-needed" | "on" | "off" = Zotero.Prefs.get('translators.better-bibtex.importCaseProtection') as "as-needed" | "on" | "off"
    return typeof v === 'undefined' ? "as-needed" : v
  }

  set importCitationKey(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.importCitationKey) return
    if (typeof v !== 'boolean') throw new Error(`importCitationKey must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.importCitationKey', v)
  }
  get importCitationKey(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.importCitationKey') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set importExtra(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.importExtra) return
    if (typeof v !== 'boolean') throw new Error(`importExtra must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.importExtra', v)
  }
  get importExtra(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.importExtra') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set importJabRefAbbreviations(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.importJabRefAbbreviations) return
    if (typeof v !== 'boolean') throw new Error(`importJabRefAbbreviations must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.importJabRefAbbreviations', v)
  }
  get importJabRefAbbreviations(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.importJabRefAbbreviations') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set importJabRefStrings(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.importJabRefStrings) return
    if (typeof v !== 'boolean') throw new Error(`importJabRefStrings must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.importJabRefStrings', v)
  }
  get importJabRefStrings(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.importJabRefStrings') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set importNoteToExtra(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.importNoteToExtra) return
    if (typeof v !== 'string') throw new Error(`importNoteToExtra must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.importNoteToExtra', v)
  }
  get importNoteToExtra(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.importNoteToExtra') as string
    return typeof v === 'undefined' ? "" : v
  }

  set importSentenceCase(v: "on+guess" | "on" | "off" | undefined) {
    if (typeof v === 'undefined') v = "on+guess"
    if (v === this.importSentenceCase) return
    if (!["on+guess","on","off"].includes(v)) throw new Error(`importSentenceCase must be one of ["on+guess","on","off"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.importSentenceCase', v)
  }
  get importSentenceCase(): "on+guess" | "on" | "off" {
    const v: "on+guess" | "on" | "off" = Zotero.Prefs.get('translators.better-bibtex.importSentenceCase') as "on+guess" | "on" | "off"
    return typeof v === 'undefined' ? "on+guess" : v
  }

  set importUnknownTexCommand(v: string | undefined) {
    if (typeof v === 'undefined') v = "ignore"
    if (v === this.importUnknownTexCommand) return
    if (typeof v !== 'string') throw new Error(`importUnknownTexCommand must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.importUnknownTexCommand', v)
  }
  get importUnknownTexCommand(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.importUnknownTexCommand') as string
    return typeof v === 'undefined' ? "ignore" : v
  }

  set itemObserverDelay(v: number | undefined) {
    if (typeof v === 'undefined') v = 5
    if (v === this.itemObserverDelay) return
    if (typeof v !== 'number') throw new Error(`itemObserverDelay must be of type number, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.itemObserverDelay', v)
  }
  get itemObserverDelay(): number {
    const v: number = Zotero.Prefs.get('translators.better-bibtex.itemObserverDelay') as number
    return typeof v === 'undefined' ? 5 : v
  }

  set jabrefFormat(v: 0 | 3 | 4 | 5 | undefined) {
    if (typeof v === 'undefined') v = 0
    if (v === this.jabrefFormat) return
    if (![0,3,4,5].includes(v)) throw new Error(`jabrefFormat must be one of [0,3,4,5], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.jabrefFormat', v)
  }
  get jabrefFormat(): 0 | 3 | 4 | 5 {
    const v: 0 | 3 | 4 | 5 = Zotero.Prefs.get('translators.better-bibtex.jabrefFormat') as 0 | 3 | 4 | 5
    return typeof v === 'undefined' ? 0 : v
  }

  set jieba(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.jieba) return
    if (typeof v !== 'boolean') throw new Error(`jieba must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.jieba', v)
  }
  get jieba(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.jieba') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set keyConflictPolicy(v: "change" | "keep" | undefined) {
    if (typeof v === 'undefined') v = "keep"
    if (v === this.keyConflictPolicy) return
    if (!["change","keep"].includes(v)) throw new Error(`keyConflictPolicy must be one of ["change","keep"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.keyConflictPolicy', v)
  }
  get keyConflictPolicy(): "change" | "keep" {
    const v: "change" | "keep" = Zotero.Prefs.get('translators.better-bibtex.keyConflictPolicy') as "change" | "keep"
    return typeof v === 'undefined' ? "keep" : v
  }

  set keyScope(v: "global" | "library" | undefined) {
    if (typeof v === 'undefined') v = "library"
    if (v === this.keyScope) return
    if (!["global","library"].includes(v)) throw new Error(`keyScope must be one of ["global","library"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.keyScope', v)
  }
  get keyScope(): "global" | "library" {
    const v: "global" | "library" = Zotero.Prefs.get('translators.better-bibtex.keyScope') as "global" | "library"
    return typeof v === 'undefined' ? "library" : v
  }

  set kuroshiro(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.kuroshiro) return
    if (typeof v !== 'boolean') throw new Error(`kuroshiro must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.kuroshiro', v)
  }
  get kuroshiro(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.kuroshiro') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set language(v: "langid" | "language" | "both" | undefined) {
    if (typeof v === 'undefined') v = "langid"
    if (v === this.language) return
    if (!["langid","language","both"].includes(v)) throw new Error(`language must be one of ["langid","language","both"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.language', v)
  }
  get language(): "langid" | "language" | "both" {
    const v: "langid" | "language" | "both" = Zotero.Prefs.get('translators.better-bibtex.language') as "langid" | "language" | "both"
    return typeof v === 'undefined' ? "langid" : v
  }

  set logEvents(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.logEvents) return
    if (typeof v !== 'boolean') throw new Error(`logEvents must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.logEvents', v)
  }
  get logEvents(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.logEvents') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set mapMath(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.mapMath) return
    if (typeof v !== 'string') throw new Error(`mapMath must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.mapMath', v)
  }
  get mapMath(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.mapMath') as string
    return typeof v === 'undefined' ? "" : v
  }

  set mapText(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.mapText) return
    if (typeof v !== 'string') throw new Error(`mapText must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.mapText', v)
  }
  get mapText(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.mapText') as string
    return typeof v === 'undefined' ? "" : v
  }

  set mapUnicode(v: "minimal-packages" | "conservative" | "text" | "math" | "creator" | undefined) {
    if (typeof v === 'undefined') v = "conservative"
    if (v === this.mapUnicode) return
    if (!["minimal-packages","conservative","text","math","creator"].includes(v)) throw new Error(`mapUnicode must be one of ["minimal-packages","conservative","text","math","creator"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.mapUnicode', v)
  }
  get mapUnicode(): "minimal-packages" | "conservative" | "text" | "math" | "creator" {
    const v: "minimal-packages" | "conservative" | "text" | "math" | "creator" = Zotero.Prefs.get('translators.better-bibtex.mapUnicode') as "minimal-packages" | "conservative" | "text" | "math" | "creator"
    return typeof v === 'undefined' ? "conservative" : v
  }

  set parseParticles(v: boolean | undefined) {
    if (typeof v === 'undefined') v = true
    if (v === this.parseParticles) return
    if (typeof v !== 'boolean') throw new Error(`parseParticles must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.parseParticles', v)
  }
  get parseParticles(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.parseParticles') as boolean
    return typeof v === 'undefined' ? true : v
  }

  set patchDates(v: string | undefined) {
    if (typeof v === 'undefined') v = "dateadded=dateAdded, date-added=dateAdded, datemodified=dateModified, date-modified=dateModified"
    if (v === this.patchDates) return
    if (typeof v !== 'string') throw new Error(`patchDates must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.patchDates', v)
  }
  get patchDates(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.patchDates') as string
    return typeof v === 'undefined' ? "dateadded=dateAdded, date-added=dateAdded, datemodified=dateModified, date-modified=dateModified" : v
  }

  set platform(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.platform) return
    if (typeof v !== 'string') throw new Error(`platform must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.platform', v)
  }
  get platform(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.platform') as string
    return typeof v === 'undefined' ? "" : v
  }

  set postscript(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.postscript) return
    if (typeof v !== 'string') throw new Error(`postscript must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.postscript', v)
  }
  get postscript(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.postscript') as string
    return typeof v === 'undefined' ? "" : v
  }

  set postscriptOverride(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.postscriptOverride) return
    if (typeof v !== 'string') throw new Error(`postscriptOverride must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.postscriptOverride', v)
  }
  get postscriptOverride(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.postscriptOverride') as string
    return typeof v === 'undefined' ? "" : v
  }

  set preferencesOverride(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.preferencesOverride) return
    if (typeof v !== 'string') throw new Error(`preferencesOverride must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.preferencesOverride', v)
  }
  get preferencesOverride(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.preferencesOverride') as string
    return typeof v === 'undefined' ? "" : v
  }

  set qualityReport(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.qualityReport) return
    if (typeof v !== 'boolean') throw new Error(`qualityReport must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.qualityReport', v)
  }
  get qualityReport(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.qualityReport') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set quickCopyEta(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.quickCopyEta) return
    if (typeof v !== 'string') throw new Error(`quickCopyEta must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.quickCopyEta', v)
  }
  get quickCopyEta(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.quickCopyEta') as string
    return typeof v === 'undefined' ? "" : v
  }

  set quickCopyMode(v: "latex" | "citekeys" | "pandoc" | "orgmode" | "orgRef" | "orgRef3" | "rtfScan" | "roamCiteKey" | "atom" | "gitbook" | "selectlink" | "eta" | undefined) {
    if (typeof v === 'undefined') v = "latex"
    if (v === this.quickCopyMode) return
    if (!["latex","citekeys","pandoc","orgmode","orgRef","orgRef3","rtfScan","roamCiteKey","atom","gitbook","selectlink","eta"].includes(v)) throw new Error(`quickCopyMode must be one of ["latex","citekeys","pandoc","orgmode","orgRef","orgRef3","rtfScan","roamCiteKey","atom","gitbook","selectlink","eta"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.quickCopyMode', v)
  }
  get quickCopyMode(): "latex" | "citekeys" | "pandoc" | "orgmode" | "orgRef" | "orgRef3" | "rtfScan" | "roamCiteKey" | "atom" | "gitbook" | "selectlink" | "eta" {
    const v: "latex" | "citekeys" | "pandoc" | "orgmode" | "orgRef" | "orgRef3" | "rtfScan" | "roamCiteKey" | "atom" | "gitbook" | "selectlink" | "eta" = Zotero.Prefs.get('translators.better-bibtex.quickCopyMode') as "latex" | "citekeys" | "pandoc" | "orgmode" | "orgRef" | "orgRef3" | "rtfScan" | "roamCiteKey" | "atom" | "gitbook" | "selectlink" | "eta"
    return typeof v === 'undefined' ? "latex" : v
  }

  set quickCopyOrgMode(v: "zotero" | "citationkey" | undefined) {
    if (typeof v === 'undefined') v = "zotero"
    if (v === this.quickCopyOrgMode) return
    if (!["zotero","citationkey"].includes(v)) throw new Error(`quickCopyOrgMode must be one of ["zotero","citationkey"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.quickCopyOrgMode', v)
  }
  get quickCopyOrgMode(): "zotero" | "citationkey" {
    const v: "zotero" | "citationkey" = Zotero.Prefs.get('translators.better-bibtex.quickCopyOrgMode') as "zotero" | "citationkey"
    return typeof v === 'undefined' ? "zotero" : v
  }

  set quickCopyPandocBrackets(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.quickCopyPandocBrackets) return
    if (typeof v !== 'boolean') throw new Error(`quickCopyPandocBrackets must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.quickCopyPandocBrackets', v)
  }
  get quickCopyPandocBrackets(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.quickCopyPandocBrackets') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set quickCopySelectLink(v: "zotero" | "citationkey" | undefined) {
    if (typeof v === 'undefined') v = "zotero"
    if (v === this.quickCopySelectLink) return
    if (!["zotero","citationkey"].includes(v)) throw new Error(`quickCopySelectLink must be one of ["zotero","citationkey"], got '${v}'`)
    Zotero.Prefs.set('translators.better-bibtex.quickCopySelectLink', v)
  }
  get quickCopySelectLink(): "zotero" | "citationkey" {
    const v: "zotero" | "citationkey" = Zotero.Prefs.get('translators.better-bibtex.quickCopySelectLink') as "zotero" | "citationkey"
    return typeof v === 'undefined' ? "zotero" : v
  }

  set rawImports(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.rawImports) return
    if (typeof v !== 'boolean') throw new Error(`rawImports must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.rawImports', v)
  }
  get rawImports(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.rawImports') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set rawLaTag(v: string | undefined) {
    if (typeof v === 'undefined') v = "#LaTeX"
    if (v === this.rawLaTag) return
    if (typeof v !== 'string') throw new Error(`rawLaTag must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.rawLaTag', v)
  }
  get rawLaTag(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.rawLaTag') as string
    return typeof v === 'undefined' ? "#LaTeX" : v
  }

  set relativeFilePaths(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.relativeFilePaths) return
    if (typeof v !== 'boolean') throw new Error(`relativeFilePaths must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.relativeFilePaths', v)
  }
  get relativeFilePaths(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.relativeFilePaths') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set retainCache(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.retainCache) return
    if (typeof v !== 'boolean') throw new Error(`retainCache must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.retainCache', v)
  }
  get retainCache(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.retainCache') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set scrubDatabase(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.scrubDatabase) return
    if (typeof v !== 'boolean') throw new Error(`scrubDatabase must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.scrubDatabase', v)
  }
  get scrubDatabase(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.scrubDatabase') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set separatorList(v: string | undefined) {
    if (typeof v === 'undefined') v = "and"
    if (v === this.separatorList) return
    if (typeof v !== 'string') throw new Error(`separatorList must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.separatorList', v)
  }
  get separatorList(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.separatorList') as string
    return typeof v === 'undefined' ? "and" : v
  }

  set separatorNames(v: string | undefined) {
    if (typeof v === 'undefined') v = "and"
    if (v === this.separatorNames) return
    if (typeof v !== 'string') throw new Error(`separatorNames must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.separatorNames', v)
  }
  get separatorNames(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.separatorNames') as string
    return typeof v === 'undefined' ? "and" : v
  }

  set skipFields(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.skipFields) return
    if (typeof v !== 'string') throw new Error(`skipFields must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.skipFields', v)
  }
  get skipFields(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.skipFields') as string
    return typeof v === 'undefined' ? "" : v
  }

  set skipWords(v: string | undefined) {
    if (typeof v === 'undefined') v = "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum"
    if (v === this.skipWords) return
    if (typeof v !== 'string') throw new Error(`skipWords must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.skipWords', v)
  }
  get skipWords(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.skipWords') as string
    return typeof v === 'undefined' ? "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum" : v
  }

  set startupProgress(v: string | undefined) {
    if (typeof v === 'undefined') v = "popup"
    if (v === this.startupProgress) return
    if (typeof v !== 'string') throw new Error(`startupProgress must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.startupProgress', v)
  }
  get startupProgress(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.startupProgress') as string
    return typeof v === 'undefined' ? "popup" : v
  }

  set strings(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.strings) return
    if (typeof v !== 'string') throw new Error(`strings must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.strings', v)
  }
  get strings(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.strings') as string
    return typeof v === 'undefined' ? "" : v
  }

  set stringsOverride(v: string | undefined) {
    if (typeof v === 'undefined') v = ""
    if (v === this.stringsOverride) return
    if (typeof v !== 'string') throw new Error(`stringsOverride must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.stringsOverride', v)
  }
  get stringsOverride(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.stringsOverride') as string
    return typeof v === 'undefined' ? "" : v
  }

  set testing(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.testing) return
    if (typeof v !== 'boolean') throw new Error(`testing must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.testing', v)
  }
  get testing(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.testing') as boolean
    return typeof v === 'undefined' ? false : v
  }

  set verbatimFields(v: string | undefined) {
    if (typeof v === 'undefined') v = "url,doi,file,pdf,ids,eprint,/^verb[a-z]$/,groups,/^citeulike-linkout-[0-9]+$/, /^bdsk-url-[0-9]+$/"
    if (v === this.verbatimFields) return
    if (typeof v !== 'string') throw new Error(`verbatimFields must be of type string, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.verbatimFields', v)
  }
  get verbatimFields(): string {
    const v: string = Zotero.Prefs.get('translators.better-bibtex.verbatimFields') as string
    return typeof v === 'undefined' ? "url,doi,file,pdf,ids,eprint,/^verb[a-z]$/,groups,/^citeulike-linkout-[0-9]+$/, /^bdsk-url-[0-9]+$/" : v
  }

  set warnBulkModify(v: number | undefined) {
    if (typeof v === 'undefined') v = 10
    if (v === this.warnBulkModify) return
    if (typeof v !== 'number') throw new Error(`warnBulkModify must be of type number, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.warnBulkModify', v)
  }
  get warnBulkModify(): number {
    const v: number = Zotero.Prefs.get('translators.better-bibtex.warnBulkModify') as number
    return typeof v === 'undefined' ? 10 : v
  }

  set warnTitleCased(v: boolean | undefined) {
    if (typeof v === 'undefined') v = false
    if (v === this.warnTitleCased) return
    if (typeof v !== 'boolean') throw new Error(`warnTitleCased must be of type boolean, got '${typeof v}'`)
    Zotero.Prefs.set('translators.better-bibtex.warnTitleCased', v)
  }
  get warnTitleCased(): boolean {
    const v: boolean = Zotero.Prefs.get('translators.better-bibtex.warnTitleCased') as boolean
    return typeof v === 'undefined' ? false : v
  }

  get all(): Preferences {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return fromEntries(names.map(pref => [ pref, this[pref] ])) as Preferences
  }
}
