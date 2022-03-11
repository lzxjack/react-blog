import React from 'react';
import Card from '@/components/Card';
import { useRunTime } from './useRunTime';
import s from './index.scss';

const SiteCard: React.FC = () => {
  const { runTime } = useRunTime();

  return (
    <Card className={s.card}>
      <div className={s.item}>
        <span className={s.key}>总浏览量</span>
        <span className={s.value}>{1234}次</span>
      </div>
      <div className={s.item}>
        <span className={s.key}>运行时间</span>
        <span className={s.value}>{runTime}天</span>
      </div>
    </Card>
  );
};

export default SiteCard;
