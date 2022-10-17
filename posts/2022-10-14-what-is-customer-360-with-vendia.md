---
title: 'Your Customer 360 solution isn’t really 360'
description: 'Senior Solutions Architect Francine Klein explains why months-long data initiatives intent upon a Customer 360 solution fail and shares what you can do about it. (Hint: Forget Salesforce)'
date: '2022-10-14'
categories:
- concepts
- product
- datamodeling
authors:
  - Francine Klein
---


### What is Customer 360?

We can’t talk about Customer 360 without the infamous “wheel.” You’ve seen it: The circle of all stages, channels, or phases that a customer (B2B or B2C) goes through as they interact with a company.

We can’t help ourselves — here’s our rendition: 

**Customer 360 Wheel of all Stages**

![Customer 360 Wheel](https://user-images.githubusercontent.com/105127677/196303087-2f926f8a-fd40-422e-883c-2deadbd2d9cb.png "Critical stages of a customer's complete journey")

<br/>


It’s 360 because it covers a full circle, all 360 degrees.

Each stage involves a series of actions, updating various data entities, enabled through a stack of business system applications.

**Customer 360 Wheel of all Stages, Actions, Data Entities, and Systems**
![Customer 360 Wheel Detail](https://user-images.githubusercontent.com/105127677/196303105-a3817402-ea14-4bc3-bb16-20a6dee2d987.png "Key actions that occur at each Customer 360 Stage, including the relevant data entities and supporting systems")

<br/>

The stages may differ depending on the product. For example, a consumer good product has order processing and shipping, while a SaaS product has configuration, go-live, and usage. But, generally, it’s the same theme across them all:
1. Market prospective customers
2. Acquire the customer 
3. Engage and Support the customer
4. Grow the customer
5. Remarket customers for upsell

And, round and round the wheel it goes.

Great, we’ve established the concept. But what is Customer 360, really?

Customer 360° is when companies want visibility into all stages and channels in which their customers may interface with their business. It enables invaluable benefits like these:
* Understanding behaviors to identify patterns and better market products/solutions
* Insight into booking to revenue recognition
* Usage pattern analysis linked with support activity for early risk indicators to reduce attrition
* Personalized customer support based on a history of cases, buying history, and product usage (and personalization is increasingly [a business necessity](https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying))
* Operational visibility in the quote-to-cash lifecycle for both accuracy of deal tracking and enablement of revenue forecasting

Companies spin up multi-year data initiatives to light up these insights. These initiatives may not always be called “Customer 360°.” They can focus on aspects of the solution (data taxonomy) or specific tools (CRM applications), but they all have common themes.

Let’s unpack a few and see why they’re cousins to Customer 360.


#### Master Data Management (MDM)

Master data management is, well, the art of mastering your data to create a “master” record. To not rehash the wealth of information around [MDM](https://en.wikipedia.org/wiki/Master_data_management) and the value-proposition already established by the leading MDM providers, we’re going to hone-in on a few key features these solutions offer:
* Linking an entity (ex. a customer ID) across all systems 
* Control of which system or team can create entities and edit certain attributes
* Visibility into attribute change history 
* Deduplication to create a single golden record
* Agreed upon version for any entity and associated attribute (no conflicting information)

You may hear some dialogue around the [end of MDM initiatives](https://medium.com/@lochan.narvekar/is-mdm-master-data-management-dead-9c248c82c9ae), but they haven’t really ended; they’ve just rebranded. The core of the initiatives lives on to accomplish the following:
* Link Data (identifier lineage)
* Know data (critical attributes)
* Clean Data (deduplicate and reconcile)
* Control Data (attribute categorization and ownership)
* Use Data (availability for operational processes)

And these core capabilities may live across varying tools like those for cataloging data, governing data, or developing a customer data platform.


#### Data Governance

[Data governance](https://en.wikipedia.org/wiki/Data_governance) and cataloging solutions provide a way to track data about data. Think of them as a searchable dictionary, varying in how much each tool allows for the editing (or securing) of attributes. 

More feature-rich solutions add layers of security policies and audit history on usage of data assets. Some solutions maintain data privacy requirements (ex. data retention or GDPR compliance) while others present a data lineage of all systems in which an attribute can be defined. Almost all data governance solutions include a ledger or data changes and control who can see or edit data.

In short, it’s mission is quality, security, reliability, and auditability of data. Data governance is a critical component of any master data management solution. 


#### Customer Data Platform (CDP)

If MDM solutions sit in the middle of the infamous Customer 360 wheel, CDPs can be thought of as sitting in the top-left quadrant. These solutions are tailored to incorporating marketing and media information to create customer segments.

A purpose of a CDP is to add categorization, or segmentation, of customers based on early-stage activity. It’s intended to enable personalization based on customer behavior patterns. 

However, CDPs are not the full 360° view. CDPs are notorious for focusing on marketing interactions, website views, and [top-of-funnel](https://www.simplilearn.com/top-of-funnel-marketing-tactics-article) curation; meaning, it’s more of a Customer 45° view. It often forgets sales, support, success, product, and revenue activity. 

**Customer 360 Wheel Only Partially Visible with CDP Solutions**
![Customer 360 Top-Left Wheel](https://user-images.githubusercontent.com/105127677/196303129-57659044-708a-4aae-a540-169a193f49a2.png)

<br/>

Key features of these solutions include: 
* Matching (deduplicating) customers across data streams from each connected business application
* Tagging key categorization attributes based on common characteristics 
* Generating a golden ID to link customer activity together

Sound familiar?


#### Salesforce

One particular solution has taken Customer 360 by storm: Salesforce. Any discussion of Customer 360 would be incomplete without unpacking how they play into this space.

In case you haven’t heard, [Salesforce](https://www.salesforce.com/) is a business operations application focused on Customer Relationship Management (CRM) and Case Management, covering:
* Marketing campaign response, email and meeting tracking, sales pipeline and deal wins (the top-left of the wheel) 
* Support case and issue resolution tracking (the middle-right of the wheel) 

Salesforce is a great fit for connecting sales and support aspects of the customer journey because of its scalable and standardized data model. This data model normalizes the concept of Accounts (companies), Contacts (people), and related activities of Campaigns, Leads, Opportunities, Cases. These core entities meet the majority of business’ needs for the top-right and middle of the wheel. 

While they advertise Customer 360, they’re really talking Customer 90 — maybe 270 if stretched with CPQ and their [not-as-popular](https://enlyft.com/tech/products/salesforce-financial-services-cloud) Finance Service Cloud. And, this visibility is only enabled if Salesforce is used by every related department that “owns” that stage of the wheel. 

A true Customer 360 should include revenue, product usage, and insights from analytics. Salesforce is a powerful operational solution, but it is [not a scalable data storage solution](https://www.finddataops.com/p/salesforce-is-a-lousy-data-warehouse) (starting reasons are performance for accessing data and data storage costs). 

While Salesforce is expanding their product offerings to get data more effectively into Salesforce, for example, with the [new announcement of Genie](https://www.salesforce.com/news/press-releases/2022/09/20/genie-news/), it still does not round out the entirety of the Customer 360 wheel nor does it provide a solution for analytics-enabled insights. 

By consolidating data into a single tool, it solves the need for identifying a golden record, reconciling attributes, and generating a linking identifier, but only for a subset of the Customer 360 wheel. 


#### Analytics 360

[Data warehouse](https://www.vendia.net/blog/blockchains-vs-cloud-and-it) solutions will look to generate insights on aspects of the Customer 360 wheel, narrowing in on specific questions. For example, “What percentage of revenue has been recognized for deals that closed in the last quarter?”

However, to accomplish this, analytics ETL/ELT logic must include the following aspects as a prerequisite to insight-generating logic:
* Data deduplication and mapping of identifiers 
* Attribute reconciliation across systems
* Managing conflicting definitions or multiple version of the truth

You see the pattern here: Every solution has the same characteristics for defining identifiers, deduplication, and attribution tracking; each are wrappers around simply wrangling messy data for a single, trusted version of truth for information.


### What keeps going wrong?

We’ve established that Customer 360 can exist in many forms across many solutions, but they have the same common themes. If the solutions are so prevalent, why do Customer 360 projects take months (or years) to complete? Why are there so many varying (similar but competing) solutions and approaches in the data world?

Most often, Customer 360 solutions are more like Customer 45, or a dotted line around the 360° circle — bits and pieces of the journey are connected, but the full, end-to-end continuity is lacking. 

**Customer 360 Wheel with Spotty Visibility**

![Customer 360 Dotted Line Wheel](https://user-images.githubusercontent.com/105127677/196303139-e08d4d8d-a876-44a8-959e-1869974c701d.png)

<br/>

It’s easy to say the tools are the reason, that MDM is archaic, that data governance tools don't have the right breadth of features, or that people are the problem (but that wouldn’t be [very kind](https://www.vendia.net/kind-humans)).

But, it’s not your fault. The lack of Customer 360 is the nature of growing companies. It’s a common tradeoff when companies need to do the job (ex. sell) and design the processes and tooling for operations (ex.. sales ops and application administration). To round it out, people with tribal knowledge of how customers are represented in each system come-and-go from organizations.  

Basically, the data within a company becomes no different than [our junk drawers](https://www.vendia.net/blog/understanding-real-time-data-lakes) — hard to navigate unless you know exactly what you’re looking for.

There are two key reasons Customer 360 is often more like Customer 45:
1. Business departments operate in silos and need to quickly scale without interfacing, procedurally or technically, with upstream and downstream teams or applications. 

    For example, a success team may lack visibility into a customer’s interactions with the website and their product usage changes without manually identifying how each customer is represented in both the system that tracks website views and the system that tracks product usage.

2. Companies can grow through mergers and acquisitions, and with those, add instant complexity to the enterprise technical landscape with no linking of data across the two disparate sets of business applications. 

    For example, a customer may be duplicated in both subsidiary’s respective CRMs, but no systematic knowledge of such duplication exists


However, with a data strategy and the right tooling that empowers the people and processes, Customer 360 (all of its degrees) is within reach.


## How can it be successful?

At its core, all the above solutions are just a data sharing problem. If data is validated, reconciled, and shared early and often, the downstream layers of cleaning, reconciliation, and definition are not needed. Add it to [a ledger](https://www.vendia.net/use-cases/next-gen-blockchain) and sharing with control, and Customer 360 doesn’t feel like a pipedream. 

Let’s go back to that wheel. 

If a set of attributes are defined, say a “schema” for a customer with ready-to-go [GraphQL APIs](https://www.vendia.net/blog/apis-for-data) to modify that data, then it’s as simple as creating an integration to write those attributes. Each business application can send the pertinent information to this aligned schema, and it’s broadly available. There’s [no longer a need for point-to-point integrations](https://www.vendia.net/blog/improve-your-data-mesh) from each system to every other system (thereby creating a tangled web of integrations).

Yes, at first glance, it’s not much different than an [Operational Data Store (ODS)](https://en.wikipedia.org/wiki/Operational_data_store) or an [Enterprise Data Hub (EDH)](https://en.wikipedia.org/wiki/Data_hub) built on a semi-structure data store (ex. [NoSQL DB](https://en.wikipedia.org/wiki/NoSQL)). However, insert stage left a new business need: Interface with partners, plural. The integrations to build, security to manage, data to deduplicate, and data to reconcile across partners becomes multiplied. The data development teams are then bogged down on undifferentiated value. If (or when) the technical landscape across these partners is not homogeneous, add months to the development timeline.

With [Vendia](https://www.vendia.net/blog/venn-diagramming-vendia-share), it’s a few clicks to share data with partners Really. The schema is already established and the data exists with a golden record of the entity. With the use of [blockchain](https://www.vendia.net/blog/are-blockchains-databases), it also includes an immutable ledger, providing visibility into any changes made to any attribute at any time.

All that’s needed is to invite one (or many!) partner(s) to own a [node](https://www.vendia.net/docs/share/terms-and-definitions). Data can be shared, real-time, across partners and [across clouds](https://www.vendia.net/blog/azure-eventing). 

With Vendia, not only can you share your data, but you can: 
* Control what you share, including only a subset of information 
* Allow partners to share data back with you, directly on that same golden record, without the need to build _additional_ layers of integration and reconciliation across _each_ data set within _each_ business applications
* View an immutable history of any changes made to any attribute by any party

With Vendia, you no longer need to:
* Reconcile the spider-web of integrations across business applications
* Add in multiple data wrangling tools for managing, governing, combining data
* Manage APIs for each point-to-point integration and keep them current with evolving schemas

The walled gardens around data silos, both among departments and now among companies, begin to vanish. Not only can you have a complete view of _your_ Customer, you can have a more complete view of what is actually _your_ Customer and _your partners’_ Customer.  

**Customer 360 Wheel Linked with a Partner's Customer 360 Wheel**
![Customer 360 Partner Wheel](https://user-images.githubusercontent.com/105127677/196303143-0d97df23-72f9-4245-9097-330d4daf5999.png)

<br/>

Customer 360 is now short sighted. It’s time for Customer 720… or Customer 1080 or Customer 1440…

## Begin (or get back on the rails with) your Customer 360 journey

Start thinking about a holistic data ecosystem — one with a Customer 360xN view that is interconnected with the entire enterprise data landscape for [real-time everything](https://www.vendia.net/blog/real-time-everything). Then, let’s build a [proof of concept in 1 week](https://www.vendia.net/poc).

Particularly interested in CRM? Check out our [CRM Data Share](https://www.vendia.net/use-cases/crm) feature and [video demo](https://fast.wistia.net/embed/channel/d1mxqbj9xw?wchannelid=d1mxqbj9xw&wmediaid=6ujrd8iwnt).  You can also check out our [use cases](https://www.vendia.net/use-cases) and trial [Vendia Share](http://share.vendia.net/) for free.
