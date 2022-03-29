// import { useMount, useSafeState } from 'ahooks';

export const useTime = () => {
  const hour = new Date().getHours();
  const timeText =
    hour < 6
      ? '凌晨好'
      : hour < 9
      ? '早上好'
      : hour < 11
      ? '上午好'
      : hour < 13
      ? '中午好'
      : hour < 17
      ? '下午好'
      : hour < 19
      ? '傍晚好'
      : '晚上好';

  return { timeText };
};
