---
draft: false
title: 'Greenchain, Part 2: Vendia and green blockchain'
description: "How Vendia's serverless distributed ledger is the green way to do data sharing"
date: '2022-05-19'
authors:
  - Tim Wagner
---


# The greenest chains: Serverless chains

Numerous public cloud services are now described as “serverless”. While the term may seem somewhat ironic (given that they are, obviously, running on servers), the label conveys some important elements of both developer experience and implementation efficiency:



* **Massive multi-tenancy**  – Serverless implementations take the cloud’s ability to multi-tenant to the extreme, allowing a set of shared resources much smaller than individual servers to process workloads from different customers without compromising security or operational workload isolation.
* **Per-request scaling**  – Serverless approaches generally build automatic scaling into their algorithms directly, so that every request to them is also implicitly a scaling directive to the platform as a whole, which can then recruit more (or fewer) resources and allocate workloads among the massive fleet intelligently…a feat that individual company and limited on-premise deployments cannot pull off. Unlike conventional blockchain approaches, those built using a serverless approach gain its automatic, request-level scaling abilities, enabling them to offer tight cost enveloping and efficient per-transaction resource footprints.
* **Implicit fault tolerance**  – One of the benefits of having a massive fleet and dynamic workload (re) allocation is that each customer’s workload can be protected from individual machine or even entire availability zone outages without the need to write code or modify their deployments. Unlike a conventional blockchain based on a single-server deployment model, blockchains based on serverless technologies become implicitly fault tolerant.
* **Scales to zero** – Unlike conventional deployments, such as those used by all first generation blockchains, serverless applications can turn completely “off”, meaning they have no ongoing footprint when no useful work is being performed. Instead, other customers of the underlying services take advantage of those (multi-tenanted) infrastructure, HVAC, electricity, and other resources to gain useful work from them. **Critically, eliminating this baseline cost also eliminates the equivalent carbon footprint for the customer.**

