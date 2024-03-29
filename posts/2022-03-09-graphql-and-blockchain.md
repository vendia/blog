---
draft: false
title: Why GraphQL isn't sufficient for business blockchains — and what we did
  about it
description: Learn how to enrich GraphQL with transactions, condition updates,
  and ledgering on the Vendia Share data collaboration platform.
date: 2022-03-09
authors:
  - Brian McNamara
categories:
  - product
relatedPosts:
  - 2022-01-17-why-we-combined-graphql-and-a-serverless-distributed-ledger
  - 2022-10-21-api-security-graphql
  - 2022-08-26-crud-new-rules-for-apis
tags:
  - GraphQL
  - code
thumbnail: https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1677173496/Website/Iso/Teamwork_coding_uyprvd.png
seo:
  description: Learn how to enrich GraphQL with transactions, condition updates,
    and ledgering on the Vendia Share data collaboration platform.
  title: Why GraphQL isn't sufficient for business blockchains — and what we did
    about it
createdBy: alexa-vendia
createdAt: 2023-03-30T23:08:59.012Z
updatedBy: alexa-vendia
updatedAt: 2023-03-30T23:08:59.012Z
id: 6f36bf4a-cb33-458a-80f3-2e4800184cf6
---

We looked at the fundamentals of GraphQL in our earlier blog post [Why We Combined GraphQL and a Serverless Distributed Ledger](https://www.vendia.com/blog/why-we-combined-graphql-and-a-serverless-distributed-ledger). 

In this post, we're going to dig a bit deeper into some of the features Vendia has added to improve the GraphQL developer experience and address known limitations to what the core GraphQL specification allows.

## Vendia Share transactions

GraphQL natively supports running multiple mutations as a part of the same transaction but their order of execution is not guaranteed by the GraphQL specification.

In cases where ordering isn't important or when you don't need to guarantee both operations succeed or fail as a single unit, you can use a single mutation like the one below.  This is completely in line with the GraphQL spec:

<details>
  <summary>Mutation with multiple operations</summary>

```graphql
mutation m {
  warehouse1: update_Inventory(id: "017d92a7-0ab5-5513-fac1-c50be330f057", input: {quantityWarehouse1: 90, lastUpdated: "2021-12-06T18:30:00Z"}) {
    transaction {
      transactionId
    }
  }
  warehouse2: update_Inventory(id: "017d92a7-0ab5-5513-fac1-c50be330f057", input: {quantityWarehouse2: 10, lastUpdated: "2021-12-06T18:30:00Z"}) {
   transaction {
      transactionId
    }
  }
}
```
</details>

As noted above, the two `update_Inventory` operations can occur in any order. The `warehouse2` operation could run before the `warehouse1` operation. Each operation also runs independently - there is no grouping. The `warehouse1` operation could succeed and the `warehouse2` operation could fail. Even though they are submitted together, they should be thought of as two completely separate transactions.

These GraphQL limitations led us to create Vendia Transactions. The idea originates with database transactions but we've applied them to a GraphQL interface for enterprise blockchain. Vendia Transactions are a custom GraphQL directive (@vendia_transaction) that can be used to decorate mutations and queries submitted to Vendia Share.

**NOTE:** Our co-founder, Dr. Tim Wager, has an interesting post that raises the question [Are Blockchains Databases?](https://thenewstack.io/are-blockchains-databases/).

When used with a mutation to create, change, or delete data, Vendia Transactions ensure multiple operations are run in a single transaction. They also guarantee the order of the operations. Most importantly for use cases requiring operational certainty, they ensure multiple operations either succeed or fail together as a unit, analogous to relational database transactions.

<details>
  <summary>Mutation with Vendia Share transaction</summary>

```graphql
mutation m @vendia_transaction {
  warehouse1: update_Inventory(id: "017d92a7-0ab5-5513-fac1-c50be330f057", input: {quantityWarehouse1: 90, lastUpdated: "2021-12-06T18:30:00Z"}) {
    transaction {
      transactionId
    }
  }
  warehouse2: update_Inventory(id: "017d92a7-0ab5-5513-fac1-c50be330f057", input: {quantityWarehouse2: 10, lastUpdated: "2021-12-06T18:30:00Z"}) {
    transaction {
      transactionId
    }
  }
}
```
</details>

When used to query data, Vendia Transactions ensure that all nodes will see the same, consistent value until *all* nodes have any updates applied. Due to the asynchronous nature of Vendia Share, it may take a brief amount of time for updated values to be reflected on all nodes in a Uni.

<details>
  <summary>Query with Vendia Share transaction</summary>

```graphql
query q @vendia_transaction {
  get_Inventory(id: "017d92a7-0ab5-5513-fac1-c50be330f057") {
    _id
    itemName
    itemNumber
    quantityWarehouse1
    quantityWarehouse2
  }
}
```
</details>

Take a look at our [documentation](https://www.vendia.com/docs/share/vendia-transaction) for more information on using Vendia Transactions.

## Conditional updates

Customers want flexibility when updating or deleting records and may only need to perform such updates when a condition is met. The GraphQL specification does not allow for such logic. For REST developers, this may seem like a feature gap. [Conditional requests can be used to update resources when defined validation conditions are met](https://developer.mozilla.org/en-US/docs/Web/HTTP/Conditional_requests). Vendia Share introduced conditional updates to our GraphQL API to address just this scenario.

Let's work through an example where we want to update the shipment date and item quantity of a purchase order but only if the warehouse has a minimum reserve of at least 100 units available.

<details>
  <summary>Mutation with a conditional update</summary>

```graphql
mutation m {
  update_PurchaseOrder(id: "017d92a7-0ab5-5513-fac1-c50be330f092", input: {shipmentDate: "2021-02-16T09:00:00Z", quantity: 10}, condition: {warehouseQuantity: {gte: 100}}) {
    transaction {
      transactionId
    }
  }
}
```
</details>

You can include other operators like `_and`, `_not`,  and `_or` in your condition should you need more complexity.

## Examining changes to data

Vendia Share captures all changes to data in a Uni in a ledger. This is something that comes out of the box - customers automatically have the ability to determine who introduced change, when it was introduced, and what changes were made. Vendia stores this data in [blocks](https://www.vendia.com/docs/share/terms-and-definitions#block). Uni participants have the ability to issue GraphQL queries to get at data stored in blocks.

<details>
  <summary>Examine blocks in the ledger</summary>

```graphql
query blocksQuery {
  listVendia_BlockItems {
    Vendia_BlockItems {
      blockId
      blockHash
      previousBlockId
      commitTime
      transactions {
        _id
        _owner
        mutations
      }
    }
  }
}
```

</details>

This has enormous implications. First, participants have full transparency into when changes are introduced. They are not dependent upon the auditing and reporting capabilities of a central data source. These are two characteristics of what our co-founder, Dr. Tim Wager, has described as a [Lean App](https://www.vendia.com/blog/lean-app-part-3#what-makes-an-app-lean). Second, because the data can be returned via a GraphQL query, participants can take this data and store it in a downstream search or analytics system.

## Start building your applications with Vendia Share

From transactional semantics to GraphQL subscriptions to exposing data in the built-in ledger, Vendia Share allows developers to easily leverage their existing knowledge of GraphQL while also creating enterprise-grade solutions using the additional GraphQL features provided by Vendia Share. 

We've expanded our [code examples](https://github.com/vendia/examples/tree/main/features/share/graphql/graphql-enhancements) to highlight these three capabilities using several programming languages. Sign up for a[ free trial ](https://share.vendia.net/)of Vendia Share, and explore our [quickstarts](https://www.vendia.com/docs/share/quickstart).