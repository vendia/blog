
/**
 * Finds all links in text relative or otherwise
 * @param {string} mdContents 
 * @returns 
 */
function findLinks(text) {
  const { links } = findLiveLinks(text, filePath)
  // console.log('links', links)
  const relativeLinks = findRelativeLinks(text)
  // console.log('relativeLinks', relativeLinks)
  // console.log(`links ${filePath}`, filePath)
  return links.concat(relativeLinks)
}

module.exports = {
  findLinks
}
