---
title: 'Real-time data sharing: pros and cons'
description: 'Real-time data sharing enables faster, more comprehensive, and more collaborative data systems. But it comes with challenges. Let’s look at the pros and cons.'
date: '2022-06-07'
authors:
  - Anders Maul
---

# Real Time Data Sharing: Pros and Cons

As the world of commerce moves increasingly faster, the demand for real-time data is on the rise. We have talked about the difference [between analytical and operational data](https://www.vendia.net/blog/real-time-vs-analytical-data) before. This blog will dive into the operational data that tends to be more urgent in nature and how you as a CTO, CIO, or CDO determine what data you should enable your organization with in real-time, what data is best suited for real-time data sharing, and what are the pros and cons of real-time data sharing.


## What is real-time data sharing?  

Real-time data sharing is the instant sharing of time-sensitive, operational, business critical, and valuable data, with internal or external parties. This is a contrast to analytical data which is often collected and queued for batch processing and leads to data being hours or days old. Real-time data is processed immediately for every single event that takes place and ensures you always have the latest insights. 

For example, let's examine a product moving through a supply chain. As the product is handed off to the next step in the process and the data surrounding it is updated, it is extremely valuable for everyone involved to be able to know the status of the product at all times. This allows each participating party to mitigate errors, plan ahead, justify payments, and increase productivity and efficiency at every stage of the journey. 

Examples of multi-party journeys that benefit from real-time data sharing and traceability are manufacturing, supply chain, airline travel, and the loan servicing industry, to mention a few.  


### Common use cases for real-time data sharing

Whether it is a part making its way through the supply chain, a passenger boarding a plane, or a mortgage application being processed, every party needs to have full visibility into the entirety of the journey in order for real-time data sharing to be valuable. It is a delicate balance of sharing just enough information with partners without sharing proprietary or sensitive information, and in doing so making everyone better off.

Real-time data is most relevant in cases where data is updated on a relatively frequent basis. This is common when the record about an important entity – like a customer, a product, or a part –  takes a journey and interacts with multiple parties along said journey. A common denominator for most real-time data sharing projects is that multiple parties need to be able to track current and past status of those records, and be certain of their accuracy, provenance, and lineage. 

In order for this to happen, all parties should have access to at least four insights for a given object: 

* timestamp (date + time)
* object ID (unique identifier)
* status (ownership, location, responsible party)
* value (amount, cost, price, count)

Here are a few use case examples: 


### Mortgage Servicing

While a mortgage payment may look like a simple payment from property owner to lender, every payment kicks off a range of tasks behind the scenes. The lender not only has to reconcile the new status of debt and interest payments, they also have to ensure property taxes and insurance are paid to the right parties. Additionally, the loan and associated risk and payments might actually be co-owned by multiple parties as part of a securities bundle.  

For these reasons, it is crucial that every transaction is relying on the latest information across the entire journey, from the latest property tax liability, to the latest balances, and current owners of the mortgage — all of which change on a regular basis. Now multiply the complexity with thousands of properties, loan terms, lenders, and mortgage security owners and you have a highly complex system. Without real-time data sharing, reconciliation requires weeks and months of, at times manual, work across disjointed systems. 

Real-time data sharing removes delays and reduces errors associated with highly disjointed and manual processes. In addition, it opens up for entirely new benefits such as the ability for portfolio owners to get a real-time view of risk exposure and cash flow movements.   


### Product Tracking for Car Manufacturers

Most product sales depend on multiple parties as the product moves through the manufacturing and delivery process. At every handoff there is a change in liability and ownership, which kicks off the need for journey specific tasks to take place. 

In the case of a car manufacturer who relies heavily on just-in-time inventory management, it is highly valuable to know the status of every car component needed to build the car and deliver the finished product to the dealership and the customer. If anything goes wrong in the process, say a shipment gets stuck in the Suez Canal, the company instantly knows to draw up a plan B in order to mitigate or minimize any delivery delays of the final product. Furthermore, real-time data sharing across each of the parties in the manufacturing supply chain can also create an ongoing log, so in the unfortunate event that e.g. a recall is happening or a fault is discovered at a later stage, it is possible to trace the product journey and identify the point in time where the failure occurred. This is particularly useful in the case of warranty tracking, where specific product elements will have to be tracked across many customers, across a long timeline, and back through the entire supply chain to determine which supplier is liable for which product deficiency based on individual supplier contracts and terms. 


## The pros of real-time data sharing

There are some general benefits of real-time data sharing that ring true across many use cases including: 



1. **Timely insights**

Data and information that arrives too late is not worth much. Real-time data sharing ensures you have all the right information readily available as early as possible. Having insights into the status of a product, customer, or component no matter where they are in the journey allows for faster response times and can even ultimately lead to predictive analytics.  



2. **More efficient processes**

With timely insights you also enable the ability to more easily identify opportunities for efficiency gains. Many processes that cross company boundaries still rely on a degree of manual work. With real-time data sharing across organizations, there is both an opportunity for automating tasks and for identifying bottlenecks or inefficiencies that can speed up the process for all parties.  



3. **Better partnerships**

Partners often rely on having a trusted, single source of the truth that they align around as they work together. Those that do this well are successful, profitable, and stay together. By integrating deeper with your partners’ data around a shared truth, you can start thinking through the journey holistically instead of in bite sizes. This leads to a better understanding of your partners and their challenges, it removes distrust in the business relationship, and ensures everyone is aware of their responsibilities and maximizes their profit. 


## The cons of real-time data sharing

Anyone who works with data knows that volume and speed requirements play a big part in how time-consuming, difficult, and expensive it is to build and maintain the infrastructure supporting it. Here are some of the cons of real-time data sharing:



1. **Time consuming and complex to build**

    True real-time data sharing can be extremely hard to design, build, and implement across multiple partners. While point-to-point APIs between two partners is somewhat straightforward, when multiple parties get involved, the challenges grow exponentially, which makes it time-consuming and costly to build. 


2. **Difficult to create a shared and trusted source of truth**

    Creating a single source of truth that all parties trust is no straight-forward task. In order for this to happen, all partners will need the ability to view and audit all data without the ability to alter the data itself. This demands a highly complex solution that not only reconciles all incoming data in real time to determine what’s truly the latest, it also requires strict data governance and logging of every transaction and change ever taken place.   


3. **Expensive to build and maintain**

    In order for real-time data to work, your system needs to have high availability of at least 99.99% of the time to ensure all data is truly up to date at all times. Building a system that is redundant, resilient, secure, and scalable, can be extremely costly and time-consuming to build and maintain in-house.



## How Vendia streamlines real-time data sharing

Vendia has built a real-time data-sharing platform that gives you all the benefits of real-time data sharing without all the headaches. Vendia has designed a platform that brings all data sharing parties together around a single source of truth that is updated in real-time.

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


### Bring real-time data sharing to your organization

If you are ready to explore how real-time data sharing might help accelerate your business, you can request a free Proof of Concept of Vendia. Request a POC and get four free hours with one of our experienced solutions architects.

In just five days you will get a working application that demonstrates proof-of-value including: Multi-party sharing, easy partner invitations, a resilient global serverless architecture with no operational overhead, and fine-grained data access controls — Everything you need to reap all the benefits of real-time data sharing.  

Request a POC at [vendia.net/poc](https://www.vendia.net/poc) today. 
