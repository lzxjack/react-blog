import React from 'react';

import s from './index.scss';

const PostCardLoading: React.FC = () => {
  return (
    <div className={s.postCardLoading}>
      <div className={s.bar} />
      <div className={s.bar} />
      <div className={s.bar} />
      <div className={s.bar} />
    </div>
  );
};

export default PostCardLoading;
