---
title: 'Announcing Azure support, smart contracts, and new pricing plans for Vendia Share'
description: 'Today, we are excited to announce a new set of features for Vendia Share to further help developers build secure, decentralized data applications. Let’s jump into some of the new features.'
date: '2021-12-09'
authors:
  - David Brown
categories:
  - announcements
---

**Announcing Azure support, smart contracts, and new pricing plans for Vendia Share**

There is little dispute that organizations have more data than ever at their disposal. Things like connected devices and system logs are producing more data than ever before, while services like AI/ML and analytics solutions are in need of more data than ever before.  It's no wonder that upwards of 80% of the data companies wish they had ready access to lives outside of their four walls.  Enterprises have long struggled with the challenges of sharing data and business processes with their partners, and this long standing challenge has only gotten worse as the amount of data has increased. 

Previously, companies have looked to complex, expensive ERP solutions and difficult to implement DIY approaches to solve this problem. Companies built bespoke integrations with APIs and databases to share information across companies, clouds, and regional boundaries. A few years ago a new wave of technologies emerged, in the form of distributed ledgers and blockchains. Initially, it looked like these might be an answer to the long-standing problem of data sharing and application integration. But most blockchains, like Fabric and Ethereum, are designed for each participant to run physical databases and servers, forever limiting their ability to dynamically scale storage or provide compute on demand. Because these systems were designed to run on “bare metal” servers, they are unable to take advantage of managed services created by cloud providers making them expensive and difficult to manage. 

In 2020, we launched Vendia Share, a revolutionary platform for building real-time, decentralized data applications allowing organizations to share critical information across departments, companies, and clouds – securely and at scale. Today, we are excited to announce a new set of features for Vendia Share to further help developers build secure, decentralized data applications. Let’s jump into some of the new features.

**Connect more partners with Azure support**

In addition to the existing Amazon Web Services support, Vendia Share now includes beta support for Microsoft Azure, making it easy for partners to connect and develop from their Azure accounts. Customers select the appropriate Azure region to ensure low latency data transfer and Vendia Share handles provisioning and managing the resources automatically. This new functionality allows users to create integrations to Azure Queues, Azure Functions, and other Azure-specific services through the use of Azure Event Grid. For example, a user may want to execute a specific Azure Function whenever another participant creates or updates a record. Azure support is currently in beta and available for all customers. 

![Azure node](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..532272145319340-baa2ac5f-41c8-4d69-93fd-765ec7b69cb6.png)

**Empower Developers with Smart Contracts**

We are excited to announce the ability to create, run, and manage Smart Contracts. Smart Contracts enable developers to build fully-managed workflows that can be triggered when data changes across partners, clouds, and regions without having to build or maintain the eventing infrastructure. Smart contracts are great for when you need to derive computed values, query 3rd party systems for additional information or enforce integrity constraints. For example, in an airline reservation system, a smart contract may ensure that multi-leg flights preserve a minimum gate-transfer time in between flight reservations. 

Our Smart Contracts are expressed as AWS Lambda functions. Smart Contracts only require executing a smart contract once, instead of traditional blockchain smart contracts which have to be executed by all nodes in parallel. This reduces the cost and frees developers from having to code idempotent and replayable contracts. Smart Contracts permit flexible use of non-idempotent calculations, including random number generators, time of date, arbitrary API calls, and more.

Once you have a [Universal Application](https://www.vendia.net/product) and a node running in your [Vendia Share account](https://share.vendia.net), you can navigate to the Smart Contracts. When creating a new smart contract, you specify an AWS Lambda Function to execute, the contract's input parameters, which are specified as GraphQL queries, and the output parameters, which are specified as GraphQL mutations. When a Smart Contract is triggered, the input query is executed and the returned value forms the arguments passed to the Lambda Function. The result of the Lambda Function is captured in the output GraphQL mutation, which is used to update the data based on the function's output.

![Smart Contracts Create UI](https://user-images.githubusercontent.com/85650276/145461871-909e6e32-49d3-4427-a068-dbdfe58b9995.png)
 
**Enable More Users with No Code, Entity Explorer View**

We also updated our User Interface (UI) to enable non-developers to create and manage decentralized data applications (called Universal Applications). A new simple workflow guides users through the steps to quickly create a new Universal Application. The new UI also includes an Entity Explorer view allowing non-developers to read from and write to a Universal Applications without crafting GraphQL queries or mutations. 

Similar to Smart Contracts, you can navigate to the Entity Explorer from within a node. Within the Entity Explore you can see all the tables from your data model in the left column with data in the selected table shown. 

![Entity Explorer](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..92179243145060323-52c8b712-acc6-4fea-8a03-eff794849c63.png)

Clicking into the `_id` for any of the rows, will open the ability to edit, delete or view the full history of that entry. You have full control over which users can view, edit or delete data through the Entity Explorer. 

![Edit an entity](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..92179243145060474-7b676775-746e-4493-95be-adb37ce1f059.png)

**Grow with New Pricing Plans**

We are also announcing pricing plans that meets customers' demand and allows them to scale their usage from single users through large enterprises. All pricing plans include the new features, along with the established capabilities for building and running highly scalable, fault-tolerant, cross-cloud, multi-account, multi-region, multi-party applications. Share is available in three plans: Starter, Individual, and Enterprise. Starter is our free plan that offers developers generous limits to test Vendia at no cost. The Individual plan removes most of the limits of the Starter plan and starts at $99 per month. The Starter and Individual plans are currently in beta and available for all customers. For more information, see the [pricing page](https://www.vendia.net/pricing). 

All these great new features for Vendia Share are now available for everyone starting today. To learn more about Vendia Share, see our [documentation](https://www.vendia.net/docs/share). To get started using all the new features, [create an account](https://share.vendia.net/). 
