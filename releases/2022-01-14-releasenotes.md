---
title: 'Improved Usability, Reliability, and Speed…as a Service'
description: "We operate and maintain the Vendia Share platform as a service so you don't have to"
date: '2022-01-14'
draft: false
tags:
- Improvements
- Operations
---

## New Folder and File Experience

Vendia Share has the ability to store files as well as transactional data.  While some of our users manage files through the [Vendia Share GraphQL interface](https://www.vendia.com/docs/share/file-api), others prefer to use the Vendia Share web interface.

We've updated the user experience for file management, which covers folder and file management as well as version history.

<figure>
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783149620468-736ad5d0-76f0-4553-90ad-29dfbcb76f96.png" width="100%"/>
  <figcaption align="center"><b>Figure 1</b> - <i>Adding a File to Vendia Share</i></figcaption>
</figure>

<figure>
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783149620475-8f95b5b8-9135-461e-9d73-c16c7b7b4b61.png" width="100%"/>
  <figcaption align="center"><b>Figure 2</b> - <i>Viewing File History in Vendia Share</i></figcaption>
</figure>

Through these changes, we expect our web interface users to be able to more quickly and easily share files with their partners using Vendia Share.

## Improved Node Creation

Creating a new Node and adding it to a Universal Application (Uni) takes just a few minutes.  Once the Node is created, the Uni must be updated to incorporate the new node into the consensus process so that it can participate in real-time data sharing with existing nodes.

Over the last few weeks, we've improved concurrency for increased speed and error handling, for increased resilience, within the Node creation and Uni updating process.

## Faster Consensus Conflict Detection

Part of the consensus process that guarantees transaction ordering and correctness across all nodes in a Uni is called conflict detection.  Looking for conflicts happens whenever a transaction is written to the underlying ledger, so the faster we make conflict detection, the faster we can execute transactions.

Over the last few weeks, we've made performance improvements to the conflict detection phase of consensus.

## Tooling and Package Updates

We heavily rely on automation to help us operate and maintain the Vendia Share platform.  The tools and packages we use are constantly kept up-to-date, in part to gain from performance and feature improvements and in part to ensure any known vulnerabilities in our tooling are addressed.

Over the last few weeks, we've made a number of tooling and package updates.  Also, look out for an upcoming blog post to learn more about the tools and technologies the Vendia team uses to operate and maintain Vendia Share.
