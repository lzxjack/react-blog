import './global.custom.scss';

import { useLocalStorageState, useMount } from 'ahooks';
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Nav from '@/components/Nav';

import s from './App.scss';
import BackToTop from './components/BackToTop';
import { setMode } from './redux/actions';
import { storeState } from './redux/interface';

interface Props {
  mode?: number;
  setMode?: Function;
}

const App: React.FC<Props> = ({ mode, setMode }) => {
  const bgClasses = [s.bg0, s.bg1, s.bg2];
  const [localMode] = useLocalStorageState('localMode');

  useMount(() => setMode?.(localMode));

  return (
    <div className={classNames(s.AppBox, bgClasses[mode!])}>
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
