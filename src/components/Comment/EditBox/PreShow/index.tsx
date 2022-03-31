import React from 'react';
import sanitizeHtml from 'sanitize-html';

import MarkDown from '@/components/MarkDown';

import s from './index.scss';

interface Props {
  closePre?: Function;
  content?: string;
}

const PreShow: React.FC<Props> = ({ closePre, content }) => {
  return (
    <div className={s.preShow}>
      <div className={s.closeBtn} onClick={() => closePre?.()}>
        ×
      </div>
      <MarkDown className={s.preMarked} content={sanitizeHtml(content!)} />
    </div>
  );
};

export default PreShow;
