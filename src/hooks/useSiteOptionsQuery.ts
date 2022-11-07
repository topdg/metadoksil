import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const useSiteOptionsQuery = () => {
  const data = useStaticQuery(graphql`
  query {
    wp {
      mainOptions {
        acf__mainSiteSettings {
          siteOptions {
            address
            company
            copyright
            email
            emailContact
            fieldGroupName
            phone
          }
        }
      }
    }
  }
`)
  return data;
}