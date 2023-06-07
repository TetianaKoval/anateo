import React, { useState } from 'react';
import './Menu.scss';
import { MenuList } from '../MenuList';
import Items from './items.json';
import classNames from 'classnames';

export const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="menu header__menu">
      <div className="container menu__container">
        <div className="menu__logo">
          <img src="/img/logo_w.png" alt="" />
        </div>
        <div
          className={classNames('menu__burger', {active: menuActive})}
          onClick={() => setMenuActive(!menuActive)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <MenuList active={menuActive} setActive={setMenuActive} items={Items} />
      </div>
    </div>
    
  )
}
