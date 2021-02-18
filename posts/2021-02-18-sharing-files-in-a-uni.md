---
title: 'Sharing Files in Vendia Share Unis'
description: 'Sharing data across different organizations, accounts, and regions used to be hard...but Vendia Share Universal Apps make it easy'
date: '2021-02-18'
authors:
  - Glenn Dierkes
---

# Sharing Files in Vendia Share Unis

Sharing data across different organizations, accounts, and regions used to be hard...but Vendia Share Universal Apps (_unis_) make it easy!  Vendia's unique architecture offers a distributed data model that goes everywhere you need it to.  However, sometimes the data to be shared is larger or more complex than just numbers and strings.  What if you need to share parquet files, multimedia images, or PDFs?  Vendia Share has you covered with its _Files_ feature, which lets you share large objects with other participants (nodes) in your uni the same way you share scalar data.  Similar to a file system, you can also control which other participants can read (download) and write (delete or modify) the files you own.


## TL;DR

This step by step example of how Files can be shared in unis demonstrates that you can share files with other participants in a uni while controlling which of them have read and write permissions.


## File Sharing Example

To start sharing files, you’ll need to create a uni and you’ll need a new or existing Amazon S3 bucket to use as a data source. We’ll walk through the details of accomplishing both of these tasks.  Once these prerequisites are completed we’ll provide examples of creating and sharing files as well as updating the permissions on those files to control access by other participants.


### Create a Uni

