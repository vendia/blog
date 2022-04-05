---
title: 'What you need to know about APIs'

description: 'And why building them is still such a challenge'

date: '2022-04-06'

authors:
  - Tim Wagner
---

APIs are ubiquitous in our industry. From payment APIs like Stripe and PayPal to communication services like Twilio to the ever-growing list of AWS services, it seems that every company and concept has an associated API. 

And yet, despite their popularity and the abundance of tools and services to create, operate, and monitor them, developers and businesses still struggle with the high cost of creating APIs. 

Let’s take a deeper look at what an API really is, why they exist, why carrying business data between companies remains challenging and expensive in 2022, and what business and technical leaders can do to overcome those challenges.

# What is an API, really?

APIs are abstraction boundaries between disparate systems – two modules in a software architecture, two regions in a multi-region application deployment, or two companies that need to share business data. Over the years they’ve grown from a simple way to isolate the details between two systems to being full-fledged security firewalls, and more. 

APIs, especially “public” APIs that form a company’s externally visible surface area, are usually responsible for many jobs:

- **Expressing the API owner’s data model** – the “shape” of information that an API can accept and/or deliver
- **Expressing the API owner’s workflow model** – what has to be done, in what order, for jobs or steps to be accomplished successfully when a sequence of API calls is required over time
- **Data model and workflow evolution** – as business needs evolve, handling the modeling of those inevitable changes by versioning the API (and potentially its clients)
- **Security, encryption, identity, authentication, and authorization** – given that anyone could attempt to use the API, which people or machines are actually permitted to use it, and, when their permissions are not homogeneous, deciding who gets what level of privilege (and how you know they are who they say they are)
- **Operational firewalls** – defending against DDOS and other forms of attacks, applying (potentially client-specific) throttles and quotas
- **Monitoring and analytics** – using calls to the API (and the identity of the callers) for both operational integrity *and* business analytics, so that the API owner has a clear picture of who’s doing what on their systems

That’s a lot of work for any portion of a company’s architecture to perform, but we’re still not done: APIs also have to worry about the content of what they carry. 

Let’s peer into an API’s payload next to see why this can be an even bigger challenge than the list above.

# API Payloads

While aspects like security are obviously critical, APIs are only useful to the degree that they can carry information between two or more parties. Let’s examine the ways in which APIs are used as a way to understand why the content carried by the API can be even more challenging than developing and operating the API itself.

While there are as many uses for APIs as there are companies and developers, we can generally group them into a few categories:

- **Control APIs.** Control APIs are “verbs”; they allow one party to tell another to “do something”. Control APIs can be chained together into more complex workflows, for example creating a shopping cart, filling it with items, and then eventually checking out to purchase the content of the cart. Webhooks and other “callback” mechanisms allow the control relationship to be reversed, so that an API owner can also tell a client to perform some action.
- **Metadata APIs.** These are APIs that ask or answer questions about other APIs. They may be used to learn information about a supported schema, retrieve documentation, gather usage data or other analytics, add or alter identity or permission information, etc.
- **Special purpose APIs.** Uncommon APIs that handle high bandwidth media, process high frequency trades over optic fiber, implement low-level 5G protocols over proprietary networks, etc. These APIs are far less frequently encountered by IT departments and most developers and are outside the scope of this article.
- **Data APIs.** Data APIs are the workhorses of the API universe. Their job is to get two or more parties to achieve a shared understanding of a set of facts. For example, if you’re an ISV or SaaS vendor, you may use Stripe’s APIs to align your internal metering systems with the charges and subscriptions Stripe uses to bill your customers. Stripe’s APIs (and your webhook API that Stripe calls) are continuously trying to ensure that your database of usage and Stripe’s database of customer charges are in agreement by shipping data back and forth.

### Aspects of Data APIs

Of the categories above, data APIs tend to be the hardest to build and maintain, for several reasons:

- **High volumes / low latency** – Data APIs payloads tend to be larger (because they model complex business or application data) and more frequent than either control or metadata API call rates. This means data APIs need to support higher throughput rates and typically need to be lower latency (so they don’t fall behind a steady stream of inbound requests). Control and metadata APIs usually have more relaxed requirements and lower demands on the systems on both sides of the API.
- **Consistency and fidelity** – For a control API, the API call itself often *is* the “system of record”. This makes tracking and auditing relatively simple and straightforward. Metadata APIs tend to carry information that either changes rarely or that changes frequently but is advisory in nature, such as getting a “mostly correct” summary of recent usage over the last hour. But data APIs have to be right. For example, if you’re an airline sharing passenger list information with a partner airline on which a passenger is continuing, you can’t get the name of the passenger wrong, or accidentally include a passenger from a previous flight, or share private information about other passengers that shouldn’t be conveyed. Any kind of error, including under- or over-sharing, could be devastating to a business.
- **Data drift** – Control APIs are usually called whenever the client has a need for something to happen. Metadata APIs are usually advisory in nature. But data APIs carry payloads that are both business critical *and* which can become out of date as soon as they “hit the wire”. That makes one-way APIs especially brittle: clients need to repeatedly, and quickly, poll them to catch data that may be drifting unpredictably at any moment, and which could affect mission-critical outcomes.

