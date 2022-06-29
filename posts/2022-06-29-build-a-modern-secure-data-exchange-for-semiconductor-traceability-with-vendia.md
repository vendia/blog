---
title: 'Build a Modern, Secure Data Exchange for Semiconductor Traceability with Vendia'
description: 'To produce high-quality, high-yielding chips, semiconductor companies need to securely exchange data with the supply chain participants.'
draft: false
date: '2022-06-29'
authors:
  - Vikrant Kahlir
---


# The foundational need for end-to-end traceability

Semiconductor manufacturing is a complex endeavor. It relies on the cooperation of globally distributed supply chain participants, including design houses, fabrication facilities, equipment manufacturers, material suppliers, and assembly and testing facilities. Together, they must work closely to produce semiconductor chips that meet the performance, quality, and security requirements of myriad industries, including automotive, communications, and more.

 

To produce high-quality, high-yielding chips, these companies often need to securely exchange data with the supply chain participants. Moreover, there is a need to enable end-to-end traceability spanning [all the participants](https://www.vendia.net/product#Multi-Party-Sharing) in the supply chain:



* To ensure the safety of critical infrastructure
* To maintain compliance with government regulations
* To protect against counterfeiting, tampering, and intellectual property (IP) theft 

To enable such [traceability](https://www.vendia.net/blog/supply-chain-visibility-with-vendia-share), semiconductor companies need a way to securely exchange data with each other so each participant can maintain control of the data they share. This allows them to protect their IP while simultaneously enabling the other participants to derive value from the data to improve yield, raise quality, and ensure compliance.

 

This end-to-end traceability can enable multiple use cases for the semiconductor industry. It enables root cause analysis for defects, allowing chip manufacturers to find causes for defective chips—even when causes originate through an external supply chain participant. It also enables component traceability, which can help prevent counterfeiting and tampering.


# Rethinking what’s possible for external traceability

The full data transparency between fab, fabless, and OSAT for traceability is challenging because of IP concerns. Almost every bit of information on the design, production, and testing process is protected as an IP of a company.

Today, there are situations and scenarios where organizations do share information. But, that happens through ad-hoc, offline, manual, and time-intensive arrangements that use traditional methods (a.k.a secure inbox). Plus, it only happens when there are no alternatives to resolve a critical issue. Organizations can build a formal system of truth to answer some fundamental questions about die traceability.

**Organizations don't have to wait for days and months to get the answers: they can find answers _in seconds_ using [a new system](https://www.vendia.net/use-cases/next-gen-blockchain) for traceability.**

Want to know the answers to important business problems like the following?



* Show me the full journey of a die in case a die is reported faulty.
* Show me the potential intersection points in the journey of multiple dies in case multiple dies are reported faulty.
* Show me the anonymized information about the die journey in a partner organization that my partner can interpret with precision to locate detailed information in their systems. 

While old methods will continue to exist for IP and sensitive information exchange between two organizations, for simple questions related to die traceability, there is a better way.


## 4 requirements for external traceability

The traceability systems should meet the following four requirements: 



1. **Ability to track the product journey from start to end **

    _For external traceability, the journey can start in Organization A (Fabless), pass through Organization B (Fab), and end in Organization C (OSAT). For internal traceability, the start and end of a journey are within the organization's boundaries. However, the idea of internal traceability is to bring together data sitting in silos in different specialized systems owned and operated by an independent group or department within the organization to track the journey of a die within an organization. _

2. **Share just the right information, without exposing IP to other partners**

    _For both internal and external traceability, the concern of IP applies as a standard. It is important to share as little as possible to achieve internal and external traceability and even the information exchanged should be anonymized to an extent that the traceability system should smartly interlink connection with data—but only data owner partner organizations can interpret and see the actual text of the information. _

3. **Ability for everyone to audit every step and change in the product journey**

    _The information recorded in the multi-party traceability should record the owner, timestamp, metadata, and actual information for both internal and external audits. The metadata and data recorded should be immutable. In case of a correction update, traceability systems should record it as a new version of truth—without overwriting the previous history. Both previous history and the new version of truth should be visible to all parties collaborating on a traceability system._

4. **Single-source of truth that cannot be overwritten or disputed**

    _Only the organization’s internal departments will trust the centralized systems owned and operated by an organization and secured in their private data center’s four walls. But an external organization has no reason to trust the centralized systems of other participant organizations, especially in cases of conflicting data and disputes concerning high-impact issues like product recalls. The information stored in the centralized systems cannot be trusted because data-owning organizations have controls to mutate versions of truth intentionally or mistakenly. Therefore, for multi-party information exchange, the source of information should be consistent and indisputable across multiple parties._

    _The indisputable system of truth will also record information that participating organizations can use to prove and report regulatory compliance related to location-based regulations on material and components imports used in the die fabrication._

    _Participating organizations can also use this system to exchange information related to Scope 1, 2, and 3 ESG tracking specifically for sustainability reporting._



# Secure data exchange for semiconductor traceability with Vendia

Based on the requirements, the Secure Data Exchange for Semiconductor Traceability will need more than [a centralized data store](https://www.vendia.net/blog/private-vs-public-blockchains) for information storage. The decentralized nature of information sources and immutability implies that blockchain is a good fit for traceability. While blockchain will provide the platform for information, the full solution should take into account what information should be shared and the degree to which it should be anonymized. This creates safety and security, so partners are comfortable contributing data. 

Secure Data Exchange is a distributed ledger system that multiple participating organizations or nominated organizations will control to share and receive data. For such a system, we propose to use a distributed ledger, which is a core component of the blockchain technology used in trustless systems for collaboration between parties. 

**Vendia Share has developed a custom blockchain implementation you can use to build secure, performant-distributed systems for multi-party collaboration at the organizational or departmental level.**

 

[Vendia Share](https://www.vendia.net/product) is a private/permissioned blockchain that participants use to set up a multi-party (external traceability) or single-party (internal traceability) network called Universal Application (a.k.a Uni). Typically, participating parties already have some trust and agreement to collaborate on specific use cases. The participating parties can leverage one Vendia Share [Uni](https://www.vendia.net/blog/sharing-data-with-fine-grained-control) for several use cases or they can set up multiple Uni for different functional use cases or different sets of partners; for example, parties can set up one Uni for traceability and a separate Uni for sustainability reporting, etc. 

NOTE: Uni is a permissioned blockchain: Existing participants invite new participants. It is assumed that existing participants will have an internal process to validate and approve new participants before the formal invitation to join is sent out through Vendia Share. Vendia Share is not an open blockchain like what’s discussed in daily news or blockchain used for crypto payments. [Vendia Share](https://www.vendia.net/) is a collaboration tool built for enterprise customers so they can share data, as in the example of fabless, fab, and OSAT organizations coming together to share data for full external die traceability of a die.


# How secure traceability will work

In the die traceability example,

 



* Fabless will share some pointers to design data (not the design) with fab and OSAT in read-only mode.
* Fab will share pointers to production data in the fabrication, input and output lot, batch, serial number (not the actual fab data) with fabless and OSAT in read-only mode.
* OSAT will share pointers to packing and testing data (not actual test results) with fab and fabless in read-only mode.

This approach will allow each Node in Uni to have all information from all partners, some that individual organizations will own and some that other partners will share, to build a system for die traceability. Partners will not share anything they consider as IP. You can totally do it using simple identifiers, and there is an option to further anonymize identifiers so they become meaningless to partners. But still, [Vendia Share](https://www.vendia.net/) can use it to smartly link data for die traceability. 

The organization with access to Uni data can run ad-hoc analysis on traceability data. You can also export data out from Uni to your private data center—in cloud—to do more nuanced analysis on the data you contribute and partners share. You can use services such as Amazon Neptune Graph Database to track the full journey of die from sales order to the final testing.

<p align="center">
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..96793170..176460916-4965c6c7-65b4-462f-a3c6-167c212780e0.png" />
</p>
<p align="center">Figure 1 - Traceability for Secure Supply Chain Solution Diagram</p>


# Conclusion

[Vendia Share](https://www.vendia.net/product) makes it possible to build a multi-party secure data exchange for internal and external die traceability without exposing the IP of the participating organizations.

Unlike other legacy blockchain offerings in the market, Vendia Share is built on AWS Serverless, proven for scalability, security, performance, and operational excellence, and Vendia developed custom blockchain for trust. Vendia Share is built with ease of use, so you can create proof of value in less than a week and time to market in less than three months. 

Vendia Share is built with an open API concept: You can export data owned by you and shared by your partners for advanced analytics to your dedicated AWS or on-premises environment. But, you and your partner will reference back to Vendia Share as a system of truth. 


# Next Steps

Interested customers can self-serve directly on [Vendia Share](https://www.vendia.net/poc), or you can purchase Vendia Share through [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-6rjbm2je2n6ki). 

Learn more: [www.vendia.net/semi](http://www.vendia.net/semi)
