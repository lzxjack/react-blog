import classNames from 'classnames';
import React from 'react';

import Loading from '../Loading';
import s from './index.scss';

interface Props {
  className?: string;
  loading?: boolean;
  isStatic?: boolean;
}

const Card: React.FC<Props> = ({ children, className, loading, isStatic }) => {
  return (
    <div
      className={classNames(
        s.card,
        { [s.center]: loading },
        { [s.active]: !isStatic },
        className
      )}
    >
      {loading ? <Loading /> : children}
    </div>
  );
};

export default Card;
