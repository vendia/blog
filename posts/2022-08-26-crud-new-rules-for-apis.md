---
draft: false
title: "When CRUD APIs aren't enough: How custom models and smart APIs create better data sharing solutions"
description: 'Custom modeling and standard access platforms come together to make next-gen business APIs.'
date: '2022-08-26'
categories:
- concepts
- product
authors:
  - Tim Wagner
id: '56029f06-d9d7-448a-a1a5-69968bf741e8'
---


Businesses process a wide variety of real-time information to support their mission-critical processes. But while their [real-world activities](https://www.vendia.com/blog/supply-chain-is-broken-can-blockchain-fix-it) can differ greatly, the data and applications that model those activities tend to fall into a small number of categories.


* Customer profiles and other marketing data
* Sales data
* AR/AP, payments, and other accounting information
* Manufacturing or other operational workflows
* Supplier status
* Logistics or delivery status

While this information is “live” (i.e., participating in active, operational workflows), it has to be read, entered, or updated frequently to pass as “real-time.” It’s also usually shared across different applications, geographies, parties, clouds, etc. Further, the dynamic nature of these access patterns is different from analytics, which typically attempt to glean insights from static or “dead” data no longer changing.

These operational systems usually access data in one of two ways:



1. **Raw access through SQL queries or files** Some systems operate on the data directly at the database or file level.
2. **APIs** Most applications, and usually all inter-company data accesses, are accomplished with the added layer of protection that APIs can afford 9versus “raw” database access).

While the specific rules, policies, or workflows that power a company’s critical processes can be complex, the APIs used to read and write the data model are usually straightforward.

Developers often use the acronym CRUD to describe this type of API:

**C (Create):** The business object is created and assigned a unique identifier. 

_Examples:_ 



* An airline passenger books a ticket
* A user makes a credit card purchase in a cafe and a transaction is begun to reflect it
* A vehicle being manufactured is represented in an online system triggered by an IoT device

**R (Read):** The object is accessed (read), for example, to display it to a user in a web or mobile app. 

_Examples:_



* A user views their upcoming flights in an airline app
* A bank verifies all in-flight credit card payments at close of business
* A manufacturing plant checks available upstream inventory from suppliers

**U (Update):** An existing object is updated (changed) to reflect new data.

_Examples:_



* A user rebooks a flight (or a flight is cancelled)
* A credit card transaction is accepted or declined
* A manufacturer makes the call to change the quantity of vehicles to deliver to a region

**D (Delete):** An object is deleted. Often, “delete” is not literal; rather, the object reaches the conclusion of its active lifecycle but remains accessible for auditing, accounting, and other “forensic” activities thereafter.

_Examples:_ 



* A passenger completes a flight
* A bank receives a monthly credit card payment from a customers and marks the account “paid”
* A dealer accepts a recently manufactured vehicle and the inventory leaves the manufacturer’s books

This CRUD style of API is so common that it’s virtually synonymous with business APIs—so much so that the terms are often used interchangeably. 

CRUD APIs have two important defining characteristics: They require _custom_ models but admit to _standard_ access patterns. Let’s take a look at what those mean, and how their characteristics enable platforms.


## Custom models

