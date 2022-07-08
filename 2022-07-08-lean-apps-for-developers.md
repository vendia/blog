---
title: 'What does a ‘lean app’ mean for developers? '
description: 'A look at the lean app approach to development: its precursors, its basic rules, and how it helps developers to spend more time on creating amazing code.'
date: '2022-07-08'
authors:
  - Caroll Casbeer
---

In our[ Lean Apps Manifesto](vendia.net/blog/lean-apps), Dr. Tim Wagner outlines the next wave of application development to ‘flip the IT iceberg’ and accelerate innovation. 

But what does this mean for developers? It means developers can focus on writing clean, elegant code that meets customers' needs—not reinventing the wheel or building clunky apps from scratch. 

Lean apps are a continuation of other computing trends (see Cloud, serverless, Kubernetes, etc.) that continue to abstract away the heavy lifting of development. Furthermore, lean apps apply DRY coding at a macroscopic level to every aspect of the application. They shift as much as possible to the cloud to manage and handle the truly complex, to create economies of scale through multi-tenanted solutions that handle the undifferentiated (if still exceeding complex) heavy lifting of data and compute management. 

**Most importantly, lean apps allow you to get _really good_ at your job. Instead of having to wear a lot of hats or be bogged down by infrastructure, you can become truly skilled in your craft instead of a master of none. **

Read on to learn more about lean apps:



* Lean apps vs. other development frameworks 
* Features of a lean app 
* How lean apps benefit developers
* How to build Lean Apps 


## What does “lean app” mean?

Put simply, lean apps fully leverage the wide variety of tools out there to solve the undifferentiated heavy lifting. Think of using Stripe for your payment platform and cloud services for your compute and data layers. How much more could you deliver if you spent 90% of your time solving _new_ problems, not reinventing existing solutions?

Lean apps reduce the ‘surface area’ of an application. The reduction comes in many forms and is ruled by less is more. A perfect example? Migrating from on-prem to the cloud. No longer do you have to worry about rooms and rooms of servers or rack space to service the east coast. 

And here are other ways to keep it simple:



* _Standardization _Use open-source frameworks, Docker Images, etc. Learn a best practice and do it. 
* _Automation_ If you have to do it more than twice, you probably should (and can) automate it. SaaS-style deployment tools take on the work of not just committing, testing, and deploying code, but also building the infrastructure needed to do those tasks. 
* _Outsourcing _Lean apps also have the benefit of outsourcing security, compliance, and best practices.

**Leanness isn’t just about creating the simplest app today—it’s about minimizing effort and investment over the entire lifecycle of an application. _ _**


### H3 – How the lean app differs from today’s development frameworks

