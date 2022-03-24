import './global.custom.scss';

import { useSafeState } from 'ahooks';
import React from 'react';

import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Nav from '@/components/Nav';

import s from './App.scss';
import BackToTop from './components/BackToTop';
import { modeBg } from './utils/constant';

const App: React.FC = () => {
  const [mode, setMode] = useSafeState(0);

  return (
    <div className={s.AppBox} style={{ backgroundImage: `url(${modeBg[mode]})` }}>
      <Nav mode={mode} setMode={setMode} />
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
