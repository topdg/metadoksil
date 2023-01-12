import { graphql, Link, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import { useSiteOptionsQuery } from "../../hooks/useSiteOptionsQuery"
import { Container } from "../../utils/components/Container/Container"
import { cls, ROUTER } from "../../utils/utils"
import * as styles from "./Footer.module.scss"

export const Footer : FC = () => {
   const { wp } = useSiteOptionsQuery();

  const { siteOptions } = wp?.mainOptions?.acf__mainSiteSettings ?? {};

  return (
    <footer id="footer" className={ styles.footer }>
      <div className={ styles.footer__main }>
        <Container>
          <div className={cls(styles.footer__row, styles.footer__mainRow)}>
            <div className={ styles.footer__col }>
              <div className={ styles.footer__title }>Метадоксил</div>
              <div className={ styles.footer__nav }>
                <ul className={ styles.footer__items }>
                  <li className={ styles.footer__item }><Link to="/tabletki/" className={ styles.footer__link }>Инструкция, таблетки</Link></li>
                  <li className={ styles.footer__item }><Link to="/rastvor/" className={ styles.footer__link }>Инструкция, раствор</Link></li>
                  <li className={ styles.footer__item }><Link to="/gde-kupit/" className={ styles.footer__link }>Где купить</Link></li>
                </ul>
              </div>
            </div>
            <div className={ styles.footer__col }>
              <div className={ styles.footer__title }>Показания</div>
              <div className={ styles.footer__nav }>
                <ul className={ styles.footer__items }>
                  <li className={ styles.footer__item }><Link to={`${ROUTER.blog}abstinentnyj-sindrom-pochemu-on-voznikaet/`} className={ styles.footer__link }>При абстинентном синдроме</Link></li>
                  <li className={ styles.footer__item }><Link to={ROUTER.inDev} className={ styles.footer__link }>При острой интоксикации организма алкоголем</Link></li>
                  <li className={ styles.footer__item }><Link to={ROUTER.inDev} className={ styles.footer__link }>При пагубном потреблении алкоголя</Link></li>
                  <li className={ styles.footer__item }><Link to={ROUTER.inDev} className={ styles.footer__link }>При амнестическом синдроме</Link></li>
                </ul>
              </div>
            </div>
            <div className={ styles.footer__col }>
              <div className={ styles.footer__title }>О похмелье</div>
              <div className={ styles.footer__nav }>
                <ul className={ styles.footer__items }>
                  <li className={ styles.footer__item }><Link to="/kalkulyator-alkogolya-v-krovi/" className={ styles.footer__link }>Алкогольный калькулятор</Link></li>
                  <li className={ styles.footer__item }><Link to={ROUTER.blog} className={ styles.footer__link }>Полезные материалы</Link></li>
                  <li className={ styles.footer__item }><Link to={`${ROUTER.blog}kak-izbavitsya-ot-pohmelya-doma-dokazannye-metody/`} className={ styles.footer__link }>Как избавиться от похмелья</Link></li>
                  <li className={ styles.footer__item }><Link to={ROUTER.inDev} className={ styles.footer__link }>Что такое алкогольная интоксикация</Link></li>
                </ul>
              </div>
            </div>
            <div className={ styles.footer__col }>
              <div className={ styles.footer__title }>Контакты</div>
              <div className={ styles.footer__nav }>
                <ul className={ styles.footer__items }>
                  <li className={ styles.footer__item }>{ siteOptions.copyright }</li>
                  <li className={ styles.footer__item }>{ siteOptions.company }</li>
                  <li className={ styles.footer__item }><a href={'tel:+' + siteOptions.phone.split(' ').join('').split('-').join('') } className={ styles.footer__link }>{ siteOptions.phone }</a></li>
                  <li className={ styles.footer__item }><a href="mailto:office@cscpharma.ru" className={ styles.footer__link }>office@cscpharma.ru</a></li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={ styles.footer__bottom }>
        <Container>
          <div className={ styles.footer__bottom_content }>
            <a href="/" className={ styles.footer__bottom_link }>Сайт разработан в Digital Generation</a>
          </div>
        </Container>
      </div>
    </footer>
  )
}