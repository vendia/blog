---
draft: false
title: 'What does a "lean app" mean for teams?'
description: 'A look at the lean app approach to development: The principles, features, and benefits that enable better team collaboration, products, and business results.'
date: '2022-07-23'
categories:
- concepts
authors:
- James Gimourginas
id: '2ffeac57-9577-4781-b3a3-7d14b859cafb'
---

In a [prior post](https://www.vendia.com/blog/lean-apps-for-developers), you read about how the [lean apps movement](https://www.vendia.com/blog/lean-app) will increase productivity and decrease toil for individual developers. But its impact isn't isolated exclusively to developers. Through the efficiency and effectiveness gains at the individual developer level, the lean apps movement will also impact how cross-functional teams plan, design, implement, test, and release new products. This post will explore the lean apps philosophy's influence on teams and how those influences will change the way product delivery teams operate.

## What does “lean app” mean?

Let's quickly review what makes an app _lean_. A lean app [flips the IT iceberg](https://www.vendia.com/blog/lean-app-part-4#the-lean-app-goal-flip-the-it-iceberg) by allowing development teams to _focus primarily_ on tasks that result in differentiated business value. The goal is to maximize the value and innovation a team produces by drastically reducing the time spent on undifferentiated, repetitive tasks that aren't material to the business. Those high-toil tasks are certainly necessary for a working system, but ideally, those tasks are offloaded through automation and platform capabilities so that (highly creative, competent, and compensated) people don't have to spend much time on them.

### How the lean app differs from established developer frameworks

Lean apps leverage existing, proven approaches to common challenges. By combining those approaches into a single, coherent overarching architectural style, lean apps overcome the inherent limitations of each approach.

For example, consider APIs. Connecting applications through APIs was once viewed as an implementation detail best left to developers. Over time, APIs became a [business imperative](https://www2.deloitte.com/us/en/insights/focus/tech-trends/2018/api-program-strategy.html)—one that companies created holistic, cross-functional strategies to pursue. Unfortunately, the technology underpinnings of APIs didn't evolve in proportion to the importance APIs gained within most organizations.

Lean apps bolster the stagnant approach to API development by requiring that APIs _do more_—moving feature expectations off of a team's backlog and onto the platform backing the API. The idea of doing more (sometimes called "[smart APIs](https://www.vendia.com/blog/smart-apis)") breaks the tradition of "ignorant pipes" for API solutions and addresses their inherent limitations. For example:

* Developers have ready access to countless REST and GraphQL libraries and frameworks used to create APIs from scratch. But is API _implementation_ a high-value activity that developers should focus on?
* APIs use a rich set of authentication (authN) and authorization (authZ) approaches and protocols to ensure only authenticated, authorized clients can interact with an API. But what about protecting the data, at a granular level, sent to or retrieved from an API? And how does that approach scale as the number of API producers and consumers grows large?
* APIs are commonly used to send and receive data. That interaction can be system-to-system within an organization; consumer-to-system powering user-facing applications; or a cross-company, bi-directional exchange between two business partners. But how quickly does the data sent or retrieved grow stale? And how does each API participant (i.e., data producer or consumer) become aware they are now acting on stale or invalidated information?

Lean apps address each of these challenges directly. By combining a set of capabilities that complement each other and, collectively, reduce the burden placed on development teams building or integrating with APIs, lean apps demonstrate why smart APIs are the next big thing in the API ecosystem.

## Features of a lean app

Teams often mistake more control with better outcomes. Lean apps thinking can guide teams to make better choices and avoid that common pitfall. Let's solve some of the challenges outlined in the previous section with a lean apps approach.

* **Ensure teams creating or integrating with APIs maximize the value of their team members**: Lean apps favors automated API generation (specification _and implementation_) from a schema, decreasing time to market for a new API product and reserving developer cycles for other, higher-value tasks. Automated API generation and API versioning and migration are core capabilities of a lean apps platform.
* **Ensure data from APIs is protected but without customer coding tasks to protect it**: Lean apps include built-in access controls and privacy protection from the start. In other words, data protection is not a "feature in the team's backlog" but rather an inherent, immediate capability _of the platform_.
* **Avoid the "stale data" problem inherent in point-to-point API integrations**: Lean apps proposes a cross-cloud, distributed and decentralized ledger to keep data consistent and ordered across participants in real time. The platform handles data syncing across participantsand removes the burden from development teams.

While these are just some examples focused on API solutions, they highlight the central guiding principle of lean apps: Less is more. 

## The benefits of lean apps for teams

Teams can benefit from building lean apps in many ways. And, to be clear, the benefits aren't limited to only the _developers_ within a cross-functional product delivery team. Each and every team member will see benefits; in aggregate, the team's ability to deliver differentiating user experiences and business value will increase as a result.

While cross-functional teams commonly differ in roles and composition, we'll use some generalized roles here to highlight the benefits each team member will see when creating lean apps.

* **Project Manager**: Can deliver more value more quickly since the platform handles many of the complex, undifferentiated tasks; can manage work more effectively since the team's work is more focused, more succinct, and free from many complex infrastructure dependencies
* **Experience Designer**: Can guide development resources toward truly differentiating user experiences since developers now have more cycles to devote to user-facing tasks; can gather user feedback more quickly since new capabilities are delivered more quickly
* **Software Engineer**: Can deliver more with less toil since the platform handles much of the technical complexity; can experimentat and prototype to explore new ideas more since the team has more free cycles to allocate to innovation
* **Data Engineer**: Can bring "smarts" to a product earlier in its lifecycle since a comprehensive, schema-compliant data set is available from Day One; can expand autonomous, cross-partner optimizations since an immutable ledger with all partner activity is preserved as well
* **Automation Engineer**: Can focus on automating and monitoring a smaller set of product functionality since the platform is delivered as a service; can rigorously tune the product more frequently and more effectively since there are now more cycles to devote
* **Quality Engineer**: Can test more comprehensively and in a more automated manner since the overall scope of work under test decreases (as platform responsibilities increase); can devote more time to product critiquing, business facing tests (e.g., user acceptance testing, exploratory testing, etc.) since the platform itself has been tested for many of the foundational technical capabilities (e.g., performance testing, scalability testing)

Simply put, a lean apps team will be more efficient, more productive, and more engaged in the work they execute. In turn, customers will be thrilled by new features, new user experiences, and "smarter", more highly customized products.

## Rules for a lean app

For teams early in their lean app journey, one simple step in the right direction is to consider the six rules for a lean app. By adopting these philosophies today and analyzing the tasks you and your team spend time on, you can identify optimizations in your team's activities. Having seen the many places where a lean app could simplify your backlog, delivery plan, and target architecture, you should consider a lean app for your next product.

Here are the six rules for a lean app:



1. **Differentiated business logic over undifferentiated, commodity code and activities**: Focus on tasks that will truly differentiate your product and wow your customers. What percentage of work in your next iteration/sprint/release cycle will satisfy those criteria?
2. **Smart APIs over ignorant pipes**: Focus on tasks where API creation or integration leaves much to be desired. How many tasks could you remove from your product backlog if the APIs you were producing or consuming were "smart"?
3. **Schemas over code**: Focus on places where you can replace custom implementation with [schema-based](https://www.vendia.com/blog/schema-evolution) automation. Are there any stories or tasks that are essentially templatized and would easily benefit from automation?
4. **Automation over manual effort**: Focus on toil, the tasks you and your team members really dislike. Are there ways to automate yourself out of those high-toil tasks?
5. **Off-the-shelf data sharing over costly DIY data**: Focus on keeping data consistent and ordered among you and your partners. How long after data is "current" do you and your partners finally gain access to it? And how do you and your partners know when that "current" data becomes stale or invalid?
6. **SaaS over IaaS; serverless over serverful**: Focus on your team composition and backlog. What percentage of that backlog focuses on maintaining the infrastructure of one type or another? And what percentage of your team is required to maintain and operate that infrastructure?


## How Vendia helps

Vendia Share is the best way to build and run lean apps, and it’s the best way to optimize your team's output by adopting a less over more philosophy. Vendia includes all the core lean app features (e.g., smart APIs, cross-cloud distributed ledger, run as a service) needed to get your team refocused on value creation and product differentiation.

For teams considering a lean app as the foundation of their next product, [Vendia Share](https://www.vendia.com/product) provides a simple way to get started. You start with a [data model](https://www.vendia.com/docs/share/data-modeling); in about five minutes, Vendia uses that data model as its input and produces an enterprise-grade Universal Application (or "Uni") that’s backed by a serverless distributed ledger and a completed automated API design and implementation. As you interact with the Uni, note its adherence to the lean apps philosophy.

To help highlight the value of a Uni, consider the challenges with API development using ignorant pipes and point-to-point integrations:

* Unlike other approaches, a Uni doesn't require any coding to create a full featured, enterprise-grade API implementation.
* Unlike other approaches, Uni offers [fine-grained data protection](https://github.com/vendia/examples/blob/main/features/share/access-controls/data-access-controls/README.md) out-of-the-box, and does so based on a well-defined schema.
* Unlike other approaches, a Uni maintains a distributed ledger among all participants, even across regions and clouds.
* Unlike other approaches, a Uni keeps the distributed ledger ordered and consistent at all times, meaning every participant has access to a single, shared, always-current/never-stale source of truth.

Universal Applications (or "Unis") built on Vendia Share realize the lean app philosophy. They can be used to gain all of the benefits described earlier and you can create them in just a few simple steps.

## Take action

**Brand new to Vendia Share?** We recommend exploring one of our [quickstarts](https://www.vendia.com/docs/share/quickstart). Create a sample Universal Application to get hands-on with a lean app in minutes. Pay attention to the ease of deployment and the robust feature set available in less time than it'll take you to complete your next team standup.

**Worked with Vendia Share before?** Check out some of our [feature examples](https://github.com/vendia/examples) to go more in depth on advanced features, including security and integration with other systems.

Stay tuned for more from the Vendia team, as we continue to define the [lean app](https://www.vendia.com/blog/lean-app) movement.
