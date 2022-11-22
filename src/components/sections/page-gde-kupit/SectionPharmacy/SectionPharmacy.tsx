import React, { FC } from 'react'
import { SectionPharmacyProps } from './SectionPharmacy.types'
import { cls } from '../../../../utils/utils'
import { SectionPharmacyProduct } from './SectionPharmacyProduct'

import * as styles from './SectionPharmacy.module.scss'

export const SectionPharmacy: FC<SectionPharmacyProps> = ({ products, subtitle }) => {

  
  return (
    <div className={ cls(styles.sectionPharmacy__content, styles.sectionPharmacy) }>
      {
        subtitle &&
        <div className={ styles.sectionPharmacy__subtitle }>{ subtitle }</div>
      }
      {
        products &&
        <div className={ styles.sectionPharmacy__products }>
        {
          products.map((el, i) => 
            <SectionPharmacyProduct key={ i } {...el} />
          )
        }
        </div>
      }
    </div>
  )
}