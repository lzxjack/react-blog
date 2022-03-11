import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@/components/Card';

import s from './index.scss';

const DataCard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Card className={s.card}>
      <div className={s.blogData} onClick={() => navigate('/articles')}>
        <div className={s.name}>文章</div>
        <div className={s.num}>{1}</div>
      </div>
      <div className={s.blogData} onClick={() => navigate('/classes')}>
        <div className={s.name}>分类</div>
        <div className={s.num}>{2}</div>
      </div>
      <div className={s.blogData} onClick={() => navigate('/tags')}>
        <div className={s.name}>标签</div>
        <div className={s.num}>{3}</div>
      </div>
    </Card>
  );
};

export default DataCard;
