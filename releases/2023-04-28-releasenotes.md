---
draft: false
title: Erasibility & File Sharing Updates
description: Erasibility is now available on Vendia Share.
date: 2023-04-28
seo:
  noindex: false
  title: Erasibility & File Sharing Updates
  description: Erasibility is now available on Vendia Share.
createdBy: Li Dai
createdAt: 2023-04-28T18:01:31.718Z
updatedBy: Li Dai
updatedAt: 2023-04-28T18:07:56.081Z
id: 5d81eee1-7883-4b75-bcd2-262f2548d422
---

The Vendia Engineering team  introduced a few substantial changes this month.  Here's a recap. 

## Erasibility

Introducing Vendia erasure capability. Customers often ask how they can completely erase data in their Uni. We are proud to announce that users can erase fields using the new erasable field annotation. This is different from the original remove feature, which removes an entity but maintains previous versions in the ledger. 

To enable erasure, user must add \`x-vendia-erasable\` field at the same level inside their JSON schema like below:

"x-vendia-erasable": [

                            "field1", 

                            "field2"

                        ]

Once it’s enabled, you’ll see APIs that look like below:

![erasibility](to-be-filled)

Stay tuned as additional documentation will be available soon.

## File Mutation Change

We’ve recently made a change to update File metadata. All file mutations  must now include a \`syncMode\` set to \`ASYNC\`.  The reason for this change is exciting.  Vendia now supports file sizes up to 5GB and will continue to increase the file size limit.  By requiring file uploads to be async (and non-blocking), users will be able to add larger files, without code changes, as the limit increases

If another \`syncMode\` is used, the request will be rejected as shown below:

![mutation-change](to-be-filled)

## Copy Strategy Change

Previously, Vendia supported a File copy strategy called “On Access” in our environment. This copy strategy is no longer supported in any future mutation to file metadata. 

![unsupported](to-be-filled)

Try us out

Vendia is powered by the scale of serverless and reliability of blockchain to make data sharing easy across teams and organizations. [Get started for free](https://www.vendia.com/pricing) to see how Vendia can help you advance in your data sharing journey.
