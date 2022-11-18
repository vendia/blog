---
draft: false
title: 'New Features and a Fresh Look for the Vendia Share Web Application'
description: "We're excited to share the new Vendia Share user interface with you"
date: '2021-11-26'
tags:
- New Features
- GraphQL
- Share Web
---

## Summary

Our design and engineering teams have been diligently working toward a much improved user user experience for the last few months.  Today, we're excited to share the new [Vendia Share](https://share.vendia.net/) user interface with you.

In addition to the new layout, components, patterns, and colors you'll notice immediately, there are also a few new features to guide you through Uni creation and exploration.


## Uni Creation Workflow

When you create a new Uni through the Vendia Share web application, you're now guided through the process in 4 easy steps.


### Step 1

Decide whether you want to start from scratch or from an example, which conveniently mirrors our Quick Starts.

![Step 1 - Uni Templates](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783144903327-0d9516be-30b4-499b-8ea5-a7147e17f5ac.png)

### Step 2

Give your Uni a name.  Remember, a Uni starting with `test-` will allow for its name to be reused after Uni deletion (a great idea for development and testing).



![Step 2 - Uni Configuration](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783144903548-e00168b3-4fc1-428d-80e2-aad42974aec0.png)



### Step 3

Configure the Nodes in your Uni, including settings like [authorizer type](https://www.vendia.com/docs/share/node-access-control#how-to-set) and [cloud region](https://www.vendia.com/docs/share/cli/guide#supported-cloud-platforms-and-regions).


![Step 3 - Node Configuration](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783144903604-8b9bed3d-c5ee-441e-9907-0c85cf5a04cb.png)


### Step 4

Define the data model for your Uni, from which Vendia Share will automatically create a fully functional GraphQL interface and serverless distributed ledger.  All in about 5 minutes.

![Step 4 - Schema Configuration](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783144903624-11c1be90-9c69-47d8-b82a-125eb7c79d31.png)

This guided approach to Uni creation is a great improvement, especially for those new to the Vendia Share platform.  For those who prefer the command line, the [Share CLI](https://www.vendia.com/docs/share/cli/guide) is still here for you.

## Entity Explorer

Another exciting new feature is the Entity Explorer capability, available to new and existing Unis.  You'll now see a new `Entity explorer` button on each Node alongside the existing `GraphQL explorer` button.

The Entity Explorer view can be used to inspect the contents of Share visually, without requiring any GraphQL.  Previously, the only way to see the contents of Share visually through the Vendia Share web application was executing a query through the GraphQL explorer.

![Entity Explorer Listing](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783144903649-1c627abd-7acf-47ce-ab3c-6d8549cf9794.png)

The Entity Explorer has a rich set of functionality, including the ability to create, update, or delete entities and the ability to see the full history of an entity so you can easily and visually determine how and when it was changed.

![Entity Explorer Details](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783144903667-31896489-addd-4a98-bdcc-c58b946350fd.png)

Enjoy these amazing new Vendia Share features and stay tuned for more!
