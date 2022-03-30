import { useInViewport, useSafeState } from 'ahooks';
import { useEffect, useRef } from 'react';

export const useLazyImg = (avatar: string, loading: string) => {
  const imgRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [_, ratio] = useInViewport(imgRef, {
    threshold: [1]
  });

  const [imgUrl, setImgUrl] = useSafeState(loading);

  useEffect(() => {
    if (ratio !== 1) return;
    setImgUrl(avatar);
  }, [ratio]);

  return { imgRef, imgUrl };
};
