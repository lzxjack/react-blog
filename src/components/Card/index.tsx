import React from 'react';
import classNames from 'classnames';
import s from './index.scss';

interface Props {
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={classNames(s.card, className)}>{children}</div>;
};

export default Card;
