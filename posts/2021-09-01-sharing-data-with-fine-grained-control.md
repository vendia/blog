---
title: "Sharing Data with Fine-grained Control"
description: "Defining Data Access Among Partners in a Universal Application"
longDescription: >
    Defining Data Access Among Partners in a Universal Application
date: '2021-09-01'
authors:
  - Brian McNamara
---

Vendia Share offers customers the ability to share data with internal and external partners. Our customers often want to share data while also enforcing fine-grained access controls restricting partners to only the data elements they're authorized to access. Vendia Share has had the ability to enforce access controls on files. Today, we're proud to announce the release of these same controls on data elements. With this release, Uni nodes can specify which party has the ability to read or write data on a per-data-element basis.

Let's use an example and explore the mechanics you can use to take advantage of this feature.

## Introducing Alice, Bob, and Eve

Let's say we have data - recipes - that needs to be shared among three parties - `Alice`, `Bob`, and `Eve`. `Alice` is known for creating amazing recipes and licenses her popular recipes to commercial bakeries. Because she derives income from these sales, it's important for her to control who can see them. `Alice` also has a need to share her catalog of recipes to drive her business. The catalog contains a subset of recipe data - everything except for the _ingredients_ and _directions_. `Bob` and `Eve` both own bakeries and know that `Alice` has a knack for putting together some great recipes for cakes, cupcakes, cookies, pies, and muffins.

In this post, we'll explore how to translate these business requirements into a data sharing model. First, we'll review how `Alice` can selectively share recipe attributes with `Bob` and `Eve`. Second, we'll demonstrate how `Alice` can provide read-only access to entire recipes that have been purchased.


## Bootstrapping Our Recipe Uni

In order to share our recipe data, we need to first create a Uni. Let's use the following schema to define our data model. Please note we're using a new top-level type in our schema - **x-vendia-acls** - to indicate we will be allowing fine-grained control in our data model as well as the type we will be allowing the controls on.  

**NOTE:** If we don't include **x-vendia-acls**, all parties in a Uni will have the ability to read and write data; this is the default behavior.

<details>
<summary>Recipe Schema</summary>

Save the file below as `schema.json`.

