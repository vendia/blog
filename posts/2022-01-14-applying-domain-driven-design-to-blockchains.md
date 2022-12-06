---
draft: false
title: Applying Domain Driven Design (DDD) to blockchains
description: Discover 4 DDD Patterns for your next distributed ledger or
  permissioned private blockchain created on the Vendia Share data platform with
  insights from Vikrant Kahlir, Tech Lead for Data and Web3.
date: 2022-01-14
authors:
  - Vikrant Kahlir
categories:
  - blockchain
relatedPosts:
  - 2022-03-09-graphql-and-blockchain
  - 2022-02-18-13-features-you-need-to-evaluate-an-enterprise-blockchain-platform
  - 2022-02-09-supply-chain-is-broken-can-blockchain-fix-it
tags:
  - DDD, Domain Driven Design, private blockchain, distributed ledger
    technology, uni
thumbnail: https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..151622580-5ecedcbc-d18e-42ab-8854-4689692f33d4.jpg
seo:
  title: Applying Domain Driven Design (DDD) to blockchains
  description: Discover 4 DDD Patterns for your next distributed ledger or
    permissioned private blockchain created on the Vendia Share data platform
    with insights from Vikrant Kahlir, Tech Lead for Data and Web3.
  keywords: DDD, Domain Driven Design
updatedBy: alexa-vendia
updatedAt: 2022-12-06T23:57:26.226Z
---

Vendia Share is a platform that you can use to quickly build real-time data sharing applications which we call Universal Applications (or "Unis" for short). 

Data models power Universal Applications.  The schema-first approach makes it easy to design and create Unis. In fact, design and create are almost indistinguishable steps after you have a ready-to-deploy schema. Vendia Share provides a GraphQL API based on your data model. You and your partners can use that API to read data from and write data to Vendia Share. Because a data model is a critical piece needed to create a Uni, designing the right data model for your application is an essential step to using Vendia Share. 

In this blog, you will first go through a primer on Domain Driven Design (DDD). You will then learn how to apply DDD when constructing a Uni. As a developer, you don’t have to learn a different design approach to build applications on the Vendia Share platform. DDD is a popular and proven approach to designing and modeling systems; you can use the same patterns to design and model Vendia Share Unis. DDD is not a prerequisite to Uni building but it does help to create better software design. If DDD is new to you, you may benefit from reading Eric Evans' [book](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf). 


## Primer on Domain Driven Design (DDD)

DDD is a popular top-down approach for better software design software. DDD is a valuable exercise because it creates a common language that binds business and software. Requirements are dynamic in nature, they are good in defining activities, behaviors, rules, and actors. But, the data models built on requirements are fragile. DDD domain data models are static in nature and bring stability to data models, DDD is good in defining information that includes - its structure and relationships. DDD domain models delimit (set boundaries) and refine (make it precise) requirements. 

Here are a few terms with examples that you will commonly use to discuss DDD. 


* **The Domain** is effectively an arbitrary boundary around some subset of concepts in the business. It is subjective and concepts in a domain are not mutually exclusive. You can further break down the business into Sub-Domains until you find the smallest functional unit that is autonomous. For example, Customer Relationship Management(CRM) and Loyalty are two different domains in the e-Commerce business. Further CRM will have sub-domains responsible for managing customer accounts, customer profile, etc. and Loyalty will have dub-domains such as memberships, rewards, etc. 
* **Bounded Context**, has a one-to-one relationship with sub-domains. The sub-domain is the problem space (business) and the bounded context is the solution space (software). Bounded context is autonomous and has its own independent data models and architecture. It is where business meets the software systems. In the microservice world, a bounded context defines the maximum granularity of a service boundary. 
* **Entities** are granular data structures such as order, customer, and product that have an identity and lifecycle outside of the application. Entities include fine-grained data structures such as personal details and contact details. 
* **Scalars** are primitive data types such as phone number, email, etc. 
* **Aggregates** are collections of Entities and Scalars. For example, the customer profile used by marketing is a combination of multiple entities such as customer demographics, order history, service requests, social activity, etc. Aggregates also have a top unique identifier called root entity reference. Often you will see aggregates referred to as a root entity.  For example, a customer profile will have a customerId as a root entity reference. 

There are various ways in which you can come up with boundaries for your domains and sub-domains in your organization. You can use linguistics analysis, SME knowledge, business process, and business activity analysis. For better intuition on domains and sub-domains refer to generic domain modeling for retail e-commerce businesses. Figure 1 below describes a generic domain model of an e-Commerce business with domain boundaries and sub-domains inside it.

