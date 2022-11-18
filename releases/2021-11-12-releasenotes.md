---
draft: false
title: "What's that \"csp\" property doing in my Uni info configuration?"
description: "A first step toward an announcement we'll be able to share in the weeks ahead"
date: '2021-11-12'
tags:
  - Polycloud
---

For you sleuths who found a few new properties in existing Vendia types, this may not be a complete surprise.  For everyone else, you may notice a new property recently introduced into the Vendia `UniInfo` type called `csp`, short for Cloud Service Provider.  This is a first (though exciting) step toward an announcement we'll be able to share in the weeks ahead.  Hint - we're serious about bridging every cloud and giving partners choice in the technology they use.

If you're interested in keeping track of incremental updates, feel free to explore the available queries and fields through the Vendia [GraphQL Explorer](https://share.vendia.net/) or your preferred GraphQL client.

Executing

```graphql
query GetUniInfo {
  getVendia_UniInfo {
    nodes {
      name
      region
      vendiaAccount {
        csp
      }
    }
  }
}
```

will now result in something like this

```json
{
  "data": {
    "getVendia_UniInfo": {
      "nodes": [
        {
          "name": "OriginatorNode",
          "region": "us-east-1",
          "vendiaAccount": {
            "csp": "AWS"
          }
        },
        {
          "name": "ServicerNode",
          "region": "us-west-2",
          "vendiaAccount": {
            "csp": "AWS"
          }
        }
      ]
    }
  }
}
```

Much more to come.  Stay tuned!
