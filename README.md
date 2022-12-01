# Gatsby and Contenful 🟣

I created simple mini site just to show that I can connect to the headless CMS and display the data.

<br>

#### [`Live Site`](https://gatsby-contenful.vercel.app/)

<br>

As to create this project I needed:

- [Contentful](https://www.contentful.com/):
  - Contentful account
  - Space Id
  - Access token
  - Some content in Contentful to query


<br>


- [Gatsby](https://www.gatsbyjs.com/):
  - Basic Gatsby site


<br>

## Contenful setup


Once you have Contentful account you will create `space`. Before creating a content you need to create `fields` defining the content.


<br>


- url
  - This is of type `Text` – with a sub selection of `Short text`
    On the `Validation` tab make sure this is set to `Required Field``

- title
  - This is of type `Text` – with a sub selection of `Short text`
    description

- description
  - This is of type `Text` – with a sub selection of `Long text`

- image
  - This is of type `Media`



<br>
<br>


<img src="/assets/content-fields.png">


<br>
<br>


Then you need to create some content in order to be able to see any data in GraphQL. And don´t forget to `PUBLISH` it. 


<br>


<img src="/assets/coffee-content.png">


<br>
<br>


<img src="/assets/smile-content.png">


<br>
<br>


<img src="/assets/smile-img.png">


<br>


## Gatsby setup

Then you create Gatsby basic site. You can [take a look](https://www.gatsbyjs.com/docs/tutorial/part-0/) at their official documentation about how to set up the environment.


After all the setup, see if the site works. Then go to the GraphiQL Explorer on this url: [http://localhost:8000/___graphql](http://localhost:8000/___graphql).


You can use the following `allSitePage` query just to confirm everything is working correctly.

<br>

### gatsby-source-contentful

- [Sourcing from Contentful ~ Gatsby docs](https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-contentful/)

- [gatsby-source-contenful ~ GitHub repo](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-contentful)


Both of these resources cover how to install and configure the plugin.

<br>

### API keys

As mentioned in the Contentful plugin docs the two variables you’ll need are the `spaceId` and the `accessToken`, both of these can be found in Contentful by navigating to **`Settings > API Keys.`**

Install `dotenv` and use [Environment Variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/). In my project I used them, but as for you to see, if you would like to try to run it on your computer, I kept them unhidden. But definitely it is a good practice to keep them not visible.


Now, navigate again to GraphiQL using [http://localhost:8000/___graphql](http://localhost:8000/___graphql). This time you will use `allContentfulPage` query to see al the posts and then `contenfulPage` to see one post.

<br>
<br>


<img src="/assets/grapiql.png">


<br>


### Pages

To create Gatsby pages from the page data sourced from Contentful you’ll need to understand two concepts

<br>

- [Collection Routes ~ Gatsby docs](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/#collection-routes)
- [Querying Data in Pages with GraphQL](https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/)

<br>

To use collection routes, create a new file in `/src/pages` and call it `{contentfulPage.url}.js`

Then I added the single page to this file and with the link to the other page as well.

<br>

### Conclusion

I learnt a lot while working on this project. Even if it is super simple, you need to do many steps to get to this point and if you are working with a new techstack, I think it is a great success to connect everything, have it running and deployed 🤞




