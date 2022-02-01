---
title: 'Improved User Experience and Developer Experience'
description: "Vendia Share Node Details View gets a New Look, and Smart Contracts Editor improves developer productivity"
date: '2022-01-31'
draft: false
tags:
- User Experience
- Developer Experience
---



## Summary

Our design and engineering teams worked diligently on a node details view redesign, which we're excited to share with you today. You'll also see noticeable developer experience improvements on the smart contracts details and the smart contract edit views. 


## Node Details Redesign

Now you don’t have to search hard to find the newly redesigned action buttons - `Entity Explorer`, `GraphQL Explorer`, `File Explorer`, and `Smart Contracts`. They are front and center, ready for use. The details such as the `GraphQL URL` and the `Graph API Key`  have moved below the action buttons and the other resource ARNs that used to be on this page have moved to the `Manage Node' > `Resources` tab.

<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/152025230-68abb6a8-2dd3-47fe-b7b3-c89c27177e1e.png" />
</p>
<p align="center">Figure 1: Node Details Page</p>


## Smart Contracts Editor Enhancements

We added more information to the Smart Contracts details page, including the Vendia resource name of the smart contract. In addition, we've auto-formatted the input query and the output mutation.



<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/152026225-fab1ad94-f305-4277-803e-844106a7af03.png" />
</p>
<p align="center">Figure 2: Smart Contracts details page</p>

Additionally, we are now auto-populating the query args based on the input query when invoking a smart contract. Previously, the `Input Query` Args was empty `{}`. The default value of inferred keys is set to `null`. You will replace `null` with a valid value. 



<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/152026362-eef7a4e2-a85a-4610-9b94-a8a068f41cc1.png" />
</p>
<p align="center">Figure 3: Input Query Arguments Editor</p>


The Smart Contracts `Edit` page now includes a formatted editor instead of a plain text box. We also added links to the docs in case you need a reference as you work on your first Vendia Share smart contract.


<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/152026673-bfc9c84d-0cd1-4d92-814d-2a700242e76e.png"/>
</p>
<p align="center">Figure 4: Smart Contracts Edit Page</p>


Enjoy these amazing new Vendia Share developer productivity improvements and stay tuned for more!

