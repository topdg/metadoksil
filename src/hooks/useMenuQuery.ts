import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      wpMenu(databaseId: {eq: 31}) {
        menuItems {
          nodes {
            label
            uri
          }
        }
      }
    }
  `)
  return data;
}