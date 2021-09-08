---
title: 'Toward a Distributed Application Maturity Model'
description: 'Ways to better connect with your future business collaborators'
longDescription: 'This Distributed Application Maturity Model can help you assess your distributed application’s strengths and weaknesses so you can explore ways to better connect to with your future business collaborators.'
date: '2021-09-07'
categories:
  - architecture
authors:
  - James Gimourginas
---

## Motivation

Vendia’s mission is to empower those creating and running modern applications that connect people to their most important information.  Our mission comprises two key concepts: _speed-to-value_ and _information-to-people_.  Those two concepts are closely intertwined but are often treated separately, or treated in tandem solely within an organizational silo.  Consider the API Provider that optimizes their speed-to-value while their API Consumers do not.  The result is that the API Provider’s investment does not produce the desired information-to-people gains because of the lagging API Consumers.  Similarly, the technology that enables _speed-to-value _and _information-to-people_ is also often mistakenly selected and implemented in isolation as well. Consider the distinction between Software Engineering, Data Engineering, Quality Engineering, and Site Reliability Engineering in many large companies.  Optimizing for the preferences of any one team at the expense of the others yields a suboptimal system.

That presents a challenge.  Organizations commonly struggle to harness the best of the technology around them.  The challenge gets more severe as organizations attempt to collaborate with each other to create distributed applications, as those organizations often find they’re reduced to a technology set that is more “least common denominator” than “seamless cohesive architecture.”  We believe distributed, multi-party applications are a great way to bring _information-to-people_ and should be built wtoward _speed-to-value_.

## A Distributed Application Maturity Model

To help organizations assess their current standing and guide future improvement, we’ve developed a Distributed Application Maturity Model.  The Distributed Application Maturity Model looks at the 5 essential Dimensions required to create and run modern distributed applications that can connect people to their most important information.  The Distributed Application Maturity Model then defines 5 Maturity Levels across each Dimension to allow the maturity of distributed applications to be characterized.

