import classNames from 'classnames';
import React from 'react';

import s from './index.scss';

interface Props {
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={classNames(s.card, className)}>{children}</div>;
};

export default Card;
