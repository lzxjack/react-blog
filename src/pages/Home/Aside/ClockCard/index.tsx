import React from 'react';
import Card from '@/components/Card';
import { useClock } from './useClock';
import { useInterval } from 'ahooks';
import s from './index.scss';

const ClockCard: React.FC = () => {
  const { hour, minute, second, runPerSecond } = useClock();
  useInterval(runPerSecond, 1000);

  return (
    <Card className={s.card}>
      <div className={s.dial}>
        <div className={s.zero} />
        <div className={s.six} />
        <div className={s.three} />
        <div className={s.nine} />
      </div>
      <div className={s.container}>
        <div className={s.dot} />
        <div
          className={s.clockMinuteLine}
          style={{ transform: `rotateZ(${minute}deg)` }}
        />
        <div className={s.clockHourLine} style={{ transform: `rotateZ(${hour}deg)` }} />
        <div
          className={s.clockSecondLine}
          style={{ transform: `rotateZ(${second}deg)` }}
        />
      </div>
    </Card>
  );
};

export default ClockCard;
