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

Vendia Share was unveiled in the summer of 2020 and adoption has steadily increased ever since. As we reach new customers, address more use cases, and span additional industries, we continuously look for opportunities to improve our product and the development experience for all those using the platform. Our forthcoming Open Beta milestone, anticipated later in Q4, will unveil a collection of new features and enhancements, many of which originated from customer outreach and user feedback.

We value the experience of our current and future customers and, while we strive to avoid backwards incompatible changes at all costs, we also recognize there are times when modifying a platform feature now will save our customers countless hours in the future. In preparation for the forthcoming Open Beta milestone, we've made the choice to address several known issues in ways that will not be backwards compatible. We're confident these changes, once released, will make for a significantly better experience for current and future customers. This includes:

* **GraphQL Schema Improvements** - Improved naming conventions, naming consistency, and customer naming collision avoidance
* **GraphQL Type Improvements** - Expanded support for native GraphQL types (e.g. enums) and their validations 
* **Secure Message Feature Removal** - Superseded by [fine-grained data access controls](https://www.vendia.net/blog/sharing-data-with-fine-grained-control), which offer a much richer set of data protection features

To create a new Uni that has access to these improvements, no further action is required. Create a new Uni [as you normally would](https://www.vendia.net/docs/share/uni-creation) and you'll have access to the latest and great features of Vendia Share. [Our documentation](https://www.vendia.net/docs/share) has been updated to reflect all of the recent changes so please read through carefully as you get reacclimated with Share.

The remainder of this post is focused on the Vendia Share client changes that may be required to migrate an existing Uni to the latest and greatest version of Vendia Share. The exact changes required will depend on the Vendia Share features and fields used and referenced by your clients. This post is a comprehensive guide to help you identify the items that require a change.

# GraphQL Schema Improvements

Vendia Share GraphQL schema is automatically generated based on the provided JSON Schema when a Uni is first created. GraphQL is a primary interface for clients - both synchronous and asynchronous - and making that interface as simple, consistent, and descriptive as possible is our goal. The schema improvements can be categorized across a few key change areas.

## Change Areas

* **Adopting camelCase GraphQL field names** - We've modified our internal JSON 7 Schema to GraphQL Schema compiler to produce camelCase field names. This will provide a more standard GraphQL interface and should allow GraphQL client tools to work more seamlessly with Share.
* **Prefixing all Vendia fields with a _** - We've modified our internal GraphQL Schema generator to prefix all Vendia specific field names with an underscore ("_"). This is now consistently applied across all fields, including the "id" (now "_id") field. This will make the intention of each field clearer and will help avoid field name collisions.
* **Adding an "_owner" field to Files and Folders** - We've added a new field called "_owner" to the File and Folder entities provided by Share. This will help more easily identify the creator of a File or Folder and will also enable delegation of ownership in the future.
* **Renaming fields and updating types** - We've renamed fields that historically weren't easily understood. We've also improved our support of native GraphQL types, such as enums. These two improvements together will allow for a first-class GraphQL integration experience for new and existing users.

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

Vendia Share GraphQL schema is automatically generated based on the provided JSON Schema when a Uni is first created. GraphQL is a primary interface for clients - both synchronous and asynchronous - and making that interface as simple, consistent, and descriptive as possible is our goal. The schema improvements can be categorized across a few key change areas.

## Change Areas

* **GraphQL Enumerations** - We’ve modified our internal JSON 7 Schema to GraphQL Schema compiler to allow customers to use enumerations directly in queries rather than treating them as strings. This will provide a more standard GraphQL interface and should allow GraphQL client tools to work more seamlessly with Share.
* **GraphQL Filters** - Previously, Share modeled enumerations as strings in the GraphQL Schema, which caused confusion when using query parameters or otherwise filtering on enums. With the GraphQL Enumeration changes, Share now offers a consistent and GraphQL-centric approach to querying for or filtering enumerated values.

## Change Areas Applied to GraphQL Enumerations

GraphQL Enumerations (enums) are a special kind of scalar that is restricted to a specified set of values. Vendia Share customers will continue to model enums in JSON Schema using the [enum keyword](http://json-schema.org/understanding-json-schema/reference/generic.html#enumerated-values). We’ve modified our internal JSON 7 Schema to GraphQL Schema compiler to produce GraphQL enums that correspond to those modeled in the JSON 7 Schema. This will affect how GraphQL queries and mutations involving enums are written.

For example, the sample schema file in [Vendia's simple product catalog quick start](https://www.vendia.net/docs/share/quickstart/simple-product-catalog) shows how a product's size can be constrained to a fixed set of values - "S", "M", "L", and "XL". The way you model your enum in the schema file doesn't change. However, the way you insert your data when enums are used changes.

Previously, adding a product required a query similar to the following:

```graphql
addProduct(name: "Awesome shirt", sku: "abc123", price: 10, size: "XL") {id}
```

Now, adding a product requires changing the size attribute from a string to a valid enum value.

```graphql
addProduct(name: "Awesome shirt", sku: "abc123", price: 10, size: XL) {id}
```

## Change Areas Applied to GraphQL Filters

Using the same example as above, we can execute a query and filter results based on a product's size.

Previously, filtering for a product required a query similar to the following:

```graphql
listProducts( filter: { size: { eq: "XL" } } ) { Products { name sku price size } }
```

Now, filtering for a product requires changing the size attribute from a string to a valid enum value.

```graphql
listProducts( filter: { size: { eq: XL } } ) { Products { name sku price size } }
```

This also addresses a source of confusion as it relates to consistent enumeration support in Share. While Share previously allowed enumerations to be modeled in JSON 7 Schema, that modeling did not apply to the generated GraphQL schema. This would often lead users to attempt to filter by size (using the example above) like this `{size: XL}` only to receive a result they did not expect.

# Secure Message Feature Removal

Vendia Share Unis are designed to make it easy to share data and code across companies, regions, and clouds. However, sometimes it's appropriate to restrict information to a subset of participants. Secure messaging was introduced to address this need. However, over the past year, we heard from customers that they would rather see this capability exposed when writing or updating data through standard GraphQL mutations. We introduced fine-grained data permissions to address this need. This capability allows data producers to limit which participants can take action on data written to a Uni.

## Change Areas

* **Removal of Secure Messaging** - We're updating Vendia Share to remove the Secure Messaging feature from the platform.

## Change Areas Applied to Secure Messaging

We're removing secure messaging in favor of fine-grained data permissions. There are several advantages to using this capability. Secure messaging only allows for a message to be sent to one or more recipients; the data contained in the message is not written to the shared data model. It is not available to be read, updated, or deleted at a later point. In contrast, data written with fine-grained permission is stored in your model. As such, it is available to be read, updated, or deleted at a later point. In addition, permissions can be updated at any time to change the principal, path, or operations allowed on the data as your data sharing needs evolve.

Please refer to our [blog post](https://www.vendia.net/blog/sharing-data-with-fine-grained-control) and [product documentation](https://www.vendia.net/docs/share/fine-grained-data-permissions) for how to make use of Share's fine grained data access controls.
