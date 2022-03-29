import dayjs from 'dayjs';
import React from 'react';

import { myAvatar } from '@/utils/constant';

import s from './index.scss';

interface Props {
  content?: string;
  date?: number;
}

const SayPop: React.FC<Props> = ({ content, date }) => (
  <div className={s.sayItem}>
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
