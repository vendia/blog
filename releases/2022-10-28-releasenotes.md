---
title: 'We're .COMical and Always Hardening'
description: 'Vendia is on .com, advnced Azure beta features, expanded success rate for a variety of transaction scenarios, updated SDK defults, and enhanced experience within GraphQL Explorer'
date: '2022-10-28'
draft: false
tags:
- Improvements
- Azure
- Developer Experience
---

They're at it again! The Vendia Engineering team has a series of new improvements to continue advancing the experience building on Vendia.  

As always, see our [Docs](https://www.vendia.com/docs/share) for the complete details of each new feature and our [Examples](https://github.com/vendia/examples) for more guidance. 
Questions? Please [contact us](https://www.vendia.com/contact-us).

# We're COMical 
While we are quite amusing, we are also officially on [Vendia.com](https://www.vendia.com)! Previously we were nothing-but-net [(Vendia.net)](https://vendia.net/) but now our website is live on Vendia.com. Check it out yourself! Don't worry; development is still on [share.vendia.net](https://share.vendia.net).

# Advancing Azure Beta Feature
Sharing, without limitation, is our ethos and we continue expanding the surface area on which to share. We've added validations and stabilization for sharing between two azure-backed nodes by resolving errors associated with metadata availability, handling mutations, and cross-cloud file sharing.

# Ensuring Transaction Success
We continue to make improvements to the speed of [consensus](https://www.vendia.com/docs/share/terms-and-definitions#consensus) and success rate of transactions by reducing scenarios in which errors might display. This release focused on resolving errors due to empty versions of data, complex access rules (ACLs), duplicate attribute names exist in different nested paths, and various uni deployments. We also removed any restrictions caused by WAF API limits.

# Keeping the SDK Current
As Vendia Share provides new features, we also ensure the SDK includes the latest best-practices as well. In this release, the SDK was updated to default with `node_committed` [readMode](https://www.vendia.com/docs/share/graphql#read-modes-for-queries) and includes retries to ensure transaction succcess. 

# GraphQL Explorer Help
We all do it: sometimes we forget to include fields and our queries fail (it's the keyboard's fault). But, Vendia is here to help. When building mutations within the GraphQL Explorer, and expanding the `result`, the `_id` field will be automatically added to ensure the mutation is valid.  User experience improved: check. 

**FIGURE 1: Example of the auto-inclusion of _id in the response{}**

![GraphQL Explorer AutoFill_ID](https://user-images.githubusercontent.com/105127677/198167182-cfd9108c-492f-42c2-8791-2a0e13353bf0.png)



For more information about Vendia Share's current and near-term product releases, as well as the real-time data sharing workloads for which Share is unmatched, [contact us](https://www.vendia.com/contact-us) as we'd love to _share_ more.
