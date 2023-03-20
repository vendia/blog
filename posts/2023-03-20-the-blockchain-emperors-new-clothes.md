---
draft: true
slug: data-protection-approaches
title: "Data protection approaches: How to balance need to know vs. need to share"
description: Data protection approaches to make sure your next blockchain
  investment doesn't leave you exposed
date: 2023-03-20
authors:
  - James Gimourginas
categories:
  - product
relatedPosts:
  - 2022-04-01-private-vs-public-blockchains
  - 2022-06-24-increase-transparency-in-real-estate-transactions-with-blockchain
  - 2022-02-18-13-features-you-need-to-evaluate-an-enterprise-blockchain-platform
thumbnail: https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1678816231/Website/Iso/Group_2_f8kpko.png
seo:
  noindex: false
  description: Data protection approaches to make sure your next blockchain
    investment doesn't leave you exposed
  title: How to avoid risk exposures with business blockchain initiatives
  keywords: business blockchain approaches to avoid risk
createdBy: alexa-vendia
createdAt: 2023-03-20T19:48:43.907Z
updatedBy: alexa-vendia
updatedAt: 2023-03-20T20:52:45.430Z
id: caf9afbf-5476-4030-b53d-b4c454c58f86
---

In partner data sharing, it's imperative to balance the "need to know'' and the "need to share.” But it’s far less simple to manage the dynamic between those needs. Especially when it comes to partner data sharing across clouds, businesses, and industries.

- Need to know data kept in complete isolation is low in utility (since no one can use it). 
- Need to share data ubiquitously dispersed is relatively low in value (since everyone has access to it), although there’s a special exception for public legal records (like the title to a car or deed to a home).

For most businesses, data lives somewhere in between need to know and need to share. It must be immediately and securely accessible to those who have permission to utilize it, and it must be strongly protected from those who don't — which is much more easily said [than done](https://www.bbc.com/news/world-australia-63056838). 

