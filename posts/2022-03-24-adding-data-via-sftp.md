---
title: 'Add Data via SFTP to Vendia Share'
description: 'Learn how to send a CSV via SFTP to add data to your Uni App with Vendia.'
date: '2022-03-23'
categories:
  - vendia share
  - data sharing
  - data stores
authors:
  - Caroll Casbeer
---

In Part 1 of our series about Integrating Data Stores with Vendia Share, we dove into adding a [CSV via Email](https://www.vendia.net/blog/add-csv-to-vendia-share), but what about adding data via STFP? We can help with that!

## What is SFTP?

The Secure File Transfer Protocol (SFTP) provides reliable data and large file transfers over the web. SFTP is regularly used when transferring sensitive information like PCI, PHI, financial records, or research. Thus it is no surprise that STFP is the standard for financial systems, and health services that have to comply with HIPAA.

## SFTP in Health and Financial Services

For example, let’s say a hospital needs to relay results from a sponsored study to their partnered pharmaceutical company. Most likely, they will use a STFP to transfer the relevant data. STFP ensures a secure and accurate transference of sensitive information.

Similarly, financial companies have their own risk-mitigation and security measures to prevents information leaks. They also have to follow strict compliance protocols when transferring sensitive information like payment records. Thus, SFTP is a popular way to transfer payment records and financials from one institution to another.

## Vendia Share and SFTP

Sr. Solutions Architect, Brian McNamara, provides a [step-by-step guide](https://github.com/vendia/examples/tree/main/share/sftp-to-share) for adding files via SFTP to Vendia Share.

The guides uses the [Vendia Share Command Line Interface (CLI)](https://vendia.net/docs/share/cli) and the [AWS Serverless Application Model (SAM)](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html). Serverless resources like a [AWS Transfer for SFTP](https://aws.amazon.com/aws-transfer-family/) endpoint, [AWS S3](https://aws.amazon.com/s3/) bucket and [AWS Lambda](https://aws.amazon.com/lambda/) function will be deployed. CSV processing with a AWS Lambda function will be triggered by transferring a file to the SFTP endpoint. The Lambda function parses CSVs and publishes data to a node's GraphQL endpoint.
![https://github.com/vendia/examples/blob/main/share/sftp-to-share/img/sftp-to-share.png?raw=true](https://github.com/vendia/examples/blob/main/share/sftp-to-share/img/sftp-to-share.png?raw=true)

Go ahead and try to add a file to your Uni via SFTP and if you face any issues head over to our [Discourse Channel](https://community.vendia.net) to get some help... or better yet, share your success!
