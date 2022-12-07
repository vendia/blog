---
draft: false
title: "The future of data sharing with deterministic databases"
description: "Tim Wagner, the Father of Serverless and Vendia Co-founder explores how database and blockchain research are revolutionizing business data sharing."
date: "2022-11-04"
categories:
  - blockchain
  - real-time-data-sharing
authors:
  - Tim Wagner
---

From tapping a phone to pay for an Americano to coordinating global supply chain systems, data consistency across companies, clouds, geographies and applications is critical to every aspect of both B2C and B2B experiences. But, accurate data sharing has gone largely unaddressed despite advances in cloud technology:



* _Databases_ can help a single company keep its data accurate and consistent, but things fall apart when two or more companies need to share that data across different clouds, in different regions, with legally and operationally isolated systems, etc.
* _APIs_ offer a great way to move bits around, but they don’t understand the data. They happily carry anything, but they don’t know whether the data they’re moving is consistent, up to date, or complete. 
* _Blockchains_, initially, teased a radically different distributed ledger solution, but the solution failed to materialize once first-generation blockchains’ scalability and latency problems were recognized.

Meanwhile, a corner of the database research community has been quietly investigating a new approach to databases known as [deterministic databases](https://cacm.acm.org/magazines/2018/9/230601-an-overview-of-deterministic-database-systems/fulltext). To understand how this technology can be a game changer for business data sharing, let’s first step back and talk about change logs, also known as ledgers, and explore their winning potential.


## The new alternative to conventional databases

All databases ledger (keep a copy of) updates to the data — it’s the algorithmic foundation that makes transactions possible, offers fault tolerance, and, in distributed databases, allows copies of the data to be kept up to date across different public cloud regions or multi-geographic on-premises deployments. Most databases create their change logs at the same time that they apply updates. This approach, while traditional, introduces a certain amount of non-determinism. Low-level details, like thread scheduling, can alter the order in which operations are accepted and performed. Other copies of the same database, presented with the same inputs, might arrive at a different answer, albeit an answer that still meets all the transactional requirements.

Recently, deterministic databases have emerged as an alternative to conventional databases. In a deterministic system, changes are organized up front, _then_ applied. This approach offers some [important advantages](https://www.cs.umd.edu/~abadi/papers/abadi-cacm2018.pdf). For example, geographically distributed replicas can be given the same input and be guaranteed to produce the same result, making data replication (and replay) easier to implement.

These techniques can be used to create a conventional SQL or NoSQL database. Companies like [FaunaDB](https://fauna.com/) are [doing exactly that](https://fauna.com/blog/consistency-without-clocks-faunadb-transaction-protocol), leveraging the advantages of deterministic database design to improve the efficiency, cost structure and performance of a conventional distributed cloud database.


### Blockchains can serve as deterministic databases

Now, let’s take a look at blockchains. Though invented in parallel, blockchains have converged to possess some strikingly similar characteristics. Like deterministic databases, [blockchains](https://vendia.com/blockchain) are distributed systems that organize updates into a shared, totally ordered change log. The mechanisms by which they do so vary widely: Proof of work for Ethereum and Bitcoin, proof of stake for many other cryptocurrencies, “orderer nodes” for private/permissioned chains like Hyperledger Fabric, and so on. 

However, if we ignore the details of _how_ blocks are proposed and, instead, look at how those blocks get into the chain, the connection to deterministic databases becomes clear. Just as each geo-distributed replica in a deterministic database applies the change log to create its local copy of the data, so each node in a blockchain adds new blocks to create its individual copy of the shared “world state” and local ledger. 


    Blockchain is really just a special kind of deterministic database.

Both of these systems need an ordered log that allows each party to produce a local replica of data coming from multiple clients that is guaranteed to be identical to all other copies. 

Deterministic databases do this _inside_ a distributed database while blockchain algorithms apply it _across_ a community of individual databases. Similar design pressures (totally ordered, up-front consistency guarantees) led to similar design choices at the level of the log itself, even though its construction took very different paths. To be sure, there are still some striking differences — the absence of a query language and data model in most blockchains makes them feel rather unlike a conventional database — but the fundamental data sharing model would feel familiar to a deterministic database researcher.

Speaking of research, let’s return to the reason database researchers came up with the idea of deterministic databases in the first place: _Performance_. [Research on deterministic databases](https://cs.yale.edu/homes/thomson/publications/calvin-sigmod12.pdf) claims a number of advantages over conventional databases, including higher throughput, simpler fault tolerance architectures and so forth. But blockchains have suffered from strikingly low throughput, limited fault tolerance, data and consistency model limitations and a host of other limitations that made their first-generation attempts woefully inadequate for enterprise infrastructure applications.

Is it possible to mine (pun intended) the deterministic database literature to design a blockchain that offers the performance, consistency models and rich data schema support of a deterministic database? 

Turns out the answer is, _Yes._


### From research to reality: Next-gen blockchain

Deterministic databases were devised by researchers who had to recreate all the capabilities of traditional SQL and NoSQL databases: 



* Strong consistency models
* Support for strongly-typed user data models, cloud-ready replication
* SQL query compatibility and more

…All of which are missing in first-generation blockchains.

Just getting these capabilities back in a blockchain would be a huge step forward in making blockchains look and feel like a conventional database to an enterprise application developer.

Next-gen blockchains, or what we also call business blockchains and [enterprise blockchains](https://www.vendia.com/blog/13-features-you-need-to-evaluate-an-enterprise-blockchain-platform), exploit deterministic database approaches to give their customers a familiar look and feel, allowing database tables to be defined using schema-based data models and offering cloud integration and API-based access — without exposing any of the implementation details of an underlying blockchain. Unlike a “normal” blockchain that offers only a typeless “key/value” store, these newer blockchains feel like setting up a traditional SQS or NoSQL database, but still operate across different parties, regions, clouds, and applications.

Another important insight offered by deterministic database research is their handling of sharding, the ability to achieve higher levels of transaction processing than a single machine is capable of. Most blockchains are limited to the processing they can achieve with a “one-box deployment.” In other words, once you run out of CPU, memory or network capacity on a single machine, it’s game over. Even if there are another 1,000 machines in the same network, the network as a whole only runs at the speed of the slowest machines. Attempts by blockchains to shard this data (having different subsets of the network work on subsets of the total ledger) result in a host of complications, such as related transactions being processed on different shards, leading to inconsistent results. Other approaches attempted by the blockchain community require applications to perform client-side sharding, a difficult and error-prone burden on an application that may not understand how its data gets integrated with other application changes on the backend.


#### High-performance alternatives to blockchain sharding

If blockchain sharding attempts feel naive and problematic, can we learn something useful from the more mature database research community, especially the geo-replicated deterministic database research?

Deterministic database [research on geo-replicated data](http://www.cs.umd.edu/~abadi/papers/1154-Abadi.pdf) provides a high-performance alternative approach to naive sharding approaches, one where related transactions are ordered by their “owning” node. “Own” here can mean different things — in the original research paper, the owner was chosen on the basis of geo-spatial access distribution patterns to minimize latency. Importantly, this approach offers classic transactional guarantees — critical if the system as a whole is to behave like a traditional database — while still ensuring that all nodes see all updates, in the appropriate order. 

Blending the deterministic database geo-replication approach with a blockchain’s “mutual trustlessness” consensus algorithm adds some complexity, but provides the best of both worlds: Multi-party decentralization combined with high throughput and low latency read and write performance. As researchers make further progress in deterministic databases, the blockchain community can continue to harvest these findings to apply them in the context of decentralized systems.


## Real-world applications: Deterministic databases in the wild

Combining mutually trustless blockchain requirements with deterministic database research, in which all the parts of the system are owned and operated by a single entity and thus implicitly trust one another, isn’t trivial, but it can lead to surprising and commercially important outcomes.

Many of the most challenging problems facing businesses today, from financial transactions to supply chain workflows, ultimately require different parties to establish [a single source of truth](https://www.vendia.com/blog/real-time-everything) regarding their shared products and workflows. Creating an easy-to-use, enterprise-grade, multi-party database that can operate in a decentralized and mutually trustless setting is critical to enabling these solutions.

Commercial solutions must simultaneously address two sets of requirements:



1. Conventional database features like strong consistency, data modeling, query languages, etc. 
2. Enterprise-level scalability and performance similar to the existing state-of-the-art cloud databases

Applying deterministic database technologies to these [blockchain](https://www.vendia.net/blockchain) applications enables commercial outcomes that can address myriad use cases, giving companies the flexibility to build business networks without the historical challenges of living with inconsistent, incomplete or out-of-date information from their partners.


## Take a closer look at enterprise blockchain

Vendia helps you [build cross-cloud](https://www.vendia.com/blog/why-blockchains-databases-api-cannot-standalone-as-it-solutions), multi-account, multi-region, multi-party data and code sharing applications powered by a serverless distributed ledger technology. Every real-time data app you build with Vendia is highly scalable, fault tolerant by default, and possesses an ordered, replicated data model in the form of a distributed ledger. The platform includes serverless ledger and lineage capabilities to ensure data accuracy, provenance, traceability, and safety – all without the complexity of DIY blockchain implementations.

**[Learn more](https://www.vendia.com/product) about our technology, and [contact us](https://meetings.hubspot.com/tim-zonca/contact-an-expert) to ask your questions or book a demo.**

