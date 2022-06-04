---
title: "Schema Evolution"
description: "Exploring the ability to update the data model in a Universal Application (Uni)"
date: "2021-12-15"
categories:
  - announcements
  - data model
  - architecture
  - universal applications
authors:
  - Brian McNamara
---

Vendia Share allows users to share a single source of truth in a secure and scalable manner through Universal Applications (Unis). Unis are automatically created using a user-supplied data model. Vendia Share takes the user supplied data model and deploys a Uni in a matter of minutes.  This includes provisioning fully managed, fullly functional GraphQL APIs to interact with the Uni and a serverless distributed ledger that keeps data consistent across all participants.

As Uni participants grow and as the fidelity of solutions increase over time, it's common for users to want to evolve the original data model used to create the Uni.  Historically, there was no way for users to change the data model once a Uni was created. Any data model change to a Uni required destroying it and its accompanying nodes and recreating it with the new model. 

This process was painful for users. Recreating a data model involves Vendia Share creating new cloud resources. This, in turn, means node GraphQL endpoints, S3 bucket ARNs, SNS topics change. Any integrations that interact with those resources need to be updated. During the development process this can introduce a lot of friction to developers and operators.

We're very pleased to share that Vendia now allows developers to evolve a Uni's data model.  This change allows users to manage their Uni's evolution without requiring changes to the Uni's interfaces (e.g. a new GraphQL URL).  Not only does this empower Vendia Share users, it also allows users the agility to evolve as business or participant needs change.

What sort of data model changes can be introduced?  In short, _additive_ or _non-breaking_ changes can be made.

* New types and their associated properties can be added
* New properties of an existing type can be added 
* New enum values of an existing property can be added 

What sort of changes cannot be introduced? In short, _destructive_ or _breaking changes_.

* Existing types cannot be removed
* Existing properties cannot be removed
* Type changes to existing properties cannot be changed
* Required flag for an existing property cannot be changed

Let's explore how to go through the process. You'll need to have a Vendia user. If you haven't already created one you can [sign up at https://share.vendia.net/](https://share.vendia.net/).

# Create a New Uni

The first step in our process is to [create a new Uni](https://share.vendia.net/uni/create). This example will use the **Product database** template.

<img width="1355" alt="01-uni-starting-point" src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..71095088146004667-bddc37b5-90ee-4b41-a9fa-54e28eacfbf2.png" />

You can create a single node in a supported region for the purposes of this example. After several minutes you should have a new Uni up and running.

<img width="1405" alt="02-uni-info-page" src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..71095088146019919-1e03d5df-1ccc-42ec-b9da-9bd40e007844.png" />

# Verify the Initial Schema

We can view the deployed schema from the Vendia Share web application. 

<details>
<summary>Default product demo schema</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://vendia.net/schemas/demos/product.json",
  "title": "Product",
  "description": "Product information",
  "type": "object",
  "properties": {
    "Product": {
      "description": "Product information",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "description": "Product name",
            "type": "string"
          },
          "sku": {
            "description": "Product SKU",
            "type": "string"
          },
          "description": {
            "description": "Product description",
            "type": "string"
          },
          "price": {
            "description": "Product price",
            "type": "number"
          },
          "tags": {
            "description": "Product tags",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "size": {
            "description": "Product size",
            "type": "string",
            "enum": [
              "S",
              "M",
              "L",
              "XL"
            ]
          }
        }
      }
    }
  }
}
```
</details>

Though the schema is valid - our Uni was successfully created after all - it's lacking something. It's missing a **quantity** field to capture the count of each item we have in stock. The field isn't available when we try to add a new product via the `add_Product` operation.

<img width="1357" alt="03-add-new-product-with-introspection" src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..71095088146020054-6bcd7edb-aaff-4066-9a04-20f831453b7c.png" />

Let's fix that problem.

# Evolving the Schema

We can update our Uni's existing data model to include a new property - **quantity**. We will use the new schema below.

NOTE: Make sure to save the schema below as evolved-schema.json.

<details>
<summary>Evolved product demo schema</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://vendia.net/schemas/demos/product.json",
  "title": "Product",
  "description": "Product information",
  "type": "object",
  "properties": {
    "Product": {
      "description": "Product information",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "description": "Product name",
            "type": "string"
          },
          "quantity": {
            "description": "Product quantity",
            "type": "integer"
          },
          "sku": {
            "description": "Product SKU",
            "type": "string"
          },
          "description": {
            "description": "Product description",
            "type": "string"
          },
          "price": {
            "description": "Product price",
            "type": "number"
          },
          "tags": {
            "description": "Product tags",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "size": {
            "description": "Product size",
            "type": "string",
            "enum": [
              "S",
              "M",
              "L",
              "XL"
            ]
          }
        }
      }
    }
  }
}
```
</details>

We can use the Vendia Share CLI to instruct the Share service to apply the new data model to our existing Uni.

```bash
share uni evolve --uni your-uni-name \
--schema evolved-schema.json
```

You should receive the following output from the above command:
`Schema evolution initiated`

You Uni will move to an Updating state while the new schema is applied. Read requests of the Uni will succeed. Any write requests will be queued until the update is complete.

<img width="1399" alt="04-updating-uni-after-schema-evolution" src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..71095088146020311-b527affd-1954-4386-b32d-1e9facd41d05.png" />

# Verifying Results After Schema Evolution

Once your Uni enters a Running state you can begin working with your updated data model.

<img width="1400" alt="05-running-uni-after-schema-evolution" src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..71095088146020480-dfcab76a-e308-4095-a86c-da2dfc8d89c1.png" />

Let's first make sure our new field - **quantity** - is present in our Uni's schema.

<img width="1399" alt="06-schema-after-evolution" src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..71095088146020628-a73752b7-9018-4ab2-bdd4-1cb86ed32d5e.png" />

Now that we know our new field is present, let's confirm it's accessible. We can go back to the node's GraphQL Explorer and examine the available fields when running a `add_Product` operation.

<img width="1412" alt="07-add-new-shape-with-introspection-after-evolution" src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..71095088146020856-e51b3e50-19ca-480a-a35c-76e406b2b5f0.png" />

We can now make use of **quantity** in our evolved schema.

# Summary

Data models can change over time. Schema evolution in Vendia Share allows customers to make changes to their schemas without introducing additional complexity all while allowing them to focus on building innovative solutions.
