import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import type { HeadFC } from "gatsby"
import { Layout } from "../components/Layout/Layout"
import { HeadContent } from "../components/HeadContent/HeadContent";

import './instruction.scss'

export const query = graphql`{
  wpPage(databaseId: {eq: 141}) {
    id
    title
    slug
    content
    acf__literature {
      literature {
        title
        list {
          item
        }
      }
    }
  }
}
`;

 
const TabletkiPage: FC<PageProps> = ({ data }) => {
  const {
    wpPage: { content},
  } = data

  return (
  <Layout pageClassName="instruction">
    <div className="" dangerouslySetInnerHTML={ {__html: content} }></div>
  </Layout>
  )
}

 export default TabletkiPage

export const Head: HeadFC = ({data}) => {
  const {
    wpPage: { title, seo },
  } = data
  
  return (
    <>
      <HeadContent title={title} />
    </>
  )
}