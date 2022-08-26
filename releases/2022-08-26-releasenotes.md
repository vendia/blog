---
title: 'Staying Cool This Summer with New Features and Improvements'
description: ''
date: '2022-08-26'
draft: false
tags:
- New Features
- Improvements
---

Our engineering teams have released a number of cool new features and improvements over the last month.  As always, see our [Docs](https://www.vendia.net/docs/share) for the complete details of each new feature and our [Examples](https://github.com/vendia/examples) for more guidance.

# New Authorization Options
Vendia Share now supports [multiple forms of authorization](https://www.vendia.net/docs/share/node-authentication) to a node within a Uni.  

## API Keys
For those who prefer to create and use API Keys for authorization, this can now be performed through the [Share UI](https://www.vendia.net/docs/share/node-authentication#creating-an-api-key-in-vendia), the [Share GraphQL API](https://www.vendia.net/docs/share/node-authentication#creating-an-api-key-via-graphql-mutation), or the [Share CLI](https://www.vendia.net/docs/share/node-authentication#creating-an-api-key-via-the-cli).  A node can now support multiple API Keys and each key can have a unique expiration time.

```shell
share node add-api-key \
    --uni 'my-uni-name' \
    --node 'my-node-name' \
    --name 'my-api-key-name' \
    --expiry '2022-08-31'
```

When using an API Key, place the value of the key in the `Authorization` header when submitting GraphQL requests to the node to which the API Key is associated.

```shell
curl 'https://xxxxxxx.execute-api.us-west-2.amazonaws.com/graphql/' \
    -H 'Authorization: MY_API_KEY_HERE' \
    -H 'content-type: application/json' \
    -H 'accept: application/json' \
    --data-raw '{"query":"query blocksQuery {  listVendia_BlockItems {    Vendia_BlockItems {      blockId      blockHash    }  }}","variables":null,"operationName":"blocksQuery"}' \
    --compressed
```

## JWTs
For those who prefer to use [JSON Web Tokens (JWTs)](https://jwt.io/) for authorization, this can now be configured through the [Share UI](https://www.vendia.net/docs/share/node-authentication#creating-jwt-authentication-in-vendia) or the [Share GraphQL API](https://www.vendia.net/docs/share/node-authentication#create-jwt-authentication-via-graphql).  JWT authorization requires a small handful of configuration properties, from which your Vendia Share node can perform all the necessary JWT verifications needed on subsequent GraphQL API calls.

When using a JWT, place the value of the key in the `Authorization` header when submitting GraphQL requests to the node whose configuration reflects the identity provider that issued the JWT.  Note the `Bearer` prefix in the `Authorization` header value below.

```shell
curl 'https://xxxxxxx.execute-api.us-west-2.amazonaws.com/graphql/' \
    -H 'Authorization: Bearer MY_JWT_HERE' \
    -H 'content-type: application/json' \
    -H 'accept: application/json' \
    --data-raw '{"query":"query blocksQuery {  listVendia_BlockItems {    Vendia_BlockItems {      blockId      blockHash    }  }}","variables":null,"operationName":"blocksQuery"}' \
    --compressed
```

With the release of these new authorization options comes the end of the legacy authorization options previously supported.    

# Sorting Results
The ability to sort results based on a field was a frequent request from our users over the last few quarters.  We heard you and we did it!

Now, any [indexed field](https://www.vendia.net/docs/share/data-modeling#indexes) can be used to sort the results returned by a `list` operation.  For example, if the `name` field of the `Inventory` entity is indexed, the list of products can be returned in order by name: 

## GraphQL
```graphql
query OrderedInventoryList {
  list_InventoryItems(limit: 100, order: {name: DESC}) {
    _InventoryItems {
      name
      price
      quantity
    }
  }
}

```

## Client SDK
Even better, the [Vendia Share Client SDK](https://www.vendia.net/docs/share/vendia-client-sdk) makes sorting extremely simple.

```graphql
const orderedProducts = await entities.inventory.list({ limit: 100, order: { name: 'DESC' } })
```

# Schema Evolution
Because indexes can now be used to sort results, we've also made it easier to manage indexes (i.e. add and remove) during scheme evolution.  

## Share CLI
You can now remove an index, which was previously deemed a breaking change, using the `--allow-breaking-change=INDEX_REMOVED` flag available through the `share uni evolve` [CLI command](https://www.vendia.net/docs/share/cli/commands/uni#uni-evolve).  This allows a user to add or remove an index simply and easily, likely enabling filtering and sorting on the fields of most interest to your users and applications.

## Share UI
Likewise, the Share UI has been enhanced to allow schema evolution from the Schema view of a Uni.

<p align="center">
  <img src="https://user-images.githubusercontent.com/85032783/186989144-3b7a7b3a-6d70-4a80-a084-a69ba0f79d9f.png"/>
</p>
<p align="center">Schema Evolution in Share UI</p>

The Share UI view also includes a very helpful "diff" feature that allows you visually inspect a schema change priory to confirming the schema evolution.

<p align="center">
  <img src="https://user-images.githubusercontent.com/85032783/186988253-4f150aa6-17dd-45e9-89eb-c0591d7dff07.png"/>
</p>
<p align="center">Schema Diffs in Share UI</p>

# Control Plane and Data Plane Geo-Blocking
To help protect our customers, Vendia Share's Control Plane and [all of its operations](https://www.vendia.net/docs/share/share-graphql-schema#vendia-share-graphql-schema-reference) are now *inaccessible to traffic* originating from a set of high-risk countries.  This technique, known as [geo-blocking](https://en.wikipedia.org/wiki/Geo-blocking), is one of many security mechanisms in place to keep your Vendia account, and your Unis, safe.

This same mechanism is now also in place on our [Enterprise customers'](https://www.vendia.net/pricing) Data Planes (i.e. protecting the GraphQL interfaces of your nodes).  This additional layer of protection is one of many security mechanisms in place to keep the data in your Uni safe.

# Improved Ingestion and Consensus Performance
Vendia Share heavily leverages the serverless services of the major public cloud service providers.  The scale, resilience, and performance of those services is unmatched and, as a result, so is Vendia Share's own scale, resilienca, and performance.

Over the last month, we've made substantial improvements to the throughput available to our customers.  This includes both ingestion performance (e.g. the number of transactions accepted by a node in a given time period) and consensus performance (e.g. the number of transactions ledgered across a Uni in a given time period).  We have successfully **increased ingestion performance and consensus performance by an order of magnitude** and will continue to optimize our internal ingestion and consensus implementation to maximize the capabilities of the serverless services on which Vendia Share is built.

For more information about Vendia Share's current and near-term performance targets, as well as the real-time data sharing workloads for which Share is unmatched, [contact us](mailto:bd@vendia.net).


# Developer Tooling
For those who are new to Share, you may find these packages helpful as you explore these new and improved Share features:

* [Vendia Share CLI](https://www.npmjs.com/package/@vendia/share-cli) - Interact with the Vendia Share Control Plane from the comfort of your CLI
* [Vendia Share SDK](https://www.npmjs.com/package/@vendia/share-sdk) - Interact with the Vendia Share Control Plane from the comfort of your Node application
* [Vendia Share Client SDK](https://www.npmjs.com/package/@vendia/client) - Interact with your Uni using a type-safe TypeScript & JavaScript client, with auto-generated code customized to match your Uni's schema
