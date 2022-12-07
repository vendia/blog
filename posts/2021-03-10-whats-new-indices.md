---
draft: false
title: NEW Vendia Share indexing feature
description: Vendia Share now supports customer indices to improve data
  retrieval performance.
date: 2021-03-10
authors:
  - Tim Wagner
categories:
  - features
  - product
relatedPosts:
  - 2022-07-07-low-latency-operations-metrics
  - 2022-03-21-synchronous-mutations
  - 2021-03-17-whats-new-failed-tx-dlq
seo:
  title: What's new in Vendia Share? Customer-selected index feature
  description: Vendia Share now supports customer indices to improve data
    retrieval performance.
updatedBy: alexa-vendia
updatedAt: 2022-12-07T00:59:46.041Z
---

Vendia Share now offers customer-selected indexes to support efficient data retrieval regardless of the size of the data set. 

Customers can define indexes directly in the JSON Schema that defines their data model, making them both easy to express and maintain over time. Index support is compatible with all existing Unis and data models. Once an index has been added for one or more fields in a JSON Schema type, subsequent GraphQL queries that filter on the indexed fields will experience improved performance for both individual record retrieals and efficient listing. Indexes are applied automatically to all nodes in the Uni. Storage charges for index-related overhead may apply to enterprise contracts.

Indexes are available immediately for all customers. Indexes are available in all AWS regions (us-east-1, us-east-2, us-west-2, sa-east-1, eu-west-1, eu-west-2, eu-central-1, ap-northeast-1, ap-northeast-2, ap-south-1, ap-southeast-1, and ap-southeast-2). Enterprise customers may apply up to 10 indexes per Uni; free tier customers may apply up to 1 index per Uni.

For additional information and examples, see the [developer documentation](https://vendia.com/docs/share/data-modeling#indexes).