---
draft: true
title: Distributed ledger challenges and solutions
description: Distributed ledger technology solutions can solve complex chain of
  custody and multi-party data sharing challenges. See use cases for solutions
  in finance, travel, and supply-chain-driven industries.
date: 2023-01-11
authors:
  - James Gimourginas
categories:
  - concepts
  - blockchain
relatedPosts:
  - 2021-01-25-supply-chain-visibility-with-vendia-share
  - 2021-10-22-serverless-distributed-ledger-for-enterprises
  - 2022-03-17-are-blockchains-databases
tags:
  - distributed ledger technology, use cases, financial services, travel and
    hospitality, supply chain
seo:
  noindex: false
  title: Distributed ledger challenges and solutions
  description: Distributed ledger technology solutions can solve complex chain of
    custody and multi-party data sharing challenges. See use cases for solutions
    in finance, travel, and supply-chain-driven industries.
  keywords: distributed ledger, distributed ledger technology, DLT, chain of
    custody solutions, multi-party data sharing solutions
sidebarCta:
  - What’s a business blockchain?
createdBy: ""
createdAt: ""
updatedBy: alexa-vendia
updatedAt: 2023-01-11T18:54:13.050Z
id: dc7afa12-3605-477d-8156-028fc3d5e7a1
---

Real-time data sharing means different things to different people:

