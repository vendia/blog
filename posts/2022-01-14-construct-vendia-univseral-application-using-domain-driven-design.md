# Construct Vendia Universal Application using Domain Driven Design

Vendia Share is a platform that you can use to quickly build real-time data sharing applications, which we call Universal Applications (or "Unis" for short). 

Data models power Vendia Share.  The schema-first approach makes it easy to design and create a Uni. In fact, design and create are almost indistinguishable steps after you have a ready-to-deploy schema. Vendia Share provides you with a GraphQL API that you can use to read and write data into Vendia Share and it also generates an immutable log of all transactions. Because a data model is a critical piece needed to create a Uni, designing the right data model for your application is an essential step to use Vendia Share. 

In this blog, you will first go through a primer on Domain Driven Design (DDD) and then you will learn how to apply DDD when constructing a Uni. As a developer, you don’t have to learn a different design approach to build strategic applications on the Vendia Share platform. DDD is a popular and proven approach to designing and modeling systems that are strategic for your business. You can use the same patterns to design and model Vendia Share Unis. DDD is not a prerequisite to building Uni but it does help to create a better Uni. If DDD is new to you, you may benefit from reading Eric Evans' [book](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf). 


## Primer on Domain Driven Design(DDD)

DDD is a popular software design approach for architecting and designing software using a top-down approach. DDD is a valuable exercise because it creates a common language that binds business and software. Requirements are dynamic in nature, they are good in defining activities, behaviors, rules, and actors. But, the data models built on requirements are fragile. DDD domain data models are static in nature and bring stability to data models, DDD is good in defining information that includes - its structure and relationships. DDD domain models delimit(set boundaries) and refine(make it precise) requirements. 

Here are a few terms with examples that you will commonly use to discuss DDD. 


* **The Domain** is effectively an arbitrary boundary around some subset of concepts in the business. It is subjective and concepts in a domain are not mutually exclusive. You can further break down the business into Sub-Domains until you find the smallest functional unit that is autonomous. For example, Customer Relationship Management(CRM) and Loyalty are two different domains in the e-Commerce business. Further CRM will have sub-domains responsible for managing customer accounts, customer profile, etc. and Loyalty will have dub-domains such as memberships, rewards, etc. 
* **Bounded Context**, has a one-one relationship with sub-domains. The sub-domain is the problem space(business) and the bounded context is the solution space(software). Bounded context is autonomous and has its own independent data models and architecture. It is where business meets the software systems. In the microservice world, a bounded context defines the maximum granularity of a service boundary. 
* **Entities** are granular data structures such as order, customer, and product that have an identity and lifecycle outside of the application. Entities include fine-grained data structures such as personal details and contact details. 
* **Scalars** are primitive data types such as phone number, email, etc. 
* **Aggregates** are collections of Entities and Scalars. For example, the customer profile used by marketing is a combination of multiple entities such as customer demographics, order history, service requests, social activity, etc. Aggregates also have a top unique identifier called root entity reference. Often you will see aggregates referred to as a root entity.  For example, a customer profile will have a customerId as a root entity reference. 

There are various ways in which you can come up with boundaries for your domains and sub-domains in your organization. You can use linguistics analysis, SME knowledge, business process, and business activity analysis. For better intuition on domains and sub-domains refer to generic domain modeling for retail e-commerce businesses. Figure 1 below describes a generic domain model of an e-Commerce business with domain boundaries and sub-domains inside it.

<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/151029034-fce0bc26-ac2b-4a0b-8034-839832160749.png" />
</p>
<p align="center">Figure 1 - eCommerce example domain model</p>


## Business meets Software

In the real world where everything is software with an existing install base, it is very hard to define a DDD bounded context. The way the business is organized and the way technology is implemented may not align well. In such cases, it becomes a three-legged race. It is more art than science. You can come up with several DDD models. But, the model that will prove useful is the one that will remove bottlenecks to improve software time to market and to service the core use case of the domain.

