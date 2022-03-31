import './index.custom.scss';

import { Popover } from 'antd';
import classNames from 'classnames';
import React from 'react';

import EmojiItem from './EmojiItem';
import s from './index.scss';
import { useEmoji } from './useEmoji';

interface EmojiType {
  className: string;
  emojiStr: string[];
  show: string;
}

const Emoji: React.FC = () => {
  const { emojiPeople, emojiNature, emojiSymbol, emojiFood } = useEmoji();

  const emojiData: EmojiType[] = [
    {
      className: '',
      emojiStr: emojiPeople,
      show: '😜'
    },
    {
      className: s.emoji2,
      emojiStr: emojiNature,
      show: '✉️'
    },
    {
      className: s.emoji3,
      emojiStr: emojiSymbol,
      show: '🆗'
    },
    {
      className: s.emoji4,
      emojiStr: emojiFood,
      show: '🍎'
    }
  ];

  return (
    <>
      {emojiData.map((item, index) => (
        <Popover
          key={index}
          className={classNames(s.emojiBtn, item.className)}
          overlayClassName={s.emojiContent}
          placement='bottom'
          content={<EmojiItem emojiStr={item.emojiStr} />}
          trigger='click'
        >
          <div>{item.show}</div>
        </Popover>
      ))}
    </>
  );
};

export default Emoji;
