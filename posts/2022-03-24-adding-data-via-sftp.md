---
title: 'Add Data via SFTP to Vendia Share'
description: 'Send a CSV via SFTP to add data to your Uni'
date: '2022-03-23'
authors:
  - Caroll Casbeer
---

In Part 1 of our series about Integrating Data Stores with Vendia Share, we dove into adding a [CSV via Email](https://www.vendia.net/blog/add-csv-to-vendia-share), but what about adding data via STFP? We can help with that!

## What’s an SFTP?

A Secure File Transfer Protocol (SFTP) provides reliable data and large file transfers over the web. SFTP is regularly used when transferring sensitive information like PCI, PHI, financial records, or research. Thus it is no surprise that STFP is the standard for financial systems, and health services that have to comply with HIPAA.   
## SFTP in Health and Financial Services
For example, let’s say a hospital needs to relay results from a sponsored study to their partnered pharmaceutical company. They can’t just email it - it could be hacked. Instead, they use a STFP to transfer the data and relevant files. The STFP ensures a secure and accurate transference of sensitive information.
Similarly, any financial company has it’s own risk-mitigation and security measures as they are the biggest target of hacks and fraud. On top of those measures they also have to follow strict compliance protocols when transferring sensitive information like payment records. Thus, SFTP is a popular way to transfer payment records and financials from one institution to another. 
## Vendia Share and SFTP
Sr. Solutions Architect, Brian McNamara, provides a [step-by-step guide](https://github.com/vendia/examples/blob/main/share/sftp-to-share/img/sftp-to-share.png) for adding files via SFTP to Vendia Share. 
The guides uses the [Vendia Share Command Line Interface (CLI)](https://vendia.net/docs/share/cli) and the [AWS Serverless Application Model (SAM)](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html). Serverless resources like a [AWS Transfer for SFTP](https://aws.amazon.com/aws-transfer-family/) endpoint, [AWS S3](https://aws.amazon.com/s3/) bucket and [AWS Lambda](https://aws.amazon.com/lambda/) function will be deployed. CSV processing with a AWS Lambda function will be triggered by transferring a file to the SFTP endpoint. The Lambda function parse the CSVs and publish data in CSVs to a node's GraphQL endpoint.
![https://github.com/vendia/examples/blob/main/share/sftp-to-share/img/sftp-to-share.png?raw=true](https://github.com/vendia/examples/blob/main/share/sftp-to-share/img/sftp-to-share.png?raw=true)
Go ahead and try to add a file to your Uni via SFTP and if you face any issues head over to our [Discourse Channel](https://github.com/vendia/examples/blob/main/share/sftp-to-share/img/sftp-to-share.png) to get some help... or better yet, share your success!
