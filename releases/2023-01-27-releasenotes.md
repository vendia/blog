---
draft: true
title: No more creating unis in the wrong namespace and better CI/CD process
description: A release focusing on improved UI and additional CLI options
date: 2023-01-27
seo:
  noindex: false
  title: No more creating unis in the wrong namespace and better CI/CD process
  description: A release focusing on improved UI and additional CLI options
createdBy: ""
createdAt: ""
updatedBy: Li Dai
updatedAt: 2023-01-27T20:50:56.724Z
id: aae57332-15d6-4f0d-8c45-da39b9c93075
---

Vendia strives to constantly improve our product. Preventing potentially expensive mistakes from happening is one recent example. 

## No More Accidents!
When we see something that has the potential to allow for user error, we fix it right away. Our engineering team added a dropdown menu for namespace choice in the process of Uni creation.

![Uni_space](to be replaced)

This change will prevent Unis from being created outside of the customer's namespace by accident.  This ensures Unis for all Enterprise customers to get the single-tenant, complaint, and secure they expect.

## CLI Changes
Users can now bypass interactive prompts when evolving their schemas using the CLI by setting the new `--approval-required` option to NEVER. This adds an extra layer of flexibility for automation or CI/CD processes. Here’s an example of the command:

```
# --approval-required=ALWAYS|NEVER
share uni evolve --uni <uniName> –approval-required=NEVER  --schema schema.json
```

Try us out
Vendia is powered by the scale of serverless and reliability of blockchain to make data sharing easy across teams and organizations. Get started for free to see how Vendia can help you advance in your data sharing journey.