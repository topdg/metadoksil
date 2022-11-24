import React, { FC } from 'react'
import { MenuProps } from './Menu.types'
import { cls } from '../../utils'
import { Link } from 'gatsby';

import * as styles from './Menu.module.scss';

export const Menu : FC<MenuProps> = ( {active, toggleMenu} ) => {
  return (
    <nav className={cls(styles.menu, active && styles.menuActive)}>
      <div className={ styles.menu__content }>
        <div className={ styles.menu__group }>
          <div className={ styles.menu__group_title }>Метадоксил</div>
          <ul className={ styles.menu__group_list }>
            <li className={ styles.menu__group_item }><Link to="/in-develop/" className={ styles.menu__group_link }>О препарате</Link></li>
            <li className={ styles.menu__group_item }><Link to="/in-develop/" className={ styles.menu__group_link }>Научные публикации</Link></li>
            <li className={ styles.menu__group_item }><Link to="/tabletki/" className={ styles.menu__group_link }>Инструкция, таблетки</Link></li>
            <li className={ styles.menu__group_item }><Link to="/in-develop/" className={ styles.menu__group_link }>Инструкция, раствор</Link></li>
            <li className={ styles.menu__group_item }><Link to="/gde-kupit/" className={ styles.menu__group_link }>Где купить</Link></li>
          </ul>
        </div>
        <div className={ styles.menu__group }>
          <div className={ styles.menu__group_title }>Показания</div>
          <ul className={ styles.menu__group_list }>
            <li className={ styles.menu__group_item }><Link to="/in-develop/" className={ styles.menu__group_link }>При абстинентном синдроме</Link></li>
            <li className={ styles.menu__group_item }><Link to="/in-develop/" className={ styles.menu__group_link }>При острой интоксикации организма алкоголем</Link></li>
            <li className={ styles.menu__group_item }><Link to="/in-develop/" className={ styles.menu__group_link }>При пагубном потреблении алкоголя</Link></li>
            <li className={ styles.menu__group_item }><Link to="/in-develop/" className={ styles.menu__group_link }>При амнестическом синдроме</Link></li>
          </ul>
        </div>
        <div className={ styles.menu__group }>
          <div className={ styles.menu__group_title }>О похмелье</div>
          <ul className={ styles.menu__group_list }>
            <li className={ styles.menu__group_item }><Link to="/kalkulyator-alkogolya-v-krovi/" className={ styles.menu__group_link }>Алкогольный калькулятор</Link></li>
            <li className={ styles.menu__group_item }><Link to="/in-develop/" className={ styles.menu__group_link }>Как избавиться от похмелья</Link></li>
            <li className={ styles.menu__group_item }><Link to="/in-develop/" className={ styles.menu__group_link }>Что такое алкогольная интоксикация</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
