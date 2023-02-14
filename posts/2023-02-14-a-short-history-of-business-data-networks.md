---
draft: true
title: A short history of business data networks
description: Learn how data sharing has evolved and how business and technology
  leaders can scale and optimize their data networks today and for the future
date: 2023-02-14
authors:
  - Tim Wagner
categories:
  - thought-leadership
relatedPosts:
  - 2022-09-15-api-design-best-practices
  - 2022-07-29-why-blockchains-databases-api-cannot-standalone-as-it-solutions
  - 2022-09-22-real-time-everything
tags:
  - Tim Wagner
  - Data network
  - SFTP
  - MFT
  - EDI
  - public cloud
  - cloud
  - supercloud
  - AWS
  - Azure
  - Amazon S3
  - GDPR
  - CCPA
  - CPRA/Prop 24
seo:
  noindex: false
  title: A short history of business data networks
  description: Learn how data sharing has evolved and how business and technology
    leaders can scale and optimize their data networks today and for the future
  keywords: history of business data networks
sidebarCta:
  - The Future of APIs
createdBy: ""
createdAt: ""
updatedBy: alexa-vendia
updatedAt: 2023-02-14T20:06:12.517Z
id: a33cef80-ad0f-46bc-b1b6-26ebefcd21d2
---

Most business-critical data now lives [outside](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/harnessing-the-power-of-external-data) a company’s four walls, even while it remains very much inside the company’s legal, regulatory, and business responsibilities. As a result, the most important data infrastructure a company manages today isn’t server racks or even databases; it’s the company’s business data network.

<BlockQuote text="The most important data infrastructure a company manages today is its business data network." />

## Business data networks through time