<p align="center">
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..151622473-39d449e3-faa5-499f-bcaa-92e4a5edb264.jpg" />
</p>
<p align="center">Figure 1 - eCommerce example domain model</p>


## Business meets software

In the real world where everything is software with an existing install base, it is very hard to define a DDD bounded context. The way the business is organized and the way technology is implemented may not align well. In such cases, it becomes a three-legged race. It is more art than science. You can come up with several DDD models. But, the model that will prove useful is the one that will remove bottlenecks to improve software time to market and to service the core use case of the domain.

Bounded Context is where the business meets software. Inside a bounded context, we go deep into the software architecture of an independent and autonomous business function and try to identify data aggregates, service boundaries for core use cases, and event definition for cross-domain synchronization. Figure 2 describes the Bounded Context Reference Architecture. 

<p align="center">
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..151622532-8d6a78df-886d-445e-852c-a8a999e71479.jpg" />
</p>
<p align="center">Figure 2 - Bounded Context Reference Architecture</p>

Listed below are best practices for building services and data models for a bounded context.


* The aggregate is composed of multiple Entities and Value Objects (singletons without unique identifiers). As a rule of thumb, try not to pack more than 3 Aggregates in a service boundary. 
* An aggregate defines a transaction consistency boundary around one or more entities.
* An aggregate has a top-level entity called a root entity. Lookup on aggregate records is done using the root entity identifier. Any other entities in the aggregate are children of the root and are referenced using pointers. 
* A service should not be larger than a bounded context, and it should not be smaller than an aggregate. 
* For cross-domain data sync with external systems, use an async eventing system in your organization.

Hopefully, this gives you a good introduction or refresher on DDD. Next, we develop an understanding of a Uni's structure, terms, and concepts. 


## Uni development lifecycle

A Uni is a cross-cloud, cross-party, cross-account, cross-region data and code sharing application powered by Vendia's serverless distributed ledger technology. A uni is composed of [nodes](https://www.vendia.com/docs/share/terms-and-definitions#node) modeling [participants](https://www.vendia.com/docs/share/terms-and-definitions#participants), each of which possesses an ordered, replicated distributed [ledger](https://www.vendia.com/docs/share/terms-and-definitions#ledger) that originates from a data model.

A Uni software development life cycle has five stages: Model, Design, Create, Operate, and Scale. Since a Uni is serverless, deployment, operations, and scaling are easy. Once you have the schema design, deployment is just a couple of clicks, and operations are handled by Vendia.  Vendia is responsible for scalability and performance. This allows the developer to focus on data modeling and design, increasing productivity and simplicity. Data models are the core of any software. For a Uni, the design phase involves constructing a schema that is a deployable artifact provided by the developer to Vendia Share. In this blog, we will focus on data modeling and design.

<p align="center">
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..151622580-5ecedcbc-d18e-42ab-8854-4689692f33d4.jpg" />
</p>
<p align="center">Figure 3 - Uni Development Lifecycle Stages</p>


## Uni schema anatomy

Let’s imagine a simple Uni schema that provides a datastore for core customer data attributes. Figure 4 breaks the Uni schema into parts and tries to map it to concepts you use in a relational database. This will help you quickly get started on building your own Uni. 

<p align="center">
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..151622621-5dcd4a61-96d7-40fa-8efe-89dc7ec2b221.jpg" />
</p>
<p align="center">Figure 4 - Example Customer Uni</p>


## Applying DDD to Vendia Share Unis


### Pattern 1: Single domain, single bounded Context, and a single Uni

This pattern is well suited for organizations that want to build small custom applications surrounding complex enterprise applications, or organizations that want to construct a new application to prove a new business idea. 

In this pattern, a Uni model contains a data model for a single bounded context. For example, the CRM team models customer account details in Bounded Context 1. 


<p align="center">
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..151622653-48dde2de-d6a4-4c06-b037-ffa2c62baaac.jpg" />
</p>
<p align="center">Figure 5 - Pattern 1</p>

**You can use the below resources to practice and deploy pattern 1.**

<details>
<summary>Schema</summary>

