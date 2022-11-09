const { HtmlValidate } = require("html-validate")
const htmlTags = require('html-tags')

// Alt https://github.com/codsen/codsen/tree/main/packages/codsen-parser
// Alt for image validation https://github.com/Mermade/mdv
// Alt for link validation https://github.com/tcort/markdown-link-check
// For roam style backlinks https://github.com/andymatuschak/note-link-janitor

const GET_TAG = /(?:Missing close-tag|Mismatched close-tag), expected '<\/(\S*)>'/
const GET_NAME = /<\/(\S*)> is not a valid element name/

const ignoreRules = [
  //'element-name',
]

function filterReport(report, fpMessage) {
  let errors = []
  for (const result of report.results) {
    for (const msg of result.messages) {
      // console.log('msg', msg)
      if (msg.ruleId === 'close-order') {
        if (msg.message.indexOf("Mismatched close-tag") > -1) {
          const tag = msg.message.match(GET_TAG) || []
          if (htmlTags.includes(tag[1])) {
            const errMsg = `${msg.message} near line ${msg.line}${fpMessage}`
            // msg.message = errMsg
            errors.push(errMsg)
          }
        }
      } else if (msg.ruleId === 'element-name') {
        // const tag = msg.message.match(GET_NAME) || []
        // if (htmlTags.includes(tag[1])) {

        // }
      } else if (!ignoreRules.includes(msg.ruleId)) {
        errors.push(`${msg.message} near line ${msg.line}${fpMessage}`)
        // errors.push(msg)
      }
      
      const src = msg;
      delete src.ruleUrl;
      delete src.context;
    }
  }
  return errors
}

// https://html-validate.org/usage/index.html
const config = {
  extends: [
    //"html-validate:recommended",
    "html-validate:standard"
  ],
  "rules": {
    "no-deprecated-attr": "off",
    "attr-spacing": "off",
    "element-required-attributes": "off",
    // "element-name": "off",
    // "other-rule": ["severity", { "option": true }]
  }
  // transform: {
  //     "\\.(md)$": "html-validate-markdown",
  // },
}

function validateHtmlTags(tags, filePath) {
  const errors = tags.reduce((acc, curr) => {
    const foundErrors = validateHtml(curr.raw, filePath)
    if (foundErrors && foundErrors.length) {
      acc = acc.concat(foundErrors)
    }
    return acc
  }, [])
  // console.log('errors', errors)
  return errors
}

function validateHtml(text = '', filePath = '') {
  const htmlvalidate = new HtmlValidate(config)
  const report = htmlvalidate.validateString(text)
  // console.log('report', report)
  const fpMessage = (filePath) ? ` in ${filePath}` : ''
  // console.log('report', report.results[0].messages)
  const errs = filterReport(report, fpMessage);
  // console.log('errs', errs)
  return errs
}

module.exports = {
  validateHtml,
  validateHtmlTags
}