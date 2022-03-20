import { useRequest } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import DisplayBar from '@/components/DisplayBar';
import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';

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
    <Layout title={Title.Classes} loading={loading}>
      {data?.data.map((item: ClassType) => (
        <DisplayBar
          key={item._id}
          content={item.class}
          right={`${item.count}`}
          onClick={() => navigate(`/artClass?class=${encodeURIComponent(item.class)}`)}
        />
      ))}
    </Layout>
  );
};

export default Classes;