Bounded Context is where the business meets software. Inside a bounded context, we go deep into the software architecture of an independent and autonomous business function and try to identify data aggregates, service boundaries for core use cases, and event definition for cross-domain synchronization. Figure 2 describes the Bounded Context Reference Architecture. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/151029167-ac2d28b7-7861-4790-a972-5a7a0ea50156.png" />
</p>
<p align="center">Figure 2 - Bounded Context Reference Architecture</p>

Listed below are best practices for building services and data models for a bounded context.


* The aggregate is composed of multiple Entities and Value Objects(singletons without unique identifiers). Try not to pack more than 3 Aggregates in a service boundary. 
* An aggregate defines a transaction consistency boundary around one or more entities.
* An aggregate has a top-level entity called a root entity. Lookup on aggregate records is done using the root entity identifier. Any other entities in the aggregate are children of the root and are referenced using pointers. 
* A service should not be larger than a bounded context, and it should not be smaller than an aggregate. 
* For cross-domain data sync with external systems, use an async eventing system in your organization.

Hopefully, this gives you a good introduction or refresher on DDD. Next, we develop an understanding of Uni structure, terms, and concepts. 


## Uni Development Lifecycle

Uni is a cross-cloud, cross-party, cross-account, cross-region data and code sharing application powered by Vendia's serverless distributed ledger technology. A uni is composed of [nodes](https://www.vendia.net/docs/share/terms-and-definitions#node) modeling [participants](https://www.vendia.net/docs/share/terms-and-definitions#participants), each of which possesses an ordered, replicated distributed [ledger](https://www.vendia.net/docs/share/terms-and-definitions#ledger) that originates from a data model.

A Uni software development life cycle has five stages: Model, Design, Create, Operate, and Scale. Since a Uni is serverless, deployment, operations, and scaling are easy. Once you have the schema design, deployment is just a couple of clicks, and operations are handled by Vendia.  Vendia is responsible for scalability and performance. This leaves us with data modeling and design. Data models are the core of any software. In Uni, the design phase involves constructing a schema that is a deployable artifact and leads to the creation of Uni. In this blog, we will focus on data modeling and design.

<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/151029339-3c97b4d4-e66a-4b37-ae21-6200e22cb042.png" />
</p>
<p align="center">Figure 3 - Uni Development Lifecycle Stages</p>


## Uni Schema Anatomy

Let’s imagine a simple Uni schema that provides a datastore for core customer data attributes. Figure 4 breaks the Uni schema into parts and tries to map it to concepts you use in a relational database. This will help you quickly get started on building your own Uni. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/151029529-fa688c30-766c-4803-bc59-3b953e3ae0c4.png" />
</p>
<p align="center">Figure 4 - Example Customer Uni</p>


## Applying DDD to Uni 


### Pattern 1: Single Domain, Single Bounded Context, and a Single Uni

This pattern is well suited for organizations who want to build small custom applications surrounding complex enterprise applications, or organizations who want to construct a new application to prove a new business idea. 

In this pattern, a Uni model contains a data model for a single bounded context. For example, the CRM team models customer account details in Bounded Context 1. 


<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/151029629-68861fc8-daaf-4dc5-ab21-5269df0a5068.png" />
</p>
<p align="center">Figure 5 - Pattern 1</p>

**You can use the below resources to practice and deploy pattern 1.**

