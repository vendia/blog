---
title: 'Q+A: How serverless and cloud enable scalable blockchains'
description: 'Get key takeaways from our webcast featuring AWS Serverless Hero Dr. Peter Sbarski’s interviewing Dr. Tim Wagner, Vendia’s co-founder and the inventor of Serverless and AWS Lambda'
date: '2022-08-03'
categories:
- company
- product
authors:
  - Anders Maul
---
Dr. Peter Sbarski, AWS Serverless Hero, interviews our own [Dr. Tim Wagner](https://www.vendia.com/blog/author/tim-wagner), Vendia co-founder and the inventor of serverless and AWS Lambda in this webcast, “Build an enterprise-grade blockchain: How serverless and cloud enable scalable blockchains.” They chat about everything from how Lambda was invented to how serverless and blockchain can be combined and deployed effectively.

Watch the full webcast [here](https://8766854.fs1.hubspotusercontent-na1.net/hubfs/8766854/Videos/Webcasts/How%20to%20build%20an%20enterprise%20blockchain.mp4) (run time: 59:25) or scan a few highlights from their conversation:



### On AWS Lambda

**Peter: How did you invent Lambda?**

_Tim: When we started, we never imagined what the project turned out to be. In fact, as we started with talking to customers and gathering their feedback, it was interesting because all our customers wanted to do something, but not the same thing. But, there was one thing they had in common: They all said they didn’t want to have to manage a server._ 

_But, the idea of a new flavor of compute was not immediately embraced as a great thing. Not even internally at AWS._ _At the time, at technical level, the principles and practice behind building Lambda were a novelty. Now, it’s not surprising that AWS services are built out of other AWS services. It wasn’t like that in those days. Everything was built on its own “iron.” Lambda was the first time the company bootstrapped one service on top of another. _

**Peter: When did you know you had something revolutionary?**

_Tim: There were a few interesting landmarks. For example, when we launched Lambda at AWS re:Invent, our breakout session was quickly filled. We had to do a second breakout session, and that was also full with standing room only._

_As another example, the first time we successfully ran a massive flash sale, a CTO called me and said it was life-changing for them. He said, “We went from no capacity to +1 million customers purchasing things back down to nothing in five minutes.”_


### On serverless and blockchain

**Peter: Why are people so crazy about blockchain?**

_Tim: When we’re talking about [blockchain](https://www.vendia.com/use-cases/next-gen-blockchain) at Vendia, we’re thinking about distributed ledger technology. It’s not a conversation about cryptocurrency or how to buy sketchy stuff on the dark web. Our focus is on enterprise-grade solutions and cloud services._

_When I went to VP of Coinbase, I was really excited about distributed ledgers as technology that can stitch together the content of other people’s database, taking your own data and making it consistent with somebody else’s. We’ve been struggling to do that with APIs and various infrastructure for years, so that was the dream. In reality Ethereum can only do 14 transactions/second on a good day with up to 15 minutes settle time, and it might cost you up to $5 per transaction. Compare that to Amazon DynamoDB, which enables up to 150 million transactions per second per user, takes 15 milliseconds to settle, and costs 1/1000 of a penny per transaction._

_What I realized was broken about first generation blockchain was that it’s simple, single machine deployments built on Peer-to-peer (p2p) networks were holding it back from enterprise deployment._

**Peter: Where does this kind of problem come up in the real world?**

_Tim: Think about when you buy a cup of coffee. Maybe you preorder from a Starbucks app or you walk in and order in person. You pull your phone out or tap your watch to pay. In a breath, less time than it takes to happily sip your coffee, at least a handful of companies on different hardware, across regions and clouds are trying to share data in real time._



* _My bank_
* _My credit card company_
* _The Android service that keeps that card backed up_
* _The Square device that read my card and processes the payment_
* _The coffee shop, which may or may not be the entity collecting the dollars at the end of the day_

_All of those different parties running on different hardware, systems, in clouds, regions have to share data and agree on the what, how, how much, when, and who of it all. And the only reason that works, the reason we can shop that way and businesses can transact that way is because those companies have spent hundreds of billions of dollars over the last few decades to make it happen. The effort behind those solutions are not easily replicated._

_But what if it was? What if any of us could accomplish that kind of data sharing and make it as easy as creating a database table today in the cloud or a single API without having to write any code, manage a database or a server._

_And that’s the idea behind [Vendia](https://vendia.com/product)._

**Peter: How are you really trying to get serverless and blockchain to play together nicely?**

_Tim: The idea of making data sharing easier is powerful and resonates across industries. But, it’s hard to implement today, which makes it a great innovation opportunity. As Amazon has reported, 80% of data is out of reach, stuck in different systems, departments, regions, companies, and clouds. And the more data, the more parties, the more time…the harder it is to solve this problem._

_Serverless was all about democratizing access to the cloud. It was meant to give everyone the ability to build scalable, fault-tolerant, cost-effective application without having to have a PhD in distributed systems._

_And despite first generation blockchain’s weaknesses (lack of data modeling, low throughput, high latency, single machine architecture), there was still an opportunity to reimagine it so we could implement it like cloud services. Meanwhile, we could overcome the weaknesses of cloud services with blockchain—especially the distributed ledgers—offering a multi-cloud, multi-party, multi-region approach to data sharing where you could still control what data is shared, in what circumstances, when and with whom._


### On Vendia and it’s use cases

**Peter: What are the use cases for the technology?**

_Tim: If you have sensitive, operational data that needs to be shared in real-time, but governed by access control, and it needs to be shared across some kind of boundary (applications, clouds, organizations, compliance needs), [Vendia’s tech](https://vendia.com/product) is for you._

_We’ve got a ton of use cases and customer stories across industries, but let me share this one in manufacturing and supply chain courtesy of our customer, [BMW](https://vendia.com/case-studies/bmw). With our technology, BMW can make real-time decisions and have data transparency, thus empowering them to catch defects or supply chain issues so they can ship cars faster with lower cost of goods sold (COGS). We launched their new tracking app across four supply chain partners in six weeks with 50% of an engineer’s time. With the proof of value, they asked us to extend the app to include additional workflows for paint finishing, and we did it in three weeks._

**Peter: As a solo developer, can I use Vendia Share? How will it help me?**

_Tim: Almost all of us have created APIs. Even if we don’t think we have to solve for multi-party data sharing, we still have to solve dating sharing challenges across APIs. This is a really nice way to [evolve your data model](https://www.vendia.com/docs/share), make it multi-region fault tolerant or add other partners. Use Vendia Share to broaden your solution over time as your application grows in complexity and maybe in ways you didn’t initially predict._


# Get all the takeaways

Thanks so much to Dr. Peter Sbarski for hosting the discussion on how serverless and cloud enable scalable blockchains! 

Listen in on the entire conversation, and get more great information on in [the full webcast](https://8766854.fs1.hubspotusercontent-na1.net/hubfs/8766854/Videos/Webcasts/How%20to%20build%20an%20enterprise%20blockchain.mp4).
