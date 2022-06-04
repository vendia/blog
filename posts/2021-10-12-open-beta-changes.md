---
title: "Open Beta Changes"
description: "Our forthcoming Open Beta milestone will unveil a collection of new features and enhancements, many of which originated from customer outreach and user feedback."
date: "2021-10-12"
categories:
  - announcements
  - vendia share
authors:
  - James Gimourginas
  - Brian McNamara
---

## Updates
_This post has been updated since it was first published._

* **10/15/2021** - Section Added - [Requiring Authorizer Type During Uni Creation](#requiring-authorizer-type-during-uni-creation)
* **10/29/2021** - Section Updated - [GraphQL Schema and Type Improvements](#graphql-schema-and-type-improvements)

## Overview

Vendia Share was unveiled in the summer of 2020 and adoption has steadily increased ever since. As we reach new customers, address more use cases, and span additional industries, we continuously look for opportunities to improve our product and the development experience for all those using the platform. Our forthcoming Open Beta milestone, anticipated later in Q4, will unveil a collection of new features and enhancements, many of which originated from customer outreach and user feedback.

We value the experience of our current and future customers and, while we strive to avoid backwards incompatible changes at all costs, we also recognize there are times when modifying a platform feature now will save our customers countless hours in the future. In preparation for the forthcoming Open Beta milestone, we've made the choice to address several known issues in ways that will not be backwards compatible. We're confident these changes, once released, will make for a significantly better experience for current and future customers. This includes:

* **Improved GraphQL Schema and Type Names** - Improved naming conventions, naming consistency, and customer naming collision avoidance
* **Increased GraphQL Type Support** - Expanded support for native GraphQL types (e.g. enums) and their validations 
* **Removal of Secure Message Feature** - Superseded by [fine-grained data access controls](https://www.vendia.net/blog/sharing-data-with-fine-grained-control), which offer a much richer set of data protection features

To create a new Uni that has access to these improvements, no further action is required. Create a new Uni [as you normally would](https://www.vendia.net/docs/share/uni-creation) and you'll have access to the latest and great features of Vendia Share. [Our documentation](https://www.vendia.net/docs/share) has been updated to reflect all of the recent changes so please read through carefully as you get reacclimated with Share.

The remainder of this post focuses on the Vendia Share client changes that may be required to access a Uni using the latest and greatest features of Vendia Share. The exact changes required will depend on the Vendia Share features and fields used and referenced by your clients. This post is a comprehensive guide to help you identify the items that require a change.

If you have questions as you prepare for this migration, please reach out to us through our existing customer support channels or at [support@vendia.net](mailto:support@vendia.net).

## GraphQL Schema and Type Improvements 

_Examples in this section were updated on 10/29/2021 to account for additional future proofing type collision updates._

GraphQL is a primary interface for Vendia Share clients - both synchronous and asynchronous - and making that interface as simple, consistent, and descriptive as possible is our goal.

Vendia Share accepts a user-provided [data model](https://www.vendia.net/docs/share/data-modeling) and generates a GraphQL interface as part of [Uni creation](https://www.vendia.net/docs/share/uni-creation).  The generated GraphQL API includes [GraphQL types](https://graphql.org/learn/schema/) that reflect the properties provided in the user-provided data model _as well as_ Vendia-provided types related to Node and Uni settings and features.

The combination of a user-provided data model and Vendia-provided types can, in certain situations, result in type collisions.  Further,  the risk of type collisions increases as more customers adopt more complex data models.

We have taken a new approach to type naming conventions to eliminate the potential for user/Vendia type collisions, allow users to work effectively with complex schemas, and reduce the potential for customer breaking changes that arise from schema evolution.  This change may result in breaking changes to client code that currently references a generated GraphQL type name.  However, future type name changes should not be necessary once client code is updated to leverage the new type names.  This will remain true even as the user-provided data model or Vendia-provided types evolve in the future.

The schema and type improvements can be categorized across a few key change areas.

### Change Areas

* **Adopting camelCase GraphQL field names** - We've modified our internal JSON Schema 7 to GraphQL Schema compiler to produce camelCase field names. This will provide a more standard GraphQL interface and should allow GraphQL client tools to work more seamlessly with Share.
* **Prefixing all Vendia fields with a _** - We've modified our internal GraphQL Schema generator to prefix all Vendia-created field names with an underscore (`_`). This is now consistently applied across all fields, including the `id` (now `_id`) field as well as filter conditionals (`_and`, `_or`, and `_not`). This will make the intention of each field clearer and will help avoid field name collisions.
* **Adding an "_owner" field to Files and Folders** - We've added a new field called `_owner` to the File and Folder entities provided by Share. This will help more easily identify the creator of a File or Folder and will also enable delegation of ownership in the future.
* **Renaming fields and updating types** - We've renamed fields that historically weren't easily understood. We've also improved our support of native GraphQL types, such as enums. These two improvements together will allow for a first-class GraphQL integration experience for new and existing users.
* **Adopting a new naming convention for Vendia types** - We've changed the naming conventions of Vendia types to include a Vendia-specific prefix to definitions, $defs, objects, arrays, and enumerations.  This will increase consistency among Vendia-provided type names and prevent user/Vendia type name collisions.
* **Adopting a new naming convention for User types** - We've changed the naming conventions of user-provided types to include a namespace prefix to definitions, $defs, objects, arrays, and enumerations.  This, along with the change above, will prevent user/Vendia type name collisions.  Further, it enables users to import additional schema files without the risk of breaking changes or collisions, greatly increasing the complexity of the data models Vendia Share can support.

The remainder of this section outlines how the change areas above impact existing Vendia and User types.

In addition to these type name changes, equivalent changes have been applied to corresponding `Query`, `Mutation`, and `Subscription` operations.  Similar changes have been made to related, Vendia-generated types, such as `**Input`, `**Result`, `**Connection`, `**Partial`, among others.  

Remember, you can use [GraphQL introspection](https://graphql.org/learn/introspection/) against your Uni's GraphQL endpoint to retrieve a complete GraphQL schema for your Uni at any time.

### Change Areas Applied to Blocks

#### _Block Type

The previous `_Block` type is now modeled as `Vendia_Block`:

```graphql
type Vendia_Block {
    _id: ID!
    _owner: String
    blockHash: String!
    blockId: String!
    blockSchemaVersion: String
    commitTime: String!
    previousBlockHash: String!
    previousBlockId: String
    previousRedactedBlockHash: String!
    redactedBlockHash: String!
    status: Vendia_Block_statusEnum
    transactions: [Vendia_Block_transactions_transactionsItem]!
}
```
In addition to type naming and camelCase field modifications, changes include:

* **_id** - Includes the "_" prefix
* **_owner** - New field, the owner
* **status** - References a new type
* **transactions** - Replaces "_TX" and references a new type

#### _Block_statusEnum Type

The new `Vendia_Block_statusEnum` type is modeled as:

```graphql
enum Vendia_Block_statusEnum {
    APPLYING
    COMMITTED
    FAILED
}
```

#### Vendia_Block_transactions_transactionsItem Type

The previous `_TX_element` type is now modeled as `Vendia_Block_transactions_transactionsItem`:

```graphql
type Vendia_Block_transactions_transactionsItem {
    _id: String!
    _owner: String
    hash: String!
    mutations: [String]!
    redactedHash: String
    signature: String
    submissionTime: String!
    version: String
}
```
In addition to type naming and camelCase field modifications, changes include:

* **_id** - Includes the "_" prefix and replaces "TxId"
* **_owner** - Includes the "_" prefix
* **hash** - Replaces "TxHash"
* **redactedHash** - Replaces "RedactedTxHash"
* **signature** - Replaces "sig" 

#### Vendia Generated Types

As mentioned above, Vendia generated type names have changed.  This includes Vendia-generated types, such as `**Input`, `**Result`, `**Connection`, and `**Partial` types, among others.

For example, the previous `Block_Result` type is now modeled as `Vendia_Block_Result_` (note the trailing `_`):

```graphql
type Vendia_Block_Result_ {
    error: String
    result: Vendia_Block
}
```

### Change Areas Applied to Files and Folders

#### _File Type

The previous `_File` type is now modeled as `Vendia_File`:

```graphql
type Vendia_File {
    _id: ID!
    _owner: String
    copyStrategy: Vendia_File_copyStrategyEnum
    createdTime: String
    destinationKey: String!
    etag: String
    fileVersion: String
    read: [String]
    sourceBucket: String!
    sourceKey: String!
    sourceRegion: String!
    sourceVersion: String
    temporaryUrl: String
    updatedTime: String
    write: [String]
}
```

In addition to type naming and camelCase field modifications, changes include:

* **_id** - Includes the "_" prefix
* **_owner** - Includes the "_" prefix
* **copyStrategy** - References a new type
* **createdTime** - Replaces "CreatedAt"
* **updatedTime** - Replaces "UpdatedAt"

#### Vendia_File_copyStrategyEnum Type

The new `Vendia_File_copyStrategyEnum` type is modeled as:

```graphql
enum Vendia_File_copyStrategyEnum {
    ALWAYS
    NEVER
    ON_ACCESS
}
```

#### _Folder Type

The previous `_Folder` type is now modeled as `Vendia_Folder`:

```graphql
type Vendia_Folder {
    _id: ID!
    _owner: String
    copyStrategy: Vendia_Folder_copyStrategyEnum
    createdTime: String
    name: String!
    parent: String
    read: [String]
    updatedTime: String
    write: [String]
}
```

In addition to type naming and camelCase field modifications, changes include:

* **_id** - Includes the "_" prefix
* **_owner** - Includes the "_" prefix
* **copyStrategy** - References a new type
* **createdTime** - Replaces "CreatedAt"
* **updatedTime** - Replaces "UpdatedAt"

#### Vendia_Folder_copyStrategyEnum Type

The new Vendia_Folder_copyStrategyEnum type is modeled as:

```graphql
enum Vendia_Folder_copyStrategyEnum {
    ALWAYS
    NEVER
    ON_ACCESS
}
```

### Change Areas Applied to Transactions

The previous `_Transaction` type is now modeled as `Vendia_Transaction`:

```graphql
type Vendia_Transaction {
    _id: String
    _owner: String!
    submissionTime: String!
    transactionId: String
    version: String!
}
```

In addition to type naming and camelCase field modifications, changes include:

* **_id** - Includes the "_" prefix
* **_owner** - Replaces "node_owner"
* **submissionTime** - Replaces "submission_time"
* **transactionId** - Replaces "tx_id"
* **version** - Replaces "tx_version"

#### Vendia Generated Types

As mentioned above, Vendia generated type names have changed.  This includes Vendia-generated types, such as `**Input`, `**Result`, `**Connection`, and `**Partial` types, among others.

For example, the previous `File_Result` type is now modeled as `Vendia_File_Result_` (note the trailing `_`):

```graphql
type Vendia_File_Result_ {
    error: String
    result: Vendia_File
}
```

### Change Areas Applied to DeploymentInfo

#### _DeploymentInfo Type

The previous `_DeploymentInfo` type is now modeled as `Vendia_DeploymentInfo`:

```graphql
type Vendia_DeploymentInfo {
    _id: ID!
    _owner: String
    consensusDefinitionHash: String!
    deploymentTime: String!
    versionTag: String!
}
```

In addition to type naming and camelCase field modifications, changes include:

* **_id** - Includes the "_" prefix
* **_owner** - New field, the owner

#### Vendia Generated Types

As mentioned above, Vendia generated type names have changed.  This includes Vendia-generated types, such as `**Input`, `**Result`, `**Connection`, and `**Partial` types, among others.

For example, the previous `DeploymentInfo_Result` type is now modeled as `Vendia_DeploymentInfo_Result_` (note the trailing `_`):

```graphql
type Vendia_DeploymentInfo_Result_ {
    error: String
    result: Vendia_DeploymentInfo
}
```

### Change Areas Applied to UniInfo

#### _UniInfo Type

The previous `_UniInfo` type is now modeled as `Vendia_UniInfo`:

```graphql
type Vendia_UniInfo {
    _owner: String
    createdTime: String
    localNodeName: String
    name: String!
    nodes: [Vendia_UniInfo_nodes_nodesItem]!
    schema: String!
    schemaNamespace: String
    sku: String
    status: String
    updatedTime: String
}
```

In addition to type naming and camelCase field modifications, changes include:

* **_owner** - New field, the owner
* **nodes** - References a new type

#### Vendia_UniInfo_nodes_nodesItem Type

The new `Vendia_UniInfo_nodes_nodesItem` type is modeled as:

```graphql
type Vendia_UniInfo_nodes_nodesItem {
    bucketName: String
    description: String
    name: String!
    region: String!
    status: String
    temporaryCredentials: Vendia_UniInfo_nodes_nodesItem_temporaryCredentials
    userEmail: String
    userId: String!
    vendiaAccount: Vendia_UniInfo_nodes_nodesItem_vendiaAccount
}
```

In addition to type naming and camelCase field modifications, changes include:

* **temporaryCredentials** - References a new type
* **vendiaAccount** - References a new type

#### Vendia_UniInfo_nodes_nodesItem_temporaryCredentials Type

The new `Vendia_UniInfo_nodes_nodesItem_temporaryCredentials` type is modeled as:

```graphql
type Vendia_UniInfo_nodes_nodesItem_temporaryCredentials {
    uploadFile: Vendia_UniInfo_nodes_nodesItem_temporaryCredentials_uploadFile
}
```

In addition to type naming and camelCase field modifications, changes include:

* **uploadFile** - References a new type

#### Vendia_UniInfo_nodes_nodesItem_temporaryCredentials_uploadFile Type

The new `Vendia_UniInfo_nodes_nodesItem_temporaryCredentials_uploadFile` type is modeled as:

```graphql
type Vendia_UniInfo_nodes_nodesItem_temporaryCredentials_uploadFile {
    accessKeyId: String
    expiration: String
    secretAccessKey: String
    sessionToken: String
}
```

#### Vendia_UniInfo_nodes_nodesItem_vendiaAccount Type

The new `Vendia_UniInfo_nodes_nodesItem_vendiaAccount` type is modeled as:

```graphql
type Vendia_UniInfo_nodes_nodesItem_vendiaAccount {
    accountId: String!
    csp: String!
    org: String
    userId: String
}
```

In addition to type naming and camelCase field modifications, changes include:

* **csp** - New field, the cloud service provider

#### Vendia Generated Types

As mentioned above, Vendia generated type names have changed.  This includes Vendia-generated types, such as `**Input`, `**Result`, `**Connection`, and `**Partial` types, among others.

For example, the previous `UniInfo_Result` type is now modeled as `Vendia_UniInfo_Result_` (note the trailing `_`):

```graphql
type Vendia_UniInfo_Result_ {
    error: String
    result: Vendia_UniInfo
}
```

### Changes Applied to Settings

#### _Settings Type

The previous `_Settings` type is now modeled as `Vendia_Settings`:

```graphql
type Vendia_Settings {
    _owner: String
    apiSettings: Vendia_Settings_apiSettings
    aws: Vendia_Settings_aws
    blockReportEmails: [String]
    blockReportWebhooks: [String]
    deadLetterEmails: [String]
    deadLetterWebhooks: [String]
    resourceMapKeys: [String]
    resourceMapValues: [String]
}
```

In addition to type naming and camelCase field modifications, changes include:

* **_owner** - New field, the owner
* **apiSettings** - References a new type
* **aws** - References a new type

#### apiSettings Type

The previous `apiSettings` type is now modeled as `Vendia_Settings_apiSettings`:

```graphql
type Vendia_Settings_apiSettings {
    apiKeys: [Vendia_Settings_apiSettings_apiKeys_apiKeysItem]
    auth: Vendia_Settings_apiSettings_auth
}
```

In addition to type naming and camelCase field modifications, changes include:

* **apiKeys** - References a new type
* **auth** - References a new type

#### Vendia_Settings_apiSettings_apiKeys_apiKeysItem Type

The new `Vendia_Settings_apiSettings_apiKeys_apiKeysItem` type is modeled as:

```graphql
type Vendia_Settings_apiSettings_apiKeys_apiKeysItem {
    usagePlan: Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan
    value: String
}
```

In addition to type naming and camelCase field modifications, changes include:

* **usagePlan** - References a new type

#### Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan Type

The new `Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan` type is modeled as:

```graphql
type Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan {
  quotaSettings: Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_quotaSettings
  throttleSettings: Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_throttleSettings
}
```

#### Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_quotaSettings Type

The new `Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_quotaSettings` type is modeled as:

```graphql
type Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_quotaSettings {
  limit: Float
  offset: Float
  period: Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_quotaSettings_periodEnum
}
```

#### Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_quotaSettings_periodEnum Type

The new `Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_quotaSettings_periodEnum` type is modeled as:

```graphql
enum Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_quotaSettings_periodEnum {
  DAY
  MONTH
  WEEK
}
```

#### Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_throttleSettings Type

The new `Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_throttleSettings` type is modeled as:


```graphql
type Vendia_Settings_apiSettings_apiKeys_apiKeysItem_usagePlan_throttleSettings {
  burstLimit: Float
  rateLimit: Float
}
```

#### Vendia_Settings_apiSettings_auth Type

The new `Vendia_Settings_apiSettings_auth` type is modeled as:

```graphql
type Vendia_Settings_apiSettings_auth {
    allowedAccounts: [String]
    authorizerArn: String
    authorizerType: Vendia_Settings_apiSettings_auth_authorizerTypeEnum
}
```

In addition to type naming and camelCase field modifications, changes include:

* **authorizerType** - References a new type

#### Vendia_Settings_apiSettings_auth_authorizerTypeEnum Type

The new `Vendia_Settings_apiSettings_auth_authorizerTypeEnum` is modeled as:

```graphql
enum Vendia_Settings_apiSettings_auth_authorizerTypeEnum {
    API_KEY
    COGNITO
    CUSTOM
    IAM
    VENDIA_USER
}
```

#### Vendia_Settings_aws Type

The new `Vendia_Settings_aws` type is modeled as:

```graphql
type Vendia_Settings_aws {
    blockReportFirehoses: [String]
    blockReportLambdas: [String]
    blockReportSQSQueues: [String]
    dataDogMonitoring: Vendia_Settings_aws_dataDogMonitoring
    deadLetterLambdas: [String]
    deadLetterSQSQueues: [String]
    lambdaIngressAccounts: [String]
    s3ReadAccounts: [String]
    sqsIngressAccounts: [String]
}
```

#### Vendia_Settings_aws_dataDogMonitoring Type

The new `Vendia_Settings_aws_dataDogMonitoring` type is modeled as:

```graphql
type Vendia_Settings_aws_dataDogMonitoring {
    ddApiKey: String
    ddExternalId: String
    ddLogEndpoint: String
    ddSendLogs: Boolean
}
```

#### Vendia Generated Types

As mentioned above, Vendia generated type names have changed.  This includes Vendia-generated types, such as `**Input`, `**Result`, `**Connection`, and `**Partial` types, among others.

For example, the previous `Settings_Result` type is now modeled as `Vendia_Settings_Result_` (note the trailing `_`):

```graphql
type Vendia_Settings_Result_ {
    error: String
    result: Vendia_Settings
}
```

### Changes Applied to User Types

#### JSON Schema types

Types defined in the user's JSON schema are now prefixed with `<UserNamespace>_`:

```graphql
type MyNamespace_MyUserType {
    myStringField: String
    myFloatField: Float
}
```

The example shown assumes `MyNamespace` is the value of `<UserNamespace>`.  The value will default to `Self` is no namespace is provided.  User types must adhere to valid GraphQL characters `([a-zA-Z][a-zA-Z0-9]*)` and must not include an underscore (_) themselves.

#### JSON Schema definitions

Types defined in the user's JSON schema in the `definitions` section are now prefixed with `<UserNamespace>__definitions_`:

```graphql
type MyNamespace_MyUserType {
    myDefinitionsField: MyNamespace__definitions_MyDefinitionsType
    myStringField: String
}
```

The example shown assumes `MyNamespace` is the value of `<UserNamespace>`.  User types must adhere to valid GraphQL characters `([a-zA-Z][a-zA-Z0-9]*)` and must not include an underscore (_) themselves.

## GraphQL Type Improvements

Vendia Share GraphQL schema is automatically generated based on the provided JSON Schema when a Uni is first created. GraphQL is a primary interface for clients - both synchronous and asynchronous - and making that interface as simple, consistent, and descriptive as possible is our goal. The schema improvements can be categorized across a few key change areas.

### Change Areas

* **GraphQL Enumerations** - We’ve modified our internal JSON Schema 7 to GraphQL Schema compiler to allow customers to use enumerations directly in queries rather than treating them as strings. This will provide a more standard GraphQL interface and should allow GraphQL client tools to work more seamlessly with Share.
* **GraphQL Filters** - Previously, Share modeled enumerations as strings. Share now offers a consistent and GraphQL-centric approach to querying for or filtering enumerated values.

### Change Areas Applied to GraphQL Enumerations

GraphQL Enumerations (enums) are a special kind of scalar that is restricted to a specified set of values. Vendia Share customers will continue to model enums in JSON Schema using the [enum keyword](http://json-schema.org/understanding-json-schema/reference/generic.html#enumerated-values). We’ve modified our internal JSON Schema 7 to GraphQL Schema compiler to produce GraphQL enums that correspond to those modeled in the JSON Schema 7. This will affect how GraphQL queries and mutations involving enums are written.

For example, the sample schema file in [Vendia's simple product catalog quick start](https://www.vendia.net/docs/share/quickstart/simple-product-catalog) shows how a product's size can be constrained to a fixed set of values - "S", "M", "L", and "XL". The way you model your enum in the schema file doesn't change. However, the way you insert your data when enums are used changes.

Previously, adding a product required a query similar to the following:

```graphql
addProduct(name: "Awesome shirt", sku: "abc123", price: 10, size: "XL") {id}
```

Now, adding a product requires changing the size attribute from a string to a valid enum value.

```graphql
addProduct(name: "Awesome shirt", sku: "abc123", price: 10, size: XL) {id}
```

### Change Areas Applied to GraphQL Filters

Using the same example as above, we can execute a query and filter results based on a product's size.

Previously, filtering for a product required a query similar to the following:

```graphql
listProducts( filter: { size: { eq: "XL" } } ) { Products { name sku price size } }
```

Now, filtering for a product requires changing the size attribute from a string to a valid enum value.

```graphql
listProducts( filter: { size: { eq: XL } } ) { Products { name sku price size } }
```

This also addresses a source of confusion as it relates to consistent enumeration support in Share. While Share previously allowed enumerations to be modeled in JSON Schema 7, that modeling did not apply to the generated GraphQL schema. This would often lead users to attempt to filter by size (using the example above) like this `{size: XL}` only to receive a result they did not expect.

## Secure Message Feature Removal

Vendia Share Unis are designed to make it easy to share data and code across companies, regions, and clouds. However, sometimes it's appropriate to restrict information to a subset of participants. Secure messaging was introduced to address this need. However, over the past year, we heard from customers that they would rather see this capability exposed when writing or updating data through standard GraphQL mutations. We introduced fine-grained data permissions to address this need. This capability allows data producers to limit which participants can take action on data written to a Uni.

### Change Areas

* **Removal of Secure Messaging** - We've updated Vendia Share to remove the Secure Messaging feature from the platform.

### Change Areas Applied to Secure Messaging

We've removed secure messaging in favor of fine-grained data permissions. There are several advantages to using this capability. Secure messaging only allows for a message to be sent to one or more recipients; the data contained in the message is not written to the shared data model. It is not available to be read, updated, or deleted at a later point. In contrast, data written with fine-grained permission is stored in your model. As such, it is available to be read, updated, or deleted at a later point. In addition, permissions can be updated at any time to change the principal, path, or operations allowed on the data as your data sharing needs evolve.

Please refer to our [blog post](https://www.vendia.net/blog/sharing-data-with-fine-grained-control) and [product documentation](https://www.vendia.net/docs/share/fine-grained-data-permissions) for how to make use of Share's fine grained data access controls.

## Requiring Authorizer Type During Uni Creation

Vendia Share Unis are created via either the [Command Line Interface](https://www.vendia.net/docs/share/cli) or the [Web Console](https://share.vendia.net).  In either case, a [registration.json](https://www.vendia.net/docs/share/cli/guide#format-of-the-registration-schema-and-initial-state-files) file provides initial information about the Uni.

### Change Area

* **Requiring authorizerType** - We've updated Vendia Share to require clients to explicitly set a value for authorizerType when creating a Uni.  This change eliminates the prior implicit default authorizerType value of `API_KEY` when a Uni is created.  This will help ensure all users understand the authorizerType selected during Uni creation and will provide additional traceability back to the original `registration.json` file.

### Change Area Applied to Uni Creation

A `registration.json` file must now contain an `authorizerType` element within a Node's `settings`

```json
{
    "name": "test-BasicUni",
    "schema": "schema.json",
    "nodes": [
        {
            "name": "TestNode",
            "userId": "user@email.com",
            "region": "us-east-1",
            "settings": {
                "apiSettings": {
                    "auth": {
                        "authorizerType": "VENDIA_USER"
                    }
                }
            }
        }
    ]
}
```
**NOTE:** While `API_KEY` was our previous default when `authorizerType` was not explicitly set, we do not recommend `API_KEY` for production Unis. API keys are generally used to track or meter API usage but are not a secure authorization mechanism.  For production usage, please consider the [other authorization options](https://www.vendia.net/docs/share/node-access-control#how-to-set) available.
