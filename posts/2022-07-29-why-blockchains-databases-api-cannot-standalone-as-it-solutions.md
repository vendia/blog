---
title: 'Why blockchains, databases, and APIs can’t cut it on their own'
description: 'Why sharing real-time data across apps, companies, clouds, geographies, and stacks is difficult and expensive'
date: '2022-07-29'
categories:
- architecture
- datamodeling
authors:
  - Tim Wagner
---
# Why blockchains, databases, and APIs can’t cut it on their own

Enterprises and developers have been on a decades-long quest to simplify the challenge (and lower the cost and risk) associated with building IT solutions. In recent years, IT heavy lifts have grown even heavier: lift is driven by the growth in mobile and web apps on the front end and the growth of APIs and automation on the back end. Combined, these trend lines have had two major impacts:



1. More operational data is produced and consumed with every passing day
2. Data is fleeing central IT’s control—migrating into SaaS applications, public clouds, department-level data stores, and upstream and downstream business partners. 

Despite a seemingly endless supply of open source libraries and a host of fully managed cloud services for every conceivable need, these trends continue to keep many fundamental IT goals out of reach.


#### Polycloud is failure-prone

Avoiding cloud lock-in (while also achieving high availability) requires data platforms, APIs, and application states that can span two or more clouds. And yet building multi-cloud applications or data sharing solutions is one of the most costly, expensive, and failure-prone challenges facing companies today.


#### Partner data sharing is rife with challenges

Sharing data with partners (e.g., suppliers, logistics, and manufacturing as well as loyalty program and co-marketing/alliance partners) is a fundamental and critical element of a business’s success. And yet achieving consistent, trustworthy shared data when it spans different companies and IT stacks remains one of the most challenging, costly, and security-concerning aspects of any company’s IT portfolio.


#### DIY doesn’t scale and is expensive

Modeling use cases and business-specific data, whether it’s a formal model-driven development program or an informal approach, requires that developers “piece together” a wide variety of technologies and capabilities, from databases to file storage solutions to business logic and workflow hosting platforms, to hosted API solutions. Before being production-ready for either its owner or the owner’s business partners to consume, each of these bespoke solutions must be vetted for security, scalability, availability, compliance, and more. On top of that, the solution must be monitored, operated, upgraded, and secured in perpetuity…including supporting the evolution of the data model as the business needs or business partnerships change. 


    The costs of monitoring, operating, upgrading, and securing DIY solutions, especially for point-to-point APIs between partners, are staggering.

Companies have tried various approaches to lower these costs, reduce risks, and improve time to market for IT projects. Creating solutions that can share real-time data across applications, companies, clouds, geographies, and IT stacks is both difficult and costly and, at the same time, incredibly repetitive.

First, let’s explore why APIs, databases, and blockchains don’t cut it as standalone solutions. Then, we’ll use those identified gaps to develop a set of requirements for an operational data sharing platform.


## APIs: Good at moving bits around, bad at storage and consistency

