---
title: 'Giving You Even More Control'
description: "Vendia Share now supports defining ACLs on arrays and brings a new design to the UI" 
date: '2022-09-26'
draft: false
tags:
- Developer Experience
- New Features
---

Our engineering and design teams have been working hard to make your experience with Vendia Share more pleasant and productive.  As always, see our [Docs](https://www.vendia.net/docs/share) for the complete details of each new feature and our [Examples](https://github.com/vendia/examples) for more guidance.

## New Support for Defining ACLs on Arrays
You can now apply access controls for a specific attribute of all objects in a list.  This gives you more control over how you share your data and opens up new use cases.

For example, given the following schema for tickets:

```json
{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "$id": "https://vendia.net/schemas/allianceticket-sharing/v1.0",
  "title": "Alliance Partner Ticket Share",
  "description": "A ticket data model with ACLs that allows alliance partners to share ticket data in real-time and with control",
  "x-vendia-acls": {
    "TicketAcl": {
      "type": "Ticket"
    }
  },
  "type":"object",
  "properties": {
    "Ticket": {
      "description": "Ticket",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "description": "Ticket Name",
            "type": "string"
          },
          "coupons": {
            "description": "Coupons",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "description": "Name",
                  "type": "string"
                },
                "code": {
                  "description": "Code",
                  "type": "string"
                }
              }
            },
            "required": ["code"]
          }
        }
      }
    }
  }
}
```

You can now enforce ACL rules against specific properties of all coupons in the coupons array as well as at the ticket entity.

In this example, we want to allow Node2 to read the name of the coupons, but not the coupons code.

```graphql
mutation addTicket {
  add_Ticket(
    input: {
      name: "ticket 1"
      coupons: [
        { name: "Coupon 1", code: "coup1" }
        { name: "Coupon 2", code: "coup2" }
      ]
    }
    aclInput: {
      acl: [
        { 
          principal: { nodes: ["Node2"] }, 
          operations: [READ], 
          path: "name" 
        },
        {
          principal: { nodes: ["Node2"] }
          operations: [READ]
          path: "coupons[*].name"
        }
      ]
    }
  ) {
    result {
      ... on Self_Ticket {
        _id
      }
    }
  }
}
```

To see the ACL in action open up the GraphQL Explorer on Node2 and run the following list tickets query

```graphql
query listTickets {
  list_TicketItems {
    nextToken
    _TicketItems {
      ... on Self_Ticket {
        name
        _owner
        _id
        coupons {
          code
          name
        }
      }
      ... on Self_Ticket_Partial_ {
        name
        _owner
        _id
        coupons {
          code
          name
        }
      }
    }
  }
}
```

You can see below that the result contains the ticket name, and the name on each coupon in the array, but the coupon code is null.

```json
{
    "data": {
      "list_TicketItems": {
        "nextToken": null,
        "_TicketItems": [
          {
            "name": "ticket 1",
            "_owner": "Node1",
            "_id": "01839e65-38dc-4159-32fe-9b5c1b2ae64a",
            "coupons": [
              {
                "code": null,
                "name": "Coupon 1"
              },
              {
                "code": null,
                "name": "Coupon 2"
              }
            ]
          }
        ]
      }
    }
  }
```

## Share UI

In line with our Kind Human policy and culture we have updated our brand design to be more inclusive and bring back some of the fun.  You can read more about the design process on our [blog](https://www.vendia.net/blog/brand-identity-buy-in).

The Share UI has been updated to incorporate the new brand design to make it more accessible and pleasant to use!

See the changes yourself by logging in!