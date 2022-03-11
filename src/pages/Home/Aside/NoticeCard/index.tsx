import React from 'react';
import Card from '@/components/Card';
import s from './index.scss';

const NoticeCard: React.FC = () => {
  return (
    <Card>
      <div className={s.notice}>
        公告公告公告公告公告公告公告公告公告公告公告公告公告公告公告.
      </div>
    </Card>
  );
};

export default NoticeCard;
