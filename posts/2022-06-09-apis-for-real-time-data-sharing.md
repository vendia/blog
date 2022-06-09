---
title: 'How to Make Your APIs "Data-aware"'
description: 'Data APIs continue to be a challenge for teams. What if your APIs did the heavy lifting and kept a single source of truth.'
date: '2022-06-09'
authors:
  - Tim Wagner
---

# An Alternative Architecture for Smart, “Data-aware” APIs
_Note_ This is part 2 in our Data APIs series. [Read part 1](https://www.vendia.net/blog/apis-for-data). 

In our previous post we talked through why APIs are still so difficult for teams to implement and maintain and why legacy options fail to meet current business needs. In this blog we will walk through modern APIs that help provide a single source of truth while also providing a ledgered lookback. 

An ideal data-sharing API would share the best of each of these approaches (see Figure 6):


* The strong data model and operational, security, and systems isolation of a conventional “polled” API
* The long-term data storage and easy queryability of a conventional centralized database
* The cost efficiency and scalability of an event-based architecture
* The “time travel”, guaranteed delivery, and strong ordering guarantees of a real-time streaming solution
* A blockchain’s ability to easily span clouds, companies, and geographies with a consistent data representation

![Figure 1](https://user-images.githubusercontent.com/98492452/172912411-206422d0-3ce7-45db-a2fc-b264377630a5.png)

_Figure 1: A “smart API” – one that keeps data consistent, regardless of location, ownership, or public cloud hosting._

Vendia’s approach combines the strengths of different approaches to overcome the weakness of each:



* Each participant has a node containing one or more cloud-hosted databases and file stores, capable of 11 9’s of durability storage with unlimited capacity
* A high speed data replication and consensus mechanism emulates a blockchain’s ability to create consistent replicas, but does so with massive parallelization and cloud-enabled scale and throughput
* A user-provided data model is used to automatically generate modern GraphQL APIs, including subscriptions that offer real-time streaming, all designed around the application’s data schema. These capabilities include versioning, time travel, auditing, and lineage analysis without the need to write even a single line of code.
* All services are delivered in SaaS style, with zero infrastructure footprint to manage or maintain in any application.
* Everything is built using scalable and fault tolerant “serverless” cloud technology, allowing it to be tightly cost enveloping, environmentally friendly, and automatically scalable on a per-request basis.

Figure 2 illustrates Vendia’s architecture for smart APIs.


![Figure 2](https://user-images.githubusercontent.com/98492452/172912670-fc6dc95f-e4e4-4561-9fb7-58d4c45de158.png)


_Figure 2: Vendia’s Smart API<sup>TM</sup> architecture. An operationally and security isolated node is created in the cloud for each party, including file and scalar data storage. Vendia transparently and automatically synchronizes the data among all nodes using patented blockchain and serverless algorithms. A powerful GraphQL API is automatically generated from (and permanently synchronized with) from the application’s data model, including real-time streaming support that keeps each node’s applications consistent with one another. Despite its power, the “no code” approach is simple, with zero infrastructure footprint to manage._

Let’s see how that works using a simple example.


## A CRM Example

Let’s take a simple but pervasive example of data sharing: Customer profiles. Customer information may be mastered in a CRM, but it gets produced and consumed in many places, including with a business’s partners and alliances. It’s also a typical example where inconsistent data served up by an API could be dangerous: With compliance regulations such as GDPR in Europe and CCPA in California, getting a customer’s PII sharing settings wrong (through outdated or inconsistent API values) could literally mean breaking the law.

To keep things simple, we’ll use a basic data model that includes a customer’s PII (name, contact information). Each partner sharing data about a customer can indicate which products the customer is consuming, in order to build a composite picture of the customer’s journey and engagement over time. (In a more complete example, this would likely include additional, time ordered event data.) A sample data model (schema) is shown below in conceptual form:

![Figure 3](https://user-images.githubusercontent.com/98492452/172912756-a43fcb9b-839d-4c59-81dc-74b858b7a186.png)


Despite the simplicity of this example, note that the sharing and lineage tracking rules for this data are already non-trivial:



* Either company can update the customer’s basic information (name, address)
* Only Acme can update the list of Acme products the customer uses (but CoolTech can view this information)
* Only CoolTech can update the list of CoolTech products the customer uses (but Acme can view this information)
* All previous versions of the data need to be retained, and all changes to the data need to be tracked, so that audits can be performed to ensure GDPR, CCPA, and other regulatory program compliance by a third party

The process of using Vendia is simple: given the data model above, the system automatically generates cloud hosted APIs, streaming event solutions, and data storage subsystems for both Acme and CoolTech in just a few minutes. These systems “production grade” immediately – they come with prebuilt scaling, fault tolerance, and both on-the-fly and at-rest encryption built in … no additional coding is required to achieve any of these outcomes. Each company can now set up custom authentication and authorization for as many systems as they like, even using additional nodes if they want their data to span multiple public clouds.


## Changes Over Time

If the schema evolves, for example to include additional data about the customer’s level of spend, the system automatically adjusts the implementation in a seamless fashion, preserving the existing application integrations and data. (This is one of the great advantages of combining GraphQL APIs with a compiler-driven solution that actually models the data, versus a “dumb pipe” that has no idea if or when the content it carries will break existing clients.)

If the business relationships themselves evolve, for example to include a new partner, CompanyThree, Vendia can automatically deploy and synchronize additional nodes for new parties without incurring downtime or disruption to the existing system, allowing the ecosystem to seamlessly evolve to meet business needs. Additional nodes can also be added to create multi-region backups, multi-cloud application strategies, or additional operational boundaries. Advanced Vendia features, including smart contracts and tokenization, can be employed as regulatory and assurance program requirements evolve, enabling all parties to manage their data (both shared and private) with control, even in highly regulated and secured environments.


## Vendor Selection Guidance

With the large number of mechanisms available, how do you decide which alternative to use when? While the specifics of a given scenario are always relevant, the list below groups common solutions by category.



* **“Self contained” APIs.** When data is produced and consumed by a single application, on a single cloud, by a single department/company and the API is primarily a convenience wrapper around the underlying data storage mechanism, a roll-your-own approach using managed APIs and a centralized database can be a simple, straightforward solution – especially if serverless-style cloud services, such as Amazon’s DynamoDB or Azure’s CosmoDB are chosen and fully managed API services are used to host the API itself.
* **In-house streaming data where persistence isn’t needed.** When multiple producers or consumers are present but all are owned/operated by the same organization in the same cloud with a shared identity and permissioning system, real-time streaming technologies such as Kafka or Amazon’s Kinesis Streams can be an effective solution. These systems don’t tend to do a great job of modeling (or evolving) data, but they otherwise offer a well-designed platform for processing in-order, real-time data along with sophisticated capabilities such as batching and (limited) replay. These solutions have an obvious limitation in that they are “just pipes” – if data _storage_ is also required, they will not be an effective solution without a substantial additional investment.
* **Multi-company / multi-cloud with data storage.** For more challenging scenarios, e.g. where real-time data requires durable, long-term storage or where the producers and consumers of the data span different companies, IT organizations, identity or security boundaries, public cloud providers, or geographies, a full-scale data sharing and model-driven API solution is required. Flexible, multi-cloud data sharing platforms such as Vendia provide the support for business partnership modeling, data schema modeling and evolution, and high speed replication of both scalar (structured) and file (unstructured) data with compliance and control. Replicating these advanced features through “DIY” development tends to be slow, risky, and error prone, making a platform vendor the preferred choice.


# Conclusions

APIs are most commonly used to share data across some kind of “gap” – two or more organizations, companies, clouds, geographies, applications, or IT stacks. They provide important operational and implementation isolation, but this benefit is also their greatest challenge, by turning the API into a “dumb pipe” that can’t understand the data it’s conveying. That impoverished data model means that the data being shared by the API is typically inconsistent, incomplete, and out of date … especially when there are multiple consumers who need to maintain a “single source of truth” regarding the underlying data being shared.

Solutions to data sharing include centralized databases, real-time streaming platforms, and legacy blockchains, but all of these suffer from significant limitations, especially when trying to share data across different companies, clouds, and IT infrastructure approaches. Modern data sharing platforms such as Vendia combine long-term data storage, type-safe data modeling, automatic API generation, and compliant data sharing controls that make it easy to share data with partners, from structured information to unstructured files. Recreating a secure, performant data sharing platform is an expensive and risky proposition, even for large enterprises, making cloud-based platforms such as Vendia a preferable approach to delivering business value quickly and efficiently.


# Learning More

To learn more about how Vendia can make API development and management easier for data-driven applications, check out the [Smart APIs ebook](https://www.vendia.net/resources/smart-apis). To explore modern application design that leverages modern data platforms, [read about the Lean App movement](https://www.vendia.net/resources/lean-apps) on Vendia’s blog. To see use cases where APIs for data-intensive applications have been successfully applied, visit Vendia’s [product  page.](https://www.vendia.net/product) To see if your use case could benefit from a data-centric API approach or a data sharing platform, [contact Vendia](https://www.vendia.net/contact-us).
