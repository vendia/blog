---
draft: false
slug: real-time-data-sharing-challenges
title: Real-time data sharing challenges (and solutions)
description: >+
  Examine the fundamental obstacles to successful real-time data sharing,
  including sharing in a data alliance. Understand traditional solutions and
  explore a more modern one with Vendia Share.

date: 2022-11-08
authors:
  - Tim Wagner
  - James Gimourginas
categories:
  - realtimedatasharing
relatedPosts:
  - 2022-05-02-what-is-real-time-data-sharing
  - 2022-09-22-real-time-everything
tweet: Check out Vendia's real-time data sharing mega guide!
seo:
  title: Real-time data sharing challenges (and solutions)
  description: >+
    Examine the fundamental obstacles to successful real-time data sharing,
    including sharing in a data alliance. Understand traditional solutions and
    explore a more modern one with Vendia Share.

  keywords: real-time data, real-time data sharing
updatedBy: David Wells
updatedAt: 2022-11-10T18:44:48.220Z
---

By 2025, global data growth is expected to reach [181 zettabytes](https://www.statista.com/statistics/871513/worldwide-data-created/), up from 79 zettabytes in 2021. As countries and communities make new investments in internet and broadband access, mobile phone use expands and uptime grows, and social media [drives](https://ourworldindata.org/internet) a new generation of consumers and data makers, businesses are struggling to build or buy a [real-time data sharing platform](vendia.com/product) that scales for multiple data sharing partners, is cloud-based, fault tolerant, secure, compliant, and delivers an automatically reconciled single source of truth for everyone (or everyone with the right permissions) in a data alliance.

## Real-time data sharing explained

When done well, real-time data sharing is an invaluable business practice. It gives organizations the power to capture, use, and govern data as that data is created, collected, or updated. Whether a business shares data across systems and departments internally, or it shares data back-and-forth across clouds in a multi-party data alliance, real-time data sharing can power intelligent business decisions for today and tomorrow. Especially when you can achieve [real-time “everything”](https://www.vendia.com/blog/real-time-everything) with the combination of operational data and analytics.

## Real-time data sharing requires operational data

Operational data is produced by and records your organization's day-to-day activities and transactions. Some people call operational data by other names, like operating data, short-term data, transaction data, or live data. Examples of operational data include information and processes related to your workforce, customers, vendors, raw materials, product inventory, and financials. But, security concerns keep most operational data siloed away in enterprise IT's walled gardens.

Still, real-time data sharing requires sharing operational data, and there are myriad [use cases](https://www.vendia.com/blog/what-is-operational-data-sharing#use-cases-for-operational-data-sharing) across industries. Without the will and capacity to share operational data (that’s compliant, controlled, and true), business leaders don’t have the business intelligence they need to make smart tactical decisions — especially in the face of market disruptions.

### Operational vs. analytics data

With operational data sharing, you create visibility and transparency to support hourly, daily, and weekly tactical business decisions.

- How many business-class seats remain unbooked booked on the flight?
- Will the microchips [ship out on time](https://www.vendia.com/blog/why-is-supply-chain-visibility-important) tomorrow in the quantity we need?
- How many transactions are lenders processing, at what rates this week?
- What’s the overall inventory on our high-velocity items across the region today?

It’s not uncommon for enterprise teams to employ data analysts, who use various tools and techniques to develop insights and trends based on their assessments of operational data. What’s more uncommon is having a [real-time analytics data platform](https://www.vendia.com/blog/real-time-everything#the-art-of-the-possible) (and having it available in a real-time multi-party data ecosystem).

## The challenges for real-time data sharing

In most scenarios, real-time analytics data gives a business timely insights after operational activities happen. Often, it’s narrowly scoped to targeted insights embedded in operational processes for a singularly-focused question like, “What else might this customer buy?” And “real-time” usually means data is actually outdated by 24-48 hours because data warehouses must sync operational data overnight, perform transformations and deduplication, and then calculate the insights.

With true real-time analytics and operational data sharing, the question opens up from “What else might this customer buy?” to “What are the growth opportunities we can capitalize on, right now?” But to grasp those opportunities and make good on them, real-time data sharing has to cross some canyons, including multiple clouds, internal and external parties, geographies, and applications.

### Multiple clouds

Whether companies explicitly deploy a multi-cloud strategy or it happens organically through mergers and acquisitions, most companies find themselves split across clouds. The impetus for selecting best-of-breed solutions at a service level and working with subsidiaries and partners across cloud boundaries makes multiple clouds a given. But, at even a basic level, it’s challenging  to manage data transfer fees as well as multiple authentication and authorization techniques. It’s also challenging to address all the security and compliance elements inherent in any cross-cloud data-sharing approach at scale.

### Multiple departments and companies

In our global economy, and in the face of our growing [data boom](https://sloanreview.mit.edu/article/the-data-boom-is-here-its-just-not-evenly-distributed/), sharing data internally across organizations with a company and sharing data across canyons into the networks of external partners (suppliers, joint manufacturers, distributors, SaaS vendors, etc.) is already a big challenge — and it continues to grow. These different parties also present boundaries, if not canyons, to cross. With multiple parties sharing data amidst unique security policies and assurance and regulatory programs, it’s challenging but crucial to create complex access controls, manage and comply with governance requirements, and be accountable to auditing regimes. Add the need for creating a single source of truth among multiple parties as data moves from on-premises data centers and central IT team control toward SaaS vendors while spreading across partners (and their clouds), and that makes for, perhaps, the heftiest (but most rewarding) challenge to solve.

### Multiple geographies and accounts

To deliver fault tolerance/high availability, low access latency, and regionally divided security boundaries, applications (and their data) must cross and live in multiple data centers and geographical locations. This includes building regional account barriers within public cloud solutions. These operational needs dramatically complicate IT solution development. They reshape conventional, monolithic single-region solutions into complex distributed systems that must span multiple regions and accounts without compromising operations — even when a region (or multiple regions) fail. Most IT teams are not resourced to deliver on such platform considerations. Meanwhile, organizations that outsource custom development sacrifice budget while increasing delivery risks.

### Multiple applications

When it comes to operational data managed by IT departments, a high percentage has always existed in the form of first- and third-party applications. But with the rise of SaaS-delivered solutions, data that IT once controlled and could access easily is now pulled out into (largely) vendor-managed public cloud repositories. Solutions that worked in the past — like built-in ERP-sharing solutions, EAI products, and API-centric solutions — are no longer viable in a cloud- and SaaS-based environment. Even the most modern SaaS-aware ETL solutions in the market target analytics solutions, not operational data sharing. Enterprises are challenged by limited options for dealing with mission-critical operational data.

Let’s take [a closer look](https://www.vendia.com/blog/real-time-data-sharing-roundup) at those legacy solutions, unpack their limitations, and then explore the potential of fresh solutions like a real-time data mesh.

## Legacy solutions (and their limitations)

In the past, enterprises have [attempted](https://www.vendia.com/blog/why-blockchains-databases-api-cannot-standalone-as-it-solutions) to cross the canyons with technological advancements and innovative approaches, but none have really solved the biggest business need. Most of these legacy approaches are artifacts now, viable in the period they were conceived, but full of shortcomings when applied to modern, cloud-based workloads.

### EAI/iPaaS approaches

EAI, short for enterprise application integration, is also known as EiPaaS, short for enterprise integration platform-as-a-service. EAI/EiPaaS was a classic approach to sharing data among applications. EAI approaches (think Boomi or Mulesoft) attempt to extract and productize the integration platform itself, thus making the platform application and data model agnostic. While these solutions and their associated toolsets can lower solution-building costs, they don’t tackle the core problem of point-to-point (P2P) integration where every data source needs to be connected to every data sink.

### ERP systems

ERP, or enterprise resource planning solutions are akin to EAI systems. Frequently, they include some type of “intra-application” integration and data-sharing capability that works among their components. Created in and for a pre-cloud world, they often require complex, platform-specific data models and limit flexibility in adopting modern cloud services. While platform-native ERP features help companies with large, IT-spanning ERP solutions (like SAP) address some of their in-house data-sharing and integration needs, data sharing is held back at the ERP solution’s boundary. If a company’s business partners or newly acquired subsidiary haven’t deployed the same ERP system (or they don’t use a classic ERP deployment at all), then the system’s ability to share data or integrate application components is dead in the water.

### Public cloud platforms

Public clouds (like AWS) offer everything from infrastructure rental to fully managed solutions for databases, data storage, compute, and more. While, on the surface, their breadth of public cloud platform offerings is one of their key advantages, it is also one of their weaknesses when it comes to real-time data-sharing. Here are the two main challenges:

1. Much like building with a box of LEGOS (TM) it takes heavy lifting to turn a suite of individual services into a secure, scalable solution that can spans multiple clouds, partners, geographies, accounts, and applications. 
2. By their very nature, public cloud platforms are “walled gardens.” A public cloud provider has no incentive to simplify or streamline data sharing with other public clouds. From feature sets to data-transfer pricing models, they’re designed to facilitate sharing data and integrating solutions among their own native services while discouraging the use of complementary or competitive services.

### Classic data lake vendors

Conventional [data lake](https://www.vendia.com/blog/understanding-real-time-data-lakes) vendors (like Snowflake, Redshift, Databricks) offer powerful analytics platforms and extract-transform-load (ETL) ecosystems. For column-oriented data sets, they can provide secure, compute-attached workloads that include basic, unidirectional data sharing. But, while highly capable within their market position, these platforms are designed exclusively for analytics workloads. Classic data lake vendors lack the low latency, multiple writer, fine-grained ACLs and other capabilities needed for multi-party, real-time operational data sharing and application connectivity. Their connections to operational systems are generally limited to ETL-based ingestion connectors and, occasionally, reverse-ETL solutions that can harvest analytics for operational systems tuning and feedback loops.

### Legacy blockchains

Unlike P2P EAI and homegrown cloud solutions, blockchains brought forward decentralized technology that could create a durable source of truth while maintaining separate data stores for individual parties. With blockchains, there’s a unique and valuable balancing act happening as each party in the chain retains a self-governed, operationally-isolated copy of the data while, at the same time, that data remains consistent and up to date among all the parties with cryptographic guarantees. This functionality overcomes two of the key challenges with earlier approaches: 

1. Constant polling to “learn the latest” data
2. Building point-to-point solutions for solving that “learn the latest” challenge

The beauty and [promise of blockchain](https://www.vendia.com/blog/13-features-you-need-to-evaluate-an-enterprise-blockchain-platform)-based solutions is that there can be no disagreement about “the facts.” But, legacy blockchains, or first-gen blockchains, weren’t ready for enterprise use cases. Legacy blockchains have high latency, low throughput, high costs, lack of scalability and fault tolerance, and complex infrastructure deployment and management overhead.

## The data mesh approach to real-time data sharing

A [data mesh](https://www.vendia.com/blog/improve-your-data-mesh) rethinks modern enterprise data architecture, favoring a composition of decentralized, collaborating data producers and consumers rather than an architecture that prominently features a centralized, monolithic data lake. A data mesh approach is important because it restructures enterprise data platform architectures around domains, following [guidance from domain-driven design](https://www.vendia.com/blog/applying-domain-driven-design-to-blockchains) (DDD). It also prioritizes data products as outputs from each team and each domain, allowing other domains and other teams to use those data products as they see fit.

Here’s an example exploring how, when combined with [enterprise blockchain](https://www.vendia.com/blockchain) and distributed ledger technology, a data mesh to allow loan servicer to help a homeowner avoid defaulting on their mortgage.

#### Data mesh use case

Consider these four parties as transacting partners:

- Homeowner (they must make a monthly mortgage payment)
- Loan owner (the lender or an organization that purchased the loan from the original lender(
- Loan servicer (they collect the monthly payment and handle distribution)
- Loan securitizer (they create [a security](https://www.investopedia.com/terms/m/mbs.asp) from the home loan, pledging it will be repaid and offering the loan up to investors within a bundle of other loans) 

Should the homeowner come up short on a monthly payment, the loan owner, servicer, and securitizer have both immediate and gradual actions to take. Here are some examples:

- The loan servicer notifies the homeowner they’ve missed a payment, tries to determine the chances of further payment, and offers payment support at their discretion. 
- The loan owner folds the appropriate data about the homeowner’s loan status into their data sets, adjusts their lending guidance based on historical, aggregated loan performance data, and shares updated payment trends with originating lenders.
- The loan securitizer updates security disclosure calculations for all securities linked to the loan, dynamically adjusting market risk and exposure based on aggregated loan performance data.

The historic data sharing challenges in this scenario include data isolation because parties have their own versions of “The Loan Data.” That siloed data and its respective systems result in poor data input and timely updates, data inconsistency within and across the data alliance, and an incomplete or inaccurate historical record encapsulating a true, full picture for all participants that can help the homeowner (and their partners) optimize a missed payment and potential loan default response plan.

But, in a best-case scenario where the data partners (loan servicer, loan owner, and loan securitizer) have invested in a data mesh architecture that automates and accelerates their data workflows AND they’ve invested in a [lean](https://www.vendia.com/blog/lean-app), multi-party, real-time data sharing platform that allows them to build upon it, they can solve their data sharing challenges.

#### Vendia Share and the data mesh approach

A real-time data sharing solution like [Vendia Share](vendia.com/product) helps organizations push the boundary, and impact, of their data mesh beyond their four walls. When an enterprise addresses the challenges of real-time data sharing with a data mesh approach in combination with Vendia Share empowers businesses with the ability to [share data effectively](https://www.vendia.com/blog/vendia-share-building-blocks) and move their operations beyond legacy challenges toward cost savings, operational and product or service innovation, and improved customer experiences. 

In the case of the home mortgage industry…

- Participant isolation becomes controlled, compliant connection.
- Time spent on data reconciliation can be spent on payment remediation, risk management, or lending/owning/securing on more favorable terms.
- Data input quality and timeliness rises alongside data output quality and timeliness, delivering an ROI for all participants with a single source of operational data truth, innovative analytics processes, reliable new data insights and trustworthy recommendation models.
- All data alliance partners benefit from a complete story about the loan and payment history that occurred prior to the late payment, and they can continue to grow and share that history with new information as they provide payment options, determine the outcome for late payment remediation, and ultimately, how to better serve customers and their business interests (no pun intended).

## Address real-time data sharing challenges with Vendia Share

Learn more about how Vendia Share can automate and accelerate your data workflows across your business network. [Contact us](https://www.vendia.net/contact-us) or request your [one-week proof of concept](https://vendia.net/poc).