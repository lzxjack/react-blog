import { useRequest } from 'ahooks';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/Card';
import { setArtSum } from '@/redux/actions';
import { DB } from '@/utils/apis/dbConfig';
import { staleTime } from '@/utils/constant';

import { fetchData } from './fetchData';
import s from './index.scss';

interface Props {
  setArtSum?: Function;
}

const DataCard: React.FC<Props> = ({ setArtSum }) => {
  const navigate = useNavigate();
  const { data, loading } = useRequest(fetchData, {
    retryCount: 3,
    cacheKey: `DataCard-count-${DB.Article}-${DB.Class}-${DB.Tag}`,
    staleTime,
    onSuccess: data => setArtSum!(data?.articles.total)
  });

  return (
    <Card className={s.card} loading={loading}>
      <div className={s.blogData} onClick={() => navigate('/articles')}>
        <div className={s.name}>文章</div>
        <div className={s.num}>{data?.articles.total}</div>
      </div>
      <div className={s.blogData} onClick={() => navigate('/classes')}>
        <div className={s.name}>分类</div>
        <div className={s.num}>{data?.classes.total}</div>
      </div>
      <div className={s.blogData} onClick={() => navigate('/tags')}>
        <div className={s.name}>标签</div>
        <div className={s.num}>{data?.tags.total}</div>
      </div>
    </Card>
  );
};

export default connect(() => ({}), {
  setArtSum
})(DataCard);
