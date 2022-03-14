import { useRequest } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

interface linkType {
  _id: string;
  link: string;
  avatar: string;
  name: string;
  descr: string;
}

const Link: React.FC = () => {
  const { data, loading } = useRequest(getData, {
    defaultParams: [DB.Link],
    retryCount: 3,
    cacheKey: DB.Link,
    staleTime
  });

  return (
    <Layout title={Title.Link} loading={loading} className={s.box}>
      {data?.data.map((item: linkType) => (
        <div className={s.item} key={item._id}>
          <a href={item.link} rel='noreferrer' target='_blank' className={s.link}>
            <img src={item.avatar} alt='avatar' className={s.avatar} />
            <div className={s.title}>{item.name}</div>
            <div className={s.descr}>{item.descr}</div>
          </a>
        </div>
      ))}
    </Layout>
  );
};

export default Link;
