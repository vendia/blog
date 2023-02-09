---
draft: true
title: "Does your data build or break trust? "
description: Circles of Trust guest Joyce Clinton of MUFG Bank shares real talk
  on the challenges and opportunities her team of 26 has closing the books and
  transforming data.
date: 2023-02-09
authors:
  - Vendia
relatedPosts:
  - 2022-12-05-sharing-data-in-financial-services-how-top-financial-institutions-improve-offerings-servicing-and-operations-with-controlled-multi-party-data-sharing
  - 2021-02-01-decentralization
  - 2021-09-01-sharing-data-with-fine-grained-control
tags:
  - closing the books
  - podcast
  - Circles of Trust
  - reconciliation
  - data transformation
  - MUFG
  - financial services
  - Joyce Clinton
  - Francine Klein
  - Tim Zonca
thumbnail: https://res.cloudinary.com/vendia/image/upload/f_auto,q_90/v1670278509/COT_d1fwyl.webp
seo:
  noindex: false
  title: Does your data build or break trust?
  description: Circles of Trust guest Joyce Clinton of MUFG Bank shares real talk
    on the challenges and opportunities her team of 26 has closing the books and
    transforming data.
  keywords: closing the books with automatic reconciliation
sidebarCta:
  - Join the Founders' Circle
createdBy: ""
createdAt: ""
updatedBy: alexa-vendia
updatedAt: 2023-02-09T21:52:30.411Z
id: 8f8485c0-c78b-43d6-a4f2-ee50dadc7fb2
---

\[VIDEO EMBED]

**Listen on SPOTIFY | APPLE | GOOGLE**

**Guest:** Joyce Clinton, Head of Management Reporting Systems and Operations Americas, MUFG Bank

**About the episode:** Joyce Clinton, CPA and Head of Management Reporting Systems and Operations, Americas at MUFG Bank shares real talk on the challenges and opportunities her team of 26 people have in closing the books and transforming data. Learn about the team’s structure and their path to ensuring the numbers land for all aspects of management and SEC reporting, plus budgeting and forecasting in this episode with Vendia’s Francine Klein and Tim Zonca. 

### Show Notes

