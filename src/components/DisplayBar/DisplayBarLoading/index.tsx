import React from 'react';

import s from './index.scss';

const DisplayBarLoading: React.FC = () => {
  return (
    <div className={s.displayBarLoading}>
      <div className={s.bar} />
    </div>
  );
};

export default DisplayBarLoading;
