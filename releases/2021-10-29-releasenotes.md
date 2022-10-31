---
title: 'Namespaces, Types, GraphQL Enums, and More!'
description: 'Changes that will greatly improve data modeling capabilities for our users'
date: '2021-10-29'
tags:
- Enhancements
- GraphQL
- Security
---

## Summary

Over the last few weeks, the Vendia Engineering team has been hard at work finalizing a number of changes that will greatly improve the data modeling capabilities for our users.  In addition, the automatically generated GraphQL interface and resolvers have also been improved to provide native GraphQL support for enumerations.

In doing so, we made the difficult choice to address several known issues in ways that will not be backwards compatible.  Because some of these changes will impact existing Unis, we've created a [detailed blog post](https://www.vendia.com/blog/open-beta-changes) to help those with the migration process.  We're confident these changes, once released, will make for a significantly better experience for current and future users.

The remainder of this update will focus on the new Share features and capabilities.


## GraphQL Enumeration Support

We’ve modified our internal JSON Schema to GraphQL Schema compiler to allow use of enumerations directly in queries rather than treating them as strings.  This provides a more standard GraphQL interface and allows GraphQL client tools to work more seamlessly with Share.

For example, the sample schema file in [Vendia's simple product catalog quick start](https://www.vendia.com/docs/share/quickstart/simple-product-catalog) shows how a product's size can be constrained to a fixed set of values - "S", "M", "L", and "XL". The way you model your enum in the schema file doesn't change. However, the way you insert your data when enums are used changes.

Previously, adding a product required a query similar to the following:

```graphql
mutation AddProduct {
  add_Product(
    input: { name: "Awesome shirt", sku: "abc123", price: 10, size: "XL" }
    syncMode: NODE_LEDGERED
  ) {
    result {
      _owner
    }
  }
}
```

Now, adding a product requires changing the size attribute from a string to a valid enum value.

```graphql
mutation AddProduct {
  add_Product(
    input: { name: "Awesome shirt", sku: "abc123", price: 10, size: XL }
    syncMode: NODE_LEDGERED
  ) {
    result {
      _owner
    }
  }
}
```

Similarly, we now offer a consistent and GraphQL-centric approach to querying for or filtering enumerated values.

Previously, filtering for a product required a query similar to the following:

```graphql
query listProducts {
  list_ProductItems(filter: { size: { eq: "XL" } }) {
    _ProductItems {
      name
      sku
      price
      size
    }
  }
}
```

Now, filtering for a product requires changing the size attribute from a string to a valid enum value.

```graphql
query listProducts {
  list_ProductItems(filter: { size: { eq: XL } }) {
    _ProductItems {
      name
      sku
      price
      size
    }
  }
}
```


## Authorizer Type Configuration

Vendia Share Unis are created via either the [Command Line Interface](https://www.vendia.com/docs/share/cli) or the [Web Application](https://share.vendia.net/).  In either case, a [registration.json](https://www.vendia.com/docs/share/cli/guide#format-of-the-registration-schema-and-initial-state-files) file provides initial information about the Uni.

We've updated Vendia Share to require clients to explicitly set a value for authorizerType when creating a Uni.  This change eliminates the prior implicit default authorizerType to `API_KEY` when a Uni is created.  This change will help ensure all users understand and intentionally select the authorizerType during Uni creation and will provide additional traceability back to the original `registration.json` file.

A `registration.json` file must now contain an `authorizerType` element within a Node's `settings`

```json
{
  "name": "test-BasicUni",
  "schema": "schema.json",
  "nodes": [
    {
      "name": "TestNode",
      "userId": "user@email.com",
      "region": "us-east-1",
      "settings": {
        "apiSettings": {
          "auth": {
            "authorizerType": "VENDIA_USER"
          }
        }
      }
    }
  ]
}
```

**NOTE:** While `API_KEY` was our previous default when `authorizerType` was not explicitly set, we do not recommend `API_KEY` for production Unis. API keys are generally used to track or meter API usage but are not a secure authorization mechanism.  For production usage, please consider the [other authorization options](https://www.vendia.com/docs/share/node-access-control#how-to-set) available.
