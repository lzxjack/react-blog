import React, { MouseEventHandler } from 'react';

import { smallLoadingUrl } from '@/utils/constant';
import { useLazyImg } from '@/utils/hooks/useLazyImg';

import s from './index.scss';

interface Props {
  url?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ImgItem: React.FC<Props> = ({ url, onClick }) => {
  const { imgRef, imgUrl } = useLazyImg(url!, smallLoadingUrl);

  return (
    <div
      ref={imgRef}
      className={s.imgItem}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: imgUrl === smallLoadingUrl ? '30%' : 'cover'
      }}
      onClick={onClick!}
    />
  );
};

export default ImgItem;