[These multiple advantages of serverless technologies “pass through” into platforms built from them](https://arxiv.org/abs/2110.09221), as is the case with serverless blockchains technologies such as Vendia’s. What’s more, they not only improve on older private blockchain technologies that are “always on”, **they actually improve on most conventional (centralized) approaches to building data sharing platforms**, as the next section explores.


# Achieving high utilization and reducing environmental footprint with serverless blockchains

[Conventional data center and commercial IT server utilization is notoriously low](https://www.energy.gov/sites/prod/files/2015/01/f19/UMPChapter20-data-center-IT.pdf), with estimates ranging from 5-15% (i.,e. 85-95% waste). 

That’s not surprising, because any individual company’s applications and solutions have typical usage patterns. Trying to “fill in the low spots” with their own or outsourced third-party workloads is tantamount to building their own version of a hosted serverless compute platform – a challenge out of reach for all but the largest and most well staffed IT centers of the Fortune 50. For everyone else, their independent and isolated workloads effectively doom them to low server utilization rates, even when those servers are running in the public cloud.


### The point-to-point-to-point-to-point…headache

Companies that need to build “public” APIs to share data across departments or organizations internally, to share data with business partners (in supply chains and other multi-company arrangements), or to create multi-cloud solutions find themselves in a predicament here: building custom implementations to host the APIs, connect the APIs to the data, apply data integrity and constraint checks, create connectors to cloud and application data streams, implement event hooks and other notification solutions, and so on face an uphill battle. 


### Risks of complex systems

Not only are these implementations complex distributed systems that require high caliber engineering talent to develop and deploy, they require ongoing 24x7 operations support. And because they allow data to transit between companies, clouds, or organizations with differing compliance regimes, they face the highest levels of risk and scrutiny with respect to security, regulations, and policy enforcement. And because they are “single use” applications, they also suffer from low utilization. In the aggregate, **owning a large portfolio of poorly utilized IT solutions, combined with upcoming reporting and transparency requirements, will be a significant liability for CIOs and CEOs to manage**.


### Serverless blockchains can simplify IT operations and security

**Modern blockchains offer a unique solution to these problems: by making it easy and secure to share real-time, operational data both internally and with partners, they lower time to market, remove project and security risks, and minimize the “undifferentiated heavy lift” of creating redundant data- and code-sharing platforms.**


By using modern, serverless blockchains, companies can simultaneously shift from 10% utilization in “homegrown” solutions to 100% utilization, because serverless solutions are only active when actual work is being performed, by construction. By leveraging the SaaS-style delivery of these blockchains, companies can also dramatically reduce the levels of staffing required to both develop and then operate the resulting systems, effectively shifting much of that burden onto the public cloud and blockchain service providers themselves, lowering IT costs even further. 

Finally, companies benefit from the massively multi-tenanted nature of the underlying cloud infrastructure, combined with the security and safety of having professionally managed fleets and software systems that are fully outsourced and staffed 24x7x365 around the globe. In short, **adopting serverless blockchains allows companies to achieve higher utilization, lower environmental impact, faster time to market, and lower costs versus conventional approaches to building data-sharing solutions such as public APIs**.


# Efficient file sharing solutions

While databases may be the stars of enterprise data storage and sharing applications, the bulk of data owned and managed by companies is actually in the form of _files_. Thus, how files are shared, stored, exchanged, duplicated, and governed ends up having a larger effect on greenhouse gas emissions than database storage. Files are also key to partner data sharing solutions, as they often form the basis for both de jure and de facto industry data exchange standards.


### Blockchains for file sharing

The best modern blockchains manage files “on chain” along with scalar (database-held) data, treating them as native data types. But that alone isn’t enough: To avoid the environmental impact of duplicating large volumes of (often large) data files, it’s also necessary to avoid creating unnecessary duplicates in the form of redundant copies of the data in every partner’s IT stack.


### Reducing duplicating large files

To accomplish this, blockchains such as Vendia also include sharing controls and dynamic file exchange. These features allow customers to “set the dial” anywhere from fully redundant copies (maximum operational isolation but also maximum environmental impact from redundant storage) to fully dynamic, where only a single copy is stored and then fetched on demand when other users with appropriate permission request it. In between are hybrid strategies, such as caching (fetch on first use) and quorum (maintain a small number of copies in strategic locations, such as one per public cloud). **Without these critical operational controls, along with conventional governance and access controls, redundant file storage would quickly balloon out of control, invalidating any gains made from improved sharing of scalar data.**

**This is one of the reasons that “public” chain file sharing solutions, such as [IPFS](https://ipfs.io/) and [FileCoin](https://filecoin.io/), have not grown to be even a small fraction of a percent of cloud data storage solutions such as Amazon S3 — the high cost, high latency, and low throughput of such systems blunts their decentralized advantages for all but the smallest size (and highest valued) files, making them a poor choice for most IT file sharing needs, such as partner data exchange.**


# Adopting modern blockchains

Because blockchain technology ranges from the environmentally destructive (Bitcoin, Ethereum) to “merely” low utilization (Hyperledger Fabric, Quorum) to guarantees of perfect application utilization, IT professionals facing technology choices need to be careful to ensure they are adoption technologies that will be both cost effective _and_ present their companies in the best possible light when carbon footprint reporting goes fully into effect. 

The following list will help identify technologies that improve a company’s carbon footprint stance, rather than damaging it:

_Does the solution employ Proof-of-work algorithms?_ 

Proof of work is a known source of extremely high carbon emissions and “dirty” energy consumption that could mar a company’s public image, even if used indirectly.

_Does the solution support on-chain file management with high availability and redundancy, low latency, and IT-ready redundancy controls?_ 

Files are a large portion of an IT organization’s storage footprint; without a solution for managing and tracking content duplication and exchange, redundant file storage will quickly dominate attempts to share data effectively. Availability and redundancy should be built-in features, not client- or application-derived outcomes.

_Is the solution serverless or “single server” in nature?_

Serverless solutions offer 100% application utilization by construction, in addition to offering built-in scaling and fault tolerance. Single machine deployments are not fault tolerant, cannot scale, and are “always on” solutions (aka “scale to peak capacity”) that negatively impact a company’s carbon footprint.

_Is the solution delivered as a SaaS offering?_ 

SaaS offerings not only dramatically reduce development and maintenance costs, they also enable multi-tenanted approaches that increase efficiency and lower aggregate costs and carbon footprint further.


# There’s not much time left 

In a few short years, “saving the environment” has gone from a fringe movement to one of the top concerns of nations. With new reporting requirements already present and the high likelihood of increased corporate compliance and reporting requirements likely, now is the time for CIOs, CEOs, and others to evaluate their IT choices and put strategies in place to lower carbon emissions over the long haul. 

Focusing on data and compute – the two key drivers of cost and power consumption – will enable companies to identify areas of improvement. With the increasing role of blockchains as mechanisms to share both code and data across companies and clouds, understanding and identifying which blockchain technologies and providers can help _improve_ carbon footprint versus _worsen_ it is an important question facing IT decision makers and architects at all levels of an organization. The checklist provided in this article can serve as a vendor selection tool to help make informed decisions and guide a company towards a “carbon and cost” efficient solution.

Want more context? Read [Greenchains, Part 1: Current blockchains' big carbon footprints](https://www.vendia.com/blog/why-blockchains-have-large-carbon-footprints)
