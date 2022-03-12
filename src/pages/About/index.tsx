import { useToggle } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import AboutMe from './AboutMe';
import AboutSite from './AboutSite';
import Switch from './Switch';

const About: React.FC = () => {
  const [state, { toggle }] = useToggle();

  return (
    <Layout title={Title.About}>
      <Switch state={state} toggle={toggle} />
      {state ? <AboutMe /> : <AboutSite />}
    </Layout>
  );
};

export default About;