To get started, create a uni with two nodes. You can do that through the Vendia Share API, the `share` command line, or through Vendia Share’s Web UI. The Web UI makes creating a uni easy, so we’ll illustrate that approach below.  For more detailed steps (and more options) when creating a uni, please reference any of the [Quickstart](https://vendia.net/docs/share/quickstart) guides.

![alt_text](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-02-18-sharing-files-in-a-uni/create_a_new_uni.png "Create a new uni")

Clicking the **Create a new Uni** button allows you to configure the details of your new uni prior to construction:

![alt_text](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-02-18-sharing-files-in-a-uni/create_new_uni.png "Create new Uni")

The **Create new Uni** screen requires that you specify the Node (participant) Config, Uni Schema (data model) and an optional Initial State. The Schema and Initial State will be populated with a default sample and for the purposes of this example we can leave them as is.


#### Node Config

For this example, we need to create a two node uni so we can see the effects of sharing and adjusting permissions on files. Use the example Node Configuration below, but be sure to first fill in the email address associated with your Vendia account. You can leave the regions as is or adjust them to be any of the Share-supported regions.


```json
[
  {
    "name": "TestNode1",
    "userId": "<MY EMAIL ADDRESS>",
    "region": "us-east-2"
  },
  {
    "name": "TestNode2",
    "userId": "<MY EMAIL ADDRESS>",
    "region": "us-west-2"
  }
]
```


(Of course you can create unis with many more nodes, but for purposes of this file example, two is sufficient.)


#### Uni Schema

For the Schema, you can use the default sample without changing it. A copy is provided below for reference:


```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://vendia.net/schemas/demos/basic_schema.json",
  "title": "Sample schema for blockchain demos and testing",
  "description": "A minimal example, modeling a list of Shapes",
  "type": "object",
  "properties": {
    "Shapes": {
      "description": "A list of shapes",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "description": "The common name of the shape",
            "type": "string"
          },
          "color": {
            "description": "The color of the shape",
            "type": "string"
          },
          "num_sides": {
            "description": "How many sides the shape has",
            "type": "number"
          }
        },
        "required": [
          "name",
          "color"
        ],
        "additionalProperties": false
      },
      "minItems": 0,
      "uniqueItems": true
    }
  },
  "additionalProperties": false
}
```



#### Initial State

The defaulted initial state for the sample schema can also be used as is; here’s what it looks like:

```json
{
  "Shapes": [
    {
      "name": "square",
      "color": "red",
      "num_sides": 4
    },
    {
      "name": "circle",
      "color": "blue"
    }
  ]
}
```

After specifying the **Node Config**, **Uni Schema** and **Initial State**, press the **Create New Uni** button.

### Setup an external S3 Bucket

While we wait for the uni to spin up (approximately 5 minutes) we can proceed with making an Amazon S3 bucket available to your uni. While there are multiple ways to upload files to your uni, in this example we’ll create some sample files in your personal bucket and then transfer them from there to the uni. Follow the detailed instructions [here](https://vendia.net/docs/share/file-storage#granting-permissions-to-the-source-bucket) to set up permissions to allow files to be exchanged between your S3 bucket and your uni node. These instructions assume that you already have an AWS account with an S3 bucket created; check out [AWS’s documentation](https://aws.amazon.com/s3/getting-started/) if you need more guidance on S3 setup.

### Add a File with “All Uni” Access

Now that your uni is up and you’ve connected your personal S3 bucket, we can start adding and sharing files. Let’s begin by copying a file from your S3 bucket to your node (which will then copy it to all other nodes as part of the uni’s built-in consensus and replication process). We’ll make this file visible to **all** nodes in your uni.

#### Step 1: Add a File to S3

Upload a File into your personal S3 bucket and name it **_test.txt_**.

#### Step 2: Start the Uni’s GraphQL Explorer

Open up the GraphQL Explorer for “Node 1” in your uni via the Share Web UI:

![alt_text](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-02-18-sharing-files-in-a-uni/open_graphql_explorer.png "Open GraphQL Explorer")

#### Step 3: Execute the `AddFile` Mutation

File operations are built into Vendia Share - no matter what your schema model looks like you have the ability to work with them. To copy a file from your S3 bucket to the uni, paste in the mutation below to the GraphQL explorer and execute it, being sure to replace the parameters with your actual file information: your S3 bucket name, the AWS region your bucket is in, and the name of the file to copy. (Note that S3 refers to the full name of a file as a “key”.) Be sure to use the official AWS region names for `SourceRegion` - typically, this will be the same region in which your node resides.


```graphql
mutation AddFile {
  add_File_async(
    input: {
      SourceBucket: "<YOUR S3 BUCKET NAME HERE>",
      SourceKey: "<OBJECT NAME FROM YOUR S3 BUCKET>",
      SourceRegion: "<REGION OF YOUR S3 BUCKET>",
      DestinationKey: "my-first-file.txt"
    }
  )
  {error}
}
```


Your mutation will look something like this once the arguments are properly filled in:



![alt_text](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-02-18-sharing-files-in-a-uni/add_file_mutation.png "Add File mutation")


After your **__AddFile__** mutation executes, the new file will be visible to all nodes in the uni. You can see it in your original node by running the following query:


```graphql
query ListAllFiles {
  list_Files {
    _Files {
      id
      DestinationKey
      Etag
    }
  }
}
```


The resulting output will show your file **__my-first-file.txt__**, and look similar to this:




![alt_text](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-02-18-sharing-files-in-a-uni/list_all_files_query.png "List All Files query")


You can bring up a GraphQL explorer for the other node in your uni and you will see this same output.  This is because when you added the file you were using the default settings: By default, _all nodes have read access to the file but **only** the file’s owner (the node that uploaded it originally) has permission to modify it._  If we extend the **ListAllFiles** mutation to include the **Read** and **Write** properties we can see this explicitly: Run the follow query in one of your Uni’s Nodes:

```graphql
query ListAllFiles {
  list_Files {
    _Files {
     id
     DestinationKey
     Etag
     Read
     Write
    }
  }
}
```

You should see the following output:


![alt_text](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-02-18-sharing-files-in-a-uni/list_all_files_query2.png "List All Files query with more detail")


Notice that the **Read** setting is “\*”, which means that all nodes in the uni have the ability to read the file.  However, the **Write** permission only lists “TestNode1” - only that node (the file’s owner) can update or remove this file.

Further, notice that all Nodes have the same <strong><code>id</code></strong>, <strong><code>DestinationKey</code>,</strong> and <strong><code>Etag</code></strong> values.  An identical <strong><code>Etag</code></strong> verifies that the content of the file in each node is the same. (This information is also used in the creation of a replicated, immutable ledger to prove that all nodes share the same file content whenever a file is created or modified.)

Now, let’s make sure permissions work. Let’s verify that Node 2 cannot update the file, by attempting to run this mutation in Node 2:


```graphql
update_File_async(
  input: {
    id: "<file-id-returned-above>",
    SourceBucket: "my_bucket",
    SourceKey: "test.txt",
    SourceRegion: "us-west-2",
    DestinationKey: "my-first-file.txt"
  }
) { error }
```


Running the update mutation above in Node 2 will result in the following output:


![alt_text](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-02-18-sharing-files-in-a-uni/no_write_permissions.png "No write permissions")


That’s as it should be - the error matches our expectation that Node 2 isn’t allowed to modify this file.


### Restricting Read Access to a File

When adding a file, we could also choose to restrict the set of nodes with read access to the file by explicitly setting its <strong><code>Read</code></strong> property.  Let’s see that in action: In Node 1’s GraphQL Explorer, execute the following mutation (again, being sure to adjust it for your own bucket):


```
mutation AddFile2 {
  add_File_async(
    input: {
      SourceBucket: "my_bucket",
      SourceKey: "test.txt",
      SourceRegion: "us-west-2",
      DestinationKey: "my-second-file.txt",
    Read: ["TestNode1"]
    }
  )
  {error}
}
```


Now if you list the files in each node, you’ll notice that <strong><code>my-second-file.txt</code></strong> is only present in Node 1.

Here’s the output you will see in Node1 versus the output of Node2.

In **Node1** you’ll see:

![alt_text](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-02-18-sharing-files-in-a-uni/list_all_files_node1.png "List All Files query for Node 1")


Where as in **Node2** you’ll see:

![alt_text](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-02-18-sharing-files-in-a-uni/list_all_files_node2.png "List All Files query for Node 2")

That may not seem very exciting, but in a Uni with more nodes modeling complex business or application relationships, you can see how the ability to restrict access at the level of individual files can be important...and how easy it is!


### Allowing all Nodes to Update a File

We can also use the same approach to control who can update a file. By explicitly setting the <strong><code>Write</code></strong> property on a file, we can give a select set of nodes the ability to alter its content. The following example allows all nodes to modify a file by using the special node name, “\*”. It has the meaning of “all the nodes in the Uni, including any new ones that are added later on.”

Execute the following mutation to add a third file that can be modified by any node:


```graphql
mutation AddFile3 {
  add_File_async(
    input: {
      SourceBucket: "my_bucket",
      SourceKey: "test.txt",
      SourceRegion: "us-west-2",
      DestinationKey: "my-third-file.txt",
    Write: ["*"]
    }
  )
  {error}
}
```


Now if you attempt to update this file from the second node, your mutation will be successful! Of course, we could also have provided an explicit list of node names instead of using “\*” to indicate that only a subset of nodes have write permissions.


### Summary and Next Steps

As we saw in the example above, unis make it as easy to share files as is it to share scalar data like strings and numbers. Just as important, they also give the file’s owner fine-grained access control: For each file, you can specify which other participants are able to read or update the file. Finally, remember that by default (i.e., when you don’t provide explicit Read and Write settings), _all_ nodes will have read access but only the file’s owning node will have write permission.

There’s even more you can do with files that we haven’t covered here. To get a quick overview, check out this [document](https://vendia.net/docs/share/file-storage). To read about the full set of features available, such as cache settings, please visit the [API docs](https://vendia.net/docs/share/file-api).