Lean apps leverage other frameworks’ strengths to outweigh other frameworks’ weaknesses. To put it more simply, piecing together lean applications means looking for [what is missing](https://www.vendia.net/blog/lean-app-part-3) from one framework, (i.e., how serveresless doesn’t really account for data models), with the best solution for the missing piece (cloud-based databases). 


<table>
  <tr>
   <td>
   </td>
   <td>Offering
   </td>
   <td>Missing
   </td>
  </tr>
  <tr>
   <td>Serverless
   </td>
   <td>Event-based, scalable, pay-on-demand
   </td>
   <td>Data model
   </td>
  </tr>
  <tr>
   <td>Open-source
   </td>
   <td>“Zero marginal cost-sharing”
   </td>
   <td>Still have to host, scale, and manage it all
   </td>
  </tr>
  <tr>
   <td>Cloud-based data lakes
   </td>
   <td>Cross-cloud
   </td>
   <td>Focused on BI and analytics, not app development and real-time use cases
   </td>
  </tr>
  <tr>
   <td>Blockchains
   </td>
   <td>Distributed data models across companies, clouds, and stacks
   </td>
   <td>Performance and scale for enterprise-solutions
   </td>
  </tr>
</table>



## Features of a lean app

Lean Apps are the [Tom Sawyer](https://medium.com/@thenthgen/the-most-important-life-lesson-from-tom-sawyer-e92f86f6afb3) of application development: Get everyone else to do the dirty work. Like Tom, who convinced his friend Ben Rodgers (and others) to paint Aunt Polly’s fence, let cloud services, Saas’ and best-in-class solutions do your underlying (but important) work. Meanwhile, like Tom who kicked back and ate an apple while Ben took care of the manual work, you can focus on what you love most: 



![An open source, vintage illustration showing the famous fence painting scene in Mark Twain's novel, The Adventures of Tom Sawyer](https://user-images.githubusercontent.com/98492452/178038441-9d19e25f-7805-4087-8f2e-cd80278cd51c.jpeg)


**The business logic.** Focus on what your customers need and build solutions and iterations rapidly by focusing on just your business. If your scope of work becomes laser-focused, you’ll move faster, get better at it, and create a true differentiator.

When it makes sense, your lean app should be [schema-based](https://www.vendia.net/blog/schema-evolution), rather than written into application code or deployment instructions. Why? Because data-centric expressions are better than code. 

Here’s another bit of “fence painting” to automate: API design and generation. While we are all guilty of overengineering custom APIs, what we need are clear, _easily scaled, and secured APIs. _That’s where automated API generation comes in. Automated API generation helps move [beyond “dumb pipes”](https://www.vendia.net/blog/smart-apis) to APIs that are aware of the data they carry. 

If you’re working with data ledgering and versioning, smart, stateful APIs are becoming a must-have, not just a nice to have. They should be automatic, meaning there’s no need to manually maintain logs, perform backups, or audit controls. Similarly, automated access controls and privacy protection should be shited to the infrastructure and follow your business logic. If you’re relying on your homegrown system for security, you’re at risk. 

Lean apps should also be decentralized, or at least multi-region (and multi-account), to remain resilient no matter what happens to that cloud provider. But, no matter your team’s size, this is still a huge challenge. Luckily, infrastructure can help and make sure it is cost-optimized cross-cloud data transport, data integrity, and security, and high-speed replication with ACID properties.


## The benefits of lean apps for developers

Every developer wants to spend their time on the activities and outcomes that matter (eating apples)—not pointless, repetitive drudgery (fence painting). 

We also want to build solutions that drive results, solutions that work and add value to someone’s life. It’s really hard to make an impact when you spend 80% of your time on repetitive tasks and just keep the existing application running. 

Lean application development allows you to become really good at your craft. Imagine what you could learn and build if you freed up 50% of your time? Imagine if every application you built had sustainable maintenance and improvement plan (not an exponentially complex one).


## Guidelines for a lean app

There are six simple guidelines for building a lean app: 

1. Develop differentiated business logic over undifferentiated, commodity code.
2. Evolve from “dumb pipes” to [smart API](https://www.vendia.net/blog/smart-apis)s.
3. Write schemas over code.
4. Automate, automate, automate.
5. No more DIY. Buy your data-sharing solution. DIYing cross-company, cross-cloud, cross-region, and cross-account data sharing is too costly and already done. 
6. Go with Saas and serverless. Don’t pay for what you don’t use. Stateless is the new zen. 


## How Vendia helps developers build lean apps

Vendia can help developers build lean apps and adopt best practices. How do we do that?

To start, you just bring us your schema. Then, we do the rest of the heavy lifting. 

Our serverless distributed ledger and smart APIs mean your data is always up to date and shared with the highest controls across parties, clouds, and regions.

You can even add partners and APIs with just an email and a few clicks in the console. All the API development, maintenance, and design are automated. Finally, our consumption-based pricing model brings the cost savings of a Saas to you.

Whether you are building a simple but robust backend to your application (we can be both your API layer and your data layer) or you need to develop a data-centric app across 5 regions, 10 accounts, and 6 partners we can help make that simple, too. 

You are Tom Sawyer. Let us be your Ben Rodgers. We don’t mind painting fences.


### *Next Action*



* Want to learn more about lean apps? [Download the white paper](https://www.vendia.net/resources/lean-apps). 
* Ready to build your own lean app? Start with [Vendia Share’s Quickstart Guides] (https://www.vendia.net/docs/share/quickstart).
