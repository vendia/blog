---
draft: false
title: "Multi-party data sharing with control"
description: "Learn how Vendia Share's access controls enable trusted and secure real-time data sharing among partners across clouds with insights from our Solutions Architecture team."
date: '2022-01-31'
categories:
- architecture
- concepts
- tutorials
authors:
- James Gimourginas
id: '26144e30-be2d-4f67-8fd6-8f3f624c72ac'
---

## Overview
For our customers, multi-party data sharing means many participants transacting with each other in real time. While this sounds simple enough, the reality is getting participants to _agree to collaborate_ can be a challenge. Many of these participants (often separate organizations) have grown accustomed to under-sharing their data, either because of the cost and complexity or because of insufficient access controls to truly share with trust.  

Vendia Share makes trusted real-time data sharing possible thanks to the use of a Universal Application ("Uni" for short).  A Uni is composed of one or more nodes, each with access to a distributed ledger.  While the ledger is fully ordered and consistent across all nodes, each node maintains a separate copy.  The decentralized approach allows each participant to tailor the access controls to its node, the data written to it, and the data shared with other nodes.

A core tenet of Vendia Share is _sharing with control_. That tenet is the basis for a number of features that allow participants to gain trust in the Vendia Share platform and with each other. Those features, among many others, make Vendia Share the best platform to consider when building multi-party, real-time data sharing solutions. It's these same features that bring the cost and complexity of building real-time data sharing solutions down significantly. Because sharing with control is a core tenet, it's not surprising that access controls have been built into multiple levels of the Vendia Share architecture.

In this blog post we'll explore Vendia Share's access control mechanisms, their relationships, and their purpose and placement within the overall Vendia Share architecture.

