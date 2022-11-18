---
draft: false
title: "Are Blockchains Databases?"
description: 'With some databases now supporting versioning and checksums and blockchains storing more types of data, are these technologies on a path to merge?'
date: '2022-03-17'
authors:
  - Tim Wagner
---
_Originally published at [The New Stack](https://thenewstack.io/are-blockchains-databases/)_ 

At their heart, modern, cloud-based databases are about making data durable — typically by storing replicas of that data on different physical devices. Blockchains like [Hyperledger Fabric](https://www.hyperledger.org/use/fabric) are another way to replicate and store data, sometimes even including a conventional database as part of their architecture.

So, what's the fundamental difference between these technologies? Will they remain forever independent, driven by radically different requirements? Or are they on a collision course, with the ultimate future expression of data storage being something that possesses elements of both?

In this article we take a look at where these technologies have come from and where they're headed.

## Cousins in the World of Data

There are certainly ways in which databases and blockchains are similar: Assuming we include materialized world state in our definition of a blockchain, both technologies support reading and writing data values. Both offer some flavor of "transactions" and ordering; possibly with a little work, an application can arrange for one update to occur before or after another, and can know when an update is complete. And (squinting intentionally a little bit here), both are durable stores after a fashion. Databases are designed to survive machine crashes without loss of data, and — if you have enough nodes in availability-decorrelated locations — a blockchain can survive even permanent removal or loss of any individual replica. So, pretty similar, right?

## Blockchain Capabilities

When we peer more closely, however, database and blockchain technologies start to feel different. For example, blockchains have some properties not normally found in run-of-the-mill databases. The inclusion of a ledger in the user-visible capabilities means that they can support versioning (access to historical information) and lineage (you can determine when data was changed, and by whom). Blockchains also typically offer some flavor of immutability and "tamperproofing" — it's possible to know whether anything that was present before has gone missing or has been corrupted. Some databases offer automatic backups, but that's not quite the same thing as full history or integrity validation. Public blockchains also usually have a global notion of end user identity that's wired directly into the transaction model and semantics — something that's not a conventional feature of databases, possibly apart from some built-in logging support on the side.

Blockchains have another defining characteristic: _decentralization_. Conventional databases, even in their modern cloud-based incarnations, are designed to be owned, secured and managed by a single entity. In fact, you could say that keeping control of the data isolated to its owner is a defining characteristic of a modern cloud database, where data security, isolation and governance are considered key design tenets.

Blockchains, by contrast, are _decentralized_ ledgers — distributed not among machines in a cloud provider's data center for durability, but across multiple parties. These parties may be in a business relationship, but they generally don't "trust" one another in the IT sense: each of them typically has their own copy of the data, their own hardware and software systems, their own security teams and protocols, and so on.

If you think about a credit card company like Visa or Mastercard, an issuing bank such as Wells Fargo, and a vendor such as Amazon.com, it's easy to see both why companies need to share data (e.g., a user buys a shirt on Amazon using a credit card) _and_ why having completely independent IT systems is a practical requirement.

With decentralization comes a variety of capabilities that we tend to associate with blockchains: consistent, immutable, totally ordered, and non-repudiable data replication that can span companies, clouds, regions, accounts, and tech stacks. In simpler words: _A single source of truth, maintained automatically among all parties regardless of where they reside_. That's an incredibly powerful mechanism, one that doesn't normally show up in your typical database provider's list of features.

## Database Capabilities

Databases also have a set of abilities that most blockchains don't share. (To keep our comparisons somewhat equivalent, we'll limit our definition of "database" here to broadly adopted cloud-hosted SQL and NoSQL databases, such as Google Spanner, Azure CosmosDB, and AWS's Amazon Aurora and Amazon DynamoDB.) These services have a number of characteristics that are fundamental to their usage in building scalable, enterprise-grade applications that can store and operate on real-time data in mission-critical business applications:

* **Query languages (including joins and transactions)** - One of the most obvious differences between databases and blockchains is that the data in a database can be atomically grouped and accessed in powerful ways; most commonly using SQL. "Joins" — or more broadly speaking, the ability of the database itself to search and group the data it holds — is a powerful feature not readily available on blockchains, where each individual item typically must be retrieved in isolation and then processed in application logic to perform the equivalent of a join, union, nested query, or any other non-trivial access pattern. Similarly, ACID (atomicity, consistency, isolation, durability) transactions that allow users to atomically group updates together at the application level are not necessarily available in blockchains, but are a given in modern cloud databases.

* **Highly available** - While a blockchain creates "chain-level" durable storage if there are many regionally and cloud-segregated parties using it, each individual node is typically running on a single machine, and thus not resilient to server failure. A single server crash causes a 100% outage for that node. By contrast, a table in a service like DynamoDB or CosmosDB is highly resilient to individual machine and even zonal outages. As a result, databases distinguish themselves from blockchains by offering 99.99% or better availability with no effort or deployment complexity on the part of their owner.

* **High throughput and low latency** - Public chains like Ethereum that rely on proof of work can take many minutes to reach "finality" (the point at which data is effectively immutable for all time forward with no chance of being changed). Even private, permissioned blockchains such as Hyperledger Fabric can take several seconds to reach finality. [Ethereum's throughput is around 15 transactions per second (TPS) for all users in aggregate](https://blog.coinbase.com/scaling-ethereum-crypto-for-a-billion-users-715ce15afc0b). Hyperledger Fabric's throughput depends on its deployment details, but [it's difficult to achieve better than a few hundred transactions per second of sustained performance without errors](https://arxiv.org/abs/2110.09221). By contrast, [Amazon's DynamoDB can achieve 89 million TPS with single digit millisecond latency](https://aws.amazon.com/blogs/aws/prime-day-2021-two-chart-topping-days/), and that's just for one of their millions of customers — total aggregate capacity, while not published by AWS, is undoubtedly much higher.

* **Low per-transaction cost** - Thanks to highly multi-tenanted cloud-based implementations, databases like the ones we're discussing here are extremely cost effective on a per transaction basis. During the month of January 2022, the lowest daily average Ethereum single transaction cost was \$25.83 (the highest was approximately twice that amount), while an on-demand database write to Amazon's DynamoDB in the us-east-1 region costs \$0.00000125, making Ethereum a minimum of 20,664,000 times more expensive than a conventional database.

* **SaaS / Zero ops / Built-in scaling** - Deploying a blockchain at production scale at a company like Coinbase, that requires production-grade blockchain infrastructure, requires a large, knowledgeable team, non-trivial infrastructure spend to manually manage blockchain storage and create localized redundancy with backups, and complex, ongoing monitoring of both the infrastructure and the blockchain software that runs on it. By contrast, a database like Google Spanner or Azure CosmosDB is "hands off" — the developer never sees the underlying servers, operating systems, database software deployments, machine-level scaling operations, etc. Therefore, the underlying storage automatically expands no matter how large a database table becomes. For a company without senior engineers to spare (or the big bucks to pay them), that's a huge difference in cost of ownership — especially when coupled to the lower per-transaction costs of databases versus blockchains, and the need to scale blockchain deployments to peak capacity 24x7x365.

Table 1 summarizes the relationship between databases and blockchains.

![Table 1](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..71095088..158864064-4df1f9da-a70a-4ab9-964b-0e90114d4dd7.png)
Table 1: A high-level feature comparison of databases and first-generation blockchains.
[1] Database companies outside of cloud service providers may offer multi-cloud capabilities, but none with the reach of a self-deployed blockchain.

## Growing Together?

Clearly blockchains and databases have emerged from sufficiently different origins, both in terms of use case requirements and implementation technology, to look fairly different at the moment. But are these differences destined to remain? Let's look at some interesting trend lines that might predict future states.

While not yet embracing multi-party decentralization, cloud databases are gaining some capabilities that take them a step closer to blockchain-style capabilities:

* Google Spanner enables a single owner (account) to have a table that spans multiple geographic regions, where each region can make updates seen by all the others.

* Snowflake allows a table owner on one cloud to share that table with a reader from another company on a different cloud.

* [Amazon QLDB](https://aws.amazon.com/qldb/) and [Oracle Blockchain Tables](https://docs.oracle.com/en/database/oracle/oracle-database/21/nfcon/details-oracle-blockchain-table-282449857.html) support ledgering — an immutable and ordered log of updates that can help establish the lineage of a change and provide for versioned queries that can retrieve data as it existed in the past, not just in the present.

Similarly, blockchains are starting to take on some of the trappings of databases:

* Companies like [Infura](https://www.infura.io) and [Alchemy](https://www.alchemy.com/) now offer "Blockchain as a Service," attempting to create higher availability, fully managed ("serverless") solutions that are more like traditional cloud services and less like individually self-deployed, error-prone blockchain nodes. (Of course, purists might complain that having a centralized agency providing blockchain capability defeats some of its decentralized nature.)

* Protocols like [IPFS](https://ipfs.io/) are attempting to expand on the narrow range of datatypes supported by blockchains, including operating as a "file system for the web" that can also treat large, unstructured or semistructured data as being "on chain."

* A multitude of researchers, practitioners and businesses are looking at ways to simulate lower transaction costs through batching and other so-called "L2" (layer 2) solutions. As a concrete example, [Coinbase](https://www.coinbase.com) addresses the throughput limitations and high per-transaction cost of blockchains like Ethereum by batching purchases from many users together into a single composite transaction.

* Many approaches exist to convert well-known blockchain ledger formats, [such as Ethereum](https://medium.com/validitylabs/how-to-interact-with-the-ethereum-blockchain-and-create-a-database-with-python-and-sql-3dcbd579b3c0), into more traditional databases; effectively enabling query languages such as SQL to be used on them, even though the fundamental Ethereum protocol doesn't support such functionality directly.

* Companies like [Vendia](https://www.vendia.com) (of which I am the co-founder and CEO) are playing an active research role in combining classic database capabilities, such as dirty read avoidance and ACID transactions, with blockchain and distributed ledger technologies.

In short, _we're going to see database and blockchain technologies continue to grow towards one another_. On the blockchain side, the reasons are obvious: database feature sets and the operational and cost expectations of businesses for these use cases have emerged over many decades for good reason, and those reasons aren't going away. Commercial blockchain solutions will have to meet those business expectations, or die trying.

The pressure on databases to adopt blockchain capabilities are a little more subtle. A bit of this is healthy competition — what customer doesn't want to be able to time travel through older versions of data, sleep better knowing their data is tamperproof, or eliminate the overhead of application logs by integrating lineage directly into the data model itself? But beyond that, database users are also operating in increasingly regulated environments: GDPR and CCPA/Prop 24 have made it necessary to control PII not just within a company, but across companies. Financial and other regulations require tracking anything that involves money or credit more carefully than ever before, including being able to audit what was changed, when, and by whom. And government agencies, increasingly focused on fairness and transparency, are unlikely to be happy with data storage solutions that readily "forget" old copies of data or that can't be shared easily with auditors, other agencies, or consumers. In that environment — which affects businesses of all sizes, shapes and sectors — the feature set of blockchains no longer feels novel or unique; it starts to read like the "must have" requirements of a typical enterprise application.

## Seeing the Future, Today

At Vendia, we believe that the future isn't about databases versus blockchains, but rather that they will exist as a single, unified data abstraction — one that gets "green checkmarks" for all the features listed in Table 1 simultaneously.

The reasons are simple. All companies need to share data, both internally and externally, and they can't force all the producers and consumers of that data to agree on a single, centralized IT stack. At the same time, the applications that work with that data need all their conventional expectations for databases to be met: from highly available uptime with a stringent SLA, to fully managed ("serverless") support, to high speed and low cost transactions. Vendia was created with the belief that these two technologies aren't mutually exclusive, but rather two sides of the same coin — and that combining them offers the best enterprise data management experience for the next generation of applications.

## Going Further

Looking to learn more about blockchains or their integration with database capabilities for IT use cases? The [Vendia blog](https://www.vendia.com/blog) has a number of articles, including how these features surface in [modern applications](https://www.vendia.com/blog/lean-app) and get exposed through [data-aware APIs](http://vendia.com/blog/smart-api). If you have a business need not being met by your existing database or blockchain provider you can visit [www.vendia.com](http://www.vendia.com) to learn more about supported use cases or [contact the team directly](https://www.vendia.com/contact-us) to dive deeper.
