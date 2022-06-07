import { useInViewport, useSafeState } from 'ahooks';
import { useEffect, useRef } from 'react';

export const useLazyImg = (avatar: string, loading: string) => {
  const imgRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [inViewport] = useInViewport(imgRef);

  const [imgUrl, setImgUrl] = useSafeState(loading);

  useEffect(() => {
    if (!inViewport) return;
    setImgUrl(avatar);
  }, [inViewport]);

  return { imgRef, imgUrl };
};
