const { onlyUnique } = require('./filters')

// https://regex101.com/r/Uxgu3P/1
const RELATIVE_IMAGES_REGEX = /(<img.*?src=['"])(?!(?:(?:https?|ftp):\/\/|data:))(\.?\/)?(.*?)(['"].*?\/?>)/gim

/*
// https://regex101.com/r/SvMfme/1
<img src="img/deploy/button.svg" />
<img src="/img/deploy/button.svg" />
<img src='/img/deploy/button.svg' />
<img src='./img/deploy/button.svg' />
<img src='../img/deploy/button.svg' />
<img src='../../img/deploy/button.svg' />
*/
function findRelativeImages(block, filePath) {
  let matches
  let relLinks = []
  while ((matches = RELATIVE_IMAGES_REGEX.exec(block)) !== null) {
    if (matches.index === RELATIVE_IMAGES_REGEX.lastIndex) {
      RELATIVE_IMAGES_REGEX.lastIndex++ // avoid infinite loops with zero-width matches
    }
    const [ match, _, start, link ] = matches
    relLinks.push(`${start || ''}${link}`)
  }
  return  {
    links: relLinks.filter(onlyUnique),
    filePath
  }
}


module.exports = {
  findRelativeImages,
  RELATIVE_IMAGES_REGEX
}
