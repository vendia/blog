

function getLineNumberFromMatch(text = '', matches) {
  return getLineCount(text.substr(0, matches.index))
}

function getLines(str = '') {
  return str.split(/\r\n|\r|\n/)
}

function getLineCount(str = '') {
  return getLines(str).length
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
  getLines,
  getLineCount,
  getLineNumberFromMatch,
  convertDateToString,
}