---
title: 'Authenticating Vendia Share Requests Using SAML'
description: Taking advantage of existing SAML Identity Providers when using Vendia Share
longDescription: >
    Learn how to use existing SAML identity providers to work with Vendia Share
date: '2021-11-02'
authors:
  - Brian McNamara
categories:
  - architecture
---

Vendia Share is a Universal Application platform that accelerates the development of multi-party applications. Each party, or participant, has access to their own node within a Universal Application (Uni), allowing them to control a number of settings. One of the settings available is the authentication mechanisms participants can use to access their node programatically using APIs.

Vendia Share allows participants to authenticate node API requests using several methods:
* Vendia user
* Amazon IAM
* Amazon Cognito user pools
* Custom authorizers using AWS Lambda

In practice, one node can use Amazon IAM, another could use an Amazon Cognito user pool, and another could use a custom authorizer - all while sharing the same consistent and permissioned view of data. In this post, we'll focus on Amazon Cognito user pools and, specifically, how to take advantage of an existing SAML 2.0 identity store to authenticate API requests to Vendia Share.

We'll begin by looking at SAML and the value it affords Uni participants and identity administrators.

# SAML

> Security Assertion Markup Language 2.0 (SAML) is an open federation standard that allows an identity provider (IdP) to authenticate users and pass identity and security information about them to a service provider (SP), typically an application or service. With SAML, you can enable a single sign-on experience for your users across many SAML-enabled applications and services. Users authenticate with the IdP once using a single set of credentials, and then get access to multiple applications and services without additional sign-ins. Because SAML-enabled applications delegate authentication to an IdP, the SP can automatically grant, revoke, or change the scope of a user’s access to applications and services when an administrator adds, removes, or modifies the user’s information in the IdP.
> - AWS Identity (https://aws.amazon.com/identity/saml/)

In short, SAML allows users to authenticate to an existing identity provider and use generated credentials to access a downstream service or application, thus enabling a single sign-on experience. End users have the benefit of using a single set of credentials when accessing different applications or services. Administrators improve their ability to manage users across a fleet of services. Providing and revoking access to SAML-enabled services becomes a streamlined process, all from one source - _the IdP_.

Now that we have a high-level understanding of SAML and the value it provides, let's explore Cognito user pools and how they can work together with SAML and Vendia Share.

# SAML + Cognito User Pools + Vendia Share

A user pool is a user directory in Amazon Cognito. It allows users to sign in to web and mobile applications through Amazon Cognito. User pools can also be configured to allow users to sign in through SAML IdPs.

Many identity services, including [Okta](https://www.okta.com/), [Ping Identity](https://www.pingidentity.com/), [Auth0](https://auth0.com/), and [Microsoft Active Directory Federation Services (ADFS)](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services), can function as SAML IdPs and work seamlessly with Cognito user pools. Regardless of the IdP, Amazon Cognito will return a JWT to your mobile and web applications after a successful login. [AWS created a diagram to illustrate the authentication flow](https://d24nhiikxn5jns.cloudfront.net/optimized/docs.aws.amazon.com..cognito..latest..developerguide..imagesamazon-cognito-user-pools-saml-idp-auth-flow.png).

![SAML federation authentication flow](https://d24nhiikxn5jns.cloudfront.net/optimized/docs.aws.amazon.com..cognito..latest..developerguide..imagesamazon-cognito-user-pools-saml-idp-auth-flow.png)

Vendia Share allows API requests to be authorized with the JWT issued by Cognito. There is no additional friction to authenticate users when storing or retrieving data in a Vendia Share node. End users can continue using the same credentials they are likely already using to access SaaS applications. For them, an application using Share as a back-end component is just that - another application.

# Summary

Vendia Share is a service designed to allow partners to share data with each other while minimizing friction. One important aspect of this is giving each party control over how users authenticate API requests. Being able to take advantage of existing authentication mechanisms means there is even less friction to use Vendia Share. We have created a concrete example in our [vendia/examples](https://github.com/vendia/examples) Github repository. [What will you build?](https://share.vendia.net/)
