import dayjs from 'dayjs';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import DisplayBar from '@/components/DisplayBar';
import { ArticleType } from '@/pages/constant';

import s from './index.scss';

interface Props {
  articles?: ArticleType[];
  loading?: boolean;
}

const ArtList: React.FC<Props> = ({ articles, loading }) => {
  const navigate = useNavigate();

  return (
    <>
      {articles?.length ? (
        articles?.map((item: ArticleType) => (
          <DisplayBar
            key={item._id}
            content={item.title}
            right={dayjs(item.date).format('YYYY-MM-DD')}
            onClick={() => navigate(`/post?title=${encodeURIComponent(item.titleEng)}`)}
            loading={loading}
          />
        ))
      ) : (
        <div className={s.none}>暂时无相应文章 ~</div>
      )}
    </>
  );
};

export default ArtList;
