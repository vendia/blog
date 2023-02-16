---
draft: false
title: "10 ways to make your software better when building for cloud scale "
description: How does Vendia’s team of cloud engineers build for scale? James
  Gimourginas, Director of Solutions Architecture and Customer Success lifts the
  hood on Vendia’s best practices.
date: 2022-11-18
authors:
  - James Gimourginas
categories:
  - concepts
  - thought-leadership
relatedPosts:
  - 2021-01-29-getting-started-with-vendia-share
  - 2022-04-26-3-body-problem-solution-example
  - 2022-01-27-scale-your-partner-ecosystem-with-vendia-share
tags:
  - engineering
  - cloud
thumbnail: https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1674599254/Website/Iso/Data_organization_w6crb8.png
seo:
  title: "10 ways to make your software better when building for cloud scale "
  description: How does Vendia’s team of cloud engineers build for scale? James
    Gimourginas, Director of Solutions Architecture and Customer Success lifts
    the hood on Vendia’s best practices.
  keywords: how to build for cloud scale
createdBy: ""
createdAt: ""
updatedBy: alexa-vendia
updatedAt: 2023-02-16T19:22:28.519Z
id: 8b9b13c9-13ba-476b-bf64-9c820b32edaf
---

Scale. It’s one of the most common stressors to complex software systems. So how do public cloud services companies do it? And what differentiating practices can we apply from their toolkit, even when developing solutions that don’t require “cloud scale”?

