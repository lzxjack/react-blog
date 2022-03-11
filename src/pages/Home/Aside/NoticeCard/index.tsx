import { useRequest } from 'ahooks';
import React from 'react';

import Card from '@/components/Card';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';

import s from './index.scss';

const NoticeCard: React.FC = () => {
  const { data, loading } = useRequest(getData, { defaultParams: [DB.Notice] });

  return (
    <Card loading={loading}>
      <div className={s.notice}>{data?.data[0].notice}</div>
    </Card>
  );
};

export default NoticeCard;
