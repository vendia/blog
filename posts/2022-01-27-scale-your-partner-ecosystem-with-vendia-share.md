---
title: "Scale Your Partner Ecosystem with Vendia Share"
description: "Vendia Share simplifies the process of sharing data in real-time between organizations. Traditionally, sharing data in this manner is tough."
date: '2022-01-27'
categories:
- tutorials
- concepts
- vendia share
- partners
authors:
- Brian McNamara
---

[Vendia Share](https://www.vendia.net/product) simplifies the process of sharing data in real-time between organizations in a controlled, secure, and ledgered manner. Traditionally, sharing data in this manner is tough. There are several challenges that come to mind.

# Challenges 

Maintaining a single source of truth between organizations can be difficult. Databases are a popular information store, but securely sharing data from them with other organizations involves a number of compliance, security, and networking considerations that often mean slow action. Some organizations choose to share critical data with partners via spreadsheets. Using this method presents its own set of challenges. It's not apparent which spreadsheet is the latest and most complete source of truth.

Vendia Share helps you solve this problem by provisioning a node for each organization that you wish to share data with. Each node provides a consistent view of the data that is shared with other parties, and each node has its own API endpoint dedicated to the organization that needs to securely access the data.

Centralized approaches to data sharing often result in disjointed authentication (AuthN) and authorization (AuthZ). The central organization will likely have a preference for how partners will log in to access data. It will also likely have existing tooling and mechanisms in place to support users. However, partners in the data network may have different means of authenticating and managing users. Vendia Share is flexible enough to allow each participant in a Uni to configure their own authorization type.

Onboarding new participants to a partner data network historically has been difficult. Often technical teams need to update topologies and networks for each new addition. The steps involved to bring in a new partner can take days if not months. Vendia Share reduces the time to minutes and does without the support of highly valuable engineers, as you will see in this post.

# Getting Started with Partner Onboarding

## Creating Vendia Share Accounts

Vendia customers share data using a Vendia Share Universal Application (or "Uni" for short). Each participant in a Uni has a dedicated node for reading and writing data. We will simulate two companies sharing data by using two Vendia Share accounts. If you are not familiar with how to create a Vendia Share account, please consult our [Getting Started](https://www.vendia.net/blog/getting-started-with-vendia-share#creating-an-account) documentation. We will refer to these accounts as **Account 1** and **Account 2**. You will create your Uni using **Account 1**. **Account 2** will be invited to join the Uni and create its own Vendia Share node. 

**NOTE:** The example in the blog will use two separate Vendia Share accounts associated with the same email account. I've used the [plus ("+") sign](https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html) to associate two Vendia Share users with the same email account.

## Creating a Uni

For the purposes of this walkthrough, we will use the [Product Catalog](https://www.vendia.net/docs/share/quickstart/simple-product-catalog) from our Quick Starts. Once you've created a Uni using **Account 1**, feel free to proceed with the remainder of the steps in this blog.

**NOTE:** The commands below assume a Uni name of `test-uni-management`. Adjust commands below that use the Uni name to match the one you used.

## Inviting Your Partner

Now that the Uni is up and running, you will invite **Account 2** to the Uni. You can do this either with the Vendia Share web app or the Share CLI. For the purpose of this blog, you'll use the CLI syntax. My **Account 1** e-mail address format is `brian+account1@vendia.net` and my **Account 2** e-mail address is `brian+account2@vendia.net`. 

Vendia Share features RBAC support for controlling who has access to your Uni - we will be posting a more detailed blog of how that capability works in a future blog post. One of the RBAC features is the ability to invite another Vendia user to create a node and join your Uni. We accomplish this task with the following command.

First, ensure you have authenticated to the Share CLI using the `share login` command. Be sure to use the Vendia account associated with **Account 1**.

```bash
% share login
> Enter your Vendia email address
Enter your email: brian+account1@vendia.net

> Enter your password for brian+account1@vendia.net
Password: *********

✔  Logged in as brian+account1@vendia.net

```

Once you have authenticated successfully, use the `share uni invite` command to begin the invitation process.

```bash
share uni invite --uni test-uni-management --user brian+account2@vendia.net
```

**NOTE:** The name of my Uni is `test-uni-management`. Be sure to adjust the command and use the name of the Uni you created.

You will see output that is similar to the following:

```
Invite Successful

User brian+account2@vendia.net successfully invited to Uni test-uni-management
brian+account2@vendia.net has been sent an email invite link.

For brian+account2@vendia.net to join, they must:
 - click email link
 - OR join by running the share uni join CLI command with the token below

Invite token:    12345678-abcd-1234-abcd-123456789012
Expires on:      2022-01-30T02:26:24.872624
```

We will export that invite token as an environment variable (be sure to substitute your invite token in the syntax that follows)

```bash
# This command will save the Invite token for later use by **Account 2**
export VENDIA_TOKEN=12345678-abcd-1234-abcd-123456789012
```

Your **Account 2** email address should have a message from Vendia, inviting you to join the Uni created by **Account 1**.

## Joining the Uni with Account 2

You can use the Vendia Share web app when logged in as **Account 2** to complete the Uni join process. You can click on the link included in the invitation email. However, I will show you how to use the Share CLI to complete the same task.

**NOTE:** Make sure you've created the `VENDIA_TOKEN` variable from the `share uni invite` output.

You will need to log out using `share logout` and log back in with `share login`. Specify the email address and password associated with **Account 2**.

```bash
% share logout
You are now logged out of brian+account1@vendia.net

Run "share login" to log back in
% share login
> Enter your Vendia email address
Enter your email: brian+account2@vendia.net

> Enter your password for brian+account2@vendia.net
Password: *********

✔  Logged in as brian+account2@vendia.net
```

Once you're authenticated as **Account 2** you can run `share uni join` to accept the invitation and specify your node's settings.

```bash
share uni join --uni test-uni-management \
--token $VENDIA_TOKEN \
--config '{"name":"account2-node","userId":"brian+account2@vendia.net", "region":"us-west-2", "settings": {"apiSettings": {"auth": {"authorizerType": "API_KEY"}}}}'
```

You will see output similar to the following:

```bash
addition of new node account2-node in uni addition of new node account2-node in uni test-uni-management.unis.vendia.net is now in progress
```

**NOTE:** The name of my Uni is `test-uni-management`. Be sure to adjust the command and use the name of the Uni you created.

You can observe the deployment process of the Node for **Account 2** by running the `share get` command.

```bash
share get --uni test-uni-management
```

You will see output similar to the following

```bash
Getting test-uni-management info...
┌─────────────────────┐
│   Uni Information   │
└─────────────────────┘
Uni Name:    test-uni-management.unis.vendia.net
Uni Status:  ADDING
Node Count:  2
Nodes Info:
├─ ⬢ ProductCatalog
│  ├─ name: ProductCatalog
│  ├─ status: RUNNING
│  └─ resources:
└─ ⬢ account2-node
   ├─ name: account2-node
   ├─ status: DEPLOYING
   └─ resources:

To display schema & initial state, use the --json flag. Example: "share get test-uni-management.unis.vendia.net --json"
```

The node creation process will take a few minutes. When the node creation is complete, feel free to step through the [Product Catalog Quick Start](https://www.vendia.net/docs/share/quickstart/simple-product-catalog#step-3---query-catalog-data) and observe how data updates can be viewed by both participants in the Uni.

## Cleanup

Once you are finished running the example you can delete the Uni. You will run the `share uni delete` command as **Account 1**.

```bash
share uni delete --uni test-uni-management
```

**WARNING:** Deleting a Uni is destructive and will remove all of its underlying data.

**NOTE:** The name of my Uni is `test-uni-management`. Be sure to adjust the command and use the name of the Uni you created.

# Summary

In this blog post, you created a Uni and added a second participant in minutes, allowing multiple partners to quickly and securely share data in real-time. Once you have completed the walkthrough, feel free to share your results on social media and tag Vendia (Twitter: [@VendiaHQ](https://twitter.com/VendiaHQ), Linkedin: [Vendia](https://www.linkedin.com/company/vendiahq/)) so that we can see what you built!
