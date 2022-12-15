import { graphql, HeadFC } from 'gatsby'
import React, { ChangeEvent, useState } from 'react'
import { HeadContent } from '../components/HeadContent/HeadContent';
import { Layout } from '../components/Layout/Layout'
import { Breadcrumbs } from '../utils/components/Breadcrumbs/Breadcrumbs';
import { Button } from '../utils/components/Button/Button';
import { Container } from '../utils/components/Container/Container';
import { Section } from '../utils/components/Section/Section';
import { Title } from '../utils/components/Title/Title';
import { calculatorDrinkFieldGroup } from '../utils/types/types';
import { cls, getMinName } from '../utils/utils';

import * as styles from './calculator.module.scss'


// Формула расчета концентрации алкоголя в крови (промилле):

// c = k*A/(m*r), где

// c - концентрация алкоголя в крови, промилле;
// A - масса выпитого напитка (в пересчете на чистый этанол);
// m - масса тела в килограммах;
// k - коэффициент впитываемости алкоголя в кровь (от 0.7 до 0.9);
// r - коэффициент распределения Видмарка (0.7 для мужчин и 0.6 для женщин).


export const query = graphql`
query {
  wpPage(databaseId: {eq: 11}) {
    title
    content
    seo {
      title
      metaDesc
    }
    acf__literature {
      literature {
        title
        list {
          item
        }
      }
    }
    calculatorPage {
      titleDrink
      drinks {
        name
        percent
      }
    }
  }
}
`;

