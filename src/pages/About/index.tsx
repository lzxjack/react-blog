import { useRequest, useToggle } from 'ahooks';
import React, { lazy, Suspense } from 'react';

import Layout from '@/components/Layout';
import LayoutLoading from '@/components/LayoutLoading';
import { DB } from '@/utils/apis/dbConfig';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import AboutSite from './AboutSite';
import { fetchData } from './fetchData';
import Switch from './Switch';

const AboutMe = lazy(() => import(/* webpackPrefetch:true */ './AboutMe'));

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
      {state ? (
        <Suspense fallback={<LayoutLoading rows={3} />}>
          <AboutMe content={data?.about.data[1].content} />
        </Suspense>
      ) : (
        <AboutSite
          content={data?.about.data[0].content}
          classes={data?.classes.data}
          artSum={data?.artSum.total}
        />
      )}
    </Layout>
  );
};

export default About;
