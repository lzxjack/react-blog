import React from 'react';
import Nav from '@/components/Nav';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import s from './App.scss';

const App: React.FC = () => {
  return (
    <div className={s.AppBox}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
