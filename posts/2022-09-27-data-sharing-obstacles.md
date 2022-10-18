---
title: 'Obstacles to data sharing'
description: 'Some obstacles to data sharing are built into common data infrastructure. Other obstacles come from fearful business mindsets. This post will help you face both types of data sharing obstacles.'
date: '2022-09-27'
categories:
- concepts
authors:
  - Anders Maul
---
Data is [the new oil](https://www.economist.com/leaders/2017/05/06/the-worlds-most-valuable-resource-is-no-longer-oil-but-data), and this comparison is more than a metaphor. Both oil and data are transported through pipelines and stored in silos. Likewise, the limitations and obstacles we see for tangible goods like oil have also manifested themselves in the digital world of data.


## Why data sharing is more important than ever

In a world where businesses are increasingly more dependent on partners across the world, events taking place in every region on the other side of the globe cause a ripple effect. When the ripples become waves eventually hitting the shores of your business, they lead to empty shelves, confounding delays, increasing costs, unhappy customers, and business instability. How do you stay ahead of the waves or and [prepare your business](https://www.vendia.com/blog/build-a-modern-secure-data-exchange-for-semiconductor-traceability-with-vendia) to ride through the next market shock, big or small, local or global? 

Right now, most companies are optimized around knowing everything that goes on within their four walls. You can only control what’s within your purview. If you depend on partners to deliver value to your customers in highly connected business networks (like [finance](https://www.vendia.com/blog/atos-success-story), travel, supply chains, or manufacturing), a lot of valuable data value is created outside your company. While exchanging data with strategic partners can be a challenge, if you expand your purview to include your business network and determine which partners you can form a data alliance with, you can overcome those challenges.

First, though, let’s explore some of the most common structural and cultural to data sharing. 


## Structural obstacles to data sharing

Companies have spent years and millions of dollars improving internal data sharing, [data sharing gets even trickier](https://www.vendia.com/blog/real-time-data-sharing-pros-cons) when you start to venture outside your own four walls. You run into even more obstacles, some of which can feel like canyons that you need to cross to even get to the other side. These “canyons” can take many forms in a modern IT stack.


### Multiple clouds

Within a company, having multiple clouds is frequently an “accident” or a circumstance, rather than a deliberate choice. Different departments may be using different clouds for different purposes, e.g. your data science team started using GCP because of BigQuery, but your application team went with AWS because of greater familiarity with their services and speed of development. Now that you have to share data across the clouds, you’re standing at the edge of a cliff looking down at a deep and vast canyon between the two clouds, and you are not exactly sure how to cross it. 

This problem becomes even more pronounced when you talk about multiple companies working across clouds. Either they are independent companies with their own IT stack and cloud setup and now need to exchange data with strategic partners within their business network, or they are the result of merger and acquisition activities and part of a multinational company with multiple subsidiaries. In the past, they never had the chance or reason to coordinate cloud adoption. 

Trying to cross the canyon can seem daunting, especially if this is an ongoing event where data needs to be synced constantly.

* How do you match up cloud services, data schemas, and files?
* Where does the data live and who owns it?
* How do we ensure everyone has access (but not too much access)?

If you start [building a solution](https://www.vendia.com/blog/why-we-combined-graphql-and-a-serverless-distributed-ledger) in-house to combine data across multiple clouds, you risk spending months or years building a bespoke, ridgid, system that you will need to maintain and audit for the foreseeable future — if you have the resources, time, and technical talent to even get started. You also risk getting caught in the cloud providers’ transfer fee (dare we say, Hell?) and your infosec team’s laundry list of ever-changing security and privacy requirements.


### Multiple departments and companies 

Very few companies are 100% vertically integrated. Even then, most companies depend on strategic partners (the same way the departments in a company depend on each other to deliver value). Whether you're talking about multiple companies or multiple departments looking to exchange data, there are physical and mental walls that need to be crossed. Those walls are built from the bricks of historical dependencies, data and security policies, regulatory programs, IT stacks, auditing regimes, and access controls. However, one of the biggest walls is built from a lack of trust. 

The way to overcome the trust issue is to create a single source of truth for your data, where [everyone (and no one)](https://www.vendia.com/blog/apis-for-data) is the owner. That source of truth must be tamperproof, equipped with precise data and access controls, and easily auditable across time. It’s within [circles of trust](https://podcasts.apple.com/us/podcast/circles-of-trust/id1645908970) where data can be exchanged without sacrificing control and without needing to question the authenticity of the data.


### Multiple geographies and accounts

We no longer have the screeching background noise of a 56K modem connecting to the internet, and we certainly don’t have the patience for delays and downtime. Applications need to be fault tolerant, have high availability, and low access latency, regardless of where in the world [Carmen Sandiego](https://www.carmensandiego.com/home) is. That means your application and its data needs to span multiple geographies and data centers through a complex distributed system that is always in sync. And with complexity comes risk. With multiple regions in play, you now also need to ensure that if one fails, the others can take over. Less downtime is a benefit, but getting there is a complex and risky task laden with technical and regulatory challenges. 

Those who dare, win. Imagine if it wasn’t more work to [spin up additional regions](https://www.vendia.com/blog/multiregion-serverless-apps) across the globe, imagine if you could increase your geographical availability and lower latency by benefitting from the combined data center availability from multiple clouds. If you are able to span geographical regions and clouds, you can quickly switch to use the closest data center when the first one fails. Just imagine how powerful it would be if your application would automatically be connected with the closest, functioning data center at any given time, without regard to whether it was a data center on the same cloud in a different region, or a different cloud in the same region.

### Multiple applications

For the longest time, companies hosted their own data on premises. With the rise of software as a service (SaaS) and the cloud, [data scattered](https://www.vendia.com/blog/b2b-data-sharing) to all corners of your digital company. Each cloud-hosted service has its own purpose and data silo—a corporate jigsaw puzzle where you can’t quite grasp what the pieces are trying to make out. Data that was easily accessible to (and under the control of) IT is pulled out into (largely) public cloud repositories managed by vendors. Solutions that worked in previous generations – built-in ERP sharing solutions, EAI products, and API-centric solutions – are no longer viable in a cloud- and SaaS-based environment. Meanwhile, even the most modern SaaS-aware ETL solutions in the market target analytics solutions, not [operational data sharing](https://www.vendia.com/blog/what-is-operational-data-sharing), leaving enterprises with few options to deal with their mission critical operational data.

Instead of accepting the canyons between applications and data living in every corner of your company, you could take a holistic, overarching approach that allows the applications to meet up in [neutral territory](http://vendia.com/product) to exchange data (and pleasantries).


## Cultural obstacles to data sharing

Change and technology don’t come out of thin air. You need people to champion the initiative  and rally behind it. As humans, we are reluctant and skeptical of change; it often feels safer or easier to just maintain the status quo. When it comes to data and the exchange of data, every party feels ownership and has responsibilities of their own. This is one of the main reasons [exchanging data](https://www.vendia.com/blog/real-time-everything) across teams, departments, or companies can be challenging.

If you can establish trust in the data alliance, the participants, and the data, the challenge is no longer a human one, just a technological one. The way to establish trust is by making the data timely, tamperproof, and transparent, and allowing participants to [maintain control](https://www.vendia.com/blog/multi-party-data-sharing-with-control) so they don’t feel they are putting themselves and their data at risk. 


#### How Vendia can help

Vendia Share helps you automate and accelerate data workflows across your business network by facilitating secure, trusted, and controlled data exchange. Whether you’re looking to cross canyons between companies, clouds, geographies, departments, or applications, we make it easy to create a multi-party data alliance with a single source of truth that lives in a secure, and neutral territory. 

To learn more about how Vendia can help you span canyons, explore our [case studies](https://www.vendia.com/case-studies) and [FAQs](https://www.vendia.com/docs/share/faq). Or, [request a meeting](https://meetings.hubspot.com/tim-zonca/contact-an-expert) with one of our experts.
