const { findLiveLinks } = require('./find-links-live')
const { findRelativeLinks } = require('./find-links-relative')

/**
 * Get image links
 * @param {array|string} linksOrText
 * @returns {array}
 */
function findImageLinks(linksOrText) {
  let links = linksOrText
  if (!Array.isArray(linksOrText)) {
    const linkData = findLiveLinks(linksOrText)
    links = linkData.links.concat(findRelativeLinks(linksOrText))
  }
  const imageLinks = links.filter((link) => {
    return link.match(/(png|jpe?g|gif|webp|svg)$/)
  })
  return imageLinks
}

module.exports = {
  findImageLinks
}
