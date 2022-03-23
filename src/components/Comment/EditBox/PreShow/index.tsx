import React from 'react';
import sanitizeHtml from 'sanitize-html';

import MarkDown from '@/components/MarkDown';

import s from './index.scss';

interface Props {
  showPre?: boolean;
  setShowPre?: Function;
  content?: string;
}

const PreShow: React.FC<Props> = ({ showPre = false, setShowPre, content }) => {
  return (
    <>
      <div className={s.preShow} style={{ left: showPre ? '50%' : '-460px' }}>
        <div
          className={s.closeBtn}
          onClick={() => {
            setShowPre?.(false);
            // setIsReply(false);
          }}
        >
          ×
        </div>
        <MarkDown className={s.preMarked} content={sanitizeHtml(content!)} />
      </div>
      <div className={s.preMask} style={{ display: showPre ? 'block' : 'none' }} />
    </>
  );
};

export default PreShow;
