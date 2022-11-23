import { StaticImage } from 'gatsby-plugin-image'
import React, { FC, useEffect, useState } from 'react'
import { Button } from '../../utils/components/Button/Button'
import { Container } from '../../utils/components/Container/Container'
import * as styles from './Danger.module.scss'

export const Danger : FC = () => {

  const [activeDanger, setActiveDanger] = useState(false);

  useEffect(() => {
    const dangerStatus = localStorage.getItem('Danger');
    if (!dangerStatus) {
      setActiveDanger(true)
    }
  }, [])

  const closeDanger = () => {
    setActiveDanger(prev => !prev);
    localStorage.setItem('Danger', '1')
  }

  if (!activeDanger){
    return null
  }

  return (
    <div className={ styles.danger }>
      <Container>
        <StaticImage src="../../assets/images/danger.svg" className={ styles.danger__img } alt="имеются противопоказания. требуется консультация специалиста" />
        <Button handlerClick={closeDanger} className={ styles.danger__close } attributes={{'aria-label': 'Скрыть предупредительную надпись'}}>
          <span className={ styles.danger__close_text }>с информацией ознакомлен(-а), скрыть</span>
          <StaticImage src="../../assets/images/eye-close.svg" className={ styles.danger__close_icon } alt="имеются противопоказания. требуется консультация специалиста" />
        </Button>
      </Container>
    </div>
  )
}
