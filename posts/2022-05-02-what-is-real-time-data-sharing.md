---
title: 'What is Real-Time Data Sharing?'
description: 'The basics of real-time data sharing: what it is, how it works, common use cases, and how management platforms enable better data sharing and collaboration.'
date: '2022-05-03'
authors:
  - Tim Wagner
---
## What is real-time data sharing?

**Real-time data sharing is the ability of a company to use, update, govern, and build mission-critical outcomes from data it needs to power its business, _even when that data lives in different applications, clouds, and business partners_.**

Data sharing isn’t a new problem: Phoenician leaders were honing it as a governmental skill as early as 1,500 BC and the term “enterprise integration” actually dates to the 1930’s, long before computers and IT arrived. 

So what’s changed? As supply chains became increasingly complex and globalized, applications migrated to the public cloud, and SaaS offerings removed data from centralized IT control, the data that powers a business has now “left the building”...never to return. 

Like it or not, building and operating modern business applications now involves the challenge of getting to the underlying data.  

#### Why the “real-time” moniker?

Because this data is not restricted to “analytical” data. 

Many systems that produce and consume data can not wait for batch processing or overnight runs.  
They include real time outcomes like 
* airline ticketing
* credit card payments
* package logistics and transport
* retail shopping

These systems may vary in their latency needs from “within a couple hours” to “under 100 milliseconds”, but they are all focused on data that is continuously accurate. Business information needs to be **complete, correct, consistent, and up to date all the time**, not just reconciled once a quarter or “pretty close” to being right.

**“Sharing” can mean many different things. **

At a minimum, data needs to span different systems. For example, customer data might be produced in a CRM but needs to make its way to a messaging and notification platform. This is the classic Enterprise Application Integration (EAI, also known as EiPaaS) challenge of coupling applications from different vendors and in-house solutions.

Sharing can also mean spanning departments, companies, public clouds, and data centers in different geographic regions, etc. 

These many “spanning problems” – moving data consistently across companies, clouds, apps, and geos – consumes an enormous, and ever increasing, percentage of IT budgets.

Real-time data sharing can go by other names as well – “real time data mesh”, “operational data fabric”, “data events”, and similar terms emphasize that the challenge in modern systems isn’t just connecting on-prem applications from different vendors but rather keeping modern, cloud-based systems of record mutually accurate…even when that data spans corporate or divisional ownership.

### Examples of real-time data sharing

Data sharing needs span industries, commercial and non-profit sectors, and affect companies of all sizes. 

* **Travel** – Flying on a multi-segment flight can require sharing ticket and passenger information with a booking agent (such as Expedia.com), two or more airlines, and – behind the scenes – companies that process tickets, payment settlements, and passenger tracking and more. Within a given company, such as an airline, dozens of different systems may also need accurate, up-to-date information about the passenger and their ticketing and travel status.
* **Supply Chains** – One only has to step inside a pharmacy to see the impact that Covid 19 has had on global supply chains. Both discrete and continuous manufacturing typically require multiple inputs, often with their own second- and third-stage supply chains, as well as multiple logistics and delivery partners. Tying all these disparate providers and consumers of data together with consistent, guaranteed correct information about the state of items in the chain is critical to business success and customer satisfaction.
* **Financial and Insurance Settlements** – Many financial transactions, such as home loans, require multiple parties to initiate and then proceed through a complex workflow of ownership, securitization, and servicing over their lifetimes. Insurance policies and other financial instruments require similarly complex orchestrations that demand a “single source of truth” throughout.
* **Customer Profiles** – Customer information is often spread through a variety of systems, from web and mobile applications to CRM systems to ERP and payment infrastructure. Getting an accurate view of customer data and staying compliant in an increasingly regulated environment is critical to the success of every business.
* **Internal Systems** – Not every example of data sharing is as high profile as the items above. Just keeping internal systems, often created by different departments or divisions over time, sometimes through M&A activities, can be a difficult IT challenge, especially when those systems span different clouds.

As these examples show, modern IT applications – from customer information to payments to operations – demand great solutions for real-time data sharing. Next, let’s take a look at how those needs can manifest.

### How current data-sharing solutions don’t work for real-time data sharing

Composing what is effectively a distributed database without the benefit of being able to shove all the data into a single, centralized database with a single owner is obviously tricky. To make matters worse, real-time data sharing inevitably exposes secondary problems that often distract from the original data sharing need itself…meaning it’s typical to hear the problem expressed in other ways:

