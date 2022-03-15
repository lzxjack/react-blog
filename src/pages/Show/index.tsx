import { useRequest } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getOrderData } from '@/utils/apis/getOrderData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

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
    cacheKey: DB.Show,
    staleTime
  });

  return (
    <Layout title={Title.Show} loading={loading} className={s.showBox}>
      {data?.data.map((item: ShowType) => (
        <div
          key={item._id}
          style={{ backgroundImage: `url(${item.cover})` }}
          className={s.item}
        >
          <a href={item.link} rel='noreferrer' target='_blank' className={s.link}>
            <div className={s.title}>
              <span>{item.name}</span>
            </div>
            <div className={s.descr}>{item.descr}</div>
            <div className={s.mask} />
          </a>
        </div>
      ))}
    </Layout>
  );
};

export default Show;
