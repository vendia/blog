---
draft: false
title: "We're .COMical, Neatly Nested, and More"
description: "Vendia is on .com, allows filtering on any nested attribute, updated SDK defaults, and enhanced experience within GraphQL Explorer"
date: '2022-10-28'
tags:
- Improvements
- Developer Experience
id: '1df9406d-aca4-446d-a77c-5c8ecbed49ab'
---

They're at it again! The Vendia Engineering team has a series of new improvements to continue advancing the experience building on Vendia.  

As always, see [our docs](https://www.vendia.com/docs/share) for the complete details of each new feature and [our examples](https://github.com/vendia/examples) for more guidance. 
Questions? Please [contact us](https://www.vendia.com/contact-us).

# We're COMical 

While we are quite amusing, we are also officially on [vendia.com](https://www.vendia.com)! Previously we were nothing-but-net [(vendia.net)](https://vendia.com/) but now our website is live on vendia.com. Check it out yourself! Don't worry; development is still on [share.vendia.net](https://share.vendia.net).

# Neatly Nested Nuggets

Further solidifying Share as the solution for all data operations, filtering is now available on any attribute within any (yes any!) depth of the neatly nested hierarchy - these nested nuggets (attributes) can be used in your GraphQL filters.

**FIGURE: Example of a result set filtered by a nested attribute**

![Filtering on Nested Attribute](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..105127677..198698735-28fdc85a-8c0b-441b-a982-2c3e5aeb1062.png)

# Keeping the SDK Current
As Vendia Share provides new features, we also ensure the SDK includes the latest best-practices as well. In this release, the SDK was updated to use the Vendia Share default for `node_committed` [syncMode](https://www.vendia.com/docs/share/graphql#sync-modes-for-mutations) and includes retries to ensure transaction success. 

Previously, mutations were defaulted with a `syncMode` of `node_ledgered`. Now, when a transaction does not explicitly define the `syncMode`, it defaults as such:

```graphql
mutation _files__add($input: Vendia_File_Input_!, $syncMode: Vendia_SyncMode = NODE_COMMITTED)
```

To override the default, include the `syncMode` option as such:

```js
const response = await entities.product.add(
  {
    name: 'super-widget',
    inventory: 100,
  },
  {
    syncMode: 'ASYNC',  // <-- example syncMode instruction
  }
);

console.log(response?.transaction?.transactionId);
console.log(response?.transaction?._id);
```

For more guidance on using the SDK, including how to override the default in favor of other `readMode` and `syncMode` options, please refer to [our docs on the SDK](https://www.vendia.com/docs/share/vendia-client-sdk).

# GraphQL Explorer Help
We all do it: sometimes we forget to include fields and our queries fail (it's the keyboard's fault). But, Vendia is here to help. When building mutations within the GraphQL Explorer, and expanding the `result`, the `_id` field will be automatically added to ensure the mutation is valid.  User experience improved: check. 

**FIGURE: Example of the auto-inclusion of _id**

![GraphQL Explorer AutoFill_ID](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..105127677..198167182-cfd9108c-492f-42c2-8791-2a0e13353bf0.png)


For more information about Vendia Share's current and near-term product releases, as well as the real-time data sharing workloads for which Share is unmatched, [contact us](https://www.vendia.com/contact-us) as we'd love to _share_ more.
