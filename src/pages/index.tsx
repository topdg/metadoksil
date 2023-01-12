import { graphql } from "gatsby"
import * as React from "react"
import type { HeadFC } from "gatsby"
import { Layout } from "../components/Layout/Layout"
import { Section } from "../utils/components/Section/Section"
import { Container } from "../utils/components/Container/Container"
import { Literature } from "../components/Literature/Literature"
import { Section2 } from "../components/sections/page-index/Section2/Section2"
import { FAQ } from "../components/FAQ/FAQ"
import videoBgMP4 from "../assets/video/sec1__bg.mp4"
import videoBgWEBM from "../assets/video/sec1__bg.webm"
import videoBgOGV from "../assets/video/sec1__bg.ogv"
import { VideoBackground } from "../components/VideoBackground/VideoBackground"
import { SectionWhom } from "../components/sections/page-index/SectionWhom/SectionWhom"
import { cls } from "../utils/utils"
import { SectionUsage } from "../components/sections/page-index/SectionUsage/SectionUsage"
import { SectionShema } from "../components/sections/page-index/SectionShema/SectionShema"
import { HeadContent } from "../components/HeadContent/HeadContent"

import '../assets/sass/style.scss';

import * as styles from './index.module.scss'

export const query = graphql`{
  wpPage(databaseId: {eq: 39}) {
    id
    title
    slug
    content
    seo {
      metaDesc
      metaKeywords
      title
    }
    mainPage {
      screen1 {
        video
        title
        subtitle
        button
      }
      screenUsage {
        title
        items {
          title
          text
          icon2 {
            localFile {
            	fields {
              	staticPath
            	}
            }
          }
          icon1 {
            localFile {
              fields {
                staticPath
              }
            }
          }
        }
        img {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      screenHowWork {
        title
        subtitle
        text
        shemaTitle
        items {
          title
          icon {
            localFile {
              fields {
                staticPath
              }
            }
          }
        }
      }
      screenForWhom {
        title
        items {
          title
          img {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          icon {
            localFile {
              fields {
                staticPath
              }
            }
          }
        }
      }
      screen2 {
        title
        items {
          title
          icon {
            localFile {
              fields {
                staticPath
              }
            }
          }
        }
      }
    }
    acf__literature {
      literature {
        title
        list {
          item
        }
      }
    }
    acf__faq {
      title
      items {
        answer
        question
      }
    }
  }
}
`;

 
const IndexPage = ({ data } : any) => {
  const {
    wpPage: { title, content, seo, id, mainPage, acf__literature, acf__faq },
  } = data

  return (
  <Layout header="white" pageClassName="page-pt0">
    <Section className={cls('section-blue', styles.pageHome__screen1)} >
      <VideoBackground videos={[
          {src: videoBgMP4, type: "video/mp4"},
          {src: videoBgWEBM, type: "video/webm"},
          {src: videoBgOGV, type: "video/ogg"},
        ]}
      />
      <Container>
        <div className={styles.pageHome__screen1__content}>
          {
            mainPage?.screen1?.title &&
            <div className={styles.pageHome__screen1__title} dangerouslySetInnerHTML={ {__html: mainPage.screen1.title }} /> 
          }
          { 
            mainPage?.screen1?.subtitle &&
            <div className={styles.pageHome__screen1__subtitle} dangerouslySetInnerHTML={ {__html: mainPage.screen1.subtitle }} />
          }
          { 
            mainPage?.screen1?.button &&
            <a 
              className={styles.pageHome__screen1__button}
              href="#for-whom"
            >
              { mainPage.screen1.button }
            </a>
          }
        </div>
      </Container>
    </Section>

     {
      mainPage?.screen2 &&
      <Section2 {...mainPage.screen2}></Section2>
     }
     {
      mainPage?.screenForWhom &&
      <SectionWhom {...mainPage.screenForWhom} />
     }
     {
      mainPage?.screenHowWork &&
      <SectionShema {...mainPage.screenHowWork} />
     }

    { mainPage?.screenUsage &&
      <SectionUsage {...mainPage?.screenUsage} />
     }

    {
      acf__faq &&
      <Section className="section-lightblue">
        <Container>
          <FAQ {...acf__faq} />
        </Container>
      </Section>
    }

    {
      acf__literature &&
      <Section>
        <Container>
          <Literature {...acf__literature?.literature} />
        </Container>
      </Section>
    }
  </Layout>
  )
}

 export default IndexPage
 
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
