---
title: "Greenchain Part 1: Current Blockchains' Big Carbon Footprint"
description: 'An examination on why current blockchain technologies have large carbon footprints.'
date: '2022-05-17'
categories:
  - blockchain
  - concepts
  - greenchain
authors:
  - Tim Wagner
---

Part 1 of our 2 part series on [Green Blockchain](https://www.vendia.net/blog/green-blockchain-intro).

# The Table Stakes and Background

Carbon emissions, as a key driver of environmental change, are coming increasingly under scrutiny by government regulators and in the court of investor opinion. Recent [moves by the Biden administration to limit greenhouse gasses](https://www.whitehouse.gov/briefing-room/statements-releases/2021/04/22/fact-sheet-president-biden-sets-2030-greenhouse-gas-pollution-reduction-target-aimed-at-creating-good-paying-union-jobs-and-securing-u-s-leadership-on-clean-energy-technologies/) and by the [SEC to force all public companies to disclose even low levels of carbon footprint impact](https://www.washingtonpost.com/business/2022/03/15/sec-climate-emissions-rule/) have garnered significant media attention – reporting and  compliance trends that are only likely to accelerate over time as the effects of climate change become more visible and pronounced.

The two most popular public blockchains, [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin) and [Ethereum](https://en.wikipedia.org/wiki/Ethereum), employ a [Proof-of-Work algorithm](https://en.wikipedia.org/wiki/Proof_of_work) that [consumes vast amounts of processing power](https://www.investopedia.com/tech/whats-environmental-impact-cryptocurrency/), with Bitcoin alone using around 136 Terawatt-hours of electricity per year, more than the Netherlands or Argentina. Not only are these public chains massively inefficient on a per-transaction basis, but their power-hungry algorithms have inevitably led to block construction – known as _mining_ – [migrating to countries where environment laws are weaker and electrical power is produced from dirty sources, such as coal](https://www.nytimes.com/2022/02/25/climate/bitcoin-china-energy-pollution.html). This environmentally destructive footprint is inconsistent with the environmental stance of most US public companies, the US government’s focus on carbon footprint reduction, and in the court of public opinion.


# First-Generation Chains – Promising Tech, Unacceptable Environmental Costs

Signs of climate change routinely make headlines … media attention that is increasingly shared with government and private industry attempts to control greenhouse gas emissions. Steps by the current US administration to reduce carbon footprints and their resulting environmental damage include a variety of programs targeting supply chains, power production, and – most recently – SEC reporting requirements for public companies. While lowering greenhouse emissions and improving IT efficiency has been on the minds of CIOs for some time, **this increased transparency and accountability is just the beginning of a push for compliance that will eventually rival SOC and PCI in its impact on R&D, business operations, and investor reporting**. Companies, especially larger enterprises, need to begin planning _now_ for the inevitable impact of exposing their IT portfolio choices to the broader public.


### Environmental Cost of Current Blockchains

Blockchain technologies offer companies a promising new platform for building everything from operational data store (ODS) systems that can span public cloud providers to secure partner data sharing that replaces conventional API-based solutions with blockchain-powered “Smart APIs”. 

However, leveraging first generation blockchain technologies comes with unacceptable environmental costs:


#### Ethereum

_Ethereum, originally touted as the “world computer”, shares with Bitcoin an environmentally destructive Proof-of-Work algorithm that is actually designed to consume vast amounts of computing power as a mechanism to disincent fraud._ Regardless of the technical advantages or disadvantages of this particular approach, it has led in practice to block mining shifting to countries with the lowest cost of electricity … inevitably based on dirty production methods including coal mining that exacerbate pollution and carbon footprint. Bitcoin, e.g., already consumes more electricity per year than some entire countries – expanding the use of Ethereum by 10-20 orders of magnitude, as would be required to give it the processing capability of conventional IT operational systems – would have untold impact on the environment using the existing approach. While the Ethereum community has long discussed moving to more efficient mechanisms, progress has been slow and lacking in real-world impact for the last several years.


#### Private Chains

_Private and permissioned chains, a category dominated by Hyperledger Fabric, continue to rely on last-century “scale to peak capacity” approaches._ Unlike modern cloud native systems designed to exploit more efficient container packing and serverless technologies, Hyperledger Fabric, Quorum, and other “private chains” rely on single server deployments that offer no internal scaling mechanisms and that cannot be easily spun up or down, defeating attempts to apply auto-scaling or other capacity management techniques. This leads to an “always on” solution that employs 100% of computing, database, and storage capacity 24x7x365…even if no actual work is being performed.


#### Too Big of  a Carbon Footprint

_As a result, blockchain technology has become associated in public opinion with a high, and largely unacceptable, carbon footprint._ That’s unfortunate, because blockchains can actually improve carbon footprint, when implemented correctly. More modern approaches to blockchain protocols have focused not just on improving cost effectiveness and ease of use but also improving compute and storage efficiency, making it possible to actually decrease carbon emissions relative to conventional IT approaches.


### Proof of Stake instead of Proof of Work

In cryptocurrencies and other “public” blockchains, [Proof of Stake](https://en.wikipedia.org/wiki/Proof_of_stake) has largely replaced Proof of Work in more modern implementations. Although Proof of Stake has occasionally been criticized as another form of centralization, it does avoid the high carbon footprint required by the Sybil attack-resistance Proof-of-Work approach. Public chains also serve a large, worldwide ecosystem, so at least the more popular ones enjoy a reasonable level of utilization.


### Problem with Public Chains


#### Too much energy spent on attack resistance

Public chains still suffer from other forms of inefficiency: even when employing Proof of Stake, they are required to expend a large percentage of their computational resources maintaining Byzantine and Denial-of-Service attack resistance, rather than using those same resources to compute results. They also need to maintain a “least common denominator” approach to data modeling and storage that can serve anyone in their community, and cannot rely on optimizations based on data models or access patterns.


#### Public chains = _too_ much data replication

Worse, public chains are, well, public – by construction, _every node needs to maintain a copy of all information and updates from all sources, regardless of access patterns_. So even experimental or “test” data from a no-longer-existent startup will have to be copied and maintained by every node in the network, in perpetuity. Similarly, if two companies want to use a public chain to communicate but don’t necessarily need (or perhaps even want) others to participate in the exchange, every other node (and all auditing clients listening for updates) still has to be informed, making both data distribution _and_ data storage vastly inefficient over time due to what the intentionally access pattern agnostic approach of public chain design. Techniques designed to ameliorate these problems, such as [sharding](https://www.investopedia.com/terms/s/sharding.asp#:~:text=Sharding%20splits%20a%20blockchain%20company's,when%20compared%20to%20other%20shards.) and [“L2 caches](https://www.pcmag.com/encyclopedia/term/layer-2-blockchain#:~:text=An%20independent%20blockchain%20acting%20in,typically%20taking%20much%20lower%20fees.)” have their own drawbacks, usually including the fact that they are both more centralized in their approaches and that they place the burden of picking a “subcommunity” with which to communicate on every client.


# Private chains are greener

These public chain drawbacks don’t improve over time or with technology; in fact, as the throughput of streamed data and the total volume of stored data increase, they actually get _worse_. For all of these durable structural reasons, **private chains will remain a more efficient and “greener” technology for applications such as partner data sharing, cross-cloud operational data stores, and real-time data fabrics than public chains**.

First generation private chains, such as Hyperledger Fabric and Quorum, rely on known identities for node operators that do not require either Proof of Work or Proof of Stake to safely “mint” a block. However, as data sharing and data storage platforms go, they are woefully less efficient than modern, cloud-based approaches to storing and sharing data, such as Amazon DynamoDB or Azure CosmosDB. Cloud-based solutions such as these make more efficient use of infrastructure and electricity for several reasons:



* They are multi-tenanted, achieving aggregate utilization that is far higher than an individual company or deployment could produce through sharing of resources, without having to compromise burst capacity.
* Their storage capacity is continually expanding, avoiding “scale to peak” concerns that cause over-provisioning of legacy blockchain storage resources.
* They have flexible fleet sizing and work allocation algorithms, enabling them to direct compute power where needed, avoiding “scale to peak” concerns that cause over-provisioning of legacy blockchain compute resources.
* Their algorithms are inherently fault tolerant across containers, servers, and available (fault) zones, avoiding the requirement for applications to create fully redundant deployments. By contrast, _legacy blockchains require multiple nodes to overcome server or availability zone failures, resulting in a much larger computational and storage footprint to achieve the same end result._

Given that public cloud services have solved many of these challenges for _centralized_ data sharing solutions, it’s natural to wonder if they couldn’t be similarly applied to _decentralized_ data sharing solutions, i.e. blockchains. And indeed, second generation blockchain approaches have done just that.

In part 2, out later this week, we will investigate how leveraging the best in cloud technologies reduce a private blockchain's carbon footprint. 
