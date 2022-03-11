import dayjs from 'dayjs';
import { time } from '@/utils/constant';
import { useSafeState, useMount } from 'ahooks';

export const useRunTime = () => {
  const [runTime, setRunTime] = useSafeState(0);

  useMount(() => {
    const nowTime = new Date().getTime();
    const startTime = new Date(time).getTime();
    const runTime = dayjs(nowTime).diff(dayjs(startTime), 'days');
    setRunTime(runTime);
  });

  return { runTime };
};
