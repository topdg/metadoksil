import React, { FC } from 'react'
import { Container } from '../../../../utils/components/Container/Container'
import { Section } from '../../../../utils/components/Section/Section'
import { Title } from '../../../../utils/components/Title/Title'
import { cls } from '../../../../utils/utils'

import * as styles from './SectionShema.module.scss'
import { SectionShemaProps } from './SectionShema.types'
import { SectionShemaShema } from './SectionShemaShema'

export const SectionShema : FC<SectionShemaProps> = ({title, text, shemaTitle, items}) => {
  return (
    <Section className={cls("section-grey", styles.sectionShema)}>
      <Container>
        <Title className="title-center title-white"><span dangerouslySetInnerHTML={ {__html: title} } /></Title>
        <div className={styles.sectionShema__text} dangerouslySetInnerHTML={ {__html: text} } />
        <SectionShemaShema title={ shemaTitle } items={ items } />
      </Container>
    </Section>
  )
}
