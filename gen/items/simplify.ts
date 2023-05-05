/* eslint-disable prefer-template, id-blacklist, @typescript-eslint/no-unsafe-return, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/quotes */

import { Item } from '../typings/serialized-item'
import { client } from '../../content/client'
const zotero = client === 'zotero'
const jurism = !zotero

function unalias(item: any, { scrub = true }: { scrub?: boolean } = {}): void {
  delete item.inPublications
  let v
  if (v = (item.dateDecided || item.issueDate || item.dateEnacted)) item.date = v
  if (scrub) {
    delete item.dateDecided
    delete item.issueDate
    delete item.dateEnacted
  }
  if (v = (item.artworkMedium || item.audioRecordingFormat || item.videoRecordingFormat || item.interviewMedium || item.audioFileType)) item.medium = v
  if (scrub) {
    delete item.artworkMedium
    delete item.audioRecordingFormat
    delete item.videoRecordingFormat
    delete item.interviewMedium
    delete item.audioFileType
  }
  if (v = (item.billNumber || item.docketNumber || item.patentNumber || item.episodeNumber || item.reportNumber || item.publicLawNumber)) item.number = v
  if (scrub) {
    delete item.billNumber
    delete item.docketNumber
    delete item.patentNumber
    delete item.episodeNumber
    delete item.reportNumber
    delete item.publicLawNumber
  }
  if (v = (item.codePages || item.firstPage)) item.pages = v
  if (scrub) {
    delete item.codePages
    delete item.firstPage
  }
  if (v = (item.blogTitle || item.bookTitle || item.proceedingsTitle || item.dictionaryTitle || item.encyclopediaTitle || item.forumTitle || item.programTitle || item.websiteTitle)) item.publicationTitle = v
  if (scrub) {
    delete item.blogTitle
    delete item.bookTitle
    delete item.proceedingsTitle
    delete item.dictionaryTitle
    delete item.encyclopediaTitle
    delete item.forumTitle
    delete item.programTitle
    delete item.websiteTitle
  }
  if (v = (item.label || item.company || item.distributor || item.network || item.university || item.studio)) item.publisher = v
  if (scrub) {
    delete item.label
    delete item.company
    delete item.distributor
    delete item.network
    delete item.university
    delete item.studio
  }
  if (v = (item.caseName || item.subject || item.nameOfAct)) item.title = v
  if (scrub) {
    delete item.caseName
    delete item.subject
    delete item.nameOfAct
  }
  if (v = (item.websiteType || item.genre || item.postType || item.letterType || item.manuscriptType || item.mapType || item.presentationType || item.reportType || item.thesisType)) item.type = v
  if (scrub) {
    delete item.websiteType
    delete item.genre
    delete item.postType
    delete item.letterType
    delete item.manuscriptType
    delete item.mapType
    delete item.presentationType
    delete item.reportType
    delete item.thesisType
  }
  if (v = (item.codeVolume || item.reporterVolume)) item.volume = v
  if (scrub) {
    delete item.codeVolume
    delete item.reporterVolume
  }

  if (zotero) {
    if (v = (item.legislativeBody || item.court || item.issuingAuthority || item.organization)) item.authority = v
    if (scrub) {
      delete item.legislativeBody
      delete item.court
      delete item.issuingAuthority
      delete item.organization
    }
    if (item.format) item.medium = item.format
    if (scrub) {
      delete item.format
    }
    if (v = (item.identifier || item.documentNumber || item.archiveID)) item.number = v
    if (scrub) {
      delete item.identifier
      delete item.documentNumber
      delete item.archiveID
    }
    if (item.repositoryLocation) item.place = item.repositoryLocation
    if (scrub) {
      delete item.repositoryLocation
    }
    if (v = (item.repository || item.institution)) item.publisher = v
    if (scrub) {
      delete item.repository
      delete item.institution
    }
    if (item.legalStatus) item.status = item.legalStatus
    if (scrub) {
      delete item.legalStatus
    }

  }

  if (jurism) {
    if (item.release) item.edition = item.release
    if (scrub) {
      delete item.release
    }
    if (item.bookAbbreviation) item.journalAbbreviation = item.bookAbbreviation
    if (scrub) {
      delete item.bookAbbreviation
    }
    if (item.regulatoryBody) item.legislativeBody = item.regulatoryBody
    if (scrub) {
      delete item.regulatoryBody
    }
    if (item.treatyNumber) item.number = item.treatyNumber
    if (scrub) {
      delete item.treatyNumber
    }
    if (v = (item.album || item.reporter)) item.publicationTitle = v
    if (scrub) {
      delete item.album
      delete item.reporter
    }
    if (item.assemblyNumber) item.seriesNumber = item.assemblyNumber
    if (scrub) {
      delete item.assemblyNumber
    }
    if (v = (item.sessionType || item.regulationType)) item.type = v
    if (scrub) {
      delete item.sessionType
      delete item.regulationType
    }

  }

}

// import & export translators expect different creator formats... nice
export function simplifyForExport(item: any, { creators=true, dropAttachments=false, scrub=true }: { creators?: boolean, dropAttachments?: boolean, scrub?: boolean } = {}): Item {
  unalias(item, { scrub })

  if (item.filingDate) item.filingDate = item.filingDate.replace(/^0000-00-00 /, '')

  if (creators && item.creators) {
    for (const creator of item.creators) {
      if (creator.fieldMode) {
        creator.name = creator.name || creator.lastName
        delete creator.lastName
        delete creator.firstName
        delete creator.fieldMode
      }
    }
  }

  if (item.itemType === 'attachment' || item.itemType === 'note') {
    delete item.attachments
    delete item.notes
  }
  else {
    item.attachments = (!dropAttachments && item.attachments) || []
  }

  return (item as Item)
}

export function simplifyForImport(item: any): Item {
  // unalias(item, { scrub: true })

  if (item.creators) {
    for (const creator of item.creators) {
      if (creator.name) {
        creator.lastName = creator.lastName || creator.name
        creator.fieldMode = 1
        delete creator.firstName
        delete creator.name
      }
      if (!jurism) delete creator.multi
    }
  }

  if (!jurism) delete item.multi

  return (item as Item)
}
