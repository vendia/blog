---
title: 'Improving Smart Contracts Validation'
description: 'Delivering improved validation and error handling'
date: '2021-12-24'
draft: false
tags:
- Smart Contracts
- Improvements
---

The Vendia team has been hard at work improving the capabilities of Vendia Share [Smart Contracts](https://www.vendia.net/docs/share/smart-contracts).

We have improved `inputQuery` validation to ensure the query used to retrieve data from the Universal Application (Uni) is valid based upon the Uni's schema. This means that you, as a developer, are able to know whether your Smart Contract `inputQuery` is valid or not when the Smart Contract is _created_, not when it is _invoked_.

We have also made error message more consistent when there are problems with the `inputQuery` or `outputMutation`. This isn't a change in functionality but it does make the developer experience more coherent.

[Stay tuned](https://www.vendia.net/releases) for updates to Vendia Share!