Before exploring the practices needed for cloud scale, it’s important to set a baseline for any high-performing software team. The [practices](https://services.google.com/fh/files/misc/dora_research_program.pdf) outlined in the DevOps Research Assessment (DORA) are a great starting point. The technical practices, Lean product development, Lean management, and culture and work environment approaches in DORA are applicable no matter the intended scale of your software system.

But there also must be something new or different to bolster those practices to achieve cloud scale. The 10 practices I’ve observed from the Vendia engineering [team](https://vendia.com/about) — those that seem to differentiate regular software from cloud-scale software — are grouped into four categories:



* **Knowledge** – What you and your team members know
* **Operations** – How you and your team members handle operations
* **Development** – How you and your team members build software
* **Helping others** – What you and your team members do to share all of the above with others

Together these categories, and the practices within them, allow a software team to increase the speed with which they can develop new features, increase the quality of the software they deliver and increase their likelihood of achieving the scale they desire.


## **Knowledge**


### **Practice No.1 – Hire or develop distributed systems expertise**



* _In regular development teams, distributed systems expertise is often concentrated, which limits the efficiency and effectiveness of the team._
* _In cloud-scale teams, distributed systems expertise is pervasive._

Software teams building for cloud scale must deeply understand the common pitfalls of distributed systems and their solutions. While reading about them is a start, experience dealing with the failures instills a level of understanding that is unmatched. Likewise, calling upon experiences, both successful and unsuccessful, gives teams the resources to find [ingenuitive](https://www.vendia.com/blog/vendia-values#ingenuity) ways to solve those challenges, even at a moment’s notice.

As an example, distributed system expertise allows teams to maintain [idempotency](https://en.wikipedia.org/wiki/Idempotence) even when interacting with a system that provides “at least once” notification delivery. While “exactly once” delivery is a possible option for some notification services, that option often comes with a [steep performance](https://aws.amazon.com/sns/features/) penalty. With deep knowledge, a team recognizes [patterns](https://chrisrichardson.net/post/microservices/patterns/2020/10/16/idempotent-consumer.html) to address “at least once” delivery while maintaining idempotency, allowing orders of magnitude better performance compared to a team that chooses to elect for an “exactly once” notification approach to avoid complexity.


### **Practice No. 2 – Get very familiar with the libraries and cloud services you use**



* _In regular development teams, library and cloud service selection is based on what’s popular and what works most quickly for simple cases. This may result in selections that yield ugly failure scenarios._
* _In cloud-scale teams, cloud service and library selections involve deep exploration of source code (when available), documentation, and a large focus on experimentation, benchmarking, and prototyping (including failure modes)._

You may have heard the adage, “An amateur practices until they can do a thing right; a professional, until they can’t do it wrong.” Reframed for the software context, the quote looks something like this: “An amateur integrates a library until they get it to work; a professional, until it will always work.”

Spending an appropriate amount of time to select the right library, one that works but also fails gracefully, is a great realization of DORA’s [team experimentation](https://cloud.google.com/architecture/devops/devops-process-team-experimentation) practice. The same selection rigor applies to public cloud services as well. Their inherent limits and failure modes must be fully understood to properly design and build for those potential failures. Code reviews (see Practice No. 9) are helpful to confirm failure modes are handled, but knowing what failure to handle can only come from a deep understanding of the library or cloud service with which you’re interacting. 

Full disclosure: It does help if you’ve [created those cloud services](https://linkedin.com/in/timawagner) to begin with, but you can reach a sufficient level of understanding through documentation and experimentation.


## **Operations**

DORA covers operations extensively, including its [measurement capabilities](https://cloud.google.com/architecture/devops/measurement). What differs about cloud-scale teams in the area of operations are not the practices themselves, but the level of sophistication and completeness applied.


### **Practice No. 3 – Provide deep and complete operational visibility**



* _In regular development teams, operational visibility is not given the same time and attention as feature development, which shortchanges instrumentation and often relies on insufficient tooling for metric correlation across complex distributed systems._
* _Cloud-scale teams understand that operational excellence requires deep and complete operational visibility. They know that the absence of evidence is not the same thing as the [evidence of absence](https://en.wikipedia.org/wiki/Evidence_of_absence)._

Monitoring and observability are already well-established imperatives. The guidance in DORA outlines several areas of focus, including instrumentation and correlation. Instrumentation means that code must be added to a system to expose its inner state. Correlation means that metrics collected from the application and its underlying systems can be used to explain behavior.

Teams often find operational visibility isn’t possible because of either insufficient instrumentation or insufficient or inaccurate correlation. This becomes especially challenging as software systems grow to be more distributed and more complex. There are an increasing number of great [tools available](https://www.honeycomb.io/) that allow distributed tracing across applications, regions and clouds. While these tools handle the correlation, they still require development teams to spend an appropriate amount of time on instrumentation. Exposing the right inner state of an application, at the right time, in the right way, with the right metadata (in order to be correlated with other data), is as important, maybe even more important, as other engineering tasks. Without the right instrumentation and correlation, it’s highly likely that something operationally unexpected will occur but will not be noticed. There is an “absence of evidence” the issue exists and so, to the team operating the system, it does not.


### **Practice No. 4 – Create robust operational automation and tooling**



* _Regular teams use automation where they know others use automation. They spend time and attention on internal tools, but they don’t apply the same design and code quality rigor they would for new feature development._
* _Cloud-scale teams understand that automation should be applied anywhere and everywhere repeatable processes exist, including to software development. They spend as much time reviewing design and implementation of internal tools as they do on external features._

Automating deployments and testing are also well-established [continuous delivery](https://cloud.google.com/architecture/devops/technical) practices. The purpose behind automation is to reduce toil, increase the likelihood of success and make important but painful processes simple, reliable and, as a result, more frequently executed.

The degree to which [automation can be applied](https://aws.amazon.com/blogs/developer/how-vendia-leverages-the-aws-cdk-to-dynamically-provision-cloud-infrastructure/) is still unfathomable to some teams, who see it as a technique meant primarily for continuous delivery. Consider a team building an API solution composed of an API gateway, an API implementation and a data store backing the API. They may (rightly) automate the build, deploy, test and release process of the API solution. But they may overlook (wrongly) the opportunity to [fully automate](https://www.vendia.net/blog/venn-diagramming-vendia-share) the API design, implementation, backing data store and fronting API gateway based on a single schema file.

Tooling is another area that is often selectively applied, but not to the degree that it could be. When tools are the “only way into production,” they receive the requisite time and attention. Likewise, when [great tools](https://github.com/trek10inc/awsume) are open sourced, they come with a pride of ownership and attention to detail that may be lacking from a team’s internal-only tooling (see Practice No. 10).


### **Practice No. 5 – Hold rigorous on-call reviews**



* _Regular teams limit performance reflection to retrospectives, which can become rote practice if action items are not captured and closed quickly ( if learnings are not applied). Operational events are handled and surface-level corrections are made, but true root cause analysis and correction, which does take investment, are often missing._
* _Cloud-scale teams know that operational visibility provides a wealth of data that can be gleaned to improve design, implementation and team performance, provided sufficient time and energy is provided to inspect and learn from that data._

Reflection is core to the continuous improvement mindset and retrospectives (of various flavors) are central to agile software development. While retrospectives are common today, their effectiveness can differ widely depending on the quality of their planning and execution. Just as operational tooling is often shortchanged in regular development teams, so, too, are operational on-call reviews. Like so many of the DORA practices, simply “doing” the practice is not enough — it’s about doing the practice exceptionally well.

What does exceptional look like? 



* The format is consistent — This provides a structured approach that touches on all necessary topics. Nothing is skipped.
* The material comes from deep operational visibility — The conversation is very data-driven, relying on and showing the value of the investment in operational visibility and automated tooling.
* The action items are tracked and closed quickly — Many action items are addressed as part of the on-call rotation. Those that aren’t are usually prioritized for the next week.
* The dynamic is collaborative — The mindset each team member brings is about how to close whatever gaps led to an operational issue. Problems aren’t ignored; they’re viewed as something to be solved.
* The approach is rigorous — Team members keep each other accountable to everything from the duration of the meeting to the structure of the content to the action items identified.


### **Practice No. 6 – Always be canary-ing (ABCs)**



* Regular development teams may opt for a [blue/green deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html) strategy since it is easier to mechanize than canary releasing. They also may not invest in a large amount of both active and passive monitoring, as the former requires Practice No. 4 and the latter requires Practice No. 3.
* Cloud-scale teams work in small batches and leverage leading operational practices. They understand that the combination is a sum greater than its parts.
* 

Another place cloud-scale teams invest heavily is in automating tests and deployments. The [canary release](https://martinfowler.com/bliki/CanaryRelease.html) technique is an approach teams take to release new features incrementally, avoiding a big-bang operational event. This technique aligns with DORA’s guidance to [work in small batches](https://cloud.google.com/architecture/devops/devops-process-working-in-small-batches).

Once new software is released, it’s important to have in place [active/synthetic/blackbox and passive/real-user/whitebox](https://cloud.google.com/architecture/devops/devops-measurement-monitoring-and-observability#blackbox_monitoring) monitoring combined with [proactive notification failures](https://cloud.google.com/architecture/devops/devops-measurement-proactive-failure-notification). 

An ideal release sequence for a Software as a Service (SaaS) offering might go like this:



1. Wave 1 Release — First release of new software, ideally targeting a small set users and environments that are known to be non-production (sandbox accounts)
2. Active Monitoring Sequence — Synthetically driving traffic to shared services ( control plane) to confirm release is working as expected
3. Passive Monitoring Results — Inspecting real user activity (data plane) to confirm release is working as expected
4. Wave 2 Release – Assuming 2 and 3 (after a sufficient period of time) are both clean, move on to Wave 2 and repeat the same process thereafter


## **Development**

There are endless resources available to help you and your team improve software development practices. Coding best practices even have their own [Wikipedia page](https://en.wikipedia.org/wiki/Coding_best_practices). And while all of those practices are important, two differentiating practices stand out when comparing regular development teams with cloud-scale development teams.


### **Practice No. 7 – Engineer specifically for failure scenarios**



* _Regular teams develop code that catches and handles basic failures using basic techniques, possibly overlooking the less common but more impactful (if not handled well) failure scenarios._
* _Cloud-scale teams spend the majority of their design and development on avoiding, handling, testing and automatically recovering from failure scenarios, especially those that originate from systems they don’t control._

The larger a distributed system, the more likely it is that at least one independent component of the system will fail. Consider a 10-step workflow that relies on 10 independent services, each with an availability expectation of 99%. Would you expect that workflow to have over a 9% chance of failure, based purely on service availability? Improving all services to 99.9% availability still leaves the overall workflow with a nearly 1% chance of failure. That may not seem insignificant, but it would be if that workflow was executed millions of times a day and you were responsible for it.

Increasing service availability and reliability helps, as we saw in the previous example where an additional “9” was added to each service. But, many times service interactions involve services outside a team’s control or outside their organization altogether. Despite the prevalence of failures in distributed systems, many teams shortchange the amount of time, effort and attention to detail to design for and gracefully handle these failures. This, at least in part, is because of gaps in Practice No. 1 and Practice No. 2. After all, teams might not have the distributed systems knowledge to appreciate the cascading effect of ungracefully handled failures. Likewise, teams might not understand their library and cloud service selections well enough to cover all possible failure scenarios.


### **Practice No. 8 – Apply frequent and extensive code reviews**



* _Regular development teams use code reviews to improve code quality._
* _Cloud-scale teams use code reviews to improve code quality, software design, operational visibility, user experience, automation, and tooling._

Code reviews complement teams working in small batches and [trunk-based development](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development). They are typically applied during development (for periodic feedback) and during a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) (prior to a merge into trunk). This allows a developer to solicit feedback from team members before code is part of everyone’s codebase.

There are a number of code review checklists out there, but most focus on reviewing just the code. Some checklists expand scope a bit further to cover tests and documentation.

All of the above are important, but to increase the value of the code review, expand the review by applying additional lenses:



* Design — Taking a step back from the code itself to understand if/how the code developed fits into an overarching design and whether the design in place still holds given the changes being made
* Usability — Thinking through the user experience of the feature being built, if it’s user facing; applies to web interfaces and command line interfaces (including internal and external tooling)
* Consistency — Verifying consistency in the code and in the application — everything from variable naming conventions, to button names, the command line arguments and abbreviations, to terms in documentation
* Extensibility – Extrapolating the changes being made to forecast when an approach will no longer suffice and looking to address potential extensibility issues before they exist


## **Helping others**


### **Practice No. 9 – Provide developer environments on Day 1**



* _Regular teams are often stifled by the environments in which they’re allowed to operate, and new team members often need to wait days or weeks for access to the systems needed to make them productive._
* _When you join a cloud-scale team, you have the tools you need to ramp up quickly, deliver value frequently and experiment freely._

The 2019 DORA [report](https://newrelic.com/blog/best-practices/dora-accelerate-state-of-devops-2019) found that 72% of “Elite” teams (those functioning at the highest level in the assessment) automated provisioning and deployment to testing environments, but just 28% automated performance and only 31% automated security tests. One of the reasons performance and security tests are often not automated is because of the complexity involved in environmental setup and teardown.

What do those statistics have to do with helping others?

Software development teams are constantly changing, including when new team members join. Often, cloud-scale teams are part of high-growth organizations and, within a single year, those teams are known to double (or triple) in size. When a new team member joins, having a set of environments in which they can operate allows that team member to quickly get up to speed. And what better way to understand how a large, complex distributed system works than by blasting it with automated performance tests? This autonomy aligns well with the [team experimentation](https://cloud.google.com/architecture/devops/devops-process-team-experimentation) practice mentioned in DORA. Even better, for teams developing cloud-native software, team members have access to individual cloud accounts, with sufficient permissions to make them useful, on their first day.


### **Practice No. 10 – Give back through open source**



* _Regular teams heavily rely on open source libraries but rarely contribute back._
* _Cloud-scale teams use open source libraries extensively and create their own, knowing that, by doing so, they are both improving their craft and the craft of others._

As mentioned in Practice No. 4, open sourcing an in-house capability is often a helpful forcing function to make the capability worthy of sharing. Knowing your work could be used by thousands, or even millions, of developers is often intimidating, but sharing that work can be an immense help to others.

In just over two years, Vendia has open sourced a number of [libraries](https://www.npmjs.com/search?q=%40Vendia) that we believe others may find useful. While some of these libraries are [targeted](https://www.npmjs.com/package/@vendia/share-sdk) specifically to [Vendia Share](https://share.vendia.net/), they have open source dependencies that are general purpose and [very useful](https://www.npmjs.com/package/@vendia/aws-signed-fetch) for those building on public clouds.


## **Key takeaways**

Cloud-scale development teams are similar to regular development teams in many ways. In some cases, cloud-scale teams apply an additional level (or two) of rigor to existing practices (such as operational visibility). In others, they expand the scope of a common practice or apply it to areas not previously intended (code reviews). When combined with an excellent set of [foundational practices](https://www.devops-research.com/research.html#capabilities), the 10 practices defined above are enough to differentiate cloud-scale teams from all the others.

Striving to be cloud scale isn’t appropriate for every team or every application. Executing the practices outlined here, to the degree required to be cloud scale, is time, energy,  and resource intensive. However, the practices can be applied selectively or to an appropriate degree by any development team, no matter the intended scale of its solution. Even better, because others have mastered the practices and continue to find new ways to satisfy massive user or workload demands, most teams can gain the benefits of that mastery by relying on clouds, platforms and software that were developed with those practices in place.


## **Interested in joining Vendia?**

We’re always looking to connect with Sr. Senior Backend / Core Engineers, Senior Frontend Engineers, Senior Full Stack Engineers, and Senior Solutions Architects. If you want to work with kind humans solving hard problems as we help our customers build powerful, multi-party real-time data-sharing apps, check out our [open positions](https://www.vendia.com/careers).