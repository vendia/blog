---
draft: false
title: 'Understanding real-time data lakes'
description: 'Data lakes enable smarter apps and faster development. Let’s look at the basics of data lake architecture, use cases, benefits, and challenges'
date: '2022-08-03'
categories:
- architecture
- concepts
authors:
  - Francine Klein
---

## Understanding real-time data lakes

Too many articles on data lakes cover abstractions, and the stories they tell can leave you thinking it will solve all your data problems (and world hunger, while you’re at it). They may also leave you paddling around in water puns. (Warning: We couldn’t resist it, either).

So, let’s take a fresh dip into data lakes by revisiting their foundational characteristics and answering some key questions:



* What exactly is a data lake and how can you use it?
* How does it fit among the other data-things, such as a data warehouse and virtualization? 
* Is a data lake relevant for your use case?
* What are the challenges and benefits of a data lake? 
* [Vendia’s](https://www.vendia.com/product) fit in it all

Let’s start with some core concepts and work our way out from data itself, to storing it, to using it.


### What is a data lake?

Data is a hot topic, so much so that it’s been [compared to oil](https://www.economist.com/leaders/2017/05/06/the-worlds-most-valuable-resource-is-no-longer-oil-but-data) as the means for innovation and personalization. Companies that strategically leverage data will capitalize on their potential, and those that don’t are set to fall behind. And any time you are moving or consolidating data, it takes time. In the data world, faster is better than slower. What’s the best form of fast? Real-time.

Any [data architecture](https://en.wikipedia.org/wiki/Data_architecture), operational and analytical, has four core steps it must perform:



1. Get your data
2. Know your data
3. Use your data
4. Share your data

Data comes from…



* single event-based record (e.g., closing a deal or receiving payment)
* recurring batch
* stream of messages
* bulk load from other data stores or SaaS applications

And it can be…



* Structured, in rows and columns
* Unstructured collection of emails or images
* Semi-structured messages, receipts

…But that data always needs to be accessible for both driving the next step in an operational workflow and building analytical insights.

Naturally, to access our data, we must _store it_ in an accessible way. (It’s a bit circular, but you get the point. Storing our data lets us _get to_ our data.)

A [data lake](https://en.wikipedia.org/wiki/Data_lake) fits comfortably in Step 1 of a data architecture, “Get your data.” It brings all your data, across all forms and functions, without size limits, into one place.

_NOTE: In some architectures, “getting” your data can be logical as it involves identifying the collection of sources and data stores (we see you [virtualization](https://en.wikipedia.org/wiki/Data_virtualization) purists and advanced [data mesh](https://www.vendia.com/blog/improve-your-data-mesh) architectures)._


#### Data lakes and real-time data streaming

A data lake pools all your data into a single place. (We’d be doing a disservice if we didn’t touch on the water puns.) It removes the barriers, or dam stop gates, for getting data into a single location, a single store. And it does so by no longer needing to shape the data into the storage method’s limiting structure (e.g., rows and columns).

The flexibility of a data lake means you can load first, think later. _Any_ data can be loaded into your data store. This flexibility removes the burden of needing to know your data or the questions you want to ask of your data before you acquire it. Data stores that require transformation prior to loading will cause information loss, either in data dropped from errors or information contained in the raw data that’s cleansed out. 

By allowing all data forms, there’s no need to transform it before storing it; therefore, it can be consumed upon creation, fast. Real-time fast.

What type of data benefits from this flexibility?



* Streaming data is particularly unknown at its genesis (e.g., data from IoT sensors, logs, web clicks, and other event-generating messages). The meat of the data is packed in nested JSON attributes, and the systems that produce this data do so continuously, in high volumes and velocity, i.e., emulating _streams._ This streaming data is fast, large, and undefined.

Now, let’s not be those “_data lakes solve all your data problems and world hunger_” people. The very act of getting the data to your data lake still adds some unintended lag time if it’s not done with the right real-time data tools (hint: [Vendia](https://www.vendia.com/product)). Having a tool in your architecture that can consume this semi-structured data and make it available across all nodes of a cross-cloud architecture enables you to more effectively accomplish Step 1 of a data architecture, “Get your data.” Having that data also be distributed across nodes for use in a data lake, by partners, or by other SaaS applications, tears down the barriers in making it usable.


Right…data must be usable. Let’s talk more about that…


### Data lake architecture

The architecture of a data lake is what you make it. When storing heterogeneous data, it can be as organized or unorganized as you choose (even if your choice is inadvertent).

In theory, you can throw all your data into a lake, without thought (we don’t advocate for this). 



* Yes: You want to put all types (forms and functions) of data into a lake.
* No: You don't want to do so without _some_ definition.

To demonstrate the value of a data lake architecture for enabling _use_ of our data, let’s leave the data world for a minute and think about our homes.

Imagine a home where all things—electronics, clothes, kitchenware, appliances, papers, and sports equipment—are piled into a single heap in a large room. Utter. Chaos. Good luck finding your passport. 



* This is representative of data lake architectures that toss all data, without thought, into your data lake.

Now, let’s imagine a _slightly_ more organized world in which you organize these things by purchase date. Better, but still inefficient. You may have a toaster in the closet and a new shirt hanging in the fridge. So, every time you want to toast a bagel, you have to walk from the kitchen to the bedroom and back again to grab the knife to spread the cream cheese.  Oh, and there’s your passport; tucked under the salad forks. 



* This is representative of data lake architectures organized only by update dates.

What we actually do is organize our homes by function (ignoring our messy days). We keep the toaster by the food, the shirts with the clothes, and our papers (mostly) together. We keep the frequently used items out and the infrequently used items (hello, fondue set) tucked away. This feels better. Much more efficient. 



* This is representative of data lake architectures organized by function (or source) and update dates.

What does this look like in a data lake? It’s a folder structure that organizes data according to the SaaS application which produced it, e.g., the CRM, ERP, CDP, web applications, IoT systems, etc. This structure can be further partitioned by the year, month, and day the data was created or updated.

To recap: 



* A data lake brings your data together, but it doesn’t define your data. 
* Data architectures that organize our data increase the _usability_ of data in our data lake.
* Having data be generated from a shared schema (hint: a schema defined in a [Vendia Share Uni](https://www.vendia.com/docs/share/dev-and-use-unis)) enables us to better _use_ our data.

Continuing on the theme of _using_ our data, it’s worth comparing data lakes to the next step in a common data architecture. Enter, Stage Right: the data warehouse.


#### Data lake vs. data warehouse

Back to the home analogy: Our home is clean and organized. The shirts are together; socks are nestled in a drawer; jackets hanging sorted by warmth. Marie Kondo is radiating joy. To make an outfit, you don’t wear items from only one category like socks (unless you’re the Red Hot Chili Peppers in 1988). Instead, you stitch together pieces across each functional category (a shirt, pants, socks, and shoes) to make a complete picture.

We do the same with data; we stitch together pieces from each category. We might pull customer attributes from the CRM, revenue from the ERP, product usage from trackers, and interactions from streaming devices. We may want to jointly use, [share](https://www.vendia.com/blog/azure-eventing), or edit that data with other companies. Therefore, we must look to add additional structure to better _use_ our data.

While the data lake provides the utmost flexibility, we add another tool in the data architecture to:



* Structure the data by identifying relationships among attributes (e.g., contacts related to a company).
* Store data in a solution purpose-built to perform for the type of questions we may ask of the data.

This is where we enter the world of data warehouses, or its kin, databases. 

A data warehouse stores data parsed into a defined structure of tables made of rows and columns with query processing speeds tailored for analytics. 

A data warehouse structure can:



* Define relationships among columns with parent-child relationships
* Restrict data in a column to a set of standardized values, enforced with foreign key relationships and [dimensional modeling techniques](https://en.wikipedia.org/wiki/Dimensional_modeling)

Similar to how we organize our data in the data lake by function, we reorganize the data in a data warehouse into [dimensional marts](https://en.wikipedia.org/wiki/Data_mart) or [star schemas](https://en.wikipedia.org/wiki/Star_schema), with business-friendly [metadata](https://en.wikipedia.org/wiki/Metadata) (data about our data to enable its use). 



* In our home example, this equates to the creation of an outfit and picking pieces across the organized categories for a solution such as the day’s weather-appropriate ensemble. 

We’d be remiss if we closed out on data warehouses without touching on [virtualized data warehouses](https://en.wikipedia.org/wiki/Data_virtualization). Virtualization defines the metadata, i.e., relationships and business logic to apply, on-demand when reading data in a lake or across multiple data stores. The same logic used to define and transform data into a data warehouse is instead applied at runtime. In practice, given the performance throughput, it’s not widely used as its data friends (data lake, database, and data warehouse).

In short: 



* A data lake, consuming data without limitation, requires a schema-on-read approach to add definition when using the data. (Ex: Our home, organized by function and frequency).
* A data warehouse, requiring data to be structured, requires a schema-on-write approach to add definition upon storing it. (Ex: The use of items across our homes into outfits).

Let’s reiterate this point for good-measure: Proper holistic data architectures better position us to use our data.


### Data lake use cases

A data lake is a widely accepted staple in any complete data architecture. Any industry that has more than an inch of data can benefit from incorporating data lakes into the overall data architecture given the value for access to real-time heterogeneous data. For example: 



* Airlines with semi-structured ticket, passenger, and flight information in nested JSON objects
* Financial service loan servicing with recurring payments and mortgage file uploads 
* Patient medical records with physician notes, lab images, and prescriptions 

All these use cases leverage semi-structured data that would rely on data lake technologies. All of which can be stored, and shared real-time, on [Vendia](https://www.vendia.com/product).



#### CRM data sharing

With Vendia’s CRM share, data can be shared real-time across companies’ respective CRM SaaS applications. Coupling that data with other heterogeneous data (e.g., demographic information and web activity) into a data lake unlocks the potential for hyper-personalization based on profiles, usage, and buying patterns. Using Vendia then further enables the ability to reshare insights, with control, to other partner companies for co-selling or ISVs scenarios. You can read more about the value of [CRM data sharing](https://www.vendia.com/blog/crm-data-sharing-for-business) and the headaches[ it solves](https://www.vendia.com/blog/crm-integration-painpoints). (Warning: it doesn’t solve world hunger.)


#### Operational data sharing

[Supply chain](https://www.vendia.com/blog/supply-chain-is-broken-can-blockchain-fix-it) is a prime example of distributed and heterogeneous data; think different countries, different tooling, different parts and tracking, all with many-to-many relationships. Having that data be available is not an easy feat, either for operational use or ultimately in your data lake and warehouse. Vendia provides a means to allow [companies to share](https://www.vendia.com/blog/b2b-data-sharing) and edit data outside of their walls, thereby reducing the need to integrate and synchronize data “n” times. This data in Vendia can include both semi-structured JSON or files. Couple that with a data lake, a means to store data without limitation, and the world is your oyster.

Hitting on the earlier theme data being _usable_: With Vendia maintaining a schema that adds definition to the data, it has immediate value with increased awareness of what that data is while maintaining flexibility as semi-structured data. 


#### Blockchain development

We’ve covered the value of having data be available, particularly real-time. Add in a distributed, immutable ledger to the mix for the trust a [blockchain](https://www.vendia.com/use-cases/next-gen-blockchain) provides, and it opens up a world in which everyone is drinking from the same lake with inherent trust in the water quality (yes, we went there with the unavoidable water puns).

Using a SaaS blockchain has already been described as [peanut butter and chocolate](https://www.vendia.com/blog/decentralization#decentralized-and-saas-the-new-peanut-butter--chocolate) and, layering in a data lake and/or warehouse to consume both the current state of data and the ledger of changes, creates a comprehensive data architecture. It enables you to blend the blockchain-driven use cases with data more suitable for data lakes.


### The benefits of data lakes

Data lakes have notable benefits worth reiterating:



* Flexibility in various data formats, including [scalar or files](https://www.vendia.com/blog/sharing-files-in-a-uni)
* Scalability in the size, amount, and type of data without restriction 
* Speed to consume and store with the removal of transformation barriers
* Real-time access to data in its original format

When using Vendia for storing and sharing data, there are added benefits:



* [Real-time](https://vendia.com/blog/what-is-real-time-data-sharing) data availability across parties and clouds 
* Immutable ledger of history of changes over time


### Challenges for data lakes

In addition to not solving the world hunger problems, there are some challenges with traditional data lake architectures:



* Undefined data with risk for being unusable 
    * Vendia’s use of a schema definition across a uni resolves this by creating an aligned understanding of what the data contains.
* Security and access to the data store
    * Vendia creates a secure GraphQL API interface with the availability to secure who has [access to what data](https://www.vendia.com/blog/multi-party-data-sharing-with-control) with role-based and fine-grained access controls.
* Consistency of data across different companies’ data lakes
    * Vendia manages distributed data stores that are fully synchronized in not only the data but the history of changes over time.


### How Vendia can help

We covered a lot of ground, or _ocean floor_. It’s worth a recap, but first leaning into the water analogies. How could we not?



* A lake of water can exist in many forms - swimmable, drinkable, big, small, with or without animals. Water in the lake can originate from rainfall, mountain stream, or groundwater. It just stores water in its raw form. It can be used for ad-hoc testing, expiration, and continued capturing of water. 
    * This is our data lake.
* That water is cleansed, transported, packaged, and bottled into various sizes. It’s sold in supermarkets for individuals to pick the right packaged water for their needs - water bottles, distilled gallons, ice bags. It’s fit for purpose. 
    * This is our data warehouse.

Vendia is analogous to a drinkable lake with a treatment plant, bottling facility, and super market right on the edge (sustainably, of course). It combines the benefits of a data lake (the flexibility, scalability, and [real-time](https://www.vendia.com/blog/real-time-data-sharing-challenges-for-enterprises) characteristics) with the benefits of a data warehouse (schematic definition and usability of the data). While it brings in the best characteristics of those data stores, allowing you to drink and swim in this pool of water, it’s best served coupled with a data lake for expanded flexibility (e.g., IoT streaming) and a data warehouse for increased definition (e.g., analytics). A complete architecture includes all three tools… and then we can revisit the _world hunger_ problem.


#### Take action

Read [how Vendia helped BMW](https://www.vendia.com/case-studies/bmw) accelerate car delivery at lower cost with transparency across their supply chain.

If you have more to add on the topic of data lakes, or how you have personally leveraged Vendia, we’d love to hear from you in our [guest contributor program](https://www.vendia.com/blog/vendia-guest-contributor-program).

To learn more about Vendia, check out our [use cases](https://www.vendia.com/use-cases) and try the [product](http://share.vendia.net/) out yourself.
