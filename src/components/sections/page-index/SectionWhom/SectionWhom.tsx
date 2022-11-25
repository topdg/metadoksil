import React, { FC, MouseEventHandler, TouchEventHandler, useEffect, useState } from 'react'
import { Container } from '../../../../utils/components/Container/Container'
import { Title } from '../../../../utils/components/Title/Title'
import { SectionWhomProps } from './SectionWhom.types'
import { Section } from '../../../../utils/components/Section/Section'
import * as styles from './SectionWhom.module.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import { cls } from '../../../../utils/utils'

export const SectionWhom : FC<SectionWhomProps> = ({title, items}) => {

  const [windowWidth, setWindowWidth] = useState(0);
  const [mousePressed, setMousePressed] = useState(false);
  const [translateX, setTranslateX] = useState(50);

  const setDefault = () => {
    setWindowWidth(window.innerWidth);
    setTranslateX(window.innerWidth / 2);
  }

  
  useEffect(() => {
    window.addEventListener("resize", setDefault);
    setDefault();

    return () => {
      window.removeEventListener("resize", setDefault);
    };
  }, []);

  const setRealTranslate = (x : number) => {
    if (x > windowWidth*.9) x = windowWidth;
    if (x < windowWidth*.1) x = 0;
    setTranslateX(x)
  }

  const handlerDragStart : MouseEventHandler<HTMLButtonElement> = (event) => {
    setMousePressed(prev => true)
    setRealTranslate(event.clientX)
  }

  const handlerDragEnd : MouseEventHandler<HTMLButtonElement | HTMLDivElement> = (event) => {
    setMousePressed(prev => false)
    setRealTranslate(event.clientX)
  }

  const handlerContainerMouseMove : MouseEventHandler<HTMLDivElement> = (event) => {
    if (mousePressed) 
      setRealTranslate(event.clientX)
  }

  
  const handlerTouchMove : TouchEventHandler<HTMLButtonElement> = (event) => {
    setMousePressed(true)
    setRealTranslate(event.changedTouches[0].pageX)
  }
  
  const handlerTouchEnd : TouchEventHandler<HTMLButtonElement> = (event) => {
    setMousePressed(false)
    setRealTranslate(event.changedTouches[0].pageX)
  }

  return (
    <Section className="section-pb0 section-lightblue" attributes={{id: "for-whom"}}>
      <Container>
        <Title className="title-center">{ title }</Title>
      </Container>
      <div
        className={styles.sectionWhom__items} 
        onMouseMove={handlerContainerMouseMove}
        onMouseUp={handlerDragEnd}
      >
        <button 
          onTouchStart={handlerTouchMove}
          onTouchMove={handlerTouchMove}
          onTouchEnd={handlerTouchEnd}
          onMouseDown={handlerDragStart}
          onMouseUp={handlerDragEnd}
          className={ cls('button', styles.sectionWhom__dragger) }
          aria-label="ползунок"
          style={{transform: `translate(${translateX - 30}px, 0)`}}
        />
        {
        items.map((el, i) =>
          <div 
            key={i} 
            className={cls(styles.sectionWhom__item, el.type == 'grey' && styles.sectionWhom__itemGrey)}
            style={(el.type != 'grey') ? {transform: `translate(${translateX}px, -50%)`} : {}}
          >
            <div className={styles.sectionWhom__item_head}>
              {
                el.icon?.localFile?.fields?.staticPath
                &&
                <div className={styles.sectionWhom__item_icon}>
                  <img src={ el.icon?.localFile?.fields?.staticPath } alt={ title } className={ styles.sectionWhom__item_icon } />
                </div>
              }
              <span className={cls(styles.sectionWhom__item_title, styles.sectionWhom__item_titleWhite)}>{ el.title }</span>
            </div>
            <div className={styles.sectionWhom__item_picture}>
              {
                el.img?.localFile?.childImageSharp?.gatsbyImageData &&
                <GatsbyImage image={el.img?.localFile?.childImageSharp?.gatsbyImageData} alt={title} className={styles.sectionWhom__item_img} />
              }
            </div>
          </div>
        )
        }
      </div>
    </Section>
  )
}
