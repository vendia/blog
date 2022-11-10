
function countLines(text = '') {
  return text.split('\n').length
}

function getLineNumber(text = '', matches) {
  return countLines(text.substr(0, matches.index))
}

function convertDateToString(dateValue) {
  let date = dateValue
  if (typeof dateValue === 'string') {
    date = dateValue
  } else if (dateValue instanceof Date) {
    var newDate = new Date(dateValue.toString())
    date = newDate.toISOString().substring(0, 10)
  }
  return date
}

module.exports = {
  countLines,
  getLineNumber,
  convertDateToString
}