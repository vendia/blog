---
title: 'API Design Best Practices'
description: 'James Gimourginas, Director of Solutions Architecture and Customer Success, takes a deep dive into API design best practices as they apply to REST APIs, GraphQL, and API automation.'
date: '2022-09-15'
categories:
- concepts
authors:
- James Gimourginas
---

API design is a popular — and often contentious — topic. Interest in the latest API design best practices often spikes for development teams during initial API design, during API reworks ( e.g., transitioning from REST to GraphQL), and as part of ongoing API refinements based on user feedback or operational challenges. If you're a technology leader embarking on these types of initiatives, this post provides you with a set of general purpose [API design](https://www.vendia.net/blog/apis-for-data) best practices to inform your work.  It explores how you can realize those practices with REST and GraphQL, and then provides an approach that simplifies API design and implementation.

## What does a well-designed API look like?

While there are certainly different opinions on API design best practices, there is strong agreement that a high-quality API conveys a number of benefits to API users. These benefits can be grouped in a few simple categories:

* **Ease of adoption** – Easy to learn about the API and get started
* **Simplicity of development** – Simple API interactions that require minimal code
* **Speed to value** – Made possible by the two items above
* **Ease of expansion** – Easy to increase use of an API ( e.g., more operations, more complex interaction patterns) without substantial rework or additional technologies

These benefits are usually made possible when a few overarching themes are prioritized in the API design process:

* **Standards** - Leveraging existing, well-known standards ( e.g., HTTP response codes) that allow users to use open-source libraries without customization ( e.g., to handle retries)
* **Consistency** - Applying the same interaction patterns ( e.g., result paging) and features ( e.g., filtering) across all operations, to make learning simple and code reuse possible
* **Documentation** - Capturing the full set of available operations, their associated data models, along with a way to "try out" the operation with minimal effort and in an exportable way

A set of general purpose API design best practices span those themes.


## Best practices

These general purpose API design best practices are applicable to REST APIs and GraphQL, though their realization differs in each approach.

### Fully embrace an API style

APIs come in various forms, each with its own set of benefits and challenges. While this post won't delve into the benefits and challenges of [REST](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) vs. [GraphQL](https://graphql.org/learn/), it's important to select an approach and fully embrace its underlying principles and design practices.

For example, fully embracing the REST architectural style would include:

