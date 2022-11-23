import { graphql, HeadFC } from 'gatsby'
import React from 'react'
import { HeadContent } from '../components/HeadContent/HeadContent';
import { Layout } from '../components/Layout/Layout'
import { SectionPharmacy } from '../components/sections/page-gde-kupit/SectionPharmacy/SectionPharmacy';
import { SectionUteka } from '../components/sections/page-gde-kupit/SectionUteka/SectionUteka';
import { Breadcrumbs } from '../utils/components/Breadcrumbs/Breadcrumbs';
import { Container } from '../utils/components/Container/Container';
import { Section } from '../utils/components/Section/Section';

import * as styles from './gde-kupit.module.scss'


export const query = graphql`
query {
  wpPage(databaseId: {eq: 238}) {
    title
    content
    seo {
      title
      metaDesc
    }
    acf__literature {
      literature {
        title
        list {
          item
        }
      }
    }
    pageGdeKupit {
      title
      subtitle
      subtitle2
      productsmain {
        title
        utekaId
        img {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      products {
        title
        items {
          link
          img {
            localFile {
              fields {
                staticPath
              }
            }
          }
        }
      }
    }
  }
}
`;

const gdeKupitPage = ( { data } : any ) => {
  const {
    wpPage: { title, content, seo, id, pageGdeKupit, acf__literature, acf__faq },
  } = data

  return (
    <Layout>
      <Breadcrumbs current={{title}} />
      <Section>
        <Container>
          <div className={styles.gdeKupit__content}>
            <SectionUteka title={ pageGdeKupit.title } subtitle={ pageGdeKupit.subtitle } productsmain={ pageGdeKupit.productsmain } />
            <SectionPharmacy products={ pageGdeKupit.products } subtitle={ pageGdeKupit.subtitle2 } />
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export default gdeKupitPage;

export const Head: HeadFC = ({data}) => {
  const {
    wpPage: { title, seo },
  } = data

  return (
    <>
      <HeadContent title={seo.title || title} description={seo.metaDesc || ''} />
    </>
  )
 } 