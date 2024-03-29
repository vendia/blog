---
draft: false
title: 'Use cases for secure, ad-hoc data lakes with multi-cloud and multi-party file sharing'
description: 'Understand the sharing scenarios for multimedia and data-centric files across organizations, regions, and clouds in healthcare, automotive, semicon, and construction'
date: '2022-08-15'
categories:
- product
authors:
  - Tim Wagner
id: 'e1c17bd4-81cf-4012-8185-859d991fe37a'
---

Despite the many advances in databases over the years, both multimedia and data-centric files remain as one of IT architecture and business applications’ core building blocks. From spreadsheets encoded as CSVs to PDFs to analytics-optimized formats like Parquet and Iceberg, files in one form or another represent the largest percentage of storage across all company sizes, types, and sectors.

Yet, as central and critical as files are to operational business functions and applications, it’s still a challenging proposition to share files with business partners, across public clouds, or even among different departments with their own compliance and security requirements. For example:



* In nearly every industry, APIs are the dominant cross-company data sharing mechanism. But, often, APIs and files don’t play nicely together. 
* Public clouds provide a wide array of file-related features, but they seem to work just as hard at making cross-cloud file transfers challenging.
* Assurance programs are ubiquitous, yet it’s anything but simple to ensure that a file’s usage stays compliant and easy to track across departments.

By now, it seems these problems should be straightforward to resolve, yet they remain stubbornly difficult (and expensive) to achieve. But… 

_Ensuring that a collection of files containing business-critical information is consistently, correctly, and completely shared with other departments and business partners, remains a demanding, time consuming IT lift—especially when sharing spans different clouds and geographic regions._

CIOs and CDOs are concerned with the high cost of file sharing concerns, in part, because many teams and applications don’t have the staffing for full-scale distributed systems buildouts or custom data lake designs. Files remain the lowest common denominator of sharing, both inside and outside a company’s four walls. It’s the one mechanism that offers high throughput, real-time updates, flexible representation options, and (relatively) easy operations, all making it a natural way to share data.

But while “local” file actions are easily accomplished, problems arise when sharing at scale. It’s anything but straightforward to ensuring that thousands of individual files and directories are accurately and consistently materialized in different regions or in the IT stacks of different business partners while also ensuring adherence to compliance, security, and infosec programs. And while tools exist that can help a single owner, single account, single region, single cloud administrator, relatively few options exist when (as is so often the case) those files need to span different companies and clouds.


## File sharing examples and use cases

What kinds of sharing scenarios drive this need?


#### “Poor man’s data lakes”

Transmitting files over secure FTP (“sFTP”) is a common way for two or more different organizations to share (and eventually reconcile) mission-critical data. Files, especially large data files, offer a way to amortize the costs of data transmission by packing information about many transactions into a dense representation. Cross-department file sharing is often easier than deploying net-new databases, business logic compute layers, and APIs between departments (especially when they operate on different clouds). All of these roads lead to a “poor man’s data lake,” an evergreen repository of files that continuously changes and represents a mission critical resource for the company’s key business workflows.


#### Data centric workflows for a single source of truth

Supply and logistics chains along with financial transactions are examples of data-enriched multi-party workflows. Here, each participant maintains their own copy of the data (along with their own compute, storage, and internal data distribution networks). But each participant also requires establishing a single source of truth with other parties, whether inside or outside their organization. The status of a financial settlement, the availability of a manufacturing input, or the location of a finished product are just some of the details that businesses need to exchange reliably and repeatedly with one another.


#### Media distribution

Files often contain sensitive intellectual property. Business contracts, blueprints, designs, inventory, and invoices are just some of the types of information frequently shared among business partners or across departments. Ensuring that these files are correctly, consistently shared and versioned can mean the difference between successful and failed business outcomes.


#### Manual/Automation interface boundaries

“Human-readable” file content, such as PDFs and spreadsheets (i.e., CSVs and related formats) are also important. They frequently serve as boundaries between manual activities, such as operators entering or reviewing data and machines performing automated activities. This is even more true when files are shared across different parties because the level of workflow automation can vary considerably from company to company, department to department, even from employee to employee depending on their job functions. For example, a truck driver delivering goods may employ a mobile app or actual paperwork while other upstream or downstream partners in the supply and logistics chain represent the same transaction as a row in a database.

File sharing scenarios like the ones above manifest in a wide variety of industries and across every size and shape of company. 

Here are just a few examples:



* **Design and construction: **Blueprints, construction designs, working models, planning documents, permits…from early stage architecture through post construction maintenance, modern commercial design and construction is a data- and document-rich exercise. Using (or sharing) the wrong version of a document can lead to delays and cost millions in avoidable mistakes.
* **Semiconductors: **From wafer layout to multiple layers of testing to eventual supply and distribution concerns, semiconductors are on the other end of the size scale from commercial building construction. Yet, they have many of the same challenges when it comes to selectively sharing sensitive information with partners, suppliers, and customers throughout a chip’s lifecycle from silicon to eventual manufacturing use. For example, to ensure the security and integrity of the eventual outcom, it’s key to share correct information on test results accurately and only with the desired set of recipients.
* **Healthcare and life sciences: **Everyone is familiar with the challenges of, and rationale for, ensuring the privacy, accuracy, and completeness of patient records. But sharing and maintaining information on medical devices, drug testing, physician training, and hospital staffing is equally critical to a healthy population. But, the sharing and maintenance often ends up depending on the ability to share, version, and validate files on a wide variety of IT systems, different applications, and one or more public clouds.
* **Automotive: **Every discrete and continuous manufacturing workflow depends on upstream supply chains and downstream distribution networks to function correctly. The automotive sector is a particular case in point: Getting a chassis from manufacturing in one country to a transport provider and, eventually, to a finished car plant in another country is a challenging proposition (without even accounting for the potential for damage). Automating damage assignment requires an immutable, shared source of truth in “before and after” images at each transition along the way…all represented as some form of shared files with integrity checks and balances.


## Keep reading

Learn more about real-time data sharing [use cases](https://www.vendia.com/use-cases) for your industry, or imagine what’s possible for your organization when you review some of our case studies:

[BMW and Rolls Royce accelerate car delivery at lower costs with Vendia Share](https://www.vendia.com/case-studies/bmw)

The world’s leading manufacturer of premium automobiles and motorcycles provides transparency across the supply chain—reducing overall costs, and continuously improving the end-to-end build process.

[Slalom eliminates the overhead costs of building blockchain implementations with Vendia Share](https://www.vendia.com/case-studies/slalom)

The modern strategy, technology, and business transformation consulting firm accelerates multi-party and supply chain solution delivery for its clients.

[Atos streamlines reinsurance process and builds trust among partners with Vendia Share](https://8766854.fs1.hubspotusercontent-na1.net/hubfs/8766854/Case%20studies/Atos%20Case%20study.pdf) 

IT consulting giant, Atos, creates a single source of truth across reinsurance partners with low code development and distributed ledger design.
