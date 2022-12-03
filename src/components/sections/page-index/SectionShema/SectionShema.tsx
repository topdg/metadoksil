import React, { FC } from 'react'
import { Container } from '../../../../utils/components/Container/Container'
import { Section } from '../../../../utils/components/Section/Section'
import { Title } from '../../../../utils/components/Title/Title'
import { cls } from '../../../../utils/utils'

import * as styles from './SectionShema.module.scss'
import { SectionShemaProps } from './SectionShema.types'
import { SectionShemaShema } from './SectionShemaShema'

export const SectionShema : FC<SectionShemaProps> = ({title, subtitle, text, shemaTitle, items}) => {
  return (
    <Section className={cls("section-grey", styles.sectionShema)}>
      <Container>
        {
          title &&
          <Title className="title-white"><span dangerouslySetInnerHTML={ {__html: title} } /></Title>
        }
        {
          subtitle &&
          <div className={styles.sectionShema__subtitle} dangerouslySetInnerHTML={ {__html: subtitle} } />
        }
        {
          text &&
          <div className={styles.sectionShema__text} dangerouslySetInnerHTML={ {__html: text} } />
        }
        <SectionShemaShema title={ shemaTitle } items={ items } />
      </Container>
    </Section>
  )
}
