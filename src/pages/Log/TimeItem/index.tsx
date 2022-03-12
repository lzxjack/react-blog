import dayjs from 'dayjs';
import React from 'react';

import s from './index.scss';

interface Props {
  date: number;
  logContent: string[];
}

const TimeItem: React.FC<Props> = ({ date, logContent }) => {
  return (
    <div className={s.item}>
      <div className={s.time}>
        <div className={s.dot}>
          <div className={s.dotIn} />
        </div>
        {dayjs(date).format('YYYY-MM-DD')}
      </div>

      <ul className={s.content}>
        {logContent.map((log, index) => (
          <li key={index} className={s.timeLi}>
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeItem;
