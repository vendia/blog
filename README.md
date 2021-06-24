# [Vendia's Blog](https://vendia.net/blog/)

Welcome to the Vendia blog repo!

[Contributions, typo fixes and pull requests are welcome](https://github.com/vendia/blog/new/master/post) :thumbsup:

## Table of Contents
<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>Click to expand</summary>

- [Posts](#posts)
- [How to contribute content](#how-to-contribute-content)
  * [TDLR;](#tdlr)
  * [1. Write your content in markdown!](#1-write-your-content-in-markdown)
  * [2. Name your post file name](#2-name-your-post-file-name)
  * [3. In your post, include post meta information:](#3-in-your-post-include-post-meta-information)
  * [4. Add your author bio](#4-add-your-author-bio)
  * [5. Submit a PR to the repository](#5-submit-a-pr-to-the-repository)
- [Adding external posts](#adding-external-posts)
- [Markdown Resources](#markdown-resources)
- [Recommended Writing Apps](#recommended-writing-apps)

</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Posts

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (POSTS_TABLE) -->
| Post Details | Published Date |
|:-------------|:--------------:|
| [Why I joined Vendia](https://vendia.net/blog/why-i-joined-vendia) <br/> Why I decided to joined Vendia's mission to enable secure data sharing across multiple clouds by Mike Gephart | 2021-06-23 |
| [Vendia Named a 2021 Gartner Cool Vendor in Cloud Computing](https://vendia.net/blog/gartner-cool-vendor) <br/> Vendia is included in Gartner's May 2021 Cool Vendors in Cloud Computing report by Tim Wagner + Shruthi Rao | 2021-06-08 |
| [Don't Rip and Replace - Integrate](https://vendia.net/blog/dont-rip-and-replace-integrate) <br/> Use Vendia Share to Complement Existing Data Stores by Brian McNamara | 2021-05-10 |
| [Vendia Turns 1](https://vendia.net/blog/vendia-turns-1) <br/> Vendia celebrates its first year as a C-corporation by Tim Wagner | 2021-03-31 |
| [Announcing Vendia Share DLQ Support](https://vendia.net/blog/whats-new-failed-tx-dlq) <br/> Vendia Share now reports failed transactions by Tim Wagner | 2021-03-17 |
| [Announcing Vendia Share Indexing Feature](https://vendia.net/blog/whats-new-indices) <br/> Vendia Share now support customer indices to improve data retrieval performance by Tim Wagner | 2021-03-10 |
| [Sharing Files in Vendia Share Unis](https://vendia.net/blog/sharing-files-in-a-uni) <br/> Sharing data across different organizations, accounts, and regions used to be hard...but Vendia Share Universal Apps make it easy by Glenn Dierkes | 2021-02-18 |
| [Creating a Cross Region Serverless Application in 5 Minutes](https://vendia.net/blog/multiregion-serverless-apps) <br/> How to create cross region serverless appplications by Brian McNamara | 2021-02-17 |
| [Announcing the Vendia Share Developer Preview!](https://vendia.net/blog/welcome-to-developer-preview) <br/> Launch announcement for the Vendia Share Developer Preview and Vendia's Series A by Tim Wagner + Shruthi Rao | 2021-02-03 |
| [Vendia Announces Series A Investment](https://vendia.net/blog/series-a-announcement) <br/> Vendia announces a $15.5M Series A investment, led by Canvas Ventures by Tim Wagner + Shruthi Rao | 2021-02-02 |
| [Understanding Decentralization in the Cloud](https://vendia.net/blog/decentralization) <br/> Explore how decentralization works in a cloud-native setting and how it can impact your business by Tim Wagner | 2021-02-01 |
| [STAMTI: A New Model for Delivering Cloud-based Services](https://vendia.net/blog/stamti) <br/> Learn about the STAMTI (single-tenanted accounts on multi-tenanted infrastructure) model by Tim Wagner | 2021-01-31 |
| [Getting Started With Vendia Share](https://vendia.net/blog/getting-started-with-vendia-share) <br/> Learn how to share code and data across accounts, regions, clouds, and partners with Vendia share by Cory Forsythe + Brian McNamara | 2021-01-29 |
| [Track & Trace Quickstart - Solving supply chain visibility through data sharing](https://vendia.net/blog/supply-chain-visibility-with-vendia-share) <br/> How to manage logistics across multiple parties regardless of their location and technology stack; forming the foundation of a real-world risk-management focused supply chain system by Cory Forsythe + Brian McNamara | 2021-01-25 |
| [Kind Humans Really Work Here](https://vendia.net/blog/kind-humans-really-work-here) <br/> Putting a company policy to the test by Brian McNamara | 2021-01-04 |
| [AWS Serverless Express Finds a Loving Home at Vendia](https://vendia.net/blog/serverless-express-finds-home-at-vendia) <br/> The AWS Serverless Express open source project graduates from AWS Labs and is now sponsored by Vendia by Brett Andrews + Tim Wagner | 2020-12-07 |
| [Tools That Shape Products](https://vendia.net/blog/tools-that-shape-products) <br/> How do the tools we have available shape what we build? by Ryan Scott Brown | 2020-11-16 |
| [Track and Trace using Vendia Unis + Blobs](https://vendia.net/blog/track-and-trace) <br/> Learn about how Vendia Unis + Blobs functionality can help streamline common supply chain track & trace issues by Glenn Dierkes | 2020-11-05 |
| [Meet Vendia's founders](https://vendia.net/blog/meet-vendias-founders) <br/> Meet Tim Wagner Vendia's CEO and Shruthi Rao Vendia's Vendia CBO by Tim Wagner + Shruthi Rao | 2020-07-01 |
| [Welcome to Vendia](https://vendia.net/blog/welcome-to-vendia) <br/> Our mission is to make it easy to share code and data across companies, cloud, geographies, and technology stacks by Tim Wagner + Shruthi Rao | 2020-06-30 |

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## How to contribute content

### TDLR;

1. Generate a new post file with `npm run new`
2. Write your markdown
3. Commit to the repo

### 1. Write your content in markdown!

New to markdown? [Read this](https://guides.github.com/features/mastering-markdown/)

Checkout the [markdown styleguide](https://github.com/vendia/blog/blob/master/posts/typography.mdx) for examples on how to format things.

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

[Click here to add a post](https://github.com/vendia/blog/new/master/posts) or submit a PR.

**External contributors**

To contribute, fork this repo and submit a PR.

We will review and publish your post with our audience on [vendia.net](https://vendia.net/blog/).

Ping us with any questions on [Twitter @VendiaHQ](http://twitter.com/VendiaHQ) or [post an issue](https://github.com/vendia/blog/issues/new).

---

## Adding external posts

If you'd like to include an external post written about vendia, you can do so by adding the post to the [./posts/external-posts.json](./posts/external-posts.json) file.

## Markdown Resources

Our blog posts are written in markdown and support standard [Github flavored markdown](https://guides.github.com/features/mastering-markdown/). If you are new to Markdown, don't fret, check out this handy [how to guide on writing in markdown](https://blog.ghost.org/markdown/)

Need a Markdown editor? Give [stackedit.io](https://stackedit.io/editor), [Byword](https://bywordapp.com/) or [typora](https://www.typora.io/) a spin.

Need to convert a Google doc to Markdown? [Install this Google Docs extension](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607)

Need to convert HTML to Markdown? You can use [this handy html to markdown converter](https://domchristie.github.io/to-markdown/)

Need to convert Word to Markdown? You can use [this handy Word to Markdown Converter](https://word-to-markdown.herokuapp.com/)

[Downloading images from google docs](https://www.bettercloud.com/monitor/the-academy/3-easy-ways-download-images-google-docs/). Recommended to save it as an HTML file

> In Docs, go to File > Download as > Web Page (.html, zipped).

## Recommended Writing Apps

- [Hemingway App](http://www.hemingwayapp.com/desktop.html) - Hemingway helps you write with power and clarity by highlighting adverbs, passive voice, and dull, complicated words
- [Grammarly](http://www.grammarly.com/) - Make Your Writing Clear and Engaging. Easily improve any text. Eliminate grammar errors
