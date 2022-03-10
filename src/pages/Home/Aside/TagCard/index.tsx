import React from 'react';
import Card from '@/components/Card';
import s from './index.scss';

const TagCard: React.FC = () => {
  const tags = [
    'JavaScript',
    'CSS',
    'GitHub',
    'Hexo',
    '数组',
    'HTML',
    'WebPack',
    'WebPack',
    'WebPack',
    'WebPack',
    'WebPack',
  ];
  return (
    <Card className={s.card}>
      {tags.map((item, index) => (
        <span className={s.tag} key={index}>
          {item}
        </span>
      ))}
    </Card>
  );
};

export default TagCard;