You will use [schema.json](https://github.com/vendia/examples/blob/main/approaches/domain-driven-design/pattern1/schema/schema.json) to create your Uni.

</details>

<details>
<summary>Details and deployment instructions</summary>

Follow the instructions in the [README](https://github.com/vendia/examples/blob/main/approaches/domain-driven-design/pattern1/README.md) guide to create your Uni.

</details>


### Pattern 2: Single domain, multiple bounded contexts, and a single Uni

This pattern is well suited for organizations that already have experience working with Unis and want to leverage an existing Uni implementation in their organization with more custom and new applications. This model is also a good fit for new analytics focused domains within the organization that have not built their software platform yet. These organizations can continue to operate lean by leveraging Unis owned by other domains with read-only copies of data for analytics and visualization. 

In this pattern, a Uni contains data models for two bounded contexts. The Uni will have data models for two Bounded Contexts. For example, the CRM team manages customer account details in Bounded Context 1, and customer psychographic profile details in Bounded Context 2. Marketing wants a read-only copy of customer account details and customer psychographic profile details to power its customer analytics applications. 

<p align="center">
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..151622707-1d967c54-080e-4f27-bf65-73eabf59d703.jpg" />
</p>
<p align="center">Figure 6 - Pattern 2</p>

**You can use the below resources to practice and deploy pattern 2.**

<details>
<summary>Schema</summary>

You will use the [schema.json](https://github.com/vendia/examples/blob/main/approaches/domain-driven-design/pattern2/schema/schema.json) to create your Uni. 

</details>

<details>
<summary>Details and deployment instructions</summary>

Follow the instructions in the [README](https://github.com/vendia/examples/blob/main/approaches/domain-driven-design/pattern2/README.md) guide to create your Uni.

</details> 


### Pattern 3: Two different domains, same bounded context, a Single Uni

This pattern is applicable for organizations that have software systems in an existing domain but want to leverage Unis owned and operated by other domains for access to a small part of the domain data model. The intent is to scale as much as on existing Unis owned by other domains before deploying a dedicated Uni for the domain.

For Example, CRM and Marketing(Domain 2, Bounded Context 2) will need discrete write access permission boundaries between data managed by each.  You can still do it inside a single Uni. Create a node each for CRM and Marketing. You can configure write access on customer account aggregate for CRM on Node1 and configure write access on ‘CustomerProfile’ aggregate for Marketing on Node2. CRM will interact with Uni using Node 1 and Marketing will interact with Uni using Node 2. 


<p align="center">
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..151622775-f4cb4af5-dff9-4c7c-be9b-d4aa6b6ee58f.jpg" />
</p>
<p align="center">Figure 7 - Pattern 3</p>


**You can use the below resources to practice and deploy pattern 3.**

<details>
<summary>Schema</summary>

You will use the [schema.json](https://github.com/vendia/examples/blob/main/approaches/domain-driven-design/pattern3/schema/schema.json) to create your Uni.

</details>

<details>
<summary>Details and deployment instructions</summary>

Follow the instructions in the [README](https://github.com/vendia/examples/blob/main/approaches/domain-driven-design/pattern3/README.md) guide to create your Uni.

</details> 


### Pattern 4: Multiple domains, multiple bounded contexts, and multiple Unis

This pattern is applicable to large enterprise customers with strong governance and control requirements for software owned and operated by each domain. You will also consider this pattern if the domain data model is complex, requires higher assurance and guarantee on throughput, or sensitivity of your domain justifies Uni level isolation. 

For example, CRM and Marketing will each need a dedicated Uni because Marketing plans to bring more data from other domains that are not relevant for CRM and have different governance requirements for new data based on the sensitivity of the newly acquired data. 

<p align="center">
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..151622815-c7464b83-9c08-4a36-84d5-b21de789bf0b.jpg" />
</p>
<p align="center">Figure 8 - Pattern 4</p>

**You can use the below resources to practice and deploy pattern 4.**

<details>
<summary>Schema</summary>

You will need the [schema.json](https://github.com/vendia/examples/blob/main/approaches/domain-driven-design/pattern4/schema/schema.json) to create your Uni.

</details>

<details>
<summary>Details and deployment instructions</summary>

Follow the instructions in the [README](https://github.com/vendia/examples/blob/main/approaches/domain-driven-design/pattern4/README.md) guide to create your Uni.

</details> 

## What’s next

Now you have a solid understanding of using DDD concepts to design a Uni schema and create a Uni. As a next step, think about a business problem you can solve with a Uni. Creating a Uni doesn’t require a big team; you can easily do it as a side-hustle to prove your idea. If you need help getting started, please engage with us on [Vendia Discourse](https://community.vendia.net/c/resources/8), and if you completed a Proof of Concept(PoC) tag us on Twitter at [@VendiaHQ](https://twitter.com/VendiaHQ).