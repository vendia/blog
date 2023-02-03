---
draft: false
template: page
path: /legal/share-service-level
components:
  - type: Text
    text: >
      # **Vendia Share Customer Support and Service Level Agreement**


      This Vendia Customer Support and Service Level Agreement (this “Service Level Agreement” or SLA) sets out the service levels that apply to customers (“Customers”) having paid subscriptions with Vendia, Inc. (“Vendia”) for Vendia services (“Services”). This Service Level Agreement is applicable to all types of incidents (including but not limited to ones defined in this SLA) related to services offered by Vendia.


      ## **1. Definitions**


      **Availability (uptime)**: The number of available minutes divided by the total number of minutes in the time period (usually calculated over a billing month) expressed as a percentage. For example, if there were 45 minutes during which the service was unavailable in a month with 31 days, the availability would be `((60 x 24 x 31) - 45)/(60 x 24 x 31)` or 99.899%. For SLA purposes, availability is measured exclusive of planned downtime.


      **Available Minute**: Any 1 minute period that was not unavailable.


      **Error Response**: An API returning a 5xx response, being unreachable (e.g., no DNS entry), or timing out.


      **Planned Downtime**: Time when the Service is offline (unavailable, down) for planed, previously scheduled and notified maintenance. Note that customer contracts may limit the duration and timing of planned downtime. Vendia strives to operate without any planned downtime, but cannot rule out the possibility that it may occur.


      **Unavailable**: Any 1 minute period in which at least one call to the API was made and in which 75% or more API calls resulted in error responses.


      **Unavailability (downtime)**: The inverse of availability; i.e., if availability is the ratio UPTIME / TOTAL, then unavailability is (TOTAL - UPTIME) / TOTAL.


      ## **2. Service Level Availability**


      Vendia will use commercially reasonable efforts to meet the Availability, measured monthly, set forth in the table below for the applicable Services:


      <table>
        <tr>
          <td>
            <strong>Vendia Service</strong>
          </td>
          <td>
            <strong>Monthly Availability</strong>
          </td>
        </tr>
        <tr>
          <td>Enterprise Plan</td>
          <td>equal to or greater than 99.9%</td>
        </tr>
        <tr>
          <td>Individual Plan</td>
          <td>equal to or greater than 99%</td>
        </tr>
        <tr>
          <td>Free Plan</td>
          <td>no SLA provided</td>
        </tr>
      </table>


      If a Customer requests maintenance during these hours, any uptime or downtime calculation will exclude periods affected by such maintenance. Further, any downtime resulting from outages of third party connections or utilities (including from public cloud service providers such as AWS, Azure, Google, and others) or other reasons beyond Vendia’s control, including those arising from force majeure, will also be excluded from any such calculation.


      Customer's sole and exclusive remedy, and Vendia's entire liability, in connection with Service availability shall be that for each period of downtime lasting longer than one hour, Vendia will credit Customer 5% of Monthly Service fees prorated for each period of 30 or more consecutive minutes of downtime; provided that no more than one such credit will accrue per day. Downtime shall begin to accrue as soon as Customer (with notice to Vendia) recognizes that downtime is taking place, and continues until the availability of the Services is restored. In order to receive downtime credit, Customer must notify Vendia in writing within 24 hours from the time of downtime, and failure to provide such notice will forfeit the right to receive such downtime credit. Such credits may not be redeemed for cash and shall not be cumulative beyond a total of credits for one (1) week of Service fees in any one (1) calendar month in any event. Vendia will only apply a credit to the month in which the incident occurred.


      Vendia’s blocking of data communications or other Services in accordance with contractual terms, such as payment delinquency, shall not be deemed to be a failure of Vendia to provide adequate service levels under this SLA. Downtime resulting from usage of the Services not in compliance with the then-extant terms of usage or service agreements, from pen testing or benchmarking of the Services without the prior written approval of the Vendia, or which results from the Customer’s incorrect configuration (or code error in the case of hosted code) or usage of the Service in a manner not consistent with its documentation is not covered by this SLA.


      Services, service features, or tools labeled as “alpha”, “beta”, “preview”, “pre-release”, “demo”, “prototype”, "early access",“experimental” or other pre-production status are not covered by this SLA.


      ## **3. Customer Support **


      All Customers, regardless of class of service or payment terms, receive at least the following:


      - Community supported Discord Channel

      - Per-minute system health checks

      - Public service status page


      For customers with an Enterprise Plan, your enterprise agreement may include additional support options. Please see your individual contracts for specifics. Support is limited to weekdays, 09:00 - 17:00 Pacific time, excluding holidays. Instructions on how to access support will be sent to you via email after you purchase an Enterprise Plan.


      Assistance with schema design, integration with Customer-owned or third-party applications or services, expansion of an existing solution to additional parties, and development and deployment of features or APIs not documented as existing features of the Service are not considered support issues, and may be addressed through professional services engagements or use of contracted Solution Architect hours, when applicable.


      Services, service features, or tools labeled as “alpha”, “beta”, “preview”, “pre-release”, “demo”, “prototype”, "early access",“experimental” or other pre-production status are offered on a “best effort” basis and are not covered by these customer support terms.


      ## **4. Service Management**


      Vendia will use continuous, automated monitoring and management capabilities to support its stated SLAs and to operate the service to the highest levels of standards.


      ## **5. Service Requests for Enterprise Plan Customers**


      Vendia provides ongoing support to customers using its approved service support channels and knowledge base resources.


      For Enterprise Plan Customers, Vendia will respond to service-related incidents and/or requests submitted by the Customer on the Enterprise Plan within the following timeframes. _Note that response time SLAs and others terms are generally included in Vendia enterprise agreements and may vary from Customer to Customer; the following should be viewed as illustrative rather than definitional:_


      - Same business day for issues prioritized as "critical" (aka P1) by Vendia.

      - Within two business days for issues prioritized as "high" (aka P2) by Vendia.

      - Within two weeks for issues prioritized as "medium" (aka P3) by Vendia.


      Service responses may include mitigations, repairs/restoration of service, and Customer education among other possibilities. Requests for net-new product or service capabilities or capabilities outside of the Customer's service contract are not within the scope of this definition.


      _Vendia performs all support and service remotely; no on-site or in-person support is provided in any contract._


      ## **6. Customer Requirements**


      Vendia can only provide service and support when Customers meet these requirements:


      1. A Customer account in good standing, including being current in the payment of all undisputed service and support fees.

      2. Reasonable availability of technical Customer representative(s) when resolving a service-related incident or request.

      3. Compliance with Vendia stated service and usage agreements and adherence to posted limits.

      4. Support for any software deployed based on a Customer's specifications or unique to the Customer’s configuration or settings ("data plane deployments") may be dependent on compliance with documented limits, restrictions, or operational guidance from Vendia, as well as compliance with all applicable cloud service provider (CSP) terms of service, limits, restrictions, and best practice documentation, including CSP security guidance.
    theme: white
seo:
  noindex: false
createdBy: ""
createdAt: ""
updatedBy: Hugues Tennier
updatedAt: 2023-02-03T16:56:32.691Z
id: 9595c3c0-a192-4e55-9734-ef04148d84ba
---
