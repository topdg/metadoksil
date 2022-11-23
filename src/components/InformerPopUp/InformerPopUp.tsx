import { StaticImage } from 'gatsby-plugin-image'
import React, { FC, useEffect, useState } from 'react'
import { Button } from '../../utils/components/Button/Button'
import { cls } from '../../utils/utils'
import { PopUp } from '../PopUp/PopUp'
import * as styles from './InformerPopUp.module.scss'

export const InformerPopUp : FC = () => {
  
  const [activeInformerPopUp, setActiveInformerPopUp] = useState(false);

  useEffect(() => {
    const informerStatus = localStorage.getItem('InformPopUp');
    if (!informerStatus) {
      setActiveInformerPopUp(true)
    }
  }, [])

  const closeInformPopUp = () => {
    setActiveInformerPopUp(prev => !prev);
    localStorage.setItem('InformPopUp', '1')
  }
  
  const cancelInformPopUp = () => {
    localStorage.removeItem('InformPopUp')
    return false;
  }

  if (!activeInformerPopUp) {
    return null
  }

  return (
    <PopUp contentClassName={ styles.InformerPopUp__container } active={activeInformerPopUp} setActive={closeInformPopUp}>
      <div className={ styles.InformerPopUp__content }>
        <div className={ styles.InformerPopUp__row }>
          <div className={ cls(styles.InformerPopUp__col, styles.InformerPopUp__colLeftside) }>
            <h4 className={ styles.InformerPopUp__title }>Официальный сайт оригинального препарата Метадоксил®</h4>
            <div className={ styles.InformerPopUp__text }>Подтвердите, пожалуйста, являетесь ли вы дипломированным специалистом в сфере здравоохранения?</div>
            <div className={ styles.InformerPopUp__buttons }>
              <Button className={ cls('buttonLink', 'buttonLink-blue', styles.InformerPopUp__button, styles.InformerPopUp__buttonApprove)} handlerClick={closeInformPopUp} >да, подтверждаю</Button>
              <Button className={ cls('buttonLink', 'buttonLink-lightblue', styles.InformerPopUp__button, styles.InformerPopUp__buttonCancel)} handlerClick={cancelInformPopUp} >нет, не подтверждаю</Button>
            </div>
          </div>
          <div className={ cls(styles.InformerPopUp__col, styles.InformerPopUp__colRightside) }>
            <StaticImage src='../../assets/images/informer__img.png' alt='' />
          </div>
        </div>
        <div className={ styles.InformerPopUp__danger }>СОГЛАСНО ДЕЙСТВУЮЩЕМУ ЗАКОНОДАТЕЛЬСТВУ ИНФОРМАЦИЯ, ПРЕДОСТАВЛЕННАЯ В ДАННОМ РАЗДЕЛЕ, ПРЕДНАЗНАЧЕНА ИСКЛЮЧИТЕЛЬНО ДЛЯ ДИПЛОМирОВАННЫХ СПЕЦИАЛИСТОВ В СФЕРЕ МЕДИЦИНЫ И ФАРМАЦЕВТИКИ</div>
      </div>
    </PopUp>
  )
}
