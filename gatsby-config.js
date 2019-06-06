/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "ZoeLiao's Website",
        siteURL: "http://zoeliao.blog",
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                //icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            Options: {
                plugins: [
                    `gatsby-remark-prismjs`,
                ]
            },
        },
    ],
}
