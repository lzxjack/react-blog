import React from 'react';

import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Nav from '@/components/Nav';

import s from './App.scss';
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
    </div>
  );
};

export default App;
