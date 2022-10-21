---
title: 'Understanding API Security with GraphQL'
description: 'Explore common forms of API security, how they specifically relate to GraphQL APIs, and how fully managed platforms like Vendia Share reduce the API security burden often faced by development teams.'
date: '2022-10-21'
categories:
- concepts
- graphql
- datamodeling
authors:
- James Gimourginas
---

Security is a critical aspect of API development, which requires focused attention from design, to implementation, to testing, to operations. The time, effort, and investment needed to secure APIs is often shortchanged, despite security’s importance and prevalence throughout the API development lifecycle. Unfortunately, shortchanging the focus on security leads to [insecure APIs](https://www.prnewswire.com/news-releases/salt-security-state-of-api-security-report-reveals-94-of-companies-experienced-security-incidents-in-production-apis-in-the-past-year-301598797.html) reaching users (and adversaries).

API security is expansive. A number of the [OWASP Top 10](https://owasp.org/www-project-top-ten/) are relevant to API security, and we'll cover aspects of API security that relate to these six items:

* [Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
* [Injection](https://owasp.org/Top10/A03_2021-Injection/)
* [Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)
* [Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)
* [Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)
* [Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)

## Common aspects of API security

API security often touches on a few key areas:

* **Authentication –** Identifying the client interacting with an API
* **Authorization –** Permitting an identified client to specific API operations
* **Data Access Control –** Permitting an identified and authorized client to specific data records or data fields

Without strong authentication, authorization and access control based on a client's identity isn't possible. Without strong authorization, clients may be able to access API operations and data to which they aren't permitted. And without rich data access controls, a client authorized to use an API operation may have overly permissive access to view or modify the data accessible through an API.

### Challenges of API security

Each of these areas of API security is fraught with potential challenges, but high-quality security practices can address most.

#### Authentication

Credentials (e.g., passwords) and authentication protocol (e.g., single- vs. multi-factor) are two common sources of the "identification and authentication failures" referenced by OWASP. Some less obvious challenges are managing identity or session tokens appropriately (e.g., reasonable expiration times) and fully validating certificates (e.g., hostname matching).

#### Authorization

Incorrectly configuring authorization policies, or omitting authorization policies entirely, are two common mistakes that lead to "broken access control", as referenced by OWASP. Another mistake is creating design or implementation flaws that allow an elevation of privilege to an authenticated, but not necessarily authorized, user. This category of broken access control can be thought of as authorization_ _failures.

#### Data Access Control

Another category of broken access control can be thought of as data access control_ _failures. These failures stem from poor design, poor implementation, or, more basically, incorrect assumptions. For example, assuming that _any _user authorized with access to a piece of data should _also _have permission to update or delete that piece of data is likely untrue to start with — or will quickly become untrue as the number of users increases.

These are just a handful of common vulnerabilities related to a subset of API security. Maintaining highly secure APIs can be a daunting task.

## How API security can be applied to GraphQL

GraphQL is a query language for APIs. Like most APIs, a GraphQL endpoint accepts client requests over [HTTP](https://www.rfc-editor.org/rfc/rfc9110.html) and makes use of what the HTTP spec affords for providing security-related information as part of a request. In addition, GraphQL itself provides some additional design and implementation benefits that are helpful when securing APIs.

### How developers approach authentication with a GraphQL API

Authentication is orthogonal to GraphQL. In fact, if you search the [GraphQL specification](https://spec.graphql.org/October2021/) for the word "authentication" you'll find 0 results. But for a GraphQL API to be secure, something_ _must authenticate each client prior to the client making an API request. Most likely, that something is a separate [Identity Provider](https://en.wikipedia.org/wiki/Identity_provider) (IdP). Generally, upon verifying client credentials through whatever authentication mechanism is provided, the client will receive some form of proof authentication was successful.

This means that GraphQL APIs can only be as secure as the IdP servicing its GraphQL API clients. This also means that time and energy focused on correctly configuring and managing the IdP will help minimize these OWASP threats:


* [Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)

#### JSON Web Tokens (JWTs)

One popular proof of authentication is a [JSON Web Token](https://jwt.io/) (JWT). JWTs contain a rich set of information, within the JWT's claim set, as shown in Figure 1.

![Figure1](https://user-images.githubusercontent.com/85032783/197203260-e362ca51-f4b8-432c-acff-3aec1ed1bd08.png)

**_Figure 1 - A decoded JWT_**

The encoded JWT on the left is one example of information provided by an IdP upon client authentication that can then be sent in subsequent requests to a GraphQL API.


### How developers provide authorization with a GraphQL API

Authorization is also orthogonal to GraphQL. As with "authentication", if you search the [GraphQL specification](https://spec.graphql.org/October2021/) for the word "authorization" you'll find 0 results. However, GraphQL's frequent reliance on HTTP as its transfer protocol brings authorization to the forefront.


#### HTTP Authorization header

The HTTP specification provides a means — via the ["Authorization" header](https://www.rfc-editor.org/rfc/rfc9110.html#name-authorization) — for a GraphQL client to send its proof of authentication (obtained from an IdP) to a GraphQL API. Whether that proof is a JWT or another agreed upon token type that will allow the GraphQL API to make an authorization decision, the Authorization header is the typical means to send that information from client to server. A "Bearer" prefix is often included in the value to denote the token came from another system, as shown in Figure 2.

![Figure2](https://user-images.githubusercontent.com/85032783/197203258-a6a59bac-7c5f-45a8-8d8d-bce1277f4913.png)

**_Figure 2 - An authorization header populated with a JWT_**

The Authorization header, the Bearer prefix, and the JWT (in this example) are all part of the request sent from the API client to the GraphQL API server. Devoting cycles to designing and implementing a comprehensive authorization policy, and leveraging the HTTP and the Authorization as inputs to the policy implementation, helps to address these OWASP threats:


* [Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)


### How developers provide data access control with a GraphQL API

GraphQL relies heavily on the notion of a [schema](https://spec.graphql.org/October2021/#sec-Schema). The schema defines the types, directives, and operations it supports. This allows for a very rich set of [tooling](https://graphql.org/code/) to be built around the GraphQL ecosystem, heavily based on the existence of a well-defined schema.

One of the benefits of the schema and the types it defines is the ability to build data access controls into the schema itself. By doing so, implementations of the GraphQL API can leverage those definitions to make data access control decisions during operation execution. For example, [value resolution](https://spec.graphql.org/October2021/#sec-Value-Resolution) can be the point at which an identified, authorized API client is allowed or restricted from a specific field referenced. In other words, the schema can include types required for complex data access control and the GraphQL implementation can use those definitions to mechanize data access control.

#### Coarse and fine-grained data access control

Figure 3 shows what data access controls represented in a GraphQL schema might look like.

![Figure3](https://user-images.githubusercontent.com/85032783/197203261-ee8d6929-d7b3-44fe-a9df-4e79e118582e.png)

**_Figure 3 - A GraphQL mutation with schema-compliant access controls_**

The `aclInput` and its nested types are part of the GraphQL schema. The mutation shown includes data access controls (represented as an access control list (ACL)) embedded in the `Loan` being created. The combinations of `principal`, `operations`, and `path` are being used to define coarse and fine grained access controls for the `Loan` entity. For example:


* **Coarse Grained Access Controls **–** **Used to permit or deny access to the entity itself — in this case a `Loan`. The first ACL entry permits the LenderNode read and write access to the Loan, across all fields.
* **Fine Grained Access Controls **–** **Used to permit or deny access to a subset of fields within the entity. The last ACL entry permits the ServicerNode read and write access, but only to the `delinquencyStatus` field of the Loan. Otherwise, the second ACL entry applies, which permits only read access to the fields of Loan.

By modeling data access controls as part of a GraphQL schema and by implementing data access protections as part of the GraphQL API implementation, a robust set of protections can be applied. This approach addresses:

* [Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
* [Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)


## How Vendia secures GraphQL API

Maintaining strong authentication, authorization, and data access controls for your GraphQL APIs can be a challenge. Even if done well, a number of the OWASP threats initially mentioned are still not addressed:

* [Injection](https://owasp.org/Top10/A03_2021-Injection/)
* [Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)
* [Security Misconfiguratio](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

One of the benefits of adopting a fully-managed platform like Vendia Share, that offers and secures GraphQL APIs, is that the remaining OWASP threats are [addressed for you](https://www.vendia.net/blog/api-design-best-practices#secure-by-design).

### Injection

Injection is prevented through server-side validation and reliance on high-quality libraries. Further, because of Vendia's use of serverless technology from leading Cloud Service Providers (CSPs), security issues found in popular third-party libraries are [quickly addressed](https://www.vendia.net/blog/log4j2-response) to limit exposure and potential impact.

### Insecure Design

As OWASP notes, "a secure design can still have implementation defects leading to vulnerabilities that may be exploited. An insecure design cannot be fixed by a perfect implementation." Since Vendia covers the design _and _implementation of authorization and data access controls to GraphQL APIs, covering its [control plane and data plane](https://www.vendia.net/blog/multi-party-data-sharing-with-control), the risk of security issues from either are diminished.

### Security Misconfiguration

Vendia heavily leverages automation as part of its business blockchain provisioning process. Through a concerted, repeatable [application security configuration](https://aws.amazon.com/blogs/developer/how-vendia-leverages-the-aws-cdk-to-dynamically-provision-cloud-infrastructure/) process, systems are at lower risk than with DIY or manual approaches. Similarly, as you make GraphQL APIs "[data aware](https://www.vendia.net/blog/apis-for-real-time-data-sharing)", a new set of potential security risks emerge. Fortunately, relying on a [data model](https://www.vendia.net/blog/top-10-data-modeling-techniques#approach-2-define-access-control-lists) that is inherently "[security aware](https://www.vendia.net/blog/sharing-data-with-fine-grained-control)" addresses those risks in a well-documented and well-tested fashion.

## Learn more

Securing GraphQL APIs across all potential security risk areas requires significant time and effort. It's certainly possible to do so on an individual team level. But, often, scarce development cycles are borrowed (for better or for worse, but usually for worse) to create the next "killer feature" for a product. In addition, because APIs often cross organizational boundaries, following good security practices becomes a responsibility of your organization and your partners' organizations.

When you can rely on a [real-time data sharing platform](https://www.vendia.com/blog/podcast-founders-session) that offers a [secure GraphQL](https://www.vendia.com/blog/why-we-combined-graphql-and-a-serverless-distributed-ledger) interface, many of those potential security risks are addressed. Sign up for a [1-week Proof of Concept (POC)](https://www.vendia.com/poc) to see how Vendia's approach to secure data sharing using GraphQL APIs can help your organization.