const calculatorPage = ( { data } : any ) => {
  const {
    wpPage: { title, content, seo, id, calculatorPage, acf__literature },
  } = data

  const GENDER = {MALE: 'MALE', FEMALE: 'FEMALE'};

  const defaultDrink : calculatorDrinkFieldGroup = {percent: 40, volume: 100};

  const [hungry, setHungry] = useState(true);
  const [gender, setGender] = useState(GENDER.MALE);
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(175);
  const [drinks, setDrinks] = useState([defaultDrink]);
  const [result, setResult] = useState(0);
  
  const addDrink = ( percent : number) => {
    const drink : calculatorDrinkFieldGroup = {percent, volume: 0};
    setDrinks(prev => [...drinks, drink]);
  }  

  const updateResult = () => {
    const mEtanol = +drinks.reduce((sum, curr) => sum += curr.percent * .01 * curr.volume * .79, 0)
    const rVidmark = (gender == GENDER.FEMALE) ? .6 : .8;
    const kVpityvaemost = .7 + (~~(gender == GENDER.MALE) + ~~(hungry))/10;
    setResult(prev => Math.round(((kVpityvaemost*mEtanol)/(weight * rVidmark))*100)/100);
  }

  const handleGender = (event : ChangeEvent<HTMLInputElement>) => {
    setGender(prev => event.target.value);
  }

  const handleHungry = () => {
    setHungry(prev => !prev);
  }

  const handleWeight = (event : ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    setWeight(value || 0);
  }

  const handleHeight = (event : ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    setHeight(value || 0);
  }

  const handlePercent = (event : ChangeEvent<HTMLInputElement>, id : number) => {
    const percent = +event.target.value;
    setDrinks(prev => {
      return prev.map((el, i) => (i == id) ? {...el, percent: percent || 0} : el)
    });
  }

  const handleVolume = (event : ChangeEvent<HTMLInputElement>, id : number) => {
    const volume = +event.target.value;
    setDrinks(prev => {
      return prev.map((el, i) => (i == id) ? {...el, volume: volume || 0} : el)
    });
  }

  const removeDrink = ( id : number) => {
    setDrinks(prev => prev.filter((_, k) => k !== id))
  }
  

  return (
    <Layout>
      <Breadcrumbs current={{title}} />
      <Section className='section-grey'>
        <Container>
          <div className={ styles.calculator }>
            {
              title
              &&
              <h1 className='title'>{title}</h1>
            }
            <div className={ styles.calculator__content }>
              <div className={ styles.calculator__container }>
                <div className={styles.calculator__gender}>
                  <p>Ваш пол:</p>
                  <div className={ styles.calculator__gender_fields }>
                    <div className={ styles.calculator__gender_field }>
                      <input type="radio" name="gender" onChange={handleGender} className={ styles.calculator__gender_radio } checked={gender == GENDER.MALE} value={GENDER.MALE} id={GENDER.MALE} />
                      <label htmlFor={GENDER.MALE} className={ styles.calculator__gender_label }>мужской</label>
                    </div>
                    <div className={ styles.calculator__gender_field }>
                      <input type="radio" name="gender" onChange={handleGender} className={ styles.calculator__gender_radio } checked={gender == GENDER.FEMALE} value={GENDER.FEMALE} id={GENDER.FEMALE} />
                      <label htmlFor={GENDER.FEMALE} className={ styles.calculator__gender_label }>женский</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={ styles.calculator__container }>
                <div className={ styles.calculator__row }>
                  <div className={ styles.calculator__field }>
                    <label className={ styles.calculator__label}>Ваш вес (кг):</label>
                    <input className={ styles.calculator__input} value={weight} onChange={handleWeight} />
                  </div>
                  <div className={ styles.calculator__field }>
                    <label className={ styles.calculator__label}>Ваш рост (см):</label>
                    <input className={ styles.calculator__input} value={height} onChange={handleHeight} />
                  </div>
                </div>
              </div>
              {
                calculatorPage.titleDrink &&
                <Title className={ styles.calculator__title }>{calculatorPage.titleDrink}</Title>
              }
              <div className={ styles.calculator__container }>
                <div className={ styles.calculator__drinks }>
                  {
                    drinks.map((drink, i) => 
                    <div key={i} className={ styles.calculator__row }>
                      <div className={styles.calculator__field}>
                        <label className={styles.calculator__label}>Крепость (%):</label>
                        <input className={styles.calculator__input} onChange={(e) => handlePercent(e, i)} value={drink.percent} />
                      </div>
                      <div className={styles.calculator__field}>
                        <label className={styles.calculator__label}>Объем (мл):</label>
                        <input className={styles.calculator__input} onChange={(e) => handleVolume(e, i)} value={drink.volume} />
                      </div>
                      <Button className={ styles.calculator__buttonRemoveDrink } attributes={{'arial-label': 'убрать напиток'}} handlerClick={() => removeDrink(i)}>X</Button>
                    </div>
                    )
                  }
                  <div className={styles.calculator__tags}>
                    <Button className={cls('button-lightblue', styles.calculator__tag)} handlerClick={() => addDrink(0)}>Добавить напиток</Button>
                    {
                      calculatorPage.drinks.map((drink, i) => 
                      <Button key={i} className={cls('button-lightblue', styles.calculator__tag)} handlerClick={() => addDrink(drink.percent)}>{drink.name} ({drink.percent}%)</Button>
                      )
                    }
                  </div>
                  <div className={ styles.calculator__hungry }>
                    <div className={ styles.calculator__hungry_field }>
                      <input 
                        type="checkbox"
                        name="hungry"
                        onChange={handleHungry}
                        className={ styles.calculator__hungry_checkbox }
                        checked={Boolean(hungry)}
                        id='hungry'
                      />
                      <label htmlFor='hungry' className={ styles.calculator__hungry_label }>на пустой желудок</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={ styles.calculator__container }>
                <div className={ styles.calculator__footer }>

                  {
                    result != 0
                    &&
                    <div className={ styles.calculator__result }>
                      <div className={ styles.calculator__result_title }>{result} промилле</div>
                      <div className={ styles.calculator__result_text }>Время выведения алкоголя из крови составит: {Math.floor(result*100/15)}&nbsp;ч&nbsp;{Math.round((Math.floor((result*100/15) * 100) % 100)*3/5)}&nbsp;{getMinName(Math.round((Math.floor((result*100/15) * 100) % 100)*3/5))} </div>
                    </div>
                  }
                  <Button className={cls('button-blue', styles.calculator__button)} handlerClick={updateResult}>посчитать</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  )
}

export default calculatorPage;

export const Head: HeadFC = ({data}) => {
  const {
    wpPage: { title, seo },
  } = data

  return (
    <>
      <HeadContent title={seo.title || title} description={seo.metaDesc || ''} />
    </>
  )
 } 