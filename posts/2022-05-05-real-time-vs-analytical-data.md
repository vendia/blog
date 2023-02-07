---
draft: false
title: "Data types 101: Real-time data vs. analytical data"
description: What is real-time data? How is it used? How does it compare to
  other popular data types like analytical or real-time analytical data?
date: 2022-05-05
authors:
  - Vendia
categories:
  - concepts
  - realtime-data-sharing
relatedPosts:
  - 2022-09-22-real-time-everything
  - 2022-11-02-podcast-worlds-colliding
  - 2021-09-01-sharing-data-with-fine-grained-control
seo:
  title: "Data types 101: Real-time data vs. analytical data"
  description: What is real-time data? How is it used? How does it compare to
    other popular data types like analytical or real-time analytical data?
  keywords: real-time data
sidebarCta:
  - 83d01b06-3eb7-4c44-8e6b-e8cb2f50527c
createdBy: ""
createdAt: ""
updatedBy: alexa-vendia
updatedAt: 2023-01-26T19:11:45.041Z
id: ff8337bb-89bc-4231-91e1-a47fa64101e4
---

"Real-time data" is a term being thrown around a lot these days. It's likely still ringing in your ears from your last Zoom call. As it turns out, its day in the sun is actually well earned, since it powers many of the applications we rely on every day and serves as the foundation of most online transactions.

But what exactly does "real-time data" mean? There seems to be some confusion and overlap with similar, related terms like operational data, real-time analytical data, and streaming data. In this article, we'll take a look at each to clear things up. We'll also explore common use cases, along with how operational data is used and stored.

## What is real-time data?

First, let's establish exactly what real-time data means. For data to be considered real-time, it must be delivered to end users or collaborating systems as soon as it is collected. But that doesn't mean the hand off has to be instantaneous. Real-time data doesn't come with some kind of microsecond or less money back guarantee. It just means the data is not stored somewhere else first. Instead, real-time data is immediately sent from where it originates to where it's needed.

Real-time data can be:

- **Dynamic**: This refers to data that is continuously changing. For example, the location of your package out for delivery changes in real time as it moves across the country.
- **Static:** For example, you could receive a real-time update about where your package was at a specific time. This is a snapshot in time.

It also comes with a long list of benefits, including:

- **Speed**: As implied in the name, real-time data delivers speed. The result? Faster applications and decision making.
- **Understanding the current situation:** Provides visibility into what is happening in the moment, instead of analyzing past events or predicting future outcomes.
- **Accuracy**: More timely data means more accurate answers to what the "current answer" is to many types of questions
- **Less "cleaning up after the fact"**: With multiple parties sharing a single source of truth, there's no need for costly reconciliation between different, inconsistent "copies" of data.
- **Better customer experiences**: Powers personalized experiences at the moment of interaction.

Real-time data usage continues to escalate, especially as an expanding array of apps rely on up-to-the-second information. Let's explore a few use cases.

### Real-time data use cases

Real-time data is the common, crucial element powering the apps and tools we all now rely on for up-to-the-moment information. It's commonly used for things like tracking and navigation. For example, when you're driving to an unfamiliar destination, real-time data allows you to see where you are at that exact moment, along with current traffic conditions. Or, when you use the Lyft app to see how far away your driver is and you can see her car getting closer to your location, that's real-time data at work. Today, real-time data is regularly used for countless purposes, including critically important and sensitive applications like banking transactions.

Let's take a look at two real-time data use cases in a little more detail:

