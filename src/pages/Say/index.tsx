import { useMemoizedFn, useRequest } from 'ahooks';
import React, { useState } from 'react';

import ImgView from '@/components/ImgView';
import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getOrderData } from '@/utils/apis/getOrderData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import SayPop from './SayPop';

interface SayType {
  _id: string;
  content: string;
  date: number;
  imgs: string[];
}

const Say: React.FC = () => {
  const { data, loading } = useRequest(getOrderData, {
    defaultParams: [{ dbName: DB.Say, sortKey: 'date' }],
    retryCount: 3,
    cacheKey: `Say-${DB.Say}`,
    staleTime
  });

  const [url, setUrl] = useState('');
  const [showPreView, setShowPreView] = useState(false);

  const handlePreView = useMemoizedFn((url: string) => {
    setShowPreView(true);
    setUrl(url);
  });

  return (
    <Layout title={Title.Say} loading={loading}>
      {data?.data.map(({ _id, content, date, imgs }: SayType) => (
        <SayPop
          key={_id}
          content={content}
          date={date}
          imgs={imgs}
          handlePreView={handlePreView}
        />
      ))}

      <ImgView
        viewUrl={url}
        isViewShow={showPreView}
        onClick={() => setShowPreView(false)}
      />
    </Layout>
  );
};

export default Say;
