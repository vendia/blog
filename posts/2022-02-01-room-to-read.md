---
title: "Room to Read PLG Promo"
description: "TBD"
date: '2022-02-01'
categories:
- concepts
authors:
- Tim Zonca
---

## The Request

We have updated our User Interface (UI) to enable non-developers to create and manage decentralized data applications called [Universal Applications](https://www.vendia.net/docs/share/dev-and-use-unis) (or Uni for short). A new, simple workflow guides users through the steps to quickly create a new Universal Application. The new UI also includes an Entity Explorer, allowing non-developers to read from and write to a Universal Application without crafting GraphQL queries or mutations. You can navigate to the Entity Explorer from within a node. Entity Explorer will show you all the items associated with your type.

### A Step-by-Step Guide

#### Creating Your Uni

In this section, you will deploy your own Universal Application using the Vendia Share web application.

<details>
<summary>Make sure you're registered for Vendia Share</summary>

You can [register](https://share.vendia.net) for the free Starter tier if you haven't already.
</details>

<details>
<summary>Log in to Vendia Share</summary>

Visit the Vendia Share web application at [https://share.vendia.net](https://share.vendia.net). If you have not yet created a Uni you will be presented with the following screen.

**NOTE:** You will see any existing Universal Applications listed here. The Vendia Share Starter tier allows for a [single Universal Application](https://www.vendia.net/docs/share/limits#uni-and-node-limits). You will not be able to proceed with this exercise if you already have a running Universal Application.

<img width="1311" alt="01-empty-uni-screen" src="https://user-images.githubusercontent.com/71095088/151864172-fde733e6-3abf-4041-bdb2-cff406defe1c.png">

Click on 'Create a Universal Application' to begin the process.

</details>

<details>
<summary>Choose a starting point</summary>

Vendia provides several data schemas to get started. In our case, we will select 'Create your own' and define our own schema.

<img width="1312" alt="02-create-uni-starting-point" src="https://user-images.githubusercontent.com/71095088/151866654-2aa33ed6-28d3-4d60-9410-c51f48c4e166.png">

</details>

<details>
<summary>Uni Settings</summary>

Give you Uni a name. All Unis in the Starter tier share a common namespace of `unis.vendia.net` so pick a unique name. [Give your Uni a name](https://www.vendia.net/docs/share/limits#uni-and-node-names) that begins with `test-` and click on the 'Next' button to continue.

<img width="1312" alt="03-uni-name" src="https://user-images.githubusercontent.com/71095088/151866849-8c1d52d3-eb67-45a0-af19-4dc6c2c32105.png">

</details>

<details>
<summary>Node Configuration</summary>

Here is where we can specify attributes about our [node](https://www.vendia.net/docs/share/terms-and-definitions#node). For demonstration purposes you can accept the default values and click on 'Next' to define the data model.

<img width="1313" alt="04-node-configuration" src="https://user-images.githubusercontent.com/71095088/151868798-456b4816-14a4-4e6c-8a0e-7a732be06a24.png">

**NOTE:** Vendia Share nodes can be configured to run across [different regions](https://www.vendia.net/docs/share/cli/guide#supported-cloud-platforms-and-regions) and with different [node access controls](https://www.vendia.net/docs/share/node-access-control). Please consult our documentation for more details.
</details>

<details>
<summary>Schema Creation</summary>

Enter the following JSON as our Uni's schema and click on the 'Create' button. Please refer to our [documentation](https://www.vendia.net/docs/share/data-modeling) and [blog post](https://www.vendia.net/blog/applying-domain-driven-design-to-blockchains) for more detail on modeling data.

**NOTE:** It will take about 5 minutes for the Uni to get to a `RUNNING` state.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Room to Read",
  "description": "Uni schema to support Room to Read",
  "type": "object",
  "properties": {
    "Book": {
      "description": "Book type",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "title": {
            "description": "Title",
            "type": "string"
          },
          "author": {
            "description": "Author",
            "type": "string"
          },
          "publisher": {
            "description": "Publisher",
            "type": "string"
          },
          "isbn": {
            "description": "ISBN",
            "type": "string"
          },
          "publicationYear": {
            "description": "Year book was initially published",
            "type": "string",
            "pattern": "^-?[0-9]{1,4}$"
          }
        }
      }
    }
  }
}
```


<img width="1312" alt="05-schema-creation" src="https://user-images.githubusercontent.com/71095088/151869546-8d89cc8d-3674-404f-b126-298add96be88.png">

Once you click on the 'Create' button you will see output indicating the Uni is being created.

<img width="1312" alt="06-uni-pending-registration" src="https://user-images.githubusercontent.com/71095088/151869921-319690d5-30e4-42aa-82a8-5114770b9707.png">


</details>
