import { useRequest, useToggle } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import AboutMe from './AboutMe';
import AboutSite from './AboutSite';
import { fetchData } from './fetchData';
import s from './index.scss';
import Switch from './Switch';

const About: React.FC = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle();

  const { data, loading } = useRequest(fetchData, {
    retryCount: 3,
    cacheKey: `About-${DB.About}`,
    staleTime
  });

  return (
    <Layout title={Title.About} loading={loading}>
      <Switch state={state} toggle={toggle} setLeft={setLeft} setRight={setRight} />
      <AboutMe className={state ? '' : s.hidden} content={data?.about.data[1].content} />
      <AboutSite
        className={state ? s.hidden : ''}
        content={data?.about.data[0].content}
        classes={data?.classes.data}
        artSum={data?.artSum.total}
      />
    </Layout>
  );
};

export default About;
