const { onlyUnique } = require('./filters')

// https://regex101.com/r/In5HtG/2
const LIVE_LINKS_REGEX = /(?:['"(])((?:https?:\/\/)[\w\d\-_./?=#%:+&]{3,})/gmi

/**
 * Finds all links in markdown <a>, <img> and md link format []()
 * @param {string} mdContents 
 * @param {string} filePath 
 * @returns 
 */
function findLiveLinks(mdContents, filePath) {
  const matches = mdContents.match(LIVE_LINKS_REGEX)
  if (!matches) {
    return {
      links: [],
      filePath
    }
  }
  const links = matches
    .map((m) => m.replace(/^['"(]/, ''))
    .filter(onlyUnique)
  return { 
    links: links,
    filePath
  }
}

module.exports = {
  findLiveLinks,
  LIVE_LINKS_REGEX
}
