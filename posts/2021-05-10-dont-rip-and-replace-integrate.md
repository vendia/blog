---
draft: false
title: "Don't Rip and Replace - Integrate"
description: "Use Vendia Share to Complement Existing Data Stores."
longDescription: >
    Use Vendia Share to Complement Existing Data Stores.
date: '2021-05-10'
authors:
  - Brian McNamara
---

Vendia Share is a SaaS offering that makes it easy for companies and organizations to share code and data across clouds, regions, accounts, and technology stacks with control and lineage without any up-front infrastructure investment or operational overhead.

Does this mean that customers need to swap out their existing data stores in order to take advantage of the benefits of Vendia Share?

Absolutely not!

Do you have existing applications that are using data stored in a relational database?  Keep using it!  Is NoSQL more your preference?  That's ok - keep using whatever datastore your applications currently use.  Vendia Share can meet you where you are.

How?  Integrations!

Vendia Share provides a standard GraphQL API that can be used to publish data to a node in a Uni.  We're not opinionated about the language you should use.  Many languages have libraries that work with GraphQL but you can always resort to HTTP utilities like curl or wget to interact with your data.  It's interesting to consider the myriad ways GraphQL API requests can be triggered.  Many data stores, like [Amazon DynamoDB](http://aws.amazon.com/dynamodb) and [PostgreSQL](https://www.postgresql.org/), allow for arbitrary code to run when data is created, updated, or deleted.  We'll look at these two data stores in particular.


## Publishing Data to a Uni - DynamoDB Edition

Amazon DynamoDB is a highly available, highly performant cloud based key-value and document database.  DynamoDB has a feature, DynamoDB Streams, that captures a time-ordered sequence of item-level modifications in any DynamoDB table and stores this information in a log for up to 24 hours.  DynamoDB Streams can, in turn, be used to trigger AWS Lambda functions.  AWS Lambda is a serverless, event-driven compute service.  A Lambda function can be used to execute arbitrary code, including writing data to a Uni node's GraphQL endpoint.

![dynamo-to-share Architecture](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-05-10-dont-rip-and-replace-integrate/dynamo-to-share.png)

We have published a [dynamo-to-share example](https://github.com/vendia/examples/tree/main/integrations/datastores/dynamo-to-share) that illustrates how data inserted, updated, or deleted in a DynamoDB table can trigger add, update, or delete operations in a Vendia Share Uni.  These operations are completely hidden from the application making the request - there is nothing a client application needs to do to take advantage of this capability.  They can continue inserting, updating, or deleting data to their DynamoDB table and it will be reflected in the Uni.


## Publishing Data to a Uni - PostgreSQL Edition

PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development.  Over that time, PostgreSQL has released a number of features - including [triggers](https://www.postgresql.org/docs/current/sql-createtrigger.html).  Triggers can fire events in response to specific table conditions - like when data has been added, updated, or deleted - and are able to capture the change that was made.  These triggers can fire [functions](https://www.postgresql.org/docs/current/sql-createfunction.html) to carry out operations.  Functions can be created in several languages, including SQL and PL/Python.  A PL/Python function can be used to execute Python code, including writing data to a Uni node's GraphQL endpoint.

![postgres-to-share Architecture](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-05-10-dont-rip-and-replace-integrate/postgres-to-share.png)

We have published a [postgres-to-share example](https://github.com/vendia/examples/tree/main/integrations/datastores/postgres-to-share) that illustrates how data inserted, updated, or deleted in a PostgreSQL table can trigger add, update, or delete operations in a Vendia Share Uni.  These operations are completely hidden from the application making the request.  Similar to the DynamoDB example, there is nothing a client application needs to do to take advantage of this capability.  Clients can continue adding, updating, and deleting data to their PostgreSQL table and it will be reflected in the Uni.


## Conclusion

The choice of sticking with an existing datastore and using Vendia Share is a false dichotomy.  The decision of which one to use doesn't need to be all or nothing.  It is absolutely possible to realize the benefits of both.  Existing applications can continue to use their datastore of choice and data can be shared with other parties using Vendia Share.

What's stopping you from building with Vendia Share?  Sign up and get started at [https://share.vendia.net](https://share.vendia.net).
