import type { GatsbyConfig } from "gatsby";
import * as dotenv from 'dotenv'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Метадоксил`,
    siteUrl: `https://metadoxil.ru/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": dotenv.config().parsed?.API_HOST,
      }
    }, 
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: `blurred`,
          backgroundColor: `transparent`,
          quality: 100,
        }
      }
    }, 
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/images/icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: 91018412,
        trackHash: true,
        defer: false,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Ubuntu\:400,500`, `Source Sans Pro\:400,600,700`],
        display: `swap`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/assets/images/"
      },
      __key: "images"
    }
  ],
  pathPrefix: "/metadoksil"
};

export default config;
