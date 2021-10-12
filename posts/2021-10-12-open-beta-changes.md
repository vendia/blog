---
title: "Open Beta Changes"
description: "Changes to Vendia Share in advance of the Open Beta"
date: "2021-10-12"
categories:
  - announcements
authors:
  - James Gimourginas
  - Brian McNamara
---

# Overview

Vendia Share was unveiled in the Summer of 2020 and adoption has steadily increased ever since.  As we reach new customers, address more use cases, and span additional industries, we continuously look for opportunities to improve our product and the development experience for all those using the platform.  Our forthcoming Open Beta milestone, anticipated later in Q4, will unveil a collection of new features and enhancements, many of which originated from customer outreach and user feedback.

We value the experience of our current and future customers and, while we strive to avoid backwards incompatible changes at all costs, we also recognize there are times when modifying a platform feature now will save our customers countless hours in the future.  In preparation for the forthcoming Open Beta milestone, we've made the choice to address several known issues in ways that will not be backwards compatible.  We're confident these changes, once released, will make for a significantly better experience for current and future customers.  This includes:

* **GraphQL Schema Improvements** - Improved naming conventions, naming consistency, and customer naming collision avoidance

* **GraphQL Type Improvements** - Expanded support for native GraphQL types (e.g. enums) and their validations 

* **Secure Message Feature Removal** - Superseded by [fine-grained data access controls](https://www.vendia.net/blog/sharing-data-with-fine-grained-control), which offer a much richer set of data protection features

To create a new Uni that has access to these improvements, no further action is required.  Create a new Uni [as you normally would](https://www.vendia.net/docs/share/uni-creation) and you'll have access to the latest and great features of Vendia Share.  [Our documentation](https://www.vendia.net/docs/share) has been updated to reflect all of the recent changes so please read through carefully as you get reacclimated with Share.

The remainder of this post is focused on the Vendia Share client changes that may be required to migrate an existing Uni to the latest and greatest version of Vendia Share.  The exact changes required will depend on the Vendia Share features and fields used and referenced by your clients.  This post is a comprehensive guide to help you identify the items that require a change.

# GraphQL Schema Improvements

Vendia Share GraphQL schema is automatically generated based on the provided JSON Schema when a Uni is first created.  GraphQL is a primary interface for clients - both synchronous and asynchronous - and making that interface as simple, consistent, and descriptive as possible is our goal.  The schema improvements can be categorized across a few key change areas.

## Change Areas

* **Adopting camelCase GraphQL field names** - We've modified our internal JSON 7 Schema to GraphQL Schema compiler to produce camelCase field names.  This will provide a more standard GraphQL interface and should allow GraphQL client tools to work more seamlessly with Share.

* **Prefixing all Vendia fields with a _** - We've modified our internal GraphQL Schema generator to prefix all Vendia specific field names with an underscore ("_").  This is now consistently applied across all fields, including the "id" (now "_id") field.  This will make the intention of each field clearer and will help avoid field name collisions.

* **Adding an "_owner" field to Files and Folders** - We've added a new field called "_owner" to the File and Folder entities provided by Share.  This will help more easily identify the creator of a File or Folder and will also enable delegation of ownership in the future.

* **Renaming fields and updating types** - We've renamed fields that historically weren't easily understood.  We've also improved our support of native GraphQL types, such as enums.  These two improvements together will allow for a first-class GraphQL integration experience for new and existing users.

## Change Areas Applied to Blocks

### _Block Type

The _Block type in the GraphQL schema is now modeled as:

```graphql
type _Block   {
    _id: ID!
    _owner: String
    blockSchemaVersion: String
    blockId: String!
    redactedBlockHash: String!
    previousBlockId: String
    previousRedactedBlockHash: String!
    blockHash: String!
    previousBlockHash: String!
    status: String
    commitTime: String!
    transactions: [transactions_element]!
}
```

In addition to camelCase modifications, changes include:

* **_id** - Includes the "_" prefix

* **_owner** - New field

* **transactions** - Replaces "_TX" and is of a different type (transactions_element)

### transactions_element Type

The transactions_element type in the GraphQL schema is now modeled as:

```graphql
type transactions_element   {
    _id: String!
    hash: String!
    redactedHash: String
    _owner: String
    signature: String
    version: String
    submissionTime: String!
    mutations: [String]!
}
```

In addition to camelCase modifications, changes include:

* **_id** - Includes the "_" prefix and replaces "TxId"

* **hash** - Replaces "TxHash"

* **redactedHash** - Replaces "RedactedTxHash"

* **_owner** - Includes the "_" prefix

* **signature** - Replaces "sig" 

## Change Areas Applied to Files and Folders

### _File Type

The File type in the GraphQL schema is now modeled as:

```graphql
type _File   {
    _id: ID!
    sourceKey: String!
    sourceBucket: String!
    sourceRegion: String!
    sourceVersion: String!
    destinationKey: String!
    copyStrategy: String
    read: [String]
    write: [String]
    etag: String
    _owner: String
    createdTime: String
    updatedTime: String
    temporaryUrl: String
    fileVersion: String
}
```

In addition to camelCase modifications, changes include:

* **_id** - Includes the "_" prefix

* **_owner** - Includes the "_" prefix

* **createdTime** - Replaces "CreatedAt"

* **updatedTime** - Replaces "UpdatedAt"

### _Folder Type

The Folder type in the GraphQL schema is now modeled as:

```graphql
type _Folder   {
    _id: ID!
    name: String!
    parent: String
    _owner: String
    read: [String]
    write: [String]
    copyStrategy: copyStrategyEnum
    createdTime: String
    updatedTime: String
}
```

In addition to camelCase modifications, changes include:

* **_id** - Includes the "_" prefix

* **_owner** - Includes the "_" prefix

* **createdTime** - Replaces "CreatedAt"

* **updatedTime** - Replaces "UpdatedAt"

## Change Areas Applied to Transactions

The _Transaction type in the GraphQL schema is now modeled as:

```graphql
type _Transaction {
    _id: String!
    transactionId: String!
    submissionTime: String!
    _owner: String!
}
```

In addition to camelCase modifications, changes include:

* **_id** - Includes the "_" prefix

* **transactionId** - Replaces "tx_id"

* **submissionTime** - Replaces "submission_time"

* **_owner** - Replaces "node_owner"

* **Removing the "tx_version" field from the _Transaction type**

## Change Areas Applied to DeploymentInfo

### _DeploymentInfo Type

The DeploymentInfo type in the GraphQL schema is now modeled as:

```graphql
type _DeploymentInfo   {
    _id: ID!
    _owner: String
    deploymentTime: String!
    consensusDefinitionHash: String!
    versionTag: String!
}
```

In addition to camelCase modifications, changes include:

* **_id** - Includes the "_" prefix

* **_owner** - New field

# GraphQL Type Improvements

# Secure Message Feature Removal
