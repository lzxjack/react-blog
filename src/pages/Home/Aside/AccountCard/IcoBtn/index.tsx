import { Popover } from 'antd';
import React, { ReactNode } from 'react';

import s from './index.scss';

interface Props {
  isLink: boolean;
  link?: string;
  content?: ReactNode;
}

const IcoBtn: React.FC<Props> = ({ isLink, link, content, children }) => {
  return isLink ? (
    <a className={s.socialBtn} href={link} target='_blank' rel='noreferrer'>
      {children}
    </a>
  ) : (
    <Popover
      trigger='hover'
      className={s.socialBtn}
      content={content}
      overlayClassName={s.card}
    >
      {children}
    </Popover>
  );
};

export default IcoBtn;
