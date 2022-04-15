---
title: '3 Body Problem Part 3: Comparing Approaches with Adobe Stock™️ example'
description: 'Let’s look at how Centralized IT and NFTs may solve for tracking Adobe Stock licenses'
date: '2022-04-20'
authors:
  - Tim Wagner
---

## Building an Image Licensing Business that makes everyone smile. ## 

In our previous post we took a deep dive into each technology approach — centralized, public chains, and private chains. In this section we’ll turn that around: Instead of a bottom-up analysis of pros and cons, we’ll look at a real world example, an image licensing business, through several different lenses to see how different technology approaches compare.

Let’s say we want to create an image licensing business, similar to Adobe Stock™. Our simulated business has a number of different personas that it needs to concern itself with:

1. An *artist* creates a digital work and sells it to a content company in exchange for royalties.
2. The *content company*, having consolidated digital media from multiple artists, now resells its catalog to one or more retail distribution channels.
3. The *retailer*, such as Adobe Stock™, purchases content, creates aggregate catalog experiences through a website (and potentially a mobile app), and supports licensing and billing for end users.
4. *End users* license individual works of art for inclusion in presentations, websites, or other content that requires media elements.
5. *Viewers* of those presentations, websites, etc. consume that content through streaming services, downloaded collateral, or other means. Viewers may also play the role of *auditors* if they attempt to discern whether the material they are viewing has been properly licensed.
![Overview of Adobe Business](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..98492452..163490166-92a36ca6-bf0c-4226-8bad-c50d22037679.png)

Now, let’s pretend to build that business in a few different ways...

## Existing (“As Built”) Architecture Using a Centralized Approach

Since these businesses have existed for some time and obviously predate blockchain technology, they’ve been realized using conventional (“centralized”) architectures, both on-prem and in the public cloud. 

Broadly speaking, both the reseller and the distributor maintain a full copy of media assets in some type of file system. They also maintain one or more database tables to model the key elements of their business relationships, such as:

- A media *catalog* (list of media assets and their prices)
- A list of *customers* or reselling partners
- A many-to-many *mapping* of which customers (or reselling channel partners) purchased which assets

On top of that database storage layer various web and mobile applications (along with billing and other back office services) manage the interaction with the end users, including navigating and purchasing licenses. The integration between media content companies and distributors may also be mediated through one or more public APIs.

These existing, centralized architectures have some important advantages that are worth preserving:

- **Low storage costs.** With many terabytes (possibly exabytes) of media assets, keeping storage costs low is critical. Both the content company and the distributor need storage cost structures near or at market rates for cloud file storage in order to make their business margins tractable.
- **Low transaction costs.** A license for a small image may be as little as a few dollars. That implies that the infrastructure cost of performing the licensing operation (e.g., updating a database table by adding another row containing the customer id and the asset it) must be a small percentage of those few dollars or the company won’t be able to make a profit. *Modeling a $3.00 asset license purchase as a $30 Ethereum transaction, e.g., would make the business model “upside down” on margins.*
- **Low latency (and access controlled) distribution.** To keep the customer experience viable, the time between purchasing a license and the end user being able to use the media asset must be less than 10 seconds. Low latency downloads from anywhere in the world that reflect recent purchase authorizations in real time is a hard requirement, and only users who have licensed a particular asset should be able to download it.
- **Operational data stores and billing are easy to integrate.** The company’s business data depends on being able to read and write operational data – i.e., who owns which license – quickly and at low cost. Exhausting this data into billing systems as well as analytic systems for BI (Business Intelligence) purposes and AI recommendation engines are all hard requirements, and cannot be subjected to high latencies or data retrieval costs. User billing can be handled through simple integration with SaaS solutions such as Stripe.

So much for the good parts. Now, let’s take a look at some of the limitations of existing (centralized) architectures...

## Next-Gen Architecture Requirements

While the existing centralized approach addresses basic business needs and offers the benefits above, it also *lacks* some highly desirable capabilities:

- **The original authors of the media have no insight into how their works are being used, and are required to simply trust that compensation is fair and equitable.** This is a classic centralized application limitation: The “proof” of what was transacted is locked up in the private database tables of one or more companies, implying that no one else can see that content without their assistance and permission. This is more than just a conceptual limitation; it’s also a *business model* limitation, because without this capability, offering flexible rates or pass-through income to media authors isn’t readily possible.******

*Ideal solution: Artists can track sales and use of their works over time and validate their compensation is accurate without reference to any private company data.*

- **Similarly, a third party auditor (or even just an interested party) can’t discern whether use of a media image is valid or not.** For example, if you saw an image that was subject to copyright in a presentation on the web, getting the owner of the presentation to validate their license would require the intervention of the licensing service, who would need to look at their private database tables again. Kinda messy, and not very likely to happen, right?

*Ideal solution: Viewers can independently validate appropriate image use without reference to private, centralized database content.*

- **Reselling content is challenging.** For the content company and the distributor to share media and revenue, the IT departments of both companies need to build dedicated implementations. Without the benefit of a partner data bus that inherently models ownership, access and sharing controls, and versioning, both parties are required to erect complex (and thus likely, expensive) DIY sharing solutions. Furthermore, due to the increased challenges that real-time sharing would present, they likely do so with “batch” approaches that require full-scale copying of all assets and periodic (versus continuous) billing and usage updates.

*Ideal solution: Partners can share media assets securely without writing code, and enjoy real-time notifications with respect to end user licensing events and co-sell revenue.*

## Are NFTs the Answer?

Given the media attention accorded to NFTs, it might seem at first blush that a newer, better implementation strategy exists: Simply place a hash (digital summary) of the artwork into an NFT, and use that to represent its ownership (see figure below):

![Alternative Implementation of digital asset library](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..98492452..163490293-d0544556-8add-4217-b21e-6aa2055992ca.png)

We’ve all heard that NFTs are awesome, so this must be a good solution, right? 🙂

Unfortunately, a simple, singular model of ownership (like an NFT) doesn’t map well into the reselling and licensing approach required by the actual commercial relationships in our sample problem.

NFTs as implemented today also tend to suffer from structural challenges, such as high transaction costs – fine for a $50,000 painting, but problematic when paying $0.99 to license a GIF for a slide deck. They also don’t provide built-in mechanisms to handle configurable end user authentication, authorization, access controls, or CDN distribution. 

**In short, this approach fails to capture the benefits of the existing approach identified above**: low storage and transaction costs, low latency (and access controlled) distribution, and easy license management and billing. NFTs also don’t *directly* accomplish the additional goals, either, because they don’t model all five personas and their relationships with sufficient fidelity.

So we leave this section a little sad...neither the old school (centralized) approach not the new school (NFT) approach met our set of requirements. In Part 4 we’ll try something different: *We’ll bring all three technologies to bear simultaneously.*