- In the context of business-to-business [(B2B) data sharing](https://www.vendia.com/blog/b2b-data-sharing), it means sourcing and more effectively leveraging the world's most valuable [resource](https://www.economist.com/leaders/2017/05/06/the-worlds-most-valuable-resource-is-no-longer-oil-but-data) to drive business outcomes.
- Over the last decade, data sharing approaches moved away from (industry-specific) vertical solutions to industry-agnostic (but still centralized) data platforms.
- [Most recently](https://www.bcg.com/publications/2021/broad-data-sharing-models), companies have expressed an increased interest in distributed data sharing, including approaches that rely on a distributed ledger.

What's often still misunderstood are the unique problems distributed data sharing solutions solve and what opportunities those solutions unlock:

- To some degree, the increased interest in distributed approaches to real-time data sharing reflects that valuable data now often resides [outside](https://mitsloan.mit.edu/ideas-made-to-matter/why-external-data-should-be-part-your-data-strategy) of a single company's four walls and in disparate systems.
- Interest in distributed approaches also reflects that existing [solutions](https://www.vendia.com/blog/real-time-data-sharing-challenges#legacy-solutions-and-their-limitations) were built to solve point-to-point data sharing (two companies), but they don't hold up well in a distributed environment (three or more companies).
- As operational and analytical solutions [converge](https://www.vendia.com/blog/podcast-worlds-colliding) as companies move away from (centralized) data lakes to (distributed) [data meshes](https://www.vendia.com/blog/improve-your-data-mesh), finding a solution that inherently supports both is ideal.

To summarize, line of business owners, innovation leaders, and IT leaders looking for an ideal real-time data sharing solution want these solutions:

- A way to share (read and write) with those outside the organization, in real time and with control
- A simplified way to maintain a single source of truth across three or more organizations while also maintaining a complete history of changes
- A way to streamline analytical processing using the data mentioned above in a fashion that scales as the number of data sources and data partners grow

A [mature](https://www.vendia.com/blog/shared-data-architecture#key-elements-of-a-shared-data-architecture) shared data architecture addresses those needs, with a distributed ledger playing a prominent role. But the most important [question](https://www.vendia.com/blog/podcast-founders-session) remains: what problems are a real-time data sharing solution based on a distributed ledger uniquely capable of solving?

# Solutions patterns with a distributed ledger

There are two solution patterns that a distributed ledger solves exceptionally well. But don't be fooled. These two patterns provide the foundation for infinite use cases that will revolutionize most organizations, partnerships, and industries. Because distributed ledgers are uniquely capable of making these essential patterns come to life, they will be at the heart of any quality solution that fully addresses the associated use cases and business challenges.

## Pattern #1 - Chain of custody with a distributed ledger

The chain of custody pattern tracks some entity over time. Think of this as a single item acted upon in some way by different organizations throughout its lifecycle. For example, think about a vehicle part originating from an initial order and then moving to manufacturing, to delivery, to installation, and finally to repair (end of life). The chain of custody pattern allows an original equipment manufacturer (OEM) to view the complete history of a part, understanding what happened to it, and by whom, over time.

### Chain of custody challenges a distributed ledger can solve

The chain of custody pattern realized using a distributed ledger addresses several important challenges that companies face across industries:

- **Opaque and incomplete change history** – The inability to easily collect all of the actions on an entity throughout its lifecycle since multiple organizations perform these actions
- **Incomplete and unverifiable lineage** – The large investment needed to link actions to know what happened, when it happened, and who did it since these actions are recorded on isolated systems across company boundaries
- **Stale and incorrect data** – Making real-time decisions based on an entity's current state since the inability to easily aggregate across organizations and link across systems leads to significant latency between a change and all parties knowing about the change

Solutions that attempt to address these challenges without a distributed ledger will be costly, inefficient, yield incorrect or conflicting information, and place an excessive technical burden on every organization involved in the entity's lifecycle.

Here are some examples of poor solutions to the chain of custody problem some organizations use today.

#### Centralized data hubs don’t solve chain of custody challenges

In an attempt to solve the opaque or incomplete change history challenge, one organization may take on the burden of aggregating data from its immediate upstream and downstream partners. That organization makes a significant investment in the interest of helping the collective group be more connected. But the organization cannot justify the return on investment primarily because each required integration is "different" and the centralized team performing each integration lacks business context. Further, that organization is unlikely to convince its partners to share all the data it wants because of fear of data protection and the data controls in place within the aggregating company. At best, this approach will provide "1-hop" visibility from the aggregating organization, which is often insufficient to optimize real-world chain of custody ecosystems.

#### Industry-specific track and trace solutions don't solve the end-to-end chain of custody problem either

In an attempt to solve the stale or incorrect data problem, an organization may adopt an industry-specific track and trace solution. Those tools often stop at an organization's boundary, and if not there, then they stop at the edge of the organization's industry. For example, when tracking flour from the farm to mill, to cookie maker, to distributor, to a grocery store, many industries are covered, and many systems are involved. In real-world data ecosystems, awareness is only as good as all upstream and downstream partners' ability to share data.

#### Lineage tools don’t actually work for chain of custody needs

In an attempt to solve the incomplete or unverifiable lineage challenge, an organization may decide to leverage one (or more) data lineage products. These products are purpose-built to solve the data lineage challenge within an organization but not across organizations. To establish a comprehensive view of an entity over its lifecycle, lineage must be tracked across organizational boundaries. It’s unlikely that attempts to turn one of these tools into a ubiquitous, comprehensive lineage system across industries will ever pan out. Those tools are not designed for that purpose, scale, or resilience. They require a significant data consolidation effort that is often too removed from the business value itself, often losing funding midway through the undertaking. They result in the same centralization and narrow funnel backlog challenges as centralized data hubs.

### Chain of custody examples

There are many examples of industry-specific use cases that highlight the value of the chain of custody pattern. Because the pattern focuses on an entity that multiple organizations act on over time, consider all of the valuable things in life whose chain of custody is of value to one or more organizations.

Here are some example chain of custody use cases.

- **Supply chain** – The chain of custody pattern is often referred to as "track and trace" in the manufacturing and supply chain domains. Because of the potential for increased supply chain optimization, increasing visibility among an original equipment manufacturer (OEM), Tier 1, Tier 2, and Tier 3 suppliers, and others is a high-value opportunity.
- **Home loans** – Most home loans progress from origination to servicing to securitization. Each of those steps is, itself, a multi-step process, meaning what sounds like a simple three-step process is really a combination of three complicated, many-step processes.
- **Insurance claims** – When an insurance claim is filed, multiple participants often must collect necessary information, adjudicate claims, approve payment, and reimburse the right individuals or organizations. Providing a detailed history for every claim, from start to finish, can make for a game-changing customer experience.

### Chain of custody solutions

The use cases above can be addressed using solutions built on a distributed ledger. By solving what, in all cases, is really a chain of custody problem in an elegant fashion, the business that spends time and resources to address its chain of custody challenges can redirect time and resources elsewhere.

Here are a few examples of chain of custody solutions.

- **Supply chain** – Increasing supply chain visibility is [important](https://www.vendia.com/blog/why-is-supply-chain-visibility-important) for many reasons. A distributed ledger-based solution makes supply chains more [efficient and predictable](https://www.vendia.com/blog/how-blockchain-makes-supply-chains-predictable), which can drive cost savings, improve customer satisfaction, avoid delays in the manufacturing process, and increase trust among partners, leading to larger and more dynamic deals.
- **Home loans** – A distributed ledger can be applied across all three steps outlined in the previous section or, to start, applied to a single step. For example, when applied to servicing, a [golden record](https://www.vendia.com/blog/blockchain-mortgage-services#mortgage-servicing-with-next-gen-blockchain) that keeps all parties (servicer, lender, homeowner, town to whom taxes are owed) informed of loan payment information can be extremely beneficial.
- **Insurance claims** – A distributed ledger can be the mechanism used to collect all the inputs from all the parties. It can speed adjudication. It can ensure the right parties are paid the right amount in a timely fashion. It can also [build trust](https://www.vendia.com/blog/atos-success-story) among all involved.

The "ledger" provides traceability and auditability to track the entity, whereas the "distributed" nature ensures trust and keeps the solution closer to the business.

## Pattern #2 - Multi-party data sharing with a distributed ledger

The multi-party data sharing pattern brings different pieces of data together from different organizations to provide a more comprehensive understanding. Think of this as multiple items that, when combined, are more valuable together than in isolation. For example, consider all the data related to a vehicle. There's its as-built specification and manufacturing record, its service record, its accident history, its insurance coverage (past and present), its inspection and tax status, and its traffic record…nearly an endless set of information so that no one today has a truly comprehensive understanding of that vehicle.

The multi-party data sharing pattern allows companies to build a more comprehensive view of an entity. It allows them to derive new insights, identify new opportunities, and offer a tailored (and differentiating) customer or business experience. As just one example, it would allow an insurance company to, for example, offer a discounted insurance premium to cover a well-built, accident-free, well-serviced, parking-ticket-free vehicle. 

### Multi-party data sharing challenges

The chain of custody pattern realized using a distributed ledger addresses several important challenges that face companies across industries:

- **Incomplete data** – The inability to easily unify and access the data that exists across organizational boundaries since that data isn't necessarily made available through public or partner interfaces
- **Inconsistent data** – The high cost of wrangling data from various systems and organizations into a usable format since data models, data validation, data calculations, and data features are inconsistently applied across organizational boundaries
- **Unprotected or unshared-for-no-good-reason data** – The need to balance data protection and data sharing across organizational boundaries since some companies will not or cannot share all of the data at their disposal (but are usually more than happy to share an approved subset)
- **Stale and incorrect data** – Making real-time decisions based on an entity's current state since the inability to easily aggregate across organizations leads to significant latency between a change and all parties knowing about the change

Solutions attempting to address these challenges without a distributed ledger will be costly, incomplete, and outdated. They’ll also place an inordinate technical burden on any organization that attempts to build a more complete view of an entity.

Here are some examples of poor solutions to the multi-party data sharing problem some organizations use today.

#### Point-to-point API integrations don’t solve multi-party data sharing

In an attempt to solve incomplete data and stale or incorrect data challenges, organizations have built APIs to expose key data sets to business partners. APIs alone are [insufficient](https://www.vendia.com/blog/why-blockchains-databases-api-cannot-standalone-as-it-solutions) to connect multiple parties effectively in cases where multiple parties frequently make data changes. The operational nature of the real-time data that most organizations wish to bring together makes it incredibly difficult to maintain in a timely manner.

#### Unidirectional data exchanges don’t support multi-party data sharing either

In an attempt to solve inconsistent data and stale or incorrect data challenges, organizations may opt for unidirectional data exchange. In this model, one organization aggregates data from multiple partners, processes that data (validates, deduplicates, enriches), and then makes the data available to others. The challenge with this model is that data timeliness is ignored. Further, it requires that all partners trust the centralizing organization to adequately protect the shared data, knowing that certain partners (but not others) should see certain data.

#### Third-party data aggregators don’t work for multi-party data sharing solutions

In an attempt to solve all of the above, some organizations rely on third-party data aggregators. These aggregators promise to combine a wide range of data from many different sources in a fairly timely way. While this is often true, the data available to the aggregators are only a subset of what most organizations could access with closer collaboration with partner organizations. And even when dealing with a high-quality aggregation source, the aggregated data still needs to be integrated into operational systems if it’s to benefit operational processes.

### Multi-party data sharing examples

Because the multi-party data sharing pattern focuses on creating a more comprehensive view of an entity by sourcing different types of data from multiple organizations, imagine some use cases by considering how different industries look at data through different lenses.:

- **Patients** – The healthcare ecosystem is complex with patients, providers, pharmacies, insurance agencies, third-party payment processing services, and many more potential data sharing partners. The complete view of a patient spans across all of these partners and their lenses; each partner uses different electronic health systems and other tools in their stack. It’s incredibly difficult to develop a full view of patient care using the isolated systems that exist today.
- **Travelers** – A single traveler can use many travel and hospitality services on a single trip, such as a ride share, multiple airlines, hotel accommodations, public transportation, food services, beach excursions, etc. Without a more comprehensive, shared view, the traveler's itinerary and potential customer experience opportunities look very different to all of those vendors and potential partner vendors.
- **Customers** – Though a company thinks of an individual customer as "my customer," so do many other companies.. A better customer experience with complementary, value-added joint services is a  new revenue driver once the multiple partners start sharing data with trust and control.
- **Pets** – Most pets use many different services during their lifetime. Connecting independent organizations, like shelter services, adoption services, animal welfare services, and veterinary care, is an important and difficult task.

### Multi-party data sharing solutions

The use cases above can be addressed using solutions built on a distributed ledger. By solving what, in all cases, is really a multi-party data sharing problem in an elegant fashion, the business can redirect time and resources elsewhere.

Here are a few examples of multi-party data sharing solutions.

- **Patients** – Improving data sharing across the healthcare ecosystem has the opportunity to improve [patient experience](https://www.vendia.com/blog/podcast-patient-experience-with-teeth) and patient outcomes at the same time. By lowering costs, optimizing care plans, and automating much of the toil-inducing drudgery of moving data among organizations, more effective multi-party data sharing is at the heart of [healthcare modernization](https://datavant.com/resources/blog/four-challenges-the-health-data-ecosystem-needs-to-solve-in-2023/).
- **Travelers** – Corporate travel is ripe for disruption. Companies that can unite existing service providers through a common platform will offer superior services at a fraction of the cost compared to their competitors. In addition, passengers can receive a continuity of amenities when traveling across airlines within an alliance. By combining airline, hotel, rail, rideshare, loyalty, and other data and making it available to service providers, real-time deals and [real-time transactions](https://www.vendia.com/blog/podcast-worlds-colliding) will follow.
- **Customers** – A distributed ledger is the most effective way for companies to share information about [customer behavior](https://www.vendia.com/blog/what-is-customer-360-with-vendia). For example, Company A and Company B may both be a favorite of Customer Z. Company A may be able to learn more about Customer Z based on its behavior with Customer B. More interestingly, by collaborating, Company A and Company B can provide a differentiating experience for Customer Z.
- **Pets** – After a natural disaster, pets are often separated from their owners. Reuniting those pets is [one beneficial outcome](https://www.vendia.com/blog/connecting-pets-humans) of bringing together lost and found information from leading shelter management systems. Similarly, when a lost pet is found, having a simple way to look up its vaccination status, veterinary care provider, and even (if authorized) its home address can be critical.

## Vendia is driving innovation in chain of custody and multi-party data sharing patterns

The chain of custody and multi-party data sharing patterns are ubiquitous across industries. Because of that, Vendia is driving innovation in industries like [financial services](https://www.vendia.com/blog/fintech-innovation-mortgage-servicing) and insurance, automotive and semiconductor manufacturing, travel and hospitality, healthcare and pharmaceuticals, and nonprofit spaces. These two essential patterns can solve many [longstanding challenges](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/tech-forward/data-ecosystems-made-simple) elegantly.

What's been missing is a comprehensive platform that can be used to create a chain of custody or multi-party data sharing solution — one that includes all of the benefits of distributed ledger, the scale and resilience of the cloud, and that's accessible through low-code APIs. Now that our platform exists, companies can focus on creating these solutions with [Vendia Share](https://www.vendia.com/product). For instance, supply chain [visibility and predictability](https://www.youtube.com/watch?v=e97fpHcqTg4) will improve with the delegation of [traceability](https://www.vendia.com/blog/5-patterns-for-successful-data-traceability) to a decentralized platform. [Customer information](https://fast.wistia.net/embed/channel/d1mxqbj9xw?wchannelid=d1mxqbj9xw&wmediaid=6ujrd8iwnt) will be more easily shared across alliance partners to [disrupt entire industries](https://vendia.wistia.com/medias/7owrco9oa2), from retail to corporate travel. And more and more use cases across industries will be in play, thanks to the two simple patterns at the heart of what we do here at Vendia.

## Explore your use case

**If you have a use case in mind that matches chain of custody or multi-party data sharing patterns, [contact us](https://www.vendia.com/poc) to schedule time to explore it. We love to help companies solve long-standing challenges using distributed ledger technology.**