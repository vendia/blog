---
draft: false
title: "Understanding shared data architecture"
description: "Go in-depth on shared data architecture as James Gimourginas explains what it is, how it works, and shared data architecture benefits, drawbacks, and use cases."
date: "2022-11-21"
categories:
  - realtime-data-sharing
  - data-alliance
authors:
  - James Gimourginas
---

Technological advances, ongoing academic research, and new product offerings are all contributing to an emerging new architectural paradigm — a _shared data architecture_.  This new paradigm is changing how organizations design their systems, how they interact with their partners, and how they think about data ownership, data protection, and data resilience.  Technical leaders should read on to learn more about the key components of shared data architecture, its place in the enterprise, its potential value to an organization, and its increasing influence within a variety of industries.

## What is a shared data architecture?

Data architecture patterns, historically, focused on goals that included optimizing data storage for various access patterns and reducing interdependence among services to enable development agility.

As data sprawl continues to trouble businesses seeking reliable, timely insights that involve data across a network of partners or players, a new goal has emerged: architectural patterns that best enable _sharing (and co-editing) data_.

The [most mature shared data architectures](https://www.vendia.com/blog/distributed-application-maturity-model) embrace an architectural style that's optimized for sharing data across previously isolated parties.



* It's an approach that allows data to be shared immediately, as it changes.
* It’s an approach that captures a complete history of data changes over time.
* It's an approach that does this while also providing dynamic control of access to data by other parties.
* Its very genesis is rooted in solving the real-time nature of data and ensuring consistency for a trusted version of the truth.

Shared data architecture patterns focus on making data available, real-time, at the time it is needed. These patterns often lean on one of two overarching techniques:

* Spreading data across all the points of access 
* Creating a view from each point into a central hub

### Data sharing in the wild

Consider a simple scenario involving a food supplier, a food distributor, and a grocery chain.  In an ideal world, the food supplier will list products and change prices dynamically based on market factors. The grocery chain will purchase products for all of its stores, securing an acceptable price along the way. And the food distributor will arrange for pickup of the order and delivery to each grocery store automatically. The explicit transactions — product listing, purchase order, delivery scheduling — are captured in a single source, accessible to all participants. In addition, some information (e.g., margin on the purchase) may not be shared with everyone, but it will still be captured for the benefit of at least one participant (i.e., the food supplier).

While that ideal scenario seems simple enough, building a real-time, multi-party, multi-writer solution that also allows the data owner to control access has, historically, been an incredibly challenging technical undertaking. It’s also common for the product attributes to vary across each participant (the supplier, distributor, and chain) thereby creating lack of traceability.

### Background to shared data architectures

The idea of allowing multiple applications to work from a [shared database](https://www.enterpriseintegrationpatterns.com/SharedDataBaseIntegration.html) has been around for decades. Solving the data sharing challenge using a single, centralized shared database approach added many additional challenges in practice, including scalability, change management, lack of an audit trail, and performance under (increasingly) heavy load.

To address those many challenges, teams over the last decade (or more) took a different approach. Instead of creating a large, centralized database monolith, teams opted for a microservices architecture. In many cases, they connected these services with event driven interactions. By doing both, teams were able to incorporate purpose built databases on a per-service basis and were able to keep data in sync through point-to-point connections.

Despite addressing the common challenges of a monolith, the event-driven microservices approach exacerbated some of the common challenges of distributed systems — which become increasingly challenging as the number of services increases. For example, the more services that are actively maintaining (often stale) copies of data that originated from other services, the [more challenging](https://www.vendia.com/blog/data-sharing-obstacles) it becomes to maintaining a consistent view of data across all services. In addition, distributed systems increase the complexity of the (often centralized) governance required for access controls and data lineage across an enterprise.

In short, moving data is hard; it adds delays, creates different versions of the truth, and reduces visibility in who has access to what data, producing a risk to compliance to audit and regulatory requirements.

## How does a shared data architecture work?

If monoliths came first and event-driven microservices came second, what comes next?

What comes next is the notion of a shared data architecture:

* An architectural approach that is built on a data storage foundation where [blockchains and databases collide](https://www.vendia.com/blog/are-blockchains-databases) to provide a decentralized storage approach that preserves both ACID semantics and comprehensive data lineage
* An architectural approach that [layers in](https://www.vendia.com/blog/why-blockchains-databases-api-cannot-standalone-as-it-solutions) the scale and resilience of the cloud and the simplicity of APIs to make the blockchain/database storage layer scalable and accessible
* An architectural approach that incorporates [access control](https://www.vendia.com/blog/multi-party-data-sharing-with-control) mechanisms at all levels of the architecture, from schema definition through external system integrations.

The end result is an architecture that lends itself to [real-time data sharing](https://www.vendia.com/blog/what-is-real-time-data-sharing) without caveats, meaning multi-participant, multi-writer, multi-cloud, and, as a result, multi-use case.

A mature shared data architecture brings the best of a monolith with data that is accessible, consistent, and trusted and the best of microservices with a solution that is scalable and flexible.

### Shared data architectures vs. alternative architectures

A mature shared data architecture significantly differs from several alternatives, many of which peaked in popularity over the last few decades. Some other more recent architectural approaches nicely complement a shared data architecture.

A centralized, monolithic architecture referenced earlier is clearly at odds with a decentralized, distributed architecture that's optimized for multi-party data sharing. The centralized, monolithic approach makes a few assumptions that, often, will not hold as a data sharing network grows. The first false assumption is that all parties trust _some_ central party with all of their data; this is almost never true. The second false assumption is that all parties trust _some _central party to develop and operate a solution on their behalf; this is also almost never true, especially given the impact centralized, tightly coupled architectures have on [software delivery performance](https://cloud.google.com/architecture/devops/devops-tech-architecture#how_to_implement_architectures_for_continuous_delivery).

A centralized, microservices architecture is better. While this approach addresses the delivery challenges faced when operating and maintaining a monolithic application, it still assumes a (central) party is responsible for storing and controlling access to an application. In other words, the microservice boundaries established make software delivery and operations more manageable, but the approach is orthogonal to the bigger challenge of data sharing across organizational boundaries (i.e,. you can easily do the former without reaping any benefits with the latter).

By taking a _decentralized_ approach, a mature shared data architecture does align nicely with a newer architectural approach: The data mesh. A data mesh, [if done well](https://www.starburst.io/blog/does-the-data-mesh-make-data-integration-harder/), can make data integration within an enterprise more efficient and effective. Nevertheless, there are data sharing challenges a data mesh is not (by definition) intended to address, as its genesis was not rooted in combining sharing and consistent data requirements. [Those challenges](https://www.vendia.com/blog/improve-your-data-mesh#problems-a-data-mesh-will-not-solve) are best addressed by a shared data architecture, allowing for real-time data sharing, with data validation and lineage built in, and spanning organizational boundaries. By combining these two ideas — a shared data architecture and a data mesh — an enterprise can fuel its business with data from inside and outside the organization.

An architecture that is fit-for-purpose for sharing data, by design, resolves the need for reconciliation of diverging versions of the truth. By leading with an aligned schema definition, all parties are working on the same “shell”, which ensures consistency while maintaining each party’s autonomy to manage and share their data with control.


## Key elements of a shared data architecture

A mature shared data architecture requires several foundational components that, together, yield an approach that is optimized for data sharing across multiple parties. The maturity of a shared data architecture can be assessed across these key elements:



* **Decentralized**  So that no single participant is required to be all-knowing and all-seeing
* **Real-Time** – So that changes to data by one participant is immediately known to other (authorized) participants
* **Consistent** – So that there is a shared, single source of truth that includes consistent data validations, consistent transaction ordering and execution, and consistent access control mechanisms
* **Ledgered** – So that data is supplemented with its full history (who changed what and when), allowing audits (for compliance) and replays (for resilience) on-demand
* **Access Controlled** – So that a participant can dynamically manage the access rights others have to the data they've contributed


### Decentralized

Decentralization allows multiple participants to contribute data without requiring some single, central party to have full access to the aggregate. Another benefit of decentralization is that each participant can have a unique view of the collectively sourced data based on their provided access controls. However, for decentralization to be viable, data timeliness and consistency must also be addressed.


### Real-time

In order for decentralization to be viable across a network of participants, data timeliness must be accounted for. [Real-time data sharing](https://www.vendia.com/blog/what-is-real-time-data-sharing) allows all authorized participants to know about a change as soon as it happens. For transactional, multi-party workflows (i.e., [automating 3-way match](https://en.wikipedia.org/wiki/Accounts_payable#cite_ref-4)) to execute at the speed of business, acceptable data sharing timeliness across participants is a must.


### Consistent

Consistency in the data shared within a shared data architecture takes many forms. On data ingest, a consistent set of validations must be applied so that all participants have trust in the data contributed by others. Consistent validation often requires an agreed upon, well-defined schema. Consistency also is required across the transactions that reach the shared data architecture.


### Ledgered

Recording all transactions that brought the data to its "current" state is where a ledger fits into a shared data architecture. A ledger (or change log) is essential given the decentralized nature of the participants. It provides traceability back to an individual participant if there is ever a question on who modified data and at what point in its journey. It provides resilience when one or more of the participants are unable to participate in a transaction (i.e., allows for replay). And it can optionally provide a tamper-proof audit trail for interested parties (i.e., regulatory bodies).


### Access controlled

Having a decentralized, consistent, real-time, ledger-based data sharing architecture is nearly sufficient, but one critical component is still missing. To get participants to share data amongst themselves using a shared data architecture, they must be provided with a set of mechanisms that allow them to restrict access to data to a select set of authorized participants.  However this is implemented, it must provide the authoring participant the ability to allow or disallow access to data. Only with that safeguard will a participant be willing to share their data with others.


## Shared data architecture use cases

Applying a shared data architecture to long standing industry challenges can [streamline existing business processes](https://www.vendia.com/blog/atos-success-story), build trust among partners, and disrupt industries.


### Financial services

A single financial services company can spend millions attempting to reconcile data (inputs) and results (outputs) from various sources and systems. For example, in housing finance, maintaining a "[golden record](https://www.vendia.com/blog/blockchain-mortgage-services)" of a loan throughout its lifecycle is incredibly difficult without a shared data architecture. Attempting to do so with a collection of centralized architectures (i.e., one per participant in the loan's lifecycle) has not worked. Instead, industry leaders are exploring shared data architectures [backed by blockchain](https://www.fanniemae.com/research-and-insights/perspectives/intersection-blockchain-and-housing-finance) to address the lack of consistency and transparency in loan approval, origination, and servicing.


### Supply chain management

Supply chain management is another area where a shared data architecture is essential. Being able to track and trace items as they travel from source to destination and beyond is required in many industries, including automotive and manufacturing. For example, [BMW](https://www.vendia.com/case-studies/bmw) used a shared data architecture to find defects faster and lower their cost of goods sold (COGS). By connecting a portion of their supply chain, they established a common source of truth and provided a shared, real-time source of truth to all participants in order to streamline operations.


### CRM data sharing

Customer Relationship Management (CRM) is another area ripe for multi-party data sharing disruption via a shared data architecture. Even though Customer A may be a customer of both Company X and Company Y, today it's unlikely that Company X and Company Y collaborate to maximize the value they can collectively provide to Customer A. For example, imagine an airline and a hotel working together to compensate for a substantial flight delay with a late night snack and beverage upon (late, very late) arrival to the hotel. Not only is this type of collaborative data sharing [possible](https://fast.wistia.net/embed/channel/d1mxqbj9xw?wchannelid=d1mxqbj9xw&wmediaid=6ujrd8iwnt), it's also a [golden opportunity](https://vendia.wistia.com/medias/7owrco9oa2) to improve customer experience. That opportunity is most effectively exploited with a shared data architecture.


## Advantages of using shared data architecture

As highlighted in the previous examples, a shared data architecture confers many advantages to its adopters.

[Decentralization](https://www.vendia.com/blog/decentralization) distributes the development and operational burden across a set of participants. Compare that to a centralized model, where a single organization must accept long-term responsibility for delivering against an endless backlog of partner requests. Further, decentralization allows the number of participants to grow over time without a proportionate impact on integration cost and complexity (i.e., integrate once, reach all participants).

Real-time data sharing eliminates the need for costly reconciliation of data — either invalid or stale — sourced from different places at different times. It also unlocks the possibility of [real-time everything](https://www.vendia.com/blog/real-time-everything) that continues to push operational and analytical worlds together.

For real-time data to be useful, it must also be consistent. A shared data architecture ensures this is the case using [modern techniques](https://cacm.acm.org/magazines/2018/9/230601-an-overview-of-deterministic-database-systems/fulltext) to ensure strong consistency guarantees can be made to all participants. This builds trust among participants in a shared, single source of truth and allows them to automate much of the manual back and forth that is often required in today's world where data consistency _is not _guaranteed. Maintaining consistency in the order of transactions and their execution across all participants in a decentralized network is especially challenging when transactions are executed in real time.

The use of a ledger provides context that is often missing from centralized databases today.  [Blockchain](https://www.vendia.com/blockchain) techniques can be leveraged in a shared data architecture to ensure all participants can trace a current value back to its original sources. Not only does that improve trust and auditability of data, but it also provides resilience benefits in the (frequent) cases where distributed systems fail.

Access controls, ideally [fine-grained access controls](https://www.vendia.com/blog/sharing-data-with-fine-grained-control), allow data producers to set the terms of use on their contributed data. This encourages data sharing participation, drives the value of the data sharing network to its participants, and also guards against inadvertent data leaks that are common when data is not shared in a controlled manner.


## Challenges of using shared data architecture

Designing, developing, and operating a shared data architecture is certainly a challenge for most organizations. Creating a decentralized, real-time, consistent, ledgered, and complaint platform requires [significant investment](https://www.vendia.com/blog/vendia-announces-series-b) and [cloud-scale engineering practices](https://thenewstack.io/10-essential-practices-for-building-software-for-cloud-scale/). Building a partial solution, for example omitting the "real-time" and "consistent" elements of a shared data architecture, is a non-starter: Each of the five elements must be in place for the others to work effectively. So, unfortunately, creating a shared data architecture is often an all or nothing proposition. Given the investment required, complexity involved, and completeness required, it's no wonder that many organizations have either avoided or failed to create a shared data architecture in-house.

## How Vendia can help

Vendia's [inspiring vision](https://www.vendia.com/blog/vendias-inspiring-vision) is to help organizations realize the promise of shared data architectures.  By making shared data architectures more accessible, organizations can automate data workflows across business networks and change how industries operate.

At Vendia, we provide our customers with a realization of the data sharing architecture concept through Universal Applications (Unis for short). Unis are modern distributed applications that include all five aspects of a shared data architecture — which means they are optimized for multi-party data sharing. Not only are Unis complete, they are built on leading cloud services and managed for our customers as a service. In addition, we continuously incorporate [new approaches](https://www.vendia.com/blog/data-sharing-deterministic-databases) to make multi-party data sharing better for our customers.

It's certainly possible for others to build a shared data architecture from scratch. But our customers have found that doing so is undifferentiated heavy lifting that is best offloaded to a platform like Vendia.


### Take a closer look at Vendia Share

If you enjoyed this article, you may want to learn more about Vendia's realization of a shared data architecture in the form of a [business blockchain](https://www.vendia.com/blog/serverless-distributed-ledger-for-enterprises). If you believe your organization is several steps away from attempting to incorporate a shared data architecture in your day-to-day operations, you may be surprised at how we can help [accelerate the maturity](https://www.vendia.com/blog/distributed-application-maturity-model) of your distributed systems. Either way, sign up for a [trial version](https://share.vendia.net/uni) of our platform, Vendia Share, to get hands-on with the technology highlighted in this post.
