---
draft: false
title: "Real-time data sharing: Pros and cons"
description: Real-time data sharing enables faster, more comprehensive, and more
  collaborative data systems. But it's distinct challenges have been hard to
  solve for — until now.
date: 2022-06-07
authors:
  - Anders Maul
categories:
  - concepts
relatedPosts:
  - 2022-02-24-b2b-data-sharing
  - 2022-05-02-what-is-real-time-data-sharing
  - 2022-09-22-real-time-everything
tags:
  - use cases
thumbnail: https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1674599116/Website/Iso/Connected_ygfber.png
seo:
  title: "Real-time data sharing: Pros and cons"
  description: Real-time data sharing enables faster, more comprehensive, and more
    collaborative data systems. But it's distinct challenges have been hard to
    solve for — until now.
createdBy: alexa-vendia
createdAt: 2023-03-30T23:01:15.250Z
updatedBy: alexa-vendia
updatedAt: 2023-03-30T23:01:15.250Z
id: be3be101-2a20-4780-afd0-16d6f82cbb0f
---

As the world of commerce moves increasingly faster, the demand for real-time data is on the rise. We have talked about the difference [between analytical and operational data](https://www.vendia.com/blog/real-time-vs-analytical-data) before. This blog will dive into the operational data that tends to be more urgent in nature and how you as a CTO, CIO, or CDO determine what data you should enable your organization with in real-time, what data is best suited for real-time data sharing, and what are the pros and cons of real-time data sharing.

### Operational vs. analytical data sharing

Real-time data sharing is the instant sharing of time-sensitive, operational, business-critical, and valuable data with internal or external parties. This is a contrast to analytical data, which is often collected and queued for batch processing and leads to data being hours or days old. Real-time data is processed immediately for every single event that takes place and ensures you always have the latest insights. 

For example, let's examine a product moving through a supply chain. As the product is handed off to the next step in the process and the data surrounding it is updated, it is extremely valuable for everyone involved to be able to know the status of the product at all times. This allows each participating party to mitigate errors, plan ahead, justify payments, and increase productivity and efficiency at every stage of the journey. 

Examples of multi-party journeys that benefit from real-time data sharing and traceability are manufacturing, supply chain, airline travel, and the loan servicing industry, to mention a few.  

## Common use cases for real-time data sharing

Whether it is a part making its way through the supply chain, a passenger boarding a plane, or a mortgage application being processed, every party needs to have full visibility into the entirety of the journey in order for real-time data sharing to be valuable. It is a delicate balance of sharing just enough information with partners without sharing proprietary or sensitive information, and in doing so making everyone better off.

Real-time data is most relevant in cases where data is updated on a relatively frequent basis. This is common when the record about an important entity – like a customer, a product, or a part –  takes a journey and interacts with multiple parties along said journey. A common denominator for most real-time data sharing projects is that multiple parties need to be able to track current and past status of those records, and be certain of their accuracy, provenance, and lineage. 

In order for this to happen, all parties should have access to at least four insights for a given object: 

- timestamp (date + time)
- object ID (unique identifier)
- status (ownership, location, responsible party)
- value (amount, cost, price, count)

### Real-time data sharing use case – Mortgage servicing

While a mortgage payment may look like a simple payment from property owner to lender, every payment kicks off a range of tasks behind the scenes. The lender not only has to reconcile the new status of debt and interest payments, they also have to ensure property taxes and insurance are paid to the right parties. Additionally, the loan and associated risk and payments might actually be co-owned by multiple parties as part of a securities bundle.  

For these reasons, it is crucial that every transaction is relying on the latest information across the entire journey, from the latest property tax liability, to the latest balances, and current owners of the mortgage — all of which change on a regular basis. Now multiply the complexity with thousands of properties, loan terms, lenders, and mortgage security owners and you have a highly complex system. Without real-time data sharing, reconciliation requires weeks or months of, at times manual, work across disjointed systems. 

Real-time data sharing removes delays and reduces errors associated with highly disjointed and manual processes. In addition, it opens up for entirely new benefits such as the ability for portfolio owners to get a real-time view of risk exposure and cash flow movements.   

### Real-time data sharing use case – Product tracking for car manufacturers

Most product sales depend on multiple parties as the product moves through the manufacturing and delivery process. At every handoff there is a change in liability and ownership, which kicks off the need for journey specific tasks to take place. 

In the case of a car manufacturer who relies heavily on just-in-time inventory management, it is highly valuable to know the status of every car component needed to build the car and deliver the finished product to the dealership and the customer. If anything goes wrong in the process, say a shipment gets stuck in the Suez Canal, the company instantly knows to draw up a plan B in order to mitigate or minimize any delivery delays of the final product. Furthermore, real-time data sharing across each of the parties in the manufacturing supply chain can also create an ongoing log, so in the unfortunate event that e.g. a recall is happening or a fault is discovered at a later stage, it is possible to trace the product journey and identify the point in time where the failure occurred. This is particularly useful in the case of warranty tracking, where specific product elements will have to be tracked across many customers, across a long timeline, and back through the entire supply chain to determine which supplier is liable for which product deficiency based on individual supplier contracts and terms. 

## Business advantages of real-time data sharing

There are some general benefits of real-time data sharing that ring true across many use cases, including timely insights that can lead to process efficiencies and trusted partnerships. 

- **Timely insights** – Data and information that arrives too late or out of date is not worth much. Having insights into the actual status of a product, part, shipment, or customer experience everywhere (that's appropriate) in the journey allows for faster response times and can support predictive analytics.  
- **More efficient processes** – Many processes that cross company boundaries still rely on a degree of manual work. With real-time data sharing across organizations, there is both an opportunity for automating tasks and for identifying bottlenecks or inefficiencies that can speed up the process for all parties.  
- **Better partnerships** – Partners often wish for a trusted, single source of the truth they can align around. [Partners who achieve this](https://www.vendia.com/blog/atos-success-story) are more profitable and secure brand loyalty. 

## The challenges of B2B real-time data sharing

Anyone who works with data knows that volume and speed requirements play a big part in how time-consuming, difficult, and expensive it is to build and maintain the infrastructure supporting it. 

Here are some of the challenges of real-time data sharing as a process and a solution:

1. **Time-consuming and complex to build**

   True real-time data sharing can be extremely hard to design, build, and implement across multiple partners. Managing point-to-point APIs between two partners is somewhat straightforward. The challenges grow exponentially when three or more parties get involved. The solution is time-consuming and costly to build. 
2. **Difficult to create a shared and trusted source of truth**

   Creating a single source of truth that all parties trust is no straight-forward task. In order for this to happen, all partners will need the ability to view and audit all data without the ability to alter the data itself. This demands a highly complex solution that not only reconciles all incoming data in real time to determine what’s truly the latest, it also requires strict data governance and logging of every transaction and change ever taken place.   
3. **Expensive to build and maintain**

   In order for real-time data to work, your system needs to have high availability of at least 99.99% of the time to ensure all data is truly up to date at all times. Building a system that is redundant, resilient, secure, and scalable, can be extremely costly and time-consuming to build and maintain in-house.

## How Vendia Share streamlines multi-partner B2B real-time data sharing

[Vendia Share](https://www.vendia.com/product) is a real-time data-sharing platform that brings all permissioned data sharing parties together around a single source of truth that is updated in real-time.

**Easy integration through a single access point**

Every partner gets an access point (a node) to the Vendia Share platform, with access to their own copy of the latest data across the data-sharing partnership. Every partner can easily connect their on-premise or cloud systems to Vendia without a need to build or maintain multiple API connection points. Partners can be up and running in a matter of days. 

**Indisputable, single source of truth**  

Vendia automatically reconciles data at all times, to ensure only the latest data appears on everyone’s ledger. Every transaction and change is recorded on everyone’s ledger at the same time, giving everyone visibility of current and past states. This allows full visibility for everyone and even makes it possible to audit prior transactions to settle disputes or gain other insights.  

**Secure data exchange** 

Vendia is designed in such a way that you can refine and tightly control exactly what you share (and don’t share) so you only exchange the data that is relevant to other partners, without the risk of sharing intellectual property or sensitive data. Furthermore the platform is in the final stages of proving SOC2 certification. 

**Powered by the cloud**

Unlike on-premise solutions or public blockchain platforms, Vendia’s enterprise blockchain platform is powered by the cloud and delivered as a serverless SaaS. This means that virtually infinite computing and scale is available on-demand with the majority of costs based on capacity used.   

**Faster innovation**

Vendia’s platform spins up in minutes, and connects partners with ease, without the need for ongoing maintenance. This allows you to focus on what matters to your company, your partners, and your customers.

### Bring real-time data sharing to your organization with Vendia Share

If you are ready to explore how real-time data sharing might help accelerate your business, request a five-day [proof of concept](https://www.vendia.com/poc) and get get four free hours with one of our experienced solutions architects.

You'll get a working application that demonstrates proof-of-value, including multi-party sharing, easy partner invitations, a resilient global serverless architecture with no operational overhead, and fine-grained data access controls.

Or chat with our [account solutions](https://meetings.hubspot.com/aashish3/contact-sales?__hstc=75205645.1160c84f545be08f626a93070ce6dd38.1666288324341.1680201573586.1680206840954.309&__hssc=75205645.7.1680206840954&__hsfp=2723294759) team to explore potential use cases for your organization.