* A resource-oriented design
* Proper use of HTTP [verbs](https://www.rfc-editor.org/rfc/rfc9110.html#name-method-definitions), [headers](https://www.iana.org/assignments/message-headers/message-headers.xhtml), and [status codes](https://www.rfc-editor.org/rfc/rfc9110.html#name-status-code-registration)
* Hypermedia to drive application flows
* Use of [tooling](https://swagger.io/tools/swagger-ui/) that makes API discovery and usage as simple as possible

For GraphQL, this would include:

* A [graph-oriented](https://graphql.org/learn/thinking-in-graphs/) design
* Support for [queries, mutations, and subscriptions](https://graphql.org/learn/queries/)
* Use of (some) HTTP verbs, as well as high-quality error responses
* Heavy use of client-side and server-side [caching](https://graphql.org/learn/caching/)

By doing so, by default, you will start with a set of standards, easily instill consistency easily, and make use of existing documentation tools.

### Invest in a data model

Whether adopting a REST or GraphQL API, it’s valuable to invest design effort on the underlying data model. Once you've selected an API style, the resources or entities exposed by the API can be modeled along with their relationships with other resources or entities.  Often, it's best to follow a [domain driven design](https://www.vendia.net/blog/applying-domain-driven-design-to-blockchains) (DDD) approach to find the most appropriate boundaries within your business context.  Your data model should emanate from your well-constructed domain model.

For example, a REST API would model a set of resources (e.g., things) to be acted upon and the relationships ( e.g., hypermedia links) among them. For GraphQL, the data model would include the various parent/child relationships required to "walk the graph" from a top-level entity to its underlying elements.

By starting with a well-defined and well-constructed data model:

* You’ll maximize the amount of automation made possible through tooling, which typically assumes a data model as a starting point
* You can gain early feedback from design partners on the model
* You can explore interaction patterns to ensure the models match the likely API user flows

### Embrace standards and conventions

Use a set of standards and conventions to complement your API style choice. By adopting well-known standards and conventions, you’ll improve the adoption, simplicity, and speed to value of those using your API. One of the common pitfalls of API design is undervaluing the experience API users have using _other _APIs.  If your API is designed with standards and conventions incorporated, those experiences can make adoption of _your _API a breeze.

Fortunately, REST APIs borrow heavily from the [HTTP specification](https://spec.graphql.org/June2018/#sec-Overview), while GraphQL has a [thorough specification](https://spec.graphql.org/June2018/#sec-Overview) as well. By sticking to the norms of either approach, your users will have a better initial experience with your API.

### Secure by design

API security is worthy of a post on its own. It's an incredibly important and deep topic, as demonstrated by the large number of the [OWASP Top 10](https://owasp.org/www-project-top-ten/) that are relevant to API security:

* [Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)
* [Injection](https://owasp.org/Top10/A03_2021-Injection/)
* [Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)
* [Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)
* [Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)
* [Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)

As [OWASP reports](https://owasp.org/Top10/A04_2021-Insecure_Design/), Insecure Design is "a new category for 2021 [that] focuses on risks related to design and architectural flaws, with a call for more use of threat modeling, secure design patterns, and reference architectures." This risk should be directly addressed as part of the API design process.

### Provide users choices

It's often difficult to correctly guess how users will ultimately interact with the APIs you design, build, and release. Because it's difficult to know ahead of time, provide users with options for various scenarios, allowing them to choose the right option. This empowers users, allows them to optimize their usage of your APIs as they learn what their users need ( e.g.,  a mobile app developer may learn how the mobile app users want to interact with that app and, in turn, change how they want to interact with your API).

There are many examples of choices to provide to users through API. Here are a few to demonstrate the value of maintaining optionality for your users:

* **PUT vs. PATCH** - REST APIs often support both the [PUT](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.4) and [PATCH](https://www.rfc-editor.org/rfc/rfc5789.txt) operations. PUT requires an entire resource representation to be passed during an update (i.e., even fields that have not changed), while PATCH allows a partial representation to be passed (i.e., just the changes) . There are times when either approach may be valuable, so providing users with either option allows them to make the right choice for their application.
* **Field Selection** - GraphQL allows users to specify the [exact fields](https://graphql.org/learn/queries/#fields) to be returned by a query or mutation. This allows the user to decide how much or little of an entity to retrieve, which prevents over-fetching (leading to wasted computational and network resources) and under-fetching (leading to a "chatty" client/server interaction). This empowers the API user to match the fields fetch to their exact needs (e.g., the widget displayed within a web app).

### Make change "safe"

Software changes. Frequently. That's also true for APIs. But incremental changes can be more problematic with APIs. That's because the party changing the API (the API provider) is often not the same party that must deal with the change once implemented (the API consumer). Making change "safe" means API providers can evolve and refine their offerings based on feedback without breaking API consumers.

REST API often makes changes safe through versioning. There are many [different types](https://cloud.google.com/blog/products/api-management/api-design-which-version-of-versioning-is-right-for-you) of REST API versioning (and this post won't revive the battle about which is "best"). But, for REST APIs, some form of versioning must be in place to allow changes to be safely performed.

GraphQL takes [a completely different approach](https://graphql.org/learn/best-practices/#versioning). The convention in GraphQL is to purposefully _not version_ and, instead, favor a versionless API that will evolve only through _non-breaking_ changes. Because the set of changes considered _breaking_ (e.g., removing a field, changing the type of a field), in GraphQL is smaller than with REST APIs, this is a perfectly viable approach for most APIs.

Ultimately, you must make changes "safe" for API providers and consumers, and you can achieve that with either REST or GraphQL.

### Strive for consistency

Despite your best efforts to select and fully embrace an API style, and adopt as many standards and conventions as possible, there will be a feature or pattern that you must create from scratch. And you will need to create it without as much guidance as you might like. In those cases, it's important to strive for consistency as you apply that feature or pattern in your API.

For example, consider the many forms [result paging](https://graphql.org/learn/pagination/) may take in GraphQL or the [lack of transactional support](https://www.vendia.net/blog/graphql-and-blockchain#vendia-transactions) in the GraphQL spec. Selecting an approach from many options or coming up with a completely new feature is prone to adoption risk:

* Users will not have worked with the pattern or feature you've designed elsewhere
* Users will need detailed documentation and examples to quickly fill that void
* Users may find the tooling they’re familiar with cannot natively support the feature or pattern

While those challenges can and should be addressed, the most important decision you’ll make is to apply the pattern or feature in question consistently across the API. By doing so, once they've ramped up, users will, be able to quickly make use of their learnings and see a return on their learning investment.

### Refine based on direct and indirect feedback

As hard as you try to apply the API design best practices mentioned previously, there’s a good chance you’ll overlook a user need or misjudge expected user behavior. Listening to direct and indirect feedback is the best way to continuously improve your API design. That feedback can come from several sources:

* **API design reviews** - Gathering and acting on feedback before building and releasing an API
* **API users** - Direct user feedback is invaluable
* **API tooling** - Tooling may point to unexpected deviations from standards and conventions
* **API telemetry** - Examining usage patterns, latencies, and other interaction characteristics may enlighten your understanding of your users

All of the above can guide an API from its initial design to its eventual end state. API design is a continuous process, and feedback is essential to that process.

## Best practices made easy in Vendia Share

The best practices in this post will help drive ease of adoption, simplicity of development, speed to value, and ease of expansion. However, to cover them all and do so expertly can be a challenge for those new to APIs or those working with a new API style (  e.g.,, GraphQL). There's been substantial tooling improvements over the past few years that have automated much of the API design and API implementation process.

If you find the practices above daunting, using that tooling may be the fastest and most complete way to produce a well-designed API for your users. For example, tools like [Swagger](https://swagger.io/tools/swagger-codegen/) and platforms like [Amplify](https://aws.amazon.com/amplify/) and [Hasura](https://hasura.io/) can accelerate API design and development while ensuring best practices are applied.

Vendia Share brings a similar [automated API approach](https://www.vendia.net/product#Schema-to-API) to an enterprise-grade serverless blockchain. Starting with a well-defined data model, Vendia Share generates all APIs required to store, retrieve, and execute against data stored on a blockchain. The API design and implementation are automatic, and you get an API that’s fully compliant with the best practices highlighted in this post. This is how we built the world's fastest and most scalable way to share operational data across applications, data stores, clouds, and partners, with well-designed [GraphQL API](https://www.vendia.net/blog/why-we-combined-graphql-and-a-serverless-distributed-ledger) serving as the primary interface.

### Learn more

Well designed APIs are an important component of modern data sharing applications.  If you enjoyed this post, you may also want to:

* Learn more about [smart APIs](https://www.vendia.net/blog/ask-the-expert-apis) and how they simplify the complexity of automatically keeping data consistent, correct, and up-to-date across multiple parties
* Explore how APIs, Blockchains, and Cloud Databases can [complement each other](https://www.vendia.net/blog/venn-diagramming-vendia-share) when building modern, real-time data sharing applications
* Try [Vendia Share](https://www.vendia.net/pricing) for free to see how API design best practices, smart APIs, and real-time data sharing come together in a unified platform
