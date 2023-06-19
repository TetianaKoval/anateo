import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { MenuList } from '../MenuList';
import Items from './items.json';
import classNames from 'classnames';

export const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={classNames(
      'menu',
      'header__menu',
      {menuOnContent: scrollY > 0}
      )}>
      <div className="container menu__container">
        <div className="menu__logo">
          <img src="img/logo_w.png" alt="Anate Studio logo" />
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
