---
draft: false
title: 'Lean Apps Part 4: The Lean App Manifesto'
description: 'Flip the innovation iceberg!'
date: '2022-02-22'
authors:
  - Tim Wagner
---

## Flip the innovation iceberg!

In [Part 3 ](https://www.vendia.com/blog/lean-app-part-3) of [ this series](https://www.vendia.com/blog/lean-app) we covered what infrastructure needs to do automatically and without impacting developers or operators. This post focuses on how we can shift away from undifferentiated work and “flip the iceberg” of IT innovation. 


## The lean app goal: “Flip the IT iceberg”

Every company talks about innovating to serve customers. Every developer wants to spend their time on the activities and outcomes that matter, not pointless, repetitive drudgery. And yet, modern application development across every country and industry sector is dominated by undifferentiated activities.


What would it take to “flip the iceberg” – to get to a place where 90% or more of a team’s time, energy, and infrastructure spend goes towards innovation and competitive differentiation, and less than 10% is spent on babysitting infrastructure, repetitive development and deployment tasks, and other undifferentiated heavy lifting? 

Key to this company and team transformation is an associated application transformation: in particular, moving from a style of application development that depends on a broad, expensive surface area to one where the surface area is as minimal as possible…with more work and more complexity shifted to infrastructure vendors.


# A lean app manifesto

What does that world look like?

In some ways, it’s a continuation of everything that’s come before: open source software, the public cloud, Serverless. Each of these, in some way, helped to “lean out” some aspect of application development, without getting quite all the way there. 

The lean app movement is driven by a simple, overarching idea: **Less over more.**

If a technology, process, approach, or vendor can do something effectively that’s not your core business, then let them. Outsourcing work is a blessing, and helps avoid Tyranny of Choice mistakes that are unfortunately common among developers who mistake “more control” for “better outcomes over time”. Code, infrastructure, and tools are costly, long-term liabilities – _remove what you can, standardize what remains_.


## 6 rules for a lean app


### #1 Differentiated business logic over undifferentiated, commodity code and activities

If it’s not unique to your company, or doesn’t matter to your end users, why spend your company’s time, money, and people to do it?


### #2 Smart APIs over “dumb pipes”

If your application has to poll repeatedly for data or expend code (and developer effort) dealing with missing, out-of-date, or inconsistent information, then you have a dumb API problem. Smart APIs enable you to concentrate on application concerns, not the details of how data is secured, replicated, shipped across clouds, or made ACID.


### #3 Schemas over code

 If there’s an easy, standards-based way to express something about your data model or its integrity constraints (initially or over time), use that, in preference to writing (and maintaining) expensive, custom code to do the same thing.


### #4 Automation over manual effort

 API generation, schema evolution, transactional data replication, event generation…virtually every application development team struggles to recreate these elements, and yet none of them are differentiated (“business logic”) outcomes.


### #5 Off-the-shelf data sharing over costly “DIY data”

If your application is reinventing the wheel by trying to solve cross-company, cross-cloud, cross-region, or cross-account data sharing (with a focus on security, scalablility, cost management, fault tolerance, and compliant data access controls), then something is wrong. _DIYing any of these data sharing solutions is the poster child of undifferentiated heavy lifting._


### #6 SaaS over IaaS; server*less* over server*ful*

Deploying or operating another company’s software? Manually scaling systems up and down that should be “adult enough” not to require you to babysit them? Aren’t AWS/Azure/GCP yet spending time and money to keep servers or other infrastructure healthy? If your end users don’t benefit directly from an activity, perhaps your time is better spent innovating elsewhere.


<p align="center">
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..152257968-af4ab04b-175d-4e21-9cfa-e8c7f4e67acb.png" />
</p>
<p align="center">Figure 1: The six pillars of lean.</p>


## Getting started

Is it possible to create lean apps today? What about “brown field” applications that can’t be discarded and recreated overnight…can they benefit from lean ideas or incremental migration strategies?

Like any significant movement, change takes time: Despite the transformative effect of the public cloud, the majority of business applications still run on prem.

In fact, only [in 2020 did cloud spend outstrip on-premise IT spending](https://www.infoworld.com/article/3612769/cloud-spending-outstrips-on-premises-investments-for-the-first-time.html) for the first time in history. For many companies, a quarter century or more of mainframe and on-prem hardware and software investments mean that they still have a long way to go to fully adopt the cloud. 

Serverless solutions – such as AWS’s Lambda and Fargate – while representing some of the fastest growing elements of that cloud provider’s portfolio, still represent only a fraction of total compute spend on the AWS platform. Lean apps will follow similar lines, if for no reason other than the fact that they also benefit from public cloud adoption and further development of serverless offerings.


## Vendia and lean apps

Working on a green field application or feature? Companies like [Vendia](http://www.vendia.com/developers) will let you move directly to a lean app methodology for new application development or to layer a significant new feature or capability on top of an existing application. And where wholesale adoption of the idea isn’t (yet) possible, developers and companies and still benefit from the concept through incremental steps in various areas of application development:


### APIs



* Adopting schema-based solutions for APIs (such as the [Open API specification](https://swagger.io/specification/), formerly known as “Swagger”) and data.
* Prefer GraphQL over REST APIs when possible, to future proof both client and server interfaces. This also enables adopting a lean app-style schema evolution approach, even if the schema evolution needs to be “manual” for now rather than automatically computed and applied.


### Data storage



* Adopting cloud-based databases, especially “serverless” offerings, such as Amazon Aurora Serverless, Amazon DynamoDB (with the serverless scaling/pricing option enabled) or Google Spanner.
* Utilize built-in data capabilities from cloud service providers where possible, such as automated backup solutions or cross-region data replication (but realize read consistency models typically degrade when using the latter).


### Application design



* Segregating integrity constraints and workflow code from “infrastructure management” code, making it easier to migrate off the latter over time.
* Adopting fully managed cloud-based services where possible for data storage, event hubs, queuing, API management, etc. This will make it easier to adopt a lean application framework over time.
* Prefer serverless options over “serverful” ones where complex application state or data manipulation is not required.
* Prefer standardized server (machine) or container images where possible over custom solutions.


## Summing up

As we’ve explored in this blog series, the concept of “leanness” has been around for ages.

 In a sense, it’s just [DRY coding](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself#:~:text=%22Don't%20repeat%20yourself%22,data%20normalization%20to%20avoid%20redundancy.) applied at a macroscopic level to every aspect of an application, from data handling to cross-cloud deployment. But as the next major iteration of software development, it will once again transform the industry, much as the cloud has, shifting ever more work from individual developers, their applications, and the companies that pay their wages, onto cloud and other providers who will create economies of scale through multi-tenanted solutions that handle the undifferentiated (if still exceeding complex) heavy lifting of data and compute management. 

Over time, companies will enjoy lower TCO, faster time to market, and better ROI as the process of developing, deploying, and maintaining software applications and associated IT infrastructure continues to drop. _Lean coding is the ultimate expression of innovating for customers_.


### Get the whitepaper

If you don’t want to flip through four separate posts, you can download the full white paper [here](https://www.vendia.com/resources/lean-apps). 


### Build a lean app 

It’s possible to create lean apps today. Companies like [Vendia](https://www.vendia.com/) will let you move directly to a lean app methodology for new application development or to layer a significant new feature or capability on top of an existing application. You can get started for free and deploy a sample lean app in less than ten minutes [here](https://share.vendia.net/). 

Where wholesale adoption of the idea isn’t (yet) possible, developers and companies and still benefit from the concept through incremental steps in various areas of application development. [Contact us](https://www.vendia.com/contact-us) and we’ll help you learn how to start applying a lean approach to your development today. 


### About the author

Dr. Tim Wagner, the “Father of Serverless,” is the inventor and leader responsible for bringing AWS Lambda to market. He has also been an operational leader for the largest US-regulated fleet of distributed ledgers while VP at Coinbase, where he oversaw billions in real-time transactions. Dr. Wagner co-founded Vendia with Shruthi Rao in 2020 and serves as its CEO and Chief Product Visionary. Vendia’s mission – to help organizations of all sizes easily share data and build applications that span companies, clouds, and geographies – is his passion, and he speaks and publishes frequently on topics ranging from serverless to distributed ledgers.

[linkedin.com/in/timawagner](http://www.linkedin.com/in/timawagner)

t: @timallenwagner

[www.vendia.com/blog](http://www.vendia.com/blog)