<details>
<summary>Schema</summary>
[schema.json](https://github.com/vendia/examples/blob/7792069dd40c6822279305b201965685aaac5a08/share/data-modeling/domain-driven-design/pattern1/schema/schema.json)
</details>
<details>
<summary>Details and deployment instructions</summary>
[README.md](https://github.com/vendia/examples/blob/vikrant-data-modeling-blog/share/data-modeling/domain-driven-design/pattern1/README.md)
</details>


### Pattern 2: Single Domain, Multiple Bounded Contexts, and a Single Uni

This pattern is well suited for organizations who already have experience working with Uni and want to leverage existing Uni implementation in their organization with more custom and new applications. This model is also a good fit for new analytics focussed domains within the organization that has not built its software platform yet. These organizations can continue to operate lean by leveraging Uni owned by other domains with read-only copies of data for analytics and visualization. 

In this pattern, a Uni contains data models for two bounded contexts. The Uni will have data models for two Bounded Contexts. For example, the CRM team manages customer account details in Bounded Context 1, and customer psychographic profile details in Bounded Context 2. Marketing wants a read-only copy of customer account details and customer psychographic profile details to power its customer analytics applications. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/151029726-54cf57ba-f5ac-4e80-8f7e-6ca0901fce23.png" />
</p>
<p align="center">Figure 6 - Example Customer Uni</p>

**You can use the below resources to practice and deploy pattern 2.**
<details>
<summary>Schema</summary>
[schema.json](https://github.com/vendia/examples/blob/7792069dd40c6822279305b201965685aaac5a08/share/data-modeling/domain-driven-design/pattern2/schema/schema.json)
</details>

<details>
<summary>Details and deployment instructions</summary>
[README.md](https://github.com/vendia/examples/blob/vikrant-data-modeling-blog/share/data-modeling/domain-driven-design/pattern2/README.md)
</details> 


### Pattern 3: Two Different Domains, Same Bounded Context,  a Single Uni

This pattern is applicable for organizations where an existing domain has its own software systems but wants to leverage the Uni owned and operated by other domains for both read and write access on a small part of the domain data model. The intent is to scale as much as on the existing Uni owned by the other domains before spinning a dedicated Uni for the domain.

For Example, CRM and Marketing(Domain 2, Bounded Context 2) will need discrete write access permission boundaries between data managed by each.  You can still do it inside a single Uni. Create a node each for CRM and Marketing. You can configure write access on customer account aggregate for CRM on Node1 and configure write access on ‘CustomerProfile’ aggregate for Marketing on Node2. CRM will interact with Uni using Node 1 and Marketing will interact with Uni using Node 2. 


<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/151029861-fb727977-4571-45f2-b719-a2b0051ad3cf.png" />
</p>
<p align="center">Figure 7 - Pattern 3</p>


**You can use the below resources to practice and deploy pattern 3.**
<details>
<summary>Schema</summary>
[schema.json](https://github.com/vendia/examples/blob/7792069dd40c6822279305b201965685aaac5a08/share/data-modeling/domain-driven-design/pattern3/schema/schema.json)
</details>

<details>
<summary>Details and deployment instructions</summary>
[README.md](https://github.com/vendia/examples/blob/vikrant-data-modeling-blog/share/data-modeling/domain-driven-design/pattern3/README.md)
</details> 


### Pattern 4: Multiple Domains, Multiple Bounded Contexts, and Multiple Unis

This pattern is applicable to large enterprise customers with strong governance and control requirements for software owned and operated by each domain. You will also consider this pattern if the domain data model is complex, requires higher assurance and guarantee on throughput, or sensitivity of your domain justifies Uni level isolation. 

 

For example, CRM and Marketing will need a dedicated Uni each because Marketing plans to bring more data from other domains that are not relevant for CRM and have different governance requirements for new data based on the sensitivity required for the newly acquired data. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/151029967-905f78ff-efef-4a43-b3f2-ff5de0695542.png" />
</p>
<p align="center">Figure 8 - Pattern 4</p>

**You can use the below resources to practice and deploy pattern 4.**
<details>
<summary>Schema</summary>
[schema.json](https://github.com/vendia/examples/blob/7792069dd40c6822279305b201965685aaac5a08/share/data-modeling/domain-driven-design/pattern4/schema/schema.json)
</details>

<details>
<summary>Details and deployment instructions</summary>
[README.md](https://github.com/vendia/examples/blob/vikrant-data-modeling-blog/share/data-modeling/domain-driven-design/pattern3/README.md)
</details> 

## Summary

We would love to hear about how you applied the patterns in this blog to power your applications on Uni.
