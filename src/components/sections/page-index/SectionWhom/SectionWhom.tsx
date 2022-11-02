import React, { FC } from 'react'
import { Container } from '../../../../utils/components/Container/Container'
import { Title } from '../../../../utils/components/Title/Title'
import { SectionWhomProps } from './SectionWhom.types'
import { SectionWhomItem } from './SectionWhomItem'
import * as styles from './SectionWhom.module.scss'

export const SectionWhom : FC<SectionWhomProps> = ({title, items}) => {
  console.log(items);
  return (
    <section>
      <Container>
        <Title>{ title }</Title>
      </Container>
      <div className={styles.sectionWhom__items} >
        {items.map((el, i) => <SectionWhomItem key={i} {...el} />)}
      </div>
    </section>
  )
}
