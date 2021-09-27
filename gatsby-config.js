module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Entropy",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Entropy",
        short_name: "entropy",
        start_url: "/",
        background_color: "#000",
        theme_color: "#000",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
