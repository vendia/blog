---
draft: false
title: Vendia Share and Smart APIs
description: Learn how Vendia Share helps APIs do more for you. If you can model
  your data using JSON Schema and list the clouds and regions where you’d like
  APIs to be present, Vendia Share can craft a secure, scalable,
  production-grade deployment in a few minutes and then maintain it
  automatically.
date: 2022-04-06
authors:
  - Tim Wagner
categories:
  - product
relatedPosts:
  - 2022-04-04-smart-apis
  - 2022-09-15-api-design-best-practices
  - 2022-10-27-codeless-apis
tags:
  - use cases
  - API
thumbnail: https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1671500250/Website/Iso/Global_scale_ssafji.png
seo:
  description: Learn how Vendia Share helps APIs do more for you. If you can model
    your data using JSON Schema and list the clouds and regions where you’d like
    APIs to be present, Vendia Share can craft a secure, scalable,
    production-grade deployment in a few minutes and then maintain it
    automatically.
  title: Vendia Share and smart APIs
createdBy: alexa-vendia
createdAt: 2023-03-30T23:45:43.719Z
updatedBy: alexa-vendia
updatedAt: 2023-03-30T23:45:43.719Z
id: ce3aed63-1e2d-4cc2-980d-35a54fa80aa8
---

One of the key realizations that led to the patented technologies underpinning Vendia Share is that the work of data distribution over APIs, while technically challenging, is utterly undifferentiated. 

