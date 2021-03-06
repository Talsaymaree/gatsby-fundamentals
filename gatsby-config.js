module.exports = {
  siteMetadata: {
    title: `Gatsby Fundementals Course`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.example.com`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ascii.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/some-other-sitemap.xml`,
        exclude: [`/using-typescript/`],
       
      }
    },
    `gatsby-plugin-sass`,
{
    resolve: `gatsby-source-rss-feed`,
    options: {
      url: `https://www.netlify.com/blog/index.xml`,
      name: `SampleBlog`,
    }
}
  ],
}
