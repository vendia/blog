---
draft: false
title: "Announcing Synchronous Mutations for Vendia Share"
description: 'Building applications on Vendia Share just got a lot easier! Today, we are excited to announce the ability to execute synchronous mutations on Vendia Share.'
date: '2022-03-21'
categories:
  - product
authors:
  - David Brown
---

Building applications on Vendia Share just got a lot easier! Today, we are excited to announce the ability to **execute synchronous mutations on Vendia Share. **

## Background

Vendia uses GraphQL to add or read data from the ledger. Writing data to the ledger is done through [GraphQL mutations](https://graphql.org/learn/queries/#mutations), which allow you to modify objects defined in your data model. Until today, all GraphQL mutations to Vendia were asynchronous. 

Vendia would return a transaction ID, requiring clients to either poll the ledger or use GraphQL subscriptions over websockets in order to know when a mutation was committed to the ledger. This pattern is unfamiliar for many developers with experience in traditional request/response systems which made it difficult to get started building interactive applications with Vendia. Not to mention, the additional client-side logic of polling adds complexity to client-side code, incurs unnecessary round-trips, and results in latencies that are simply too high for interactive applications.

## Improvement

To address these issues we are introducing new APIs that give you the ability to execute synchronous mutations. Using the new APIs, you will have a choice in whether to make a synchronous or asynchronous mutation. If you make a synchronous mutation, you have the choice of four different consistency modes. Vendia returns the result to you at different points throughout the consensus phases depending on which of the four different consistency modes you choose. 


| Type of Consistency | Dirty Reads | Synchronous E2E Response* | Consistency Guarantees |
| ----- | ------ | ------ | ------ | 
| NODE_COMMITTED | Possible | Fast | Transactions are written to the world state on a given Node but, perhaps, not yet to the ledger. |
| NODE_LEDGERED| No | Slow | Transactions are written to the world state and ledger on a given Node. |
| UNI_LEDGERED | No | Slowest | Transactions are written to the world state and ledger on all Nodes in the Uni. |
|ASYNC | No | N/A | A transaction ID is returned that can be polled. Transactions can be queried once they are written to the world state and the ledger on a given Node. |

*The Synchronous E2E Response is the overall latency as compared to the other consistency modes. Our definition of “slowest” simply means this is the slowest end-to-end latency of all four  4 consistency modes. 

Adding a consistency mode to your mutation is optional. As part of this change, we made `NODE_COMMITTED` as the default mode if you don’t provide a consistency mode as part of a mutation. To add a consistency mode to a mutation, you add the `syncMode` parameter.

## Example

Let’s take a look at some of the changes we made. Here is an example of making a synchronous mutation using the NODE_LEDGERED syncMode:

![](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..92179243..159369872-1ad7d714-2876-47c0-82e7-f6df197d30e5.png)

Another example of making an asynchronous mutation:

![](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..92179243..159369916-3df6a881-87c0-479d-8dcc-7153a73c460b.png)

## Wrapping up

With the new APsI, we hope building applications on top of Vendia will be easier. If you have other ideas on how to make Vendia easier to use or if you have any questions or concerns, please check out our [Discourse channel](https://community.vendia.net/) or contact your Vendia account team. Please see our [documentation](https://www.vendia.com/docs/share/graphql) for more information about the new API endpoints. 
