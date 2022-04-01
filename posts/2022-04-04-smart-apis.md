# Smart APIs

---
title: 'Smart APIs'

description: 'Evolve from “dumb pipes” to APIs that work for you'

date: '2022-04-04'

authors:
  - Tim Wagner
---

## **APIs: A Tradition of “Dumb Pipes”** 🔧

APIs are critical to virtually all modern applications. From internal APIs shared between teams or departments to the surface area of global enterprises, APIs represent the public “contracts” of modern software systems and IT solutions. 

API protocols have also matured over the years, from [Electronic Data Interchange (EDI)](https://www.edibasics.com/what-is-edi/) to HTTP to [GraphQL](https://graphql.org/learn/), as both businesses and developers have evolved their demands on the data that APIs need to carry. The infrastructure for implementing APIs has advanced as well, from “rolling your own” to deploying open source libraries (such as [NGINX](https://en.wikipedia.org/wiki/Nginx)), to fully managed cloud services such as [Amazon API Gateway](https://aws.amazon.com/api-gateway/) and [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/). 

But for all these advancements, the conceptual role of an API – that of a “dumb pipe” that doesn’t understand, control, or mediate its content – has remained largely unchanged: APIs are all “syntax”, no “semantics”. 

To put it another way, *a**n API doesn’t care if the data it carries (and carrying data is largely what APIs do) is right or wrong, consistent or inconsistent, complete or partial, up to date or radically out of date.*** And even if the data you drop into one side is perfect, by the time it reaches someone’s system on the other side it may no longer be.

## The Cost of Dumb Pipes

As a result, a ton of developer time (and company 💰) go into trying to close what we like to call the API data gap. And that gap is huge: Sharing data, and keeping it consistent across companies, clouds, geographies (aka regions), accounts, and technology stacks is arguably the single hardest challenge in modern day applications. 

Most IT challenges ultimately come down to solving this problem – storing (your own) data isn’t particularly difficult in 2022, and neither is defining or standing up an API. But ensuring that the parties that API connects are seeing the right data at the right times (and not seeing data they shouldn’t see)? That remains a hard problem, one that consumes untold amounts of people, distributed systems infrastructure, and monetary resources, even with all the advances that have been made over the last 20 years in API technology.

# **Could Blockchains be the Answer?** ⛓️

Is this a fundamental problem, forced on us by the “physics” of software? Or is it an accident of design, reflecting an outdated methodology that hasn’t caught up with better alternatives? 

To explore the answer, it’s useful to look at a different technology, one not normally associated with APIs: *blockchains and other types of distributed ledgers*. 

### **Why blockchains?**

Because, leaving the details of API syntax aside, they are all about moving data around while maintaining a uniformly consistent, correct, and up-to-date representation among all the various parties … even if those parties are mutually distrustful of each other. (If crypto-style trust issues don’t sound relevant, just substitute “operationally and security isolated” or “employing enterprise-grade zero-trust architecture” for the term “mutual distrust” in the preceding sentence.) 

If you strip away topics like staking and on-chain incentive mechanisms and just focus on the distributed ledger aspects of blockchains, they appear to offer something that APIs are missing: **A simple way to move data across gaps (companies, clouds, organizations, regions, etc.) while keeping it consistent everywhere it lives. In other words, they’re smart about the data they carry, unlike an API.** 

### **Could distributed ledgers be the answer to filling the API data gap?**

Because we get carried away thinking the problem is solved, let’s acknowledge that blockchains, at least conventional ones, don’t solve the kinds of challenges modern API solutions handle.

Problems with traditional APIs

- No GraphQL (or HTTP) definition mechanisms
- No fully managed or SaaS-style hosting offering at the scale of an AWS, Azure, or GCP service
- No fault-tolerant and automatic scaling mechanism
- No easy cloud or event integration pattern,

You’d certainly be forgiven for thinking that – data consistency aside – blockchains are very far from being a solution to building a smart API.

But what if we could put these two technologies together? 

Imagine a system that combined the very best of modern API hosting solutions with all the power of a distributed ledger to keep data securely consistent, correct, and up to date, regardless of where or how it was shared and with whom? 

# Characteristics of Smart APIs 🤓

Such a system could close the API data gap, but to do so it would need to meet a lot of demanding requirements:

- High-speed, cross-cloud / cross-region / cross-account data sharing, with automatic cost and latency routing optimization ... all with zero application coding or operational cost to span any of these elements
- Full ACID semantics and support for user-specified transactions (groupings of updates into atomic changes)
- Automated batching and concurrency optimizations that require no application coding
- Automatic caching and storage optimization with intelligent tiering and heat management
- Decentralized implementation, where each party (or operationally and security-isolated region) has its own, synchronized copy of the data without the need for a single, centralized agency holding all the data in escrow
- Built-in access controls and ownership models, so that the owner of a piece of data, no matter how large or small, can control (and audit) who sees it and when
- Full support for versioning and lineage of all data that also obviates the need for separate application logging by providing a fully queryable audit trail for all changes
- Support for a broad variety of data types, from simple key/value pairs to highly structured business data to multi-terabyte files
- Easy, config-driven integration with other cloud services, including high-speed streaming, queueing, event hubs, cloud functions, etc.
- GraphQL-based APIs, generated automatically from a rich, standards-based data model, such as a JSON schema and supporting dynamic introspection for clients
- Built-in support for easy data model evolution as business needs change, with static (compiler-provided) checks for backwards compatibility to guarantee clients won’t break across model updates
- Robust role-based access control and authentication/authorization model that provide each participant with the ability to model its local administrator and user profiles and control client access to any portion of the data model, without reliance on (or visibility into) the configuration of any other participant or need for any “global settings”
- SaaS-style (i.e. fully managed), cloud-based deployment model that requires no third party code deployments or server/container/Kubernetes management. “Serverless”-style, meaning scaling and fault tolerance are handled automatically by the system rather than through operational burdens on the application or its developers/operators
- Next-level fault tolerance, including the ability to survive cloud service provider outages, even for entire regions (such as the dreaded AWS “us-east-1 is done” scenarios)
- Ability to add participants in minutes without needing to write code, deploy software, or perform operational incantations

## Part 2: Vendia Share and Smart APIs

The list above might sound like a pipe dream (pun very much intended), but it reflects an actual product offering: [Vendia Share](http://www.vendia.net/). 

We incorporated all our experience building managed API solutions in the cloud at AWS and all our insights gleaned from Coinbase and other distributed blockchain companies to create a solution that offers the best of all worlds: *a truly smart API*. 

Unlike existing blockchain solutions, Share has all the power of modern, [managed GraphQL APIs.](https://www.vendia.net/blog/why-we-combined-graphql-and-a-serverless-distributed-ledger) Unlike existing API solutions, it’s not “dumb” about the data it carries – it automatically keeps that data consistent and correct, without any effort on the part of the developer.

### **How Vendia Share Implements Smart APIs**

One of the key realizations that led to the patented technologies underpinning Vendia Share is that the work of data distribution over APIs – while technically challenging – is utterly undifferentiated. 

Unless you’re Netflix or YouTube, 99.9% of the data shared internally or externally through APIs looks like either “database values” or “files”. A solution that embraces both (and solves all the hard challenges in the list above) can thus offer a broad, industry -and application- agnostic API solution for individual developers looking for an easy way to stand up an API all the way to a globe-spanning Fortune 10 company that needs the highest level of enterprise-grade API and data platforming.

### Serverless + APIs

The “API part” of Vendia Share is built using cloud-grade components that scale automatically with request traffic. 

This serverless design helps ensure 2 things:

1. Tight cost enveloping (because the marginal cost of owning and operating the system is zero when its not in use, whether that’s for a second or a year) as well as the ability to handle massive amounts of traffic (through implementations that are highly multi-tenanted at the hardware level). We call this architectural pattern STAMTI: Single-tenanted accounts over multi-tenanted infrastructure.
2. Vendia layers a revolutionary cloud-based consensus architecture capable of keeping data fully consistent across different clouds, companies, regions, and technology stacks. Because it understands the data, the consensus algorithm can make intelligent decisions about everything from how to route traffic between clouds to minimize cost implementations to how to batch data without violating ordering guarantees or consistency semantics. While those algorithms are quite complex (among other things, they involve carrying out on-the-fly commutativity and associativity proofs), they are agnostic to the specifics of the data, meaning that they can work equally well for two airlines ✈️ sharing routing information for a traveler to two different departments sharing employee account data to a media company sharing an updated version of a movie with a theater.

## Compiler and Saas offering = 🚀

To make the system easy to use, Vendia Share includes a custom compiler that automatically turns data models (e.g., in the form of a JSON schema) into public cloud deployments. **Developers don’t need to understand the dozens of AWS, Azure, and GCP services required to make all this work ... they only need to know their data model and then connect to modern, easy-to-use GraphQL APIs over HTTPS.** 

The compiler and SaaS-style deployment infrastructure handle the hard job of converting data models to database and API configurations, including complex tasks like managing indices and access controls.

Sharing data is a challenge, but ensuring that the right data is shared with the right people is even more critical. Laid directly into the consensus and replication layers of the platform is full support for security, on-the-fly and at-rest encryption, and a powerful access control and rights-based identity management solution that ensures that every bit of data can be secured and access controlled at all times. The platform can even model changing access over time, to express concepts like sharing version 4 and 6 of a file with a third party while not providing them access to version 5.

### Monitoring and fault-tolerance

Under the covers, Vendia Share provides an enterprise-grade self-monitoring implementation wired directly into its consensus engine. This way, if a cloud service provider has an outage, such a failure of the AWS us-east-1 region, other parties can continue sharing data and the system can “self heal” any copies in us-east-1 when the region recovers. 

Users can even invite [new business partners](https://www.vendia.net/blog/multi-party-data-sharing-with-control) or add other clouds or regions at any time ... *without writing any code*. Because it understands the data, and the data’s lineage, Vendia Share can automatically deploy new regions, backfill their local storage, and add them to the consistency maintenance fabric automatically. Development and deployment challenges like going multi-region or multi-cloud, which can take hundreds of developers and multiple years to accomplish using Kubernetes or other low-level approaches, can now be reduced to a couple lines of configuration for Vendia-based applications.

### **What Can You Build with Vendia Share?**

The short answer is, “If you can build an API for it today, you can probably build it simpler, easier, and with far lower operating and staffing costs using Vendia Share.” 

Share gives you a simple way to model the bread and butter of applications – so-called CRUD APIs – that handle the process of creating, reading, updating, and deleting both scalar and file data. 

Like a cloud-based database, it can handle high speed storage of scalar items, varying levels of read consistency retrievals, and offers the full power of ACID transaction grouping despite supporting multi-party and multi-cloud consensus. In other words, you don’t have to give up all the benefits of strong consistency and transactions when you need to share data across regions, clouds, or with other parties, keeping your application easy to create and prove correct.

Because Share uses GraphQL and provides built-in schema evolution as your data model needs change, you’re never “stuck”. Share isn’t a one-time deployment tool or a facade on top of someone else’s technology: **It’s an enterprise-grade platform capable of efficiently sharing a single string or hundreds of thousands of transactions a second.** 

### Easy back-end to multi-cloud enterprise solutions

Vendia Share can span a single developer looking for an easy way to create an app all the way to an enterprise looking for a multi-cloud operational data sharing solution. 

And Share’s data replication is just the core of a suite of capabilities that includes elements like smart contracts that make it easy to create stateful, transactional data triggers and workflows in any language... you’re never locked into a single cloud provider, a proprietary data format, or a hard-to-learn language like Solidity.

Customers have used Vendia Share to build a variety of solutions. 

🏢 Enterprises with complex supply and logistics chains rely on Vendia Share to create a “single source of truth” across supplies, manufacturing plants, and distributors to tackle some of the most challenging delivery problems facing the world today. 

🐶 Pet care providers have used Vendia Share to create a universal registry of lost and abandoned animals with a goal of getting them to safe homes. 

🏦 Financial service companies can easily “connect the dots” between consumers and vendors to ensure that everyone sees the same, auditable information about balances, financial ledgers, and accounts at all times. 

💺Travel companies and providers use Vendia Share to create a single, seamless view of everything from tickets to traveler information to payment settlement. 

🛏️ Hotels use Vendia Share to efficiently sell rooms across multiple web and mobile platforms without risk of over- or under-selling. 

👩🏽‍💻 Startups use Vendia Share to model their entire backend system, enabling them to concentrate on the user experience and product-market fit instead of building large distributed systems engineering teams just to get started. 

These are just a few of the many ways in which Vendia Share can accelerate time to market and lower the ongoing cost of API ownership.

These use cases span many industries, sectors, and sizes ... from two-person startups to massive Fortune 100 enterprises. But they have one thing in common ... they all asked the question: *If we could remove 95% of the effort required to build and connect APIs that carry our most precious assets with partners, vendors, and users, what could we innovate and deliver with those saved resources?*  For more on this read [The Lean App Movement](https://www.vendia.net/blog/lean-app).

One of our key realizations is that everyone needs the same thing: from a single developer who wants to create a low-cost hobby project to a mid-market company looking to build cloud-based workflows without staffing up a huge engineering team to an enterprise division strapped for time and cash and looking to get projects to market faster, ***everyone needs APIs that do more for them, with less work and lower cost.***  

### **What about Performance?**

If you’ve ever looked into blockchains, especially public chains like Ethereum, you’d be right to be worried: At $25-50 per write, 14 TPS in worldwide capacity, and needing up to 15 minutes of settle time (aka latency), a lot of existing distributed ledger technology would be a poor match to high-speed, highly available API needs for conventional applications. 

Fortunately, Smart APIs don’t rely on legacy blockchain protocols. They’re engineered from the ground up, using cloud native technology, massively scalable serverless consensus engines, and are designed to tightly envelope costs, so that things “turn off” when there’s no work being done. 

Smart APIs perform like best-of-breed public cloud services because they’re built using the same techniques, such as multi-tenanting for economics, fault tolerance, and low-latency capacity allocation.

### **Getting Started with Vendia Share**

Because it’s schema-driven and SaaS-based, getting started with Vendia Share couldn’t be easier: If you can model your data using JSON Schema and list the clouds and regions where you’d like APIs to be present, Vendia Share can craft a secure, scalable, production-grade deployment in a few minutes and then maintain it automatically. 

If your data modeling needs change, you can easily evolve the schema in a self-service fashion. And Vendia Share offers both a free tier to experiment without cost as well as a monthly pay-as-you-go subscription that provides full flexibility to allocate your subscription towards whatever your application needs, whether that’s file storage, scalar reads, or GraphQL subscription deliveries. Mobile, web, cloud, or on-prem applications ... whatever you’re building, you can get started in minutes and grow without limits using Vendia Share as your API and data platform.

Tired of building with “dumb pipes”? Join the Smart API crowd – in under 5 minutes you can turn a JSON Schema into a production-ready, GraphQL-enabled Smart API for free and see how it works for yourself. To learn more and get started, visit [vendia.net/developers.](https://www.vendia.net/developers)

.