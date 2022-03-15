# Vendia Share with .csv and Email

Audience: Developer
Category: tutorial
Theme: Move data
Writer(s): Anonymous, Anonymous

# Add a .CSV (and Email) to Vendia Share

*How to add a .csv file to your private blockchain with Vendia Share - no GraphQL needed.* 

(Note, this is Part 1 of our series about Integrating Data Stores with Vendia Share)

In our previous posts we’ve explained why [Vendia standardized on GraphQL for Vendia Share](https://www.vendia.net/blog/why-we-combined-graphql-and-a-serverless-distributed-ledger) to add/edit your sharable data and how [Vendia has enhanced the GraphQL developer experience](https://www.vendia.net/blog/graphql-and-blockchain).

But what if you need to work with partners that prefer to share their data in a CSV file, and they prefer to send you that file over email? 

Don’t worry - Vendia Share can help with that as well.

In real-world use cases, we often see modern data are informed simple (dare we say ‘outdated’?) inputs like .CSV or emails.  For example, let’s say there was a regular transaction log that could be exported as a .csv that needs to settle with another transaction log. 

Or let’s say that a tire manufacturer’s ERP creates a daily .CSV report of tires and their identification numbers. This information could be uploaded Vendia Share and then used via a [track and trace](https://www.vendia.net/docs/share/quickstart/track-and-trace) application in order to easily notify owners if those exact tires ever needed to be recalled. 

And what if that .csv is attached to an email? We can help with that too <<Link to that section>>

There are numerous examples partner data sharing in which one partner’s data does not need to be as ‘real-time’ or as sophisticated as the rest of the partner network - and often the simplest solution, like adding a .csv, is the best solution. 

## Step-by-step how to add a .CSV to Vendia Share

This example will demonstrate how to send scalar data from a comma-separated value (CSV) file to a [Vendia Share Uni](https://vendia.net/docs/share/dev-and-use-unis).  

We will deploy the example using the [Vendia Share Command Line Interface (CLI)](https://vendia.net/docs/share/cli) and the [AWS Serverless Application Model (SAM)](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) to send scalar data from a CSV to a Vendia Share Uni.  

Serverless resources like a [AWS S3](https://aws.amazon.com/s3/) bucket and [AWS Lambda](https://aws.amazon.com/lambda/) function will be deployed.  CSV processing with a AWS Lambda function will be triggered by uploading data to a AWS S3 bucket.  The Lambda function will read through the CSV and publish data to a node's GraphQL endpoint.

![https://www.notion.soimg/csv-to-share.png](https://www.notion.soimg/csv-to-share.png)

Check out the step-by-step guide in our GitHub repository. And if you get stuck head to our Discourse to get some help!