But with the average cost of a data breach climbing to [over $9M](https://www.ibm.com/reports/data-breach), and the cost of a breach is even higher in industries handling the most sensitive data, (we see you Healthcare), where do these competing interests find common ground?

###Databases converge with DLT

One place is in the [convergence](https://thenewstack.io/are-blockchains-databases/) between databases and distributed ledger technology (DLT). More database products are being released with [ledger-like properties](https://learn.microsoft.com/en-us/sql/relational-databases/security/ledger/ledger-overview?view=sql-server-ver16) and more blockchains are providing [database-like features](https://www.vendia.com/docs/share/vendia-transaction). Given that companies already struggle to secure their data and minimize the impact of data breaches from their centralized systems, business leaders must now find a way to secure data in a more decentralized world — a world that more accurately reflects their business relationships and data-centric interactions. 

By adopting private permissioned blockchain technology, like [Vendia Share](https://www.vendia.com/), companies can bridge the "need to know" and "need to share" divide with confidence in both their data sharing and their data protection.

<p></p>

## Why you want private permissioned blockchain data protection

Private permissioned blockchains offer data protections that public permissionless blockchains do not. Businesses want to increase their data protection while also sharing more data with more partners more easily. Fortunately, the same features that address [real-time data sharing challenges](https://thenewstack.io/addressing-the-challenges-of-real-time-data-sharing/) can be built to do so without compromising data protection. Private permissioned blockchains provide a new way to balance “need to know” and “need to share.”

A private permissioned approach allows businesses both large and small to [start extracting commercial value](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/blockchain-beyond-the-hype-what-is-the-strategic-business-value) from blockchain implementations. This means that companies can gain most of the benefits of public permissionless blockchain without compromising most of the security mechanisms available to cloud APIs and databases. And that means:

- Sharing consistent, real-time data with partners should be simple. And doing so shouldn't compromise the confidentiality or integrity of the data.
- Maintaining a decentralized ledger with auditable history should be simple. And doing so shouldn't require storing all sensitive data outside of that solution.
- Securing a blockchain, from its interfaces to its integration points to its ledger to its management capability, and ensuring relevant compliance regimes are upheld should be top of mind for all businesses. And doing so from scratch is outside the realm of most organizations' interests and capabilities.
<p></p>
## 3 key features where private permissioned blockchains differ from public permissionless blockchains

Both public and private blockchains have their place in modern IT ecosystems. But compared to public permissionless blockchain, private permissioned chains offer the most sophisticated data privacy, data protection, and data governance for securely sharing data among business partners. These benefits allow companies to move past a false choice between "need to know" and "need to share."

### Feature #1 – Control plane access control

Vendia Share differentiates its control plane (which provides management of users and blockchains) from the data plane of each blockchain (which provides access to the data within a blockchain). Vendia provides a role-based access control (RBAC) mechanism to allow authorized users to [manage the permissions](https://www.vendia.com/docs/share/rbac) of others. Recently, Vendia Share added a helpful workflow with pre-built templates to make RBAC policy management more accessible and less error-prone (see Figure 1).

*Figure 1 – Control plane access control management through the Vendia Share console*

<img src="https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1679342826/Blog%20images/Emperor's%20New%20Clothes/Figure2_tmsbcr.png"  class="image-float-center" width="600" />

Whether done through the console or [programmatically](https://www.vendia.com/docs/share/cli/commands/auth#auth-role-set), setting an appropriate control plane policy for users within an organization is imperative. By limiting access, you empower a select, trusted set of administrators with control plane access to establish a reasonable [separation of concerns](https://csrc.nist.gov/glossary/term/separation_of_concerns#:~:text=Definition(s)%3A,are%20independent%20of%20one%20another.).

##### Comparison with public permissionless blockchains

Unlike public permissionless blockchains, private permissioned blockchains are inherently able to deal with permissions, including at the control plane.

- **Permissions limit the potential attack surface.** Unlike public permissionless blockchains, not just anyone can create a new node.
- **Permissions provide more granular control for those who do have access.** Unlike public permissionless blockchains, just because someone has *access, _it does not mean they have _full access*.

Control plan access control mechanisms allow organizations to balance "need to know" and "need to share" in a way that just isn't possible with public permissionless blockchains. For many enterprise use cases, control plane access control is a critical feature that enables businesses to form secure, trusted blockchain networks with their partners.

### Feature #2 – Data plane access control

Vendia provides several layers of data plane access control to protect the confidentiality and integrity of data (see Figure 2).

At the outermost layer, Vendia Share [provides protection](https://www.vendia.com/docs/share/financial-services-protections) from requests originating from countries where States Office of Foreign Assets Control (OFAC) sanctions may apply. This is a common request from financial services customers who require such protections from any Software-as-a-Service (SaaS) offering they adopt. As with control plane access control, limiting the potential attack surface is a helpful first step.

At the data plane layer, Vendia provides coarse-grained access control to the GraphQL API provided by each node. Using either an [API Key](https://www.vendia.com/docs/share/node-authentication#api-keys) provided by Vendia or a [JSON Web Token](https://www.vendia.com/docs/share/node-authentication#jwt-authentication) (JWT) provided by an Identity Provider (IdP) of your choice, you can protect access to the GraphQL operations that provide read and write access to data.

At the record and field layer, Vendia provides [fine-grained access control](https://www.vendia.com/docs/share/fine-grained-data-permissions). Using an Access Control List (ACL) mechanism, a record can be stored to a node with [specific restrictions](https://github.com/vendia/examples/tree/main/features/share/access-controls/data-access-controls) in place to limit replication to a subset of other nodes. This is one approach to protect confidentiality of sensitive data that not all parties should see.

*Figure 2 – Differing views of the same record, thanks to fine-grained access controls*

<img src="https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1679342827/Blog%20images/Emperor's%20New%20Clothes/Figure3-animated_iouqsk.gif"  class="image-float-center" width="600" />

<p></p>
##### Comparison with public permissionless blockchains

APIs to a private permissioned blockchain should be secured [just like any other API](https://owasp.org/www-project-api-security/). Without proper API-level authentication and authorization, the private and permissioned qualities (i.e., a limited and identifiable network) fall apart. However, with the right authentication and authorization in place, there are some strong benefits:

- **Confidentiality** can be preserved through a combination of controls at the data plane and record level
- **Integrity** can be preserved through authentication (i.e., knowing the principal) and authorization (i.e., limiting access to only known and permitted parties)

Most importantly, unlike public permissionless blockchains, private permissioned blockchains are frequently used to store sensitive data on-chain, just like in a database. Whether that's personal identifiable information (PII), payment card industry (PCI), public health information (PHI), the combination of identity, authorization policy, and good security practices (like encryption of data in transit and at rest) provide a foundation that allow those who "need to share" to do so only with those who "need to know."  

It's no wonder the World Economic Forum (WEF) believes that only private permissioned blockchains have the [potential]((https://widgets.weforum.org/blockchain-toolkit/personal-data-handling/index.html#rapid-initial-analysis-for-gdpr-compliance)) to be GDPR compliant.

### Feature #3 – Blockchain built on a public cloud foundation

Vendia's SaaS approach is built on the shoulders of giants: public cloud service providers, including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Specifically, Vendia Share offers [single-tenanted accounts](https://www.vendia.com/blog/stamti) using multi-tenanted infrastructure. That means customers get account-level isolation with all the security benefits of public cloud, including scale, resilience, encryption, and immutability.

##### Scale

Vendia [uses serverless](https://www.vendia.com/blog/how-serverless-cloud-enable-scalable-blockchains) services from public cloud service providers, in part to achieve the just-in-time scale required for certain customer use cases. The ability to scale horizontally — whether that's for API access, storage, or consensus — is a public cloud capability that we leverage heavily. It ensures those with "need to know" can grow organically without any technology limitations.

##### Resilience

Vendia also uses serverless services from public cloud service providers to increase resilience. Whether that's AWS S3's [durability and availability](https://aws.amazon.com/s3/faqs/) or AWS Lambda's ability to be [reserved concurrency and multi-AZ capabilities](https://docs.aws.amazon.com/lambda/latest/dg/security-resilience.html), data that's available and resilient satisfies the "need to share" reliability and consistency.

##### Encryption

Another public cloud service provider benefit is the ability to apply leading encryption mechanisms to data at rest and in transit. For example, S3's recent default to [server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html) is just one example of security being built-in to the services powering Vendia Share. As those mechanisms grow in robustness and sophistication, Vendia customers get an immediate data protection benefit.

##### Immutability

Immutability is most commonly associated with the distributed ledger itself. That's certainly the case with Vendia Share's distributed ledger. Immutability also plays an important role in Vendia [smart contracts](https://www.vendia.com/docs/share/smart-contracts), which incorporate the immutability of [versioned AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html) functions into the immutability of the smart contract.

##### Comparison with Public Permissionless Blockchains

Public permissionless blockchains are unmatched in their scale. Their globally distributed topology provides a robust network that continues to grow.

While private permissioned blockchains can't match that level of ubiquity, they can, like Vendia, choose to leverage public cloud services to provide world-class scale, resilience, encryption, and immutability across the [leading](https://aws.amazon.com/blogs/aws/aws-named-as-a-leader-in-the-2022-gartner-cloud-infrastructure-platform-services-cips-magic-quadrant-for-the-12th-consecutive-year/) clouds in the world. 

One additional note: Private permissioned blockchains that leave scale, resilience, encryption and immutability to its deployers are in a much less favorable position for secure data protection. It's one of several reasons first-generation enterprise blockchains are [doomed](https://thenewstack.io/enterprise-blockchain-is-doomed/).

<p></p>
## Assessing security and data protection risks

The polarity between "need to know" and "need to share" is ultimately about tradeoffs, so it's important to define a few key terms to help assess the data protections that private permissioned blockchains make possible. Understanding the security risks of blockchain, and the available mechanisms to protect against those risks, helps participating organizations to avoid exposing their data or their business to threats.

Before diving deeper, we need a simple but effective way to think about risks. The combination of Confidentiality, Integrity, and Availability, also known as the [CIA Triad](https://www.nccoe.nist.gov/publication/1800-25/VolA/index.html#executive-summary), does just that.

##### Confidentiality

Confidentiality protects data from unauthorized access. This specifically covers "read" access, where only an authorized party can read the data.

##### Integrity

Integrity protects data origin and data content. This specifically covers "write" access, where only a known and authorized party can modify the data.

##### Availability

Availability means a system can respond to requests to read and write data. Resilience of the system itself, the data it stores, and the history of that data are all part of availability.

<p></p>
### Data protection in private permissioned blockchains

Private permissioned blockchains are "private" in that the network is closed to only invited and identified (i.e., authenticated) parties and "permissioned" in that different participants or users can have different levels of access. For businesses used to sharing data with others through APIs, these foundational security requirements will feel quite natural. For example, sensitive business data is not accessible to the world and API authorization is often dependent on the client's identity.

##### Protecting confidentiality

Unlike public permissionless blockchains, private permissioned blockchains can protect the confidentiality of data stored on the blockchain in many ways. 

Vendia Share provides data plane access control mechanisms that allow only authenticated and authorized parties to view data. Further, Vendia allows data providers to apply access controls at the record or field level. Those access controls are applied during consensus, meaning unauthorized access to data is impossible because the data simply doesn't exist in an unauthorized participant's copy of the ledger. 

In addition, Vendia's use of leading cloud services, and their inherent encryption at rest and in transit capabilities, further protects confidentiality. By leveraging an encryption approach that wraps the storage of the ledger itself, encryption schemes can evolve over time. This is in stark contrast to concerns about placing encrypted data on a public permissionless blockchains because of potential quantum computing advances that will be [able to break](https://www.science.org/content/article/worried-quantum-computers-will-supercharge-hacking-white-house-calls-encryption-shift) common encryption schemes.

Of course, for additional protection, participants can leverage [data masking](https://en.wikipedia.org/wiki/Data_masking) techniques of their own for data written to Vendia Share. In the future, Vendia Share, itself, will support more of these mechanisms as part of its built-in data masking capabilities. In the meantime, unlike in public permissionless blockchains, the use of ACLs allows sensitive data to reside in the blockchain — just as it would in a properly secured database.

##### Protecting integrity

Private permissioned blockchains can protect content integrity of data stored on the blockchain, just like public permissionless blockchains. But they can also protect origin integrity, while public permissionless cannot. 

Vendia Share creates an immutable ledger to store all transactions with the blockchain. Any transaction can be traced back to the exact API payload sent to Vendia Share, demonstrating strong content integrity for all data stored. Unlike most databases, Vendia Share provides a full accounting of a records change history, which comes directly from the immutable ledger.

Vendia Share also provides data plane access control mechanisms that allow only authenticated and authorized parties to modify data. This is one way that origin integrity is maintained. Not only is the exact API payload sent to Vendia Share captured, but the source of the transaction is captured as well. Further, only those authorized, through record-level ACLs, can modify data. This is helpful in preventing inadvertent modification of data by other participants who should have “read” (but not “write”) access.

##### Protecting availability

Private permissioned blockchains can leverage public cloud service providers to deliver world-class scale, resilience, reliability, and availability of the data they store.

Vendia Share, like all private permissioned chains, limits availability to only authenticated and authorized participants in order to reduce the potential attack surface available for data breaches. While this does limit scale to a degree, that impact is balanced by a global footprint that also spans clouds and regions. In addition, by leveraging those same cloud services, Vendia Share is able to get [orders of magnitude](https://arxiv.org/pdf/2110.09221v1.pdf) better ingestion and consensus throughput than public permissionless blockchains. This approach drives availability as participants are aware of a new transaction within seconds, meaning they can work from a consistent and shared source of truth at all times.

<p></p>
## Transition your data to a private permissioned blockchain

In an environment with increasingly frequent and increasingly impactful data breaches, there's an immediate reaction to favor the "need to know" and, as a result, to decrease information sharing (say among business partners). There's also a business reality that companies that share data externally [drive significantly more business value](https://www.gartner.com/smarterwithgartner/data-sharing-is-a-business-necessity-to-accelerate-digital-business), so the "need to share" can't be discarded. By taking the best of [blockchain, APIs, and cloud-scale databases](https://www.vendia.com/blog/venn-diagramming-vendia-share), and the proven security mechanisms available for all of the above, the Vendia Share platform is well-positioned to keep your organization in a position of strength while limiting risk. 

Vendia's technology addresses both the "need to know" and “need to share”, thus increasing security and compliance _while also increasing_ the ease of data sharing among partners. Our platform on a private permissioned blockchain can act as a secure bridge between corporate IT and public permissionless blockchains, simplifying multi-party interactions while also keeping sensitive data well protected.

*Figure 3 – Private permissionless blockchains are a bridge between central IT and public permissionless blockchains*
<img src="https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1679342827/Blog%20images/Emperor's%20New%20Clothes/Figure4_ceurdi.png" alt="alt_text" width="600" />

<p></p>
### Realize the promise of blockchain without exposing your data (or your partners’ data) using Vendia Share

With a full appreciation for the need to know and the need to share, consider moving data you already share with partners, even if it's sensitive, to a private permissioned blockchain like Vendia Share. With protections in place to retain confidentiality, integrity, and availability, your company can ensure that the data you and your partners rely on is complete, correct, current, compliant, and auditable.  WIth both, you can realize the promise of blockchain without exposing your data or your partners to data breaches and other potential pitfalls.

**To learn more, check out Vendia's open-source GitHub [examples repository](https://github.com/vendia/examples) or set up time with us to explore a targeted [proof of concept](https://www.vendia.com/poc) to see the Vendia Share platform in action.**