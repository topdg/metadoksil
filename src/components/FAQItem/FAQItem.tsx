import React, { FC, useState } from 'react'
import { Button } from '../../utils/components/Button/Button'
import { cls } from '../../utils/utils'
import { Question } from '../FAQ/FAQ.types'
import * as styles from '../FAQ/FAQ.module.scss'

export const FAQItem : FC<Question> = ({question, answer}) => {
  const [shown, setShown] = useState(false);

  const toggleQuestion = () => setShown(prev => !prev);

  return (
    <div className={ cls(styles.faq__item, shown && styles.faq__itemActive)}>
      <div className={ styles.faq__question }>
        <span className={ styles.faq__question_text } onClick={toggleQuestion} dangerouslySetInnerHTML={ { __html: question } } />
        <Button handlerClick={toggleQuestion} className={ styles.faq__button } attributes={ {"aria-label": shown ? 'Скрыть ответ' : 'Показать ответ'} }></Button>
      </div>
      {
        answer &&
        <div className={ styles.faq__answer } dangerouslySetInnerHTML={ { __html: answer } } />
      }
    </div>
  )
}
