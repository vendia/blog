# [Vendia's Blog](https://vendia.net/blog/)

Welcome to the Vendia blog repo! 

[Contributions, typo fixes and pull requests are welcome](https://github.com/vendia/blog/new/master/post) :thumbsup:

## Table of Contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>Click to expand</summary>

- [How to contribute content](#how-to-contribute-content)
  * [1. Write your content in markdown!](#1-write-your-content-in-markdown)
  * [2. Name your post file name](#2-name-your-post-file-name)
  * [3. In your post, include post meta information:](#3-in-your-post-include-post-meta-information)
  * [4. Add your author bio](#4-add-your-author-bio)
  * [5. Submit a PR to the repository](#5-submit-a-pr-to-the-repository)
- [Including Custom Scripts](#including-custom-scripts)
- [Markdown Resources](#markdown-resources)
- [Recommended Writing Apps](#recommended-writing-apps)

</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## [How to contribute content](https://www.youtube.com/watch?v=ps1oQeg-0ss)

### 1. Write your content in markdown!

New to markdown? [Read this](https://guides.github.com/features/mastering-markdown/)

---

### 2. Name your post file name

Blog posts need to be titled with a date prefix. This helps us keep the content nice and organized here in git.

Make sure to prefix post titles with the year, month and date in this format `YYYY-MM-DD`.

**Example:**

`YYYY-MM-DD-blog-post-name.md` :point_right: `2016-01-27-post-title-here.md`

Here is a [handy tool for slugifying blog post titles](https://blog.tersmitten.nl/slugify/)

---

### 3. In your post, include post meta information:

Include the post metadata at the top:

```yml
---
title: 'My awesome post title'
description: 'This post is about awesome stuff!'
date: '2016-07-25'
thumbnail: 'http://url-to-thumbnail.jpg'
authors:
  - FirstName LastName
---
```

Below the post meta, add your markdown:

```md
# Post Heading

This is an awesome paragraph!

## Post SubSection

[Link example](http://my-full-url-with-http-at-the-front.com)

* List item 1
* List item 2
* List item 3

```

To include code snippets in your post wrap them in "```" blocks witht the name of the syntax used

<pre>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu, eu pretium nisi. Praesent fringilla ornare ullamcorper. 

```js
// code snippet with javascript syntax highlighting
console.log('JS code')
```
</pre>

---

### 4. Add your author bio

If you haven't created an author bio in the `/authors` folder. Go ahead and do that now.

The name of the file should be the same as the name field used in the blog post meta data. Format: `FirstnameLastname` (note the caps and no space!)

Example `authors/DavidWells.json` and `DavidWells` in the `authors` field below are the same name and capitalization.

```yml
---
layout: Post
title: David's Amazing Post
authors:
 - David Wells # references data in authors/DavidWells.json file
---
```

### 5. Submit a PR to the repository

**Vendia team members**

[Click here to add a post](https://github.com/vendia/blog/new/master/post) or submit a PR.

**External contributors**

To contribute, fork this repo and submit a PR.

We will review and publish your post with our audience on [vendia.net](https://vendia.net/blog/).

Ping us with any questions on [Twitter @VendiaHQ](http://twitter.com/VendiaHQ) or [post an issue](https://github.com/vendia/blog/issues/new).

---

## Markdown Resources

Our blog posts are written in markdown and support standard [Github flavored markdown](https://guides.github.com/features/mastering-markdown/). If you are new to markdown, don't fret, check out this handy [how to guide on writing in markdown](https://blog.ghost.org/markdown/)

Need a markdown editor? Give [stackedit.io](https://stackedit.io/editor), [Byword](https://bywordapp.com/) or [typora](https://www.typora.io/) a spin.

Need to convert a Google doc to markdown? [Install this chrome extension](https://chrome.google.com/webstore/detail/export-as-markdown/hbojhdcnbcondcdfpfocpkjkfkbnbdad)

Need to convert HTML to markdown? You can use [this handy html to markdown converter](https://domchristie.github.io/to-markdown/)

Need to convert Word to markdown? You can use [this handy Word to Markdown Converter](https://word-to-markdown.herokuapp.com/)

## Recommended Writing Apps

- [Hemingway App](http://www.hemingwayapp.com/desktop.html) - Hemingway helps you write with power and clarity by highlighting adverbs, passive voice, and dull, complicated words
- [Grammarly](http://www.grammarly.com/) - Make Your Writing Clear and Engaging. Easily improve any text. Eliminate grammar errors.
