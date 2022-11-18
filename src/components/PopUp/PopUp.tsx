import React, { FC, useState } from 'react'
import { cls } from '../../utils/utils';
import { PopUpProps } from './PopUp.types';
import { Button } from '../../utils/components/Button/Button';

import * as styles from './PopUp.module.scss'

export const PopUp : FC<PopUpProps> = ({ className, contentClassName, children, active, setActive}) => {
  
  return (
    <div className={ cls(styles.PopUp, className, active && styles.PopUpActive) }>
      <div className={ cls(styles.PopUp__content, contentClassName) }>
        <Button className={ styles.PopUp__close } handlerClick={setActive}></Button>
        { children }
      </div>
    </div>
  )
}
