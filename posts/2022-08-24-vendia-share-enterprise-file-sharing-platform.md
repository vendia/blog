---
draft: false
title: 'Q+A: Understanding Vendia Share’s approach to file sharing'
description: 'In Part 3 of our series on file sharing, we answer the top questions asked about controlled file sharing for enterprises and real-time file sharing outcomes for enterprises.'
date: '2022-08-24'
categories:
- product
authors:
  - Tim Wagner
id: '750bfbde-4291-4cae-9d11-90116ac95099'
---

This is our third post in our series on file sharing. Catch up with the entire series:

* Part 1: [Use cases for secure, ad-hoc data lakes with multi-cloud and multi-party file sharing](https://www.vendia.com/blog/data-lakes-file-sharing-use-cases)
* Part 2: [Why public cloud services aren’t enough for file sharing](https://www.vendia.com/blog/public-cloud-file%20sharing)


## Top 5 questions on controlled file sharing for enterprises

Vendia Share provides file sharing that goes far beyond existing public cloud provider capabilities, while keeping the programming model simple and the sharing rules under each company’s control. With permission, anyone can share a single source of truth inside or outside their company. And they can avoid the classic challenges of diverging information, expensive manual remediation processes, or unpredictable business outcomes that arise from missing or incomplete information.

Let’s break down some of the most common questions we hear from developers and innovation leaders:



1. _How does an application track which parties have which versions of which files? Who’s responsible for detecting and transferring missing files when something inevitably goes wrong?_

    With Vendia Share, the platform itself handles the challenge of replicating files, ensuring their integrity, establishing the correct order and appearance of updates, and handling problems such as temporary public cloud region outages. Application code never needs to deal with these issues, so customers need not incur expensive and often insecure data management implementations.

2. _What happens if two or more parties, both with update privileges, disagree on which version of a file is the “current” one?_

    Vendia Share’s powerful consensus mechanism detects and automatically prevents collisions, such as an attempt by two or more parties to create a file with the same name at the same time. Our powerful distributed ledger implementation ensures a correct, accurate, and totally ordered set of updates among all parties—no matter how complex their file content or updates might become.

3. _How can entire folders be transferred automatically without creating duplicative code in many applications to address the lack of batch operations in public cloud services?_

    Vendia Share automatically propagates updates, including verifying the integrity of multi-step transactions.

4. _When SOC2, PCI, or other security, infosec, or audit evidence gathering is required, how can key administrative questions, such as who was responsible for sharing a file with another party, be accomplished? Where is that administrative information stored and how is it made readily queryable and indexable?_

    Vendia Share makes “time travel” to older content, retrieval of provenance information and queryies for ownership or updating metadata easy and on platform for all users.

5. _How can a CIO or CDO ensure that all data is fully encrypted, at rest and in transit? How can they insure that all infosec and compliance-related sharing policies, both internal and external, are in full compliance without a costly and time-consuming manual audit of individual files and transfer logs?_

    By employing a platform, instead of attempting ad hoc file sharing implementations that can differ from application to application, cloud to cloud, and engineer to engineer, Vendia Share offers a simple, out of the box approach to SOC2 and other forms of compliance, without costly engineering or manual auditing and remediation.



## How does Vendia Share achieve real-time file sharing outcomes? 

Under the hood, Vendia Share stores files in well-known, well-trusted public cloud services, such as Amazon S3 and Azure Blob Store. On top of this, Vendia adds a coordination and consensus layer— essentially, a blockchain for files. This distributed ledger provides several key outcomes:



* **File versioning, integrity checking, and immutability: **Each file is verified for integrity, and the resulting hashes are stored in an immutable ledger (a “blockchain”) that’s maintained automatically.
* **Consensus and replication: **Files and their metadata are seamlessly, accurately replicated across parties and clouds with full support for multi-party writer scenarios using a highly scalable serverless consensus algorithm.
* **Security and compliance:** Encryption, in transit and at rest, plus built-in SOC2 and other compliance and first-class support for auditing make it easy to adopt Vendia’s solution and get insightful answers to complex security and compliance needs, such as evidence collection.

Despite the advanced algorithms that accomplish these outcomes, it’s easy to use Vendia’s file sharing capabilities. Developers don’t need to know or learn anything about blockchains, distributed systems, or other advanced concepts to safely and securely share files. _With just two lines of JSON configuration, any company can stand up a production-grade, scalable, serverless file sharing node in under 10 minutes_. Vendia Share even preserves call-for-call compatibility with existing code for reading from cloud-based blob stores, eliminating the need for complex application porting or migration strategies.


### Advanced file sharing features: Transactions and sharing modes

Many Vendia Share users gain significant value from the functionality described above:



* The simplicity of the application programming model and its compatibility with existing cloud storage solutions
* Gaining secure cross-party and cross-cloud sharing capabilities without having to change the format of the files being shared or learn new APIs for reading files in the cloud 
* The SaaS-based approach means there’s never any infrastructure for a customer to own, operate, manage, or secure

However, some applications may want to take advantage of advanced capabilities that further enhance their file sharing outcomes. Here are three of the most popular advanced features that application developers typically employ when using Vendia-based solutions:



1. **Unlimited file metadata**

    Files are an efficient way to package and share information. Ironically, their very packaging can prove inconvenient, such as when additional metadata needs to be associated without disturbing a file’s existing content. Vendia Share automatically provides sharing, provenance, and other auditing metadata. Our platform also provides support for customer-provided metadata. However, unlike the metadata support in public cloud blob store services, Vendia Share places no limits on the amount of such data. We also allow for both strongly and weakly typed data models at a customer’s discretion. Metadata enjoys all the benefits of files themselves, including immutability, integrity checking, consensus-based multi-party replication, support for multiple clouds, and more.

2. **Transactions**

    Sometimes creating or updating a single file isn’t sufficient to accurately represent a real-world transaction. For example, it may be necessary to update two or more files at once (“atomically”) to ensure they’re consistent and/or to update a file’s metadata and its content in a coordinated way. Vendia Share makes all these scenarios possible through transactions. Just like a database system, it offers ACID (Atomic, Consistent, Isolated, and Durable) updates, even if files and their metadata span other companies and clouds.

3. **Sharing modes**

    Files can be large. Redundantly storing them across different departments or even different organizations gets expensive over time. Moreover, sometimes it makes sense to share files on demand or to cache them on first read, especially when access patterns are unpredictable in advance. Vendia Share supports all of these activities through a fine-grained _copy strategy setting _on each file, enabling customers to balance cost against access latency.



## Vendia Share: The best enterprise file sharing platform

File sharing remains arguably the most core and critical capability in an IT department or application developer’s toolkit. With most of the world’s data still being stored and exchanged in some flavor of files, how they’re shared, and how that sharing is managed, is a primary determinant of the cost, complexity, security, and scalability of IT outcomes. 

Public cloud providers focus on durability and high availability at the cost of convenience and features, leaving companies to go it alone when it comes to file sharing capabilities beyond single cloud and single owner scenarios. Key use cases, from supply chains to financial settlements, require going further, and yet DIY construction is messy, error prone, expensive, and repetitive.


#### Contact us 

Platform solutions, such as Vendia Share, offer an alternative: A simple, cloud-compatible way to share and manage files and directories across companies, clouds, geographic regions, and differing technology stacks. Powered by a serverless blockchain, Vendia’s file sharing solutions are simultaneously easy to adopt while also offering immutability, automatic integrity checking, cost efficient cross-cloud replication, and a host of advanced features. Set up [your free account](https://www.vendia.com/pricing), contact us to book a [demo](https://www.vendia.com/contact-us), or request your[ one-week proof of concept](https://www.vendia.com/poc).
