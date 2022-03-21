import './global.custom.scss';

import React from 'react';

import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Nav from '@/components/Nav';

import s from './App.scss';
import BackToTop from './components/BackToTop';
import { blogBackGroundImgs, imgNum } from './utils/constant';

const App: React.FC = () => {
  return (
    <div
      className={s.AppBox}
      style={{ backgroundImage: `url(${blogBackGroundImgs[imgNum]})` }}
    >
      <Nav />
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
