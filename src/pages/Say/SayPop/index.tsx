import dayjs from 'dayjs';
import React from 'react';

import { myAvatar } from '@/utils/constant';

import s from './index.scss';

interface Props {
  content: string;
  date: number;
  className: string;
}

const SayPop: React.FC<Props> = ({ content, date, className }) => (
  <div className={className}>
    <div className={s.avatarBox}>
      <img src={myAvatar} alt='avatar' className={s.avatar} />
    </div>

    <div className={s.contentBox}>
      <div className={s.content}>
        {content}
        <span className={s.date}>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
    </div>
  </div>
);

export default SayPop;
