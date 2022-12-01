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
<br>


## Gatsby setup

Then I created my Gatsby basic site. You can [take a look](https://www.gatsbyjs.com/docs/tutorial/part-0/) at their official documentation about how to set up the environment.


After all the setup, see if the site works. Then go to the GraphiQL Explorer on this url ```shell
    http://localhost:8000/___graphql
    ```
thenddndk















1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-blog-starter/
    gatsby develop
    ```


