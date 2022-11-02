import { HeadFC } from 'gatsby'
import React from 'react'
import { Layout } from '../components/Layout/Layout'

const gdeKupitPage = () => {
  return (
    <Layout>
      <div>gde-kupit</div>
    </Layout>
  )
}

export default gdeKupitPage;

export const Head: HeadFC = () => <title>Not found</title>
