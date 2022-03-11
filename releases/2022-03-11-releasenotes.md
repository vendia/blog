---
title: 'At Your Request: Managing Nodes, Bigger Files, and AWS Marketplace!'
description: 'Vendia Share now supports node departure, 5GB file sharing, and can be purchased on the AWS Marketplace'
date: '2022-03-11'
draft: false
tags:
- New Features
- Improvements
- AWS
---

At Vendia, we pride ourselves on customer obsession.  Over the last month we've released a number of new features covering everything from platform security upgrades, to improved deployment and operations automation, to foundational elements for soon-to-be-released new Share capabilities.  Of the many features we've released, three stand apart because they were created in direct response to user feedback.


## Node Leave

It's common for the participants within a Universal Application (Uni) to grow organically over time.  The real-time data ecosystem created among partners often reflects the real-world business dynamics of their organizations.  While it's always been easy to invite another participant to join a Uni, it was previously not possible for a participant to leave a Uni.

With the new node leave feature, participants can decide to leave a Uni they've previously joined.  This new feature is available through the `Manage Node` button.

<p align="center">
  <img src="https://user-images.githubusercontent.com/85032783/157789751-ec064e2d-6a1e-4501-ae36-90316cb56c74.png" />
</p>
<p align="center">Figure 1: Manage a Node</p>


From the `Manage Node` view, a participant can navigate to the `Node Settings` view using the left navigation pane.  From that view, a participant who wants to leave a Uni has the option to either `Archive` their node or `Delete` their node.

<p align="center">
  <img src="https://user-images.githubusercontent.com/85032783/157789752-ffe54730-da64-4d5a-903d-fb0ca64dd611.png" />
</p>
<p align="center">Figure 2: Archive or Delete a Node</p>


### Archiving a Node

Archiving a node will change the node to a read-only mode, which means:

* Reading data from the archived node is possible but writing data to the archived node is not
* Information shared by the archived node will remain accessible to the other nodes in the Uni
* Information shared by other nodes in the Uni will remain accessible to the archived node


### Deleting a Node

Deleting a node will permanently delete all information stored on the node, which means:

* Reading data from and writing data to the deleted node are not possible
* Information shared by the deleted node will no longer be accessible to the other nodes in the Uni
* Information shared by other nodes in the Uni will no longer be accessible to the deleted node

This powerful new feature should be used cautiously, as any form of node leave (archiving or deleting) cannot be undone.  With this powerful new feature, Share users now have wider control on their Uni topology, allowing a Uni topology to reflect changes in partnerships and business priorities over time.


## Larger Files Sizes

Another common user request is to store and ledger larger files in a Uni.  Previously, the maximum supported file size was 1GB.

Today, we're happy to announce **a new maximum file size limit of 5GB**.  This file size increase allows users to transfer files up to 5GB to their Uni.  For the moment, **files larger than 1GB can only be added to Share programmatically**, using the [File API](https://www.vendia.net/docs/share/file-api).

The Share web app continues to support manual file uploads for files up to 1GB.

<p align="center">
  <img src="https://user-images.githubusercontent.com/85032783/157789753-09b4a8ce-4f67-4b18-97bc-9e09c13592da.png" />
</p>
<p align="center">Figure 3: Large File Upload</p>

## AWS Marketplace Listing

Vendia Share is now listed on the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-6rjbm2je2n6ki?sr=0-1&ref_=beagle&applicationId=AWSMPContessa), giving those considering an Enterprise Vendia Share license a simple, streamlined purchasing pathway.  The AWS Marketplace listing helps us reach a large customer base with our product and helps those exploring Share quickly and easily move to an Enterprise plan.

<p align="center">
  <img src="https://user-images.githubusercontent.com/85032783/157789754-32014ead-0147-4d3b-8ac3-20a2c2f8a5ff.png" />
</p>
<p align="center">Figure 4: AWS Marketplace Listing</p>

Check out [this page](https://www.vendia.net/pricing) for more information on the right licensing plan for you.

## Do You Have Feature Requests?

A great way to share your feedback is on our [Discourse forum](https://community.vendia.net/c/features-requests/2).  Your feedback drives our Vendia Share roadmap. With your feedback, we can continue to act on your ideas as quickly as we did to create these awesome new Share features.
