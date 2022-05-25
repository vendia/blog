---
title: 'Applying Vendia Share Smart Contracts'
description: 'Examples of real-time data validation, computation, and enrichment'
date: '2022-05-25'
categories:
- concepts
- tutorials
authors:
- James Gimourginas
---

## Overview

Vendia Share enables companies to rapidly build applications that securely share data across departments, companies, and clouds.  When participants create a new Universal Application (or "Uni" for short) using Vendia Share, _sharing data_ is usually their first motivation.  Once participants have access to a real-time, shared source of truth, _acting on the data_ is almost always their next focus area.

There are many ways to act on the data using Vendia Share: auto-generated [GraphQL APIs](https://www.vendia.net/docs/share/graphql), event-driven [inbound and outbound integrations](https://www.vendia.net/docs/share/integrations), and, more recently, the introduction of [smart contracts](https://www.vendia.net/docs/share/smart-contracts).

Smart contracts allow participants to take action on data stored in a Uni in a predefined way, one that is versioned and ledgered for the improved transparency of all participants.  This allows predefined and versioned functions to be created by a single participant for the benefit of one or more participants.  Further, the ledgered nature of smart contracts provides an added level of transparency and auditability that the "off-chain" data processing approaches do not.  For example, smart contract invocations include a reference to the exact input, parameters, and source code used to produce an output.

Smart contracts can be used for a variety of purposes, including:

* **Data validation** - Making sure data is valid prior to its use by other participants
* **Data computation** - Calculating new data values using data shared by other participants
* **Data enrichment** - Enhancing data with additional information provided from an external system

In a recently published [smart contracts feature example](https://github.com/vendia/examples/tree/main/features/share/smart-contracts), we explore a set of smart contracts that includes a full-featured example of each of the smart contract types listed above.  The feature example explores a Uni with two participants: a Lender and a Servicer, working together to improve the home mortgage process.  The Lender creates new home loans on the Uni.  The Servicer manages a portfolio of home loans on the Uni. Both participants make use of smart contracts to automate their interactions and increase their operational transparency.

In this post, we'll look at the data validation smart contract from the feature example.  See the feature example itself for a complete step-by-step guide through all three smart contracts.


## Example - Data Validation Smart Contract

After the Lender and the Servicer create a Uni to share home loan information with each other, they want to maintain a high level of data quality.  Specifically, the Lender wants to ensure the Servicer is only able to view and act on validated loans.


### Defining the Validation Logic

The [schema](https://github.com/vendia/examples/blob/main/features/share/smart-contracts/uni_configuration/schema.json) for the Uni provides basic data validation based on the schema definition.  For example, `loanIdentifier` must be a 16-digit value, `originationDate` must be a valid date, and `originalInterestRate` must be a number between 0 and 100.  Vendia Share's GraphQL API implementation will reject inputs that are invalid with respect to the Uni's schema.  While basic data validations are necessary, they do not address the validation of _business rules_ that cannot be expressed through a pre-defined format or regular expression.

The Lender can use a smart contract to ensure more in-depth data validation occurs prior to the Servicer making use of the data.

Let's assume the Lender wants to perform two additional validations on every new loan added to the Uni.



1. **Origination Date Validation** - Ensuring `originationDate` is not a future date (i.e. a Loan can't exist if it hasn't yet been created)
2. **Original Unpaid Principal Balance Validation** - Assessing `originalUnpaidPrincipalBalance` validity based on the `borrowerCreditScore` (i.e. using a simple formula for this example to confirm the `originalUnpaidPrincipalBalance` is appropriate given the `borrowerCreditScore`)

Neither of these in-depth validations are feasible through the schema definition itself.  Both require dynamic validation using the data provided as part of a new Loan.


### Elements of a Smart Contract

The validation smart contract takes three important pieces of information as part of its definition: an `inputQuery`, an `outputMutation`, and the AWS Lambda function that executes the validation logic defined in the previous section.

The `inputQuery` retrieves information from the Uni and provides it as input during smart contract invocation.  The validation smart contract uses an `inputQuery` that retrieves the necessary fields for the loan to be validated, using a parameterized `loanIdentifier` that will be provided during smart contract invocation.

```gql
query ValidationInputQuery($loanIdentifier: String!) {
  list_LoanItems(filter: {loanIdentifier: {eq: $loanIdentifier}}) {
    _LoanItems {
      ... on Self_Loan {
        _id
        loanIdentifier
        borrowerCreditScore
        unpaidPrincipalBalance
        originationDate
      }
    }
  }
}
```

The AWS Lambda function uses the data provided by the `inputQuery`, applies the data validation logic, and returns an object containing the fields required by the `outputMutation`.

```js
/**
 * Performs a set of validations against a loan provided as part of the event input.
 *
 * @param event that contains a loan to be validated, among other fields
 * @returns Promise of an object that contains the validation results and ACL modifications, as expected by the associated smart contract's outputMutation
 */
exports.handler = async (event) => {

    let loan = {}
    let validationStatus
    let acls

    try {
        console.log("Event is", event)

        loan = event.queryResult.list_LoanItems._LoanItems[0]

        console.log("Loan is", loan)
        
        let isValid = isValidOrigination(loan.originationDate) &&
            isValidLoanAmount(loan.unpaidPrincipalBalance, loan.borrowerCreditScore)

        console.log("Validation function determined the loan" + (isValid ? " IS " : " IS NOT ") + "valid");

        if(isValid) {
            validationStatus = "VALID"
            acls = [
                { principal: {nodes: "LenderNode"}, operations: ["ALL", "UPDATE_ACL"] },
                { principal: {nodes: "ServicerNode"}, operations: ["READ"] }
            ]
        } else {
            validationStatus = "INVALID"
            acls = [
                {principal: {nodes: "LenderNode"}, operations: ["ALL", "UPDATE_ACL"]}
            ]
        }
    } catch (error) {
        console.error("Unexpected exception during validation", error)

        validationStatus = "ERROR"
        acls = [
            { principal: {nodes: "LenderNode"}, operations: ["ALL", "UPDATE_ACL"] }
        ]

    } finally {
        console.log("Returning " + validationStatus + " and " + acls + " for loan " + loan._id)

        return {
            id: loan._id,
            validationStatus: validationStatus,
            acl: acls
        }
    }
}

/**
 * True if originationDate is prior to now, false otherwise
 * @param originationDate of a loan
 * @returns {boolean} true if origination date isn't in the future, false if it is
 */
function isValidOrigination(originationDate) {
    return Date.parse(originationDate) < Date.now();
}

/**
 * True if balance is less than or equal to borrower's credit score multiplied by 1000
 * @param balance on the loan
 * @param creditScore of the borrower
 * @returns {boolean} true if credit score is sufficiently large for the balance provided, false otherwise
 */
function isValidLoanAmount(balance, creditScore) {
    //A very simplistic check, which can easily be replaced by a more complex algorithm
    return balance <= creditScore * 1000
}
```

The `outputMutation` maps the return value from the AWS Lambda function to a predefined mutation that will result in data being written back to the Uni.  The expected result of executing the validation smart contract is a change to a loan's `validationStatus` field and, only if validation was successful, a change to the loan's [data access controls](https://www.vendia.net/blog/multi-party-data-sharing-with-control#data-access-controls) to allow the Servicer to see the (now-validated) loan information.

```gql
mutation ValidationOutputMutation($id: ID!,  $validationStatus: Self_Loan_validationStatusEnum!, $acl: [Vendia_Acl_Input_!]) {
  update_Loan_async(
    id: $id, 
    input: {
      validationStatus: $validationStatus
    },
    aclInput: {
        acl: $acl
    }
  ) {
    error
  }
}
```


For more information on how to create a data validation smart contract, please refer to the step-by-step guide in the [feature example](https://github.com/vendia/examples/tree/main/features/share/smart-contracts).

### Invoking a Smart Contract

The data validation smart contract can be invoked programmatically or manually using the Vendia Share web application's Smart Contract view.

The [feature example](https://github.com/vendia/examples/tree/main/features/share/smart-contracts) demonstrates programmatic execution using a set of provided scripts.  For the rest of this post, we'll use the Vendia Share web application to make the invocation and results more visual.

From the **LenderNode** of the [Uni created](https://github.com/vendia/examples/tree/main/features/share/smart-contracts#step-1---create-a-universal-application) in the feature example, click the `Smart Contracts` widget to get a listing of all available smart contracts.

<figure>
    <img src="https://user-images.githubusercontent.com/85032783/170310807-9cf127d4-cfa0-4ed5-890b-a8500ac5f071.png" />
    <figcaption ><b>Figure 1</b> - <i>Smart Contract Listing</i></figcaption>
</figure>

Select the `validation-smart-contract` to view its details, including the ability to manually invoke the smart contract.  Next, click the `Invoke` button in the upper right and provide a valid `loanIdentifier`. The `loanIdentifier` provided is the value that will be sent to the parameterized `inputQuery` defined in the previous section.

<figure>
    <img src="https://user-images.githubusercontent.com/85032783/170310796-fc6cda7c-7530-44b2-898f-6fb26eef1eb1.png" />
    <figcaption ><b>Figure 2</b> - <i>Smart Contract Invocation</i></figcaption>
</figure>

By clicking `Invoke` the smart contract will be executed, obtaining loan data from the Uni using the `inputQuery`, providing that retrieved data to the AWS Lambda function so it can perform loan validation, and writing the validation result back to the Uni using the `outputMutation`.

The end result is:



* a Lender who is able to apply custom validation logic and ensure only validated loans are shared with other participants
* a Servicer able to confidently process the loans it has access to, knowing they are valid

<figure>
    <img src="https://user-images.githubusercontent.com/85032783/170310800-109bdd3c-f359-4021-9e9f-ec9d1420da31.png" />
    <figcaption ><b>Figure 3</b> - <i>Servicer's View of the Loan Validation Results</i></figcaption>
</figure>

Unlike other methods of event-driven data processing using Vendia Share, smart contracts not only produce the desired results but they also leave an auditable history (invocation and results) in the ledger.

<figure>
    <img src="https://user-images.githubusercontent.com/85032783/170310806-0567a4a9-cb22-40be-9ec7-9e9377ea430f.png" />
    <figcaption ><b>Figure 4</b> - <i>Smart Contract Ledger Entries</i></figcaption>
</figure>

Selecting one of the ledger entries provides more detail about the ledgered transaction.  For example, the output mutation generated by the validation smart contract can be seen in its entirety.

<figure>
    <img src="https://user-images.githubusercontent.com/85032783/170310802-af3ae615-2dc4-476a-bdf2-46b8caecdeea.png" />
    <figcaption ><b>Figure 5</b> - <i>Smart Contract Output Mutation Details</i></figcaption>
</figure>

## Conclusion

Smart contracts can be used for a variety of purposes, including data validation, computation, and enrichment.  The recently published [smart contract feature example](https://github.com/vendia/examples/blob/main/features/share/smart-contracts/README.md) provides a step-by-step guide to create and invoke a set of smart contracts, each demonstrating slightly different interaction patterns and smart contract composition approaches.  Using smart contracts allows data _and code _to be shared and ledgered for real-time awareness and full transparency across a network of Uni participants.
