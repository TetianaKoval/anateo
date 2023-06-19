import React from 'react';
import { About } from '../About';
import { Games } from '../Games';
import { Social } from '../Social';

export const Main = () => {
  return (
    <main className="main">
      <About />
      <Games />
      <Social />
    </main>
  )
}