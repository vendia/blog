---
title: 'Announcing Vendia Share DLQ Support'
description: 'Vendia now supports "dead letter" reporting to notify users asynchronously and enable them to respond when one or more pending transactions cannot be successfully committed.'
date: '2021-03-17'
authors:
  - Tim Wagner
---

# What's New in Vendia Share: Event Reporting for Failed Transactions

Vendia Share uses custom-generated GraphQL APIs to provide both client- and server-side "fail fast" checks for many types of errors, such as passing a number where a string was required, or failing to correctly format a datetime value. These errors are detected and reported synchronously. However, some errors - such two mutations submitted simultaneously by separate nodes that both attempt to create the same file name - can only be detected during consensus.

Vendia now supports "dead letter" reporting to notify users asynchronously and enable them to respond when one or more pending transactions cannot be successfully committed. Failed transaction reporting enables users to drive retries or perform other operational responses when a transaction cannot be committed. Failed transaction notification complements Vendia Share's existing support of notifications for successful transactions. Users can now subscribe AWS SQS queues, webhooks URLs, AWS Lambda functions, and/or email addresses to receive fine-grained notifications for both successful and unsuccessful transactions simply by updating the ```Settings``` data object.

Failed transaction reporting is available immediately for all customers in all AWS regions (us-east-1, us-east-2, us-west-2, sa-east-1, eu-west-1, eu-west-2, eu-central-1, ap-northeast-1, ap-northeast-2, ap-south-1, ap-southeast-1, and ap-southeast-2). Delivery charges may apply to enterprise contracts.

For more information, see the [developer documentation](https://vendia.net/docs/share/integrations#outbound).
