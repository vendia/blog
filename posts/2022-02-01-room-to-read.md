---
title: "Room to Read"
description: "Fuel a Chain Reaction of Sharing"
date: '2022-02-01'
categories:
- company
- product
authors:
- Shruthi Rao
---

## Fuel a Chain Reaction of Sharing

At Vendia, we believe in the power of sharing. Our platform, [Vendia Share](https://vendia.net/product?utm_source=blog&utm_campaign=room_to_read), is designed to help people securely share important information with others.

If you share a few minutes of your time to help us test one of our newest sharing capabilities we’ll, in turn, share back by donating to Room to Read.

## Your Feedback is Important – Help Enable Better Sharing

Our platform is designed for securely sharing real-time data with those who need it most. We recently announced a new set of features for Vendia Share to further help developers build secure, real-time data applications. One of those features, Entity Explorer, is a no-code explorer view that makes sharing data available to more users. Though we are proud of this new capability, it’s also a brand new interface – we’d love your help to improve the user experience.

## The Request – A Few Minutes of Your Time & Your Favorite Books

The request is simple - follow the step-by-step instructions below. In just a few minutes, you’ll sign up for Vendia, use our new Entity Explorer to share a few of your favorite books, and invite someone to look at your list. That’s it!

On the backend, we track the flow of the user experience with automatic telemetry that allows us to see where our product experience would benefit from improvement.

## Sharing Back – Vendia Will Donate to Room to Read

As a thank you for sharing your time, we are sharing back to [Room to Read](https://www.roomtoread.org/). Until Feb 15, we will donate $50 to Room to Read for every person who posts screenshots to the [Vendia Discourse thread](https://community.vendia.net/t/room-to-read-share-your-screenshots-and-feedback) of (a) their book list and (b) their Universal Application with two nodes. So let’s go! Share this exercise with any of your colleagues that want to help make a difference through better sharing.

### Why Room to Read?

I’m inspired by Geetha Murali and the mission she is pursuing with the team at Room to Read: transforming the lives of millions of children in low-income communities by focusing on literacy and gender equality in education.

As a co-founder of a SaaS company, I strive to empower people to share via a technology platform. But I can’t help but be drawn to Room to Read’s idea of empowerment at such a broad and foundational level as they empower under-served and under-represented communities through literacy – the starting point of so much education and equality!

I’ve had the privilege of being connected to Room to Read and Geetha through the [Neythri Fund](https://www.neythrifuturesfund.com/), and I see this as a small and simple way to extend the power of you sharing your time for us, to fuel a chain reaction of sharing to an organization that inspires me.

## A Step-by-Step Guide

Here's where we provide you with the knowledge to create your book list suitable for sharing.

### Creating Your Uni

In this section, you will deploy your own Universal Application using the Vendia Share web application.

<details>
<summary>Make Sure You're Registered with Vendia Share</summary>

You can [register](https://share.vendia.net?utm_source=blog&utm_campaign=room_to_read) for the free Starter tier if you haven't already.
</details>

<details>
<summary>Log in to Vendia Share</summary>

Visit the Vendia Share web application at [https://share.vendia.net](https://share.vendia.net). If you have not yet created a Uni you will be presented with the following screen.

**NOTE:** You will see any existing Universal Applications listed here. The Vendia Share Starter tier allows for a [single Universal Application](https://www.vendia.net/docs/share/limits#uni-and-node-limits). You will not be able to proceed with this exercise if you already have a running Universal Application.

<img width="1311" alt="01-empty-uni-screen" src="https://user-images.githubusercontent.com/71095088/151864172-fde733e6-3abf-4041-bdb2-cff406defe1c.png">

Click on 'Create a Universal Application' to begin the process.

</details>

<details>
<summary>Choose a Starting Point</summary>

Vendia provides several data schemas to get started. In this case, you will select 'Create your own' and define your own schema. Don't worry - we have one to get you started.

<img width="1312" alt="02-create-uni-starting-point" src="https://user-images.githubusercontent.com/71095088/151866654-2aa33ed6-28d3-4d60-9410-c51f48c4e166.png">

</details>

<details>
<summary>Uni Settings</summary>

Give you Uni a name. All Unis in the Starter tier share a common namespace of `unis.vendia.net` so pick a unique name. [Give your Uni a name](https://www.vendia.net/docs/share/limits#uni-and-node-names) that begins with `test-` and click on the 'Next' button to continue.

**NOTE:** I've defined a Uni with the name `test-room-to-read`. You'll have to pick a different name.

<img width="1312" alt="03-uni-name" src="https://user-images.githubusercontent.com/71095088/151866849-8c1d52d3-eb67-45a0-af19-4dc6c2c32105.png">

</details>

<details>
<summary>Node Configuration</summary>

Here is where you can specify attributes about your [node](https://www.vendia.net/docs/share/terms-and-definitions#node). For demonstration purposes you can accept the default values and click on 'Next' to define the data model.

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

### Creating New Books with Entity Explorer

Once the Uni is in a `RUNNING` state you will be able to access your Node's Entity Explorer and store details about books.

<details>
<summary>Access NodeOne Entity Explorer</summary>

<img width="1311" alt="07-entity-explorer" src="https://user-images.githubusercontent.com/71095088/151876104-f21aa30a-5002-4c9e-ab93-b6b22dafa492.png">

</details>

<details>
<summary>Create Books</summary>

At this point, your Uni does not have any book data stored. We can add a new book by clicking on the 'Create Book' button.

<img width="1312" alt="08-create-book" src="https://user-images.githubusercontent.com/71095088/151876372-1a8ef7f2-77e8-4088-ab65-758ffde310dc.png">

I love the book [CDB!](https://en.wikipedia.org/wiki/CDB!), a children's book by William Steig. I'll enter the details of the book into Entity Explorer and click 'Save' to write the data to the Uni. If you're not a big fan feel free to save details about one of your favorite books.

<img width="1312" alt="09-create-book-details" src="https://user-images.githubusercontent.com/71095088/151881121-925af34c-3c89-4235-b8a1-18df14db9b21.png">

Once you click on the 'Save' button, the Uni will begin the process of writing the book data to the Uni.

<img width="1310" alt="10-writing-data" src="https://user-images.githubusercontent.com/71095088/151881322-cadb4360-78ba-4251-818b-8749f5b9dfe5.png">

</details>

### Viewing and Editing New Books with Entity Explorer

Now that you've saved the book details to the Uni, let's view them in Entity Explorer and make edits.

<details>
<summary>View Book Details</summary>

You can click on the generated `_id` link to view details about your book.

<img width="1312" alt="11-view-book-details" src="https://user-images.githubusercontent.com/71095088/151881990-4898f87e-2892-44b1-8114-ccb421ceb0f4.png">


<img width="1313" alt="12-book-details" src="https://user-images.githubusercontent.com/71095088/151882228-5229deef-c428-44b8-81fa-913fd69f0e74.png">

</details>

<details>
<summary>Edit Book Details</summary>

Entity Explorer allows you to update data stored in your Uni. Click on the 'Edit' button and make an update to the book you've stored.

<img width="1313" alt="13-edit-book-button" src="https://user-images.githubusercontent.com/71095088/151883179-24a65f9f-2472-439b-89d2-cedcc839cf84.png">

I know there was another edition of the 'CDB!' book published by Aladdin in 1987 so I can update my book with the new edition's data. Your book may have some updates, too. Make changes and click 'Save' to update your Uni.

<img width="1312" alt="14-edit-book-details" src="https://user-images.githubusercontent.com/71095088/151883554-cc0b5647-36ca-46da-bd2c-6e448d37e3ed.png">

<img width="1312" alt="15-saving-book-updates" src="https://user-images.githubusercontent.com/71095088/151884011-382af7ad-738a-46a2-ae73-0d1c187e2daf.png">

<img width="1312" alt="16-updates-complete" src="https://user-images.githubusercontent.com/71095088/151884014-29040d03-9e51-45c3-a96b-f5a390093224.png">

</details>

<details>
<summary>View History</summary>

One of the core features of Vendia Share is the ability to capture changes to data over time. You can view changes you've made to your book through the Entity Explorer.

<img width="1312" alt="17-view-history-button" src="https://user-images.githubusercontent.com/71095088/151884136-fcc85ee2-bd29-49b3-b3c4-6089ab98303f.png">

<img width="1312" alt="18-view-history" src="https://user-images.githubusercontent.com/71095088/151884418-ce070d7a-1052-4df0-8e1e-e8b247f8d021.png">

You can see how your book details have evolved over time.
</details>

### Deleting Books with Entity Explorer

Entity Explorer allows you to delete data from your Uni. Go ahead and delete the book you've entered.

<details>
<summary>Delete Your Book</summary>

Click on the 'Delete' button from the book detail page.

<img width="1312" alt="19-delete-button" src="https://user-images.githubusercontent.com/71095088/151884775-af15a2f2-7c73-4667-b22b-e92ca4ee6f8c.png">

You will receive a confirmation dialog to delete your book. Click 'Delete' to remove the book from your Uni.

<img width="1311" alt="20-delete-confirmation" src="https://user-images.githubusercontent.com/71095088/151884995-b300d428-407b-42ba-97bf-7ba426b20610.png">

<img width="1312" alt="21-deleting-updates" src="https://user-images.githubusercontent.com/71095088/151885251-00f8c067-bfc1-4ed5-94e5-7fdca2c21f9d.png">

</details>

<details>
<summary>Confirm Your Uni is Empty</summary>

Now that you've deleted your book, your Uni doesn't have any more data.

<img width="1312" alt="22-empty-uni" src="https://user-images.githubusercontent.com/71095088/151885402-63b97996-39c3-4e4d-8244-122c68aee0a2.png">

</details>

### Share Your Book List with a Friend

One of the many things that makes Vendia Share interesting is that you can easily share information with a partner. That partner can be a separate organization, a separate department within the same organization, or - for the sake of this post - someone with whom you want to share your book list.

Go ahead and invite another user to your Uni and share books with each other. 

<details>
<summary>Make Sure Your Friend is Registered with Vendia Share</summary>

Your friend can [register](https://share.vendia.net?utm_source=blog&utm_campaign=room_to_read) for the free Starter tier if they haven't already.
</details>

<details>
<summary>Invite Your Friend to Your Uni</summary>

The home page of your Uni has a 'Invite participant' button. Go ahead and click it.

<img width="1312" alt="23-invite-participant-button" src="https://user-images.githubusercontent.com/71095088/151886170-afc7e252-bc31-48c9-94ab-00c826e2a668.png">

Enter your friend's email and click the 'Send uni invite' button.

<img width="1311" alt="24-invite-participant" src="https://user-images.githubusercontent.com/71095088/151886416-15e17ee4-1ab8-42fd-9b8c-67c6e0fb9eb7.png">

Your friend will receive an email providing them instructions for creating their own node in your existing Uni.
</details>

Ready for the cool part?

You and your partner will both be able to use Entity Explorer to read and write data to your Uni. How cool is that?!

## Conclusion

Thank you for sharing your time and, importantly, supporting [Room to Read](https://www.roomtoread.org/). Remember to post your screenshots to the [Vendia Discourse thread](https://community.vendia.net/t/room-to-read-share-your-screenshots-and-feedback) of (a) their book list and (b) their Universal Application with two nodes.
