import React from 'react';
import { Slider } from '../Slider';
import { Menu } from '../Menu';
import Slides from '../Slider/slides.json';

import './Header.scss';

export const Header = () => (
  <header className="header header--on-main-page">
    <Slider slides={Slides}/>
    <Menu />
  </header>
  
)
