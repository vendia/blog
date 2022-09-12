---
title: "Why we combined GraphQL and a serverless distributed ledger"
description: "Learn why Vendia selected GraphQL as Vendia' Share's primary interface and how it can improve your development experience with Vendia Share with context from Brian McNamara, Sr. Solutions Architect."
date: '2022-01-18'
categories:
- concepts
- product
authors:
- Brian McNamara
---

Vendia Share is a SaaS offering that takes away the toil required to share data with partners in a controlled, secure, and ledgered manner. We do this by allowing customers to create Universal Applications (Unis) and inviting their partners to participate.

Each participant in a Uni has cloud resources created on their behalf. One of the resources is a managed, scalable, resilient, and secure GraphQL API that allows partners to create web, mobile, and backend applications to read data from and write data to a Uni.

While technical readers may be familiar with the concept of a REST API, there may be some among you who are not as familiar with GraphQL. For those of you with GraphQL experience, Vendia Share does take a non-traditional approach in some areas as well.

In this post, we'll dive a bit deeper and explore GraphQL and look at why Vendia selected GraphQL as its primary interface. You'll learn more about GraphQL and how it can improve your development experience with [Vendia Share](https://www.vendia.net/product).

# What is GraphQL?

[GraphQL was created by Meta / Facebook in 2012](https://engineering.fb.com/2015/09/14/core-data/graphql-a-data-query-language/) as a way to solve problems encountered when rebuilding their native mobile applications. The team was frustrated with the differences between the data they wanted to use in their applications and the server queries that were required and was challenged to pull in data from many disparate sources. They saw the importance of seeing data not just as a resource but as a graph.

GraphQL is a query language for APIs and a runtime for fulfilling those queries with existing data. GraphQL is a [open specification](https://spec.graphql.org/); it is not controlled or managed by a single vendor. GraphQL clients and servers can be written in a [number of programming languages](https://graphql.org/code/). There is no requirement to use particular data stores to persist data.

# Benefits of GraphQL

There are several notable benefits of using GraphQL: 

#### Data Precision

GraphQL allows clients to request exactly what they need and nothing more. This means that developers don't have to worry about over-fetching and under-fetching data. It's not uncommon to experience these issues when using other API strategies like REST. Eliminating these minimizes the number of network requests and client memory use required to satisfy an application's needs.

#### Many Resources in One Request

GraphQL allows applications to get all the data they need - even if they are different types - in a single request. This means fewer requests and, ultimately, more responsive applications for end users.

#### Strong Typing

GraphQL is strongly typed. This means that developers can know what is required by a GraphQL server to satisfy a request without having to be planning for type mismatches.

#### Subscriptions

Subscriptions provide a mechanism for fetching data from a GraphQL server over a long-lived connection (usually via WebSocket). They are a handy mechanism for providing updates to GraphQL clients when new objects are created or existing objects have updates made.

## Why did Vendia pick GraphQL?

We had to make a choice regarding API standards in our very early days. It came down to selecting either REST or GraphQL. Here are a few specific dimensions we considered as we came to our decision to run with GraphQL.

#### Vendia Share foundations

Unis are created in part by a data model. This model is expressed through the JSON Schema Draft-07 standard and is used by the Vendia Share service to create GraphQL APIs for each participant. The API allows developers to run queries and mutations to interact with their data model. Because these capabilities are automatically created by Vendia Share, developers don't need to be concerned about developing and maintaining them.

#### Performance

It's not easy to build out functionality to allow developers to selectively choose data to return just the data they want via REST. Yes, it can be done. However, the problems of over-fetching and under-fetching remain - they just shift to the API provider. We made a conscious decision early to use GraphQL so that we would not be incurring additional compute or data transfer hits resulting from over- and under-fetching.

#### Subscriptions are easier

REST does not have a great pattern for asynchronous, server-side updates to clients other than polling, rolling-your-own, or using HTTP/2 throughout. We see GraphQL subscription operations as a better method to receive these updates. Applications can use WebSockets to detect when changes have been made.

#### Developer Friendly

There are a number of programming language clients and frameworks that support GraphQL. We would not be introducing additional burden on developers of our platform. In addition, developers have the built-in ability to introspect to learn how to read from and write data to their Uni.

#### Accommodating changes to the Uni data model

We recognized the shape of data stored in a Uni would likely evolve over time as business needs changed. We felt it would be easier to accommodate these changes using GraphQL in an automated manner that simply worked.

## Learn more

In my experience, having context affords better understanding. We felt it important to explain what GraphQL is and why we chose GraphQL for our API strategy in the first place. 

Explore some [code examples](https://github.com/vendia/examples/tree/main/features/share/graphql) that demonstrate how to interact with Vendia-generated GraphQL APIs using several programming languages.

Or [try Vendia Share for free](https://www.vendia.net/pricing). 
