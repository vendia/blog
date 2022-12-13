---
draft: false
title: 5 patterns for successful data traceability
description: Given the challenges companies face in developing and maintaining a
  successful data traceability program, here are five design patterns CIOs,
  CISOs, and CTOs can follow to ensure their corporate systems and
  mission-critical data are well protected.
date: 2022-12-08
authors:
  - Tim Wagner
  - Francine Klein
categories:
  - real-time-data-sharing
  - guidance
tags:
  - Healthcare, data traceability, distributed ledger technology, data lineage
seo:
  noindex: false
  description: Given the challenges companies face in developing and maintaining a
    successful data traceability program, here are five design patterns CIOs,
    CISOs, and CTOs can follow to ensure their corporate systems and
    mission-critical data are well protected.
  keywords: data traceability, data lineage
  title: 5 patterns for successful data traceability
callToAction:
  - What’s a business blockchain?
updatedBy: Hugues Tennier
updatedAt: 2022-12-13T16:15:38.941Z
---

Given the growing concerns and unexpected [impacts from global health issues](https://www.deloitte.com/content/dam/assets-shared/legacy/docs/perspectives/2022/gx-covid-19-Privacy-Security-in-the-next-normal.pdf) around personally identifiable information (PII) and protected health information (PHI) handling, data traceability needs to be a top concern for Chief Information Officers (CIOs) and Chief Information Security Officers (CISOs). There’s an accelerating [migration ](https://www.vendia.com/blog/decentralization)of corporate data to business partners and SaaS service providers. And the growing volume of business data from automating workflows and applications will only continue to compound.

Even if your business isn’t subject to HIPAA, SOC, GDPR, CCPA, FedRAMP, or other compliance regimes today, any expansion in your business model, selling regions, or partnerships could impose multiple challenges on your data handling — and those challenges could rear up overnight.

- In 2021, an average of 59 data breaches were reported each month.
- 712 healthcare data breaches were reported between January 1 and December 31, 2021. 
- That sets a new record for healthcare data breaches, exceeding last year’s total by 70 – An 10.9% increase from 2020. ([HIPAA Journal](https://www.hipaajournal.com/december-2021-healthcare-data-breach-report/))

No business wants to be the subject of a headline describing the inappropriate handling of data (or the results of a data breach). Any company subject to an audit process — either from a governing board, part of mergers & acquisition due diligence, or performing duties of a public company — will be required to provide this type of data. Given the challenges companies face in developing and maintaining a successful data traceability program, what design patterns can CIOs, CISOs, and CTOs follow to ensure that their corporate systems and mission-critical data are well protected?

### Data traceability design pattern no. 1 – Delegate to a platform

The easiest way to deal with any complex IT infrastructure challenge is to [delegate it](https://www.vendia.com/blog/13-features-you-need-to-evaluate-an-enterprise-blockchain-platform) to a service provider. While the heterogeneity of enterprise data types, systems, and applications is too broad for a one-size-fits-all solution, there are a few options here that significantly reduce complexity. But, on the analytics side, while platforms like [Snowflake](https://www.snowflake.com/en/) provide a variety of services and capabilities that include several aspects of data provenance, they fall short in providing the answers to the “who” and “when” of data updates unless manual tracking and auditing is layered on. On the operational side, next-generation distributed ledger systems like [Vendia Share](http://vendia.com/product) provide similar functionality for real-time and application data. And Vendia’s approach addresses all layers of the data solution, bringing an integrated approach to managing current data, reconciled data, mastered data, historical data, secured data, audited data, and compliant metadata in a single platform.

### Data traceability design pattern no. 2 – Combine vertical layers

When platform adoption isn’t possible, companies can still gain leverage by selecting data services that combine as many layers of traceability as possible. For example, a service that offers storage of the data itself and maintenance of historical versions, combining aspects of the first and third layers. A good example is[ Amazon QLDB](https://aws.amazon.com/qldb/) (Quantum Ledger Database). Amazon QLDB seamlessly represents both current and historical data, as well as “remembering” which updates occurred and when. It also models more of the traceability components than a [conventional database](https://www.vendia.com/blog/why-blockchains-databases-api-cannot-standalone-as-it-solutions), which only contains the current state. QLDB doesn’t go as far as a system like [Vendia Share](vendia.com/product) because it doesn’t support partners and their data, nor does it offer schema-customized [APIs](https://www.vendia.com/blog/api-design-best-practices). But it’s easier than selecting two or separate storage solutions for current data, historical data, and updating tracking — and then spending even more time, money, and people trying to integrate those solutions.

### Data traceability design pattern no. 3 – Unify horizontal layers

Combining vertical layers isn’t always possible because it typically requires some amount of application reengineering to accommodate a different approach to reading and writing data when adopting a solution like Amazon QLDB. A simpler approach is to adopt a consistent approach for one of the traceability “layers”. As an example, using a [cloud provider Identity and Access Management](https://www.g2.com/categories/identity-and-access-management-iam) (IAM) approach for access control across the IT portfolio makes the access and audit component of layer three (data about the data) easier to manage than if every application and system implements a custom approach.

When full unification isn’t possible, unifying horizontally across common storage solutions (e.g. all cloud databases from a given cloud service provider) is a reasonable fallback. A lighter version is focusing on just cataloging and; centralizing only the metadata across the IT landscape to apply compliance tags. This approach has limitations, though. Typically, it won’t address vertical synchronization problems. Also, without additional manual build, it won’t enable businesses to take action on this traceability data, although it can lower costs and reduce risk to buy time to consider adopting one of the approaches above.

### Data traceability design pattern no. 4 – Reduce heterogeneity during cloud or data migrations

Patterns 1–3 focus on long-term investments to “steady state” IT situations. But sometimes there’s a natural point in time when data is in flux anyway, and that allows for additional opportunities to optimize traceability support and undergo a temporary data cleanup effort. Legacy data system migrations, public cloud migrations, and fully managed service adoption…all represent opportunities to consider parallel investments in data traceability support. 

This can take the form of more aggressive solutions like the ones described above, or they can be as simple as adding a column or two to a [data model](https://www.vendia.com/blog/codeless-apis) to allow for metadata sidecars or improved access control and auditing solutions. Any ad hoc data cleanup efforts that occur during system migration will be chasing the clock to “current state” as the traceability insights added to the older, static data will overlook applying that same cleanliness to data newly created after the cleanup activity. This creates a constant loop to narrow the amount of “delta” data that needs to be re-reviewed.

### Data traceability design  pattern no. 5 – Don’t skimp on “green field” builds

The form of point-in-time change is application migration. The creation or substantial updating of an application is a natural time to reconsider how it handles data traceability. Application logs, access logs, data tier update logs, and more are all fair game when the application at-large is being created from scratch or remodeled. This is a natural opportunity to ask whether [operational or analytic data platforms](https://www.vendia.com/blog/real-time-everything) should be adopted as part of the process and whether horizontal consistency or vertical layer integration can be accommodated in the design.

It's not often that business applications or data services that generate data also offer solutions to the other data layers, particularly data traceability. While there are offerings that light up partial aspects of the data layers, building three layers (one for the data itself, one to wrangle the data, and one for the metadata) often creates new problems with reconciliation, timeliness, and new systems to secure and audit.

Whether directly tackling data traceability or building a complete data layer, solutions must not treat the data, and all three of its layers, as an afterthought. Solutions must treat it as a product itself.  

Using a tool like [Vendia Share](http://vendia.com/product), with data sharing as the defining feature of the product, the first and second layers (data, definition, and reconciliation) are part and parcel of the solution, forcing an aligned version of the truth. Features for metadata tracking and fine-grained access permissions solve the compliance and governance needs of layer three. And, with distributed ledger technology being the driving engine of the solution, the historical data and audit history of layer three are embedded in Vendia Share the solution, giving traceability data an equal footing with the data itself. All three layers of a data solution, including data traceability components, are covered.

## Adopt a mature approach to data traceability

Compliance regulations, sector- and industry-specific legal requirements, ethical and contractual considerations, and more drive the need for every company to understand not just what their data tells them, but how that data was produced, by whom, and under what circumstances. Few companies today possess a mature approach to data traceability, but every company can improve on its status quo by adopting one or more of the data traceability design patterns over time. By implementing one of these solutions, companies will [improve trust](https://www.vendia.com/blog/shared-data-architecture), lower risk and cost, and increase their ability to operate data-driven applications and workflows to compete more successfully in their markets.

#### Learn more about Vendia Share as a data traceability solution

See how your organization can improve trust in multi-party data sharing, lower risk and cost, and increase your ability to operate data-driven applications and workflows that help you compete more successfully in your markets. Contact us to [request a free consult](http://vendia.com/contact-us).