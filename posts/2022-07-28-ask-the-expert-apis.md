---
title: 'Ask the expert: Dr. Tim Wagner explains why APIs break down and how to fix your data inconsistencies with smart APIs'
description: 'With the rise of SaaS companies, APIs aren’t just part of your business, they are the business. Take a deep dive on all things API with Vendia co-founder & “The Father of Serverless,” Dr. Tim Wagner.'
date: '2022-07-28'
categories:
- architecture
- concepts
authors:
  - Tim Wagner
---

# Ask the expert: Dr. Tim Wagner explains why APIs break down and how to fix your data inconsistencies with smart APIs

With the rise of SaaS companies, APIs aren’t just part of your business, they are the business. Line of business owners, enterprise IT leaders, and developers cannot skip or delay the hard job of ensuring that their APIs are secure, compliant, and working in real time—especially when they carry mission-critical business data that must be correct across companies, clouds, regions, and tech stacks.

We’ve rounded up our top posts on featuring the good, the bad, and the best that’s yet to come on API development at both the developer and enterprise levels. Dive into the topics that interest you most with Vendia’s co-founder and the “Father of Serverless,” Dr. Tim Wagner.



* [Smart APIs](https://www.vendia.com/blog/smart-apis)
* [What you need to know about APIs and API payloads](https://www.vendia.com/blog/what-are-apis)
* [APIs don’t have to be so difficult](https://www.vendia.com/blog/apis-for-data)
* [How to make your APIs "data-aware"](https://www.vendia.com/blog/apis-for-real-time-data-sharing)


## 15 characteristics of smart APIs

APIs are critical to virtually all modern applications. From internal APIs shared between teams or departments to the surface area of global enterprises, APIs represent modern software systems and IT solutions’ public “contracts.” 

As businesses and developers have evolved their demands on the data APIs need to carry, API protocols have also matured from Electronic Data Interchange (EDI) to HTTP to GraphQL. The infrastructure for implementing APIs has advanced as well, from “rolling your own” to deploying open source libraries to fully managed cloud services like Amazon API Gateway and Azure API Management.

But for all these advancements, the conceptual role of an API (which is that of an “ignorant pipe” that doesn’t understand, control, or mediate its content) has remained largely unchanged. The costs of ignorant pipes and the data gaps they maintain are huge: Sharing data, and keeping it consistent across companies, clouds, geographies (aka regions), accounts, and technology stacks is arguably the single hardest challenge in modern day applications.

Get Tim’s take on the 15 characteristics of a new solution to fix the ignorant pipe problem with smart APIs in the full post, [Smart APIs](https://www.vendia.com/blog/smart-apis).


## All about APIs and API payload management

From payment APIs like Stripe and PayPal to communication services like Twilio to the ever-growing list of AWS services, it seems that every company and concept has an associated API. Despite their popularity and the abundance of tools and services to create, operate, and monitor them, developers and businesses still struggle with the high cost of creating APIs. And still, while aspects like security are obviously critical, APIs are only useful to the degree that they can carry information between two or more parties. Let’s examine the ways in which APIs are used as a way to understand why the content carried by the API can be even more challenging than developing and operating the API itself.

Take a deep dive to explore what an API really is, why they exist, why carrying business data between companies still remains challenging and expensive, and what business and technical leaders can do to overcome those challenges. Keep reading: [What you need to know about APIs and API payloads](https://www.vendia.com/blog/what-are-apis).


## How to overcome API limitations and make smart APIs

Building great APIs should be simple: All major cloud providers offer highly scalable, fully managed services that remove virtually all infrastructure challenges from both API owners and consumers. Google Apigee, Amazon API Gateway, and Azure API Management handle the challenges of hosting, deploying, scaling, and making API infrastructure fault tolerant. They also provide built-in monitoring, logging, and a variety of authentication and management features. In addition, a well-known standard (OpenAPI, formerly known as “Swagger”) and a host of free tools make it easy for any developer to generate APIs from declarative descriptions.

Despite this robust toolbox, building systems that share data across organizations or business partners using APIs remains one of the most challenging and expensive propositions an IT team faces. Success, or rather the lack of success, is impacted by scalability and fault tolerance requirements, burdened by security and compliance concerns, and guilty of cost and development time overruns. Why this mismatch between a well-understood, well-supported development activity and the often expensive, unpredictable, and problematic result? 

The answer is simple: It’s not the API that’s the problem, it’s the data the API carries.

The moment that an API producer returns data to an API consumer, that data immediately becomes a stale copy of the data maintained by the API producer. With multiple sources of truth (i.e., the API producer’s truth and the one in the API consumers truth), “The Truth” immediately begins to drift apart. Worse, there are often many API consumers calling on truth at different times and creating competing snapshots and variations on “The Truth.”

To better understand your data consistency problem, alternative architectures, and the potential for a real-time streaming architecture to get you and your data sharing partners to a shared, secure single source of truth, keep reading: [APIs don’t have to be so difficult](https://www.vendia.com/blog/apis-for-data).

To learn how smart APIs always keep data consistent everywhere it lives for a single source of truth, keep reading: [How to make your APIs "data-aware."](https://www.vendia.com/blog/apis-for-real-time-data-sharing)


### Explore smart APIs in action

**Developers:** Tired of building with ignorant pipes? In 10  minutes, you can turn a JSON Schema into a production-ready, GraphQL-enabledAPI with a data layer built-in, and see how it works for yourself. Check out our [quick start guides](https://www.vendia.com/docs/share/quickstart) to get started.

**Enterprise leaders:** Looking for a real-time data sharing solution with next-gen, smart APIs to help you stand up a single source of truth in your data sharing alliance? In five days, you can have a proof-of-concept (POC) that demonstrates how your organization can share data and code across regions, accounts, departments, and partners. [Request your POC](https://www.vendia.com/poc).
