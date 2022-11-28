import React, { FC } from 'react'
import { Title } from '../../../../utils/components/Title/Title'
import { SectionProductsProps } from './SectionProducts.types'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './SectionProducts.module.scss'
import { cls } from '../../../../utils/utils'
import { ButtonLink } from '../../../../utils/components/ButtonLink/ButtonLink'

export const SectionProducts : FC<SectionProductsProps> = ( {title, subtitle, productsmain} ) => {

  return (
    <div className={ styles.sectionProducts__content }>
      <div className={ styles.sectionProducts__head }>
        {
          title &&
          <Title>{ title }</Title>
        }
        {
          subtitle &&
          <div className={ styles.sectionProducts__subtitle }>{ subtitle }</div>
        }
      </div>
      {
        productsmain &&
        <div className={ styles.sectionProducts__products }>
          {
            productsmain.map((el, i) => 
              <div className={ styles.sectionProducts__product }>
                {
                  el.img?.localFile?.childImageSharp?.gatsbyImageData &&
                  <div className={ styles.sectionProducts__product_picture }>
                    <GatsbyImage image={el.img.localFile.childImageSharp.gatsbyImageData} objectFit='contain' className={ styles.sectionProducts__product_img } alt={''} />
                  </div>
                }
                {
                  el.title &&
                  <div className={ styles.sectionProducts__product_title }>{ el.title }</div>
                }
                <ButtonLink href={el.url} target className={cls('buttonLink-blue', styles.sectionProducts__product_button)}>Выбрать</ButtonLink>
              </div>
            )
          }
        </div>
      }
    </div>
  )
}
