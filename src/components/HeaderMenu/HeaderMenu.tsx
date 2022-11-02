import { Link } from "gatsby"
import React, { FC } from "react"

import * as styles from '../Header/Header.module.scss';

interface HeaderMenuItem {
  label: string
  uri: string
}

export interface HeaderMenuItems {
  items: HeaderMenuItem[]
}

export const HeaderMenu : FC<HeaderMenuItems> = ( {items} ) => {

  return (
    <nav className={ styles.header__menu }>
      <ul className={ styles.header__menu_list }>
        {
          items.map((el, i) => <li key={i} className={ styles.header__menu_item }><Link to={el.uri} className={ styles.header__menu_link }>{el.label}</Link></li>)
        }
      </ul>
    </nav>
  )
}