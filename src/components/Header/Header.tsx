import React, { FC, useEffect, useState } from "react";
import { Container } from "../../utils/components/Container/Container";
import { Hamburger } from "../../utils/components/Hamburger/Hamburger";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { useMenuQuery } from "../../hooks/useMenuQuery";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Logo } from "../Logo/Logo";
import { cls } from "../../utils/utils";
import { HeaderProps } from "./Header.types";

import * as styles from './Header.module.scss';

export const Header : FC<HeaderProps> = ( { type = 'default'} ) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isWhite, setIsWhite] = useState(type == 'white');
  const { wpMenu } = useMenuQuery();

  const toggleFixedHeader = (e : Event) => {
    const window = e.currentTarget as Window;
    if (window.scrollY > 150) {
      if (!isFixed) {
        setIsFixed(true);
        if (type == 'white') {
          setIsWhite(false)
        }
      }
    }
    else if (isFixed) {
      setIsFixed(false);
      if (type == 'white') {
        setIsWhite(true)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleFixedHeader);
    return () => window.removeEventListener("scroll", toggleFixedHeader);
  }, [isFixed]);

  return (
    <header className={cls(styles.header, isFixed && styles.headerFixed, isWhite && styles.headerWhite)}>
      <Container>
        <div className={styles.header__content}>
          <Logo color={isWhite?"#FFF":"#8A8D8E"} />
          <HeaderMenu items={wpMenu.menuItems.nodes} />
        </div>
      </Container>
    </header>
  )
}