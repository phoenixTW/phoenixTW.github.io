module.exports = {
  siteMetadata: {
    title: `Kaustav Chakraborty`,
    description: `Personal website of Kaustav Chakraborty showcasing the skills and achievements`,
    author: `@phoenixTW`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kaustav Chakraborty - Personal website`,
        short_name: `Kaustav Chakraborty`,
        start_url: `/`,
        background_color: `#232f38`,
        theme_color: `#232f38`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
