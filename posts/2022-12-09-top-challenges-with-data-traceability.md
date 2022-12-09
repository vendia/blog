---
draft: false
title: Top challenges with data traceability
description: Get familiar with the historical and modern challenges of data
  traceability, so you can better understand your own (and your data sharing
  partners’) data lineage mistakes and solutions.
date: 2022-12-08
authors:
  - Tim Wagner
  - Francine Klein
categories:
  - real-time-data-sharing
  - concepts
relatedPosts:
  - 2022-12-08-5-patterns-for-successful-data-traceability
  - 2022-06-07-real-time-data-sharing-pros-cons
  - 2022-01-27-scale-your-partner-ecosystem-with-vendia-share
seo:
  noindex: false
  title: Top challenges with data traceability
  keywords: data traceability, data lineage
  description: Get familiar with the historical and modern challenges of data
    traceability, so you can better understand your own (and your data sharing
    partners’) data lineage mistakes and solutions.
updatedBy: alexa-vendia
updatedAt: 2022-12-09T00:06:43.325Z
---

Solutions that address data traceability are often built outside of the systems in which the business data is generated — [if they’re built at all](https://www.vendia.com/blog/5-patterns-for-successful-data-traceability). Historically, data traceability was tracked in many different ways, and the repositories used to store it (e.g. audit trails, application logs, or secondary databases) and the owners of those systems usually determined how this information was accessed, described, and handled.  

Challenges in implementing data traceability solutions can arise for several reasons including Conway’s Law, second-class citizenry, partner visibility, snapshot blindspots, and nesting solutions.

### Data traceability challenge no. 1 – Conway’s Law

The technical solution is stitched together in a way that [mirrors the organization’s communication styles](https://www.melconway.com/Home/Conways_Law.html) or gaps. Historically, different services were used to record different elements of the data traceability solution, even within a single company. This [“Tower of Babel”](https://en.wikipedia.org/wiki/Tower_of_Babel) approach makes it challenging to use data traceability productively, even when the underlying information is actually present in some corner of IT. It requires another layer of reconciliation across the stack of solutions to effectively answer any of the data traceability questions.

### Data traceability challenge no. 2 – Second-class citizenry

Business data itself is usually treated with care. It’s stored in a highly durable and highly available storage service, secured with proper mechanisms, and comes with APIs and/or query languages that [make accessing it easy](https://www.vendia.com/blog/top-10-data-modeling-techniques) for business owners and developers. But metadata, historical copies, and access controls are often “second-class citizens” without the benefit of query languages, business-specific data schemas, and other perks that the original data benefits from. [Tracking down information](https://www.vendia.com/blog/blockchain-mortgage-services) about them usually requires an email or a phone call, and it may take weeks of time to complete the tracking without access to automation.

### Data traceability challenge no. 3 – Partner visibility

In today’s world, most critical business data lies [outside](https://www.vendia.com/blog/b2b-data-sharing) a company’s four walls. It arises from suppliers, financial partners, logistics and delivery partners, and so forth. But without tight integration and deep and broad access to all the systems responsible for data provenance in a partner’s IT department, visibility into any part of the data traceability solution is problematic and error-prone. There can be serious gaps that result in a lack of trust. In other words, when even sharing the data itself is fraught with challenges, the remaining components of traceability tend to be forgotten or ignored.

### Data traceability challenge no. 4 – Snapshot blindspots

Database snapshots (essentially a copy of the data at a given point in time) are a common implementation for [visibility](https://www.vendia.com/blog/how-blockchain-makes-supply-chains-predictable) into the history of data changes. However, capturing the data’s version history based on incremental snapshots will only tell part of the picture — the state of the data only at the time the snapshot is taken. If snapshots occur nightly, any intraday movement in the data will be lost since, as only the values at the end of the day will be tracked. More commonly, these snapshots are manual and, therefore, taken weekly, monthly, or quarterly. These incremental snapshots create even larger blindspots of valuable data changes. In addition, these traceability solutions often stop at only the version history and omit the audit data of who can, and did, make a change.

### Data traceability challenge no. 5 – Nesting solutions

Implementations of traceability solutions, whether stitching together a stack of solutions or building a centralized tracking tool, will still require traceability on the solutions themselves. In the simplest form, a centralized data traceability solution built “next to” the applications must also have data traceability on itself as a data system, creating a sense of a recursive loop. In the more complex scenarios in which traceability is accomplished with a series of tools, the insight on who can act and who has acted on the traceability (i.e. traceability on traceability) is likely lost.

If data traceability is even built, it’s focused almost exclusively on tracing the data’s journey "within the four walls" of a business. In the [increasingly decentralized](https://www.vendia.com/blog/shared-data-architecture) world of data, and expansions of business alliances, the lack of traceability from upstream and downstream systems is now often unacceptable.

## Resolve your data traceability challenges with Vendia Share

If a data traceability solution is part of your organization's data priorities, take a closer look at [Vendia Share](https://vendia.com/product). Our platform will help automate and accelerate your data workflows across multi-party business networks so you always have a real-time, accurate, single source of truth to analyze and operate from. [Contact us](https://vendia.com/contact-us) to discuss your data priorities.