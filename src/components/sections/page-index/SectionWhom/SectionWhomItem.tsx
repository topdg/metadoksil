import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'
import { ISectionWhomItem } from './SectionWhom.types'
import * as styles from './SectionWhom.module.scss'
import { cls } from '../../../../utils/utils'

export const SectionWhomItem : FC<ISectionWhomItem> = ({title, type, icon, img}) => {
  const image = getImage(img?.localFile);

  return (
    <div className={cls(styles.sectionWhom__item, type == 'grey' && styles.sectionWhom__itemGrey)}>
      <div className={styles.sectionWhom__item_head}>
        <div className={styles.sectionWhom__item_icon}>
          <img src={icon.sourceUrl} className={ styles.sectionWhom__item_icon } />
        </div>
        <span className={styles.sectionWhom__item_title}>{ title }</span>
      </div>
      <div className={styles.sectionWhom__item_picture}>
        <GatsbyImage image={image} alt={title} className={styles.sectionWhom__item_img} />
      </div>
    </div>
  )
}