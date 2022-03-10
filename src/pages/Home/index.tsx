import React from 'react';
import PageTitle from '@/components/PageTitle';
import { siteTitle } from '@/utils/constant';
import Section from './Section';
import Aside from './Aside';
import s from './index.scss';

const Home: React.FC = () => {
  return (
    <div>
      <PageTitle height='100vh' title={siteTitle} desc='若到江南赶上春，千万和春住。' />
      <div className={s.body}>
        <Section />
        <Aside />
      </div>
    </div>
  );
};

export default Home;