#### APIs

APIs are wonderful things, but by themselves they are not distributed, multi-party databases. Solutions to real-time data sharing usually _involve_ APIs as ways to transport data, but it takes far more than the “dump pipe” of an API to solve a data sharing problem.

#### Data Lakes

Similar to the API itself, sometimes the format of the data takes center stage, and when multiple parties are involved, getting everyone on board with a compatible model (and the necessary transformations in and out of that model from various data producers and consumers) can certainly be tricky. But data formats are just one dimension of a multi-dimensional problem: Keeping data correct, consistent, and up to date is still required, even once it’s been appropriately sanitized and converted.

#### DIY in your Application

“It’s an application problem” – Because real-time data so often resides in applications, both those provided by third-party SaaS companies as well as in-house development, it is tempting to view data sharing as a missing or incomplete feature of an application. But applications are rarely designed to solve the problem of spanning data ingress and egress across companies, clouds, accounts, and geographies.

Building that into a DIY application is a tall order that would take even a sophisticated team of distributed systems engineers years to mature, and most SaaS companies do not see that as an intrinsic element of their offering…leaving the problem as one that needs to be resolved externally to the service and app.

#### ETL

ETL is a technique for periodically loading an analytics system with operational data, but it is not a solution for creating a continuously up-to-date shared source of truth among a collection of real-time applications. 

Real-time data sharing requires low latency, bi-directional data flows that can update SaaS and custom cloud applications, not just pump data into a Snowflake, Redshift, or Databricks cluster. While real-time data sharing has an analogous architectural element (sometimes even referred to as “real-time ETL”), _conventional_ ETL approaches and vendors aren’t typically very useful.

#### Leaving it to InfoSec

Data needs to be shared securely and with appropriate access controls does not tell you much about _how_ to actually accomplish it. Data catalogs, for example, are not going to do much to keep a SaaS CRM, ERP solution, and retail website synchronized when it us time to serve the right ad to a customer. These are, however, important requirements (and vendor selection criteria) to apply to a data sharing solution.

#### Database sharing

Sharing data usually means that one or more databases are ultimately involved, even if they reside inside a vendor’s SaaS product. But here the emphasis is on the _sharing_, and that means that — almost by construction — a single database owned by a single entity is not the right solution. Keeping different databases owned by different companies synchronized is a tall order, especially when applications that don’t even expose their storage level directly are part of the mix.

### Approaches to Real-time Data Sharing

When it comes to real-time data sharing, the key requirements that drive the solution are the number and type of data source and sinks being connected. 

When latency or connectivity is a consideration you should consider the number of geographic locations. There are only a few “easy buttons” in this space, so let’s take a look at what they are and how they map to the problem:

#### Application or operational database to analytics platform. 

This is the classic ETL space, and is well supported by vendors such as Fivetran that make it easy to get data into data lake platforms such as Snowflake, Redshift, Databricks, and others. ETL connectors are the best choice when the data flow is one-way, batch, has a single destination (the data lake vendor), and supports the source of the data out of the box. 
Examples: Fivetran, Snowflake, Redshift, Databricks

#### Built-in SaaS-to-SaaS solutions

A few classes of SaaS provider have prebuilt connections to other systems to make data sharing easy. Pre-built connectors are obviously limited to those pairs of systems that have previously chosen to collaborate and offer the integration, and are usually built around a natural “nexus”, such as the company’s accounting system of record (QBO) or its ERP solution. \
IIf available, it’s your best choice. Contraindications for using built-in solutions would be cases where the data modeling supported by the integration lacks some critical feature mandated by the particular circumstances, such as conditional coding of accounting assets.

Examples: _Google Workspaces and Zoom_ – These providers work together to enable companies that do business with both vendors to easily create and initiate meetings on Google Calendar that use Zoom to host the meeting. \
_Expensify and QuickBooks Online (QBO)_ – These providers collaborate to make it easy for expenses created or paid in Expensify to be automatically tracked in a company’s accounting system inside of QBO.

#### Low throughput, point-to-point one-way events

