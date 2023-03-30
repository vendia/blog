---
draft: false
title: "Smart APIs: Rethinking how to stand up the modern API"
description: Storing (your own) data isn’t particularly difficult and neither is
  defining or standing up an API. But ensuring that the parties that API
  connects are seeing the right data at the right times (and not seeing data
  they shouldn’t see)? That's a hard problem we've solved.
date: 2022-04-04
authors:
  - Tim Wagner
categories:
  - product
relatedPosts:
  - 2022-04-06-smart-apis-and-vendia-share
  - 2022-07-29-why-blockchains-databases-api-cannot-standalone-as-it-solutions
  - 2022-10-21-api-security-graphql
thumbnail: https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1671500250/Website/Iso/Global_scale_ssafji.png
seo:
  description: Storing (your own) data isn’t particularly difficult and neither is
    defining or standing up an API. But ensuring that the parties that API
    connects are seeing the right data at the right times (and not seeing data
    they shouldn’t see)? That's a hard problem we've solved.
  title: "Smart APIs: Rethinking how to stand up the modern API"
createdBy: alexa-vendia
createdAt: 2023-03-30T23:50:04.921Z
updatedBy: alexa-vendia
updatedAt: 2023-03-30T23:50:04.921Z
id: 80e2b511-07b8-478e-b1ec-5a3322737bee
---

APIs are critical to virtually all modern applications. From internal APIs shared between teams or departments to the surface area of global enterprises, APIs represent the public “contracts” of modern software systems and IT solutions. 

API protocols have also matured over the years, from [Electronic Data Interchange (EDI)](https://www.edibasics.com/what-is-edi/) to HTTP to [GraphQL](https://graphql.org/learn/), as both businesses and developers have evolved their demands on the data that APIs need to carry. The infrastructure for implementing APIs has advanced as well, from “rolling your own” to deploying open source libraries (such as [NGINX](https://en.wikipedia.org/wiki/Nginx)), to fully managed cloud services such as [Amazon API Gateway](https://aws.amazon.com/api-gateway/) and [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/).

But for all these advancements, the concept of an API as an "ignorant pipe” that doesn’t understand, control, or mediate its content has remained largely unchanged. 

APIs are all “syntax” and no “semantics”.

Put another way, an API doesn’t care if the data it carries (and carrying data is largely what APIs do) is right or wrong, consistent or inconsistent, complete or partial, up to date or radically out of date. And even if the data you drop into one side is perfect, by the time it reaches someone’s system on the other side, it may no longer be.

## The cost of old APIs functioning as ignorant pipes

A ton of developer time (and company cash) go into trying to close the API data gap. And that gap is huge: sharing data and keeping it consistent across companies, clouds, geographies (aka regions), accounts, and technology stacks is, [arguably](https://podcasts.apple.com/us/podcast/circles-of-trust/id1645908970), the single hardest challenge in modern-day applications. 

Most IT challenges ultimately come down to solving this problem. After all, storing (your own) data isn’t particularly difficult in 2022, and neither is defining or standing up an API. But ensuring that the parties that API connects are seeing the right data at the right times (and not seeing data they shouldn’t see)? That remains a hard problem, one that consumes untold amounts of people, distributed systems infrastructure, and monetary resources — even with all the advances that have been made over the last 20 years in API technology.

Is this a fundamental problem forced on us by the “physics” of software? Or is it an accident of design, reflecting an outdated methodology that hasn’t caught up with better alternatives?

## Could blockchain be the answer to multi-party data sharing?

In a word, yes. Leaving the details of API syntax aside, blockchains are all about moving data around while maintaining a uniformly consistent, correct, and up-to-date representation among all the various parties … even if those parties are mutually distrustful of each other. 

...And if crypto-style trust issues don’t sound relevant, just substitute “operationally and security isolated” or “employing enterprise-grade zero-trust architecture” for the term “mutual distrust” in the preceding sentence.

If you strip away topics like staking and on-chain incentive mechanisms and just focus on the distributed ledger aspects of blockchains, they appear to offer something that APIs are missing. They offer a simple way to move data across gaps (companies, clouds, organizations, regions, etc.) while keeping it consistent [everywhere](https://www.vendia.com/blog/real-time-everything) it lives. In other words, they’re smart about the data they carry, unlike an API. 

### Could distributed ledgers be the answer to filling the API data gap?

Let’s acknowledge that blockchains, at least conventional ones, don’t solve the kinds of challenges modern API solutions handle.

- No GraphQL (or HTTP) definition mechanisms
- No fully managed or SaaS-style hosting offering at the scale of an AWS, Azure, or GCP service
- No fault-tolerant and automatic scaling mechanism
- No easy cloud or event integration pattern,

Data consistency aside, blockchains might seem very far from being a solution to building a [smart API](https://www.vendia.com/blog/api-design-best-practices).

But what if we could put these two technologies together? 

Imagine a system that combined the very best of modern API hosting solutions with all the power of a distributed ledger to keep data securely consistent, correct, and up to date, regardless of where or how it was shared and with whom? 

## 15 characteristics of smart APIs

Such a system could close the API data gap. But to do so, the system would need to meet a lot of demanding requirements:

- High-speed, cross-cloud / cross-region / cross-account data sharing, with automatic cost and latency routing optimization ... all with zero application coding or operational cost to span any of these elements
- Full ACID semantics and support for user-specified transactions (groupings of updates into atomic changes)
- Automated batching and concurrency optimizations that require no application coding
- Automatic caching and storage optimization with intelligent tiering and heat management
- Decentralized implementation, where each party (or operationally and security-isolated region) has its own synchronized copy of the data without the need for a single, centralized agency holding all the data in escrow
- Built-in access controls and ownership models so that the owner of a piece of data, no matter how large or small, can control (and audit) who sees it and when
- Full support for versioning and lineage of all data that also obviates the need for separate application logging by providing a fully queryable audit trail for all changes
- Support for a broad variety of data types, from simple key/value pairs to highly structured business data to multi-terabyte files
- Easy, config-driven integration with other cloud services, including high-speed streaming, queueing, event hubs, cloud functions, etc.
- GraphQL-based APIs, generated automatically from a rich, standards-based data model, such as a JSON schema and supporting dynamic introspection for clients
- Built-in support for easy data model evolution as business needs change, with static (compiler-provided) checks for backward compatibility to guarantee clients won’t break across model updates
- Robust role-based access control and authentication/authorization model that provides each participant with the ability to model its local administrator and user profiles and control client access to any portion of the data model without reliance on (or visibility into) the configuration of any other participant or need for any “global settings”
- SaaS-style (i.e., fully managed), cloud-based deployment model that requires no third-party code deployments or server/container/Kubernetes management. “Serverless”-style, meaning scaling and fault tolerance are handled automatically by the system rather than through operational burdens on the application or its developers/operators
- Next-level fault tolerance, including the ability to survive cloud service provider outages, even for entire regions (such as the dreaded AWS “us-east-1 is done” scenarios)
- Ability to add participants in minutes without needing to write code, deploy software, or perform operational incantations

## Discover how Vendia Share's smart APIs work

Unlike existing blockchain solutions, Share has all the power of modern, [managed GraphQL APIs.](https://www.vendia.com/blog/why-we-combined-graphql-and-a-serverless-distributed-ledger) Unlike existing API solutions, it’s not “dumb” about the data it carries – it automatically keeps that data consistent and correct, without any effort on the part of the developer. Keep reading ["Vendia Share and smart APIs"](https://www.vendia.com/blog/smart-apis-and-vendia-share) to go deeper or connect with our [account solutions](https://meetings.hubspot.com/aashish3/contact-sales?) team with questions.