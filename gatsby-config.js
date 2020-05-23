module.exports = {
  siteMetadata: {
    title: 'Adams Alves',
    author: 'Adams O. S. Alves',
    description: 'Adams Alves - Desenvolvimento Web e Front End em São Paulo/SP.',
    bio: 'Trabalho com <strong>Desenvolvimento Web</strong> e <strong>Front-End</strong>, em projetos que usam Wordpress, Javascript (ES6+) e Vue.js.',
    siteUrl: 'https://adamsalves.com.br/',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-88293764-1`,
        head: false,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adams Alves - Dev. Front-end`,
        short_name: `Adams Alves`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#131313`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
