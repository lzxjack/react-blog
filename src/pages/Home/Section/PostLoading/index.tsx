import { Skeleton } from 'antd';
import React from 'react';

import Card from '@/components/Card';

import s from './index.scss';

const PostLoading: React.FC = () => {
  const oneCard = new Array(8).fill(0);

  return (
    <>
      {oneCard.map((_, index) => (
        <Card className={s.card} key={index}>
          <Skeleton paragraph={{ rows: 5 }} />
        </Card>
      ))}
    </>
  );
};

export default PostLoading;
