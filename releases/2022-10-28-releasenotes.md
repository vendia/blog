---
title: 'We're .comical and Always Hardening'
description: 'The Vendia team focused on meeting developers where they're at by ensuring a variety of transaction scenarios complete without errors'
date: '2022-10-28'
tags:
- add tags
- add tags
---

They're at it again! The Vendia Engineering team has a series of new improvements to continue advancing the experience building on Vendia.  

As always, see our [Docs](https://www.vendia.com/docs/share) for the complete details of each new feature and our [Examples](https://github.com/vendia/examples) for more guidance.

Questions? Let us know: [contact us](https://www.vendia.com/contact-us).

# We're COMical 
While we are quite amusing, we are also officially on [Vendia.com](https://www.vendia.com)! Previously we were nothing-but-net (Vendia.net) but now our website is live on Vendia.com. Check it out yourself! Don't worry, development is still on [share.vendia.net](https://share.vendia.net).

# Advancing Azure Beta Feature
Sharing, without limitation, is our ethos and we continue expanding the surface area on which to share. We've added validations and stabilization in sharing between two azure-backed nodes by resolving errors associated with metadata availability, resolving mutations, and cross-cloud file sharing.

# Continued Hardening with Ensuring Transaction Success
We continue to make improvements to the speed of [consensus](https://www.vendia.com/docs/share/terms-and-definitions#consensus) and success rate of transactions by reducing scenarios in which errors might display due to empty versions of data, complex access rules (ACLs), or duplicate attribute names in different nested paths. We also work to ensure uni deployments are successful and have removed any restrictions due caused by WAF API limits.

# Keeping the SDK Current
As Vendia Share provides new features, we ensure the SDK includes the best-practices as well. In this release, the SDK was updated to default with `node_committed` [readMode](https://www.vendia.com/docs/share/graphql#read-modes-for-queries) and include retries to ensure transaction succcess. 

# GraphQL Explorer Help
We all do it: sometimes we forget to include fields and our queries fail (it's the keyboard's fault). But, Vendia is here to help. When building mutations within the GraphQL Explorer, and expanding the `result`, the `_id` field will be added to ensure the mutation is valid.  User experience improved: check. 

`-- Add image`


For more information about Vendia Share's current and near-term product releases, as well as the real-time data sharing workloads for which Share is unmatched, [contact us](https://www.vendia.com/contact-us).
