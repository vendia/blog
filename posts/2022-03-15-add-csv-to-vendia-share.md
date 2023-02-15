---
draft: false
title: "Adding Data in a CSV to Vendia Share Using Email"
description: 'How to add a CSV file to your private blockchain with Vendia Share - no GraphQL needed'
date: '2022-03-15'
authors:
  - Caroll Casbeer
id: 'ab8170c1-018a-4515-b3fe-753640994d1d'
---

(Note, this is Part 1 of our series about Integrating Data Stores with Vendia Share)

In our previous posts we’ve explained why [Vendia standardized on GraphQL for Vendia Share](https://www.vendia.com/blog/why-we-combined-graphql-and-a-serverless-distributed-ledger) to add/edit your shareable data and how [Vendia has enhanced the GraphQL developer experience](https://www.vendia.com/blog/graphql-and-blockchain).
But what if you need to work with partners that prefer to share their data in a CSV file, and they prefer to send you that file over email? 

Don’t worry - Vendia Share can help with that as well.

In real-world use cases, we often see modern data are informed simple (dare we say ‘outdated’?) inputs like CSV or emails.  For example, let’s say there was a regular transaction log that could be exported as a CSV that needs to settle with another transaction log. 
Or let’s say that a tire manufacturer’s ERP creates a daily CSV report of tires and their identification numbers. This information could be uploaded Vendia Share and then used via a [track and trace](https://www.vendia.com/docs/share/quickstart/track-and-trace) application in order to easily notify owners if those exact tires ever needed to be recalled. 
And what if that CSV is attached to an email? We can help with that, too.

There are numerous examples partner data sharing in which one partner’s data does not need to be as 'real-time' or as sophisticated as the rest of the partner network - and often the simplest solution, like adding a CSV, is the best solution. 

## Step-by-step how to add a CSV to Vendia Share

This example will demonstrate how to send scalar data from a comma-separated value (CSV) file to a [Vendia Share Uni](https://vendia.com/docs/share/dev-and-use-unis).  
We will deploy the example using the [Vendia Share Command Line Interface (CLI)](https://vendia.com/docs/share/cli) and the [AWS Serverless Application Model (SAM)](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) to send scalar data from a CSV to a Vendia Share Uni.  
Serverless resources like a [AWS S3](https://aws.amazon.com/s3/) bucket and [AWS Lambda](https://aws.amazon.com/lambda/) function will be deployed.  CSV processing with a AWS Lambda function will be triggered by uploading data to a AWS S3 bucket.  The Lambda function will read through the CSV and publish data to a node's GraphQL endpoint.

![email-to-share Architecture](https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..71095088..158896739-6182e528-f0a5-4382-b2e4-1fab598a7e35.png)

Check out the [step-by-step guide](https://github.com/vendia/examples/tree/main/integrations/files/email-to-share) in our GitHub repository. And if you get stuck head to our [Discourse](https://community.vendia.net) to get some help!
