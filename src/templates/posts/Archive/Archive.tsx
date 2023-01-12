import React, { FC } from "react"
import { Link, graphql, HeadFC, PageProps } from "gatsby"
import { Layout } from "../../../components/Layout/Layout"
import { Section } from "../../../utils/components/Section/Section"
import { Container } from "../../../utils/components/Container/Container"
import { Title } from "../../../utils/components/Title/Title"
import { HeadContent } from "../../../components/HeadContent/HeadContent"
import { ROUTER } from "../../../utils/utils"
import { Breadcrumbs } from "../../../utils/components/Breadcrumbs/Breadcrumbs"

import * as styles from './Archive.module.scss'
import { ButtonLink } from "../../../utils/components/ButtonLink/ButtonLink"

const Archive : FC<PageProps> = ({
  data
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <Section>
          <Container>
            <Title>Полезные материалы</Title>
            <p>Вы не добавили еще ни одной статьи</p>
          </Container>
        </Section>
      </Layout>
    )
  }

  return (
    <Layout>
      <Breadcrumbs current={{title: 'Статьи'}} />
      <Section className="section-pt0">
        <Container>
          <div className={styles.archive__content}>
            <Title>Полезные материалы</Title>
            <ul className={styles.archive__items}>
              {posts.map((post, i) => 
                <li key={post.uri} className={styles.archive__item}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <div className={styles.archive__item_tag}>о похмелье</div>
                      {
                        post.title &&
                        <h4 itemProp="headline" className={styles.archive__item_title}>{post.title}</h4>
                      }
                    </header>
                    <div itemProp="description" className={styles.archive__item_preview} dangerouslySetInnerHTML={{__html: post.excerpt}} />
                    <ButtonLink href={ROUTER.blog + post.slug + '/'} attributes={{itemProp: "url"}} className={styles.archive__item_button}>Читать полностью</ButtonLink>
                  </article>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export const Head: HeadFC = ({data}) => {

  return <HeadContent title="Блог - Метадоксил" />
}

export default Archive

export const pageQuery = graphql`{
  allWpPost {
    nodes {
      excerpt
      slug
      title
      excerpt
    }
  }
}`