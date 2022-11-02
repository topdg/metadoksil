import React, { FC } from 'react'
import { MenuProps } from './Menu.types'
import { cls } from '../../utils'

import * as styles from './Menu.module.scss';

export const Menu : FC<MenuProps> = ( {active, toggleMenu} ) => {
  return (
    <nav className={cls(styles.menu, active && styles.menuActive)}>
      <div className={ styles.menu__content }>
        <div className={ styles.menu__group }>
          <div className={ styles.menu__group_title }>Метадоксил</div>
          <ul className={ styles.menu__group_list }>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>О препарате</a></li>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>Научные публикации</a></li>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>Инструкция, таблетки</a></li>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>Инструкция, раствор</a></li>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>Где купить</a></li>
          </ul>
        </div>
        <div className={ styles.menu__group }>
          <div className={ styles.menu__group_title }>Показания</div>
          <ul className={ styles.menu__group_list }>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>При абстинентном синдроме</a></li>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>При острой интоксикации организма алкоголем</a></li>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>При пагубном потреблении алкоголя</a></li>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>При амнестическом синдроме</a></li>
          </ul>
        </div>
        <div className={ styles.menu__group }>
          <div className={ styles.menu__group_title }>О похмелье</div>
          <ul className={ styles.menu__group_list }>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>Алкогольный калькулятор</a></li>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>Как избавиться от похмелья</a></li>
            <li className={ styles.menu__group_item }><a href="#" className={ styles.menu__group_link }>Что такое алкогольная интоксикация</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