```graphql
{
   "$schema": "http://json-schema.org/draft-07/schema#",
   "$id": "http://vendia.com/schemas/blog/fine_grained_control.json",
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

**NOTE:** Take care to update the name of the Uni and the userId and region for each node.

**NOTE:** Uni names must be uniquely named.

```json
{
    "name": "fine-grained-control-example",
    "schema": "schema.json",
    "nodes": [
        {
          "name": "Alice",
          "userId": "user@vendia.com",
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
          "name": "Bob",
          "userId": "user@vendia.com",
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
          "name": "Eve",
          "userId": "user@vendia.com",
          "region": "us-east-2",
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

We can use the [Vendia CLI](https://www.vendia.com/docs/share/cli) to deploy our Uni. Use the following command to get our sample Uni up and running.

```bash
share uni create -c registration.json
```

## Selectively Share Recipe Attributes

`Alice` wants her recipe catalog to be fully visible to potential clients in order to drive more business. However, she needs to control access to those recipes, limiting the actual _directions_ and _ingredients_ to those bakeries who have purchased them. We need to model the access control to the underlying data. We can specify the recipe attributes and the access privileges to those attributes.

`Alice` can use the following GraphQL mutation to add a new cupcake recipe to her catalog. Make note of the new attribute in our mutation - **aclInput**. This is where `Alice` can specify who should have specified permissions applied to her new recipe. Using this simple example, Alice will only let Bob and Eve see the catalog information - the _recipe name_, _price_, _sku_, _recipeType_, and _recipeYield_.

<details>
<summary>addSprinklesCupcake Mutation</summary>

Run the following mutation from the `Alice` GraphQL Explorer.

```graphql
mutation addSprinklesCupcake {
  add_Recipe(
    input: {
      name: "Sprinkles Cupcake", 
      sku: "cc001", 
      price: 5.99, 
      recipeType: cupcake, 
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
            nodes: ["*"]
          }, 
          path: "name", 
          operations: [READ]
        }, 
        {
          principal: {
            nodes: ["*"]
          }, 
          path: "sku", 
          operations: [READ]
        }, 
        {
          principal: {
            nodes: ["*"]
          }, 
          path: "price", 
          operations: [READ]
        }, 
        {
          principal: {
            nodes: ["*"]
          }, 
          path: "recipeType", 
          operations: [READ]
        }, 
        {
          principal: {
            nodes: ["*"]
          }, 
          path: "recipeYield", 
          operations: [READ]
        }
      ]
    }
  ) {
    transaction {
      transactionId
    }
  }
}
```
</details>

In this example, we use **"*"** for our nodes. This is a short-hand representation of _all current and future nodes in our Uni_. Alternately, we could have specified each node as an item in a list like so:

```json
principal: {
    nodes: [ "Bob", "Eve" ]
}
```

**NOTE:** These two approaches are not interchangeable with respect to newly added business partners. If nodes are defined explicitly and need access to existing data then you will need to update the **aclInput** of those records accordingly.

When `Alice` inserts this new recipe, `Bob` and `Eve` will be able to view some, but not all, properties. `Bob` and `Eve` will be able to read the catalog data of the Sprinkles Cupcake recipe. However, neither will be able to see the  _ingredients_ or _directions_ since Alice didn't give either of them access to those properties. They will also not be able to update or delete the recipe since they both only have READ access. Let's run the following query from the GraphQL Explorer associated with either `Bob` or `Eve` to confirm the behavior.

<details>
<summary>listRecipes Query</summary>

Run this query from either the `Bob` or `Eve` GraphQL Explorer.

```graphql
query listRecipes {
  list_RecipeItems {
    _RecipeItems {
      ... on Self_Recipe {
        _id
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
      ... on Self_Recipe_Partial_ {
        _id
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
          "id": "017b9817-ee1e-2ab8-4ec4-44ea4b12ae2b",
          "name": "Sprinkles Cupcake",
          "price": 5.99,
          "sku": "cc001",
          "recipeType": "cupcake",
          "recipeYield": 100,
          "directions": null,
          "ingredients": null
        }
      ]
    }
  }
}
```

_Notice the name, price, sku, recipeType, and recipeYield are visible; the ingredient and directions fields are displayed as null._

![Sharing Selected Properties](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-09-01-sharing-data-with-fine-grained-control/01-fine-grained-share-selected-properties.png)

## Selectively Share Entire Recipes

### New Red Velvet Cake

We know that `Alice` will only share directions and ingredients with customers who have purchased a recipe. `Alice` has come up with a new recipe for Red Velvet Cake. She wants to make sure that both `Bob` and Eve have the ability to see this new recipe in the catalog.

We can run the following mutation from `Alice`'s GraphQL Explorer.


<details>
<summary>addRedVelvetCake Mutation</summary>

Run this query from the `Alice` GraphQL Explorer.

```graphql
mutation addRedVelvetCake {
  add_Recipe(
    input: {
        name: "Red Velvet Cake",
        sku: "ca001",
        price: 5.00,
        recipeType: cake,
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
      transaction {
          transactionId
      }   
  }
}
```
</details>

Since no one has yet bought the recipe, _only the catalog data is available to Bob and Eve._

![Red Velvet Cake Visibility Before Purchase](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-09-01-sharing-data-with-fine-grained-control/02-fine-grained-share-red-velvet-before-purchase.png)

In our scenario, `Eve` has set up [notifications](https://www.vendia.com/docs/share/integrations#outbound) when a new recipe has been added. `Eve` has been keeping an eye out for a Red Velvet Cake recipe and decides to buy `Alice`'s recipe. After going through the purchase process, `Alice` can update Eve's permissions to allow full read access to the Red Velvet Cake recipe. Let's update the Red Velvet Cake recipe to allow `Eve` to view all the attributes.

### Update ACLs on the Existing Red Velvet Cake Recipe

First, we will need to identify the **_id** of the Red Velvet Cake recipe.

<details>
<summary>listRecipes - Red Velvet Cake</summary>

```graphql
query listRecipes {
  list_RecipeItems(filter: {name: {eq: "Red Velvet Cake"}}) {
    _RecipeItems {
      ... on Self_Recipe {
        _id
        name
        _acl {
          principal {
            nodes
          }
          path
          operations
        }
      }
      ... on Self_Recipe_Partial_ {
        _id
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

Once we have the **_id** of the recipe, we can run another query to update the ACL on the Red Velvet Cake recipe.

**NOTE:** Your _id value will be different. Replace the _id field in the following examples with the one returned in your actual list.

<details>
<summary>updateRedVelvetCakeAcl After Eve's Purchase</summary>

```graphql
mutation updateRedVelvetCakeAcl {
  put_Recipe(
      id: "017cf035-6a71-219b-97ab-3af9e2386f72",
      input: {
          name: "Red Velvet Cake",
          sku: "ca001",
          price: 5.00,
          recipeType: cake,
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
              },
          ]
      }
    ) {
    transaction {
          transactionId
      } 
  }
}
```
</details>

![Red Velvet Cake Visibility After Purchase](https://d24nhiikxn5jns.cloudfront.net/images/blogs/2021-09-01-sharing-data-with-fine-grained-control/03-fine-grained-share-red-velvet-after-purchase.png)


#### Eve's Data Visibility

Now that `Eve` has purchased the Red Velvet Cake recipe and Alice has updated permissions on it, we can run the following listRecipes query from `Eve`'s GraphQL Explorer.

<details>
<summary>listRecipes Query</summary>

```graphql
query listRecipes {
  list_RecipeItems {
    _RecipeItems {
      ... on Self_Recipe {
        _id
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
      ... on Self_Recipe_Partial_ {
        _id
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
    "list_RecipeItems": {
      "_RecipeItems": [
        {
          "_id": "017cf031-8f01-360c-dfc8-c15a17d348dc",
          "name": "Sprinkles Cupcake",
          "price": 5.99,
          "sku": "cc001",
          "recipeType": "cupcake",
          "recipeYield": 100,
          "directions": null,
          "ingredients": null
        },
        {
          "_id": "017cf035-6a71-219b-97ab-3af9e2386f72",
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

Both _directions_ and _ingredients_ are available for the Red Velvet Cake recipe `Eve` purchased and permissions to the Sprinkles Cupcake recipe remain unchanged.

#### Bob's Data Visibility

`Bob` hasn't purchased any recipes from `Alice`, which is reflected in the data to which he has access. If we run the same **listRecipes** query from `Bob`'s GraphQL Explorer, we will see all data for both the Sprinkles Cupcake and Red Velvet Cake recipes except for the _directions_ and _ingredients_.


```json
{
  "data": {
    "list_RecipeItems": {
      "_RecipeItems": [
        {
          "_id": "017cf031-8f01-360c-dfc8-c15a17d348dc",
          "name": "Sprinkles Cupcake",
          "price": 5.99,
          "sku": "cc001",
          "recipeType": "cupcake",
          "recipeYield": 100,
          "directions": null,
          "ingredients": null
        },
        {
          "_id": "017cf035-6a71-219b-97ab-3af9e2386f72",
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

Vendia makes it easy, fast, and fun to share data with partners.  With the introduction of fine-grained data access control, it's now even easier for companies to control how their data is used, and for developers to quickly convert those policies into secure Universal Applications (Unis). Review our [product documentation](https://www.vendia.com/docs/share/fine-grained-data-permissions) for more information.
