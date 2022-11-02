import React, { FC } from 'react'
import { LiteratureProps } from './Literature.types'

import * as styles from './Literature.module.scss'

export const Literature : FC<LiteratureProps> = ( {title, list} ) => {

  return (
    <div className={ styles.literature }>
      {
        title &&
        <div className={ styles.literature__title }>{ title }</div>
      }
      <ol className={ styles.literature__list }>
        {
          list.map((el, i) => <li key={i} className={ styles.literature__list_item }>{el.item}</li> )
        }
      </ol>
    </div>
  )
}
