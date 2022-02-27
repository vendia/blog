const { onlyUnique } = require('./filters')

// https://regex101.com/r/Nywerx/3
const RELATIVE_LINKS_REGEX = /(src|href|\()=?(['"/])(?!(?:(?:https?|ftp):\/\/|data:))(\.?\/)?([\w\d-_./?=#%:+&]+)(?:['")])?/gim

/*
Match relative links
<h1 jdjdjjdjd=lksjskljfsdlk="jdjdj">Netlify + FaunaDB &nbsp;&nbsp;&nbsp; 
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-faunadb-example&stack=fauna">
  <img src="../../../../img/deploy/lol.svg">
  </a>
</h1>
[link](/my-great-page)
<a href="img/deploy/one.svg">cool</a>
<img src="img/deploy/duplicate.svg" />
<img src="img/deploy/duplicate.svg" >
<img src="/img/deploy/three.svg" />
<img src='/img/deploy/four.svg' />
<img src='./img/deploy/five.svg' />
<img src='../img/deploy/button.svg' />
<img src='../../img/deploy/button.svg' />
<img src="https://www.netlify.com/img/deploy/button.svg" />
<img src="https://www.netlify.com/img/deploy/button.svg" />
![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")
*/

function findRelativeLinks(block) {
  let matches
  let relLinks = []
  while ((matches = RELATIVE_LINKS_REGEX.exec(block)) !== null) {
    if (matches.index === RELATIVE_LINKS_REGEX.lastIndex) {
      RELATIVE_LINKS_REGEX.lastIndex++ // avoid infinite loops with zero-width matches
    }
    // console.log(matches)
    const [ match, _, start, link, x ] = matches
    const one = (start === '/') ? start : ''
    const two = (link === '/') ? link : ''
    relLinks.push(`${one}${two}${x}`)
  }
  return relLinks.filter(onlyUnique)
}

module.exports = {
  findRelativeLinks,
  RELATIVE_LINKS_REGEX
}
