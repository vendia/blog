---
title: 'Lean Apps Part 1: Lessons from the Past'
description: 'Build software based on customer value, not technological ownership'
draft: false
date: '2022-02-03'
authors:
  - Tim Wagner
---

## Build software based on _customer value_, not _technological ownership_


## A brief history of software development

Over many years of researching, creating, and shipping developer tools, application frameworks, public cloud services, and blockchain products, I’ve had the good fortune to get a front row seat to the exciting journey that software has taken. 

Some of those trends are fairly obvious to anyone watching, like the shift in libraries from a proprietary, license-driven model to de facto standard open source libraries across every programming language. Other trends are more subtle, like the fact that virtually every new service from AWS now has “serverless” as a modifier – a shift towards simplifying the operation of cloud services that is slowly but surely removing infrastructure complexity over time.

These trends may feel incremental, but over time they have dramatic macro effects: When I began my professional career, it wasn’t uncommon for companies to have custom compilers (sometimes even custom languages), custom operating systems, bespoke data centers, and in some cases even custom hardware to host even their most prosaic and commodity IT solutions. 


## Current landscape

Fast forward to today, where 99.9% of developers rarely if ever give a moment’s thought to how compilers or operating systems actually work (and where even fewer have ever seen a data center), and where much of what used to be managed by IT is now offered by SaaS vendors in the form of multi-tenanted subscription services delivered from the public cloud, such as Slack and Zoom.

Watching this grand evolution over the years raises an interesting question: **Where are _today’s_ trendlines – increasing automation, abstraction, standardization (de facto as well as de jure), and “serverlessness” – headed**? What can they tell us about what a typical business software application will look like in the future? And, most importantly, what can we do as developers, cloud companies, and the broader IT ecosystem to achieve those future outcomes faster?


## Less is more

While tracking an entire industry is complex to say the least, there’s a single, prevailing theme to all of the changes we’ve seen: “less is more”.


Broadly speaking, **progress in application design has been driven by reducing surface area and shifting complexity to the application’s environment**. 

Figure 1 illustrates this progress over time.

<p align="center">
  <img src="https://user-images.githubusercontent.com/96793170/152250693-a643a5d0-1e6d-4e1b-a31e-a9a1c4606d22.png" />
</p>
<p align="center">Figure 1: How complexity has shifted out of applications over time through surface area reduction</p>


## 4 ways to reduce surface area 


### #1 Removal

The most powerful “reduction” of all is when an entire area is permanently removed from a developer’s purview. The shift from on-prem data centers to the public cloud is a great example of removal: Wholesale problems (“Which router should we use?” “What’s our network backplane bandwidth between data centers?” “How much rack space do we have left on the west coast?”) that used to consume precious IT time, people, and money have vanished…or at least been condensed into paying a public cloud provider’s margins, which are usually covered by the shift from buying peak capacity to paying for actual use.


### #2 Reduction through standardization 

Where things can’t be taken away entirely from the application stack, the next best thing is to focus a company’s (and developer’s) resources on the elements that differentiate their customer outcomes, rather than the undifferentiated “commodity” pieces. 

Open source libraries, the standardization of operating systems and languages, Docker images…all of these are examples where the community has worked hard to avoid spurious differences that consume precious resources, allowing practitioners to focus on what matters. (Note that “standardization” here doesn’t have to mean a formal, committee- or standards body-driven process; it can also take the form of upvoting open source libraries to create a de facto notion of the ‘right’ way to handle a common task, such as parsing a URL in python.)


### #3 Paradigm shifts that simplify complex tasks 

In the purest form of the above methods, the programming model doesn’t change outright; rather, tasks like “provisioning a server” or “using a URL parser” still occur, but with less underlying effort (public cloud versus private data center, standard library versus selecting a vendor to negotiate and purchase a custom license).

Other times, however, the reduction in surface area requires a corresponding change in how an application itself is constructed. This class tends to lead to “epochs” of software development: like the shift from mainframes to client/server, which eventually created the server-based Unix era, which itself led to the public cloud (initially focused on Infrastructure-as-a-Service), which ultimately gave rise to fully managed and “serverless” offerings. 

Each of these created powerful new opportunities for application developers, but these large shifts could be achieved _only with a compatible modification in how the software itself was developed, organized, and/or deployed_. Every paradigm shift also relied on the ones that came before: For example, AWS Lambda was only possible because fully managed storage solutions (such as Amazon S3 and Amazon DynamoDB) had become available, which in turn were only possible because the public cloud (IaaS style) had already been developed.


### #4 Automation

 “GitOps”, along with commercial vendors like Netlify, as well as a host of SaaS-style deployment tools have radically changed how most developers approach the task of actually committing, testing, and deploying code.

Twenty years ago, new software projects often started by creating (and staffing) custom tools to perform these functions; now, they are standard, usually SaaS-based, mechanisms, with virtually no thought given to how they actually work, as more and more of the routine elements are shifted from application developers onto vendors. (Since it’s orthogonal to the other changes, deployment automation and development tools are not captured in Figure 1.)


### Next post – Lean Apps Part 2: The Elements of a Lean App

In the Part 2 (coming soon!)of [this series](https://www.vendia.net/blog/lean-app), we turn our gaze from the past to the future, to see what these learnings tell us about the future of software development.


### Get the whitepaper

If you don’t want to flip through four separate posts, you can download the full white paper [here](https://www.vendia.net/resources/lean-apps). 


### Build a lean app 

It’s possible to create lean apps today. Companies like [Vendia](https://www.vendia.net/) will let you move directly to a lean app methodology for new application development or to layer a significant new feature or capability on top of an existing application. You can get started for free and deploy a sample lean app in less than ten minutes [here](https://share.vendia.net/). 

Where wholesale adoption of the idea isn’t (yet) possible, developers and companies and still benefit from the concept through incremental steps in various areas of application development. [Contact us](https://www.vendia.net/contact-us) and we’ll help you learn how to start applying a lean approach to your development today. 


### About the author

Dr. Tim Wagner, the “Father of Serverless,” is the inventor and leader responsible for bringing AWS Lambda to market. He has also been an operational leader for the largest US-regulated fleet of distributed ledgers while VP at Coinbase, where he oversaw billions in real-time transactions. Dr. Wagner co-founded Vendia with Shruthi Rao in 2020 and serves as its CEO and Chief Product Visionary. Vendia’s mission – to help organizations of all sizes easily share data and build applications that span companies, clouds, and geographies – is his passion, and he speaks and publishes frequently on topics ranging from serverless to distributed ledgers.

[linkedin.com/in/timawagner](https://www.linkedin.com/in/timawagner/)

t: @timallenwagner

[www.vendia.com/blog](https://www.vendia.net/blog)
