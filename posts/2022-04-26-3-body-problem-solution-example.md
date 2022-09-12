---
title: 'The three-body problem (NFTs), #4 | Better together: Using the best of centralized IT, private blockchains, and public blockchains'
description: 'While NFTs offer the promise of a global, tamperproof record of ownership but don’t support the business workflows and relationships required for commercialization.'
date: '2022-04-26'
authors:
  - Tim Wagner
---

In the [previous post](https://www.vendia.net/blog/nft-it-business-example) we “built” an imaginary licensing business two ways: First as a centralized (conventional) implementation, then again as an NFT. Neither succeeded in giving us everything we wanted. In this post, we’ll try something different: We’ll use all centralized, private chains, and public chains in concert and see how that goes.

## Quick refresher: How each party can contribute

Conventional (centralized) architectures provide a key set of benefits and suffer from a key set of gaps. NFTs offer the promise of a global, tamperproof record of ownership but don’t support the business workflows and relationships required to commercialize this example. A well-architected “three-body” approach seeks to preserve the advantages of existing (centralized) approaches while adding key functionality through the careful incorporation of private and public chain technologies.

 In this approach, each category plays a key role, chosen to align with its strengths and weaknesses profile as discussed in the previous posts:

- **Centralized IT** continues to manage the B2C consumer (and any partner portal) websites, billing, payment and other back office services, and business analytics, including BI and AI. These are all effectively “private” operations that optimize for low cost and development/operations efficiency rather than partner or public sharing.
- **Private chains** enable bidirectional reselling, including handling all media, CRM, and purchase/use data sharing as well as access controls, versioning, governance and security. They integrate natively with all major clouds and CDN services to offer low-margin storage and distribution of the underlying assets at cloud “line rates” of latency and throughput, keeping the customer experience intact even through multiple transitive hops of ownership. Private chains may also be used over time to integrate with backend SaaS providers, such as billing, or third-party auditors as those firms adopt blockchain technology themselves.
- **Public chains** provide a permanent, public, global record of “who’s licensed to use what” that makes it possible for anyone, including the original artists, to understand how their works are being used and whether a given occurrence of a media asset is appropriate. 
Lower cost aggregate information is stored in a service such as IPFS, mapping public tokens (keys) for users to their list of licensed asset ids, and then hashed into a public chain such as Ethereum to create an immutable, totally ordered, irrefutable custody store. To protect the privacy of purchases, this information is also encrypted, giving each media purchaser the “key” (quite literally) to reveal to a third party their purchase receipt without reference to the licensing company’s internal databases, and enabling the original artists to unlock purchase information (but not purchaser PII) sufficient to verify pass-through revenue accuracy.

![3-body-problem-solution](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..98492452..165371311-f296dd66-32e5-4a77-8de3-1a1c117ade91.png)

Combining centralized, private, and public chain approaches yields the best business outcome, with each contributing its unique benefits.

### Read the backstory
To track how we landed on this conclusion, revisit the three previous posts in this series:
1. The Three-body problem, Part 1 | [The 3 key elements of modern IT solutions](https://www.vendia.net/blog/private-vs-public-blockchains)
2. The three-body problem, Part 2 | [Strengths and weaknesses of centralized IT, private chains, and public chains](https://www.vendia.net/blog/blockchains-vs-cloud-and-it)
3. The three-body problem, Part 3 | [Comparing approaches with the Adobe Stock™️ example](https://www.vendia.net/blog/nft-it-business-example)
