import { useInViewport, useSafeState } from 'ahooks';
import { useEffect, useRef } from 'react';

export const useLazyImg = (avatar: string) => {
  const imgRef = useRef(null);
  const [inViewport] = useInViewport(imgRef);

  const [imgUrl, setImgUrl] = useSafeState('');

  useEffect(() => {
    if (!inViewport) return;
    setImgUrl(avatar);
  }, [inViewport]);

  return { imgRef, imgUrl };
};
