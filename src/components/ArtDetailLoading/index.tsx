import React from 'react';

import { detailPostSize } from '@/utils/constant';

import s from './index.scss';

const ArtDetailLoading: React.FC = () => {
  const oneBar = new Array(detailPostSize).fill(0);

  return (
    <>
      {oneBar.map((_, index) => (
        <div key={index} className={s.loadingBar}>
          <div className={s.placeHolder} />
        </div>
      ))}
    </>
  );
};

export default ArtDetailLoading;
