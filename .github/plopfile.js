const slugify = require('slugify')

function plopConfig(plop) {
  plop.setHelper('date', () => formatDate())

  plop.setHelper('slugify', text => {
    return slugify(text, { lower: true, remove: /[']/g })
  })

  plop.setGenerator('post', {
    description: 'Create a new blog post.',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the blog post?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the blog post about?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../posts/{{date}}-{{slugify title}}.md',
        templateFile: '_templates/post.hbs',
      },
    ],
  })
}

function formatDate() {
  const d = new Date()
  const month = '' + (d.getMonth() + 1)
  const day = '' + d.getDate()
  const year = d.getFullYear()

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-')
}

module.exports = plopConfig
