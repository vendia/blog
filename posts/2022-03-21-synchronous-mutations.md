---
title: "Announcing Synchronous Mutations for Vendia Share"
description: 'Building applications on Vendia Share just got a lot easier! Today, we are excited to announce the ability to execute synchronous mutations on Vendia Share.'
draft: false
date: '2022-03-21'
categories:
  - product
authors:
  - David Brown
---

Building applications on Vendia Share just got a lot easier! Today, we are excited to announce the ability to **execute synchronous mutations on Vendia Share. **

*Reminder: On May 16, 2022, we will remove all the legacy mutation APIs (`_async`) and all mutations must use the new APIs.*


## Background

Vendia uses GraphQL to add or read data from the ledger. Writing data to the ledger is done through [GraphQL mutations](https://graphql.org/learn/queries/#mutations), which allow you to modify objects defined in your data model. Until today, all GraphQL mutations to Vendia were asynchronous. 

Vendia would return a transaction ID, requiring clients to either poll the ledger or use GraphQL subscriptions over websockets in order to know when a mutation was committed to the ledger. This pattern is unfamiliar for many developers with experience in traditional request/response systems which made it difficult to get started building interactive applications with Vendia. Not to mention, the additional client-side logic of polling adds complexity to client-side code, incurs unnecessary round-trips, and results in latencies that are simply too high for interactive applications.

## Improvement

To address these issues we are introducing new APIs that give you the ability to execute synchronous mutations. Using the new APIs, you will have a choice in whether to make a synchronous or asynchronous mutation. If you make a synchronous mutation, Vendia returns the result once the transaction has been committed and ledgered on the local node. The transaction is guaranteed to be eventually replicated to all the nodes in the Uni.

## Example

Let’s take a look at some of the changes we made. In the GraphQL Explorer in the [Vendia Share UI](https://share.vendia.net/), you will notice you have access to two different APIs for the same mutation. One that ends in `_async` and one that doesn’t. 

![](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..92179243..159369663-595206f8-f5ae-4a09-9342-4679155ce4d4.png)

The `_async` APIs are the legacy version and can only be used for asynchronous mutations.  The new APIs (the ones without the`_async`) can handle both synchronous and asynchronous mutations. Both APIs can be used but we _strongly_ recommend using the new APIs. 

**On May 16, 2022, we will remove all the legacy APIs (`_async`) and all mutations must use the new APIs.**

Using the new API requires providing a new `syncMode` parameter. The options for the syncMode parameter are: `ASYNC` or `NODE_LEDGERED`. `ASYNC` will work just as the legacy APIs work today. You are given a transaction ID that you can use to poll for when the transaction is ledgered. `NODE_LEDGERED` will execute a synchronous mutation which will wait until the transaction has been committed and ledgered on the local node before returning you the result.

Here is an example of making a synchronous mutation:

![](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..92179243..159369872-1ad7d714-2876-47c0-82e7-f6df197d30e5.png)

Another example of making an asynchronous mutation:

![](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..92179243..159369916-3df6a881-87c0-479d-8dcc-7153a73c460b.png)

## Wrapping up

With the new APsI, we hope building applications on top of Vendia will be easier. If you have other ideas on how to make Vendia easier to use or if you have any questions or concerns, please check out our [Discourse channel](https://community.vendia.net/) or contact your Vendia account team. Please see our [documentation](https://www.vendia.net/docs/share/graphql) for more information about the new API endpoints. 
