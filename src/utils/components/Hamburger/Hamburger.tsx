import React, { FC, MouseEventHandler } from "react";
import { MenuProps } from "../Menu/Menu.types";
import { cls } from "../../utils";
import { Button } from "../Button/Button";

import * as styles from './Hamburger.module.scss';

export const Hamburger : FC<MenuProps> = ({ active, toggleMenu }) => {

  return (
    <Button className={cls(styles.hamburger, active && styles.hamburgerActive)} handlerClick={toggleMenu} attributes={{"aria-label": active ? 'открыть меню':'закрыть меню'}}>
      <span className={ styles.hamburger__line }></span>
    </Button>
  )
}