import { Popover } from 'antd';
import React, { ReactNode } from 'react';

import base from '@/styles/base.scss';

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
      className={s.socialBtn}
      color={base.hoverColor}
      content={content}
      overlayClassName={s.card}>
      {children}
    </Popover>
  );
};

export default IcoBtn;
