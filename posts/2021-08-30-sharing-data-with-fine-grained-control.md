---
title: "Sharing Data with Fine-grained Control"
description: "Defining Data Visibility Constraints Among Partners in a Universal Application"
longDescription: >
    Defining Data Visibility Constraints Among Partners in a Universal Application
date: '2021-08-30'
authors:
  - Brian McNamara
---

Vendia Share offers customers the ability to share file and scalar data with internal and external partners. Up to this point, parties to a Universal Application (Uni) could define controls on _files_ but could not define the same control on world state _scalar_ data. Today, we're proud to announce the release of these controls on world state data. With this release, Uni nodes can specify which party has the ability to read or write data on a per-object basis.

Let's use an example and explore the mechanics you can use to take advantage of this feature.

## Introducing Alice, Bob, and Eve

Let's say we have data - recipes - that needs to be shared among three parties - `Alice`, `Bob`, and `Eve`. `Alice` is known for creating amazing recipes. `Bob` and `Eve` both own bakeries and know that `Alice` has a knack for putting together some great recipes for cakes, cupcakes, cookies, pies, and muffins.

This introduces two specific sharing scenarios. First, `Alice` to selectively share recipe attributes with `Bob` and `Eve`. Second, `Alice` needs to provide read-only access to entire recipes that have been purchased.

## Bootstrapping Our Recipe Uni

In order to share our recipe data, we need to first create a Uni. Let's use the following schema to define our data model. Please note we're using a new top-level type in our schema - **x-vendia-acls** - to indicate we will be allowing fine-grained control in our data model as well as the type we will be allowing the controls on. 

**NOTE:** If we don't include **x-vendia-acls**, all parties in a Uni will have the ability to read and write data; this is the default behavior.

<details>
<summary>Recipe Schema</summary>

Save the file below as `schema.json`.

```graphql
{
   "$schema": "http://json-schema.org/draft-07/schema#",
   "$id": "http://vendia.net/schemas/blog/fine_grained_control.json",
   "title": "Sample schema for setting fine-grained access controls",
   "description": "Model bakery recipes",
   "x-vendia-acls": {
     "RecipeAcl": {
       "type": "Recipe"
     }
   },
   "type": "object",
   "properties": {
       "Recipe": {
           "description": "Recipe information",
           "type": "array",
           "items": {
               "type": "object",
               "properties": {
                   "name": {
                       "description": "The common name of recipe",
                       "type": "string"
                   },
                   "sku": {
                       "description": "SKU of the recipe",
                       "type": "string"
                   },
                   "price": {
                       "description": "Sales price of the recipe in USD",
                       "type": "number"
                   },
                   "recipeType": {
                       "description": "Type of recipe",
                       "type": "string",
                       "enum": [ "cake", "cupcake", "cookie", "pie", "muffin" ]
                   },
                   "recipeYield": {
                       "description": "Quantity yielded by the recipe",
                       "type": "number"
                   },
                   "ingredients": {
                       "description": "Ingredient listing needed for the recipe",
                       "type": "array",
                       "items": {
                           "type": "object",
                           "properties": {
                               "name": {
                                   "description": "Name of the ingredient",
                                   "type": "string"
                               },
                               "quantity": {
                                   "description": "Quantity of the ingredient needed for the yield",
                                   "type": "string"
                               }
                           }
                       }
                   },
                   "directions": {
                       "description": "Steps to make the recipe",
                       "type": "array",
                       "items": {
                           "description": "Discrete step",
                           "type": "string"
                       }
                   }
               }
           }
       }
   }
}
```
</details>

<details>
<summary>Example Registration File</summary>

Save the file below as `registration.json`.

**NOTE:** Take care to update the name of the Uni and the userId and region for each node. Also, Uni names must be uniquely named.

```json
{
    "name": "fine-grained-control-example",
    "schema": "schema.json",
    "nodes": [
        {
            "name": "Alice",
            "userId": "user@vendia.net",
            "region": "us-east-2"
        },
        {
            "name": "Bob",
            "userId": "user@vendia.net",
            "region": "us-east-2"
        },
        {
            "name": "Eve",
            "userId": "user@vendia.net",
            "region": "us-east-2"
        }
    ]
}
```
</details>

