import { useRequest } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';
import SayPop from './SayPop';

const Say: React.FC = () => {
  const { data, loading } = useRequest(getData, {
    defaultParams: [{ dbName: DB.Say, sortKey: 'date' }],
    retryCount: 3,
    cacheKey: DB.Say,
    staleTime
  });

  return (
    <Layout title={Title.Say} loading={loading}>
      {data?.data.map(
        ({ _id, content, date }: { _id: string; content: string; date: number }) => (
          <SayPop key={_id} content={content} date={date} className={s.sayItem} />
        )
      )}
    </Layout>
  );
};

export default Say;
