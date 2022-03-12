import { useRequest } from 'ahooks';
import React from 'react';

import Card from '@/components/Card';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';

import s from './index.scss';

const NoticeCard: React.FC = () => {
  const { data, loading } = useRequest(getData, {
    defaultParams: [{ dbName: DB.Notice }],
    retryCount: 3,
    cacheKey: DB.Notice,
    staleTime
  });

  return (
    <Card loading={loading}>
      <div className={s.notice}>{data?.data[0].notice}</div>
    </Card>
  );
};

export default NoticeCard;
