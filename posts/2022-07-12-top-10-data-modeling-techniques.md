---
draft: false
title: 'The 10 data modeling techniques every Vendia user should know'
description: 'Step up your data modeling game to get the most value from Vendia Share.'
date: '2022-07-12'
categories:
- concepts
- tutorials
authors:
- James Gimourginas
---

One of Vendia Share's most powerful features gives you the ability to automatically convert a [data model](https://www.vendia.com/docs/share/data-modeling) into a production-grade, distributed application (called a [Universal Application](https://www.vendia.com/docs/share/dev-and-use-unis), or "Uni" for short) that’s composed of serverless public cloud resources. The data model input that Vendia Share accepts must follow the [JSON Schema specification](https://json-schema.org/draft/2020-12/json-schema-core.html). The Uni creation process takes that JSON Schema input and automatically generates a number of artifacts, including a GraphQL schema and its full implementation. In other words, the data model defined prior to Uni creation directly relates to the GraphQL interface you and your partners will leverage when integrating with the Uni.

This new [feature example](https://github.com/vendia/examples/tree/main/approaches/data-modeling) demonstrates ten powerful approaches that can be applied to the schema, either individually or together, when constructing a data model. In this post, we'll provide a high-level overview of each technique and why you should know it.

## Approach 1: Define Common Types

### Why
Definitions define a new type that can be reused across multiple objects and properties. This keeps your schema [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), increases readability, and ensures identical "things" adhere to the same standard syntax requirements. In turn, you improve the data quality of your Uni.

### How

Create a `definitions` section in your data model:

```json
"definitions": {
 "Name": {
   "type": "object",
   "properties": {
     "firstName": {
       "description": "Person's first name",
       "type": "string"
     },
     "lastName": {
       "description": "Person's first name",
       "type": "string"
     }
   }
}
```

Then, reference those reusable type definitions in properties:

```json
"employeeName": {
   "description": "Name of the employee",
   "$ref": "#/definitions/Name"
 }
```


## Approach 2: Define Access Control Lists

### Why

Data Access Controls allow a data writer to dictate access rights to the data they've written to a Uni. They can be thought of as the "fine-grained" authorization to the data. These controls take the form of an Access Control List (ACL), and they can be applied to either at the object (_e.g_., a Product) or property (_e.g._, just the margin field within a Product) level of a data structure. This is a powerful feature that allows partners to confidently share even potentially sensitive data with each other. Data Access Controls must be defined during original schema creation in order to be used in subsequent GraphQL mutations.


### How
The `x-vendia-acls` section defines two ACLs, one per entity that requires fine-grained access control protections - `Employee` and `Office`.

```json
"x-vendia-acls": {
   "EmployeeAcl": {
     "type": "Employee"
   },
   "OfficeAcl": {
     "type": "Office"
  }
}
```

There's nothing else to do. Vendia Share's JSON Schema-to-GraphQL compiler will generate an appropriate GraphQL type for the defined ACL and append it to the model of each entity (_e.g._, `Employee` and `Office`) so it is available alongside all other (explicitly defined) fields.

More information about Vendia Share's fine-grained data access controls, expressed as Access Control List (ACL) format, can be found [here](https://www.vendia.com/docs/share/fine-grained-data-permissions) and a detailed example of using them is [here](https://github.com/vendia/examples/tree/main/features/share/access-controls/data-access-controls).

## Approach 3: Define Indexes

### Why

An index can improve query performance if it’s applied to entities that have many records and to fields that are frequently used for filtering query results. With some forethought that analyzes both size and likely query patterns for a given data set, an index can decrease query latencies and increase throughput.


### How
The `x-vendia-indexes` shown below places an index on the `employeeId` field of the `Employee` entity and the `officeId` of the `Office` entity.

```json
"x-vendia-indexes": {
  "EmployeeIdIndex": {
    "type": "Employee",
    "property": "employeeId"
  },
  "OfficeIdIndex": {
    "type": "Office",
    "property": "officeId"
  }
}
```

For sufficiently large data sets, you will see lower query latencies when filtering on either of these now-indexed fields.

## Approach 4: Leverage Types

### Why

Selecting the most appropriate leverage type is an important part of [data modeling](https://www.vendia.com/docs/share/data-modeling). It allows you and your partners to maintain a high-quality single source of truth by constraining inputs appropriately when new data is added to a Uni.

Using appropriate types also help ensure the GraphQL interface of your Uni matches the needs of the developers using it. In other words, your data model directly impacts the "JSON Schema type input » GraphQL type output" conversions Vendia Share performs during Uni creation.

### How
The `type` attributes shown below are only a subset of [those supported](https://json-schema.org/understanding-json-schema/reference/type.html).

```json
"properties": {
  "officeId": {
    "description": "Unique identifier of the office",
    "type": {
      "$ref" : "#/definitions/OfficeId"
    }
  },
  "officeAddress": {
    "description": "Address of the office",
    "type": {
      "$ref" : "#/definitions/Address"
    }
  },
  "maxOccupancy": {
    "description": "Maximum number of employees allowed",
    "type": "integer"
  },
  "costType" : {
    "description": "Cost type for the office",
    "type": "string",
    "enum": ["LEASE", "MORTGAGE", "OWN", "OTHER"]
  },
  "monthlyCost": {
    "description": "Cost type for the office per month, if applicable",
    "type": "number"
  },
  "dateOpened": {
    "description": "Date the office opened",
    "type": "string",
    "format": "date"
  },
  "isFull": {
    "description": "Whether the office is at its max capacity",
    "type": "boolean"
  }
}
```

The types selected for each field cannot be modified after a Uni is created, so they are especially important to get right from the start.

## Approach 5: Leverage Formats

### Why

When using the `string` type, you may also want to apply one of the pre-defined `format` values [supported by JSON Schema](https://json-schema.org/understanding-json-schema/reference/string.html#built-in-formats). This not only makes the schema more understandable by your partners (who may be sharing data with you), it also adds another layer of syntax validation for all GraphQL mutations.

### How

The `date` value in the `format` attribute shown below is just one of many predefined formats available.

```json
"dateOpened": {
  "description": "Date the office opened",
  "type": "string",
  "format": "date"
}
```

The formats available to further restrict `string` fields are certainly helpful, but sometimes a custom format is needed.

## Approach 6: Leverage Patterns

### Why

Pre-defined formats are not always sufficient. For cases where a custom format is needed to restrict valid `string` field formats, a `pattern` can be defined.  A `pattern`, similar to the benefits of using `format`, makes your schema more understandable and adds an additional layer of syntax validation for all GraphQL mutation operations.

### How

The `pattern` value must be a valid JavaScript ([EMCA 262](https://www.ecma-international.org/publications/standards/Ecma-262.htm)) regular expression, as shown below.

```json
"state": {
  "description": "The state",
  "type": "string",
  "pattern": "((A[LKZR])|(C[AOT])|(D[EC])|(FL)|(GA)|(HI)|(I[DLNA])|(K[SY])|(LA)|(M[EDAINSOT])|(N[EVHJMYCD])|(O[HKR])|(PA)|(RI)|(S[CD])|(T[NX])|(UT)|(V[TA])|(W[AVIY]))"
},
"zipcode": {
  "description": "The zipcode",
  "type": "string",
  "pattern": "\\d{5}"
}
```

Any mutation that includes a field that has a `pattern` applied must match that pattern or the mutation will be deemed invalid and the mutation will be rejected.

## Approach 7: Define Required Fields

### Why

Often an object will be composed of many properties—some required, some optional. Using the required definition makes those expectations clear (through the schema) and enforced (when new mutations are submitted).

### How

The `Employee` entity in the [corresponding example](https://github.com/vendia/examples/tree/main/approaches/data-modeling) includes a `required` section to ensure all Employee records include at least a minimum set of fields.

```json
"required": [
  "employeeId",
  "employeeName",
  "employeeAddress",
  "managerId",
  "officeId"
]
```

Required fields are exactly that, and with a `required` definition in place, both you and your partners will improve your overall data quality at the point of data creation.

## Approach 8: Model Parent → Child and Child → Parent Relationships

### Why

One common data structure is an entity that "contains" other entities, often called a parent-child relationship. Unlike in relational schemas (_e.g._, SQL's DDL), parent-child relationships cannot be explicitly captured because of the non-relational nature of JSON Schema . However, the data model can still contain these relationships and, with the right application code, those relationships can be captured in the model as well.


### How

Consider an `Employee` entity that can be either a parent or a child or both. An `Employee` can manage one or more other employees, and that relationship is captured by the `employeeIds` field of the `Employee`.  In the case of the `Employee` entity, both the parent-child and child-parent relationships are maintained.

**Parent-Child Relationship**

```json
"employeeIds": {
  "description": "Unique identifier of the employees this person manages",
  "type": "array",
  "items": {
  "type": {
    "$ref" : "#/definitions/EmployeeId"
  }
}
```

**Child-Parent Relationship**

```json
"managerId": {
  "description": "Unique identifier of the employee's manager",
  "type": {
    "$ref" : "#/definitions/EmployeeId"
  }
}
```

With the parent-child and child-parent relationships in place for `Employee`, you now have several new application-level responsibilities:


* Every `Employee` must be assigned a manager (as captured by `managerId`) and every `managerId` provided must be valid (must be a valid `employeeId`)
* Every `Employee` may be assigned one or more direct reports (as captured by `employeeIds`) and the `employeeIds` values must be valid (must be a valid `employeeId`)

In return for that additional complexity when adding or updating `Employee` entities, you unlock a range of new queries and filters (some through GraphQL query filtering, some through client-side filtering, depending on the specific filter conditions):

* Find all employees who report to a specific manager; this can be either the list of `employeeId` (thanks to the parent-child relationship) or the full list `Employee` entities (thanks to the child-parent relationship)
* Find all managers/non-managers
* Find the managers with the most/least direct reports
* And many more combinations using the above with the other fields `Employee` provides for querying/filtering


## Approach 9: Model Aggregates

### Why

One limitation of GraphQL is its inherent lack of aggregation functions (_e.g._, count, sum, average, etc.). While those functions don't come out-of-the-box from GraphQL, with a bit of additional application code you can model and maintain those values at the application layer. This allows aggregates to be implemented in a single place and their results to be queryable by _all_ GraphQL clients.


### How

Consider an `Office` entity that includes one aggregate - `currentOccupancy` - and one helpful boolean value - `isFull`. The expectation is that any time a new `Employee` is added, its assigned `Office` will be updated as well (by application code) to reflect an increase in `currentOccupancy` and, optionally, an update to the `isFull` value.

```json
"currentOccupancy": {
  "description": "Current number of employees reporting to this office",
  "type": "integer"
},
"isFull": {
  "description": "Whether the office is at its max capacity",
  "type": "boolean"
}
```

While both values could be computed client-side by listing all `Employee` records assigned to a given `Office`, the aggregates make querying for that information simpler. You can now much more easily determine:

* How many offices are at capacity
* How many available seats are available per office
* How many total seats are available across all offices

## Approach 10: Leave Room to Evolve

### Why

Data models often evolve. As Uni participants grow, and as the fidelity of solutions increase over time, users to want to evolve the original data model used to create the Uni. An ideal solution allows users the agility to evolve as business or participant needs change.

### How

See the [complete writeup](https://www.vendia.com/blog/schema-evolution) on how Vendia Share's schema evolution feature can be applied.

## Final Thoughts
Balancing constraints (`type`, `format`, `pattern`, `required`) with future expansion flexibility (`share uni evolve`) can be a challenge. Often, this is more art than science. To validate you’ve achieved the right balance, collaborate and [review your data model with a Vendia SA](https://www.vendia.com/poc) as you get started with Vendia Share.