Unless you’re Netflix or [YouTube](https://www.youtube.com/channel/UCtj8uWkQhnngKit7RZPoziA), 99.9% of the data shared internally or externally through APIs looks like either “database values” or “files.” A solution that embraces both (and solves all the hard challenges in the list above) can thus offer a broad, industry- and application-agnostic API solution for individual developers looking for an easy way to stand up an API...all the way to a globe-spanning Fortune 10 company that needs the highest level of enterprise-grade API and data platforming.

### Serverless + APIs

The “API part” of Vendia Share is built using cloud-grade components that scale automatically with request traffic. 

This Serverless design helps ensure two things:

1. Tight cost enveloping (because the marginal cost of owning and operating the system is zero when its not in use, whether that’s for a second or a year) as well as the ability to handle massive amounts of traffic (through implementations that are highly multi-tenanted at the hardware level). We call this architectural pattern STAMTI: Single-tenanted accounts over multi-tenanted infrastructure.
2. Vendia layers a revolutionary cloud-based consensus architecture capable of keeping data fully consistent across different clouds, companies, regions, and technology stacks. Because it understands the data, the consensus algorithm can make intelligent decisions about everything from how to route traffic between clouds to minimize cost implementations to how to batch data without violating ordering guarantees or consistency semantics. While those algorithms are quite complex (among other things, they involve carrying out on-the-fly commutativity and associativity proofs), they are agnostic to the specifics of the data, meaning that they can work equally well for two airlines ✈️ sharing routing information for a traveler to two different departments sharing employee account data to a media company sharing an updated version of a movie with a theater.

## Compiler and Saas offering = 🚀

To make the system easy to use, Vendia Share includes a custom compiler that automatically turns data models (e.g., in the form of a JSON schema) into public cloud deployments. Developers don’t need to understand the dozens of AWS, Azure, and GCP services required to make all this work. They only need to know their [data model](https://www.vendia.com/blog/top-10-data-modeling-techniques) and then connect to modern, easy-to-use GraphQL APIs over HTTPS. 

The compiler and SaaS-style deployment infrastructure handle the hard job of converting data models to database and API configurations, including complex tasks like managing indices and access controls.

Sharing data is a challenge, but ensuring that the right data is shared with the right people is even more critical. Laid directly into the consensus and replication layers of the platform is full support for security, on-the-fly and at-rest encryption, and a powerful access control and rights-based identity management solution that ensures that every bit of data can be secured and access controlled at all times. The platform can even model changing access over time to express concepts like sharing versions 4 and 6 of a file with a third party while not providing them access to version 5.

### Monitoring and fault-tolerance

Under the covers, Vendia Share provides an enterprise-grade self-monitoring implementation wired directly into its consensus engine. This way, if a cloud service provider has an outage, such as a failure of the AWS us-east-1 region, other parties can continue sharing data, and the system can “self-heal” any copies in us-east-1 when the region recovers. 

Users can even invite [new business partners](https://www.vendia.com/blog/multi-party-data-sharing-with-control) or add other clouds or regions at any time *without writing any code*. 

Because it understands the data and the data’s lineage, Vendia Share can automatically deploy new regions, backfill their local storage, and add them to the consistency maintenance fabric automatically. Development and deployment challenges like going multi-region or multi-cloud, which can take hundreds of developers and multiple years to accomplish using Kubernetes or other low-level approaches, can now be reduced to a couple of lines of configuration for Vendia-based applications.

### **What can you build with Vendia Share?**

The short answer is, “If you can build an API for it today, you can probably build it simpler, easier, and with far lower operating and staffing costs using Vendia Share.” 

Share gives you a simple way to model the bread and butter of applications – so-called CRUD APIs – that handle the process of creating, reading, updating, and deleting both scalar and file data. 

Like a cloud-based database, it can handle high-speed storage of scalar items, varying levels of read consistency retrievals, and offers the full power of ACID transaction grouping despite supporting multi-party and multi-cloud consensus. In other words, you don’t have to give up all the benefits of strong consistency and transactions when you need to share data across regions, clouds, or with other parties, keeping your application easy to create and prove correct.

Because Share uses GraphQL and provides built-in schema evolution as your data model needs change, you’re never “stuck”. Share isn’t a one-time deployment tool or a facade on top of someone else’s technology: **It’s an enterprise-grade platform capable of efficiently sharing a single string or hundreds of thousands of transactions a second.** 

### Easy back-end to multi-cloud enterprise solutions

Vendia Share can span a single developer looking for an easy way to create an app all the way to an enterprise looking for a multi-cloud operational data sharing solution. 

And the platform’s data replication is just the core of a suite of capabilities that includes elements like smart contracts that make it easy to create stateful, transactional data triggers and workflows in any language... you’re never locked into a single cloud provider, a proprietary data format, or a hard-to-learn language like Solidity.

Customers have used Vendia Share to build a variety of solutions. 

🏢 Enterprises with complex supply and logistics chains rely on Vendia Share to create a “single source of truth” across supplies, manufacturing plants, and distributors to tackle some of the most challenging delivery problems facing the world today. 

🐶 Pet care providers have used Vendia Share to create a universal registry of lost and abandoned animals with a goal of getting them to safe homes. 

🏦 Financial service companies can easily “connect the dots” between consumers and vendors to ensure that everyone sees the same, auditable information about balances, financial ledgers, and accounts at all times. 

💺Travel companies and providers use Vendia Share to create a single, seamless view of everything from tickets to traveler information to payment settlement. 

🛏️ Hotels use Vendia Share to efficiently sell rooms across multiple web and mobile platforms without risk of over- or under-selling. 

👩🏽‍💻 Startups use Vendia Share to model their entire backend system, enabling them to concentrate on the user experience and product-market fit instead of building large distributed systems engineering teams just to get started. 

These are just a few of the many ways in which Vendia Share can accelerate time to market and lower the ongoing cost of API ownership. 

From a single developer who wants to create a low-cost hobby project, to a mid-market company looking to build cloud-based workflows without staffing up a huge engineering team, to an enterprise division strapped for time and cash and looking to get projects to market faster, everyone needs the same thing — everyone needs APIs that do more for them with less work and lower cost.  

### What about performance?

If you’ve ever looked into blockchains, especially public chains like Ethereum, you’d be right to be worried. At $25-50 per write, 14 TPS in worldwide capacity, and needing up to 15 minutes of settle time (aka latency), a lot of existing distributed ledger technology would be a poor match to high-speed, highly available API needs for conventional applications. 

Fortunately, smart APIs don’t rely on legacy blockchain protocols. They’re engineered from the ground up, using cloud-native technology, massively scalable serverless consensus engines. They're also designed to tightly envelope costs so that things “turn off” when there’s no work being done. 

Smart APIs perform like best-of-breed public cloud services because they’re built using the same techniques, such as multi-tenanting for economics, fault tolerance, and low-latency capacity allocation.

## Getting started with Vendia Share

Because it’s schema-driven and SaaS-based, getting started with Vendia Share couldn’t be easier. If you can model your data using JSON Schema and list the clouds and regions where you’d like APIs to be present, Vendia Share can craft a secure, scalable, production-grade deployment in a few minutes and then maintain it automatically. 

If your data modeling needs to change, you can easily evolve the schema in a self-service fashion. And Vendia Share offers both a free tier to experiment without cost as well as a monthly pay-as-you-go subscription that provides full flexibility to allocate your subscription towards whatever your application needs, whether that’s file storage, scalar reads, or GraphQL subscription deliveries. Mobile, web, cloud, or on-prem applications ... whatever you’re building, you can get started in minutes and grow without limits using Vendia Share as your API and data platform.

### Tired of building with “ignorant pipes?” 

In under five minutes, you can turn a JSON schema into a production-ready, GraphQL-enabled smart API for free and see how it works for yourself. [Sign up for the app](https://share.vendia.net/), and start building.