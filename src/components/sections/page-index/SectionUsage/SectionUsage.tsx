import React, { FC } from 'react'
import { Container } from '../../../../utils/components/Container/Container'
import { Title } from '../../../../utils/components/Title/Title'
import { SectionUsageProps } from './SectionUsage.types'
import * as styles from './SectionUsage.module.scss'
import { Section } from '../../../../utils/components/Section/Section'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { cleanText, cls } from '../../../../utils/utils'
import { ButtonLink } from '../../../../utils/components/ButtonLink/ButtonLink'

export const SectionUsage : FC<SectionUsageProps> = ({title, items, img}) => {
  const image = img?.localFile?.childImageSharp?.gatsbyImageData || false;


  return (
    <Section className="section">
      <Container>
        <div className={styles.sectionUsage__content} >
          <div className={styles.sectionUsage__main} >
            <Title><span dangerouslySetInnerHTML={{__html: title}}></span></Title>
            <div className={styles.sectionUsage__items} >
              {items.map((el, i) => 
                <div key={i} className={styles.sectionUsage__item}>
                  <span className={styles.sectionUsage__item_title}>{ el.title }</span>
                  <div className={styles.sectionUsage__item_icons}>
                    {
                      el.icon1?.localFile?.fields?.staticPath &&
                      <div className={cls( styles.sectionUsage__item_icon, styles.sectionUsage__item_icon1 )}>
                        <img src={ el.icon1?.localFile?.fields?.staticPath } alt="" className={ styles.sectionUsage__item_icon } />
                      </div>
                    }
                    {
                      el.icon2?.localFile?.fields?.staticPath &&
                      <div className={cls( styles.sectionUsage__item_icon, styles.sectionUsage__item_icon2 )}>
                        <img src={ el.icon2?.localFile?.fields?.staticPath } alt="" className={ styles.sectionUsage__item_icon } />
                      </div>
                    }
                  </div>
                  <span className={styles.sectionUsage__item_text}>{ el.text }</span>
                </div>
              )}
            </div>
            <div className={styles.sectionUsage__buttons}>
              <ButtonLink href="/tabletki/" className={cls('buttonLink-blue', styles.sectionUsage__button)}>инструкция</ButtonLink>
              <ButtonLink href="/gde-kupit/" className={cls('buttonLink-lightblue', styles.sectionUsage__button)}>где купить?</ButtonLink>
            </div>
          </div>
          {
            image &&
            <div className={styles.sectionUsage__picture} >
              <GatsbyImage image={image} alt={cleanText(title)} />
            </div>
          }
        </div>
      </Container>
    </Section>
  )
}
