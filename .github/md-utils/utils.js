
function countLines(text = '') {
  return text.split('\n').length
}

function getLineNumber(text = '', matches) {
  return countLines(text.substr(0, matches.index))
}

module.exports = {
  countLines,
  getLineNumber
}