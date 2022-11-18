import { StaticImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'
import { Container } from '../../../../utils/components/Container/Container'
import { Section } from '../../../../utils/components/Section/Section'
import { Section2Props } from './Section2.types'

import * as styles from './Section2.module.scss'

export const Section2 : FC<Section2Props> = ( { items } ) => {

  return (
    <Section>
      <Container>
        <div className={styles.section2__items}>
          {
            items.map((el, i) => 
              <div key={i} className={ styles.section2__item }>
                {
                  el.icon?.localFile?.fields?.staticPath &&
                  <div className={ styles.section2__item_picture } >
                    <img src={ el.icon?.localFile?.fields?.staticPath } className={ styles.section2__item_img } alt={ el.title } />
                  </div>
                }
                <span>{ el.icon.sourceUrl }</span>
                <div className={ styles.section2__item_title } dangerouslySetInnerHTML={ {__html: el.title} } />
              </div>  
            )
          }
        </div>
      </Container>
    </Section>
  )
}
