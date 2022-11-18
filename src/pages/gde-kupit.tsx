import { graphql, HeadFC } from 'gatsby'
import React from 'react'
import { HeadContent } from '../components/HeadContent/HeadContent';
import { Layout } from '../components/Layout/Layout'
import { Container } from '../utils/components/Container/Container';
import { Section } from '../utils/components/Section/Section';


export const query = graphql`{
  wpPage(databaseId: {eq: 7}) {
    date
    seo {
      metaDesc
      metaKeywords
      title
    }

  }
}
`;

// pageWhereBuy {
//   screen1 {
//     title
//     subtitle
//     products {
//       subtitle
//       utekaId
//       img {
//         uri
//         link
//       }
//     }
//   }
//   screen2 {
//     subtitle
//     products {
//       name
//       items {
//         logo {
//           link
//         }
//         link
//       }
//     }
//   }
// }

const gdeKupitPage = ( { data } : any ) => {
  const {
    wpPage: { title, content, seo, id, mainPage, acf__literature, acf__faq },
  } = data

  return (
    <Layout>
      <Section>
        <Container>
          <pre>
            {
              JSON.stringify(data)
            }
          </pre>
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