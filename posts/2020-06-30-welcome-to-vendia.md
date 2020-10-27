---
title: Welcome to Vendia
description: 'About this post'
date: '2020-06-30'
categories:
  - company
authors:
  - Tim Wagner
  - Shruthi Rao
---

**Welcome to Vendia!** Our mission is to make it easy to share code and data across companies, cloud, geographies, and technology stacks. With a name inspired by Venn Diagrams, Vendia arose from two powerful concepts: Public cloud architectures, with their unlimited horizontal scalability, and distributed ledgers, with their ability to replicate data across multiple parties. Our unique combination of these technologies helps companies share code and data with a simplicity and scale never before possible. We recently exited “stealth mode” with our [keynote presentation](https://youtu.be/A1bL4pHuivU) at the AWS Serverless Community Day. Today, we’re excited to announce a seed round investment of $5.1M, led by Neotribe’s Swaroop ‘Kittu’ Kolluri with participation from Correlation Ventures, WestWave Capital, HWVP, Firebolt Ventures, Floodgate and Future\\Perfect Ventures. We’ve learned a lot from our initial customers and we’re excited to start expanding our team so we can deliver even more!

Hear Dr. Tim Wagner discuss the evolution of Serverless and the launch of Vendia at the AWS Serverless Community Day.

The Challenge of Data Sprawl
============================

Enterprises have long struggled with the challenges of sharing data and business processes — from upstream supply chains to manufacturing partners to downstream logistics and sales networks. But these problems have recently become magnified: With companies succeeding in their digital transformations, public cloud migrations, and IoT adoption, more data is being _produced_ now than at any point in history. At the same time, AI/ML, deep analytics, and supply chain optimizations are _consuming_ more corporate data than ever before.

Unfortunately, over 80% of that data lives outside a company’s four walls…imagine trying to successfully train an ML model on only 20% of the input! Addressing the “data sprawl” problem is the first step a company needs to take before it can begin deploying modern business optimizations powered by that collective data.

Legacy Alternatives
===================

Previously, companies looked to complex, expensive ERP solutions and difficult to implement DIY approaches to solve these problems. APIs and databases of all flavors coupled with bespoke point-to-point integrations are the most common way in which businesses share information today. As difficult and time consuming as these implementations are, both to create and to operate, they’re also woefully insufficient: No business would accept an internal database containing business information that’s inconsistent, outdated, and incomplete…and yet, that’s the typical “best case” outcome with an API-based implementation. Modern, data-driven enterprises need an “API upgrade” — they need data to be shared _transactionally_ so that it’s consistent, complete, and always up to date, regardless of the source.

Escaping the “Single Box” Blockchain Limitation
===============================================

Initially, it looked like blockchains might be an answer to this problem. Blockchains such as Hyperledger Fabric and Ethereum enable companies to create replicated databases where every participant has a complete, identical copy of the information at all times. Tamperproof, transactional, and cloud-spanning, blockchains _seemed_ like viable approach. But for all their vision, blockchain solutions were disappointing in practice — designed by cryptography experts who lacked a background in distributed systems, they didn’t deliver the kind of performance, scalability, and integration needed to address real-world enterprise problems. The cause? “Single box” deployment architectures: Blockchains like Fabric and Ethereum run on a single server for each user, forever limiting their ability to scale storage, network bandwidth, and computational power and thus unable to grow beyond problems that can be solved on a single desktop PC. In short, blockchains had a great vision, but not the architecture needed to achieve it.

Serverless Deployment Model
===========================

Meanwhile, our background at companies like AWS and Microsoft helped us understand the horizontal scalability required to build massive cloud-based services. With our experience creating services like AWS Lambda in mind, we took a different approach: We created Vendia _Share_ — a fully cloud native solution, one that can bring an unlimited amount of compute power, memory, storage space, and networking capacity to bear. This scalability actually works in both directions: Vendia Share scales down to zero, meaning a customer accrues no charges when they’re not doing work, and up to tens of thousands of transactions per second, versus the dozens or hundreds of transactions that legacy blockchains can muster. Unlike first generation distributed ledgers, Vendia has access to unlimited silicon, network bandwidth, and storage, because every node is composed of modern, scalable cloud services instead of being limited by a single machine’s capacity.

Vendia also took a much different approach when it comes to deployment. A conventional API- or ERP-based solution to cross-company data, such as a supply chain “track-and-trace” solution, can take 12–18 months to deploy. Even cloud-based blockchain solutions, which require complex networking and server-level configurations among all participants, can take 10–12 months to stand up: Firewall and networking configuration alone consumes weeks of time from multiple staff members on both sides of a connection. Vendia’s approach is different — its “born cloud native” architecture builds on fully managed services from vendors such as AWS, Azure, Google, IBM, and other cloud providers. A schema-based approach enables customers to create a decentralized database in under five minutes and without writing code…just as they can do with a conventional centralized database today. Enabling POCs in a day and production-grade outcomes without the need to hire and staff a complex implementation opens the door to enabling _every_ company to enjoy the benefits of scalable, multi-party and multi-cloud data!

Calling All Developers!
=======================

Customers are already enjoying the benefits of Vendia’s modern architecture. IT vendors are using Vendia to deliver parts to customers faster and more effectively than ever before, enabling them to track and complete deliveries with a guaranteed SLA around the globe. Auto manufacturers are working to make driving safer by combining safety data from suppliers, manufacturers, and third parties. Animal welfare organizations are using Vendia to save the lives of animals by sharing information that can punch through IT information silos, reuniting pets with their owners. And developers are using Vendia’s platform to build amazing new solutions that fix two of the key challenges in previous serverless approaches: the lack of state and concerns around vendor “walled gardens”. Vendia’s support for replicated data that can cross regions, accounts, clouds, and technology stacks frees developers to use the best the cloud has to offer while remaining confident that their solutions will work on _any_ public cloud, not just a single vendor. Interested in experiencing it for yourself? [Sign up](https://www.vendia.net/sign-up) to join our preview access program, starting in late July.

We’re excited to be on this journey to help customers solve some of their greatest challenges by making code and data easier to share, protect, and secure. **Welcome to Vendia and welcome to a new era of sharing made easy!**

_Tim & Shruthi_

To learn more or sign up for preview access, visit [www.vendia.net](http://www.vendia.net). [Hear more](http://blog.vendia.net/meet-vendias-founders) from Vendia’s founders.

_Looking for your next great opportunity?_ [_We’re hiring!_](http://jobs.vendia.net)
