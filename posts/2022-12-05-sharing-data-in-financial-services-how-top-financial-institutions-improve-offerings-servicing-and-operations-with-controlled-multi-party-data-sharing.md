---
draft: true
slug: sharing-data-financial-services
title: "Sharing data in financial services: How top financial institutions
  improve offerings, servicing, and operations with controlled multi-party data
  sharing"
description: In this episode of Circles of Trust, Brian Kale and James
  Gimourginas talk with Tim Zonca about the complexities of data sharing in
  financial services and the impact better data sharing has on customers and the
  financial institutions serving them.
date: 2022-12-14
authors:
  - Alexa Johnson
categories:
  - podcast
relatedPosts:
  - 2021-06-08-gartner-cool-vendor
  - 2022-11-02-podcast-worlds-colliding
  - 2022-11-16-patient-experience-with-teeth-how-the-world’s-leading-dental-laboratory-uses-data-sharing-to-improve-healthcare
tags:
  - financial services, architecture, circles of trust
thumbnail: https://res.cloudinary.com/vendia/image/upload/f_auto,q_auto/c_fill,w_1200/v1670278509/COT_d1fwyl.webp
seo:
  title: "Sharing data in financial services:  How top financial institutions
    improve offerings, servicing, and operations with controlled multi-party
    data sharing"
  description: In this episode of Circles of Trust, Brian Kale and James
    Gimourginas talk with Tim Zonca about the complexities of data sharing in
    financial services and the impact better data sharing has on customers and
    the financial institutions serving them.
  keywords: data sharing, b2b data sharing, data ecosystem, data alliance
updatedBy: alexa-vendia
updatedAt: 2022-12-05T22:27:11.159Z
---