Data networks aren’t new. [The Roman Empire](https://www.scmglobe.com/supply-chains-roman-empire/) (Figure 1) was coordinating far-flung supply chains with growing populations long before [Charles Babbage and Ada Lovelace](https://www.youtube.com/watch?v=aLfI3Ox8J6Q) created the first computer. 

###### Figure 1: Part of the Roman Empire’s supply chain, circa [146 B.C. - 439 A.D.](https://www.historyhit.com/the-marvel-of-north-africa-during-roman-times/)

<img src="https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1676402955/Blog%20images/Roman_Empire_supply_chain_xwhyvj.png" alt="A map of the Mediterranean region showing an olive oil supply chain originating from seven cities in North Africa and delivering to the City of Rome" class="image-float-left" />

###### This supply chain moved olive oil, wheat, and dates from provinces in Roman North Africa (now Tunisia and Libya) across the Tyrrhenian Sea in the Mediterranean to supply the City of Rome (Image source: [scmglobe.com](https://www.scmglobe.com/supply-chains-roman-empire/))

But over the last 50 years, improvements in both communication and automation technologies have driven efficiency gains among partner data networks. Some of these foundational technologies are still in use today.

\####1. File transfer technologies – SFTP/MFT

Most business data sharing between companies (and often even within companies) still happens through files. While they lack many of the fine-grained capabilities of a database, files remain a critical piece of the data sharing puzzle. File sharings remains critical primarily because they are a dense, compartmentalized source and conduit of information. These characteristics enable files to easily transmit complex details — like a spreadsheet representing a company’s cash flow — in a single, simple, consistent package. Files facilitate human-to-machine communication. But they also work well for machine-to-machine workflows, where [secure file transfer protocol](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) (SFTP) and [managed file transfer](https://en.wikipedia.org/wiki/Managed_file_transfer) (MFT) remain important cornerstone technologies for intra- and inter-company data transfer despite the age of these approaches.

<BlockQuote text="Most SFTP/MFT-based architectures are locked out of real-time data sharing." />

However, the denseness of file content has a downside: it requires processing a lot of data, and most companies can only afford to share the files infrequently due to the time, people, and infrastructure costs associated with the “bulk” processing that follows. Turning a “once-a-day” file transfer and its accompanying workflows into a “10 times a second” mechanism is rarely possible, making file-based transfer a poor choice for any type of data powering web and mobile applications.

This gap leaves most SFTP/MFT-based architectures locked out of real-time data sharing. It also makes it difficult for companies dependent on files as a data sharing mechanism to respond to fast-changing conditions or deliver better customer experiences that require up-to-date or fully consistent information.

#### 2. Business protocol connections – EDI and APIs

To get closer to exchanging real-time information, businesses also use APIs, with the [EDI protocol](https://www.ibm.com/topics/edi-electronic-data-interchange#:~:text=EDI%20resources-,What%20is%20EDI%3F,as%20purchase%20orders%20or%20invoices.) being one of the oldest (it’s so old, it predates the Internet by [decades](https://blogs.opentext.com/edi-50-years-old-getting-stronger/)). The premise behind EDI (and more modern B2B APIs) is to create a real-time conduit between businesses. Rather than relying on an overnight or periodic batch transfer based on files that could be out of date by the next day, EDI and API technology makes it possible to exchange information as it changes or when needed. 

In addition to its aging protocol and format concerns, EDI shares a weakness with its more modern API counterparts.

<BlockQuote text="EDI and API-based approaches leave companies continuously uncertain about the accuracy, provenance, and compliance of the data shared." />

EDI focuses on the uninteresting problem of “moving bits” rather than the more important problem of keeping those bits of information consistent, correct, and up to date across the various data sharing partners. 

For example, suppose a supplier is running low on inventory. In that case, it may tell one manufacturer that it has 10 units left. By the time that manufacturer does something with the information, the supply has dropped to 0 because another manufacturer took the remaining inventory. 

With no way to keep data synchronized or auditable, EDI and API-based approaches leave companies continuously uncertain about the accuracy, provenance, and compliance of the data shared.

#### 3. Manual approaches

It’s a mistake to assume that all inter-company data sharing lives under IT’s control. In fact, knowledge workers and other employees still share a surprisingly large percentage of [mission-critical data](https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/IE_CFO_guide_data_management_strategy.pdf) using manual, ad-hoc mechanisms like email, [Dropbox](https://www.dropbox.com/), [Google Drive](https://drive.google.com/), [OneDrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage), etc. This is especially true for remediation and customer support teams tasked with resolving inconsistencies or missing information in shared data, such as accounting problems, inventory snafus, travel and loyalty program escalations, and more. 

- In the absence of consistent and up-to-date data sharing, expensive and time-consuming manual “data fix-up” processes are often required.
- Unfortunately, manual data sharing and manual intervention often add to the problem with their inherent error rates and human toil-induced time delays. 
- Manual data sharing outside IT’s purview is also a source of concern on other fronts, as it’s easy to evade corporate data sharing rules that can affect a company’s security, compliance stance, and audit results.

#### 4. The public cloud

Before the public cloud, many data sharing problems focused on solving what was essentially a communication challenge — moving bits. Before ~2010, most corporate data was locked up in independently-owned, on-premise data centers.

<BlockQuote text="The public cloud also had a powerful long-term impact that transcends operating margins — the co-locality of data and systems belonging to different companies." />

## The public cloud’s impact on data sharing

Getting data out of one company’s mainframes, servers, and databases and into another company's mainframes, servers, and databases was, in and of itself, a huge (sometimes insurmountable) problem. The problem led to today’s corporate reliance on protocols like [SFTP](https://www.techopedia.com/definition/1879/secure-file-transfer-protocol-sftp) and [EDI](https://www.techopedia.com/definition/1496/electronic-data-interchange-edi). Even when the data could be readily shared and used on both sides, building the bridge to convey it between two companies (let alone among dozens or hundreds of partners) was also often a huge IT project. 

While much has been written about the public cloud’s economic advantages, it has also had a powerful long-term impact that transcends operating margins — the co-locality of data and systems belonging to different companies. 

Suddenly, instead of two different databases in two different on-premise data centers managed by two different companies, enterprises found themselves residents in the same public cloud (typically AWS or Azure). Sometimes they even found themselves in the same region of the same cloud. In those cases, sharing data in a service (such as [Amazon S3](https://aws.amazon.com/s3/)) became as simple as setting a line in a resource policy to add another company’s account number. What had been months of complex, multi-party IT labor was suddenly reduced to as little as a single line of IT configuration.

<BlockQuote text="With the public cloud available, what had been months of complex, multi-party IT labor was suddenly reduced to as little as a single line of IT configuration." />

Of course, not all data sharing is so simple, even in a cloud-powered environment. 

Different clouds, services, and regions still represent “data canyons” that companies and their partners need to span. Meanwhile, [real-world challenges](https://www.vendia.com/blog/real-time-data-sharing-challenges) like data transfer fees still get in the way of doing so easily and economically. But the public cloud (and the ever-improving Internet networking that enables it to exist) has been remarkably effective in lowering many communication barriers that once stood in the way of sharing data between partners. Lowering the barrier has allowed companies to focus on the next set of challenges — getting that data to be [consistent, real-time, and auditable](http://vendia.com/case-studies/bmw).