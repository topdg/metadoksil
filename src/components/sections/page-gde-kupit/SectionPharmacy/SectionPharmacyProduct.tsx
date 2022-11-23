import React, { FC, useState } from 'react'
import { ISectionPharmacyProduct } from './SectionPharmacy.types'
import { cls } from '../../../../utils/utils'

import * as styles from './SectionPharmacy.module.scss'

export const SectionPharmacyProduct : FC<ISectionPharmacyProduct> = ( { items, title } ) => {

  const [active, setActive] = useState(false);

  const togglePharmacyList = () => {
    setActive(prev => !prev);
  }
  
  return (
    <div className={ cls(styles.sectionPharmacy__product, active && styles.sectionPharmacy__productActive) }>
      {
        title &&
        <div className={ styles.sectionPharmacy__product_title } dangerouslySetInnerHTML={ { __html: title }} onClick={togglePharmacyList} />
      }
      {
        items &&
        <ul className={ styles.sectionPharmacy__product_list }>
          {
            items.map((item, i) => 
              <li key={i} className={ styles.sectionPharmacy__product_item }>
              <a href={ item.link } target="blank" className={ styles.sectionPharmacy__product_item__link }>
                {
                  item.img?.localFile?.fields?.staticPath &&
                  <div className={ styles.sectionPharmacy__product_item__picture } >
                    <img src={ item.img?.localFile?.fields?.staticPath } className={ styles.sectionPharmacy__product_item__icon } alt={'иконка аптеки'} />
                  </div>
                }
              </a>
            </li>
            )
          }
        </ul>
      }
    </div>
  )
}
