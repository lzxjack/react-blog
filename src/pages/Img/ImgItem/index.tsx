import React, { MouseEventHandler } from 'react';

import { useLazyImg } from '@/utils/hooks/useLazyImg';

import s from './index.scss';

interface Props {
  url?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ImgItem: React.FC<Props> = ({ url, onClick }) => {
  const { imgRef, imgUrl } = useLazyImg(url!);

  return (
    <div
      ref={imgRef}
      className={s.imgItem}
      style={{ backgroundImage: `url(${imgUrl})` }}
      onClick={onClick!}
    />
  );
};

export default ImgItem;
