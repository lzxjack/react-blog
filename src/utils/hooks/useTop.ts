import { useMount } from 'ahooks';

const useTop = (setNavShow: Function) => {
  useMount(() => {
    window.scrollTo(0, 0);
    setNavShow?.(true);
  });
};

export default useTop;
