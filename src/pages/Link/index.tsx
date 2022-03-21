import { useRequest } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';
import LinkItem from './LinkItem';

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
        <LinkItem
          key={item._id}
          link={item.link}
          avatar={item.avatar}
          name={item.name}
          descr={item.descr}
        />
      ))}
    </Layout>
  );
};

export default Link;