[APIs](https://www.vendia.net/blog/ask-the-expert-apis) are the central building blocks of services, especially modern, cloud-based designs. 

They [encapsulate complexity](https://en.wikipedia.org/wiki/API#:~:text=trends%20data.%5B36%5D-,Design,-%5Bedit%5D) and provide operational and implementation isolation between different parties. Building great APIs _should_ be simple: All major cloud providers offer highly scalable, fully managed services that remove virtually all infrastructure challenges from both API owners and consumers.

[Google Apigee](https://cloud.google.com/apigee), [Amazon API Gateway](https://aws.amazon.com/api-gateway/), and [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/) handle the challenges of hosting, deploying, scaling, and making API infrastructure fault tolerant. But despite this, building systems that share data across organizations or business partners using APIs is still one of the most challenging and expensive propositions an IT team faces. 

Why? 

_Because APIs are not-aware pipes, ignorant of the data they carry or the systems they connect_.

Semantically, an API is no different than email. Like an email service, an API doesn’t understand the content of the payloads it delivers; the API’s job is just to get payload contents where they’re supposed to go. If any API was last called 24 hours ago, and the data it carried then is no longer accurate, _no one notices_. 

The situation is even worse when multiple parties are trying to communicate over APIs. Just building that “N-squared” communication framework is a huge lift. On top of that, it doesn’t even work well. There’s no guarantee that any of the parties have a view of reality consistent with any of their peers. That lack of guarantee makes building almost anything from supply chain modeling to financial settlement to contract enforcement on a spectrum between radically complicated and outright impossible.

“Fixing” an API to do better would require several things to happen simultaneously. 

The API would need to start



* Modeling the data schema
* Modeling the parties and their relationships (including access controls)dModeling the state of data replication among the parties to create transactional (“ACID”) consistency

If your reaction is, “But that sounds like a database or a blockchain!”, you’re not wrong. 

So let’s look at database and blockchain technologies to see how they fare in isolation.


## Databases: Good at storing state, terrible at sharing it

Databases, particularly cloud ones, are good at storing scalar information. Modern SQL and NoSQL cloud databases offer unlimited storage, massive scalability, four or more “9s” of availability, and transactional semantics. They are also good at understanding data models, also known as schemas, and some of them even allow those [schemas](https://www.vendia.net/blog/schema-evolution) to evolve over time. This makes them the ideal solution as the operational storage tier of an application.

Unfortunately, modern cloud databases are also designed to serve exactly _one_ customer (account) and to only work on a _single_ cloud. 

That makes solving some of the most important challenges a business faces incredibly difficult e.g., avoiding cloud lock-in and sharing data with departments or partners who may be on a different cloud). Even though the data is stored accurately, getting it consistently, correctly, and completely replicated into the database of some other party is a huge lift—one that exacts a vast amount of time, risk, and cost on development teams. 


    The irony is that those costs and risks are also highly repetitive. 

Sharing data about a car chassis, a bottle of ketchup, or an airline loyalty purchase is essentially identical at the infrastructure level.

“Fixing” a database to do better requires several things to happen simultaneously. The database needs to 



* Offer a way to expose and exchange data with other parties through a secure API
* Operate transparently on different clouds
* Model the parties and their relationships (including access controls)
* Model the state of data replication among the parties

If that gap sounds like some kind of mashup of APIs and blockchains, you’re still not wrong. 

Let’s see how blockchains fare on their own.


## Blockchains: Good at multi-party consistency, terrible at everything else

If databases are the granddaddy to APIs and blockchains, also known as distributed ledgers, are the grandbaby. Blockchains are a relatively recent technology introduction, and they achieve an interesting outcome:


    Blockchains create a consistent data representation among multiple parties without any one party needing to be in control. 

Most blockchains, by their nature, also offer a built-in ledger (making application logs unnecessary) and the ability to “time travel” (retrieving historical versions of the stored data objects).

When first introduced, blockchain technology was heralded as an IT savior: Finally, we had a solution to sharing complex application state across clouds, companies, geographies, and technology stacks that could offload one of IT’s biggest challenges.

So, what went wrong?

Unfortunately, while blockchains do offer a solution to the low-level challenge of creating multi-party data consistency, they failed virtually every other aspect of enterprise-grade IT.


#### **Blockchain protocols ignore the public cloud**

That’s problematic because most of the data produced and consumed is done so in the public cloud,  a technology that actively tries to avoid cloud integration is essentially dead-on-arrival.


#### Blockchains fail to scale

One of the downsides of not availing themselves of public cloud services is that blockchains have a hard time scaling. Their nearly universal “one box deployment” model means that, once they reach the limits of what a single server can achieve, it’s game over. Neither private nor public blockchains will ever achieve throughput rates needed by real-world businesses.


#### Blockchains forgot about fault tolerance
Blockchain architects confused the difference between _decentralization_ and _fault tolerance_ or high availability. To build a highly available solution, customers need to deploy multiple blockchain nodes, making the already complex blockchain even more complex Blockchains ignored transactions and data modeling.

Databases have been around for half a century, and have accrued a wealth of knowledge about what applications and users require. Unfortunately, blockchain inventors ignored all those lessons, and “skipped the basics”, including data models, data model evolution, primary keys, joins, flexible query languages, ACID transactions, and more. If that sounds like would-be enterprise adopters of blockchain technology inevitably find themselves saddled with the challenge of trying to recreate database semantics and customer-centric data APIs on top of it…you’re not wrong.


    Multi-party consensus is a powerful technology, but ultimately, it’s only a building block…just like databases and APIs.


# Databases, APIs, and blockchain are necessary…but not sufficient as standalone solutions

It seems we’ve reached an impasse: We need the benefits of cloud databases AND managed APIs AND modern blockchains, but alone, no one of these technologies can solve the underlying challenges that companies face today (see Table 1). 

**<p align="center">TABLE 1: Each technology offers value, but no one technology can solve IT’s needs on its own.</p>**


<table>
  <tr>
   <td><strong>Cloud databases are nice, but they lack…</strong>
   </td>
   <td><strong>Managed APIs are nice, but they lack…</strong>
   </td>
   <td><strong>Blockchains are nice, but they lack…</strong>
   </td>
  </tr>
  <tr>
   <td>Multi-cloud
   </td>
   <td>Data storage
   </td>
   <td>Cloud scale
   </td>
  </tr>
  <tr>
   <td>Cross-party data sharing
   </td>
   <td>Data consistency / transactions
   </td>
   <td>Enterprise integration
   </td>
  </tr>
  <tr>
   <td>File support
   </td>
   <td>File support
   </td>
   <td>File support
   </td>
  </tr>
  <tr>
   <td>Custom APIs for application use
   </td>
   <td>Data schema evolution
   </td>
   <td>Data schema evolution
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Data models
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Custom APIs for application use
   </td>
  </tr>
</table>


None of these approaches in isolation provide a complete data sharing solution capable of modeling data accurately while bridging company and cloud divides and scaling to enterprise-grade levels of throughput.

Other approaches, such as real-time streaming (Kafka, Cassandra, Amazon Kinesis) solve elements of the challenge, particularly for single owner-solutions. But none of the technologies have been able to expand beyond their narrow boundaries, limiting their ability to help teams create broadly suitable solutions (see Table 2).

**<p align="center">TABLE 2: Compare and contrast the capabilities of each data sharing approach</p>**

<table>
  <tr>
   <td><strong>Data sharing approach</strong>
   </td>
   <td><strong>Keeps data consistent?</strong>
   </td>
   <td><strong>Allows other accounts, clouds, organizations?</strong>
   </td>
   <td><strong>High scale and low latency?</strong>
   </td>
   <td><strong>Long-term data storage?</strong>
   </td>
  </tr>
  <tr>
   <td><em>Conventional APIs</em>
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Depends on implementation
   </td>
  </tr>
  <tr>
   <td><em>Central databases</em>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><em>Events / Streaming</em>
   </td>
   <td>Depends on service(s)
   </td>
   <td>No
   </td>
   <td>Depends on service(s)
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td><em>Legacy blockchains</em>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Neither
   </td>
   <td>Yes
   </td>
  </tr>
</table>


Looking at the gaps in these individual technologies, a set of requirements naturally emerges that defines what a powerful, easy-to-use data sharing platform needs to be enterprise-grade. Each of these technologies is necessary, but not sufficient on its own. Vendia combines all three, reimagined as a single, powerful, cloud-native platform.


    Together, these technologies can do what no one of them is capable of in isolation: Make the job of building data-sharing platforms and applications fast, simple, and secure by design.

Next week, we’ll explore why that’s true and how customers can experience lower costs, faster time to market, and achieve powerful outcomes, like multi-cloud, without the need for complex or time-consuming coding. Look for more in next week’s post, Venn Diagramming Vendia.


# Take action



* To learn more about how Vendia can make API development and management easier for data-driven applications, download our [smart APIs ebook](https://www.vendia.net/resources/smart-apis). 
* To explore modern application design that leverages modern data platforms, [read about the Lean App movement](https://www.vendia.net/resources/lean-apps). 
* To explore customer use cases, visit Vendia’s [product page](https://www.vendia.net/product).
* To see if your use case could benefit from a data-centric API approach or a data sharing platform, [contact us](https://www.vendia.net/contact-us).