An essential, defining characteristic of business APIs is that they have to represent the items being modeled (i.e., the “nouns” of the business process). Since each business is unique, these “nouns” need to be customizable so they can accurately reflect each company’s unique requirements. Furthermore, they’re not static. Business needs are always evolving, and so the computer representation of those needs has to be capable of evolving, too. For example, when cars started supporting USB technology, the version and plug style of support USB connectors became a critical element of a vehicle’s description. Over time, this [schema evolution](https://www.vendia.com/blog/schema-evolution) is a fundamental requirement for business APIs so they can keep pace with business needs.

What happens when a platform fails to support a data model? _All that modeling challenge falls back onto every application and every application developer._ It’s a nightmare scenario, and it’s one of the reasons first-generation blockchain technology failed so miserably. 

The single most essential element of a business API is that it be [model intelligent](https://www.vendia.com/blog/ask-the-expert-apis). But, first-generation blockchains failed to support any level of data modeling. In fact, none of them even supported files in their set of capabilities. This [fundamental miss](https://www.vendia.com/blog/why-blockchains-databases-api-cannot-standalone-as-it-solutions) ensured that adopting those systems required a massive lift, as every application and every participant in the network had to recreate that missing functionality by building a custom, in-house layer to translate between the natural business model and the model-agnostic (or “key-value”) representation at the blockchain layer…a costly, difficult, and time-consuming challenge that had to be repeated over and over again.


#### Vendia’s approach to custom modeling

With Vendia Share, we took a different approach. By starting from the user’s model of their business objects, [Vendia Share](https://vendia.com/product) automatically generates the required storage, consensus, and APIs. And it does so in a SaaS-style delivery without any coding from any developer, for any application, in any participant in the network. Instead, those developers can concentrate on building the actual logic of their systems, not on the boilerplate problem of representing the data or shipping it around. 

Then, as business needs change, Vendia Share’s built-in schema evolution feature enables the APIs, storage, and consensus mechanisms to evolve right along with the business—without losing data or access. [Learn more](https://vendia.com).


## Standard access patterns

For B2B networks to succeed, flexible data modeling that can encompass and represent the detailed nature of business objects is critical. Access patterns for that data must be relatively straightforward. This observation is the origin of CRUD, and it reflects the fact that most business data is accessed in relatively structured and repetitive ways. This is in contrast to business analytics, where the set of queries are virtually unbounded and may be impossible to predict in advance, especially since different leaders look for different insights at different times and under different conditions.

While the set of access patterns performed by applications on [operational data](https://www.vendia.com/blog/what-is-operational-data-sharing) is relatively stylized, it is a little more complicated than the four operations suggested by CRUD. Vendia Share supports all of the following in its automatically generated APIs:



1. _Creating_ objects and/or files (both individually and in batch)
2. _Reading_ objects and/or files
3. _Updating_ objects and/or files, either in full (replacement) or in part (incremental or field-wise updates)
4. _Tombstoning_ objects and/or files
5. _Listing_ objects and/or files
6. _Time travel:_ Users can view older versions of both objects and files
7. _Ledger/update log:_ Users can see who changed while data or files, at what time
8. _Access controls:_ The owner of a piece of data or a file can control who sees it, and whether they see it in cleartext or in an encrypted or redacted form
9. _Real-time updates:_ Applications can be notified, in real-time, when an object or file is changed or whenever an action is performed anywhere within the network
10. _Transactions:_ Users can group operations that need to be performed together to ensure atomicity
11. _Schema evolution:_ The underlying data model can be evolved to support new types or additional fields within existing types
12. _Partner evolution:_ Business partners can be added or removed from the network automatically


#### Vendia’s approach to access patterns

These capabilities, along with Vendia Share’s’s sophisticated [data modeling techniques](https://www.vendia.com/blog/top-10-data-modeling-techniques), enable businesses to create a broad array of applications and workflows that seamlessly integrate across departments and with their partners. This facilitates real-time, multi-party data sharing l without compromising on performance, security, compliance, or operational transparency. And for more sophisticated analytics, users can easily arrange to export their operational data to an analytics system of choice to perform more elaborate analyses, and connect to existing BI solutions, or apply AI/ML learning techniques (e.g.,Snowflake, Databricks, or Redshift).

Because these access patterns are common across ndustries, sectors, and sizes/segments, they can be implemented once for many users. As an outcome, we can deliver highly customized data models (“nouns”) with a predefined set of actions (“verbs”) that, together, power a broad array of business applications and systems.


## Get more on business APIs

To learn more about how Vendia can make API development and management easier for data-driven applications, download our [smart APIs ebook](https://www.vendia.com/resources/smart-apis). To see if your use case could benefit from a data-centric API approach or a data sharing platform, [contact us](https://www.vendia.com/contact-us).
