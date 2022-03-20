import dayjs from 'dayjs';
import React from 'react';

import DisplayBar from '@/components/DisplayBar';
import { ArticleType } from '@/pages/constant';

import s from './index.scss';

interface Props {
  articles?: ArticleType[];
}

const ArtList: React.FC<Props> = ({ articles }) => {
  return (
    <>
      {articles?.map((item: ArticleType) => (
        <DisplayBar
          key={item._id}
          content={item.title}
          right={dayjs(item.date).format('YYYY-MM-DD')}
        />
      ))}
    </>
  );
};

export default ArtList;
