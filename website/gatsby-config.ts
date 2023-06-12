import path from 'path';

import dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

// import * as algolia from './src/libs/algolia'
// import * as feed from './src/libs/feedSerializer'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const siteMetadata = {
  title: 'utils',
  description: 'Welcome to the documentation for @yondav/utils, a utility library, ready to use, written in typescript.',
  siteUrl: 'https://yondav.us',
  author: 'yondav', // Github username
};

const config: GatsbyConfig = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [ '.md', '.mdx' ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/generated`,
        // name: 'strings',
        // type: 'string'
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/generated/methods`,
    //     name: 'methods',
    //     type: 'method'
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/generated/demos`,
    //     name: 'demos',
    //     type: 'demo'
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
    //     queries: algolia.queries,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     feeds: [
    //       {
    //         query: `${feed.query}`,
    //         output: '/rss.xml',
    //         title: `RSS Feed - ${siteMetadata.title}`,
    //         description: `${siteMetadata.description}`,
    //         serialize: ({ query }: feed.SerializeProps) =>
    //           feed.serializer({ query, siteMetadata }),
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteMetadata.siteUrl,
        policy: [ { userAgent: '*', allow: '/' } ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#007ACC',
        theme_color: '#007ACC',
        display: 'minimal-ui',
        icon: 'src/images/utils.svg', // This path is relative to the root of the site.
      },
    },
  ],
};

export default config;
