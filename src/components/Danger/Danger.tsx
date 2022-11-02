import { StaticImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'
import { Container } from '../../utils/components/Container/Container'
import * as styles from './Danger.module.scss'

export const Danger : FC = () => {
  return (
    <div className={ styles.danger }>
      <Container>
        <StaticImage src="../../assets/images/danger.svg" className={ styles.danger__img } alt="имеются противопоказания. требуется консультация специалиста"/>
      </Container>
    </div>
  )
}
