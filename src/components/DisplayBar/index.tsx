import React, { MouseEventHandler } from 'react';

import s from './index.scss';

interface Props {
  content?: string;
  right?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const DisplayBar: React.FC<Props> = ({ content = '', right = '', onClick }) => {
  return (
    <div className={s.displayBar} onClick={onClick}>
      <div className={s.content}>{content}</div>
      <div className={s.rightContent}>
        <div className={s.rightBar}>{right}</div>
      </div>
    </div>
  );
};

export default DisplayBar;
