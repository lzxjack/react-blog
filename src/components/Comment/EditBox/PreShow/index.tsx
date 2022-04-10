import { useMemoizedFn } from 'ahooks';
import classNames from 'classnames';
import React from 'react';
import sanitizeHtml from 'sanitize-html';

import MarkDown from '@/components/MarkDown';

import s from './index.scss';

interface Props {
  closePre?: Function;
  content?: string;
  className?: string;
}

const PreShow: React.FC<Props> = ({ closePre, content, className }) => {
  const handleClose = useMemoizedFn(() => closePre?.());

  return (
    <div className={classNames(s.preShow, className)}>
      <div className={s.closeBtn} onClick={handleClose}>
        ×
      </div>
      <MarkDown className={s.preMarked} content={sanitizeHtml(content!)} />
    </div>
  );
};

export default PreShow;