![Distributed Application Maturity Model](https://user-images.githubusercontent.com/85032783/132395285-48ca2fee-2e24-4f16-87f8-7f43810b8599.png)

### The 5 Dimensions

* **Application Data** - The input to, output from, and current state of the application.  Think of this as the fuel for your mission critical operational applications.  At higher maturity levels, this will include not just the current values of the data but access to historical (versioned) information and the lineage of how that data changed over time.
* **Application Platform** - The services to consume, produce, and act on Application Data, and the interfaces and integrations needed to develop new features quickly.  Think of this as the clouds adopted, the cloud-native services supported, the interaction patterns possible, and integrations available, which together use the data fuel to do something productive.  At higher maturity levels, less code and fewer third-party services are required to enable the desired outcome as more functionality moves on-platform.
* **Operations and Resilience** - The management, automation, scale, and recoverability of the application.  Think of this as keeping the application running smoothly at scale, at all times, across all parties and enabling rapid delivery of new features to bring new ideas to life.
* **Participants and Consistency** - The ease of onboarding new participants, the flexibility to satisfy the technology preferences of a heterogeneous set of participants, and the consistency of the application data and platform features across participants.  Think of this as the ability to easily create an ecosystem and the ability to support that ecosystem’s heterogeneous needs.
* **Security, Privacy, and Governance** - The ability to securely share information among participants in a manner that is inherently compliant with leading standards.  Think of this as the mechanisms to enable sharing with control and confidence, building trust within the ecosystem and with those who may audit the ecosystem.  At higher maturity levels, there are common notions of identity, authentication, and authorizations and simple realizations of complex data protection policies.

### The 5 Maturity Levels

* **Level 1** - _Stuck in Time_ - Using technology and practices that are well beyond their usefulness.  Level 1 companies may still be crafting their cloud strategy and may self describe as struggling to modernize their legacy IT systems.
* **Level 2** - _Waking Up_ - Beginning to adopt modern technology and practices but with major legacy baggage still present.  Level 2 companies have taken a few steps toward their cloud strategy but may be disheartened by the slow progress and seemingly infinite backlog of technical debt.
* **Level 3** - _Adequate_ - Applying modern technology and practices in many areas but still not reaping the full benefits.  Level 3 companies are well on their way to realizing their initial cloud strategy, likely drafted a number of years ago, but have not refined their initial strategy to account for the changes in the competitive landscape around them.
* **Level 4** - _Competitive_ - Using modern technology and practices exclusively but still constrained by a limited set of technologies and practices.  Level 4 companies have optimized their technology usage within their organization and are exploring whether further optimization outside their organization or across clouds may be possible.
* **Level 5** - _Leading_ - Using modern technology and practices exclusively, with the freedom to experiment with best-of-breed approaches driven by business need, technology preferences, and focus on continuous continuous improvement.  Level 5 organizations are building new businesses that leverage new partnerships and influential ecosystems, supported by modern technology, that weren’t previously fathomable.

While it’s possible to assess and score each Dimension individually, seeing a wide range of scores across the 5 Dimensions is unlikely because the Dimensions are intertwined.  In other words, _distributed applications will generally score in, or closely around, a single Maturity Level_.  If your company or organization is at a level of maturity below what you'd like, it may be time to take action.

### Dimension to Maturity Level Mapping

Crossing the 5 Dimensions with the 5 Maturity Levels produces a comprehensive maturity model with which distributed applications can be assessed.

<div className='content'>
  <table>
    <tr>
      <td></td>
      <td>
        <strong>Level 1</strong>
        <p><em>Stuck in Time</em></p>
      </td>
      <td>
        <strong>Level 2</strong>
        <p><em>Waking Up</em></p>
      </td>
      <td>
        <strong>Level 3</strong>
        <p><em>Adequate</em></p>
      </td>
      <td>
        <strong>Level 4</strong>
        <p><em>Competitive</em></p>
      </td>
      <td>
        <strong>Level 5</strong>
        <p><em>Leading</em></p>
      </td>
    </tr>
    <tr>
      <td><strong>Application Data</strong></td>
      <td>Data is manually acquired and not represented in true digital form; Data is manually sent and received; Versioning is not supported and lineage is not maintained.</td>
      <td>Data is siloed, available to its immediate readers and writers but not beyond; Basic, usually batched, automation is in place; Versioning is applied sporadically, leading to lineage that, at best, can be pieced together manually and inconsistently</td>
      <td>Data is centralized and cataloged but with limited access outside of the owning participant; API access is available but with cumbersome interaction patterns (e.g. synchronous CRUD only); Basic lineage can be gleaned from log files</td>
      <td>Data is enriched, blended, and transferred among participants in real-time; Synchronous and asynchronous data interaction patterns are supported; Lineage is maintained within (but not across) each participant</td>
      <td>Data is shared among all participants in real-time as it’s created; Synchronous and asynchronous data interaction patterns are supported; Lineage is fully journaled and provides a complete, immutable history.</td>
    </tr>
    <tr>
      <td><strong>Application Platform</strong></td>
      <td>Platform is hosted on unreliable infrastructure or across isolated desktop systems; new interfaces are manually created; no inherent platform integrations, leading to a large amount of “glue” code</td>
      <td>Platform is hosted on cloud infrastructure but is not using cloud-native services; interfaces are versioned but still manually created; key architectural patterns are largely built into the application itself</td>
      <td>Platform is hosted on cloud infrastructure and uses some cloud-native services; interfaces are versioned and automatically generated but heavily synchronous; key architectural patterns are still handled by code</td>
      <td>Platform uses cloud-native services and serverless approaches; interfaces include synchronous and asynchronous interaction styles; key architectural patterns are handled by the platform</td>
      <td>Platform uses cloud-native services and serverless approaches across multiple cloud service providers; interfaces include synchronous and asynchronous interaction styles across clouds; key architectural patterns are handled by the platform, as are common 3rd party integrations</td>
    </tr>
    <tr>
      <td><strong>Operations and Resilience</strong></td>
      <td>Operation of the application is manual and time consuming; scale is severely limited and recovery is a crude and manual process</td>
      <td>Basic deployment automation is in place but robust operational tooling is lacking; dynamic scaling is still not possible and recovery is scripted but cumbersome</td>
      <td>Continuous delivery practices have been adopted, but challenges arise when outages occur among other participants; scaling is possible but uses a “just in case” provisioning approach; multi-party recovery is still a challenge</td>
      <td>Robust delivery automation and operational tooling is in place; scaling uses a “just in time” approach to match demand; disaster recovery testing is common; all of these activities require a sizable investment and capable team</td>
      <td>Robust operations management, scale, and recovery are handled by the platform provider; all of the benefits from the previous column, applied to all major cloud service providers, and managed as a service</td>
    </tr>
    <tr>
      <td><strong>Participants and Consistency</strong></td>
      <td>Participants are a handful of people within a single organization; technology stack is homogeneous and limiting; data is often outdated or inconsistent as it slowly progresses through the application</td>
      <td>Participants are a single team within a single organization; technology stack is homogeneous and limiting; data is often outdated as the application waits for the next batch execution</td>
      <td>Participants include multiple organizations; a single organization dictates technology choices, limiting the technology available to others; data is centrally controlled and that organization serves as the single source of truth</td>
      <td>Participants include multiple organizations; a single organization may still dictate some key technology choices, limiting the technology available to others; data is more distributed, which impacts data consistency and leads to differing sources of truth among participants</td>
      <td>Participants include multiple organizations; organizations are free to choose the technologies they prefer to use, including across cloud providers; data is consistent among participants at all times, meaning there is only one source of truth</td>
    </tr>
    <tr>
      <td><strong>Security, Privacy, and Governance</strong></td>
      <td>Sensitive data cannot be protected with technology; no inherent compliance is provided by the platform;</td>
      <td>Sensitive data is protected by coarse-grained access control (e.g. permit or deny) within a single organization; no inherent compliance is provided by the platform;</td>
      <td>Sensitive data is protected by coarse-grained access control (e.g. permit or deny) across multiple organizations; organizations are not afforded privacy because of the centralized nature of the application; no inherent compliance is provided by the platform;</td>
      <td>Sensitive data is protected by fine-grained access control (e.g. data element ACLs) across multiple organizations; organizations are not afforded privacy by the features of the platform; no inherent compliance is provided by the platform;</td>
      <td>Sensitive data is protected by fine-grained access control (e.g. data element ACLs) across multiple organizations; organizations can rely on the platform to ensure privacy in a standards compliant fashion;</td>
    </tr>
  </table>
</div>

## Evaluating Your Maturity Level

To help you evaluate your organization’s maturity level, here’s a brief synopsis of the challenges and their organizational and competitive impact.  One of these is likely to resonate as a “day in the life” within your organization.

### Level 1 - Stuck in Time

Extreme speed-to-value and information-to-people challenges.

Application Data is sent and received in archaic ways (e.g. email attachments); the Application Platform is purely a (small) set of servers or isolated desktops; Operations and Resilience are insufficient for a modern production-grade application; Participant onboarding is non-existent since participation is severely limited and Consistency of the data is overlooked; a Security event is a big risk given the lack of automation throughout;

The technology and approaches aren’t sufficient for the times.  Without a major and rapid technology transformation, this organization may quickly find itself out of business.

### Level 2 - Waking Up

Major speed-to-value and information-to-people challenges.

Application Data is isolated and piecemeal, as a result, has limited value inside and outside the organization; the Application Platform has migrated to the cloud, but likely is offering no more value to the application owner than before the migration; Operations and Resilience are insufficient for a modern production-grade application; Participant onboarding is non-existent since participants are severely limited and Consistency of the data is improved but timeliness still suffers; Security is overly restrictive and limits utility of the application.

The purported benefits of the cloud haven't materialized so this organization is paying a lot for a migration that isn't actually accomplishing much.  Their data and apps remain "locked out" of the higher value cloud services, patterns, and processes and their data is no more complete, consistent, resilient, or timely than before.  Without accelerating their early-stage technology transformation, this organization may quickly find itself losing executive support and reverting to its Level 1 ways.

### Level 3 - Adequate

Improved speed-to-value, continued information-to-people challenges.

Application Data is centralized in the cloud, leading to higher value inside the organization; the Application Platform now supports more modern approaches; Consistency and timeliness of the data is improved; Security includes a complete coarse-grained access control mechanism; Transparency is available to direct participants of the application.

Data still has limited value outside the organization; the centralizing organization (i.e. the organization that centralized the data) continues to dictate the technology choices of others; Operations and Resilience are a challenge because a single point of failure (i.e. the organization that centralized the data) has been introduced; Participant onboarding is still burdensome; Fine-grained access control is lacking;  Transparency does not extends to those multiple hops away.  Consider the journey between data provider, data enricher, data consumer, and end-user.  Level 3 applications may provide transparency across one hop of that journey, but not multiple hops.

The technology and approaches are good enough for the moment.  However, despite establishing a solid foundation, this organization will soon lose market share to _Competitive_ and _Leading_ organizations.  Look out for fast moving disruptors who can quickly reach Level 4 or Level 5 maturity thanks to either their lack of legacy baggage or their rapid adoption of disruptive technologies that streamline their path to Level 5.

### Level 4 - Competitive

Increased speed-to-value, improving information-to-people.

Application Data is distributed, leading to higher value inside and outside the organization; the Application Platform now supports more modern approaches, including cloud-native integrations and serverless approaches that demonstrate the true value of the cloud; Operations and Resilience are improved; Consistency and timeliness of the data is high; Security includes a complete coarse-grained and fine-grained access control.

Operations and resilience are still a burden for all participants, creating a high barrier to entry;  Participant onboarding is still not simple, as each new addition requires a number of new API clients to be developed;  End-to-end traceability of data is sorely lacking as the ecosystem grows; Compliance remains a huge burden for the organizations involved.

Leading practices are being followed across all dimensions, but expanding business opportunities by fostering increased collaboration is still not happening.  This organization is well positioned to lead their industry for some time, but they may find new business opportunities that require closer collaboration with other organizations continue to flounder despite their technology prowess.

### Level 5 - Leading

World-class speed-to-value and information-to-people capabilities.

Application Data is distributed, leading to higher value inside and outside the organization, with full versioning and lineage across all data types; the Application Platform now supports more modern approaches, including cloud-native integrations and serverless approaches across clouds; Operations and Resilience are improved and handled by the platform, leading to a lower operating complexity and lower operational cost for all participants; Participant onboarding is simple and establishes the context in which controlled data sharing is agreeable to all parties; Consistency and timeliness of the data provides a single, shared source of truth to all participants at all times; Security includes a complete coarse-grained and fine-grained access control, the ability to share with control, and inherent compliance with leading standards.

New ecosystems are driving new business opportunities, benefiting all of those who participate.  Awareness of what’s happening outside of this organization’s figurative four walls is allowing it to optimize based on the actions its collaborators have taken _and are taking_, as they happen.  Data is not only easily accessible and easily shared among participants, but new business opportunities can be rapidly achieved in a cost effective way, as they are no longer blocked by technology impediments.

## Universal Applications

Level 5 Distributed Applications, what we at Vendia call _Universal Applications_, are modern distributed applications that connect people to their most important information with ease.  They excel across five Dimensions and exhibit the two characteristics from our mission statement: an exceptionally high _speed-to-value_ that maximizes the timeliness, consistency, and completeness of _information-to-people_.  When we say Vendia Share is a Universal Application platform, what we mean is distributed applications built on Vendia Share are inherently Level 5 distributed applications because of the powerful features built into Share across all five Dimensions of the Distributed Application Maturity Model.

In follow-up posts, I’ll delve into the Vendia Share features that provide Level 5 capabilities, including a few before and after examples from our customers.  For now, I hope this Distributed Application Maturity Model helps you assess your distributed application’s strengths and weaknesses so you can explore ways to better connect with your future business collaborators.
