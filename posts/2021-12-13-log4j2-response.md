---
draft: false
title: "Vendia's Response to CVE-2021-44228"
description: "A note on the impact to Vendia and our customers"
date: '2021-12-13'
authors:
- James Gimourginas
categories:
- announcements
id: 'c61580b6-5364-49fa-8b17-2b38b156fd66'
---

Vendia is aware of the recently disclosed [security issue](https://nvd.nist.gov/vuln/detail/CVE-2021-44228) relating to the open-source Apache “Log4j2" library.

After an internal investigation by our engineering teams, we have determined that Vendia infrastructure and systems are not affected by this vulnerability. Vendia does not directly utilize Log4j2 in any of our software. As such, none of our applications require mitigation. Vendia does utilize third-party services from cloud providers. These cloud service providers - including [AWS](https://aws.amazon.com/security/security-bulletins/AWS-2021-006/) and [Azure](https://msrc-blog.microsoft.com/2021/12/11/microsofts-response-to-cve-2021-44228-apache-log4j2/) - are actively mitigating the vulnerability and are publishing their own updates as they become available.

Vendia prides itself on leveraging the best of serverless from across major cloud service providers.  One of the benefits of this approach is minimizing our risk and impact from security issues like this one: as AWS and Azure make updates, our serverless architecture is updated automatically.  With very capable teams addressing the security issue across cloud providers, we can continue focusing on building new features. 