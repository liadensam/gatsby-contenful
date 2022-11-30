/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */


/**
 * const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}
 */



module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: {
      name: `Kyle Mathews`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `or9y9df7zffb`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `0vnvHK0_LcoRi6IvP1h0-PBXfj65oECAs7jw2e6YlYk`,
      },
    },
    `gatsby-plugin-image`,
  ],
}
