import { message } from 'antd';
import copy from 'copy-to-clipboard';
import React from 'react';

import s from './index.scss';

interface Props {
  emojiStr: string[];
}

const EmojiItem: React.FC<Props> = ({ emojiStr }) => {
  return (
    <>
      {emojiStr.map((item: string, index: number) => (
        <div
          className={s.emoji}
          key={index}
          onClick={() => {
            if (copy(item)) {
              message.success('复制到剪切板!');
            }
          }}
        >
          {item}
        </div>
      ))}
    </>
  );
};

export default EmojiItem;
