import { graphql } from 'gatsby';
import React from 'react'
import { Layout } from '../components/Layout/Layout';

import './in-develop.scss'

export const query = graphql`
query {
  wpPage(databaseId: {eq: 278}) {
    title
    content
  }
}`;

const pageInDevelop = ({ data }) => {
  const {
    wpPage: { title, content },
  } = data;

  return (
    <Layout pageClassName='page-pt'>
        <div className='in_develop' dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default pageInDevelop;