**Data APIs are a public reflection of a company’s internal database, without the benefits of a database’s capabilities. If you’re interested in ‘smart APIs’ check out our blog post about [next-gen APIs.](https://www.vendia.net/blog/smart-apis)** 

Often, it’s not even just one database, but several, that need to be reflected in the APIs payloads. And to make the challenge even greater, it’s usually more than just a read-only relationship with the API’s clients: Often the clients themselves are implicitly adding or changing data in those database(s). 

In the Stripe example above, the data APIs have the difficult job of trying to keep two databases – Strip’s internal payment representation and the client’s metering representation – in perfect alignment, without the opportunity to ever see or edit each other’s content directly. Data APIs have all the problems of a database, without the benefit of any of its traditional solutions (ACID transactions, write ahead logs, etc.)

Given that data APIs are the most common and pervasive type of APIs, that they have the largest and more frequent payloads among APIs, and the many difficulties imposed by trying to keep those payloads consistent, correct, and up to date among API owners and their clients, it’s not surprising that companies of all shapes and sizes wrestle with the challenge of developing, operating, and maintaining APIs that meet both their needs *and* the needs of their customers and partners. In the next section we take a look at tools and services that can help reduce this burden.

# Getting Help with APIs

APIs are some of the most critically important – and challenging to build – elements of a modern IT stack or application. Fortunately, great tools and services exist to help with some of the undifferentiated heavy lifting.

Managed API services*,* including Amazon API Gateway, Azure API Management, and Google Apigee provide hosted solutions that handle many of the basic challenges, including implementing APIs from data models, handling infrastructure deployments and scaling, dealing with basic forms of authentication, and some of the governance and lifecycle aspects of API evolution. Outside of API owners with very specialized needs – such as building a cross-continent real-time streaming media service or a high-speed stock trading network – these managed solutions remove many of the burdens of self-deployed solutions. By offering many built-in capabilities needed for production use, such as encryption on the wire and compliance, they make it easy for even resource strapped teams to create world-class API hosting outcomes with relatively little time or ongoing oversight.

While they help significantly with the undifferentiated elements of hosting and operating the basics of an API, managed API services don’t do anything to assist with the payloads themselves. For data APIs, this can be a significant limitation, as the challenge of keeping data among multiple parties consistent, complete, and correct at all times is arguably an even bigger burden than deploying and managing API-related infrastructure.

Companies like Vendia and Fivetran focus on going further than conventional managed API services, by addressing the challenges of payload management directly.

### For real-time operational data

For real-time operational data, [Vendia](http://www.vendia.net/) offers [schema-driven solutions to create data APIs that act like databases](http://vendia.net/product), providing not only the benefits of managed API services but also handling the larger challenge of keeping data correct, complete, and up to date among all parties with which it’s shared.

Vendia also provides built-in compliance, privacy, and governance mechanisms that make it easy to decide (and then audit) who shared what with whom, and when. Vendia is a SaaS offering, so API owners don’t need to worry about deploying, scaling, or managing the underlying cloud infrastructure powering their APIs.

### For analytics and BI data

For analytics and BI data, [Fivetran](http://www.fivetran.com/) offers an easily configurable, fully managed ETL solution for getting data from popular SaaS platforms, such as Salesforce, as well as operational data stores into analytics solutions such as Snowflake. Fivetran eliminates the need to create “intermediary” APIs manually, moving data directly from systems of record into a company’s chosen analytics or BI platform without the conventional need to deploy or manage ETL infrastructure.

# Conclusion

With the rise of SaaS companies, APIs *are* the business, and neither business owners nor developers can skip the hard job of ensuring that they’re secure, compliant, and – especially when they carry mission-critical business data *correct.*

The mechanical task of deploying and hosting APIs has gotten easier over time with the rise of cloud-based API services, but the job of “wiring up” API payloads to their underlying systems of record to create a shared source of truth remains a difficult task for most companies and developers. Platforms like Fivetran, for analytics ETL, and Vendia, for real-time operational data, help tackle this challenge and lower the TCO of keeping critical business data consistent across companies, clouds, regions, and tech stacks.

# Going Further
Looking to build better, smarter APIs? The Vendia blog has a number of articles, including how these features surface in modern applications and get exposed through data-aware APIs (like this [one](https://www.vendia.net/blog/smart-apis) or [this series](https://www.vendia.net/blog/lean-app) on Lean Apps.

If you have a business need not being met by your existing blockchain provider you can visit www.vendia.net to learn more about supported use cases or contact the team directly to dive deeper.

