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
        <div className={s.zero}></div>
        <div className={s.six}></div>
        <div className={s.three}></div>
        <div className={s.nine}></div>
      </div>
      <div className={s.container}>
        <div className={s.dot}></div>
        <div
          className={s.clockMinuteLine}
          style={{ transform: `rotateZ(${minute}deg)` }}
        ></div>
        <div
          className={s.clockHourLine}
          style={{ transform: `rotateZ(${hour}deg)` }}
        ></div>
        <div
          className={s.clockSecondLine}
          style={{ transform: `rotateZ(${second}deg)` }}
        ></div>
      </div>
    </Card>
  );
};

export default ClockCard;
