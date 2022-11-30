---
draft: false
title: "Handling errors the GraphQL way and adding more results to your queries"
description: "We've updated response status codes and now allow up to 1000 results per query."
date: '2022-11-25'
authors:
  - Li Dai
tags:
- Improvements
- Developer Experience
- GraphQL
---

Vendia Engineers worked tirelessly to improve our product and ensure that we follow and set best practices for industrial standards. Here are the newest updates!

# Error handling the way it should with [GraphQL](https://graphql.org/). 

GraphQL errors are not scary as long as they are returned and properly handled. In the past Vendia Share would return 4XX and 5XX status codes for any http request failures. But that has changed with a move to GraphQL's [recommended approach](https://graphql.github.io/graphql-over-http/draft/#sec-Field-errors-encountered-during-execution).

In short, it means the GraphQL end point will always return a 2XX. But, when an error occurs, an `errors` field will be included in the response payload. 

Here's two examples using `Curl`:

1. A request with typo in it's query. `n` is intentionally removed in `listVendia_BlockItems`:
```
curl 'https://<some-domain>/graphql/' \
    -H 'Authorization: <api-token>' \
    -H 'content-type: application/json' \
    -H 'accept: application/json' \
    -i \
    --data-raw '{"query":"query blocksQuery {  listVedia_BlockItems {    Vendia_BlockItems {      blockId      blockHash    }  }}","variables":null,"operationName":"blocksQuery"}'
```

We can see that it returns `200` status code. But also gives detailed error messages pointing out that `listVedia_BlockItems` is incorrect and suggested other available options.

Sample Response:
```
HTTP/2 200
date: Tue, 29 Nov 2022 20:31:27 GMT
content-type: application/json
content-length: 288
x-amzn-requestid: XXXXXX
access-control-allow-origin: *
x-amz-apigw-id: XXXXXX
x-amzn-trace-id: XXXXXX

{"data": null, "errors": [{"message": "Cannot query field 'listVedia_BlockItems' on type 'Query'. Did you mean 'listVendia_BlockItems', 'listVendia_FileItems', 'listVendia_FolderItems', 'listVendia_ApiKeyItems', or 'listVendia_ContractItems'?", "locations": [{"line": 1, "column": 22}]}]}%
```

2. A request with meaningless query body:

```
curl 'https://<some-domain>/graphql/' \
    -H 'Authorization: <api-token>' \
    -H 'content-type: application/json' \
    -H 'accept: application/json' \
    -i \
    --data-raw '{"query":"query "}'
```

Again, we see a `200` status code. The message informs us that the syntax is not right which makes sense since our query body has nothing.

Sample Response:
```
HTTP/2 200
date: Tue, 29 Nov 2022 20:31:52 GMT
content-type: application/json
content-length: 124
x-amzn-requestid: 6097318d-f50d-4097-b415-82e6a8f07652
access-control-allow-origin: *
x-amz-apigw-id: cYXYzEpbyK4FsBg=
x-amzn-trace-id: Root=1-63866c38-38b964043a2d77c240da4981;Sampled=0

{"data": null, "errors": [{"message": "Syntax Error: Expected '{', found <EOF>.", "locations": [{"line": 1, "column": 7}]}]}%
```

It is recommended to understand the [common GraphQL error handling techniques](https://the-guild.dev/blog/graphql-error-handling-with-fp).

# Up to 1000 for your query results
As the number of entities increase, the result set for `list` operations will be too large to return in a single http response. To optimize resource usage, Vendia continues limits results to 1000 results per query.  However, in cases where a `filter` is applied, Vendia previously did not fully populate the result set.  With some recent changes, each `page` of results should be more complete (i.e. fewer if any empty pages) than they were previously.

Here are couple samples in a testing environment.

1. A basic query with `limit` set to `1000`:

```
query MyQuery {
  list_ProductItems(limit: 1000) {
    nextToken
    _ProductItems {
      name
    }
  }
}
```

You will see all or up to 1000 results which ever is lower:
```
{
  "data": {
    "list_ProductItems": {
      "nextToken": null,
      "_ProductItems": [
        {
          "name": "Item1"
        },
        {
          "name": "item2"
        }
      ]
    }
  }
}
```

2. A query attempt to set `limit` for more than `1000`:
```
query MyQuery {
  list_ProductItems(limit: 1001) {
    nextToken
    _ProductItems {
      name
    }
  }
}
```
The query will then return null. It will provide you with the error message informing you that `the supplied list limit must be <= 1000`.
```
{
  "data": {
    "list_ProductItems": null
  },
  "errors": [
    {
      "message": "the supplied list limit must be <= 1000",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "list_ProductItems"
      ],
      "extensions": {
        "code": "VALIDATION_ERROR"
      }
    }
  ]
}
```
# Believe in Real Time Data Sharing?

Vendia will continue to lead the data sharing and blockchain infrastructure field. [Get started for free](https://www.vendia.com/pricing) to see how data sharing can empower your business.