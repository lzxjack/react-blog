import { useRequest } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getOrderData } from '@/utils/apis/getOrderData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';
import ShowItem from './ShowItem';

interface ShowType {
  _id: string;
  cover: string;
  link: string;
  name: string;
  descr: string;
}

const Show: React.FC = () => {
  const { data, loading } = useRequest(getOrderData, {
    defaultParams: [
      {
        dbName: DB.Show,
        sortKey: 'order',
        isAsc: true
      }
    ],
    retryCount: 3,
    cacheKey: `Show-${DB.Show}`,
    staleTime
  });

  return (
    <Layout title={Title.Show} loading={loading} className={s.showBox}>
      {data?.data.map((item: ShowType) => (
        <ShowItem
          key={item._id}
          cover={item.cover}
          link={item.link}
          name={item.name}
          descr={item.descr}
        />
      ))}
    </Layout>
  );
};

export default Show;
