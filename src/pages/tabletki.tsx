import { graphql } from "gatsby"
import * as React from "react"
import type { HeadFC } from "gatsby"
import { Layout } from "../components/Layout/Layout"
import { Section } from "../utils/components/Section/Section";
import { Container } from "../utils/components/Container/Container";
import { Title } from "../utils/components/Title/Title";

import * as styles from './instruction.module.scss'
import { HeadContent } from "../components/HeadContent/HeadContent";

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

 
const TabletkiPage = ({ data } : any) => {
  const {
    wpPage: { title, content, id, acf__literature },
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