import classNames from 'classnames';
import React from 'react';

import Loading from '../Loading';
import s from './index.scss';

interface Props {
  className?: string;
  loading?: boolean;
}

const Card: React.FC<Props> = ({ children, className, loading }) => {
  return (
    <div className={classNames(s.card, { [s.center]: loading }, className)}>
      {loading ? <Loading /> : children}
    </div>
  );
};

export default Card;
