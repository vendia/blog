---
draft: false
title: 'Why public cloud services aren’t enough for file sharing'
description: 'With over a decade and a half in production, why hasn’t the industry solved the problem of multi-party, multi-cloud file sharing?'
date: '2022-08-17'
categories:
- product
- architecture
authors:
  - Tim Wagner
---


With so many use cases for file sharing across every conceivable sector and segment, it would seem like the necessary functionality should be readily (and inexpensively) available. However, the existing support in public clouds leaves much of the necessary functionality incomplete or missing entirely—even though all of the “big three” public clouds have been busily adding to its set of file-related services, features, and tools for some time. In fact, Amazon’s S3 storage service is one of the oldest in the company’s cloud lineup, dating all the way back to March 2006.

_With over a decade and a half in production, why isn’t file sharing a “solved problem”?_

One simple (and unfortunately very real) answer is that it’s just not in any public cloud’s best interest to make it easy to share data with its competitors. Punitive “data transfer out” fees are designed to keep data inside each cloud’s walled garden; the more elaborate the service, the more likely it is to stop at the boundaries of its own cloud. For that kind of sharing, it’s back to DIY where you hire your own team of engineers and start from square one.

Other gaps are more subtle, but no less serious. For example, in an attempt to balance latency and functionality, Azure’s blob storage system only computes MD5 hashes on the first 1GB of content. For some users, that’s ideal. For others, particularly in scenarios like append-only data stores, that approach is an epic fail leaving users without a reliable indication of file integrity. Other seemingly simple needs, like encrypting or redacting a file’s content, still aren’t built-in capabilities (in 2022).

Here’s a summary of a few of the limitations of file sharing in public cloud provider services:



* Lack of support (and active financial discouragement) for sharing files across clouds
* Limited (or outright missing) support for sharing between two or more unrelated parties or among departments using different cloud provider accounts
* When provided, sharing is “all or nothing” with no support for copy-on-demand, caching, quorum, or other advanced sharing mechanisms
* No built-in support for encryption or redaction of the file's content
* Lack of file and directory integrity support and an inability to prove that a manifest of file or directory content is consistently represented in two or more places
* Limited governance and bulk admin capabilities (such as sharing an entire directory with another party in a single command)
* Limited support for associating metadata with files
* Inability to transactionally share multiple files or a combination of files and metadata with other parties in a guaranteed (ACID) fashion
* Difficulty in tracking the provenance of file changes and sharing decisions (such as which user shared which version of which files with which other parties) without resorting  to other services or custom administrative buildout

Of course, third party solutions that augment public cloud providers’ built-in capabilities also exist; however, most of these solutions focus on other problems (such as synchronizing on prem and cloud data) or specialize in ETL and analytics. This leaves a significant gap for real-time, operational file sharing by business-critical applications. That gap often gets closed by application developers and IT R&D staff who end up building custom solutions on a one-off basis. But as the next section illustrates, custom (and repetitive) buildout of key data sharing capabilities is simultaneously frustrating, costly, and dangerous.


# The challenge with custom solutions

Custom application support for file management is a classic slippery slope. It begins easily enough with an application loading information from a file to make ingestion, exhaust, or both easier to customize and more amenable to bulk [un]loading. However, things start to get complicated when applications inevitably grow in both scale and scope. Managing multiple versions of large numbers of files being shared with multiple parties quickly runs into a host of problems:



* How does an application track which parties have which versions of which files? Who’s responsible for detecting and transferring missing files when something inevitably goes wrong?
* What happens if two or more parties, both with update privileges, disagree on which version is the current file?
* How can entire folders be transferred atomically, without creating duplicative code in many applications, to address the lack of batch operations in public cloud services?
* When SOC2, PCI, or other security, infosec, or audit evidence gathering is required, how can key administrative questions (e.g., who was responsible for sharing a file with another party) be accomplished? Where is that administrative information stored and how is it made readily queryable and indexable?
* How can a CIO or CDO ensure that all data is fully encrypted at rest and in transit and that all infosec and compliance-related sharing policies – both internal and external – are fully complied with, without a costly and time consuming manual audit of individual files and transfer logs?
* …And the list goes on. 

With custom solutions, answering these questions devolves to repetitive, custom coding in application after application and tool after tool. Outside of the public clouds themselves and the Fortune 50, most companies don’t have the people, time, money, or the interest in creating their own cloud-based file sharing platform to overcome these challenges in the form of a single, centralized solution. This leaves every application developer to fend for themselves and every security, compliance, and infosec officer staring at an endless parade of custom solutions to evaluate and prove correct. Plus, getting things wrong (as the headlines for Amazon S3 bucket permissions frequently show) can be a costly PR nightmare as sensitive information flows to places it shouldn’t or enables attackers to easily breach a company’s defenses.


# Vendia’s approach: A ledger-based file sharing Platform

Like any mission-critical data sharing challenge, cross organizational file sharing should be addressed at a platform level. By repeatedly employing a secure, trusted file sharing platform, companies can ensure that they’ll be able to deliver consistent, scalable solutions regardless of the type or quantity of files, nature of the sharing relationship, or public cloud on which the file(s) are hosted.

Unlike the built-in primitives offered by public cloud service providers, our solution goes much further, tackling all the gaps identified above:



* Full support for sharing files across clouds, with Smart Replication<sup>TM</sup> capabilities that minimize cross-cloud data transfer charges for parties on other public clouds
* Full support for sharing between two or more unrelated parties or among departments, on the same or different clouds, with guaranteed ordering and consistency of updates
* Flexible sharing variations, including copy-on-demand, caching, and other advanced mechanisms
* Built-in support for encryption and redaction of file contents*
* File and directory integrity support that ensures that both files and directories contain the correct information, at all times, across all partners
* Governance and bulk admin capabilities (launching fall 2022)
* Unlimited support for associating metadata with files
* Ability to transactionally share multiple files, or a combination of files and metadata, with other parties in a guaranteed (“ACID”) fashion
* Powerful tracking features for managing the provenance of file changes and sharing decisions (such as which user shared which version of which files with which other parties) without the need to purchase or learn other services or create custom administrative solutions

 

**Interested in a file sharing platforms that are scalable, secure, and offer low cost of ownership through SaaS-style hosting? With no servers, disks, or networks to manage, a file sharing solution like Vendia’s can start delivering value in under a day, with no need for long-term management, maintenance, or other operational staffing. [Contact us](https://www.vendia.com/contact-us) to learn more.**
