import React, { FC } from 'react'
import { SectionShemaShemaProps } from './SectionShema.types'

import * as styles from './SectionShema.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

export const SectionShemaShema : FC<SectionShemaShemaProps> = ({ title, items }) => {
  return (
    <div className={styles.sectionShema__container}>
      <div className={styles.sectionShema__shema}>
        <div className={ styles.sectionShema__shema_title } dangerouslySetInnerHTML={ {__html: title} } />  
        {
          items.map((el, i) => 
          <div key={i} className={styles.sectionShema__item}>
              {
                el?.icon?.localFile?.fields?.staticPath &&
                <div className={styles.sectionShema__item_picture} >
                  <img src={ el.icon.localFile.fields.staticPath } alt="" />
                </div>
              }
            <div className={styles.sectionShema__item_text} dangerouslySetInnerHTML={ {__html: el.title} } />
          </div>
          )
        }
      </div>
    </div>
  )
}
