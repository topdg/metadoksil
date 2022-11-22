import React, { FC } from 'react'
import { Container } from '../Container/Container'
import { BreadcrumbsProps } from './Breadcrumbs.types'

import * as styles from './Breadcrumbs.module.scss'
import { Link } from 'gatsby'

export const Breadcrumbs : FC<BreadcrumbsProps> = ( {parents, current} ) => {
  return (
    <nav className={ styles.breadcrumbs }>
      <Container>
        <ul className={ styles.breadcrumbs__list }>
          <li className={ styles.breadcrumbs__item }><Link to="/" className={ styles.breadcrumbs__link }>Метадоксил</Link></li>
          {
            parents
            &&
            parents.map((el, i) => <li className={ styles.breadcrumbs__item }><a href={ el.link } className={ styles.breadcrumbs__link }>{ el.title }</a></li>)
          }
          {
            current
            &&
            <li className={ styles.breadcrumbs__item }>{ current.title }</li>
          }
        </ul>
      </Container>
    </nav>
  )
}
