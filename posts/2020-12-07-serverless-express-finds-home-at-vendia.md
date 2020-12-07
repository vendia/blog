---
title: 'AWS Serverless Express Finds a Loving Home at Vendia'
description: 'The AWS Serverless Express open source project graduates from AWS Labs and is now sponsored by Vendia'
authors:
- Brett Andrews
- Tim Wagner
date: '2020-12-07'
---

> *Tl;dr*: The [aws-serverless-express](https://github.com/vendia/serverless-express) open source project has graduated from [AWS Labs](http://github.com/awslabs/) and is now being actively supported and sponsored by Vendia!

<p align="center">
  <img width="400" src="https://user-images.githubusercontent.com/532272/101377847-35c7b700-3867-11eb-9198-4fcaa66ddfdd.jpg" />
</p>

## About Serverless Express

Back in 2016 I was General Manager of two up-and-coming AWS Services: [AWS Lambda](https://aws.amazon.com/lambda/) and [Amazon API Gateway](https://aws.amazon.com/api-gateway/).

APIs were already well understood by our customer base, but selling Lambda was initially a little more difficult - not only was the idea of a fully managed, pay-by-the-call function hosting service a novelty among public cloud providers, it was also very different from existing developer practices. Case in point: _Express-based web services_.

Lambda launched with support for [Node.js](https://nodejs.org/en/), which helped a lot of customers start using it easily, given their existing familiarity with [JavaScript](https://www.javascript.com/). But for many customers, just having a familiar language wasn’t enough — they were also looking for familiar frameworks, such as [Express](https://expressjs.com/), on which to build their Lambda-based web applications.

After hearing this feedback from many customers, we realized we needed to “meet customers where they were” by bringing Serverless solutions to existing frameworks….and thus the [Serverless Express GitHub project](https://github.com/vendia/serverless-express) was born!

Over the course of the last four years many developers have adopted Serverless solutions, including Serverless Express, to help accelerate development and gain Serverless benefits like lower operational overhead, automatic per-request scaling, built-in fault tolerance, and pay-per-call pricing. Today, the [aws-serverless-express](https://www.npmjs.com/package/aws-serverless-express) NPM package gets over 1.3M downloads per month, and its GitHub repository has over 3.7K stars.

The original author of the Serverless Express project, [Brett Andrews](https://twitter.com/AWSbrett), joined [Vendia](http://vendia.net/) recently, and we realized we can do even more in our mission to help customers share code and data effectively by giving back to the open source community by helping the Serverless Express project “graduate” from its initial location in AWS Labs to a permanent place in Vendia’s repository. As the original project sponsor, and with the guidance of the project’s original author, AWS trusted us to being thoughtful and proactive stewards of this project. We will continue meeting with AWS monthly to gather customer feedback, and be briefed on upcoming AWS Serverless releases so that we may be a launch partner and provide day 1 support in Serverless Express.

## Migration Instructions

If you’re an existing Serverless Express user, you don’t need to take any immediate action. For convenience we’ve published [aws-serverless-express v3.4.0](https://www.npmjs.com/package/aws-serverless-express) that takes a direct dependency on the new official package [@vendia/serverless-express@^3.4.0](https://www.npmjs.com/package/@vendia/serverless-express).

This means that by simply upgrading to aws-serverless-express@3.4.0 you’ll get all downstream patches and features without needing to update your code. Alternatively, you can run the following command  to take a direct dependency on the new official package

```bash
npm uninstall aws-serverless-express && npm install @vendia/serverless-express
```

After updating the deps, update your code accordingly - e.g., change your imports.

```diff
- require('aws-serverless-express')
+ require(‘@vendia/serverless-express')
```

If you're new to Serverless Express and wondering how to get started, you can deploy a Serverless REST API to AWS in under 5 minutes by following the [Serverless Express Basic Starter on GitHub](https://github.com/vendia/serverless-express/tree/master/examples/basic-starter).

## Whats Next

In January 2021 we'll be releasing Serverless Express v4 that:

1. Supports event sources other than API Gateway such as ALB, Lambda Edge, HTTP API, and makes it easy to provide your own custom event source mapping for other services that are integrated with Lambda
1. Has improved logging and debugging support
1. Is more extensible and simpler to use with an improved developer experience
1. Uses Promise resolution by default
1. Is upgraded to Node.js 10 (compatible with Node.js 12+)
1. Makes it easier to work with Custom Domain Names
1. Has improved documentation and examples
1. Supports Multiple header values

_What’s in it for Vendia?_ First of all, Brett and I feel a strong connection to helping the Serverless community succeed. Technologies like Lambda, managed API and database services, and other Serverless offerings power Vendia’s implementations and help us deliver scalable, low-cost code and data sharing solutions for our customers. We also continue to believe strongly in the mission of Serverless Express: To give developers a simple, scalable platform that meets them where they are, and then helps them gain the best of what the cloud has to offer...without unnecessary retraining, rewriting, or porting exercises. We're also excited to find ways to bring Vendia Share - the next generation Serverless platform - and Serverless Express users closer together with easy ways to use both platforms in combination.

To all the existing (and future) Serverless Express users, we look forward to making your experience even better. To all the project contributors, we look forward to being great partners, building on your existing contributions and successes in this project. And to AWS, a huge “Thank You” for believing in this idea back when it felt risky and uncertain,and for allowing it to leave the nest now that it’s grown. Stay tuned for more technical and project roadmap details coming soon...and _Go Serverless!_

Tim Wagner, Vendia CEO (and former AWS Lambda General Manager) &
Brett Andrews, Vendia Senior Developer (and former Amazon API Gateway Developer)
