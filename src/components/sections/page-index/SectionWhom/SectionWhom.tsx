import React, { FC } from 'react'
import { Container } from '../../../../utils/components/Container/Container'
import { Title } from '../../../../utils/components/Title/Title'
import { SectionWhomProps } from './SectionWhom.types'
import { Section } from '../../../../utils/components/Section/Section'
import * as styles from './SectionWhom.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import { cls } from '../../../../utils/utils'

export const SectionWhom : FC<SectionWhomProps> = ({title, items}) => {

  return (
    <Section className="section-pb0" attributes={{id: "for-whom"}}>
      <Container>
        <Title className="title-center">{ title }</Title>
      </Container>
      <div className={styles.sectionWhom__items} >
        {
        items.map((el, i) =>
          <div key={i} className={cls(styles.sectionWhom__item, el.type == 'grey' && styles.sectionWhom__itemGrey)}>
            <div className={styles.sectionWhom__item_head}>
              {
                el.icon?.localFile?.fields?.staticPath
                &&
                <div className={styles.sectionWhom__item_icon}>
                  <img src={ el.icon?.localFile?.fields?.staticPath } alt={ title } className={ styles.sectionWhom__item_icon } />
                </div>
              }
              <span className={cls(styles.sectionWhom__item_title, styles.sectionWhom__item_titleWhite)}>{ el.title }</span>
            </div>
            <div className={styles.sectionWhom__item_picture}>
              {
                el.img?.localFile?.childImageSharp?.gatsbyImageData &&
                <GatsbyImage image={el.img?.localFile?.childImageSharp?.gatsbyImageData} alt={title} className={styles.sectionWhom__item_img} />
              }
            </div>
          </div>
        )
        }
      </div>
    </Section>
  )
}
