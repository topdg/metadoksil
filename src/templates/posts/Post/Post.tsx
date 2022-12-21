import React, { FC, useState } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Layout } from "../../../components/Layout/Layout"
import { HeadContent } from "../../../components/HeadContent/HeadContent"
import { Container } from "../../../utils/components/Container/Container"
import { Breadcrumbs } from "../../../utils/components/Breadcrumbs/Breadcrumbs"
import { Literature } from "../../../components/Literature/Literature"
import { cls, getMinName, getMonthName, ROUTER } from "../../../utils/utils"

import * as styles from './Post.module.scss';
import { Button } from "../../../utils/components/Button/Button"


const BlogPostTemplate : FC<PageProps> = ({ data: { post } }) => {
  
  const [showAside, setShowAside] = useState(false);
  


  const featuredImage = {
    image: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.altText || ``,
  }

  const getDate = (date: string): string => {
    const dateArr = date.split('.');

    return +dateArr[0] + ' ' + getMonthName(+dateArr[1]) + ' ' + dateArr[2];
  }

  return (
    <Layout>
      <Breadcrumbs parents={[{title: 'Статьи', link: ROUTER.blog}]} current={{title: post?.title}} />
      <Container>
        <article
          className={styles.article}
          id="preview"
          itemScope
          itemType="http://schema.org/Article"
        >
            <div className={styles.article__row}>
              <div className={cls(styles.article__leftside, showAside && styles.article__leftsideActive)}>
                <Button 
                  className={styles.article__aside_button}
                  handlerClick={() => setShowAside(prev => !prev)} 
                  attributes={{'area-label': (showAside)?'Скрыть  быстрые ссылки':'Показать быстрые ссылки'}} 
                />
                <aside className={styles.article__aside}>
                  <div>
                    {
                      post?.postContent?.menu?.title &&
                      <div className={styles.article__aside_title}>{post?.postContent?.menu?.title}</div>
                    }
                    <nav className={styles.article__aside_nav}>
                      <ul className={styles.article__aside_list}>
                        {
                          post?.postContent?.menu?.items.map((el, i) => 
                            <li key={i} className={styles.article__aside_item}><a href={el.link} onClick={() => setShowAside(prev => false)} className={styles.article__aside_link}>{el.text}</a></li>
                          )
                        }
                      </ul>
                    </nav>
                  </div>
                  <div>
                    {
                      post?.postContent?.menu?.titleOutside &&
                      <div className={styles.article__aside_title}>{post?.postContent?.menu?.titleOutside}</div>
                    }
                    <nav className={styles.article__aside_nav}>
                      <ul className={styles.article__aside_list}>
                        {
                          post?.postContent?.menu?.itemsOutside?.map((el, i) => 
                            <li key={i} className={styles.article__aside_item}><a href={el.link} onClick={() => setShowAside(prev => false)} className={styles.article__aside_link}>{el.text}</a></li>
                          )
                        }
                      </ul>
                    </nav>
                  </div>
                </aside>
              </div>
              <div className={styles.article__rightside}>
                <header>
                  <div className={styles.article__content}>
                    <h1 itemProp="headline">{post.title}</h1>
                    <div className={styles.article__info}>
                      <div className={styles.article__date}>
                        <div className={styles.article__date_created}>{getDate(post.date)}</div>
                        <div className={styles.article__date_modified}>обновлено: {getDate(post?.modified)}</div>
                      </div>
                      {
                        post?.timeForReading?.time &&
                        <div className={styles.article__time}>{`${post?.timeForReading?.time} ${getMinName(post?.timeForReading?.time)}`} на чтение</div>
                      }
                    </div>
                    {
                      post?.postContent?.articlepreview?.text &&
                      <div className={styles.article__excerpt} dangerouslySetInnerHTML={{ __html: post?.postContent?.articlepreview?.text }}/>
                    }
                    {featuredImage?.image && (
                      <GatsbyImage alt={post.title} image={featuredImage.image} />
                    )}
                  </div>
                </header>

                {!!post.content && (
                  <section itemProp="articleBody" >
                    <div className={styles.article__content} dangerouslySetInnerHTML={{ __html: post.content}} />
                  </section>
                )}

                {
                  post?.acf__literature?.literature &&
                  <footer className={ styles.article__footer }>
                    <Literature {...post.acf__literature?.literature} />
                  </footer>
                }
              </div>
            </div>
        </article>
      </Container>
    </Layout>
  )
}

export const Head : HeadFC = ({ data: { post } }) => {
  const { title, seo } = post
  return <HeadContent title={seo.title || post.title} description={seo.metaDesc || ''} />
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "DD.MM.YYYY")
      modified(formatString: "DD.MM.YYYY")
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
      acf__literature {
        literature {
          title
          list {
            item
          }
        }
      }
      postContent {
        articlepreview {
          text
        }
        menu {
          title
          items {
            text
            link
          }
          titleOutside
          itemsOutside {
            text
            link
          }
        }
      }
      timeForReading {
        time
      }
    }
  }
`