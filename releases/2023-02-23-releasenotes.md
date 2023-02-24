---
draft: false
title: Data Security, New Explorer, and Vendia Orgs
description: A release focusing on Data Security, Vendia's new GraphQL editor,
  and Vendia Orgs.
date: 2023-02-23
seo:
  noindex: false
  title: 2023-02-23 - "Data Security, New Explorer, and Vendia Orgs"
  keywords: Data Security, GraphQL, OFAC, Geoblocking, Collaborating, Data
    Sharing, Data Compliance
  description: A release focused on Data Security, Vendia's GraphQL Explorer, and
    Vendia Orgs
createdBy: ""
createdAt: ""
updatedBy: AVukovic-Vendia
updatedAt: 2023-02-24T16:12:40.402Z
id: 71ddf796-125a-41ac-bb35-e6bd47b32c97
---

Vendia strives to constantly improve our product! This month, we’ve focused on data security, releasing a new version of our GraphQL Explorer, and making it easier than ever to manage users within your organization.

## Financial Services Protections For All Unis

When deploying a new Universal Application, customers are able to enable OFAC country geo-blocking. When enabled, all traffic originating from OFAC-sanctioned countries will immediately be blocked from the Uni.

![](https://lh6.googleusercontent.com/_Pd-azEjs7XwQMDukMjOnWJ03faIScZgDeb6oDk6vM8ERWUoGJHOTnGxoA08jz9VszKVeWeGZxOeIw2m2dCvWxZzWDOoA0jm6ZK_-bH-jR6WGKpEofXo0Y5p0CEAOb41sNTCW0SK1O5mPVTfDkqvB8A)

To enable this change for *new* Unis inside of Share, check the **Financial Services Protections** box during Step 2 of Uni deployment, as shown above. For *existing* Unis, this option can be enabled under *Uni Settings*, as shown below. 



![](https://lh3.googleusercontent.com/0BnoLpxgZkae7q91tGYipsuzoCBtgNg-x_ozbFEBJVe5d7dkZmOVQfYS9FMohGmfIvO0S91ADKYUO8Cb2Nh8z715Qx_Bm4fg0NXsRFVNZhuXqwYIa8L_dz4KbrGahP6UO7KuR1RmO1wgNXhez77SEMw)

When deploying new Unis with the Vendia CLI, OFAC is enabled in the **registration.json file** by noting the type as **“FINANCIAL_SERVICES”**, like below.



![](https://lh6.googleusercontent.com/W28ytBOikfRYLfs99spRFqOhKY4VcwNGjaV8TD4gQ2nLGyPyoM0EzWnLzAe2wfIZlyX-p_OJMNQ4EXbiHDO5LNt2GborUF4Su0ClyPWh_WXd_60SOWJDirPh6_jENFuOZwy6I5NQaLF6kL_X8gLvrzw)



**Note:** As part of the upgrade process to enable financial services protections *in existing Unis*, each Node in the Uni will receive new GraphQL and WebSocket subscription endpoints. The previous Node endpoints will be disabled.



## New GraphQL Explorer  

We rolled out a new version of our GraphQL Explorer this month. The GraphQL Explorer gives customers the opportunity to query and mutate their Node’s data directly from the Vendia Share web app, providing a sandbox for quick data experimentation and turnaround. The GraphQL Explorer introspects the Uni's schema in order to generate a full set of APIs to interact with your data.

![](https://lh6.googleusercontent.com/zgpsvmNqUAbrz7DoqZdhJECzbd2KslA_cZX_d4vMnBU6CakW0-bf1EmdkTophUPUPg29xdmGBFfv2Qpuej0lKAKfpQ3xohFYT8XlpqJaYRIv8cr_n71sAmDHpqo-W4WPO2Y5VAtxtT8PWwE3YMxvCdo)

Can’t go without saying - the explorer now also supports dark mode!  

## **Vendia Orgs**  

This month, we also rolled out Vendia Orgs, a way to more easily manage RBAC (Role-Based Access Control) for anyone who shares your email domain. Instead of manually setting individual policies, Vendia Orgs provides you multiple access templates to quickly delineate access across both individual Unis as well as all Unis in an organization at a user level.

![](https://lh6.googleusercontent.com/QvVnnaL5O4GTi-xyXC59rTB8VtlGJYziGQDsxTPyJFUL2QvnaP8D3C5uXs71LS8lLkn9FRwFlj9vLX6NKlamC-EiB43P4-fL_wWdtkIgXR_C6qRQs8QSdB1X1RsVJLY-efUPpeOewVBtEP-lfpcaurk)

## Try us out

Vendia is powered by the scale of serverless and reliability of blockchain to make data sharing easy across teams and organizations. [Get started for free](https://www.vendia.com/pricing) to see how Vendia can help you advance in your data sharing journey.