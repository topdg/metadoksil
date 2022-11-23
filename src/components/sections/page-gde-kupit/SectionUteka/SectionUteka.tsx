import React, { FC } from 'react'
import { Title } from '../../../../utils/components/Title/Title'
import { SectionUtekaProps } from './SectionUteka.types'
import { Button } from '../../../../utils/components/Button/Button'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './SectionUteka.module.scss'
import { cls } from '../../../../utils/utils'
import { Uteka } from '../../../Uteka/Uteka'
import { ButtonLink } from '../../../../utils/components/ButtonLink/ButtonLink'
import { Script } from 'gatsby'

export const SectionUteka : FC<SectionUtekaProps> = ( {title, subtitle, productsmain} ) => {

  return (
    <div className={ styles.sectionUteka__content }>
      <div className={ styles.sectionUteka__head }>
        {
          title &&
          <Title>{ title }</Title>
        }
        {
          subtitle &&
          <div className={ styles.sectionUteka__subtitle }>{ subtitle }</div>
        }
      </div>
      {
        productsmain &&
        <div className={ styles.sectionUteka__products }>
          {
            productsmain.map((el, i) => 
              <div className={ styles.sectionUteka__product }>
                {
                  el.img?.localFile?.childImageSharp?.gatsbyImageData &&
                  <div className={ styles.sectionUteka__product_picture }>
                    <GatsbyImage image={el.img.localFile.childImageSharp.gatsbyImageData} alt={''} />
                  </div>
                }
                {
                  el.title &&
                  <div className={ styles.sectionUteka__product_title }>{ el.title }</div>
                }
                <ButtonLink href="https://uteka.ru" attributes={ { "data-product-id": el.utekaId } } className={cls('buttonLink-blue', styles.sectionUteka__product_button)}>Выбрать</ButtonLink>
              </div>
            )
          }
        </div>
      }
      <Uteka id={12} />
    </div>
  )
}