When the sharing pattern naturally has a single producer, is one-way, and requires modest throughput, a specialized pattern known as an _event hub_ can be useful. 
In those cases, event-based platforms can offer a simple solution for hosting the data sharing process as an event workflow. These systems offer a “zero footprint” solution that handles all the data transmission, retries, and other operational infrastructure automatically. They are limited by their unidirectionality, “single writer” nature, and limited set of sources and sinks, but when they apply, they can be a simple and low cost solution provided the data throughput remains modest – since they charge on a per-delivery basis, shipping large volumes of data can quickly become costly. 
Examples of this approach include [Zapier](https://zapier.com/) and [Amazon EventBridge](https://aws.amazon.com/eventbridge/integrations/). 

#### Single account, single region, single owner, one-way data flows

Real-time streaming solutions like [managed Kafka](https://www.confluent.io/), [Amazon Kinesis Data Streams](https://aws.amazon.com/kinesis/data-streams/) provide teams building DIY solutions a platform to create real-time streaming event solutions. 

Seattle-based retailer Nordstrom, for example, has [written and presented extensively](https://medium.com/tech-at-nordstrom/adventures-in-event-sourced-architecture-part-1-cc21d06187c7) on how they built an in-house solution for collecting and distributing data related to customer activities and associated inventory and purchase events. Adoption criteria for these approaches is two fold:

* _They require sophisticated development teams with the time and resources to create in-house platforms._ Nordstroms, for example, has been building and maturing their system for many years at this point, so while it serves a critical role in their architecture, it also represents a substantial investment over many teams and many years. Companies without well-established data and distributed systems teams and the time to develop “from scratch” solutions should exercise caution in initiating such projects.
* _They are intended for single owner/account (and usually single region) solutions._ When the sources and sinks of the events are limited to those produced and consumed by a single company in a single region these solutions can be ideal. However, they lack long-term storage, decentralized consensus, or simple multi-region sharing mechanisms that preclude scalability beyond a simple single account and geograpy. 

#### Multiple producers and consumers, multiple parties, multiple clouds, bidirectional data flows

While the limited subsets of sharing patterns above are important to recognize, the scope of real-time data sharing – multiple producers, consumers, clouds, divisions or companies, high rates of data throughput, bidirectional flows, etc. – often mean that the sharing mechanisms described above are insufficient.

Going it alone in these circumstances is equally problematic. Building a multi-cloud, multi-party real-time data sharing platform is a big task. 

Platforms like [Vendia](www.vendia.net) offer a simple, SaaS-based solution for real-time data sharing that supports multiple parties while handling the challenges of efficiently and securely replicating data across multiple clouds, regions, and infrastructure types. SaaS-based data sharing platforms like Vendia effectively enable companies to outsource their real-time data platform needs without incurring additional infrastructure costs or having to redevelop complex and undifferentiated data sharing technologies in house.

Selecting any platform provider, including one that assists with a mission-critical outcome like real-time data sharing, is a significant decision. The next section expands on the requirements for a complete data sharing solution, and establishes vendor selection criteria that can be used in the process of evaluating alternatives.

### Platform and Vendor Requirements for Real-time Data Sharing Solutions

Sharing both operational and analytical data is a critical element of IT technology stacks. But how do you know what to look for in a platform? First, there are some key foundational questions to ask:

#### Does the platform understand the data it carries? 

Unlike Mulesoft and other “dumb pipe” solutions that are ignorant of the data being carried, having the platform understand the data means it can also ensure that data is consistent, correct, and up to date everywhere it flows. This key difference shifts many of the conventional operational and security challenges of handling data from individual applications and IT teams back onto the platform provider.  
Key vendor questions:  
Does the solution include automatic API generation from a customer-supplied data model?  
Are the APIs strongly typed and able to reject invalid information up front?

#### Can the platform store data and consistently replicate it across companies, clouds, geographies, and tech stacks? 

This might seem like table stakes aren’t able to span clouds, companies, or different geographies without extraordinary amounts of development and operational work.

#### Does the platform include built-in data access controls? 

Almost as important as sharing data is ensuring that the wrong data does not get shared. When every party and system requires a “DIY” approach to security, access controls, auditing, compliance, and governance, those problems take on a life of their own, becoming heavy lifts that can dwarf the original problem of simply moving data between parties. 

Letting a platform accomplish this not only shifts the burden of implementation and spreads it among many customers, making it cost effective to produce and maintain, it ensures that the approach is uniform across all parties and deployments.

#### Is the platform low latency and able to scale to meet application needs at peak throughput? 

Blockchains are plagued by poor performance, with public chains like Ethereum struggling to maintain 14 transactions per second worldwide, shared among all customers! Transaction settle time can approach 15 minutes or longer, and the cost per transaction can be as high as $50 or more. Even private chains, such as Hyperledger Fabric suffer from “one box deployment” models – unlike a cloud-based service, they are forever, fundamentally limited by the processing and memory capacity of a single server and at most a few cores within that server. That doesn’t bode well for any enterprise workload that needs to scale.

#### The platform is delivered as a SaaS service 

First generation blockchains were a throwback to early approaches in more ways than one.

Their “single box deployment” models mean they are slow and have limited throughput, they have to be manually deployed, maintained, monitored, secured, scaled, made fault tolerant, etc. 

That’s a huge burden to an already strapped IT team, and only adds to the burden of infrastructure management and staffing load. By contrast, Vendia’s data sharing solution is provided as a SaaS service, with zero infrastructure footprint and “ilities” such as scaling, fault tolerance, monitoring, infrastructure maintenance, etc. owned by the service provider, rather than left as an exercise to the IT customer.

### Evaluating a Real-Time Data Sharing Solution

Given the organizational criticality, broad scope, and platform-centric nature of real-time data meshes in a modern IT environment, it is especially important to evaluate and select vendors capable of delivering on the broad set of needs they require. 

This section can be used as the basis for a “vendor checklist” to ensure that solutions, whether developed in house, outsourced to a consulting company, or purchased from a vendor, provide the range of capabilities demanded by real-world challenges:

Multi-cloud and SaaS integrations as fundamental features
The single most fundamental feature of a real-time data sharing solution is that it can seamlessly span the most important divides in the modern IT landscape. Examples include: multiple clouds and different SaaS applications, such as Salesforce and Microsoft Dynamics. Without this feature the complicated work still lives with IT.  
Best-of-breed vendors will support data sharing across the major public clouds and application platforms, with a connector strategy that makes ingress from and egress to other services and platforms fast to develop and easy to operate and maintain.

SaaS delivery model with a “zero infrastructure” footprint
IT organizations already struggle under the weight of managing too much hardware and software infrastructure, including their large compliance and security surface area. Data sharing solutions, because they can carry data with varying levels of exposure risk, have to be designed to handle the worst case scenario, making securing their end-to-end infrastructure even more complex. Acquiring these capabilities through a SaaS solution that doesn’t expand a company’s infrastructure footprint is critical to avoiding direct and indirect cost and staffing bloat. Cloud-based SaaS platforms for data sharing also confer the economic benefits of shared development and deployment costs, further improving ROI versus in-house and outsourced manual development approaches.

Cloud-native design with automatic scaling and fault tolerance 
Of all the elements in an IT stack, the data sharing layer is one that most benefits from an innovation-forward design.  \
Solving for fault tolerance across multiple regions, clouds, departments and partners is challenging enough. Then combined with the need for dynamic scaling that is highly available and cost effective, most homegrown or consulting-based solutions peter out quickly. Cloud-native designs incorporating the latest advances in serverless and container-based technologies offer the best options for creating a solution that offers maximum uptime without sacrificing price to performance ratios.

High Utilization (without high energy consumption)
Choosing “green tech” becomes ever more important for investors and transparency requirements. Fundamental to lowering carbon emissions is reaching high levels of data and compute utilization; otherwise, the majority of infrastructure capacity is spent creating worthless environmental impact, the worst possible outcome. Data sharing solutions based on modern, serverless technologies offer highly efficient, “100% utilization” solutions based on massively multi-tenanted cloud-based strategies. These benefits pass through to the companies that deploy them, resulting in significant carbon savings.

Compliant and secure

    Data sharing solutions are, by their very nature, the target of many regulatory, security, and information handling policies and controls. Building out not just the solution but the necessary monitoring, reporting, and management capabilities needed to ensure constant compliance across assurance programs such as SOC2, PCI, GDPR, CCPA, HIPAA, FedRAMP, and more is time consuming and costly, and typifies the sort of “undifferentiated heavy lifting” that can be transferred to a platform vendor whose sole job is to deliver on these outcomes 24x7.
    
Coming soon: Blockchain and Real-Time Data-sharing and Architectures for Real-Time Data Sharing. 
