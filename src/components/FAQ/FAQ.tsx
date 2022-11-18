import React, { FC } from 'react'
import { FAQProps } from './FAQ.types'
import { Title } from '../../utils/components/Title/Title'
import * as styles from './FAQ.module.scss'
import { FAQItem } from '../FAQItem/FAQItem'

export const FAQ : FC<FAQProps> = ( {title, items} ) => {

  return (
    <div className={ styles.faq__content }>
      {
        title &&
        <Title>{title}</Title>
      }
      <div className={ styles.faq__items }>
        {
          items.map((el, i) => <FAQItem key={i} {...el} />)
        }
      </div>
    </div>
  )
}
