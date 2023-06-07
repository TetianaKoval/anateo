import React from 'react';
import './MenuList.scss';
import classNames from 'classnames';

export const MenuList = ({active, setActive, items}) => {
  return (
    <>
      <div
        className={classNames('blur', {active: active})}
        onClick={() => {setActive(false)}}
      ></div>
      <nav className={classNames('menu__list menu-list', {active: active})} >
        <ul>
          {items.map(item => (
            <li className="menu-list__item" key={item.id}>
              <a href={item.link} className="menu-list__link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}