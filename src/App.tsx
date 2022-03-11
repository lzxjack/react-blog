import React from 'react';
import Nav from '@/components/Nav';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import { blogBackGroundImgs, imgNum } from './utils/constant';
import s from './App.scss';

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