1. **Supply chain tracking**: Using a mobile app, BMW tracks and traces all parts, across all its supply chain partners, in real time. Data, such as part details, potential defects, photos, and videos, are collected via a mobile application at each inspection point in the supply chain. That data is immediately shared with all partners—creating trust and a common truth throughout the supply chain. [Read more about how BMW is benefitting from real-time data in its supply chain](https://www.vendia.com/bmw-case-study).
2. **Logistics and GPS tracking**: [Trucking companies can now track their fleets in real-time with up-to-the-second data](https://www.samsara.com/blog/7-ways-real-time-gps-tracking-helps-you-run-safer-fleets). By integrating GPS and other real-time data, such as engine fault codes and driving conditions, they can decrease theft, dispatch drivers, and provide customers with accurate ETAs, while improving the efficiency, safety, and reliability of their fleets.

## Is real-time data the same as operational data?

Typically, real-time data is also operational data, though operational data may not be real time. Confused? Let's take a closer look.

Operational data is appropriately named because it's naturally created as a by-product of an organization's day-to-day operations. Examples include, but aren't limited to customer, transactional, inventory, supplier, purchasing, contract, payment, and booking information.

So, it makes sense that most real-time data is generated by a company's normal operations, making it also operational data. However, operational data isn't necessarily real time because it isn't always made available to end users or other systems as soon as it's collected. Instead, operational data can first be stored, instead of shared, or never shared with end users at all.

### How is operational data stored and used?

Organizations typically store operational data in two types of systems: online data stores (ODS), also known as online transaction processing (OLTP) and online analytical processing (OLAP) systems. Once tucked away, the data can no longer be considered real-time.

#### ODS

As the name implies, operational data stores, or ODS, are high-volume, low-latency databases used for operational reporting, monitoring, transaction auditing, and decision making. These systems are designed to handle real-time, transactional operations and enable businesses to store, modify, manage, and access operational information, such as customer, employee, and sales data. They provide a home for operational data emanating from a wide range of sources, including ERP, CRM, and accounting software, along with legacy systems.

ODS can also be used to record transactions in an online transaction processing (OLTP) database. OLTP systems are relational databases built to handle real-time processing of massive amounts of transactions over the internet. They are designed to help frontline workers, like bank tellers and cashiers, quickly take care of relatively simple transactions. They also enable customers to handle many transactions for themselves, such as booking flights or hotels, e-commerce purchases, and online banking. With continuous backups, OLTPs enable 24/7/365 availability for large numbers of users to concurrently access the same information, while ensuring data integrity and supporting extremely fast, millisecond range, search and response times. So, it's no surprise that OLTP databases provide the foundation for most of our everyday internet transactions.

#### Online analytical processing (OLAP)

In contrast to OLTP, online analytical processing (OLAP) systems are designed for data scientists, analysts, and other knowledge workers to glean insights from large volumes of data. They support data mining, business intelligence, and other analytics applications, allowing users to conduct complex analytical calculations and perform high-speed multi-dimensional analysis that form the basis of informed data-driven decisions. OLAP can also power business reporting functions, such as sales forecasting, budgeting, and financial analysis.

#### OLTP and OLAP: Better together

When it comes to OLTP and OLAP systems, it doesn't have to be an "either/or" decision. To handle the complexity of today's data-driven world, most organizations use both OLTP and OLAP working in unison. For example, it's common for OLAP systems to analyze data originating from OLTP systems. And, in turn, after OLAP-powered analysis, recommendations for improvements to the OLTP systems could be made.

## Real-time vs. real-time analytical data

In contrast to real-time data, which is immediately delivered to end users, real-time analytical data is processed, queried, and analyzed as soon as it's available to extract meaningful insights that support business decisions or research. [Gartner defines real-time analytics](https://www.gartner.com/en/information-technology/glossary/real-time-analytics)as a discipline that applies logic and mathematics to data to provide insights for making better decisions quickly.

To be impactful, the insight, answer, recommendation, or alert provided by real-time analytics needs to be delivered fast, with little to no time lag. [In its definition, Gartner explains](https://www.gartner.com/en/information-technology/glossary/real-time-analytics) that, to be considered real time for some use cases, the analytics needs to be completed within a few seconds or minutes after the arrival of new data. Real-time analytics systems also need to be continuously available, while handling large volumes of data, originating from a variety of sources.

To support those requirements, real-time analytics need a system optimized for real-time data processing and high write rates. OLAP systems are a good fit. After all, a traditional, batch approach—which might take hours or even days—won't cut it. Without that lag, real-time analytics can provide insights almost as quickly as the events, interactions, and behaviors being collected are happening.

### Real-time analytics use cases

Almost every industry is leaning heavily on real-time analytics. While there are too many use cases to list here, some common examples include real-time credit scoring, customer relationship management (CRM), supply chain logistics, and financial trading. All require immediate analysis and responses.

Let's look at two ways it's being used in a little more detail:

#### E-commerce and personalization

E-commerce companies have learned that real-time personalized offers and recommendations lead to improved digital experiences for their customers and boosted sales for themselves. At any moment, a company can analyze its customer's data, previous interactions, current behavior, and more to modify the copy, images, promotions, and prices the customer sees on screen. Then, based on a combination of historical and current data, at checkout, customers can be presented with additional items that might make sense to add to their cart. Real-time analytics drive this ability to provide customers with the right information at just the right time.

#### Security risk monitoring and fraud detection

Real-time analytics are a crucial weapon in the ever-escalating war against hackers and fraudsters. Security breaches can be crippling for a company's bottom line and reputation. Customers can quickly lose trust and flee to a competitor. Luckily, real-time analysis of a large volume of historic and live data can be used to identify patterns and anomalies, so companies can be proactively alerted to potential risks and breaches. The monitoring is continuous and can include user profile, environment, geographic, and biometric data, as well as other data sources.

## Real-time data and streaming data

Streaming data is another aptly named technology. In this case "streaming" refers to a flow of data, from a variety of sources, that is continuously generated and delivered. Each data point represents an event that happened at a particular time. That's why streaming data is often called event data. Streaming data is typically used in OLTP systems. In these environments, real-time stream processing technology is used to store, process, analyze, and act upon incoming data streams, at the very moment they're created. This is in stark contrast to batch processing where these functions must be completed separately before data can be used.

### Learn how to extend the value of real-time data

We hope this helped unravel the subtle differences between real-time data, operational data, analytical data, and streaming data. While it comes in a few flavors, a couple of things are clear. First, real-time data is a key driver of success for modern organizations. Second, it's responsible for many of our daily conveniences. Whether it's real-time operational data driving e-commerce transactions or real-time analytical data that companies use to make their most important decisions, real-time data is the critical, irreplaceable element. 

#### Want to improve your data strategy and achieve both trust and speed with real-time data sharing, chain of custody, and reconciliation processes? Learn more about [Vendia Share](https://www.vendia.com/product) and book your [demo](https://meetings.hubspot.com/tim-zonca/contact-an-expert).