We can use the [Vendia CLI](https://www.vendia.net/docs/share/cli) to deploy our Uni. Use the following command to get our sample Uni up and running.

```bash
share uni create -c registration.json
```

## Selectively Share Recipe Attributes

In our example, `Alice` wants to make sure that `Bob` and `Eve` can see some attributes of her recipes. `Alice` can use the following GraphQL mutation to add a new cupcake recipe to her catalog. Make note of the new attribute in our mutation - **aclInput**. This is where `Alice` can specify who should have specified permissions applied to her new recipe. Using this simple example, `Alice` will only let `Bob` and `Eve` see the recipe **name**.

<details>
<summary>addSprinklesCupcake Mutation</summary>

Run the following mutation from the `Alice` GraphQL Explorer.

```graphql
mutation addSprinklesCupcake {
 addRecipe_async(
       input: {
           name: "Sprinkles Cupcake",
           sku: "cc001",
           price: 5.99,
           recipeType: "cupcake",
           recipeYield: 100,
           ingredients: [
               {
                   name: "All-purpose Flour",
                   quantity: "783.33 grams"
               },
               {
                   name: "Granulated Sugar",
                   quantity: "833 grams"
               }
           ],
           directions: [
               "Mix dry ingredients",
               "Bake",
               "Let cupcakes cool for 20min",
               "Make icing",
               "Put icing on cupcakes",
               "Profit"
           ]
       },
       aclInput: {
           acl: [
               {
                   principal: {
                       nodes: [ "*" ]
                   },
                   path: "name",
                   operations: [ READ ]
               }
           ]
       }
   ) {
       error
       result {
           id
           node_owner
       }  
   }
}
```
</details>

In this example, we use **"*"** for our nodes. This is a short-hand representation of all current and future nodes in our Uni. Alternately, we could have specified each node as an item in a list like so:

```json
principal: {
    nodes: [ "Bob", "Eve" ]
}
```

When `Alice` inserts this new recipe, `Bob` and `Eve` will be able to view some, but not all, properties. `Bob` and `Eve` will be able to read the **name** of the recipe. However, they will not be able to see any of the other attributes since `Alice` didn't give either of them access to those properties. They will also not be able to update or delete the recipe since they both only have **READ** access.  Let's run the following query from the GraphQL Explorer associated with either `Bob` or `Eve` to confirm the behavior.

<details>
<summary>listRecipes Query</summary>

Run this query from either the `Bob` or `Eve` GraphQL Explorer.

```graphql
query listRecipes {
  listRecipes {
    Recipes {
      ... on Recipe {
        id
        name
        price
        sku
        recipeType
        recipeYield
        directions
        ingredients {
          name
          quantity
        }
      }
      ... on Recipe_Partial {
        id
        name
        price
        sku
        recipeType
        recipeYield
        directions
        ingredients {
          name
          quantity
        }
      }
    }
  }
}
```
</details>

We will receive results that look similar to the following:

```json
​​{
  "data": {
    "listRecipes": {
      "Recipes": [
        {
          "id": "017b70eb-6d92-7039-4507-cc48eddb3c7c",
          "name": "Sprinkles Cupcake",
          "price": null,
          "sku": null,
          "recipeType": null,
          "recipeYield": null,
          "directions": null,
          "ingredients": null
        }
      ]
    }
  }
}
```

Notice that only the **name** is visible; the rest of the fields are displayed as null.

![Sharing Selected Properties](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-08-30-sharing-data-with-fine-grained-control/01-fine-grained-share-selected-properties.png)

## Selectively Share Entire Recipes

We know that `Alice` will only share directions and ingredients with customers who have purchased a recipe. In our example, let's assume that `Eve` is in the market for a Red Velvet Cake recipe. As luck would have it, `Alice` has a delicious recipe available and `Eve` has decided to buy it. `Alice` can insert the recipe using the mutation below to make all attributes available to `Eve`. We can also set our ACL to ensure `Bob` can see other properties, including the name of the recipe, SKU, price, recipe type, and recipe yield. Let's go ahead and run the following mutation from `Alice`'s GraphQL Explorer.

<details>
<summary>addRedVelvetCake Mutation</summary>

Run this query from the `Alice` GraphQL Explorer.

```graphql
mutation addRedVelvetCake {
  addRecipe_async(
        input: {
            name: "Red Velvet Cake",
            sku: "ca001",
            price: 5.00,
            recipeType: "cake",
            recipeYield: 1,
            ingredients: [
                {
                    name: "All-purpose Flour",
                    quantity: "453 grams"
                },
                {
                    name: "Granulated Sugar",
                    quantity: "680.3 grams"
                }
            ],
            directions: [
                "Mix dry ingredients",
                "Bake",
                "Profit"
            ]
        },
        aclInput: {
            acl: [
                {
                    principal: {
                        nodes: [ "Eve" ]
                    },
                    operations: [ READ ]
                },
                {
                    principal: {
                        nodes: [ "*" ]
                    },
                    path: "name",
                    operations: [ READ ]
                },
                {
                    principal: {
                        nodes: [ "*" ]
                    },
                    path: "sku",
                    operations: [ READ ]
                },
                {
                    principal: {
                        nodes: [ "*" ]
                    },
                    path: "price",
                    operations: [ READ ]
                },
                {
                    principal: {
                        nodes: [ "*" ]
                    },
                    path: "recipeType",
                    operations: [ READ ]
                },
                {
                    principal: {
                        nodes: [ "*" ]
                    },
                    path: "recipeYield",
                    operations: [ READ ]
                }
            ]
        }
    ) {
        error
        result {
            id
            node_owner
        }   
    }
}
```
</details>

![Sharing Selected Objects + Properties](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-08-30-sharing-data-with-fine-grained-control/02-fine-grained-share-selected-objects-and-properties.png)

### Eve's Data Visibility

We can run the following listRecipes query from `Eve`'s GraphQL Explorer.

<details>
<summary>listRecipes Query</summary>

```graphql
query listRecipes {
  listRecipes {
    Recipes {
      ... on Recipe {
        id
        name
        price
        sku
        recipeType
        recipeYield
        directions
        ingredients {
          name
          quantity
        }
      }
      ... on Recipe_Partial {
        id
        name
        price
        sku
        recipeType
        recipeYield
        directions
        ingredients {
          name
          quantity
        }
      }
    }
  }
}
```
</details>

We will receive results that look similar to the following:

```json
{
  "data": {
    "listRecipes": {
      "Recipes": [
        {
          "id": "017b70eb-6d92-7039-4507-cc48eddb3c7c",
          "name": "Sprinkles Cupcake",
          "price": null,
          "sku": null,
          "recipeType": null,
          "recipeYield": null,
          "directions": null,
          "ingredients": null
        },
        {
          "id": "017b70ef-6e45-fd52-73f8-91c6862bdd68",
          "name": "Red Velvet Cake",
          "price": 5,
          "sku": "ca001",
          "recipeType": "cake",
          "recipeYield": 1,
          "directions": [
            "Mix dry ingredients",
            "Bake",
            "Profit"
          ],
          "ingredients": [
            {
              "name": "All-purpose Flour",
              "quantity": "453 grams"
            },
            {
              "name": "Granulated Sugar",
              "quantity": "680.3 grams"
            }
          ]
        }
      ]
    }
  }
}
```

Both **directions** and **ingredients** are available for the Red Velvet Cake recipe `Eve` purchased.

### Bob's Data Visibility

If we run the same listRecipes query from `Bob`'s GraphQL Explorer, we will see all data for the Red Velvet Cake except for the directions and ingredients. We can run the following listRecipes query from `Bob`'s GraphQL Explorer.

<details>
<summary>listRecipes Query</summary>

```graphql
query listRecipes {
  listRecipes {
    Recipes {
      ... on Recipe {
        id
        name
        price
        sku
        recipeType
        recipeYield
        directions
        ingredients {
          name
          quantity
        }
      }
      ... on Recipe_Partial {
        id
        name
        price
        sku
        recipeType
        recipeYield
        directions
        ingredients {
          name
          quantity
        }
      }
    }
  }
}
```
</details>

We will receive results that look similar to the following:

```json
{
  "data": {
    "listRecipes": {
      "Recipes": [
        {
          "id": "017b70eb-6d92-7039-4507-cc48eddb3c7c",
          "name": "Sprinkles Cupcake",
          "price": null,
          "sku": null,
          "recipeType": null,
          "recipeYield": null,
          "directions": null,
          "ingredients": null
        },
        {
          "id": "017b70ef-6e45-fd52-73f8-91c6862bdd68",
          "name": "Red Velvet Cake",
          "price": 5,
          "sku": "ca001",
          "recipeType": "cake",
          "recipeYield": 1,
          "directions": null,
          "ingredients": null
        }
      ]
    }
  }
}
```

`Bob` can see all attributes of the Red Velvet cake recipe except for **direction** and **ingredients**.

## Updating Fine-grained Control

In our example, `Bob` has decided to go ahead and purchase the Sprinkles Cupcake recipe `Alice` created earlier. We can go through the process of updating an existing recipe and change the aclInput so that `Bob` can view both the **directions** and **ingredients**.

We can run the following query from `Alice`'s GraphQL Explorer to determine the id, name, and ACL for the Sprinkles Cupcake recipe.  Let's make sure we make note of the **id** field - we'll need it to perform our update.

<details>
<summary>listRecipes Query (Sprinkles Cupcake)</summary>

```graphql
query listRecipes {
  listRecipes(filter: {name: {eq: "Sprinkles Cupcake"}}) {
    Recipes {
      ... on Recipe {
        id
        name
        _acl {
          principal {
            nodes
          }
          path
          operations
        }
      }
      ... on Recipe_Partial {
        id
        name
        _acl {
          principal {
            nodes
          }
          path
          operations
        }
      }
    }
  }
}
```
</details>

Once we have the **id** of the recipe, we can run another query to update the ACL.

<details>
<summary>updateSprinklesCupcakeAcl Mutation</summary>

**NOTE:** Replace the **id** value accordingly before running the mutation.

```graphql
mutation updateSprinklesCupcakeAcl {
    putRecipe_async(
        id: "017b70eb-6d92-7039-4507-cc48eddb3c7c",
        input: {
            name: "Sprinkles Cupcake",
            sku: "cc001",
            price: 5.99,
            recipeType: "cupcake",
            recipeYield: 100,
            ingredients: [
                {
                    name: "All-purpose Flour",
                    quantity: "783.33 grams"
                },
                {
                    name: "Granulated Sugar",
                    quantity: "833 grams"
                }
            ],
            directions: [
                "Mix dry ingredients",
                "Bake",
                "Let cupcakes cool for 20min",
                "Make icing",
                "Put icing on cupcakes",
                "Profit"
            ]
        },
        aclInput: {
           acl: [
               {
                   principal: {
                        nodes: [ "Bob" ]
                   },
                   operations: [ READ ]
               },
               {
                   principal: {
                       nodes: [ "*" ]
                   },
                   path: "name",
                   operations: [ READ ]
               }
           ]
       }

    ) {
        error
        result {
            id
        }
    }
}
```
</details>

![Sharing Selected Objects + Properties](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-08-30-sharing-data-with-fine-grained-control/03-fine-grained-update-object-acls.png)

### Eve's Data Visibility

We can run the following query from `Eve`'s GraphQL Explorer.

<details>
<summary>listRecipes Query</summary>

```graphql
query listRecipes {
  listRecipes {
    Recipes {
      ... on Recipe {
        id
        name
        price
        sku
        recipeType
        recipeYield
        directions
        ingredients {
          name
          quantity
        }
      }
      ... on Recipe_Partial {
        id
        name
        price
        sku
        recipeType
        recipeYield
        directions
        ingredients {
          name
          quantity
        }
      }
    }
  }
}
```
</details>

We will receive results that look similar to the following:

```json
{
  "data": {
    "listRecipes": {
      "Recipes": [
        {
          "id": "017b70eb-6d92-7039-4507-cc48eddb3c7c",
          "name": "Sprinkles Cupcake",
          "price": null,
          "sku": null,
          "recipeType": null,
          "recipeYield": null,
          "directions": null,
          "ingredients": null
        },
        {
          "id": "017b70ef-6e45-fd52-73f8-91c6862bdd68",
          "name": "Red Velvet Cake",
          "price": 5,
          "sku": "ca001",
          "recipeType": "cake",
          "recipeYield": 1,
          "directions": [
            "Mix dry ingredients",
            "Bake",
            "Profit"
          ],
          "ingredients": [
            {
              "name": "All-purpose Flour",
              "quantity": "453 grams"
            },
            {
              "name": "Granulated Sugar",
              "quantity": "680.3 grams"
            }
          ]
        }
      ]
    }
  }
}
```

`Eve`'s permissions on the Sprinkles Cupcake recipe have not changed. `Eve` should still be able to see the recipe **name**.

### Bob's Data Visibility

If we run the same listRecipes query from `Bob`'s GraphQL Explorer, we will see all data for the Sprinkles Cupcake recipe, not just the name.

```json
{
  "data": {
    "listRecipes": {
      "Recipes": [
        {
          "id": "017b70eb-6d92-7039-4507-cc48eddb3c7c",
          "name": "Sprinkles Cupcake",
          "price": 5.99,
          "sku": "cc001",
          "recipeType": "cupcake",
          "recipeYield": 100,
          "directions": [
            "Mix dry ingredients",
            "Bake",
            "Let cupcakes cool for 20min",
            "Make icing",
            "Put icing on cupcakes",
            "Profit"
          ],
          "ingredients": [
            {
              "name": "All-purpose Flour",
              "quantity": "783.33 grams"
            },
            {
              "name": "Granulated Sugar",
              "quantity": "833 grams"
            }
          ]
        },
        {
          "id": "017b70ef-6e45-fd52-73f8-91c6862bdd68",
          "name": "Red Velvet Cake",
          "price": 5,
          "sku": "ca001",
          "recipeType": "cake",
          "recipeYield": 1,
          "directions": null,
          "ingredients": null
        }
      ]
    }
  }
}
```

## Conclusion

Vendia makes it easy, fast, and fun to share data with partners.  With the introduction of fine-grained control, Uni participants now have the added capability of sharing the right data with the right control with other parties. Review our [product documentation](https://www.vendia.net/docs/share/fine-grained-data-permissions) for more information.
