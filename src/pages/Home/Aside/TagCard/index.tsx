import { useRequest } from 'ahooks';
import React from 'react';

import Card from '@/components/Card';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';

import s from './index.scss';

const TagCard: React.FC = () => {
  const { data, loading } = useRequest(getData, {
    defaultParams: [DB.Tag]
  });

  return (
    <Card className={s.card} loading={loading}>
      {data?.data?.map(
        (item: { _id: string; _openid: string; tag: string }, index: number) => (
          <span className={s.tag} key={index}>
            {item.tag}
          </span>
        )
      )}
    </Card>
  );
};

export default TagCard;
