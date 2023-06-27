---
draft: false
slug: data-protection-compliance-with-distributed-ledger-erasure
title: Data protection compliance with distributed ledger erasure
description: How to maintain data protection compliance (GDPR, CCPA, etc.) using Vendia's Data Erasure capabilities
date: 2023-06-21
authors:
  - ryan-green
categories:
  - product-and-technology
relatedPosts:
  - 2023-03-20-the-blockchain-emperors-new-clothes.md
seo:
  noindex: false
  description: How to maintain data protection compliance (GDPR, CCPA, etc.) using Vendia's Data Erasure capabilities
  title: Data protection compliance with distributed ledger erasure
createdBy: ryan-green
createdAt: 2023-06-21T20:00:26.992Z
updatedBy: ryan-green
updatedAt: 2023-06-21T20:00:26.992Z
id: 0bcf82ec-71ed-46cf-8a4e-aa92c35e0d2e
---

As data protection regulations continue to be enacted by governments around the world, 
data protection should be of critical importance for any organization handling personal data.

Regulations such as [General Data Protection Regulation](https://gdpr-info.eu) (GDPR) in the European Union and 
[California Consumer Privacy Act](https://oag.ca.gov/privacy/ccpa) (CCPA) in California provide a legal framework to ensure personal information is appropriately protected.

Maintaining compliance with these regulations is often non-trivial and places a significant burden on organizations in control
of personal information.

The Vendia Share platform was fundamentally designed around data protection principles. Requirements such
as [access control](https://www.vendia.com/blog/data-protection-approaches) and [permanent data erasure](https://www.vendia.com/docs/share/erasure) 
are built natively into the platform and distributed ledger.

This enables Vendia Share to provide a tamper-proof and verifiable distributed ledger 
while also enabling data controllers to easily stay in compliance with data protection regulations.

This article will discuss how Vendia Share's data erasure functionality is built in to the platform and how it can be used
to stay in compliance with data erasure regulations.

## Right to erasure

Both GDPR and CCPA include "right to erasure" requirements. That is, users can request to have personal information permanently erased
without undue delay.

[GDPR Article 17](https://gdpr-info.eu/art-17-gdpr/) states that "The data subject shall have the right 
to obtain from the controller the erasure of personal data concerning him or her without undue delay and the controller shall have the obligation to erase personal data without undue delay..."

In CCPA, [section 1798.105](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1798.105) states
that "A consumer shall have the right to request that a business delete any personal information about the consumer which the business has collected from the consumer"

Organizations acting as data controllers and using third party platforms as data processors must consider the platforms
ability to support timely and permanent data erasure in order to maintain compliance with these regulations.

## Data erasure in distributed ledgers

In many traditional systems, permanent data erasure is trivial. It is often as simple as issuing a SQL query to delete rows
or columns from a transactional database, or deleting a file from a file system or object store.

However, in distributed ledger systems the concept of permanent and irrevocable erasure is fundamentally
at odds with the design of such systems. Ledgers are by nature immutable. 

How can organizations stay in compliance when storing personal information in an immutable, append-only ledger?

A typical approach often involves client-side "crypto-shredding" where all personal information is encrypted
using an encryption key on the client before it is persisted to the ledger. Then if a user requests for information to be deleted, 
the data controller simply needs to delete the encryption key.

This approach, while conceptually simple, involves significant complexity in practice. For example, key management
becomes a major constraint. To support granular erasure of data on a field or person level may require 
the storage and management of large numbers of encryption keys. Secure storage of critical encryption keys in an external system
is a significant challenge in its own right, and retrieving the key and decrypting on read queries may have real performance impacts in practice.

## Vendia's approach to data erasure

Vendia Share provides an immutable, tamper-proof, and cryptographically verifiable distributed ledger.

However, unlike traditional blockchain solutions, Vendia Share includes data protection
capabilities built directly into the underlying ledger technology. 

Vendia's distributed ledger supports [fine-grained access control (redaction)](https://www.vendia.com/blog/data-protection-approaches)
as well as a novel approach to permanent and irrevocable data erasure.


### Vaulted tokenization
Vendia uses a _Vaulted Tokenization_ approach to support granular erasure while retaining the tamper-proof, verifiable, 
and immutable properties of the distributed ledger.

With this approach, user data stored in the ledger (mutations) are stored on-chain in a 
tokenized form whereby erasable fields are replaced with cryptographically hashed values (tokens).

Plaintext field values are stored in a chain-adjacent vault. Queries to the ledger will automatically detokenize the mutations, replacing the tokens with the corresponding plaintext value for fields that have not been erased.

When erased, plaintext values are permanently and irrevocably removed from the vault but 
historical data in the ledger itself is never modified. 
Values stored in the vault can be removed but never modified.

Transaction and block hashes are computed based on the tokenized form of the mutation containing cryptographic hashes of the erasable field values - thus the ledger remains immutable even if field are erased, and can be verified using the original tokenized form of the mutation.

Example of a mutation stored in the ledger with personal information replaced with tokenized values.
```graphql
mutation m {
   addSelf_Person(
      id: "0187bd97-0593-cb3e-9c76-b71438598915",
      input: {
        firstName: "$${1ab347b85ee537bd26b1246f6cdde3d8}",
        lastName: "$${2cb347b85ee537bd26b1246f6cdde34f}",
        identification: {
          type: "DRIVERS_LICENSE",
          number: "$${a3h347b85ee537bd26b1246f6cdde3d8}"
      }
    }) {error}
}
```

This approach is similar to the "crypto-shredding" technique mentioned above, but Vendia manages all of the complexity
of key management, encryption, decryption, and erasure with negligible impact on read/write performance.

## Erasing data in Vendia

Erasable fields must be declared in the Uni's schema using `x-vendia-erasable` definition.

e.g.
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://vendia.net/schemas/demos/basic_schema.json",
    "type": "object",
    "properties": {
        "Person": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "identification": {
                        "type": "object",
                        "properties": {
                            "type": {
                                "type": "string"
                            },
                            "number": {
                                "type": "string"
                            },
                            "aliases": {
                               "type": "array",
                               "items": {
                                 "type": "string"
                               }
                            }
                        },
                        "x-vendia-erasable": [
                            "number", 
                            "aliases"
                        ]
                    },
                    "firstName": {
                        "type": "string"
                    },
                    "lastName": {
                        "type": "string"
                    }
                },
                "x-vendia-erasable": [
                    "firstName",
                    "lastName"
                ]
            }
        }
    }
}
```

Once declared, Vendia will generate `erase` mutations for all data types with erasable fields.

Field-level erasure can then be performed using a simple GraphQL mutation:

```graphql
mutation erase {
  erase_Person(
    id: "0187bd97-0593-cb3e-9c76-b71438598915"
    input: {firstName: GLOBAL, lastName: GLOBAL, identification: {number: GLOBAL} }
  ) {
    result {
      _id
    }
  }
}
```

File data can be erased using `eraseVendia_File` mutation which will permanently erase **all** versions of the File from the CSP object store. i.e.
```graphql
mutation erase {
  eraseVendia_File(
    id: "0187bd97-0593-cb3e-9c76-b71438598915"
    eraseMode: LOCAL
    syncMode: NODE_COMMITTED
  ) {
    result {
      _id
    }
  }
}
```

Note that Vendia supports both `LOCAL` (current node) and `GLOBAL` (all nodes in Uni) [erasure modes](https://www.vendia.com/docs/share/erasure#local-vs-global-erasure).

[Permissions to erase](https://www.vendia.com/docs/share/erasure#managing-erasure-permissions) can be managed on a per-object basis.

## Auditability

Auditability is another important requirement for compliance regimes such as GDPR and CCPA. Vendia stores an immutable record
of start and completion for all erasure operations directly in the ledger.

i.e.
```graphql
mutation m {
    updateVendia_EraseTask(
        id: "0187c2e5-2e10-341c-12fe-5acb9251bb6d", 
        input: {
            completionTime: \"2023-04-27T13:26:53.645450791+00:00\", 
            status: SUCCESS
        }) {error}
}
```

## Masking

The Vendia Share ledger also supports Masking, which ensures that previously erased data can never be set 
again by further mutations to the object. The field
will be masked in subsequent mutations and treated as redacted. For globally erased fields it will be masked on all nodes.
For locally erased fields, it wil be masked on the nodes on which it has been locally erased.


## Conclusion

Data erasure capabilities should be a key consideration for data controllers managing personal information and requiring compliance with data protection regimes such as GDPR and CCPA. 
Vendia Share provides a fully compliant and easy to use data sharing solution that 
also provides the important properties of distributed ledgers.

