import { useState } from 'react';

export const useClock = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const runPerSecond = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = (hours % 12) * (360 / 12) + (360 / 12) * (minutes / 60);
    const minute = minutes * (360 / 60) + (360 / 60) * (seconds / 60);
    const second = seconds * (360 / 60);

    setHour(hour);
    setMinute(minute);
    setSecond(second);
  };

  return {
    hour,
    minute,
    second,
    runPerSecond
  };
};
