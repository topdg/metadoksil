import React, { FC, useState } from "react";
import { Hamburger } from "../../utils/components/Hamburger/Hamburger";
import { ElementProps } from "../../utils/types/types";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Menu } from "../../utils/components/Menu/Menu";
import { Content } from "../../utils/components/Content/Content";
import { Danger } from "../Danger/Danger";
import { LayoutProps } from "./Layout.types";

import '../../assets/sass/style.scss';
import { InformerPopUp } from "../InformerPopUp/InformerPopUp";
import { cls } from "../../utils/utils";

export const Layout: FC<LayoutProps> = ( { header, pageClassName, children } ) => {

  
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeDanger, setActiveDanger] = useState(true);
  
  const toggleMenu = () => setActiveMenu(prev => !prev);

  return (
    <div className="wrapper">
      <Header type={header ? 'white' : 'default'} />
      <Hamburger active={ activeMenu } toggleMenu={ toggleMenu }  />
      <Menu active={ activeMenu } toggleMenu={ toggleMenu } />
      <Content className={cls('page-pt', pageClassName)}>
        { children }
        {
          activeDanger &&
          <Danger />
        }
      </Content>
      <Footer />
      <InformerPopUp />
    </div>
  )
}