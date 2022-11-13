const util = require('util')

function deepLog(myObject) {
  console.log(util.inspect(myObject, false, null, true /* enable colors */))
}

module.exports = {
  deepLog
}