* **[User Management Access Controls](https://www.vendia.com/docs/share/rbac#user-actions)** - Protect Vendia Share user account management operations
* **[Uni Management Access Controls](https://www.vendia.com/docs/share/rbac#uni-actions)** - Protect Vendia Share Uni management operations
* **[Node Access Controls](https://www.vendia.com/docs/share/node-access-control)** - Protects a node's GraphQL API
* **[Data Access Controls](https://www.vendia.com/docs/share/fine-grained-data-permissions)** - Protects the data stored in a Uni

<figure>
    <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783..151488928-76a5b185-329e-424a-af46-17a397868716.png" />
    <figcaption ><b>Figure 1</b> - <i>Vendia Share Access Controls</i></figcaption>
</figure>

The Share architecture can be thought of at a high level as a *Control Plane* and a *Data Plane*.  The Control Plane manages user accounts, Unis, and nodes (i.e. the metadata needed for the Share platform).  The Data Plane spans the nodes that collectively act on the data in a Uni (i.e. the actual data shared by participants).

As captured in Figure 1, the user and Uni access controls protect the Vendia Share control plane and the node and data access controls protect the Vendia Share data plane. You can differentiate control and data plane access controls by considering whether the access control protects the Vendia Share platform (if so, it's a _control plane_ protection) or a Uni or node (if so, it's a _data plane_ protection). The most important point is that multiple access controls exist in each plane of the Vendia Share architecture. In addition to providing defense-in-depth, the numerous available access controls offer each participant in a Uni the flexibility and control they often need to willingly share data with others.

Now let's examine each access control in depth.

### User access controls

#### Purpose
User access controls protect the user account management operations provided by Vendia Share. This prevents unauthorized access to user management functions and enables features like self-service user management within an organization.

#### Approach
The Vendia Share control plane is where Vendia Share user accounts are stored. Authorization to specific user account management operations that act on user accounts is granted through a Role Based Access Control (RBAC) mechanism.

<figure>
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783..151488927-8625e14b-4912-4fff-af82-d8e133790f61.png" />
  <figcaption><b>Figure 2</b> - <i>User Access Controls in the Vendia Share Control Plane</i></figcaption>
</figure>

Before going further, it's important to define a few key RBAC terms, as they relate to user access controls.

##### Key terminology
* **Action** - the right to call one or more of Share's user account management operations
* **Resource** - the user account against which an Action can be performed
* **Capability** - a mapping of Action to Resource, linking the "right to call" (an operation) with the "right to manage" (a user account)
* **Role** - a named collection of Capabilities and used to determine if a user management operation is authorized

There are a set of [Actions](https://www.vendia.com/docs/share/rbac#user-actions) relevant to user account management. These are a subset of the `ActionEnum` defined in the Vendia Share [control plane API](https://www.vendia.com/docs/share/share-graphql-schema#vendia-share-graphql-schema-reference). Each Action defined corresponds to a user management query or mutation available through the API.

<table>
  <tr>
    <td><strong>Action</strong></td>
    <td><strong>GraphQL Query or Mutation Operation</strong></td>
  </tr>
  <tr>
    <td>USER_GET</td>
    <td>getUser</td>
  </tr>
  <tr>
    <td>USER_CREATE</td>
    <td>createUser</td>
  </tr>
  <tr>
    <td>USER_DELETE</td>
    <td>deleteUser</td>
  </tr>
  <tr>
    <td>USER_SET_EMAIL</td>
    <td>setUserEmail</td>
  </tr>
  <tr>
    <td>USER_SET_ROLE</td>
    <td>setUserRole</td>
  </tr>
  <tr>
    <td>USER_DELETE_ROLE</td>
    <td>deleteUserRole</td>
  </tr>
  <tr>
    <td>USER_INVITE</td>
    <td>invite</td>
  </tr>
</table>


There are also a specific set of [Resource](https://www.vendia.com/docs/share/rbac#name-formats) formats that are permitted for user account management purposes. The allowable formats in some way describe one or more Vendia Share user accounts. These are the accounts against which an Action from above can be executed.

A Vendia Share user can use either a [default role](https://www.vendia.com/docs/share/rbac#types-of-users-and-default-roles) or a [custom role](https://www.vendia.com/docs/share/cli/commands/auth#auth-role-set) when attempting to invoke one of the user management operations made available through Vendia Share's control plane API. The Vendia Share [Command Line Interface (CLI)](https://www.vendia.com/docs/share/cli) provides a quick and easy way to invoke these operations but those same interactions can also be achieved using a GraphQL client of your choice.

#### Examples
We've created a [set of examples](https://github.com/vendia/examples/tree/main/features/share/access-controls/user-access-controls) to demonstrate how user controls can be viewed and managed and the implications of their settings on user account management operations.  These include invocation of control plane APIs using the [Vendia Share CLI](https://www.vendia.com/docs/share/cli) and a GraphQL client.

#### Enterprise-only features
More advanced user controls scenarios and self-service features are available for our [Enterprise customers](https://www.vendia.com/pricing).  While we won't cover those in detail here, the permission necessary originates from the creation of an administrator role. An administrator can then invoke otherwise unauthorized API operations (e.g., createUser) or grant escalated privileges to other accounts within the administrator's organization (i.e., setUserRole).

### Uni access controls
Uni access controls protect the Uni management operations provided by Vendia Share.  Authorization to specific Uni management operations is granted through an RBAC mechanism, very similar to the RBAC mechanism that protects user controls.

#### Approach
In addition to storing user accounts, Vendia Share's control plane also stores information about all Unis and nodes deployed across the platform.  Authorization to specific Uni management operations that act on Uni and node configuration is granted through an RBAC mechanism.

<figure>
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783..151488926-9a5e17fc-0ae0-4687-816c-3c70724c6bf3.png" />
  <figcaption>
    <b>Figure 3</b> - <i>Uni Controls in the Vendia Share Control Plane</i>
  </figcaption>
</figure>

We can slightly modify the RBAC terms from the previous section to make them specific to Uni management.

##### Key terminology
* **Action** - the right to call one or more of Share's Uni management operations
* **Resource** - the Uni or node against which an Action can be performed
* **Capability** - a mapping of Action to Resource, linking the "right to call" (an operation) with the "right to manage" (a Uni or node)
* **Role** - a named collection of Capabilities and used to determine if a Uni management operation is authorized

There are a set of [Actions](https://www.vendia.com/docs/share/rbac#user-actions) relevant to Uni management. You'll notice these are a subset of the `ActionEnum` defined in the Vendia Share [control plane API](https://www.vendia.com/docs/share/share-graphql-schema#vendia-share-graphql-schema-reference). Further, you'll notice that each Action defined corresponds to a user-specific query or mutation available through the API.

<table>
  <tr>
    <td><strong>Action</strong></td>
    <td><strong>GraphQL Query or Mutation Operation</strong></td>
  </tr>
  <tr>
    <td>UNI_CREATE</td>
    <td>register</td>
  </tr>
  <tr>
    <td>UNI_DELETE</td>
    <td>destroy</td>
  </tr>
  <tr>
    <td>UNI_RESET</td>
    <td>reset</td>
  </tr>
  <tr>
    <td>UNI_JOIN</td>
    <td>join</td>
  </tr>
  <tr>
    <td>UNI_INVITE</td>
    <td>invite</td>
  </tr>
  <tr>
    <td>UNI_DELETE_NODE</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>UNI_GET</td>
    <td>getUni, listUnis, getNode</td>
  </tr>
  <tr>
    <td>UNI_EVOLVE_SCHEMA</td>
    <td>evolve</td>
  </tr>
  <tr>
    <td>UNI_QUERY</td>
    <td>NA - future use</td>
  </tr>
  <tr>
    <td>UNI_MUTATE</td>
    <td>NA - future use</td>
  </tr>
</table>

There are a different set of [Resource](https://www.vendia.com/docs/share/rbac#uni-formats) formats that are permitted for Uni management purposes. The formats can be used to describe one or more Unis in a single statement. These are the Unis against which an Action from above can act upon.


#### Examples
We've created [a set of examples](https://github.com/vendia/examples/tree/main/features/share/access-controls/uni-access-controls) to demonstrate how Uni Controls can be viewed and managed and the implications of their settings on Uni management operations. These include invocation of control plane APIs using the [Vendia Share CLI](https://www.vendia.com/docs/share/cli) and a GraphQL client.


### Node Access Controls

#### Purpose
Node Access Controls authorize requests to a specific node's GraphQL API. They can be thought of as the "coarse-grained" authorization to the GraphQL API. They act as an enforcement point, permitting or denying every request. Whether that authorization mechanism is direct (e.g. performed by Vendia Share) or indirect (e.g. delegated to another authorization service), the Node Access Controls are responsible for preventing unauthorized API access.


#### Approach
A Vendia Share Uni contains one or more nodes. Each node maintains its own authentication and authorization configuration, allowing authorization approaches across nodes to differ while still retaining a shared source of truth across nodes in the form of a serverless distributed ledger.

The GraphQL API that provides access to the serverless distributed ledger available on a node is protected by the Node Access Control configured when a node is created. Each participant in a Uni can select a different authorization scheme, depending on their authorization preferences.

<figure>
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783..151488925-b368c853-1064-4a69-861e-565bed98acc8.png" />
  <figcaption><b>Figure 4</b> - <i>Node Access Controls in the Vendia Share Data Plane</i></figcaption>
</figure>

Figure 4 depicts a two-node Uni, each with different [authorization settings](https://www.vendia.com/docs/share/node-access-control#api-access) configured. This Uni topology is common within a single organization and across organizations.

Within a single organization, it may be preferable to create a two-node Uni to isolate internal (i.e. private) and external (i.e. public) interfaces to Share. For example, the internal node might use the `IAM` authorization setting, permitting cross-account access between their existing AWS account and the [Vendia Share account created](https://aws.amazon.com/blogs/developer/how-vendia-leverages-the-aws-cdk-to-dynamically-provision-cloud-infrastructure/) to host their node. The external node might instead use `COGNITO` to leverage an existing [user pool](https://aws.amazon.com/cognito/) for their external user accounts.

Across organizations, each participant is likely to have a unique set of authorization requirements and existing solutions. Giving each participant the ability to use their existing solutions without impacting the other is one of the key benefits of a decentralized platform like Vendia Share.


#### Examples
We've created a [set of examples](https://github.com/vendia/examples/tree/main/features/share/access-controls/node-access-controls) to demonstrate how Node Access Controls can be configured and the implications of their settings on clients interfacing with a node's GraphQL API.


### Data access controls

#### Purpose
Data Access Controls allow a data writer to dictate access rights to the data they've written to a Uni. They can be thought of as the "fine-grained" authorization to the data.  These controls take the form of an Access Control List (ACL), and can be applied to either at the object (e.g., a `PurchaseOrder`) or property (e.g., just the `price` field within a `PurchaseOrder`) level of a data structure.

#### Approach
Unlike centralized architectures, where a single data owner dictates the data access permissions of all participants, Vendia Share's decentralized architecture empowers every data writer with the ability to control data access (i.e., to act as a data owner). Data access controls protect the ability to read and the ability to modify. While Node Access Controls may permit a GraphQL query to be received by a node, Data Access Controls may restrict the data values returned to the caller. Likewise, while Node Access Controls may permit a GraphQL mutation to be received by a node, Data Access Controls may restrict data modification if the caller is not permitted to do so because of an existing ACL.

<figure>
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783..151488924-bce6055b-9a1b-4fe3-804d-93eb5692e7d3.png" />
  <figcaption><b>Figure 5</b> - <i>Data Access Controls in the Vendia Share Data Plane</i></figcaption>
</figure>

Figure 5 depicts a two-node Uni, each with [data access controls](https://www.vendia.com/docs/share/fine-grained-data-permissions) applied to data stored in the ledger. This allows the writer of any record to dictate the read and write permissions of other nodes, at the record or field level.

##### Key terminology
* **Object** - An entity that can written to Vendia Share, consisting of one or more properties, including an optional `acl` property
* **Path** - An optional path to a specific property within the object being protected by an ACL
* **Principal** - A node in the Uni, against which an ACL will be applied
* **Operation** - An action a Principal can take (e.g. `READ`) on the object or property specified
* **ACL** - The combination of Principal, Operation, and (optionally) Path, with an association to a specific Object

Data Access Controls are a very important and deep topic. Check out the [docs](https://www.vendia.com/docs/share/fine-grained-data-permissions) for more information and this [blog post](https://www.vendia.com/blog/sharing-data-with-fine-grained-control) for a concrete scenario that will help you better understand the full set of capabilities they enable.

#### Examples
We've also created a [set of examples](https://github.com/vendia/examples/tree/main/features/share/access-controls/data-access-controls) to demonstrate how Data Access Controls can be configured and the implications on the ability for other participants to read and write data using their node's GraphQL API.

## Learn more
Using the access controls outlined above, participants will quickly grow comfortable sharing more data, with more fellow participants, with confidence.  Increasing data sharing can unlock the participants' ability to optimize their collective operations, explore new business models, and maximize the value of their real-time data. Vendia Share's existing controls allow for a rich set of protections to be established before, during, and after a Uni is created to encourage secure data sharing. These controls are often a key element to participants becoming comfortable with the notion of _sharing with control_.

Explore our [FAQs](https://www.vendia.com/docs/share/faq) and take a closer look at real-time data sharing [use cases](https://www.vendia.com/use-cases). 
