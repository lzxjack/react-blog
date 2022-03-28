import { useRequest } from 'ahooks';
import React from 'react';

import Card from '@/components/Card';
import { DB } from '@/utils/apis/dbConfig';
import { getOrderData } from '@/utils/apis/getOrderData';
import { staleTime } from '@/utils/constant';

import s from './index.scss';

const NoticeCard: React.FC = () => {
  const { data, loading } = useRequest(getOrderData, {
    defaultParams: [{ dbName: DB.Notice }],
    retryCount: 3,
    cacheKey: `NoticeCard-${DB.Notice}`,
    staleTime
  });

  return (
    <Card loading={loading}>
      <div className={s.notice}>{data?.data[0].notice}</div>
    </Card>
  );
};

export default NoticeCard;
