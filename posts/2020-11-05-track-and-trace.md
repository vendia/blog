---
draft: false
title: 'Track and Trace using Vendia Unis + Blobs'
description: 'Learn about how Vendia Unis + Blobs functionality can help streamline common supply chain track & trace issues'
date: '2020-11-05'
authors:
  - Glenn Dierkes
---

Producers, Shippers, and Retailers face a host of logistical issues when dealing with physical goods. With large quantities of merchandise, invariably some of the products will get lost, damaged, or stolen. Knowing when something goes wrong would provide valuable information to help these entities improve their processes and lower costs.

With Vendia, partners get real-time visibility into the state of their merchandise.  They see the lineage of all actions taken during the handling, processing, and exchange of the physical goods without requiring any undifferentiated operational headaches.

Vendia's Unis provide a general-purpose platform for sharing code and data across companies, clouds, and regions.  You can learn more about Unis [here](https://vendia.com/docs/share/dev-and-use-unis).  This article explores how Vendia's Uni technologies provide enterprises with a simple and cost-effective solution to track and trace challenges like the one described above. CIOs, line of business owners, and developers who work on supply-chain related technologies will gain insights into the best ways to lower costs, improve operational outcomes, and optimize their free cash flow by learning about the topics covered here.

## The Problem

In our simple supply chain there are three parties: a producer, a shipper, and a retailer, a producer builds the merchandise to be distributed and sold.  Next, the shipper collects these products from the producer and delivers them to the retailer.  Finally, the retailer takes possession of the goods and sells them.  Products could be lost, stolen, or damaged at any step during this process.  Regardless of fault, it represents a loss for one or more entities involved. How could these partners properly track and trace their process in order to determine fault and improve?

## The Proposed Solution

The partners could make a slight adjustment to their current process to help determine where the "leakage" is happening.  At each exchange point, when the producer gives the items to the shipper or the shipper gives the items to the retailer, the entities involved in the exchange will take a picture of the merchandise and upload them to a collaborative location, like a Cloud Directory.  This will provide an opportunity to see the condition of the items at each step in the process, helping to determine where items were lost, stolen, or damaged. When an issue arises with missing or damaged goods, it would be possible to go back and see when in the process the incident happened.

### Solution using today's technologies

This proposed solution could be implemented using today's cloud technologies as follows:

![image2](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..53227298272397-e62f5c00-1f45-11eb-8a71-5a70589323dd.png)

Essentially, all parties would have access to a common "cloud bucket".  They would augment their existing processes to take a picture and upload it during the exchange process.  Later these pictures could be referenced to determine fault when a "loss" comes into question.

Although this is functional, it has some drawbacks:

*   If a partner is added or removed, the permissions to the bucket must be updated.  For example, when a new shipper is added to the distribution network, their process must be updated and they must be given access to the common bucket.
*   It's up to each partner to figure out their own way to upload the pictures.
*   The integrity of an uploaded picture could come into question.  Since all partners have access to the bucket, a partner could alter an image after the fact.  Additional steps would need to be taken to ensure integrity.
*   If the access patterns for the partners are different then determining cost allocation of the cloud resources becomes difficult.  For example, if the shipper loads and accesses the pictures ten times as often as the retailer, determining how to fairly apportion the costs among the partners could become challenging.
*   If the entities wanted to add additional details about the merchandise, this would require custom code and other cloud resources.  Steps would need to be taken to ensure the replication and consistency of this data among all the partners.

These challenges can be addressed with sufficient development time and operational investment. For example, on the AWS platform a group of partners could collectively agree to disable deletion and utilize object-level versioning to minimize the possibility of lost or corrupted data. Storing additional metadata about the pictures could be accomplished by also having the partners collectively agree to use a single cloud-based database, such as Amazon Aurora, and then agreeing on a representation and access control mechanism for the additional metadata.

However, these steps would require additional coordination and actions amongst the partners. As the distribution network changes, maintaining security, costs, and operations becomes challenging.

### A Modern Solution - Vendia Unis

Vendia's solution has all three entities participating in a Vendia Uni, each entity represented by their own node.  A node is Vendia's terminology for a "cloud" repository, therefore each of the entities has a separate copy of the data and resources under their organization's control.  At each exchange point, when the producer gives the merchandise to the shipper or the shipper gives the merchandise to the retailer, both entities involved in the exchange will take a picture of the items and upload the picture to the Uni.  This provides a "tamper-proof receipt" of what was exchanged.  If a problem is identified, each partner would be able to see the "receipts" of all involved and determine where the loss happened.  Knowing that the receipts are tamper-proof gives each partner confidence in the process and eliminates debate about any integrity issues.

![image1](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..53227298272411-e891b600-1f45-11eb-8d2e-e7c855cd4b20.png)

#### Vendia's Advantages

Using Vendia Unis has a number of advantages:

1. Adding partners within the process is a simple API call.  No need to adjust the permissions of each partner or modify common cloud resources.  With a Vendia Uni, when a partner is added, they immediately share the exact same state as their peers.

2. Vendia's blobs are automatically copied to all nodes, therefore all entities will have their own copy of all images.  This allows each entity to do its own custom processing or analyses specific to them.  Furthermore, it encapsulates the partners from each other; if one partner is processing lots of data they don't impact the processing of others.  Additionally, the cost allocation is clearly siloed, eliminating the need to determine usage and cost by each partner.  Finally, this isolation allows each partner to control and manage their own operational processes.

3. Vendia's blobs are versioned and each action is captured in the Uni's ledger. This means that any actions taken on a blob are recorded, helping to ensure that the pictures are tamper-proof.

4. Vendia's nodes share a common API.  The code/process would be the same for all partners.  Therefore, the code or scripts used by one partner could be shared by all. Further, since Vendia's framework is the same across nodes, security considerations and resolution are uniform for all nodes.  This helps to improve overall security and reduce risk.

5. Finally, Vendia's Uni would allow for additional product metadata to be associated with the pictures.  This data would then be automatically shared and guaranteed to be consistent with all entities in the Uni. No need for setting up a global Cloud database or for each partner to determine how to upload or access the additional metadata.

#### Going Deeper with Vendia

The benefits offered by Vendia's technologies extend further.  Organizations can add Blobs but control their read and write permissions, therefore even in a "shared" environment they can control who has access to the data and how they can interact with that data.  Further, Blobs offer copy semantics that enable the partners to more efficiently manage the data.  With a "never" copy strategy, the blob is stored in the creator's node and a symbolic link is placed in all other nodes.  This reduces transfer and data storage costs.  However, if data is frequently accessed, an "always" strategy could be used which keeps a copy of the blob in all nodes. Finally, the "on access" strategy acts like a cache, starting off by linking to the owner's copy of the data, but then selectively copying the data after it has been accessed once, to speed up future requests. With Vendia's ledger and blob tombstoning, a full lineage of the blobs could be seen.

## Conclusion

This simple example models many real-world use cases in industries as divergent as food and beverage, logistics and transport, oil and gas, retail, and others.  The Uni could be created with many more "nodes" (partners) to serve additional entities that are part of the process. Further, the entities could store additional data in the Unis and connect that data to the images.  Vendia's Uni technology guarantees the consistency and integrity of the data among all of the nodes.  This means that enterprises that work together can add or remove partners with minimal difficulty while knowing that the data is secure and consistent.
