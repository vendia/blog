
const RELATIVE_LINK = /^(?!(?:(?:https?|ftp):\/\/|data:))((?:\.\.?\/)*)*([\w\d\-_./?=#%:+&]+)/

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function isImage(link) {
  return link.match(/(png|jpe?g|gif|webp|svg)$/)
}

function isRelative(filepath) {
  return RELATIVE_LINK.test(filepath)
}

module.exports = {
  onlyUnique,
  isImage,
  isRelative
}