**Listen on** [SPOTIFY](https://open.spotify.com/show/49kZwowJkYxjceHIax2zxK) | [APPLE](https://podcasts.apple.com/us/podcast/circles-of-trust/id1645908970) | [GOOGLE](https://podcasts.google.com/feed/aHR0cHM6Ly9mYXN0Lndpc3RpYS5jb20vY2hhbm5lbHMvYWw5cWQ4MTdkcS9yc3M/episode/NzQzNGZjNmItYmFjNC00MmNmLWIxNDctY2E0ZGJiNTE0Njhh?sa=X&ved=0CAgQuIEEahcKEwjYxcrM_rr6AhUAAAAAHQAAAAAQLA)

**Guests:** 

- [Brian Kale](https://www.linkedin.com/in/brianmkale/), Independent Financial Services Consultant for KPMG, Advisor and Board Member for a host of organizations, and former Business Solutions executive in Data, Analytics & Insights at Bank of America
- [James Gimourginas](https://www.linkedin.com/in/jamesgimourginas/), Director of Solutions Architecture and Customer Success, Vendia

Brian Kale and James Gimourginas talk with host Tim Zonca about the complex challenges of data sharing in the financial services space. They also explore the positive impact that better data sharing has on customers and the financial institutions serving them.

## Show notes

- [Brian Kale](https://www.linkedin.com/in/brianmkale/) on LinkedIn
- [James Gimourginas](https://www.linkedin.com/in/jamesgimourginas/) on LinkedIn
- [Bank of America](https://www.bankofamerica.com/)
- [NonStop](https://en.wikipedia.org/wiki/NonStop_(server_computers)
- [Tandem Computers](https://www.linkedin.com/company/tandem-computers-inc/)
- [Cognos Analytics](https://www.ibm.com/products/cognos-analytics)
- [Tableau](https://www.tableau.com/)
- [Apache Hoodap](https://hadoop.apache.org/)
- [Countrywide Financial](https://en.wikipedia.org/wiki/Bank_of_America_Home_Loans), now Bank of America Home Loans
- [2022 State of DevOps Report](https://cloud.google.com/blog/products/devops-sre/dora-2022-accelerate-state-of-devops-report-now-out)

## Transcript

**Tim Zonca  0:04**

Greetings from the team at Vendia, and welcome to Circles of Trust. It's the podcast where leaders across all industries are committed to speeding up innovation at scale. I'm your host, Tim Zonca. We're about to dive into a conversation with Brian Kale in Jamestown, Virginia. Brian is an independent financial services consultant for KPMG, an advisor and board member for host organizations, and former business solutions executive and data analytics and insights at Bank of America. James Gimourginas, the Director of Customer Success and Solution Architecture at Vendia, formerly Senior Director of Software Engineering, and in both cases specializing in helping customers securely share their data. In this episode, we explore the complex challenges of sharing data and financial services. And based on Brian's and James's interest in topics like decentralized data time machining, and so forth, I'm excited to get going. So let's jump in. Welcome to the show, guys. 

**Brian Kale  3:55**

Thank you. Great to be here.

**James Gimourginas  3:56**

Thanks, Tim.

**Tim Zonca  3:59**

So I'd love to get started with both of you. If you could just give a bit of your background and you know, some of the folks in our audience know James a little bit. But James, I'd still love to have you give a background. And Brian, in particular, you're new to the show. So I'd love to have you share with the audience what have you been up to over the course of the last bit of your career. Especially the kinds of financial services solutions you've been part of and delivered and some of the scaling that you've done, Brian. Because my question after that is going to come to you. I'm gonna actually have James start. James is going to give a bit of an intro, and then, Brian, we'll kind of roll in into your update.

**Brian Kale  4:38**

Sure.

**James Gimourginas  4:39**

Yeah. So I started my career in defense and intelligence work. Different companies, different agencies, and departments I worked with, but in all the cases, there was this real drive to balance the need to know/the need to share. And so that's been a challenge for many organizations. For decades, right? It's, "How do I get the right information to the right people?" Not overshare/under share, to get to the best decisions, right? Timely, accurate, traceable — back to the origin of why you made a decision. And that's the big challenge that's facing a number of industries. After that time, I did move to industry and started working across different industry, areas of financial services, travel and hospitality, and a few others. But in all cases, like, no matter the domain, the domain is interesting — it has some interesting wrinkles. But no matter the domain, that distributed data sharing problem has hit pretty much every industry. And the larger and more complex the data collection has been (right, across these different industries, there's lots of different data producers), the how to get to the right data and process it has become even more of a challenge. So that's what brought me here to Vendia. And yeah, Brian, I'll pass it to you.

**Brian Kale  5:59**

Okay, great. Well, since you started about how you got started, I actually started as a teller when I was in college working for Bank of America. And after I graduated, I did a brief back office type of job. And then I eventually talked my way into an entry level tech job. And in that net role, my first exposure to really hardcore technology was on Tandems. So those that have been in the industry for a long time know what those are, they're like NonStop systems. Now they're called HP NonStop systems. They were one of the original scalable, resilient architecture/engineering things. And so I went through all kinds of training on that to learn how to build for scale. From there, I worked into some desktop development. In my first exposure to a data-centric role was taking over just a small reporting team that was tasked with supporting Bank of America's adoption of Six Sigma in the Cart Operations division. And so, really, I learned a lot in that role about just about every mistake you could make in terms of how to manage data/how to deal with data because I was in an application-centric mindset. And doing that in analytics is a completely different animal. But over time, we evolved from reporting to more analyticals and scalable type of platforms like Cognos with their data cubes functionality and things like that. From that point, I moved on to supporting various business functions with different business groups that we supported from ATM, debit, credit card and mortgage, looking how to drive out value from leveraging just many different types of technology — from your Java development languages, dotnet batch processing online processing, messaging, APIs, analytical solutions from Tableau to Hadoop. And then as an information management executive at one point within my career, I really had to deal with the challenges of data centralization and the consumption at scale. How do you do this at scale? And then decide what do you centralize? What do you decentralize? What do you put in the hands of the user? So those were really good learning lessons to figure out and learn how to deal with information and how to use that and how to disseminate information between different stakeholders. When I found out about Vendia and got some overview, I thought it was very fascinating to see the solutions that the team had come up with to deal with, really, industry-wide problems and challenges.

**Tim Zonca  8:32**

Thanks. Thanks, you guys. And Brian, you know, it seems like it's probably an understatement to you say have a particularly rich track record in financial services. And you listed off just a handful of some of the areas especially within consumer banking, but over the course of the last few years, what's been your biggest focus area, or areas?

**Brian Kale  8:51**

So, really, the last five years was the culmination of a massive project in the mortgage space. And that was to convert from a legacy Countrywide platform to an industry standard, vendor hosted platform. And that was particularly challenging because this system had been built up for over decades. And the bank wanted to move to something that was more standardized. And that old system had like 300,000 elements that they had to consolidate. They weren't unique; there were duplicates, but you have to rationalize that down to a core set of elements to map to the target state. And that was an enormous task of complexity to understand, you know, what is the nature of this data? And what is it used for from a processing perspective? What does it mean in a business context? And how does that reconcile with the different processes on the other system? And that was quite a challenge. And we successfully implemented that in 2020. And then I ended up retiring from the bank in 2021. So that was really a significant effort of integration, as well as data rationalization.

**Tim Zonca  8:55**

You know, and it seems like if — it's that massive project or some of the others that you mentioned in one of our previous discussions — what are you most proud of that you and one of your teams has done or many of your teams have done over the course of the last, let's say, five or so years?

**Brian Kale  10:27**

Well, I think it comes down to that project. Bank of America bought Countrywide in 2008-2009 timeframe and really inherited a ton of problems. The company needed to go over...I joined a whole bunch of senior leaders coming over from different areas of the bank to try to deal with this issue. And it really came down to... there were a lot of default mortgages. And not getting into, you know, what was the root cause of that, we had to deal with what the issue was in terms of resolving those issues. And the legacy systems were not designed to handle those volumes. So we had to come in and clean/do a lot of cleanup. And as part of that cleanup, eventually, was the replacement of that system to basically move it out of the whole process and move to something industry-standard. And the size of that effort...like I said, 300,000 elements that needs to be reconciled the target state! And the team did an amazing job of distilling all that noise down into a distinct...about 10,000 unique core data elements...and capture all of that metadata and lineage into a metadata repository. And when dealing with large amounts of data across multiple stakeholders, you have to have good metadata or it's basically a data swamp. So that's, it's just something that I can look back on it with great pride and be very proud of the team that took something so complicated and put it into a nice, elegant solution that could be used for the coming years to understand what's going on with the business and how to measure the business and get gain insights from it.

**Tim Zonca  12:03**

Yeah, that's, that's a pretty fantastic way to kind of wrap things up there. Congratulations on that! Well, what about...? So when we were preparing for the show, the two of you started to dive into a few details that Brian, in particular, seemed to really catch your attention. And so I want to spend some time diving into each of those. One was around some decentralization. ...You talked about some cross-cloud and just the complications associated with, especially, you know, sharing and redundancy across clouds. And then the last thing is around, kind of, rollback or time machining. So start with decentralization. You know, most data sharing systems today, they're centralized. So what do you think has made centralized data sharing solutions the norm over the last, I don't know, two or three decades?

**Brian Kale  12:53**

Well, it comes down...it's decentralization versus centralization. Why do you want to centralize? Well, when you centralize, you get more control: All things being equal, you get standardization. And that reduces volatility and variability in the process. So this has been a very attractive way to build the data solution. And this is a similar approach to when things used to be in mainframe. It was in one spot, and you can control it. And by centralizing you had that consistency. As businesses have become more sophisticated/more complicated, more steps and more things have become automated. Those monolithic approaches have become somewhat of a bottleneck to innovation. And so when you look at — and that paradigm applies just all across the technology space, and that's why cloud is a distributed platform for processing. It's not just one big box; it's thousands and thousands of machines that are leveraged to provide that capability/that power for processing. Likewise, if you centralize you have that control, just by nature of being centralized. Then you become a bottleneck to the innovation that needs to happen. And it makes it more difficult to change and adapt to the speed of business. And that's why, when we talked about how Vendia does this distributed distribution of this information, I found it fascinating. And it made sense to me because of the need to change, to adapt to the business climate, the business opportunities. Also, one of the things I've seen when you centralize, you have contributions of data from different groups. And those different groups have different use cases in different business contexts that they work with it. And when you centralize, it's very difficult to understand the local use case. because what you're trying to do is standardize, which means "I want to make something that is consistent for all." But "consistent for all" doesn't necessarily work for a specific use case or a specific business case of how you're going to use that data — what you view as the truth. And so having that kind of centralized mindset does make it very difficult to share data. And I, you know, I think James can speak to...I think if we just bring up the reviewing of how that works in the Vendia space, I think it's a very interesting and appropriate segue to this conversation. 

**Tim Zonca  15:38**

Yeah, I'd love to dig into that. So James, could you give a bit of an overview of what is some of this decentralization that you Brian talked about, just for the audience? And then we can pick that part out a bit.

**James Gimourginas  15:52**

Sure. Yeah. And this is actually...I have a pretty good story on this one, too. It was early in my tenure at Vendia. We were working with a travel and hospitality customer and the folks in the ecosystem (a couple airlines, a settlement group) were very much used to that centralized model. And so we're on an early call. And we agreed upon the data model. We had the APIs. And so the notion of Vendia is, basically, each of these participants has their own copy of the ledger, right, of the data storage. They have their own copy of the APIs, but they're consistent because there's a consistent data model that links all of those different groups together. But they do have their own, you know, authorization, authentication, and their own view of the data so that data protection can be incorporated so that if one party doesn't necessarily want another party to see the data (or all the data or some portion of the data). They have the ability to control that. So the real paradigm shift was, in hearing this conversation, and it was kind of eye opening for me, is that group was very used to having a centralized aggregator, right, who they had to depend on to create new APIs for them for their use case to create new reports to report out to them. And in this case, we were in the discussion, and there was a question for the revenue accounting team, "When can you build the API that will let me generate the report that I need for my revenue accounting?" And the central party at the time, who was part of this initiative as well said, "Well, all the data is actually there. We don't need to build an API for you. You actually can just build a client to pull that data yourself. Because now you have full fidelity of that data at your disposal on your own endpoints." And so it went from that model that Brian talked about, which is, you know, that central party ends up taking on all the operational responsibility. All the development responsibility. They often do this, you know, to benefit themselves by getting the data. But it also places a heavy burden on their development and operational teams. And by decentralizing, you're actually able to, you know, allow others to, almost take a self-service approach to some of these operations. Like, in this case, a revenue accounting report that can be pulled periodically. That central party is, all of a sudden, not in the game of having to build that custom API for that external group. That external group actually has all the data and all the power to do so themselves.

**Brian Kale  18:16**

Yeah, they think that the sweet spot here is when you centralize you get that centralized control, right? Well, if you're in a group where there isn't one person who's in charge, right, it's a team. It's a partnership. It's a group of entities that are working together. Then who gets to be the arbiter of the truth, you know? And does it override my version of truth? And I have to trust that person, that they're going to protect my information. And it, typically, is all of my information because I put it all out there, and it gets all put into this gigantic data store. And then that centralized entity is the one that's responsible for protecting that data. I think this is a great next paradigm, next phase type of approach to things where you can say, "I only want to share what we've agreed to share. I'm going to control who gets to see it, who gets to share it. And I have all my information that I need to have." And that really does remove the bottlenecks because it's no longer that centralized authority that has to build the reports and publish it out because they're doing all kinds of massaging the data to make it all consistent for all users. That's not necessarily the right thing to do is to make it all consistent because when you make it all consistent, you oftentimes lose business context. You lose that ability to define what does it mean in my business context, because it may not be identical. As well as...I'll  give you an example in the financial services space: If you have an online presence and you have a credit card and you have a mortgage, and I say this is my address and I'm putting this information online. And then I say, this is my address and this is for my mortgage. And this is my address for my credit card. Well, those things may not match. And if you have a centralized authority, then they either have to pick one, or they have to make it store three times, potentially — there's all kinds of logic that exists in there. And then you have to coordinate with all of those different groups for each element. What is the rule for the currency of this? What is the priority of this? How do conflicts get resolved? When you push that out to the groups that actually understand the nature of the data, I think that really removes the friction from the process, but also makes it so that you can get the benefit of sharing without having the overhead of the centralization.

**James Gimourginas  20:57**

I think the other piece on that...I'm curious, have you seen cases (and I think the address may be a good one) where access to the data should be provided, but only for a short period of time? So like, as the author I can actually allow, you know, in the address case, yes, I'm applying for a loan; I will let the bank see my personal information for some period of time. But, then, I can actually allow it to expire and change the access controls. I guess, does that resonate? Is that sort of another next...now that you have that power to be able to do that dynamically? How does that shape?

**Brian Kale  21:30**

When we look at what's happening in Europe with regulations about giving ownership of the data to the consumer and saying that, "I don't want you to have my data anymore, I want you to forget about my data." Those are all complexities that have to be built into the existing monolith with these existing centralized systems. And when you look at the complexity of some of the enterprise environments, that becomes very, very difficult. But if you have that on the front end, to where someone is coming in and defining that in the front end, then I think it does simplify. It distributes the workload across as opposed to centralized where they become the bottleneck. So yeah.

**Tim Zonca  22:15**

Yeah. What about like...James, I think what's interesting about that question is like, it's like the advanced version of some of the decentralized sharing that we just talked about. To take a, maybe, the other way, like, a more basic question is, Brian, I'd be curious to hear from you...it sounds like, as I hear the two of you talk about kind of the power of a decentralized model, there's then the inertia of but that's not the way that many industries, including like, financial services, has done it for so long. And, Brian, you've seen enough of this, you know, at scale across multiple organizations. What do you think it would take to, like, overcome that inertia of, you know, we've done this in a centralized manner for a while, even though there are, you know, a handful of benefits in decentralizing it?

**Brian Kale  23:02**

Well, you know, anytime you work in a large, large organization, you're going to have the benefits of scale. And then you're going to have the disadvantages of a bureaucracy or inertia — where it's just such a large organization, once it gets moving, it's extremely powerful, and changing is very difficult. And I think that it really comes down to doing incremental successes on a small scale to build confidence and approach, and then achieve those results and then roll them out incrementally over time. That's how it needs to happen. The same paradigm exists in cloud. You know? Financial services weren't the first adopters of cloud, right? And that's for good reason. Because information protection is of paramount importance. And that will always be the case — that protecting a customer/client data is is extremely important and is of the utmost priority. So when you see some financial institutions (that we'll, you know, we'll not name) that had, you know, breaches, that definitely didn't encourage other banks to go out into that space. However, there is recognition across the industry that in order to meet the customer expectations of serving them in the way that they want to be served — whether it be in a branch or a client meeting location or online, mobile, whatever, you have to have a flexible infrastructure. That's where cloud comes back. But that's what cloud gives you. So you need to do that. You need to get that...you need to head in that direction at some point. And the pace at which you do that is determined by your risk appetite. And financial services tend to have very, very low risk profiles, and they don't have tolerance for risk. But you can, you know, not all data is the same. Not all data is super, super restricted. Some of the data is fairly public. And you can share that information to build confidence to build best practices and to experiment with these types of things. So from my perspective, I've always pushed the envelope in trying to innovate within a very large organization. And so you do that by, you know, incremental approaches. Incremental successes. And I think, you know, the way that we look at that idea and at their particular offering, I think, you know, you don't have to go in with a big bang. In fact, I suspect that is probably not the recommended way to do it. In fact, most most groups don't do it that way. And then I've also seen where you, let's say you have a very complicated process that you want to run in the cloud. Well, you build it in parallel. Alright, so you build in the cloud so that you can then reconcile against production. So if you were looking to try to do something like, what you could do with Vendia, and you have a very complicated process, well, just replicate that in the cloud with Vendia as a disaster recovery capability. And then reconcile to make sure it's working properly. You control the volume, how much is in there, how much exposure, how much risk you take. And then you can build the confidence and the knowledgebase that way.

**Tim Zonca  26:27**

Then, you know, you mentioned...you started talking a bit more about cloud. I think decentralization gives us a unique capability to do some things from a cross-cloud perspective. And I wanted to get into that, but before we do so, is there anything else on the decentralization topic that either you guys want to dig into?

**Brian Kale  26:47**

Just the general comment is decentralization or centralization, they're not right or wrong. It's just what are you trying to accomplish? And if you're trying to change/evolve, centralization isn't the way to go. It's decentralization. If you're trying to standardize and make consistent, then centralization is very effective. The use cases that I've seen for Vendia is you're trying to do something new; you're trying to create new bridges of communication and collaboration across firms. You know, you can't...there's no effective way to do that by centralizing because no firm is going to say, "I'm going to give you all of my data, and I'm going to trust you with it." Just…it's not going to happen. What they might do is say, "Well, I'll share some of my data, and you share some of your data. And let's put it in a place where we can, you know, we can control it, and I feel good about what I'm doing." I think that's the path forward for and it's why decentralization makes sense.

**Tim Zonca  27:56**

I'd love to dig into a bit of the cross-cloud stuff. So James, can you tee up and, maybe, share a little bit about it from an architectural perspective? How Vendia works in this decentralized way, and what that means across clouds? And then we could use that as a framework to dig into some of the items I want to chat about from multi-cloud or supercloud, you know, whatever your moniker is for working on as many clouds.

**James Gimourginas  28:22**  

Sure, yeah. So within Vendia, so we have this concept of a universal application, which is a collection of nodes that can share data back and forth. And so knowing that the participants can't always pick their partners' clouds, right? That's kind of the joke: You can pick your partners, you can pick your cloud, you can't pick your partner's cloud. So knowing that we, as a platform, have to be able to stand on, you know, all the major cloud providers. And so what that means is a few things. One is it gives you, as a user of our platform, the ability to pick your cloud of choice and make the most of your investment, but also still collaborate and work with the partners of yours who may have made a different choice, right? And that's sort of essential to the ability to hit decentralization and really make the most of it. A second part there is that the cloud providers that we're currently running on (and we have future plans to expand into) have the capacity for processing, storage, networking, that are really, you know, phenomenal, right? Unheard of. Unparalleled. And so by building a platform on top of those services, we've given our customers the ability to make use of that processing, that compute, that storage. And building that into our, for example, our consensus mechanism gives us the ability to parallelize and execute consensus at a rate much higher than most other platforms that look similar. So the cloud for us is a) it's an opportunity to allow people to onboard more quickly and get to a wider partner group than they would otherwise; b) it allows those partners to make the most of their investment in their cloud services they already have have invested heavily into; and then c) it gives us the compute and storage that will set us apart as a platform as well. So it's beneficial for all those reasons. Now knowing that, being able to make the most of the different clouds that we do operate on, is really important because that allows us then to bring the same sort of architectural approaches. So API gateway, processing, storage, consensus, event-driven transactions, you know, inbound and outbound to node — but doing that in a cloud native way. So that if I'm on, you know, AWS, and I have, you know, an SNS topic giving me a notification that some data has changed, I can do the equivalent thing on GCP. I can do the equivalent thing on Azure. And by doing that, I allow these sort of automated workflows to exist. So in that sense, you know, if the three of us are collaborating on a universal application, we each have a node; I make a change, you both get informed, and then can take corresponding actions. And as soon as you do that, you know, the other parties are aware, as well. That's the type of, you know, automated cross-cloud workflows that are really powerful, and will, you know, lend themselves to the next business model, right, that today is just not not possible because of the amount of time and effort you would need to connect the three of us in a meaningful way.

**Brian Kale  31:18**

I think that multi-cloud approach is a non-negotiable, right? I think that...each cloud provider would basically want to tell you, "You can do everything on our cloud. And you should, you know? Because look how much easier it is — we've got all this functionality we built into accelerate your...all the bells and whistles for our cloud. And of course, it's proprietary to our cloud that we want to use." And that's many, many different companies are just gonna say, "Yeah, let's just make it simple because cloud is redundant." You know, they've got...they're distributed all over the place. And that's gonna be great. That is an improvement over having your own, you know, server in a closet. I mean, hands down way better. 

**Tim Zonca  32:02**

Yeah. (grins)

**Brian Kale  32:03**

But every...no system is completely perfect and...impossible to bring down. So there's, there's always some little risk that's out there. So there will be certain industries that say, "You know, we need to have more redundancy." And so they go to the cloud because that gives them some redundancy. But then, they're also going to say, "We want to be across multiple clouds. So that, you know, if one cloud goes down, you know, if Azure or AWS has a hiccup, we don't feel it because we can dynamically switch across." So having that ability to interact with multiple cloud instances is paramount. And the reality of it is, is that most businesses…they have a function, they're not going to have that across multiple clouds, they're going to have one cloud provider, and they're going to want to deal with somebody who's not on another cloud. And having that ability to stretch across them is going to be, you know, that's table stakes, right, for the client.

**Tim Zonca  33:11**

Yeah.

**Brian Kale  33:11**

Absolutely. 

**Tim Zonca  33:12**

Well, I hear two things from you guys. You know, James, I think you were talking about, you know, partners choosing their own clouds. And, you know, Brian, I think you you reiterated that, but kind of added an element if I hear right, which is, "Hey, even within one organization, for redundancy reasons, they may want to have multiple clouds.

**Brian Kale  33:31**

Absolutely, absolutely. If you're a financial services firm, and you've got your deposits platform, and  you're hosting it in the cloud, you know, the regulators are not going to be really excited about you are dependent on Amazon. Right? They're gonna say, "Yeah, Amazon — and who else?" 

**Tim Zonca  33:48**

Yeah. 

**Brian Kale  33:49**

And so they're gonna want to say, "Can you distribute this workload across...?" There's complexity in there. Because if you build a proprietary to the cloud, and dependent direct, really deep integration, and dependency upon those cloud-specific capabilities, then you're going to have a potential problem of going across. But if you abstract it, you know, I think that you can have, you know, there's just infrastructure across multiple different providers. And that's where, you know, you have a data line using Verizon and one using T-Mobile, or, you know, some other provider.

**Tim Zonca  34:28**

That's a good...that's a really good analog. Yeah, that's a good, good comparison.

**James Gimourginas  34:33**

Yeah. I know…there's a recent…the State of DevOps Report came out, you know, just a few weeks ago. And, you know, one of the findings in there is, of the companies they surveyed, more than 50% reported having more than one cloud provider that they're using. So this is not a sort of thought down the road. This is happening now actively. Right? And one of the reasons for that, that you know, the top three were availability, the ability to get sort of the unique benefits. So like per service, which is the cloud that I choose who has the best, you know, IoT platform, who has the best ML platform, those types of things. But then the big one, and Brian, you hit this, the third one is like the trust, right? The putting-all-your-eggs-in-one-basket just not being acceptable for many companies. And the need to sort of spread that risk and trust, you know, around is very important. I think, you know, from a Vedia perspective, one of the big benefits here is that, you know, if you think about this universal application network, instead of hiring an entirely separate DevOps team building all the infrastructure's code, going through that entire security and accreditation process, proving out each service, getting the buy-in of the organization...if you can more simply just spin up a new node, know that that data is completely synced at all times with the other cloud of your choice, then that investment you need to get to multi-cloud resilience, right, and to experiment with different services goes down significantly. And so that's, you know, the other value prop here is if we, as a platform, allow you to do that more easily, the other 50% who aren't currently doing that have a much easier path to get there. Even if it says, you know, sort of an initial step, right? It's step one. It gives you some level of, you know, distribution of the trust and, you know, putting your eggs in...spreading your eggs across multiple baskets, even if that's the first step, it's an easy first step. Now, that's no longer a multi-million dollar, multi-team investment, it's a decision you make, you know, with a few clicks of a button.

**Brian Kale  36:39**

That's a really great point. Looking to go into the cloud, there's different ways you can approach it. You can say, "Well, I'm going to, you know, I've kind of been fast and loose with my infrastructure for the last 20 years. I'm just gonna go in the cloud." And you pop it in there and your risk, probably from a resiliency perspective, has dropped but your risk from exposure or a data loss perspective skyrockets because now it's all over the place, right? 

**Tim Zonca  37:05**

Right. Yep.

**Brian Kale  37:07**  

So if you can do it, right, then James's commentary about millions of dollars to spend to certify that you’re building is secure, is not an exaggeration at all. I mean, it's a tremendous effort to build something that is secure and that is highly secure in the cloud. So if you've done it already, and you're just onboarding, then there's a huge difference in terms of cost between onboarding to a service or building from scratch. And so that's definitely a compelling business case.

**Tim Zonca  37:44**

That makes sense. You know, kind of shifting topics, one of the other things that really jumped out at you, Brian, when we were last talking was, you know, as you're sharing data is like, not only is it possible, and is it possible across clouds, but do we know what happened? And do we all believe it? So one of the topics that jumped out at you is, like, lineage, or what James called time machining or rollback? Why did that jump out to you?

**Brian Kale  38:11**

Well, in financial services, which is my primary experience, what I've seen is that you calculate something or you say that this is a piece of information that's really valuable. And it's not what people expected it to be. If you can't reconcile how it got to that point, then you lose trust. Then you lose confidence in the information, and then people don't use it. Or you spend all your time circling the drain trying to figure out what the heck happened. And you have a bunch of people just pontificating about the possible causes. And if you can roll back and say, "This is what it was, at this point, this is what it was, at this point, this is what it was at this point. And here's where those changes took place," then you can determine 1) it's right, or 2) it's wrong, but not it's not a system mistake; it's a people mistake. And you can say we've got some process change that we have to make between the partnership, between the stakeholders to say, "Alright, we need to change the rules here." Right? But if you've got an audit trail or rollback capability that shows you the history, as well as who made the change and where it came from, then you can have a conversation that's productive, as opposed to just circling the drain trying to point fingers as to what the problem is. And I'm telling you, trust? Any system that deals with data that's used for decisioning, you have to have trust. You have to trust the data. And those that contribute to that trust have to have confidence that what they contribute will be consistently applied in the decisions and not misrepresented. So all of those things create this need for traceability because an audit trail is...I mean, generally accepted accounting principles, you know? Audit trail — that's the foundation of financial reporting in the market. And that's why this country is, I think, a big contributor to good standards for financial reporting — you gotta have an audit. And you've got to be able to say how you calculated these things. And when you don't have that, you lose trust. And if you don't have trust, you can't have an effective partnership.

**James Gimourginas  40:30**

Yeah, that's definitely true. And, you know, in every industry that I've seen, the ability to trace back data to its source and know what the source has increased trust instrumentally. And without that, you have doubts, right? So think of an IoT network, you know, sensing temperatures within refrigeration units that are moving around the country, right? Trucks and that type of thing. If I know that the sensor in that truck was checked a week ago, likely still working, I can look back and see when it was manufactured, who the manufacturer was, what the error rates on those sensors are. That gives me a much different set of context that I can use to think that the measurements that are being calculated to let me know that, you know, that my groceries are actually safe to eat. It's very different in that I just get a thing that says, yeah, the average temperature truck was 32 degrees, right? 

**Brian Kale  41:22**

Yeah. (grins)

**James Gimourginas  41:23**

Like those two pictures, right?

**Brian Kale  41:24**

It's -50 and it's 100 degrees and everything spoiled. But yeah, but average, it was fine. (nods and laughs)

**James Gimourginas  41:30**

Right? Exactly. So like if the two dashboards, right, one is like, here's when the servicing was done on the truck. Here's when the part was bought/purchased, here's who the purchaser is, this is the history of that part, you know, over time, and its likelihood of being correct. And the other one is just a temperature. I know which of those two dashboards I'm going to have a lot higher confidence in.

**Brian Kale  41:49**

Yep. Yeah, absolutely. Absolutely. So obviously, it's a passion point for me. (chuckles)

**Tim Zonca  41:54**

James, can you touch a little bit about, you know, some of the stuff that Brian highlighted? How does Vendia make that possible or not?

**James Gimourginas  42:02**

Yeah, so I think the, you know, the first thing is to start with a ledger, right? Because with a ledger, you have the ability to elect this information over time. And it's the history of that information. So we have this, this notion of a ledger. Think of that as your deposits and withdrawals right over time. And then you have this notion of a world state, which is the current reading, so the balance, right? And so I will often just want to know the balance. But there are times when I want to know how did we get to that balance? And so by having the ledger, which keeps all the transactions, every modification to that value over time, I can go back and both know, what it was, what it is today, what it was yesterday, how we got there, what the what you know, what the differences are, and then your most importantly, is who made the changes? Right? So in these multi-party scenarios, I may not just care about what the transactions were, but actually, where did they come from? And by bringing all that together in a single place, now I have, again, much higher confidence in what I'm looking at. Much higher trust. So I think that's part of what Vendia provides is that ledger. The other thing it provides is the ability to not really have to think about any of this when you're interacting with the system. Right? Because what we've done is you provide an API to, let's say, make a deposit. You make that call through the API to Vendia, all the other ledgering transactional history recording who did it, and when and creating the block sequence to know that it's immutable, and it hasn't been tampered with, that's all pushed to the platform. So as a developer, I need to know how to make an API call. I don't actually need to worry about all the other complexity behind it to keep that consistent ledger. And that I think that's one of the big benefits of a platform like ours.

**Brian Kale  43:48**

Yeah, the space of data quality and consistency and data security is a skillset on its own. And the complexity continues to increase. And if you put the burden on compliance with those types of non-functional requirements on an individual developer, you're running the risk of, you know, do they have the right skill sets to do this? They may be great API developers, and they may understand the business process so that the API is structured properly. But they may not know the most current, you know, information security standards and vulnerabilities and how to secure the environment. And so...because that creates a vulnerability in and of itself and why it's always better to reuse something to build it. And you build to differentiate. And I think that's...it's not like you're throwing off all of your capabilities to a centralized environment. But you're taking a certain core complexity, standardizing it, you know, centralization, in some respects. This functionality is now centralized with Vendia. But it's very compartmentalized; it's containerized to where it's not this big, monolithic behemoth. It's got a very open environment that you can plug into — plug and play and then be able to leverage that quickly as opposed to having to build all of these integrations yourself.

**Tim Zonca  45:19**

Yeah.

**James Gimourginas  45:19**

Yeah. And it's the error scenarios in the distributed computing world, where you start to, you know, really have to just, you know, line-by-line, design-by-design, come up with the right way to handle those. Right? It's the how do you deal with consensus when there's network variability? When there are blips that aren't expected? When one of your participants happens to be offline for a bit of time? Those are the challenging...

**Brian Kale  45:44**

Which happens.

**James Gimourginas  45:45**

Oh which happens all the time, right? In a network system, that happens, right, constantly. And to be able to handle...

**Brian Kale  45:47**

It's way better than they were 20 years ago, but it's still happening, you know?

**James Gimourginas  45:53**

Yeah. Yeah, to be able to handle each of those failure scenarios correctly, with the consistency across your partners, like, that's where many, I think many people will get it working, they won't get it working in all the failure cases. 

**Brian Kale  46:09**

That's right. All the edge cases.

**James Gimourginas  46:11**

Yeah.

**Brian Kale  46:11**

The edge cases will kill ya. Well, and the whole financial crisis of 2008-2009 was an edge case in terms of the modeling for all of these Wall Street bankers. They were like, "Oh, the chances of this happening are remote, you know, the market, the housing market is not going to collapse." And yeah, well, the chances were remote, but the consequences were enormous.

**James Gimourginas  46:37**

Right. Right.

**Brian Kale  46:13**

So you've got to handle those edge cases. And that's where the specialization comes in. You've got to have that expertise. And you can build it yourself. It's not like it's something that's so hard that nobody else can do it. But do you want to, you know? Do you want to build your own car? Do you want to build your own furniture? Do you want to, you know, do you want to grow your own food, you know? Specialization gets you a lift, and are therer better investments of your time, in terms of your business process, as opposed to a very specific integration technology method? Where should you be investing? And my view is, you know, reuse before you buy, buy before you build, and build to differentiate.

**Tim Zonca  47:23**

That's great. You know, I want to shift a little bit into opportunities or things you're excited and worried about over the course of the next little bit. You know, Brian, at the onset of the call, you said you retired, but it sounds like you're kind of engaged with multiple organizations and kind of like at "the coalface" of still really cutting-edge projects in technology. James, you're at a startup where, same thing, you're working with customers who are pushing the envelope. I'd love to hear from the both of you, Brian, maybe you first...So if you look out over the next 12 to 24 months or so, what are you most excited about from a data sharing perspective? And what are you most worried about?

**Brian Kale  48:07**

So, yeah, I've not fully retired. I retired from the bank, but I didn't quit working. It was more of I had done something very, very large, a multi-year, huge project, and I decided I wanted to do something different. So the consulting has been great. In terms of what I see, you know, coming up, I mean, distributed processing is the future. I mean, it's undeniable. It's more powerful than a monolithic approach. It's more flexible, and it scales much better than doing everything centralized. It's just, it's the reality. However, there's a flip side of that. Whenever you distribute, you have management challenges. And trying to...if you distribute without having figured out how to manage that distributed environment, you're gonna have a mess on your hands. And from what I've seen, you know, Vendia has really addressed that management challenge. You can now distribute these things, but it's still managed — it's just managed in an automated way, as opposed to manual. Because you can't do it manually, it won't scale. And that's been proven throughout history. There's always a breaking point to a manual process. But if you've got an automated, scalable process for managing a distributed environment, then you get the benefits of distribution/distributed processing. And you can manage the complexities that come with it. So again, you know, you look at the cloud, the cloud is distributed. However, if you have containerized applications and they are in a serverless architecture to where as the volume or the load increases, the number of instances increased automatically. A triage of issues supporting that environment is extremely, extremely difficult and pretty much impossible at scale. However, if you can leverage a platform or some sort of monitoring that can automate that or automate the management of that, then you can take advantage of those opportunities. So, you know, I think my worry is that firms are going to...firms go into the cloud without understanding the operational aspects of how to implement scale and how to manage that environment. So they're gonna say, "Well, you know, I built a monolithic environment on prem in a data center, and I gathered all this information, and put it in a Hadoop cluster, and then I did all these things. I'm just gonna do that in the cloud." They're gonna have challenges. I think they're gonna have challenges with managing the complexity environment in the cloud, or they're gonna have challenges with managing the trust between different partners. And that's even if they get partners to agree to put all their data into one area controlled by one of, you know, one of their partners. So that's what I see. That's my concern. And I think that firms like Vendia are essential to consider for those types of challenges.

**Tim Zonca  51:07**

James, what about you?

**James Gimourginas  51:08**

I think the thing I'm most excited about is seeing more of our customers get to production. Get to, you know, scale. Continue to grow their networks. You know, we have plenty of stories there, but just continuing to add to them and seeing these different use cases and all the different industries come to life...I mean, we're seeing that, you know, in front of our eyes, you know, on a weekly basis at this point where we get, you know, a new customer will be live. We'll, you know, sit there and watch the operational dashboard and see the number of transactions ticking up. You know, that's always exciting. I mean, just, you know, from my role here at Vendia, just seeing customers be successful with the platform and, you know, and building businesses on top of it is awesome. So more of that is definitely what gets me excited. I think on the challengers side, you know, we've been fortunate as a platform in that we have had customers who get it, right? They understand the paradigm shift. They see, you know, three or four years down the road of how things are going to be and they've jumped on. It is challenging to make that mental shift. I mean, it took me quite some time. You know, I'll go back to the Serverless days at AWS when Lambda first came out. It took me a while to really get the value prop with Serverless compute, right,? Just having always provisioned servers and dealing with, you know, like hardware, right, running hundreds of, you know, on prem machines, keeping those up to date...like this notion of, "There's not just a server in the cloud, but there's actually a server in the cloud that I don't even have to ever access." Right? That took some time. And I think we're in a similar place with distributed, decentralized, ledger-based data sharing. I think there's early adopters who see the value prop. I think that over the next few years, it'll be telling to see how much more adoption and usage we can drive. And how long it takes people to get it. I know, for myself with Lambda, it took maybe six or twelve months before I really started to see the benefits and the value. And I think, you know, fast forwarding here at Vendia, I hope that over the next few years, we do see that, you know, that sort of uptick, right, in not just adoption of Vendia, but just the the paradigm shift of thinking about the data sharing problem with partners in a decentralized versus centralized way.

**Tim Zonca  53:26**

Thanks, And to kind of wrap things up, Brian, one final question for you. You know, it's the magic wand question. So if you could wave a wand and unlock something for, you know, maybe it's KPMG, or one of the other companies you work with, and around data sharing over the next year or so, you know, what would you unlock for them?

**Brian Kale  53:48**

I think that, you know, a distributed approach and understanding how that works and the value proposition, as well as how the security and data protection capabilities have evolved. I think...I'd like to see that kind of be a breakthrough for a lot of clients and partners. I think that the capabilities exist; there's just not a broad understanding of what those capabilities are, and how you would leverage them. And those, you know, that just takes a long time to build that trust. 

**Tim Zonca  54:29**

Yeah. 

**Brian Kale  54:30**

And to socialize the understanding. You think, you know, James says it took six to twelve months for him, who was working within AWS and was privy to all of the discussions. How much harder is that going to be for someone who's not on the inside? That just hears what they're being told by somebody/by a vendor? And, you know, they have to see it to believe it and then see it over time. And then experience the challenges that any kind of new technology adoption encounters, and to deal with those things and say, "Okay, I understand how it works. Now I understand what the pros and cons are. I understand what the gotchas are. And now I get it. Now I get the value proposition because that's the ability to change." Change is happening throughout society faster and faster, and businesses are changing, evolving. When I started out in technology, I got to a point where I felt like I pretty much had mastered most of the domains that I had been exposed to. And the environments have gone so much broader, you know, exponentially broader and deeper, to the point where now there's just that broad understanding that I had in terms of understanding the landscape is, you know, one percent of what's out there today. And so that the understandability, to really go broad and deep, is challenging for most people. And I think that that distributed approach to many things, not just, you know, data sharing, but the distributed approach to putting technology in, I think, is, is the wave of the future. And the architectures and the infrastructure has finally reached the capabilities that needed to make it practical for use in everyday business.

**Tim Zonca  56:34**

Great. Well, thanks, you guys. This was awesome to get a chance to have you on the show, have the two of you dive into some of these topics that you're both, you know, interested in, and also, you know, experts in. So I appreciate it. As we wrap up, yeah, so thanks to our guests, you know, Brian, and James for all the talk on real-time data sharing. For those of you listening who want to learn more about some of the organizations or research/products that we've mentioned in today's episode or any of our episodes, if you visit vendia.com/podcast, we have all our links there that you can find. When you're ready to keep the conversation going, you could download or stream all of our episodes on Spotify, Apple Music, any of the top streaming services. And if you have a point of view on the challenges or power or potential of real-time data sharing or you want to be a guest on the show, just go ahead to either Twitter or LinkedIn and just DM us or at mention us and include the phrase "Circles of Trust." Thanks again for joining us. If you like what you hear, take a moment to drop us a few stars and a favorable review and share with your colleagues and your network. So until next time, thanks, everybody. Thank you, guys.

# Get Circles of Trust in your inbox

Join the [Circles of Trust community](https://www.vendia.net/resources/circles-of-trust) to get real talk or real-time data sharing right in [your inbox](https://www.vendia.net/resources/circles-of-trust). Or subscribe now on [Spotify](https://open.spotify.com/show/49kZwowJkYxjceHIax2zxK), [Apple](https://podcasts.apple.com/us/podcast/circles-of-trust/id1645908970), or [Google](https://podcasts.google.com/feed/aHR0cHM6Ly9mYXN0Lndpc3RpYS5jb20vY2hhbm5lbHMvYWw5cWQ4MTdkcS9yc3M/episode/NzQzNGZjNmItYmFjNC00MmNmLWIxNDctY2E0ZGJiNTE0Njhh?sa=X&ved=0CAgQuIEEahcKEwjYxcrM_rr6AhUAAAAAHQAAAAAQLA) Podcasts.