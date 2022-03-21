import { useRequest } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import ClassBar from './ClassBar';
import s from './index.scss';

interface ClassType {
  _id: string;
  class: string;
  count: number;
}

const Classes: React.FC = () => {
  const navigate = useNavigate();

  const { data, loading } = useRequest(getData, {
    defaultParams: [DB.Class],
    retryCount: 3,
    cacheKey: DB.Class,
    staleTime
  });

  return (
    <Layout title={Title.Classes} loading={loading} className={s.classBox}>
      {data?.data.map((item: ClassType) => (
        <ClassBar
          className={s.classItem}
          key={item._id}
          content={item.class}
          num={item.count}
          onClick={() => navigate(`/artDetail?class=${encodeURIComponent(item.class)}`)}
        />
      ))}
    </Layout>
  );
};

export default Classes;
