import { useRequest } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/Card';

import { fetchData } from './fetchData';
import s from './index.scss';

const DataCard: React.FC = () => {
  const navigate = useNavigate();
  const { data, loading } = useRequest(fetchData);

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

export default DataCard;
