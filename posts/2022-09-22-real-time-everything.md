---
draft: false
title: 'Real-time “everything” with operational and analytics data'
description: 'Break down the walls between operational and analytics for real-time data sharing, starting with a shared love language to translate between JSON and SQL.'
date: '2022-09-22'
categories:
- architecture
- concepts
- tutorials
- product
authors:
  - Francine Klein
id: '85b3ceb0-c492-404c-80a2-a0c819ce4f7c'
---

In the data world, nothing is as enticing as real-time everything:

* Real-time operational data
* Real-time analytics data 
* Real-time data sharing

They’re often talked about, and more importantly, implemented, separately. But, what if they weren’t? 

What if the worlds of operational data, analytics, and data sharing were (1) merged and (2) updated real-time with a unified version of the truth? 


### The art of the possible

**Real-time operational data** is the ability for data to flow between [business applications](https://www.vendia.com/product#universal-apps) for seamless business workflows. For example, real-time operational data enables customers to receive shipping confirmations immediately after placing an order.

**Real-time analytics** is the ability to have timely insights after operational activities happen. But, it’s often narrowly scoped to presenting targeted insights embedded, real-time, in operational processes for a singularly-focused question. These insights are not calculated real-time as a common setup for data warehouses is to sync operational data overnight, perform transformations and deduplication, and _then_ calculate the insights. Because of this, these insights are often one to two days lagging behind “truthful” data. Moreover, incorporating these calculated insights back into the operational process requires building customized data integrations, yet still they can only answer the question at-hand.

For example, real-time analytics enables personalized product recommendations while buyers are viewing products. It may also incorporate summarized customer support history, providing the sales team with visibility to customer health during cross-sell opportunities. 

So, what would it mean for these analytics and operational data worlds to merge? 

* It means there can be an accurate, trusted, and versioned customer list available in real-time for any scenario where it might be needed.
* It means insights can be timely, not lagging 24-48 hours behind the real story, and insights can be more effectively and widely embedded in operational business workflows.
* It means the many (many) data integration paths and layers to sync data (and re-sync data), match customers, deduplicate, and recalculate core attributes can be stripped away
* It means the dividing walls between operational and analytics data usage — and the delays those walls create — can begin to disappear.

As lofty as this is, it isn’t that far fetched. But, because we’re realists, we’ll start with an appreciation for the complexity in bringing the worlds of operational and analytics together. Then, we’ll get real about what real-time data really is. (Hint: We start with language).


### The complexities of operational and analytics data sharing

Analytics and [operational data](https://www.vendia.com/blog/what-is-operational-data-sharing) solutions all use data, all store data, and all move data. So, why have these functions been so separate to-date?

We’ll use the people-process-technology triangle as a framework to break down the divergent complexities between operational and analytical data. A picture is worth 1,000 words; a table, maybe 500. Let’s go with that.


**TABLE 1: Unpacking the variation between operational data and analytics using the people-process-technology framework**

<table>
  <tr>
    <td></td>
    <td><strong>Operational</strong></td>
    <td><strong>Analytics</strong></td>
  </tr>
  <tr>
    <td><strong>People</strong></td>
    <td>
      <ul>
        <li>Technical skills with application development, APIs, and micro services</li>
        <li>Business analysis design oriented around enabling business workflows</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Technical skills with data development and (mostly) declarative language development</li>
        <li>Business analysis design oriented around data derivations, aggregations, and calculations</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Process</strong></td>
    <td>
      <ul>
        <li>Design business workflows across applications and experiences</li>
        <li>Enable day-to-day operations</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Design cross-department insights to uncover trends</li>
        <li>Enable prescriptive and predictive insights</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><strong>Technology</strong></td>
    <td>
      <ul>
        <li>Semi-structured data in objects of nested key-value pairs</li>
        <li>Often in JSON or in SQL abstractions (e.g., ORMs)</li>
        <li>Often in key-value, Graph, Document, or OLTP data stores</li>
        <li>Access pattern targeted to full rows of data</li>
        <li>Optimized for single record read and write of all attributes</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Structured data in tables of rows and columns</li>
        <li>Often indirect, complex SQL language</li>
        <li>Often in OLAP data stores</li>
        <li>Access pattern targeted to columns of data</li>
        <li>Optimized for multi-record read and write of single columns</li>
      </ul>
    </td>
  </tr>
</table>

It’s not just the use cases for operational and analytics data that are disparate, it’s also…

* The platforms beneath them
* The data moving tools they leverage
* The type of data they use
* The skills of the people designing and building these systems
* The language the data resides in

What _is_ truly the same across these worlds are the data entities they leverage: For example, the Customer, Product, Person. This data is needed across all the disparate operational and analytical systems. To-date, to solve this, either a spider-web of integrations is built to cross-sync data, or spot-solutions are developed to answer a targeted set of questions.Those approaches leave a disproportionate amount of code to operate and maintain for the value they provide. Over time, those custom approaches take away valuable cycles from development teams on either side of the operational and analytical divide.

Point made: It’s overly complex. But merging these two worlds with real-time data is more attainable than ever before. 

To get real with enabling real-time, we’ll zoom into the technology pillar, particularly, the language of writing data: JSON vs SQL.


### To merge both worlds, start with speaking the same language

There’s no argument that the way data is stored has been optimized for the necessary access-pattern: Keep operational data in JSON and analytics data in SQL. 

But JSON and SQL _can_ now communicate better; they’ve found their love language. 

> Many data storage solutions can now parse JSON using dot-notation and flatten functions, turning the key-value pairs into distinct rows. This is the immediate translation that transforms JSON into SQL. 

However, anyone who has used Google Translate with idioms can attest, more than straight-forward mappings are needed. (Otherwise, we’re left perplexed on why someone might be [chewing fat](https://www.theidioms.com/chew-the-fat/).) To be fluent in both, we must add in a metadata mapping of a JSON schema to an analytics-minded star schema. This creates a dynamic interpretation of key-value pairs into insight-enabling facts and dimensions. 

Let’s do a quick example of this fluent translation: with a dimension attribute in JSON, use of a flattener translation, and SQL [DDL](https://en.wikipedia.org/wiki/Data_definition_language) to create a dimension:

JSON structured object, with the airline attribute `coupon.AirlineDesignator` as the target for the SQL dimension.

```json
{ "$schema": "https://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "Ticket": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "passengerNameRecordCode": {
            "type": "string",
            "description": "A unique passenger record",
            "pattern": "[A-Z0-9]{6}"
          },
          "airlineCode": {
            "type": "string",
            "description": "The 2-letter code of the airline",
            "pattern": "[A-Z]{2}"
          },
          "coupons": {
            "description": "A list of coupons related to each leg of travel",
            "type": "array",
            "items": {
              "description": "Information related to a coupon",
              "type": "object",
              "properties": {
                "AirlineDesignator": {
                  "description": "The 2-letter code identifying the carrier for each coupon",
                  "type": "string",
                  "minLength": 1
                } 
              }            
            }
          }
        }
      }
    }
  }
}
```

JSON to SQL flattener that parses the value intended for the `D_AIRLINE` dimension and creates the SQL table

```sql
CREATE TABLE D_AIRLINE as (
  SELECT DISTINCT 
  C.value:AirlineDesignator::varchar(255) AIRLINE_CODE
  FROM  ticket_object T,
  lateral flatten(outer => true, input => ticket_object:coupons)  C
);
```

That’s it. Once the dimensions and facts are identified as metadata, the language translation can fall into place. The world is your oyster in how analytics-driven insights and timely business operational data can coexist, both unlocking seamless customer experiences and reducing the need to maintain layers of spider-web integration code. Your operational and analytics data worlds can combine, empowering you with the ability to automate and accelerate data workflows across your business networks.


### Let’s make it real

A real-time data platform must leverage the best-of-breed solutions behind the operational and analytics workflows while minimizing the stops-and-starts between them. By building on the power of [Vendia Share](https://vendia.com/product), coupled with the data solutions that clearly used Duolingo for JSON, a real-time data platform is a real-time possibility.

As an example, let’s look at a data sharing scenario where [airlines share ticket data across their business network](https://github.com/vendia/examples/tree/main/demos/travel-and-hospitality/alliance-ticket-sharing). In addition to operational sharing, they now want real-time analytics off this data — including only the data explicitly shared with them. This real-time platform is created by leveraging Vendia Share, an analytics-focused data warehouse that speaks JSON and query-on-demand dashboard solution. _See Figure 1._

**FIGURE 1: Vendia Share for real-time operational and analytics data sharing**
![Diagram showing sample architecture of data sharing coupled with real-time operational data and analytics solutions](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..105127677..191390386-613a438e-1c5a-45b2-9814-189d0bfdb900.png "Sample architecture of data sharing coupled with real-time operational data and analytics solutions")

* With Vendia, data can be shared, with control, across the entire business network.
* With a distinct, isolated, real-time streaming warehouse, the shared data is unlocked for analytics while maintaining the sharing rules already applied upfront.
* With a dashboarding solution that queries directly against data stores, the insights remain current with the latest loaded and transformed data. No more lag time.


### Become a real-time convert

Real-time operational and analytics worlds can collide, and with that, unlock a new sense of data fluidity both within company walls and across business alliances.

* Learn more about Vendia: Check out our [use cases](https://www.vendia.com/use-cases) and try out [Vendia Share](http://share.vendia.net/).
* Reach out to build a real-time [proof of concept in 1 week](https://www.vendia.com/poc).

Meanwhile, if you have real thoughts on real-time data, we’d love to hear from you in our [guest contributor program](https://www.vendia.com/blog/vendia-guest-contributor-program). And join our community committed to real talk on real-time data sharing with our new podcast, [Circles of Trust](https://vendia.com/resources/circles-of-trust).
