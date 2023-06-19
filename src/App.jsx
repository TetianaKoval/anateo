import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer'
import './reset.css'
import './App.scss';



const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
};

export default App;