import { useRequest, useToggle } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import AboutMe from './AboutMe';
import AboutSite from './AboutSite';
import Switch from './Switch';

const About: React.FC = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  const { data, loading } = useRequest(getData, {
    defaultParams: [{ dbName: DB.About }],
    retryCount: 3,
    cacheKey: DB.About,
    staleTime
  });

  return (
    <Layout title={Title.About} loading={loading}>
      <Switch state={state} toggle={toggle} setLeft={setLeft} setRight={setRight} />
      {state ? (
        <AboutMe content={data?.data[1].content} />
      ) : (
        <AboutSite content={data?.data[0].content} />
      )}
    </Layout>
  );
};

export default About;
