---
title: "Meet Vendia's founders"
description: "Meet Tim Wagner Vendia's CEO and Shruthi Rao Vendia's Vendia CBO"
date: '2020-07-01'
categories:
  - company
tags:
  - origin
authors:
  - Tim Wagner
  - Shruthi Rao
---

Our company name, _Vendia_, comes from Venn Diagram. It's intended to reflect our core mission — helping customers share code and data across companies, clouds, and technology stacks. But it's also a reflection of us: individuals with unique skills and experiences, coming together to create something amazing. We'd like to tell you a little about ourselves and how Vendia came to be.

![Image for post](https://d24nhiikxn5jns.cloudfront.net/optimized/miro.medium.com%252Fmax%252F1920%252F1%2At4f5OdXCd8DlDaNPtn7Kdw.png)

Vendia's Origin Story
=====================

Given our unique backgrounds — two of the only people who've ever worked on both Serverless _and_ blockchains — and having partnered successfully once before to grow the AWS Lambda and Serverless business, it was a natural fit for us to co-found a company. We first chatted about the idea in late 2019. Tim had left Coinbase with the kernel of an idea: That the weaknesses of blockchains — their poor performance, scaling limitations, and difficult deployment models — could be addressed through a radically different architecture, informed by his time building massively multi-tenanted cloud services for AWS. Similarly, the challenges of existing serverless compute approaches — their “single cloud, single account” nature and lack of a built-in state model — might be fixable with ideas from blockchains.

Meanwhile, Shruthi was running business development for AWS's blockchain division, including Amazon Managed Blockchain (a productization of the open source Hyperledger Fabric code) and QLDB — a centralized (single owner) database with ledger-like capabilities. In that role she got to speak to hundreds of companies from every possible industry sector and learn about their challenges: Why were they interested in blockchains in the first place? Why were the common problems they were trying to solve? And on the negative side, why did so many of their experiments (“POCs”, or Proofs of Concept) fail?

We realized we were onto something: That moment of “hey, there's a huge market need here and a set of incumbent technologies that aren't meeting customer needs yet” happened as we chatted excitedly on the phone. The seed of an idea had been planted.

In early 2020 we started “shopping the concept”: Mock pitches to friends, family, and some VCs we knew. It was a chance to hone our ideas, work on our technique, and prepare ourselves for what was to come. It also gave us increasing confidence that there was a huge market in supply chains: the challenge of tracking and tracing goods lent itself naturally to solutions designed to help suppliers, manufacturers, and logistics companies share data to improve tracking and tracing.

Meanwhile, Tim had started engineering the product over the 2019 holiday season, and we began showing it to customers in early 2020, getting them to try it out on some of their key use cases. This was a double advantage — not only did we get fantastic feedback very early to shape the product based on real customer insights, but we were also able to speak to VCs from the perspective of real customers with real problems. Vendia was moving beyond the hypothetical!

As spring arrived, Shruthi left AWS to join Vendia full time and we began pitching in earnest while continuing to work with our design partners. Although we'd both been at startups before, this was the first time as founders for both of us. Like any first-time founder, we inevitably made mistakes, but we were at least learning from them. Our pitches were getting better, the product was starting to take shape, and we were close to getting our first term sheet. But we hadn't planned on a “Black Swan” event happening in the middle of our raise: Covid.

Suddenly, everything changed. VCs began focusing their capital on the needs of existing companies rather than starting new ones. Capital calls became tricky as limited partners lost value in a plunging market, making it harder to get funded in general. And innovative, disruptive ideas — the boldest concepts but also the hardest ones to fund — became the most difficult pitches of all, losing ground to safer, more incremental options. For a few weeks, it seemed like our vision of helping companies share code and data effectively might be coming to an early end.

At a time when many of our discussions with VCs were becoming more challenging — or even falling off calendars altogether — our initial discussion with Neotribe was markedly different. Tim was flying back to San Francisco to shelter in place there and took a VC call from a nearly empty airport with Swaroop ‘Kittu' Kolluri, founder of Neotribe. Kittu wasn't interested in evolutionary advances or small variants on existing business ideas; he shared our desire for a “bold bet” on the future, one that could have enduring impact across multiple sectors. Even from the first introductory call, we felt the difference in this conversation — we had found a partner with a founder-like conviction for our vision!

From that moment on, the process became easier. We brought in other investors who could help complement our own experiences, including Correlation Ventures, WestWave Capital, HWVP, Firebolt Ventures, Floodgate and Future\\Perfect Ventures. Our seed round funding completed on 6/25/2020, the same day we exited stealth and presented Vendia to the world in a keynote address at an AWS event. Covid, though it had made things much harder, hadn't stopped us after all. Vendia was off to the races!

Meet the Founders
=================

Tim Wagner
----------

I helped create the Serverless movement by founding the AWS Lambda team in 2013. Back then the public cloud was doing a great job of helping customers lift and shift their on-prem applications to an environment where economies of scale could lower infrastructure costs by 10–20% and where server capacity was suddenly flexible and effectively unbounded. But despite those advantages, the cloud was really no easier to build on than a private data center: Turning a rack of servers into a secure, cost-effective, fault-tolerant, scalable application still required a team of 20+ highly skilled backend engineers, many months of time, and a bunch of equipment rental fees. AWS Lambda, and eventually serverless offerings from other cloud vendors, changed that equation. Suddenly, _anyone_ could run code in the cloud with all the operational mastery of AWS, but without the high cost, lengthy development cycle, or wastefully low utilization of building it manually using servers.

I loved working at AWS and helping customers accelerate their IT solutions with Lambda, Amazon API Gateway, and the other fully managed services my team built — it was a bold, innovative new way of thinking about and designing applications that was uniquely possible in the public cloud. But I also heard the same two concerns from many enterprise customers: First, Lambda was amazing for stateless computation, but it lacked a clear, built-in model for handling state. Second, while it integrated amazingly well with other AWS services, inevitably they had to integrate with other departments, organizations, companies, etc. who had made different technology and cloud choices. Cross-cloud challenges — not for _portability_ but for _connectivity_ and sharing- was a real issue.

I eventually left AWS and went to work at Coinbase, the largest cryptocurrency brokerage in the US and one of the few companies on the planet where all financial transactions ultimately take place over distributed ledger technologies. Technologies such as Ethereum accomplished something amazing: They were able to create a reliable, trustworthy replica of data — such as a financial transaction — across hundreds of servers owned by different organizations and individuals all over the world. It was a radically different approach to trusting data: Instead of one company or organization keeping a single, centralized database impregnable and storing lots of secret data in it, data was widely and broadly shared by many people, with privacy and control managed through millions of public key pairs.

But putting those systems into production (and keeping them up and running) also taught me the downside to existing blockchain technology: It was a distributed system invented by people who were better at math than at high-scale, multi-tenanted services. For all their exotic math and interesting approaches to consensus, at the networking and storage layer all blockchains were just old fashioned “p2p” networks. Ethereum, Hyperledger Fabric, and all distributed ledger technologies were designed with a “single box” model, forever limiting them to the computational, memory, and network capacity of an individual machine. Adding more people to these network didn't make the network more powerful, as it would have in a service like Lambda, it just made more replicas of the same, limited, single-box deployment.

![Image for post](https://d24nhiikxn5jns.cloudfront.net/optimized/miro.medium.com%252Fmax%252F1920%252F1%2ADY19C6Yjszv6xA-YPZ35JA.png)

### The inspiration for Universal Apps

Having spent many years building multi-tenanted systems that use millions of servers at AWS, I had a realization: The “missing link” for Serverless was a stateful data model that could work across different clouds and owners, something distributed ledgers had already figured out how to do. The “missing link” for blockchains was an architecture that offered unlimited scalability and ease of deployment. The idea that would become Vendia was born! After leaving Coinbase, I got to work designing an entirely new approach, one that would enable serverless, distributed apps…what we eventually came to call _Universal Apps_, or _unis_.

Shruthi Rao
-----------

I have spent most of my professional life scaling businesses — taking things from zero to one, sometimes from zero to ten. At McKinsey & Co, I built roadmaps to launch new businesses for retail and banking. At AT&T, I launched AT&T Uverse at the height of the 2008 economic meltdown and played a pivotal role in the AT&T and DirecTV merger and then with the Bank of America, Countrywide, and Merryl Lynch merger and integration.

I met Tim in person for the first time while interviewing for a business development lead role on his Serverless team. I had already done some Bitcoin mining, so I was familiar with distributed ledgers, and during the interview, I asked Tim why no one had attempted to apply Serverless approaches to Blockchain workloads. That was the beginning of our friendship and partnership. As Tim's BizDev partner for Serverless, I incubated and launched Serverless App Repository and helped build the Serverless business internationally and in Startup and SMB segments.

In 2018 I founded the Blockchain movement at AWS and launched and ran the Amazon Managed Blockchain business to help customers get access to multi-party data. At AWS I had the privilege to meet with executives from 1,092 unique companies — -a rare opportunity to work backwards from real customer pain to product outcomes! The good news? Companies were trialling blockchains solutions at a very high rate through proofs of concept (POCs) and pilots. The bad news? The churn rate was _also_ very high, as enterprises and SMBs alike struggled to put Hyperledger-based blockchains into service.

No customer has a blockchain problem, just as no customer has a database problem. I was on a quest to learn why customers were gravitating towards blockchains, despite the challenges. What was motivating so many companies from every possible sector to spend time and energy researching a new technology?

Public blockchains focus on trust — much of their innovative implementation is focused on keeping critical financial transactions, such as balance transfers, safe and correct. But interestingly, of all the companies I personally talked to, not a single one had a ‘trust' problem with their partners. For enterprises, trust was often established by legal contracts and provisions already in place. Their real problem was something quite different.

These companies had made investments in IoT and Edge devices that were now gathering massive amounts of data — much of it outside each company's four walls, residing with supply chain, logistics, manufacturing, and financial partners. Not only did their digital and cloud journeys suddenly have these companies _producing_ more data, they were also _consuming_ more data than ever before: Investments in AI/ML and Analytics solutions were intended to improve business decision making and outcomes, but were often limited by having access to only a company's own data…leading to poor quality, stale outcomes, and limited business intelligence. I heard virtually the same story from every company — -_they wanted to use blockchains to solve a data sprawl problem_. The words varied a bit, but they were always some variant of, “My data is dispersed across clouds, partners and tech stacks and I need access to **all** of it, in real time, if I want to run ML or other optimizations to improve my business”.

The causes of failure were also always the same: Difficult deployments that exposed all the complexity of wiring servers together across companies and clouds, the inability to scale in any dimension (code, storage, or network throughput), and the lack of built-in solutions for cloud and mobile integration left most companies frustrated. Existing blockchain approaches, rooted in solving a “public trust” problem weren't succeeding. Running nodes was prohibitively difficult for even the largest and most capable enterprises. Hiring a team of blockchain engineers with special language expertise, such as Solidity, in order to create smart contracts was a nonstarter for companies of all sizes. Worst of all, when a multi-party organization involves participants with more limited IT capabilities — such as a coffee bean farmer, trucking company, or retail sales unit — standing up a Kubernetes cluster or scaling EC2 servers hosting Hyperledger Fabric simply wasn't even possible.

The missing link for companies with multiple partners in the value chain was a mechanism to share data without giving up control. Companies needed this mechanism to be easy to use, operationally light for all parties irrespective of their IT capabilities, and to work with the resources that they _already had_ — both their existing technology stacks and their existing developers. They needed the ability to quickly experiment, the flexibility to evolve schemas and participants as business needs changed, and a quick “time to value” that could demonstrate ROI and also be simple to put into production to complement their AI/ML and IoT investments. I partnered with my dear friend Tim to work backwards from every customer I spoke with to create this missing link: Vendia, inspired by the tenets of blockchains, but with an entirely new approach, one that would enable the future of distributed business models.

Our Vision for the Future
=========================

Getting a company started, raising capital, creating a website, building an initial product…there are a lot of challenges to becoming entrepreneurs. But the most important step of all is helping our customers succeed. Their success, more than ours, is what motivates us every day. We've been incredibly fortunate to have early customers and design partners who've given us candid feedback and helped us ideate on new products and services. Our innovation model is one of continuous experimentation and refinement, powered by constant customer feedback.

Data sprawl affects every company, and is a limiting reagent to a successful digital and cloud journey. Our vision is to empower companies to serve their customers better through data — _wherever_ that data lives. By helping companies connect their code and data across clouds — securely, scalably, and with proper governance — we can make the task of creating modern IT solutions easier, faster, and more cost effective than ever before.

Interested in experiencing Vendia for yourself? Check out [our website](https://vendia.com), join our mailing list, or [sign up](https://vendia.com/sign-up) to be part of our developer preview program, starting in late July. We'll also be posting more information about Vendia, use cases, and Universal Apps on [our blog](https://www.vendia.com/blog) in the coming weeks.

Thanks for reading!

[\-Shruthi](https://www.linkedin.com/in/shruthirao/) and [Tim](https://www.linkedin.com/in/timawagner/), Vendia co-founders

Want to learn more about Vendia? Read [our welcome article](https://www.vendia.com/blog/welcome-to-vendia).

_Love Serverless and building distributed applications,_ [_we're hiring_](http://jobs.vendia.net)_!_
