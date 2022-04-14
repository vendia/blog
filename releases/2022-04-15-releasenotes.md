---
title: 'Developer Experience Improvements: a new SDK, Sync Mutations, and Invite Flow'
description: 'Vendia Share now has a Typescript SDK, new synchronous mutations and an improved node invite flow.'
date: '2022-04-15'
draft: false
tags:
- New Features
- Improvements
---

One of the fundamental principles at Vendia is to make the developer experience as easy and seamless as possible. Over the past few months, we have been pushing ourselves to experience what our customers experience with using Vendia. If we find a sharp edge, an experience that doesn’t feel optimized or is overly cumbersome we set out to fix it. Over the past month, we have been busy addressing some of the biggest challenges we think customers experience when using Vendia. We continue to launch new and exciting developer experience improvements, but below are the three that we think will have the most impact on our developer community. 

## Typescript SDK

Vendia currently provides customers with a powerful real-time data sharing platform accessible via GraphQL APIs. GraphQL APIs are awesome and there’s no shortage of amazing tools and frameworks for working with GraphQL. But not everyone is familiar with GraphQL or they haven’t put in the time and energy to navigate the vast landscape of GraphQL tooling.

One of our goals at Vendia is to provide our customers best-in-class tools to get up and running with Vendia quickly. We are excited to announce the launch of our Typescript SDK. This SDK allows users to create applications on top of their Uni without requiring GraphQL familiarity or the need to navigate the GraphQL tools ecosystem to assemble the right set of libraries.

The Typescript SDK provides autocomplete (intellisense) in your favorite IDE, built-in support for both HTTP and websocket GraphQL APIs (see Realtime Data), multiple authentication methods, and file upload/download. The SDK will auto-generate the code during installation based on your Unis schema, making it customized to your data model. For example, if your schema included a "product" entity, your generated client would include the following methods:

```javascript
// List all the products
const listProductsResponse = await client.entities.product.list()

// Add a new product
const addProductResponse = await client.entities.product.add({
  name: 'super-widget',
  inventory: 100,
})

// Get a product by ID
const getProductResponse = await client.entities.product.get('abc-123')
```

The SDK is currently in developer preview and we need your help by providing feedback about ways we can improve the SDK. Please reach out to your account team or leave us feedback on our discourse channel. 

## Synchronous mutations

Sharing data is at the core of the Vendia Platform. In the past, you add scalar to be shared through GraphQL mutations, which were asynchronous. The asynchronous nature of the mutations required clients to either poll the database or use GraphQL subscriptions over websocket in order to know when a mutation was committed. This pattern is unfamiliar for many developers with experience in other request/response systems and makes it difficult to get started building interactive applications with Vendia. 

We are pleased to announce support for synchronous mutations. With the addition of synchronous mutations, Vendia now supports multiple synchronization modes for mutations, specified by the syncMode parameter. This determines when the operation returns the result to the client.
* ASYNC: Queues the transaction for consensus and returns immediately. With ASYNC, the result property in the response will always be empty. Clients can configure GraphQL subscriptions to receive notifications when transactions are committed.
* NODE_LEDGERED: This synchronous mode returns the result once the transaction has been committed and ledgered on the local node. The transaction is guaranteed to be eventually replicated to all the nodes in the Uni.

For example, the following munitions is a synchronous mutation: 

```graphql
add_Shape(
   syncMode: NODE_LEDGERED, 
   input: { 
       name: "square", 
       numSides: 4
   }
) { 
   transaction { 
       transactionId 
   }
   result {
       _id 
       name 
       numSides 
   } 
 }
```

For the time being you will see both the new synchronous APIs (e.g add_Shape) and the legacy APIs (e.g. add_Shape_async) in your nodes(s). Both endpoints can be used but we recommend using the new APIs. On May 16, 2022, we will remove all the legacy APIs (_async) and all mutations must use the new APIs. By May 16, 2022, you will need to migrate all application logic that references the legacy endpoints to the new APIs. 
If you have any questions or concerns, please check out our discourse channel for more information or contact your Vendia account team. Please see our documentation for more information about the new API endpoints. 


## Node Invite Flow

Inviting new users to Vendia makes sharing data with other parties a breeze. But the previous invite flow only allowed for Vendia customers to invite users that were already registered with Vendia. This created an unnecessarily complex back and forth between the inviter and the invitee, where the invitee would first need to register for Vendia and then they could be invited to join a Uni. 

We have cleaned up this workflow and now a Vendia user can invite anyone, even if that user has yet to register for Vendia. If the user has not registered, they will be walked through the registration process before they create their node in a Uni. This change makes it even easier to add new users to your Uni. 

Do You Have Feature Requests?
A great way to share your feedback is on our Discourse forum. Your feedback drives our Vendia Share roadmap. With your feedback, we can continue to act on your ideas as quickly as we did to create these awesome new Share features.

