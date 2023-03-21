---
draft: false
title: "Real-Time cross-cloud data sharing"
description: "Understand event-driven processing using Vendia Share's new Azure capabilities with insights from James Gimourginas, Director of Solution Architecture and Customer Success."
date: '2022-01-04'
categories:
- architecture
authors:
- James Gimourginas
id: 'ddbf3341-2b4b-4e3a-bcfe-c291080d1f08'
---

## Updates
_This post has been updated since it was first published._

* **01/11/2022** - Check out this [comprehensive code example](https://github.com/vendia/examples/tree/main/integrations/eventing/share-to-azure-functions), from which the code snippets in this post were taken.

## Overview

Vendia Share is the real-time data cloud for rapidly building applications that securely share data across departments, companies, and clouds.  As we recently [announced](https://www.vendia.com/blog/announcing-new-features), Vendia Share now includes functionality that makes integrating real-time data with Microsoft Azure services easier than ever before.

The [maturity of real-time data sharing](https://www.vendia.com/blog/distributed-application-maturity-model) capabilities varies widely among organizations.  Less mature organizations still depend heavily on manual or batch processing for internal operations.  More mature organizations have created real-time, event-driven solutions for internal operations.  To date, the maturity of an organization's real-time data sharing capabilities for internal operations had little bearing on its real-time data sharing capabilities for _external operations with partners_.

For example, consider Organization A that adopts an event-driven microservices architecture for core systems and Organization B that still relies on error-prone batch processes.  Both organizations strive to share data in real time, but Organization B lacks the in-house experience to build such a system. The value of Organization A's investment is limited as soon as it attempts to collaborate with Organization B.  Whether the interaction among those organizations takes the form of periodic SFTP transfers (Organization B's only option) or point-to-point API interactions (Organization A's preference), neither duplicates the real-time, event-driven interactions from a shared source of truth which both organizations want to achieve.

As [partner ecosystems become central](https://www.bearingpointbeyond.com/en/insights/market-insights/partner-ecosystem/) to unlocking new business opportunities, it's imperative that organizations have an easy path toward joint real-time, event-driven solutions, regardless of their real-time data sharing maturity.  Further, it's equally important to allow organizations to make the most of its existing in-house real-time data sharing capabilities.  For example, collaboration between Organization A and Organization B should be able to leverage the substantial investment Organization A made to modernize its in-house systems.  More often than not, this means working seamlessly across organizational boundaries and across cloud service providers (CSPs), as it's common for organizations to adopt different CSPs while still wanting to work effectively together.

Vendia Share addresses those imperatives through the concept of a Universal Application (or Uni for short).  A Uni allows each party (what we call a Uni participant) to work from a single source of truth, removing the complexity of sharing data among parties while also streamlining the use of the data as it's shared.  "As it's shared" means applying real-time actions to real-time data, using an event-driven programming model.  It also means working across organizations no matter their choice and investment in differing CSPs.

In this blog post, we'll highlight the value of Vendia Share's new Azure capabilities from both a cross-cloud data sharing and event-driven programming perspective.  Consider the case of a Supplier (on AWS), working through a Distributor (on AWS), who delivers goods to a Retailer (on Azure).  When the Supplier makes an adjustment (say by changing the anticipated fulfilment date of an existing purchase order), both the Distributor and the Retailer would like to be made aware (and take action) immediately.

<figure>
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783147981825-f0e94c34-6488-4fd3-82f4-7ef8e00224a2.png" />
  <figcaption><b>Figure 1</b> - <i>A Supplier, Distributor, and Retailer reacting in real-time across clouds as changes to purchase orders occur</i></figcaption>
</figure>

In our example, we'll start by modifying the fulfillment date of a purchase order by executing a [GraphQL mutation](https://graphql.org/learn/queries/#mutations) against the Supplier's node in the Uni. That, in turn, will cause an event to flow to Retailer's node in the Uni and then to the Retailer's Azure environment, delivered to [Azure Event Grid](https://azure.microsoft.com/en-us/services/event-grid/). From there, an event-driven [Azure Function](https://azure.microsoft.com/en-us/services/functions/) within the Retailer's Azure environment will process the delivered event.

Now let's get started!

## Step 0 - Prerequisites

To replicate the Retailer's environment on Azure, we'll first need to:

* [Create a Vendia Share account](https://share.vendia.net/)
* [Create an Azure account](https://azure.microsoft.com/en-us/free/)
* Install the [Azure Command Line Interface](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) (CLI)
* Install the [Vendia Command Line Interface](https://www.vendia.com/docs/share/cli) (CLI)

## Step 1 - Create a Cross-Cloud Vendia Uni

The first step is to create a cross-cloud Uni for this example, with the following participants:

* A `Supplier` AWS Node (`us-east-2`)
* A `Distributor` AWS Node (`us-west-2`)
* A `Retailer` Azure Node (`eastus`)

This is accomplished using a `registration.json` file that defines one Node per Uni participant.  Each Node definition includes a `csp` (short for cloud service provider) and a `region`, which is [unique to each CSP](https://www.vendia.com/docs/share/cli/guide#supported-cloud-platforms-and-regions).  Using the example below, we're able to provision a multi-cloud, multi-region Uni that connects all three participants in just about 5 minutes.

> Note: Please refer to our docs for more information about the modeling Uni participants using [a registration file](https://www.vendia.com/docs/share/uni-creation#registration-file) or modeling data using [a schema file](https://www.vendia.com/docs/share/data-modeling#sample-registration-files).

1. Save the following as `registration.json`. Replace `<UNI_NAME>` with a name for your Uni and each `<USER_ID>` with the email address associated with your Vendia account.

    <details>
      <summary>registration.json Contents</summary>
    
      ```json
      {
        "name": "<UNI_NAME>",
        "schema": "inventory.schema.json",
        "initState": "initial-state.json",
        "nodes": [
          {
            "name": "Supplier",
            "userId": "<USER_ID>",
            "csp": "aws",
            "region": "us-east-2",
            "settings": {
              "apiSettings": {
                "auth": {
                  "authorizerType": "API_KEY"
                }
              }
            }
          },
          {
            "name": "Distributor",
            "userId": "<USER_ID>",
            "csp": "aws",
            "region": "us-west-2",
            "settings": {
              "apiSettings": {
                "auth": {
                  "authorizerType": "API_KEY"
                }
              }
            }
          },
          {
            "name": "Retailer",
            "userId": "<USER_ID>",
            "csp": "azure",
            "region": "eastus",
            "settings": {
              "apiSettings": {
                "auth": {
                  "authorizerType": "API_KEY"
                }
              }
            }
          }
        ]
      }
      ```
    </details>

1. Save the following file in the same directory as the last file as `inventory.schema.json`
   
    <details>
      <summary>inventory.schema.json Contents</summary>
    
      ```json
      {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$id": "http://vendia.com/schemas/demos/track-and-trace.json",
        "title": "Inventory Management",
        "description": "Managing inventory among supplier, distributor, and retailer",
        "type": "object",
        "properties": {
          "Product": {
            "description": "Product information",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "description": "Product name",
                  "type": "string"
                },
                "description": {
                  "description": "Product description",
                  "type": "string"
                },
                "sku": {
                  "description": "Product sku",
                  "type": "string"
                },
                "price": {
                  "description": "Product price",
                  "type": "number"
                },
                "supplierId": {
                  "description": "Supplier identifier",
                  "type": "string"
                }
              }
            }
          },
          "PurchaseOrder": {
            "description": "Purchase order information",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "orderId": {
                  "description": "Order identifier",
                  "type": "string"
                },
                "items": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "sku": {
                        "description": "Product sku",
                        "type": "string"
                      },
                      "quantity": {
                        "description": "Quantity purchased",
                        "type": "integer"
                      }
                    }
                  }
                },
                "created": {
                  "description": "When order was placed",
                  "type": "string",
                  "format": "date-time"
                },
                "updated": {
                  "description": "When order was last updated",
                  "type": "string",
                  "format": "date-time"
                },
                "expected": {
                  "description": "When order is expected to be fulfilled",
                  "type": "string",
                  "format": "date-time"
                },
                "fulfilled": {
                  "description": "When order was actually fulfilled",
                  "type": "string",
                  "format": "date-time"
                }
              }
            }
          }
        }
      }
      ```
    </details>

1. Save the following file in the same directory as the previous files as `initial-state.json`
    <details>
      <summary>initial-state.json Contents</summary>
    
      ```json
      {
        "Product": [
          {
            "name": "Widget 123",
            "description": "Description of Widget 123",
            "sku": "WDGT123",
            "price": 49.99,
            "supplierId": "Supplier123"
          },
          {
            "name": "Widget 456",
            "description": "Description of Widget 456",
            "sku": "WDGT456",
            "price": 149.99,
            "supplierId": "Supplier123"
          },
          {
            "name": "Widget 789",
            "description": "Description of Widget 789",
            "sku": "WDGT789",
            "price": 249.99,
            "supplierId": "Supplier123"
          }
        ],
        "PurchaseOrder": [
          {
            "orderId": "Supplier123-Distributor123-ABCDEFG",
            "items": [
              {
                "sku": "WDGT123",
                "quantity": 10
              }
            ],
            "created": "2021-11-20T09:15:44Z",
            "expected": "2021-12-03T00:00:00Z",
            "fulfilled": "2021-12-02T15:15:15Z"
          },
          {
            "orderId": "Supplier123-Distributor123-BCDEFGH",
            "items": [
              {
                "sku": "WDGT456",
                "quantity": 10
              },
              {
                "sku": "WDGT789",
                "quantity": 5
              }
            ],
            "created": "2021-12-02T14:10:02Z",
            "expected": "2021-12-12T00:00:00Z"
          },
          {
            "orderId": "Distributor123-Retailer123-ABCDEFG",
            "items": [
              {
                "sku": "WDGT123",
                "quantity": 1
              },
              {
                "sku": "WDGT456",
                "quantity": 5
              },
              {
                "sku": "WDGT789",
                "quantity": 2
              }
            ],
            "created": "2021-12-05T12:12:03Z",
            "expected": "2021-12-15T12:00:00Z"
          }
        ]
      }
      ```
    </details>

1. After moving back to your terminal, change directory into the directory containing the files created above.
1. Login to the Share CLI
    * `share auth login`
1. Create a Uni
    * `share uni create --config registration.json`
1. Wait about 5 minutes for the Uni to be created
    * `share uni get --uni <UNI_NAME>`
1. Proceed only after the Uni state has transitioned to `RUNNING`
    <details>
      <summary>Uni Get Output</summary>
    
      ```bash
      Getting <UNI_NAME> info...
      ┌─────────────────────┐
      │   Uni Information   │
      └─────────────────────┘
    
      Uni Name:    <UNI_NAME>.unis.vendia.net
      Uni Status:  RUNNING
      Node Count:  3
      Nodes Info:  ...
      ```
    </details>

## Step 2 - Create Azure Service Principal

A multi-cloud, multi-region Uni allows its participants - the Supplier, the Distributor, and the Retailer - to create and modify Products and Purchase Orders.  A participant can then integrate its Vendia Share Node with services in their cloud service provider (CSP) of choice in order to immediately detect and act upon Uni events.

Our next step is to connect the Vendia Retailer Node with an Azure CSP environment.  This mimics a common integration approach, where a Retailer has an existing Azure CSP environment and wants to use CSP services to produce or consume data from its Vendia Share Node.

When your Uni reaches a `RUNNING` state, you'll have a multi-cloud, multi-region Uni, including a Retailer Node.  To permit the Retailer Node to send events to an Azure CSP environment secured by an [Azure Active Directory](https://azure.microsoft.com/en-us/services/active-directory/) (Azure AD) tenant, we need to create a [Service Principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals#service-principal-object) within Azure AD.

1. Login to your Azure environment using the Azure CLI
    * `az login`
1. Identify the Subscription ID of your [Azure Subscription](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-subscriptions-associated-directory) in which your Azure environment resides. Set the Azure Subscription ID against which future Azure CLI commands will execute
    * `az account set --subscription "[AZURE_SUBSCRIPTION_ID]"`
1. To confirm the Azure Event Grid used to relay events from Share to your Azure environment is ready for use, we must first [register Event Grid](https://docs.microsoft.com/en-us/azure/event-grid/custom-event-quickstart#enable-the-event-grid-resource-provider) as a provider
    * `az provider register --namespace Microsoft.EventGrid`
1. Wait until the provider is in the `Registered` state
    * `az provider show --namespace Microsoft.EventGrid --query "registrationState"`
1. Use the Vendia CLI to determine the Azure AD Application ID for your newly provisioned Retailer Node (the Retailer node in the Uni).
    * `share uni get --uni <UNI_NAME>`
    * In the CLI output of the above command, note the value of the `Retailer.Resources.azure_ApplicationId` property.  The value hereafter will be referenced as `<RETAILER_NODE_APPLICATION_ID>`.
1. Now it's time to permit connections between the automatically created Vendia tenant for the Retailer Node and your Azure tenant using a Service Principal.  After running the command below, note the Service Principal's ID (`objectId`) from the output for future reference, hereafter referred to as `<SERVICE_PRINCIPAL_ID>`.
    * `az ad sp create --id "<RETAILER_NODE_APPLICATION_ID>"`


## Step 3 - Create Azure Function

Now that the Service Principal will permit the Retailer Node to emit events to services within your Azure environment, there are several integration options at our disposal.  The integration option we'll explore here is an Azure Function that takes action when an event is received.  In this example, consider a Supplier that makes a Purchase Order adjustment (changing the expected fulfillment date) and a Retailer that wants to take immediate action (changing dates for promoting a popular sale, as a result).

To finalize this integration, we next:

1. Create an Azure Function, like this [simple Python function](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-grid-trigger?tabs=python%2Cbash) below, noting the Function App Resource ID for the subsequent step, hereafter referred to as `<FUNCTION_APP_RESOURCE_ID>`

    <details>
      <summary>Sample __init__.py</summary>
    
      ```python
        import json
        import logging
        import azure.functions as func
        def main(event: func.EventGridEvent):
          result = json.dumps({
              "id": event.id,
              "data": event.get_json(),
              "topic": event.topic,
              "subject": event.subject,
              "event_type": event.event_type,
          })
          logging.info('Azure Function processed a Vendia Share event: %s', result)        
      ```
    </details>

1. Permit the Service Principal created previously to interact with this Azure Function
    * `az role assignment create --assignee "<SERVICE_PRINCIPAL_ID>" --role "Website Contributor" --scope "<FUNCTION_APP_RESOURCE_ID>"`

1. Open the Vendia Share web site ([https://share.vendia.net/uni](https://share.vendia.net/uni)), and click your Uni’s name. Find the Retailer Node and click on its `GraphQL Explorer` button. Clear the sample query in the middle pane, and insert the mutation below.
    
    <details>
      <summary>Update Azure Settings Mutation</summary>
    
      ```graphql
      mutation updateAzureSettings {
        updateVendia_Settings(
          input: {
            azure: {
              defaultTenantId: "[AZURE_TENANT_ID]"
              defaultSubscriptionId: "[AZURE_SUBSCRIPTION_ID]"
              blockReportFunctions: [
                {
                  resourceGroupName: "[AZURE_RESOURCE_GROUP]"
                  functionAppName: "[AZURE_FUNCTION_APP_NAME]"
                  functionName: "[AZURE_FUNCTION_NAME]"
                }
              ]
            }
          }
        ) {
          transaction {
            transactionId
            submissionTime
            version
          }
        }
      }
      ```
    </details>

    *  Be sure to update the mutation values as they pertain to your Azure environment:
        * **[AZURE_TENANT_ID]** - The ID of the [Azure AD tenant](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-how-to-find-tenant#find-tenant-id-with-cli) within which your Azure Function resides
        * **[AZURE_SUBSCRIPTION_ID]** - The Subscription ID of the Azure tenant within which your Azure Function resides
        * **[AZURE_RESOURCE_GROUP]** - The name of the [resource group](https://portal.azure.com/#blade/HubsExtension/BrowseResourceGroups) that contains your Azure Function App.
        * **[AZURE_FUNCTION_APP_NAME]** - The name of your [Azure Function App](https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites/kind/functionapp).
        * **[AZURE_FUNCTION_NAME]** - The name of your Azure Function App Function, which can be found by clicking into the Function App and then clicking `Functions`

1. Verify the settings were updated as expected before continuing

    <details>
      <summary>Get Azure Settings Query</summary>
    
      ```graphql
      query getAzureSettings {
        getVendia_Settings {
          azure {
            blockReportFunctions {
              functionName
              functionAppName
              resourceGroupName
            }
            defaultSubscriptionId
            defaultTenantId
          }
        }
      }
      ```
    </details>


## Step 4 - React in Real-Time Events on Azure

Now it's time for the Supplier (from its Vendia Share AWS Node) to make a Purchase Order adjustment.  When that happens, the Retailer (from its Vendia Share Azure Node) will be notified immediately and will be able to take action (through its configured Azure Function).

1. Using the Vendia Share Web Application's GraphQL Explorer of the Supplier's AWS Node, identify a Purchase Order to modify, noting the `_id` for one of the Purchase Orders listed for the subsequent step, referred to hereafter as `<PO_ID>`

    <details>
      <summary>List Purchase Orders Query</summary>
    
      ```graphql
      query listPurchaseOrders {
        list_PurchaseOrderItems {
          _PurchaseOrderItems {
            _id
            _owner
            created
            expected
            fulfilled
            orderId
            updated
            items {
              quantity
              sku
            }
          }
        }
      }
      ```
    </details>

1. Execute a GraphQL mutation (or use Vendia Share's Entity Explorer to make an equivalent update without any GraphQL) to modify the PO identified in the previous step

    <details>
      <summary>Update Purchase Order Mutation</summary>
    
      ```graphql
      mutation updatePurchaseOrder {
        update_PurchaseOrder(
          id: "<PO_ID>",
          input: {
            expected: "2022-01-03T00:00:00Z"
          }
        ) {
          transaction {
            transactionId
            submissionTime
            version
          }
        }
      }
      ```
    </details>

The update to the Supplier Node will cause an event, a block notification, to be emitted from the Retailer Node.  The Retailer Node, thanks to the configuration in previous steps, will act on that event through the configured Azure Function.  We can now view the output of the Azure Function, which was triggered through the Retailer's Azure Node, using the Azure-provided [Application Insights](https://docs.microsoft.com/en-us/azure/azure-functions/analyze-telemetry-data) view.

<figure>
  <img src="https://d24nhiikxn5jns.cloudfront.net/optimized/user-images.githubusercontent.com..85032783147982095-1d1602ee-616f-4b81-b455-463fe7857429.png" width="100%"/>
  <figcaption><b>Figure 2</b> - <i>The Azure Function output after successfully processing an event delivered from the Retailer's Node</i></figcaption>
</figure>

## Key Takeaways

Vendia Share's new Azure eventing mechanism allows partners - in this case a Supplier, a Distributor, and a Retailer - to keep each other informed, in real-time, and act on updates as they happen.  While this capability is still a beta feature, we'd love to [get your feedback](https://www.vendia.com/contact-us).

Now that you've seen how simple it is to create an integration between a Vendia Share Node and an Azure Function, check out [one of several](https://www.vendia.com/docs/share/integrations#getting-started-with-azure-notifications) other Azure integration patterns that can be used to process events that transpire across a Uni.  Or, check out one of our other [Quick Starts](https://www.vendia.com/docs/share/quickstart) if you're relatively new to Vendia Share.
