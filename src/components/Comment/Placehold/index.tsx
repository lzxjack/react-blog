import React from 'react';

import s from './index.scss';

interface Props {
  msgCount?: number;
  isMsg?: boolean;
}

const Placehold: React.FC<Props> = ({ msgCount, isMsg }) => {
  return (
    <>
      {msgCount ? (
        <div className={s.hasMag}>
          {msgCount}条{isMsg ? '留言' : '评论'}
        </div>
      ) : (
        <div className={s.noMag}>暂时没有{isMsg ? '留言' : '评论'}&nbsp;~</div>
      )}
    </>
  );
};

export default Placehold;
