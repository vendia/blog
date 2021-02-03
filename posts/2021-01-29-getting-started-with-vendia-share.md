---
title: "Getting Started With Vendia Share"
description: 'Learn how to share code and data across accounts, regions, clouds, and partners with Vendia share'
longDescription: 'Ready to share code and data across accounts, regions, clouds, and partners? Ready to use any service from any cloud provider to build upon your real-time data? This post will get you started with everything you need to learn about unis and how to develop with Vendia Share'
date: '2021-01-29'
authors:
  - Cory Forsythe
  - Brian McNamara
---

# Welcome, Developers!
Today we’re excited to open Vendia Share, our enterprise platform for sharing data and code,
to all developers. Vendia’s enterprise customers already experience the benefits
of being able to build data-driven applications for supply chains,
logistics tracking, AI/ML data sharing and much more. Starting today,
developers can also experience the ease of using Vendia Share on AWS to
create serverless applications that seamlessly integrate data and code across
different regions, accounts, and owners. (Read our full announcement [here](https://www.vendia.net/blog/welcome-to-developer-preview).)

Our experience launching services like AWS Lambda in the past taught us that
developers are the most important audience for any technology platform.
They may not be the ones paying the bills, but over the long haul developers
“vote with their feet”...and the platforms they wind up loving are the ones
that win.

We created Vendia Share to make it easier for anyone to create applications
that bring the same level of consistency, correctness, and timeliness to
multi-party apps that developers are used to getting from centralized databases
and single-owner cloud services. With Vendia Share, anyone who can write a
JSON Schema can create a distributed application with powerful cloud function
data triggers in under 10 minutes. That’s a huge step forward for application
developers who often struggle with the challenges of spanning different regions,
multiple accounts, and cross-organizational interfaces. The heavy lift of
synchronizing and replicating data, maintaining an immutable and tamperproof
ledger, and ensuring trustworthy updates (even among distrustful partners) all
comes ready to use “out of the box”.

Vendia Share doesn’t just make it easy to share...it also makes it easy to
integrate with your existing systems. Have data in Amazon SQS that you’d like
to ingest, want to hook up mobile users with social identity providers, or need
to send update events to an AWS Lambda function? We have you covered with
code-free integrations - just issue a GraphQL update to your settings and
you’re off to the races.

There’s a lot more to learn and explore - and for you to teach us! One of the
reasons to open our platform up is to get feedback and learning during this
Developer Preview phase that will make our GA product even better.
Tell us what you think, and help us improve!

Whether you are a developer, business manager, data scientist, or anything in between, getting started with Vendia Share is fast and easy.  In a matter of minutes, you can be on your way to creating distributed real-time applications, and sharing data across clouds, accounts, regions, and with partners. 

## Creating an Account

Before you can start creating, you will need a Vendia Share account.  You can quickly sign up at [https://share.vendia.net/signup](https://share.vendia.net/signup).

## Start thinking 'uni-versally'
Universal Applications, or unis, are the foundation upon which you build with Vendia Share.  You can create your first uni from our web interface or using the Vendia Share Command Line Interface (CLI).  

Creating a uni requires zero code, however you do need a plan for your data model.

For more information on unis, checkout our [“What is a uni?” video](https://youtu.be/8HmwVOo17BE)

Read more about unis and how they work [https://vendia.net/docs/share/dev-and-use-unis](https://vendia.net/docs/share/dev-and-use-unis)

## Creating your first uni
Ready to get started? The Vendia team has put together some great quick starts to help guide you through the creation of your first uni.

If you prefer to use a web interface you can follow along at [https://vendia.net/docs/share/quickstart/web](https://vendia.net/docs/share/quickstart/web)

Prefer a terminal?  We have you covered - check out the [CLI quick start](https://vendia.net/docs/share/quickstart/cli)

## Diving Deeper
Once you are comfortable with the Vendia Share service and are ready to dive deeper, we encourage you to explore our more advanced quick starts.  

We believe that practical examples are a fantastic way to learn. As such, we have created some quick starts from use cases that are popular amongst our customers and the Vendia team.

### Shopping List
Get started with real-time data sharing strategies with this easy to understand quick start. You will build a uni that helps solve a common problem we all deal with, managing a shopping list.

[https://vendia.net/docs/share/quickstart/shopping-list](https://vendia.net/docs/share/quickstart/shopping-list)

### Track And Trace
The ability to share and work with data in real-time with partners is critical in supply chain management. This quick start demonstrates how you can quickly build a system to track goods and trace problems in a modern supply chain.

[https://vendia.net/docs/share/quickstart/track-and-trace](https://vendia.net/docs/share/quickstart/track-and-trace)

### Product Catalog
Build a product catalog with Vendia Share and get more familiar with some of our data management capabilities. You will expand your knowledge from prior quick starts and learn how to constrain data and work with multiple data types.

[https://vendia.net/docs/share/quickstart/simple-product-catalog](https://vendia.net/docs/share/quickstart/simple-product-catalog)

### Inventory Management

Deploy a sample inventory channel involving multiple parties such as a distribution center and two retailers. Build upon your existing knowledge by using our integrations.

[https://vendia.net/docs/share/quickstart/inventory-management](https://vendia.net/docs/share/quickstart/inventory-management)
	
You can view all of our quick starts [here](https://vendia.net/docs/share/quickstart)

## Developer Resources

Developers find learning Vendia Share is quick and easy. Our zero-code approach to APIs and a solution backed by leading serverless architecture greatly reduces the learning curve. Whether you are just getting started in this space or have been developing for years, we have some helpful resources that can accelerate building with Vendia Share.

### Introduction to GraphQL

Vendia Share APIs are generated with zero code from your data models. These APIs take advantage of GraphQL to make working with your data and sharing your code easy.  If you have not worked with GraphQL prior, this is a great place to start learning more.

[https://graphql.org/learn/](https://graphql.org/learn/)

### Data Modeling

Vendia Share works upon a data model (we call it Schema) that you define.  Share uses an industry standard specification for this model. Read more about that specification and find examples of its use here.

[https://vendia.net/docs/share/data-modeling](https://vendia.net/docs/share/data-modeling)

### Integrating with other systems

The ability to connect Vendia Share with other systems opens numerous possibilities. The fact that these integrations may exist in any given account, region, cloud, or partner, gives developers the flexibility to intelligently design solutions with Vendia Share.  Read more about our integration capabilities here.

[https://vendia.net/docs/share/integrations](https://vendia.net/docs/share/integrations)

## Getting Touch

Need a little extra help? Have an exciting use case you would like to vet further?  We would enjoy hearing more about your experiences and where Vendia can help. [Reach out today](https://vendia.net/contact-us)
