import { graphql } from "gatsby"
import * as React from "react"
import type { HeadFC } from "gatsby"
import { Layout } from "../components/Layout/Layout"
import { Title } from "../utils/components/Title/Title"
import { Section } from "../utils/components/Section/Section"
import { Container } from "../utils/components/Container/Container"
import { Button } from "../utils/components/Button/Button"
import { Literature } from "../components/Literature/Literature"

import '../assets/sass/style.scss';
import { Section2 } from "../components/sections/page-index/Section2/Section2"
import { FAQ } from "../components/FAQ/FAQ"
import videoBgWEBM from "../assets/video/sec1__bg.webm"
import videoBgOGV from "../assets/video/sec1__bg.ogv"
import { VideoBackground } from "../components/VideoBackground/VideoBackground"
import { SectionWhom } from "../components/sections/page-index/SectionWhom/SectionWhom"

export const query = graphql`
  query {
    wpPage(databaseId: {eq: 39}) {
      id
      title
      slug
      content
      mainPage {
        screen1 {
          video
          title
          subtitle
          button
        }
        screen2 {
          icon {
            sourceUrl
          }
          title
        }
        screenForWhom {
          title
          items {
            title
            type
            img {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            icon {
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData
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
    wpPage: { title, content, id, mainPage, acf__literature, acf__faq },
  } = data

  return (
  <Layout header="white">
    <Section className="section-blue page-home__screen-1">
      <video controls autoPlay width="1000px" height="1000px">
        <source src={videoBgWEBM} type="type/webm" />
        <source src={videoBgOGV} type="type/ogg" />
      </video>
      <video controls autoPlay width="1000px" height="1000px">
        <source src={'/sec1__bg.mp4'} type="type/mp4" />
        <source src={'/sec1__bg.webm'} type="type/webm" />
        <source src={'/sec1__bg.ogv'} type="type/ogg" />
      </video>
      <Container>
        <div className="page-home__screen-1__video"></div>
        <div className="page-home__screen-1__content">
          {
            mainPage?.screen1?.title &&
            <div className="page-home__screen-1__title" dangerouslySetInnerHTML={ {__html: mainPage.screen1.title }} /> 
          }
          { 
            mainPage?.screen1?.subtitle &&
            <div className="page-home__screen-1__subtitle" dangerouslySetInnerHTML={ {__html: mainPage.screen1.subtitle }} />
          }
          { 
            mainPage?.screen1?.button &&
            <Button 
              className="" 
              handlerClick={() => console.log(1)} 
              aria-label=""
            >
              { mainPage.screen1.button }
            </Button>
          }
        </div>
      </Container>
    </Section>
     {
      mainPage?.screen2 &&
      <Section2 items={mainPage.screen2}></Section2>
     }
     {
      mainPage?.screenForWhom &&
      <SectionWhom {...mainPage.screenForWhom} />
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

export const Head: HeadFC = () => {
  
  return (
    <title>Home Page</title>
  )
}
