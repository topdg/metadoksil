import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import { Container } from "../../utils/components/Container/Container"
import { cls } from "../../utils/utils"
import * as styles from "./Footer.module.scss"

export const Footer : FC = () => {
   const { wpPage } = useStaticQuery(graphql`
    query MyQ {
      wpPage(databaseId: {eq: 39}) {
        title
        slug
        mainPage {
          screen1 {
            subtitle
            button
            title
            video
          }
        }
      }
    }
  `);

  return (
    <footer id="footer" className={ styles.footer }>
      <div className={ styles.footer__main }>
        <Container>
          <div className={cls(styles.footer__row, styles.footer__mainRow)}>
            <div className={ styles.footer__col }>
              <div className={ styles.footer__title }>Метадоксил</div>
              <div className={ styles.footer__nav }>
                <ul className={ styles.footer__items }>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>О препарате</a></li>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>Научные публикации</a></li>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>Инструкция, таблетки</a></li>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>Инструкция, раствор</a></li>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>Где купить</a></li>
                </ul>
              </div>
            </div>
            <div className={ styles.footer__col }>
              <div className={ styles.footer__title }>Показания</div>
              <div className={ styles.footer__nav }>
                <ul className={ styles.footer__items }>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>При абстинентном синдроме</a></li>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>При острой интоксикации организма алкоголем</a></li>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>При пагубном потреблении алкоголя</a></li>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>При амнестическом синдроме</a></li>
                </ul>
              </div>
            </div>
            <div className={ styles.footer__col }>
              <div className={ styles.footer__title }>О похмелье</div>
              <div className={ styles.footer__nav }>
                <ul className={ styles.footer__items }>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>Алкогольный калькулятор</a></li>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>Как избавиться от похмелья</a></li>
                  <li className={ styles.footer__item }><a href="" className={ styles.footer__link }>Что такое алкогольная интоксикация</a></li>
                </ul>
              </div>
            </div>
            <div className={ styles.footer__col }>
              <div className={ styles.footer__title }>Контакты</div>
              <div className={ styles.footer__nav }>
                <ul className={ styles.footer__items }>
                  <li className={ styles.footer__item }>&copy; 2021 CSC Ltd Russia</li>
                  <li className={ styles.footer__item }>ООО «Си Эс Си ЛТД»</li>
                  <li className={ styles.footer__item }><a href="tel:+74993116771" className={ styles.footer__link }>+7 499 311-67-71</a></li>
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