- [Joyce Clinton](https://www.linkedin.com/in/joyce-clinton-cpa-4696a75/), CPA at [MUFG](https://www.mufgamericas.com/) 
- [Francine Klein](https://www.linkedin.com/in/francine-klein-31a99834/) at [Vendia](https://www.vendia.com/)
- [U.S. Securities and Exchange Commission](https://www.sec.gov/) (SEC)
- [SEC Form 10-K](https://www.sec.gov/files/form10-k.pdf)
- [SEC Form 10-Q](https://www.sec.gov/files/form10-q.pdf)
- [Funds transfer pricing (FTP)](https://www.investopedia.com/terms/f/ftp.asp#:~:text=Funds%20transfer%20pricing%20(FTP)%20is,the%20firm%20within%20the%20institution.)
- [Sarbanes-Oxley Act (SOX)](https://www.congress.gov/bill/107th-congress/house-bill/3763)

### Transcript

**Tim Zonca**  

Greetings from the team at Vendia, and welcome to Circles of Trust. It's a podcast for leaders across all industries committed to speeding up innovation at scale. I'm your host, Tim Zonca. 

And I'm really excited to dive into a conversation with Joyce Clinton, Head of Management Reporting Systems and Operations for Union Bank, and Francine Klein, a Senior Solutions Architect here at Vendia. In this episode, we're going to get a behind-the-scenes view on "closing the books" and the processes set up for reconciling data as it comes in from multiple sources. 

So, let's jump in! Welcome to both of you. It's great to have you on the show.

**Joyce Clinton**

Thank you — excited to be here.

**Francine Klein**

Thanks for having me. 

**Tim Zonca**

So, Joyce, I'd love to have you start. Can you tell us about your role at Union Union Bank?

**Joyce Clinton** 

Sure. In my role, I'm responsible for closing the managerial books, which are used for all aspects of management reporting. It's to ensure the data, financial data, lands timely and accurately in the various tool sets that we use. The managerial data is used for business performance reporting, SEC \[or Security and Exchange Commission] reporting, as well as for the budget and the forecast. So, it's used by many different stakeholders.

**Tim Zonca**

And I forgot to ask when we first talked, do you report up through the CFO? Or what organization are you part of, then?

**Joyce Clinton**

Yes, yes, through the CFO organization.

**Tim Zonca**

Okay. Great. Thanks. Well, welcome. Yeah, it's awesome to have you. And then Francine, can you also…I know you've been a guest before, but can you reintroduce yourself for those who didn't listen to your former appearance? And tell us what you do here at Vendia.

**Francine Klein**

Yeah, absolutely. So I'm on the Solutions Architecture and Client Success team here at Vendia. My role is to work with customers to bring their solutions to life on the platform — from onboarding to best practices to discussing the art of the possible and how to think of the new world of data. And then prior to Vendia, my career has been in the data space, developing dashboards, building warehouses, technical strategy, and ultimately leading teams. And I jumped over here to a product that I believe in.

**Tim Zonca**

Great, well, welcome. It's great to have you again, too. Joyce, I'd love to start with you and have you describe the process of closing the books. As someone who doesn't have a finance or accounting background, I'm always really appreciative of those sorts of folks because there seems to be this mythical, like, you know, "We're busy! We're either closing the books, or we're going through an audit or whatever it is." And to me, it has this, like, mystical, magical \[quality]. You know, \[it's] the thing that people do over there. 

But, tell us, especially for someone like me, what does it mean to "close the books?" What's that process look like? And also, I'd love to have you touch on why does it matter? Why is it important to the business?

**Joyce Clinton**

Yeah, I'll start with that. Why it's important is the data that we deliver in our close is, as I mentioned earlier, used for all aspects of management reporting. So, you've got your general ledger that delivers your statutory data, if you will. But it doesn't tell you anything about business performance. And what my team does, and what I'm responsible for, is taking that statutory data and transforming it into a business performance view. And it's absolutely critical because it is the source of record for the Board report, for the segment footnote in SEC 10-K and \[10]-Q for all of the budgeting and forecasting, and strategically where our financials are heading in the near future. Well, in the future, and then a few years out.

What's unique about our process, I believe, is that it's highly manual. And it's highly manual due to the lack of data that we can gather at the source. So, instead of having a straight-through where the data comes from the system of record straight to a management reporting tool, it hops several times before it lands with my team to make sure that it's complete and accurate. 

And we spend a lot of time, you know, wrangling the data, remediating data that comes into us wrong. Validating data, for example, we push through — in addition to hundreds of data processing routines — we push through 175 manual data loads. And that means we have to go source from 175 different unique sets of data, transform it so that it will be accepted by our measurement reporting tools, and then make sure it lands correctly. If it doesn't land correctly, we lose credibility. And it's a long road to get that credibility back.

**Tim Zonca**

Can you give an example of...go ahead, Francine.

**Francine Klein**

Joyce, you just gave me some flashbacks. But when we were doing that, I remember, we were trying to reconcile all these things. You said, "You lose trust." And we put the data together, right? But all this time, we came out with a number, and some other team did their own for theirs. And they're like, "Well, our number is different." And so, then, we basically had to do it all again just to find \[out] why. Finding why the variance was there is almost even harder than doing it the first time — you know, all the different stops and starts. It's not just the reconciling. It's also finding why your version is different than someone else's.

**Joyce Clinton** 

Yeah, that's an absolutely great point. If people lose faith in your data, then, to your point, Francine, they're going to create it on their own. They're going to start their own process. And, inevitably, because it's such a complex process, they're going to miss stuff. And so they're going to go to their leadership and say, "This is what we delivered" — which could be higher or lower than the truth. And we spend time, and it's our team...because it's automatically assumed that the management reporting team is wrong. And we know we're not, but we have to spend time and reconcile and in, you know, PowerPoint slides, be able to defend that they're not using the right and the "golden" source of truth. And I do think, sometimes, that folks don't like the result in the golden record of truth.

**Francine Klein**

Mhmm.

**Joyce Clinton**

So if you don't have a, you know, a reliable system as your anchor, it's really easy to go in and say, "Hey, I don't know what their numbers are, but this is what we're really doing." 

And with folks, you know, compensated based on performance data, that's another thing it's used for. It's critical that it's the right data.

**Francine Klein**

Oh, yeah.

**Tim Zonca**

You mentioned, like, 175 different facets to it. What are some of the sources? Is it 175 sources? Or are there fewer than that, but then there are different processes? Describe where's all this data coming from. What are some of these main places?

**Joyce Clinton**

Sure. So in banking, which is where my experience is, there's a concept called "funds-transfer pricing." And what that really is…when a bank loans money, they need to pay for that funding of the loan, just like you and I would pay interest to go get a car loan. And then, on the other side, the deposits generate funding at a very low cost. And so what we have to do is transfer-price the loans and give credit to the deposit. 

And our system, unfortunately...there's a lot of patches in that funds-transfer pricing routine, such that we have to load rates. We have to kick off the routines. We have to load balances that, if we don't do it right, are ripe for errors because it's a pretty significant portion of management reporting in a bank for a business unit. So that's an example of what we do in one of those 175 data loads. 

And another example is our cost allocation data. It's just taking your cost of doing business and allocating it to the various business lines so that they can bear the entire cost of delivering their products and services. And that, too, is not automated. So we have to take that data in, process it reconcile it, make sure it zeros out. So those are two examples of the 175 that we do.

**Tim Zonca**

Great, thanks. And what about, you know...when we spoke last, you were talking about the importance of data cleanliness and completeness. And you've started to tease out some of these layers in between when the data is produced and then the consumption. Are those layers between the production of the data and then who consumes it...does it span multiple groups? Can you talk more about that? There seems to be a whole universe of complexity.

**Joyce Clinton**

Yeah, it does. So typically, the data starts at the system of record. So think of a deposit system. And it just hops through various systems in the bank, various warehouses for use in different aspects of analysis or reporting.

And so, it's challenging to get that data in and make sure that it's complete. And by making sure it's complete, you've got to go back to, you know, the various systems of record and make sure that it's the same set of data being defined the same way across the enterprise. And so that's the challenge with the various layers.

**Francine Klein**

Do you have that issue? Because we had this. All the hops and jumps, right? So say someone's generating information when you take out a loan, and you have that versus the deposits. Not only are those two systems different, connecting the fact that they're there and then the hops they go through for some latest information. 

Like a balance is managed by one team. And then, the next one, which pulls different information, right, and might batch it overnight, is managed by another team. And then it goes over here, and that bounces it off some internal ID to find some internal risk indicator or categorization, which is owned by another team. 

And so not only is it 175 systems, but it's like each system manages different parts of it and \[each system is managed] by different teams, and then how frequently are they loading? What kind of quality checks? Do they look at error? 

It almost felt like a problem where it got so hairy that you'd be like, "Oh, screw it!" But, like, you can't, right? You're a bank. And you can't say no, but..."

**Tim Zonca**

Both of you have used examples...you know, Francine, you talk about, you get to this point, and then you batch upload or batch process something. And then Joyce, you've mentioned things like, "Well, hey, all of these are, you know, these parts of the process are manual." And then you said, "At then, at this point, we kick off a routine." 

Can one of you paint a picture? It sounds like it's super lumpy. Like, some of the stuff is automated. Some of the stuff, I assume, is like an integration, and it's hands-off from a human perspective. Some of it's extremely manual. 

Can you paint a picture of all those different variants with examples of, like, here's where it's super manual, here's where it's automated, but it still takes so long? I'd love to hear more about that.

**Francine Klein**

\[to Tim] I've never heard the word lumpy to describe data, but I love it. Yeah, it gives a 3D physical nature to it. 

\[to Joyce] You could probably give more information in the banking space and the different scenarios in which you see it, but the application that…personal bankers interface with is one system that tries and might load information in a specific way so that they have a fast experience. 

But then right after that, the team right after, like one level deep, might not need it right away. Right? It's slow. It's expensive. The systems that do so might be mainframe, so they have to do something maybe overnight because it's too hard to make it real-time. And maybe they're just doing a risk indicator to make sure our balance stays at a certain percentage.

And then the next team lower might be doing something else that aggregates it and says, "Oh, well, all these personal bankers do this, and all these business bankers do this." 

And so, each team has different types of needs and then has a different dependency on the one above it. And, to date, rate systems haven't existed that actually make data flow back and forth. You have to use another tool that sends it from one tool to the next, and so you have an integration tool that might do one type of thing, like buy 100,000 records. We might have one that stays only on at night because it's too labor-intensive. 

And so, every n-level of depth adds not only delay but changes that you don't have control on.

**Tim Zonca**

Yeah. Joyce, I'd be so interested to hear from where the information is generated. What are all the hops that something has to go through before you even know what's going on?

**Joyce Clinton**

Yeah, that's a great question. I think that the reason it goes through so many hops is the various uses of the data. For example, I want to model what my deposits are going to look like, based on these parameters for X years, as opposed to what's my cost of funds on delivering my product. What is my real estate footprint from my branches?

So it's all these different uses for the data that complicate how it's delivered and how it's used. And it's really hard. If you think about it, a bank's asset, if you will, is its data: You deposit cash, and you pay your bills and what have you, your mortgage. But it's really the throughput of all of that, all of those transactions, that make a bank complex, in my point of view. And so, it's challenging to make sure that that data...you should use it one time all the way through.

**Francine Klein** 

Yep.

**Joyce Clinton**  

You should never have data that can be manipulated or tweaked for another source. It's one system of record, one source of truth. And there are opportunities…if I want my report to look a different way, if I want my performance to look a different way, you can define the data yourself. But it always gets reconciled back to the golden source of truth. Did I answer your question?

**Francine Klein**

Oh, yeah! ...Even when you have a golden source of truth for, say, an asset, I imagine, there's supplemental information that you have to add in from other systems. And so, even knowing that you're talking about the same asset to reconcile, it's not just cleaning from the hops and starts..."Oh, I need this information. I have to supplement..." Yeah, as granular as you have an asset ID here, how do you know that that information is for that asset? Is it a name match? 

**Joyce Clinton**

Yeah.

**Francine Klein**

The reconciling became...

**Joyce Clinton**

Yeah.

**Francine Klein** 

...you know, you had rules and matching?

**Joyce Clinton**

Yeah, that's a huge part of what we do. I have 20 folks who are offshore, so the cost per person is lower than if they were onshore. But their job is to make sure that data is complete, that it's clean, that it lands where it's supposed to land, and then validate that it did before it pushes out and it's used for any of the management reporting. Because, I mean, it's easy to pull in your own data if you have that ability. And with the data coming in from different sources, the benefit of ours is that we capture it in one system of record. But still, people will try and use data in a way that it's not intended to be used.

**Tim Zonca**

And you mentioned, you know, 20 people offshore. Can you talk a little bit more about your team? Are they all offshore? You have a mix; what are they? I'd love to know like not only the numbers of the groups but do you have them specialized in different parts of the process?

**Joyce Clinton**

Oh, absolutely. That's a great question. So, I leverage the offshore team, and \[the team’s] responsibility is to make sure that the data lands correctly in the management reporting system of record every month for close. We start on business day minus two, and we end on business day 11. And so it's a pretty long process when you're considering business days versus calendar days. 

And their job is to validate the data that lands systematically. So we have all kinds of sources of data coming into our management reporting system. Most of it is automated, but these 175 manual data loads (think of them as, as journal entries), they have to go out, capture the information, transform it in a way that the system will receive it, and then push it through for consumption by our lines of business. So, it's a lot of heavy lifting. I would say it's the dirty work because they have to make sure it's correct. You know, the minute something lands incorrectly, we lose credibility: "You don't know what you're doing, and your data is wrong." 

And you know, the easiest thing to go into a meeting when your numbers aren't landing where they should or heading for, you know, from a forecast perspective, where they should, is to blame the person providing the data. "Oh, that's not my data." And so it's really important that we get it right. And so we have, you know, we have recons from that team when the data is received. Then we have a maker and a checker that pushes it through the system. Then it comes out of this system, \[and] we make sure that that data processed correctly. And then we push it to the reporting system where it's aggregated into the reporting system, where it's used. So that's the offshore team. It's an operational production team.

The onshore team, which is about six folks onshore, their job is to face off with the business. And they know their business; they're each assigned a business. Consider them like a corporate finance CFO liaison. And so their job is to, you know, any issue remediation, any question resolution. They participate in business cases, so they understand how new data is introduced and what its intended use is for. And they can face off because that team is highly experienced and they understand the business. And so it's a nice break, where you've got this offshore team focused 100% on getting that data right. And then you've got the onshore team, which is focused on customer support.

**Francine Klein**

This is so funny because, having been in the data space as well, sometimes I forget to realize some of the roles that we all play. Right? So whenever someone thinks about data analysis and the people who play data analysis roles and business partners in that role, I know what they think. It's, "Oh, they're doing forecasting, and they're looking at the information and garnering insights and ideas." And you're saying, "Well, yeah, we want them to." But in order for them to do that, they've probably spent what, 60, 70, maybe 80% of their time just wrangling and cleaning the data \[and] asking the business, "Hey, is this value, right? Are you putting this information in?" before they can actually look at it to ask questions to say, "Where's our business going? What should we invest in?"

And the amount of time, people resources, coordination, project management, risk mitigation, and just trying to make sure that you have a clean thing to look at is...sometimes I forget how much time we spend doing that. And every now and then, I have this \[aha], like, "Oh, man, there's got to be a better way."

**Joyce Clinton**

It's a lot. Yeah, I mean, the best way is to get that data from the source straight through and landing in the management accounting system.

**Francine Klein**

Yup.

**Joyce Clinton** 

And I always say, if we had clean data, if we had accessible data, you wouldn't be my team. I really think my team is there because we don't have complete data — that straight through.

And I'm sure that's not an anomaly. There are other banks I've worked in, having been in financial services for decades, that have the same challenges. But you're right. It's an effort to make sure that that data is correct.

When I joined, I was more on the business side: \[I was] using the data rather than delivering the data. And I didn't understand all of the various degrees of reconciliation, and hop, and transformation that the data needed to go through to be able to be used. And when I joined, the data was not trusted because there were errors all the time. We didn't know when we closed the books/when the last entry went in. And, I mean, this data was used for the segment, but not for the 10- Ks and \[10-]Qs for management reporting, for all the business operating reviews, and it wasn't reliable.

And I think that's one reason that I was fortunate to get the role. And it just took a lot of grinding, and effort, and roll-up-your-sleeves, and doing the dirty work to make sure that that data moves correctly. And many times, the data breaks from the source to a warehouse. 

**Francine Klein**

Oh yeah.

**Joyce Clinton** 

And we have to go figure that out. We're not experts, but we know enough about the data lineage to figure out why it broke. And to do it right, it looks like it's easy, but getting it right is huge. Huge.

**Francine Klein** 

And people are like, "Oh, I just enter it, and it shows up." It's funny. There's something that you had mentioned that I always overlook, \[and it] is the same information that you need to close the books. We know how complex that is, from a business rule perspective and a logic. It's also the same information that makes you compliant. And the risk of not being compliant because of your data is terrifying — to say, "I actually am blind to what's happening" — let alone closing the books...from a legal perspective, I think \[it] is so often overlooked and only answered after someone's hand gets slapped.

**Joyce Clinton**  

Oh, absolutely. Our process is SOX; we have to be SOX-compliant (Sarbanes-Oxley), which is unique. And it's because we have customer data in one of our tool sets. So we have to, every quarter, verify that the data is accurate, received timely, complete. And we're audited on that. So, it's really important that the data that we get and that we transform lands correctly.

**Tim Zonca**

Are those audits internal or external?

**Joyce Clinton**

The data is used for the segment footnote in the 10-Q and the 10-K, the quarterly and annual reporting to the SEC. So that is what makes our audit requirements even more complex and onerous compared to other systems.

**Tim Zonca**

Yeah.

**Francine Klein**  

In addition to reconciling and the team size to reconcile, do you have to build parallel systems for the mere purpose of traceability and auditability so that you can tell folks what you did?

**Joyce Clinton**

I do not do that. I don't know if that's good or bad. But I mean, we reconcile every step along the way to make sure that the data from the system of record comes in — and it's complete. And then as we process it through our system. We have a couple of systems that it processes through. The first system, it's complete every step along the way and then delivered to our business users, transformed for their use in management reporting.

**Tim Zonca**

Joyce, you mentioned business users/management reporting a handful of times now. You mentioned that your six onshore folks are plugged into the business. And so they're working with them? Can you talk more about that? What is the business's involvement? Is it all to help reconcile and help ensure the cleanliness and accuracy of the data? Or are they consuming any of the output of the reporting, as well?

**Joyce Clinton**

Their role is to consume the data and yell and scream when it's wrong. Whether or not it's something that my team may have done or the data was booked incorrectly at the stores, they know enough to know when the data doesn't look right. And they raise a red flag. And then my team has to go figure out what happened. If something happens. 

Sometimes it's just that's not how they expected the data to land. And that's the way it landed based on volumes and rates.

**Tim Zonca**

Interesting. You've described the process as it's been working recently. Are there any big rocks you want to move? \[What are you] hoping for when you think about the next 12 months around initiatives you have or your vision of what you'd like to see better?

**Joyce Clinton**

Yeah, you know, I think having the onshore team that liaises with the business is a good use of time and resources. The offshore team that I have exists because the data isn't automated. So I would really hope that we invest in — and that's what we should do — is invest in automating that data at the source because it eliminates the probability or possibility of error throughout the various hops that that data takes.

You know, it goes through multiple warehouses before it comes to my system. And if something breaks — and it's very difficult to understand where it breaks — we have tens, hundreds of data sources coming in that are automated. And then you layer on this manual effort, and it just creates a lot of energy to reconcile data. I mean, it has to be complete, and it has to be accurate.

But I really think that it's a great investment in time, energy, and resources to automate your data anywhere you can. You know, if you're fighting for funding in project meetings, it's really easy to say, "Well, if I invest in this product, I can drive this much revenue." But if you invest in getting clean data, that pays back in multiple places — forever. As long as you deliver that data.

**Francine Klein**

Yup!

**Joyce Clinton**

And so, I think it's hard to compete with revenue-generating initiatives. But you know, it's like your house: if your pipes are broken, "Oh, it's a nice house, but I can't live in it." And so I really feel that there should be more of an investment in data.

**Francine Klein**

Oh my gosh, Joyce. That rings so true and dear to me. I thought back to Tim's analogy of the lumpiness of data...you mentioned data, where it goes from one source to a warehouse, and to your point about smoothing out the lumps because it's not just the visibility there, there's a tool that moves it. So if you're moving it from System A to System B, you don't just have to know why it broke in System B. You have to know what the tool is that moved it. And that probably doesn't have information. So the lumpiness is there. 

And it's really hard, to your point, to define the ROI on that. Because it's so indirect, right? The attribution, right? You'd rather change your marble countertop into something that's bright and light, as opposed to fixing the pipes that you don't see. Because, well, the water still comes in. You know, it might be a little dirty, but no one knows.

**Joyce Clinton**

Yeah. That's a great analogy. Yeah.

**Francine Klein**

And to your point, the amount of teams and the cost associated with not doing it is...you don't know until after the fact —not only the cost associated with it — but the opportunity cost. With more timely and more accurate information, what are the types of things that people would be empowered to do that you don't even know about?

**Joyce Clinton**

Right, right. An example, if I may: some years ago, we had a data, one of these manual data loads, which again, is because the data is not automated. And it broke. The whole system, it's the transformation of data from statutory to managerial; the system just broke. And the reason was \[that] coming in from one of the warehouses with an extra digit in the identifier. And we were calling Oracle and, you know, consulting firms trying to figure out what was wrong with it. 

And you know, if that data is incomplete in one little digit, it creates so much noise and, again, you lose credibility. And, I believe in that situation, that's the first time I ever met the CFO of the bank in person because no one could figure out what was wrong. There was a little teeny extra digit.

**Tim Zonca**

Wow. That's a powerful example. You mentioned just the idea of a bit of your more near-term vision. Talking about finding value in reducing, at least what I summarize as reducing the costs that are associated with just some of this data cleanliness, data integrity, which I love, I mean, it's both aspirational and very pragmatic and tangible. You can understand how to get there.

As we start to wrap up, one final question I have for you is more of the magic wand question. In addition to aspirational, anything else that may be even a little longer term, that's almost maybe a little more like, "Could we ever get there?" If you could unlock something around this data sharing and precision that you've been talking about with us, but especially for Union Bank, what sort of thing would it be?

**Joyce Clinton**

That's a great question. I think that we need to streamline how we capture the data. I believe that there are unnecessary steps that data travels through to get to land for its intended use. And that might be a little vague. But you know, it's deposits and loans and rates and payments and disbursements. But there's all this additive information that I think clogs the system and makes it challenging to consume that data for its real, intended use — which is "What's my net interest income on my business? What's the operating expense to deliver that business? And what overhead am I carrying? Because I'm a bank, and I have to perform these routines". So, yeah, I think it could be easier.

Less is more. And simplify the process. And I think the reason why it's aspirational is the cost. The cost. It's easy to envision, "I want to automate one of my data feeds from the source. Okay, we get 100 grand; we go and we figure out how to capture that so that you can take my team out of it." But to figure out all of those fields that, at some point, can break? Do you need all of them? I don't think so. So, I think you could streamline the data that is sent to systems for use.

**Tim Zonca**

That's great. Yeah.

**Francine Klein** 

What I heard, it's like, with data, it's created a lot of good, right, obviously, insights and...Yeah, sorry, you go, you go.

**Joyce Clinton**

I see it as like making a cake and frosting the cake. You know, my grandson takes up that little tube, and he just goes all over the place when all you needed to do was put a flower on the cake. And so I think it's a lot. My motto has always been less is more. 

And, you know, schmoozing me with data that is not important isn't going to hide the fact that the basic fundamentals of your business aren't performing. And that's what I think a lot of the data that we capture does. And it's so expensive to maintain, you know, audited by all kinds of regulators. And then there's a cost of ownership of that…It's like, "Oh, phew. I'm done with that audit. Oh, phew. I'm done with the quarter. I don't need to worry about that anymore." Out of sight, out of mind.

**Tim Zonca**

For another half-quarter until it starts again.

**Joyce Clinton**

Yeah, yeah. Or my team that, you know, 15 days from when we booked the last entry.

**Tim Zonca**

Yeah. Well, thank you. This was fantastic. I've been really excited to get back together with you and chat through this stuff, Joyce. And Francine, it's always fantastic to have you share your experience both not only at Vendia and with our customers but your rich data history as well. 



## Get Circles of Trust in your inbox

Join the [Circles of Trust community](https://www.vendia.net/resources/circles-of-trust) to get real talk or real-time data sharing right in [your inbox](https://www.vendia.net/resources/circles-of-trust). Or subscribe now on [Spotify](https://open.spotify.com/show/49kZwowJkYxjceHIax2zxK), [Apple](https://podcasts.apple.com/us/podcast/circles-of-trust/id1645908970), or [Google](https://podcasts.google.com/feed/aHR0cHM6Ly9mYXN0Lndpc3RpYS5jb20vY2hhbm5lbHMvYWw5cWQ4MTdkcS9yc3M/episode/NzQzNGZjNmItYmFjNC00MmNmLWIxNDctY2E0ZGJiNTE0Njhh?sa=X&ved=0CAgQuIEEahcKEwjYxcrM_rr6AhUAAAAAHQAAAAAQLA) Podcasts.