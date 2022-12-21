import React, { FC, useState } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Layout } from "../../../components/Layout/Layout"
import { HeadContent } from "../../../components/HeadContent/HeadContent"
import { Container } from "../../../utils/components/Container/Container"
import { Breadcrumbs } from "../../../utils/components/Breadcrumbs/Breadcrumbs"

import * as styles from './Instruction.module.scss';
import { Section } from "../../../utils/components/Section/Section"
import { Title } from "../../../utils/components/Title/Title"


const InstructionPostTemplate : FC<PageProps> = ({ data: { post } }) => {

  const featuredImage = {
    image: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.altText || ``,
  }

  const {pageInstruction: {screen1}} = post;
  let arrLeft = [];
  let arrRight = [];

  if (screen1.menulist.length > 0) {
    const centerIndex = Math.ceil(screen1.menulist.length / 2) - 1;
    for(let i = 0; i <= centerIndex; i++ ) arrLeft.push(screen1.menulist[i])
    for(let i = centerIndex + 1; i < screen1.menulist.length; i++ ) arrRight.push(screen1.menulist[i])
    
    console.log(arrLeft, arrRight)
  }

  return (
    <Layout>
      <Breadcrumbs current={{title: post?.title}} />
      <article
        className={styles.instruction}
        itemScope
        itemType="http://schema.org/Article"
      >
        <Section>
          <Container>
            <div className={styles.instruction__content}>
              <div className={styles.instruction__row}>
                <div className={styles.instruction__leftside}>
                  {
                    screen1?.title &&
                    <Title attributes={{itemProp:"headline"}}>{screen1?.title}</Title>
                  }
                  {
                    screen1?.subtitle &&
                    <div className={styles.instruction__subtitle}>{screen1?.subtitle}</div>
                  }
                  <div className={styles.instruction__info}>
                    {
                      screen1?.list.map((el, i) => 
                        <div key={i} className={styles.instruction__info_item}>
                          <span className={styles.instruction__info_name}>{el.name}</span>
                          <span className={styles.instruction__info_value}>{el.value}</span>
                        </div>
                      )
                    }
                  </div>

                </div>
                <div className={styles.instruction__rightside}>
                  {featuredImage?.image && (
                    <GatsbyImage alt={post.title} className={styles.instruction__img} objectFit="contain" image={featuredImage.image} />
                  )}
                </div>
              </div>
              {
                screen1?.text &&
                <div className={styles.instruction__text} dangerouslySetInnerHTML={{ __html: screen1?.text}} />
              }

              <div className={styles.instruction__menu}>
                {
                  screen1?.menutitle &&
                  <div className={styles.instruction__menu_title}>{screen1?.menutitle}</div>
                }
                <nav className={styles.instruction__menu_nav}>
                  <ul className={styles.instruction__menu_list}>
                    {
                      arrLeft.map((el, i) => <li key={`menu-left-${i}`} className={styles.instruction__menu_item}><a href={el.link} className={styles.instruction__menu_link}>{el.text}</a></li>)
                    }
                  </ul>
                  <ul className={styles.instruction__menu_list}>
                    {
                      arrRight.map((el, i) => <li key={`menu-right-${i}`} className={styles.instruction__menu_item}><a href={el.link} className={styles.instruction__menu_link}>{el.text}</a></li>)
                    }
                  </ul>
                </nav>
              </div>
            </div>
          </Container>
        </Section>

        {!!post.content && (
          <div itemProp="articleBody" className={styles.instruction__content} dangerouslySetInnerHTML={{ __html: post.content}} />
        )}
      </article>
    </Layout>
  )
}

export const Head : HeadFC = ({ data: { post } }) => {
  const { title, seo } = post
  return <HeadContent title={seo.title || post.title} description={seo.metaDesc || ''} />
}

export default InstructionPostTemplate

export const pageQuery = graphql`
  query InstructionPostById(
    $id: String!
  ) {
    post: wpInstruction(id: { eq: $id }) {
      id
      title
      content
      date(formatString: "DD.MM.YYYY")
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      seo {
        metaDesc
        metaKeywords
        title
      }
      pageInstruction {
        screen1 {
          title
          subtitle
          text
          list {
            name
            value
          }
          menutitle
          menulist {
            text
            link
          }
        }
      }
    }
  }
  `