import './global.custom.scss';

import React from 'react';
import { connect } from 'react-redux';

import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Nav from '@/components/Nav';

import s from './App.scss';
import BackToTop from './components/BackToTop';
import { setMode } from './redux/actions';
import { storeState } from './redux/interface';
import { modeBg } from './utils/constant';

interface Props {
  mode?: number;
  setMode?: Function;
}

const App: React.FC<Props> = ({ mode, setMode }) => {
  return (
    <div className={s.AppBox} style={{ backgroundImage: `url(${modeBg[mode!]})` }}>
      <Nav mode={mode} setMode={setMode!} />
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default connect(
  (state: storeState) => ({
    mode: state.mode
  }),
  { setMode }
)(App);
