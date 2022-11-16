---
draft: false
slug: podcast-patient-experience-with-teeth
title: "Patient experience with teeth: How the world’s leading dental laboratory
  uses data sharing to improve healthcare"
description: Robert Edwards, Director of Software Development at Glidewell
  Laboratories, talks about the challenges and pending promise of real-time data
  sharing across the medical device value chain.
date: 2022-11-16
authors:
  - Alexa Johnson
categories:
  - podcast
relatedPosts:
  - 2022-11-02-podcast-worlds-colliding
  - 2022-10-01-podcast-great-equalizer
thumbnail: https://embed-ssl.wistia.com/deliveries/b5e5ebdbad5a2ed6b0b8cc7eba03abdd.jpg?image_crop_resized=960x960
tweet: Check out the latest episode of Circles of Trust
seo:
  title: "Patient experience with teeth: How the world’s leading dental laboratory
    uses data sharing to improve healthcare"
  description: Robert Edwards, Director of Software Development at Glidewell
    Laboratories, talks about the challenges and pending promise of real-time
    data sharing across the medical device value chain.
  keywords: circles of trust
updatedBy: Caroll Casbeer
updatedAt: 2022-11-16T18:47:39.994Z
---

**Listen on [SPOTIFY](https://open.spotify.com/show/49kZwowJkYxjceHIax2zxK) | [APPLE](https://podcasts.apple.com/us/podcast/circles-of-trust/id1645908970) | [GOOGLE](https://podcasts.google.com/feed/aHR0cHM6Ly9mYXN0Lndpc3RpYS5jb20vY2hhbm5lbHMvYWw5cWQ4MTdkcS9yc3M/episode/NzQzNGZjNmItYmFjNC00MmNmLWIxNDctY2E0ZGJiNTE0Njhh?sa=X&ved=0CAgQuIEEahcKEwjYxcrM_rr6AhUAAAAAHQAAAAAQLA)**

**Guest:** [Robert Edwards](https://www.linkedin.com/in/bobbyedwards/), Director of Software Development, Glidewell Laboratories

In this episode, Robert Edwards talks with host Tim Zonca about data sharing across the medical device value chain. They explore the complex challenges of an industry in technological transition and the promise for better patient experiences through multi-party, real-time data sharing. BONUS: They also touch on data sharing innovation opportunities in the digital event space, a side project Edwards founded in response to the rise in online events during the COVID-19 pandemic.

### Show Notes

- [Robert Edwards](https://www.linkedin.com/in/bobbyedwards/) on LinkedIn
- [Glidewell](https://glidewelldental.com/) 
- [Microsoft Dynamics 365](https://dynamics.microsoft.com/en-us/)
- [Workday](https://www.workday.com/)
- [Swagger](https://swagger.io/)
- [Airtable](https://www.airtable.com/home/built-for-you)
- [Dentrix](https://www.dentrix.com/)
- [LiveEvent](https://liveevent.space/) 

### Transcript

**Tim Zonca  0:03**  

Greetings from the team at Vendia. And welcome to Circles of Trust, the podcast for leaders across all industries committed to speeding up innovation at scale and making a profound, positive impact on business and the world. I'm your host, Tim Zonca. We're about to dive into a conversation with longtime leader and expert in the dental laboratory and manufacturing space, Robert Edwards. He's the Director of Application Development and System Architecture at Glidewell. In this episode, we're going to talk about data sharing across the medical device value chain. So, we'll explore challenges and the impact that better data sharing has on patients now, as well as the promise for better patient experiences in the future. So let's jump in. Robert, it's great to have you on the show.

**Robert Edwards  0:45**

Thank you, great to be here. I like that introduction.

**Tim Zonca  0:49**

So you know, tell us a little bit about your background, and then tell us a little bit about Glidewell and what Glidewell is up to.

**Robert Edwards  0:59** 

Well, I've been a software engineer now for, gosh, over 20 years. \[I] got into it kind of by accident. I thought I was going to be the next great writer; that didn't work out. But I could fix computers, do little things here and there, and it was just a lot more interesting than writing. And so I just started my journey. Back then the best you could do is buy a lot of books. So I bought a lot of books, dove in,  \[jokingly] and then told some lies in some interviews, and worked like crazy. And so here I am. I've been at Glidewell, now, for 13 years. And, you know, from Software Engineer to Lead to Manager and Director, what we do at Glidewell, it really does sound boring on the surface. You know, we're a dental laboratory, so we make teeth. But we do it just at a huge scale. So we probably do... what your average large dental lab will do in a week, we probably do in a day: We do that many units. And because of that, we just have a lot of data. And we were able to use that data to start to create the blocks that laboratories use to mill the parts. So we would sell to other laboratories; we were able to create machines, mills, ovens, things like that. And we sell those to a dentist, so they can do in-office milling. We have a pretty proficient machine learning discipline at Glidewell Laboratories. So, you know, we use data to automate a lot of tasks to do things that, consistently, that humans do inconsistently. Yeah. So you know, data is very important to us.

**Tim Zonca  2:47**  

So you mentioned a little bit like the dentist or dental offices. Can you go a little bit deeper into what are the different kinds of organizations that you work with? You already mentioned dentists, like dentists' offices. What's their profile typically look like? Like, I just have kind of my local dentists that I walk down the street \[to] in my head. But, is it someone like that? And then anyone else, like on the manufacturing side? What's the network look like?

**Robert Edwards  3:17**  

Our main customer is the dentist. And you know, dentists are typically still very small operations, like you identify. But there's a growing dental service organization, kind of a movement; t's kind of like the HMO for dentists. So, you know, when you go to dental school, you're really focused on patient care and the restorative side. What happens is when you graduate and you kind of branch out, you become a business owner. And so we try to do as much as we can there to help our dentists. But these dental service organizations come in, and they really try to run the business so you can focus on, you know, what your core competency is, so you don't really have to be a business owner anymore. And then there's just other types of vendors. So scan systems, you know, if you've been to your dentist — depending on whether he's old school or not — he puts some goop in your mouth and makes an impression, or he’s scanned your mouth and created a digital impression, basically. And so those scan systems sit between the lab and the dentist, and we work a lot with them. Device manufacturers: so, you know, we build our own mill, but we also purchase mills from other companies. And so we work a lot with vendors on that side, as well.

**Tim Zonca  4:43**  

And then what about I assume, even just some of the technology you talked about there could be really sophisticated. And so is that the role of the... a dentist, I don't think, has an IT staff. So what kind of challenges does that present as you provide a technology-based solution to people like that?

**Robert Edwards  5:09**  

It's huge because we'll get anything from the dentist... We send out these fancy RX's with little bubbles, you know, it's like a bubble form, so that you can give us the proper indications of what material you want. But we have the dentist that just, basically, just writes all over that, you know, ignores the form. And then we have the really sophisticated dentist that wants to do the scanning and the in-office milling. So, you know, it's been, typically, leading up to now, where you would make that appointment, they'd make the impression, and then you make a future appointment with, you know, like two weeks out. Now, what we're able to do is same day.

**Tim Zonca  5:47**  

Oh, wow.

**Robert Edwards  5:49**  

So they scan your mouth, you go run an errand, come back, and your tooth is milled and ready to be placed. So it's just a wide range. And then even among the dental service organizations, some are just much more sophisticated than others. I would liken it to the insurance industry. I don't know how it's evolved now, but I remember, back in the day, it was just very, very limited with technology. And, you know, you could make a lot of money with a fancy access database, you know. And so that's kind of where dentistry is, right now. You've got the very sophisticated, and you've got those that just don't have a need to be sophisticated. "Maybe I'm going to retire soon. I don't want to learn a bunch of new things, I don't need a lot of technology. I just need to get ready to sell my business."

**Tim Zonca  6:41**  

That makes sense. Now that you've painted a little bit of a picture on the network that, you know, information is being shared across, can you go into some more detail what types of data need to be shared from a dental office — regardless if it goes through one of those other servicing groups or not?

**Robert Edwards  7:06**  

Really, it's the the restorative information, the prescription. Surprisingly enough, we don't really need patient data. So we'll get patient names, but we don't even know if that's an identifier or the real patient name. We just need it to be a pointer to something. But really, it's the restorative data: What we're making. Customer data is a lot of data that we get, again, being the dentist. And that's largely it. But we just get that data in very different formats. And that becomes the challenge of it all.

**Tim Zonca  7:47**  

Yeah, go deeper there. What kinds of formats...?

**Robert Edwards  7:51**  

A piece of paper coming through the door. A zip file with some XML data and some 3D data in it. HTML data. Web hooks where we have to integrate and pull data in a very specific format from a vendor. And so there's just no consistency in that way.

**Tim Zonca  8:16**  

Is that part of, you know, we touched on this when you and I were talking in a different context. Is that part of what Glidewell... what's Glidewell's roll in that? Are you normalizing that? Are you making the data sharing, you know, easier across these parties?

**Robert Edwards  8:30**  

No, we're normalizing it for our own purposes. Okay, but we're not yet really normalizing it for you to pass on to someone else. Our CTO started that effort, maybe like eight years ago or so. And it's very difficult because, you know, again, as I'm saying... there's just so many types, different levels of competency across this industry, that it's difficult to not only come up with, like a standard schema. But just a standard transportation node. You know, all of that became very difficult. And it may, looking back, it may be easier now, so that effort may get started up again. But there's just a lot of challenges to it. Everybody wants you to access their data their way, and they want to access your data their way, and that's what makes it difficult.

**Tim Zonca  9:25**  

And then what in, you know, kind of proxy of your team, what have you done to kind of make that easier to help satisfy that request?

**Robert Edwards  9:38**  

So something that we're working on is our own integration platform.  Glidewell, again, is huge. So we bring on things like Microsoft Dynamics 365, Workday, you know, as third-party SaaS software. We integrate with scanning systems. We build our own systems, like I said, so we have our own — even CAD — software that we use. And so with all of that, there's similar data — whether it be financial, whether it be customer data, whether it be the restorative data that needs to be exchanged — just within Glidewell. We pay our technicians on piece rate. So, even that data, you know, coming from a lab system, and then going into Workday, and then going into Dynamics, you know, that needs to be consistent. So what we do is that integration layer where, when we bring on Dynamics, they need to conform to our contract, basically. \[There's a] similar contract with Workday, you know. Our CRM system, same thing. And our TURTLE system, so that we are not — and this is a problem, not only in our industry, but across, I know, Microsoft tried to solve it with their common data model, and And I'm not sure where they're where that is right now —but people call the same thing, different things. There's different terminology, even internal software groups: It’s account, or it's the dentist, or it's a doctor, or, you know, we're all talking about the same thing. And so, what we want to do, just for our own sanity, is have these gateways that normalize that when sending data across to different systems.

**Tim Zonca  11:26**  

And it sounds like mostly systems for driving, then, internal efficiency?

**Robert Edwards  11:33**  

Yes, right now it is. You know, it's at that stage where you have to prove it out, and you have to iron out all the kinks. 

**Tim Zonca  11:41**  

Yeah.

**Robert Edwards  11:41**  

And then you get to a point where you start to approach maybe a DSO that wants to send some data, or they want to pull some data. And then we tell them, "Hey, look, we have this easy-to-use gateway for you. Everything's all set up." You've got your Swagger dots. You've got whatever you need to make it easy development. There's not some integration kickoff meeting, nothing like that. Yeah, we want to get to that point, where, you know, someone, a company decides they want to integrate with us, and maybe they don't even need to call us. Maybe it's just kind of a digital interaction, and they're ready to go. At some point, and once they've proven some things, we give them the green light to exchange data with us in production. So yeah, you know, we want to get to that point. It's kind of like, you know, going back to that movement my CTO started years ago... maybe the way to do it is to properly incentivize them if they want to work with us. And you know, as Glidewell just grows, we have that gravity that pulls in different organizations to want to integrate with us for whatever reason, they'll now conform to this. And then they'll pass that on to the partners that they work with.

**Tim Zonca  12:57**  

I wanted to touch on, you had mentioned something just before that very last point around if someone wants to integrate and leverage what you're working on to do so in what I interpreted as, like, a bit of a hands off way. And my experience is, you know, the easier it is for someone to do something like that, there's usually a really gnarly mess of stuff under the covers that someone, you know, probably like you or your team has kind of figured out and fixed. So what are some of those complexities? I don't know, if it's like logistics or privacy or whatever — the things that people don't think about that, you know, you and your team are just steeped in to to make an experience like that possible at some point?

**Robert Edwards  13:42**  

Well, I mean, kind of going back, you know, everyone calls, you know, they want to call something something different, and there's different protocols that they want to use. And then there's just the maintenance of stuff, right? So if someone changes their API, changes a schema and something breaks, now, you know, there's a rush to run and fix that, or maybe even worse, it's, it's not used very often, and so then there is no rush to run and fix it. And then, you know, making sure that data is easily accessible to our internal users because, if it's not, I don't know at every place, but at Glidewell, they're very industrious. Maybe they start to collect their own data, you know, they'll put it into access, or they'll put it into Airtable or, you know, wherever. And so now we have, you know, what's the truth, even down to a dentist address, maybe where we're stale. And that Airtable database is, you know, is that source of truth now. So really governing all of that and making it so, again, going back to everything being easy — it's got to be easy for those who want to integrate with us. And it's got to be easy for internal people, who are consuming our data. You know, that's a lot of the challenge. But you know, in something like Dentrix 3 that's evolved over such a long period of time, you know, just the names of materials and keeping things in sync with other organizations... because things go out of sync very quickly. And what's that mechanism? What's that trigger point? We bring on a new product; this is the base material. This is, basically, the bomb. You know, how do we keep that in sync? We update some material for something. How do we keep that in sync with not only third parties, but even internally? So there's just a lot of challenge around that. And just interpreting what a 70-year old dentist who insists, it's kind of like, you know, my grandma called a refrigerator or Frigidaire... people have this terminology locked into their heads. "No, Grandma. It's not a Frigidaire; it's a Samsung." ...And so, just making sense of that, trying to get some consistency, both internally and externally, those are our biggest challenges. We don't really have a lot of challenges around again, I would say patient information and locking that down because we really have that first name, last name, maybe or some identifier. I think that's, well, in going back to, you know, what you're talking about before, the different, I guess, entities involved. When you think about it, you've got that patient management system that's in the dental office, that's basically their CRM system, right? And maybe it's accessible, maybe it's not, right? The information that's in there. So one of the challenges we have is, it would be great to be able to know what's coming into us quickly. Because if it's a scan system, we know; if it's mailed to us, we don't really know. And \[to] be able to let the dentists know, in their system, what's going back out to them and when, because that helps with when they need to schedule you. Or, like, if it's going to be two weeks out, if we have a delay, we need an easy way to let them know that. But because there's different types of systems used (some are sophisticated, some are not) that's a difficulty. And then you have other systems that play a role like that scan system. So that patient management system, the scan system, those are two independent systems, and then Glidewell is a is a third, right? And data is going to flow through all of those, but not in an automated fashion and more of a manual fashion. And so that brings up other challenges, especially, you know, I'm going back to my machine learning team, for them to be able to help the dentists have one of the goals of Glidewell... it makes it very complex there, too.

**Tim Zonca  17:56**  

Can you talk a little bit more about what I would call, like, the data modeling challenge that you talked about just a moment ago? And you know, even kind of jokingly talking about your grandmother talking about a Frigidaire versus just a general refrigerator or certain sort of brand? What does that process look like for, you know, either you or your team? Or Glidewell? How much of that data modeling are you doing internally? And then vetting with some of the people you're sharing with externally versus collecting their feedback more...what's that process for landing on a common, shared data model?

**Robert Edwards  18:37**  

It's highly iterative. So because there's different groups in Glidewell, we have CAD groups; we have internal software developers; we have publicly facing components. Just there, you know, the CAD team has one way of talking about a restoration; the internal teams creating the lab management systems, they have another way. So getting together and trying to identify, "Okay, you call this a product" or "We call this a product, you call it a material." Because in that CAD system, it's just a material; they don't really think about it as products. How can we, you know, model this so that you only take what you need to understand? But yet, we have this larger schema that makes sense to everyone. And then, after that, it's going to business users because a lot of that schema gets reflected in the things that they need to interface with, right? And so if we start calling something one way, and on the Lab Floor, they really think about it and internalize it a different way, it causes these subtle problems in how the software is used, you know? Things you wouldn't even think about. And so getting that alignment— and that's an ongoing challenge — that's not something that's really, ultimately been solved. And we're working on it now. That's just one of the challenges. And then now you start to go to, let's say the scan system vendor that you want to work with. And they think about things much differently because of Glidewell. ...We do have a lot of mass. We're very large. But we're not seated in the customer's office, really. So that scan system is largely seated in that customer's office. And the terminology they use, especially on their UX, is really suited to the dentist. And the terminology we use is really suited to building, you know, that final restoration. And even though we're talking about the same things, we're not saying it in the same way a lot of times,

**Tim Zonca  20:49**  

Who's the person or people or team that drives those conversations within, at least on the Glidewell side?

**Robert Edwards  21:00**  

You know, we rely a lot on our product owners, increasingly, to do that. So they are trying to really, increasingly seat themselves with our final customer and our internal customers. That's a hard job because, internally, we're so big. And then externally, we service so many dentists, since we are, you know, all across the U.S. and international. That's a monumental effort, really. But you know, little by little, we're trying to understand the dental process, external to Glidewell, better — and not make assumptions about who our customers are, and how they do things because our customers are changing. You know, those dentists that just like to write on the piece of paper, they're retiring. We have the, I guess you could call them the TikTok generation of dentists that are coming in that, you know, they just naturally do things a different way. And so they expect more, you know, real time kind of immediacy: "I should be able to look at my phone and know where, you know, the 10 cases I sent you are."

**Tim Zonca  22:14**  

Interesting. So I typically, as we near the end part of the show, I like to talk about, like, you know, what's next. So I have a couple of future-y sort of questions. But before we get to them, I want to take a little bit of a detour. And, you know, I've known you for a while, and I know that you seem like the kind of person that, you know, you're you're solving problems in your day job, and then you go home and solve other problems with technology. Want to talk a little bit about like, what else are you doing that happens to be information sharing?

**Robert Edwards  22:50**  

I hope I'm solving problems, I don't know. So, you know, I have a side hustle that was born out of the pandemic, like a lot of newer companies. And it was basically, someone came to me and said, "You know, what I do is video production for in-person events. There's no in-person events, what do I do?" And so we  jumped into the virtual space, \[the] virtual event space, just like a lot of companies, albeit be much more slowly because we have day jobs. And trying to figure out how to make that easy. trying to figure out how to get in there... I think there's a similar data sharing problem. It's a little bit different because the types of customers that we work with, say they're a nonprofit, or there could be, you know, just a smaller business that puts on events — they don't have a large IT staff. Or, you know, they probably have an IT guy that comes around once a week, something like that. And so getting that data or teaching them how we can best make it seamless so that people can register, people can log in, watch the event, you can capture the different things that they're interested in, or that they're doing, feeding that through our system and back out to them to their system — that's all very challenging, because, you know, the event is one thing. It's everything that goes on or around the event, I don't know, without the pandemic and the move to virtual, that companies knew that they should be interested. You know, an in-person event, you come in, you know, you register, you walk in, maybe they scan you, you sit down, you watch some things that happen, you know, maybe you bid on something, you donate, ...you eat and drink, and then get up and you leave. With the virtual event, there's so much interaction that you can push to them. And there's so much that the end user can interact with. And a lot of that is valuable data. And so instructing companies that this is the kind of stuff that you should be doing because you want to be able to capture this type of data. And it's not only going to be interesting to you, but it's going to be interesting to share with sponsors, large donors, you know, things like that. And how you share it in a meaningful way? You know, that's kind of the journey that we're on there, and I hope I'm problem solving there. Well, we'll find out.

Can you give me an example? Like what would be some meaningful data to be able to share with people across that value chain that you just walked through?

You know, so, if we juxtapose it with an in-person event, if someone is talking about a particular topic, and it's really resonating with the audience, it's hard to tell, right? Maybe you can tell because people are perked up, but there's no signal. If someone's talking about a particular topic in a virtual event, you know, like, we'll have a little button, you know, give me more information. Or we'll have little ways for a user to interact around that topic. And now we know that, you know, Tim is very interested in what you were talking about with youth outreach. We already have all of his information, maybe we automate an email. Or maybe, you know, you just go old school contact them, because you know he has a huge interest in that. Or you are showing this particular product, and they started chatting about it, you know, during the event, and this is who was chatting, this is their interest level. You know, there's different ways to, to prompt that kind of interactivity. And you know, all of that is meaningful throughout a 45-minute or hour-long event, there's just a ton of information that you can capture — if you know what kind of data points you should be looking for and what kind of interactivity you should push.

**Tim Zonca  26:41**  

So I think what's interesting to hear is how, you know, what, on the surface seem to be two really different sorts of, you know, kind of day job and night job. But I suspect you see some similarities. So is that true? And what similarities do you see that are most obvious?

**Robert Edwards  27:02**  

I'd actually go to one of the biggest differences that I see. And that's, if you go to the virtual event, again, you've registered, there's a link for you, maybe it's personalized, or maybe we have you log in, we know exactly who you are, what you're watching, what you're doing. If you go back to the dental example, so in a practice, you can have three/four dentists. And like I said, Glidewell, we'll send you out these paper RXs, we'll customize it to your name. But that doesn't mean that you're going to fill out the RX that has your name on it. You know, you may fill out your partner's RX. Maybe you're out, or you couldn't find yours, and then you scribble your name across the bottom. Even the scan system... so those are all, you know, digital: Tim has a login to the scan system. Now if he's going to scan Roberts mouth. You know, your partner comes in, maybe doesn't feel like logging you out, and logging back in. And so he's just going to use your login to scan his patient. From a machine learning perspective, in the virtual event space, we can start to gather information about you. You know, and some similar similarities to other users. In that dental space, it's almost like my Netflix, where my kids are logging on, and they're watching anime, and I'm watching what I watched. But Netflix is really pushing anime on me because there's this confusion, right? It doesn't really know who I am because I'm actually multiple people. And so when I say that, you know, Glidewell really wants to help the dentist. We want to help you prep better, we want to help you scan better, we want to help you do these different things better. But it's hard to tell what you're good at and what you're not good at because you may be three different dentists really.

It's almost like this signal is not as trustworthy.

Yeah, yeah. And so incentivizing you to do the steps correctly — steps that are really unimportant to you like "Why is it important that I log Tim out and log me in?" Incentivizing you to do that, you know, we need to figure that out. And maybe it's largely around reflecting data back. "Hey, Tim, these are your stats." And if you look at them and say, you know, "Why are my stats like this?" You know, we can have that conversation about well, you know, it's like Robert's Netflix: There's just too many people impersonating the same user, effectively. And so we don't have a clear signal about who you are.

You know, one of the things that you touched on in kind of both scenarios, is just the importance of the unobtrusiveness of the technology that's enabling something. And you know, for as many gazillion blog posts and things like that, that you could read about it, I mean, you seem to have a keen sense of that. What do you think is kind of like the biggest thing you've learned about that over the course of your career and why that's important or maybe how to tackle it?

I learned UX is very important. As a software engineer, you know, "I put the button on the screen, just press it." But that's not how it works, right? And I learned that the user testing, the user interaction, knowing your customer is highly important. Because you do want to spend that time to make it simple, to incentivize them for whatever reason, maybe it's just delightful to do the right things, or do what you feel like are the right things. So that you can collect those meaningful signals and touchpoints. Otherwise, if you make it even just a little bit confusing, they still may use it. You know, there's not like, depending on what kind of kind of system it is, it's not like they're just going to walk away from it. They still may use it, but they may use it in a way that you just didn't intend. And we see that a lot internally. If you're not careful about how you design these things, and you don't do that work upfront, you're going to miss out on... you're going to get the interaction. Maybe you'll get the usage, but you're going to miss out on so much more. And in the past, I just don't think it mattered as much. Because, you know, the whole data is king is just more of a, you know, the 20s, the 2000s was our kind of thing. But now, it's highly important. It's highly important, especially with, you know, the role of machine learning and AI, it's hugely important. You need these large data, good datasets, in order to have the system infer the right things.

**Tim Zonca  31:51**  

That makes sense. You know, what about as you look out, and, you know, you can answer this from either your Glidewell, or your side project perspective, or even both, but what are you most excited about from a tech perspective? Like, what do you think are some of the biggest opportunities, and maybe to give it a horizon in like, you know, the next 12 months that you're excited about?

**Robert Edwards  32:16**  

Well, I don't know if it's gonna be 12 months, it could be a lot further out than that, but there is this movement on the Glidewell side. So what we are seeing, again, is dentists that just aren't used to technology or that technology was, you know, obtrusive to them are starting to retire. And you have these younger dentists that just grew up in technology. It's just, you know, they expect there's an app that they're going to interact with. They're starting to become more of the mainstream. And why that's important is because the entities around that, start to focus on that. You know, if 70% of your dentists like to use, you don't hear that. If 70% of your dentists like to use a piece of paper, there's no incentive for these external companies, you know, that are servicing to be sophisticated at all. But there are more that they have to be sophisticated. And there's, there's a constrained bit, you know, not only budget-wise, but just resource-wise on just hiring software engineers. So now they have to lean more on partnerships to be able to get things done. I think you'll just see more sophistication across the industry, more API-driven, more data-driven. And then that'll really bring about that need for some standardization because, right now, like I said, there's just a lot of human in between most processes.

**Tim Zonca  33:52**  

Yeah, yeah, interesting. What about, you know, if you could unlock something, or, you know, kind of wave your magic wand and unlock something around better data sharing? What would be at the top of your wish list?

**Robert Edwards  34:11**  

You know, I think, you know, we've said it. Just like, so when it comes to data sharing, at some points, you know, Glidewell is the end user, right? And so just like, we need it to be simple for the dentist or simple for our lab technician, there needs to be some simplicity around it. "I want to seamlessly share data with Company X, but that doesn't mean I want a development effort around that." Right? What is the easiest way for me to do that? I don't have developers for developers sake. So I need them to focus on what is our core competence. So that kind of, you know, ease of use direct, I would love it if there was a low code system for integration. And so you know, across all these different vendors, so that we didn't have to focus on that part. Because that's more like, just kind of busy work. It feels like at times. So, you know, I think that's what unlocks it — how easy is it? And then how easy is it to keep it secure? Because that's the other problem, right? I mean, you want security, not only just at the API level, but at the data level. Certain people shouldn't be able to peer at certain things. And so how do you make that easy? Because right now, what happens is, you know, everybody's short on resources. So a lot of times when we do get integration, someone wants to send me a lot more data than I really want only because they use that format, you know, somewhere else. So how to make it simple? How to make it useful? I think, you know, that's going to be important to unlocking that sharing.

**Tim Zonca  35:56**  

You know, so one final question before we wrap up, is just keying off something you just said, which is you kind of represented this tension to me of, like abstraction. You used the phrase, like low code, and then kind of just rigor and in talking about security, you know, at various levels. And so, the one thing that strikes me, too, having known you, and some of the folks on your team for a while, is, if I remember, right, I think Glidewell, like, you're one of...you're an early cloud user. And so, it seems like there's something that you have figured out as you lead your team, as it relates to this idea of, like, abstraction and to kind of power through that. But at the same time, you know, rigor and security, or compliance, or whatever it is...I'd love to just hear your, you know, if you're talking to someone younger in their career, for example, who's like, "Hey, I want to I want to run an engineering team or an application development team", how would you talk to them? Or what would you coach them on \[around] how to think about balancing that tension?

**Robert Edwards  37:11**  

I tell them, “Be a writer, instead.” 

**Tim Zonca  37:15**  

(laughs heartily)

**Robert Edwards  37:15**  

So I think security, it really has to be the same way because that tension, there is that tension, right? And I think it causes issues because you're only as good, you're only as secure as I'd say, either to the developer writing the code or the reviewer. And it shouldn't be that way. That needs to be simple, as well. It should be that the environment is securing whatever is pushed into it, or the build process, the deployment process, whatever it is. That's where that layer needs to come in for consistency. So whether it knows and, hopefully this makes sense, but going back to just consistency and what we call things. If it knows something some fields should not be exposed or should have a particular attribute on it, and the developer missed it? You know, it would be great to have some automated analysis that would go ahead, and even just do that quick update, check in, and "Okay, let's go back through the process again." Yeah, I don't know. And I've certainly not mastered anything about security. I would tell somebody younger, it's great to know how to write code, and while you're, you're getting obsessed with that, you know, maybe start from how do I secure this code? What are the known types of issues that may arise if I don't do things in a particular way? So, hopefully, that answers your question.

**Tim Zonca (38:12)**

Yeah. Yeah. Thanks!

**Robert Edwards** **(38:17)**

Really start from a hacker's point of view, and then work backwards and learn how to write code.

**Tim Zonca  38:36**  

Great, thanks. Thanks for walking through that. Well, you know, thanks so much, Robert, for just getting a chance to sit down with you and spend some time talking about how you think about data sharing. I appreciate it. And then I also thank all of you who are listening and joining us. For all those listeners out there, if you're interested in learning more about the different organizations or kind of products or research that we've either mentioned on this episode or the others, please visit vendia.com/podcast for the links. And when you're ready to keep the conversation going, download or stream our episodes from either Spotify or Apple Music and other top streaming services. If you have a point of view on this discussion, any of our others, or anything around the potential of real-time data sharing, and you want to be a guest, just DM us at @vendiaHQ on Twitter, and you can mention #circlesoftrust. Thanks again, everybody for joining us. Thanks again to you, Robert! It was great to get a chance to chat with you, and until next time around, cheers!

## Get Circles of Trust in your inbox

Join the [Circles of Trust community](https://www.vendia.net/resources/circles-of-trust) to get real talk or real-time data sharing right in [your inbox](https://www.vendia.net/resources/circles-of-trust). Or subscribe now on [Spotify](https://open.spotify.com/show/49kZwowJkYxjceHIax2zxK), [Apple](https://podcasts.apple.com/us/podcast/circles-of-trust/id1645908970), or [Google](https://podcasts.google.com/feed/aHR0cHM6Ly9mYXN0Lndpc3RpYS5jb20vY2hhbm5lbHMvYWw5cWQ4MTdkcS9yc3M/episode/NzQzNGZjNmItYmFjNC00MmNmLWIxNDctY2E0ZGJiNTE0Njhh?sa=X&ved=0CAgQuIEEahcKEwjYxcrM_rr6AhUAAAAAHQAAAAAQLA) Podcasts.