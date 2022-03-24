import './index.custom.scss';

import { Popover } from 'antd';
import classNames from 'classnames';
import React from 'react';

import base from '@/styles/base.scss';
import { emojiFood, emojiNature, emojiPeople, emojiSymbol } from '@/utils/constant';

import EmojiItem from './EmojiItem';
import s from './index.scss';

const Emoji: React.FC = () => {
  return (
    <>
      <Popover
        className={classNames(s.emojiBtn)}
        overlayClassName={s.emojiContent}
        // color={base.themeColor2}
        placement='bottom'
        content={<EmojiItem emojiStr={emojiPeople} />}
        trigger='click'
      >
        <div>😜</div>
      </Popover>
      <Popover
        className={classNames(s.emojiBtn, s.emoji2)}
        overlayClassName={s.emojiContent}
        // color={base.themeColor2}
        placement='bottom'
        content={<EmojiItem emojiStr={emojiNature} />}
        trigger='click'
      >
        <div>✉️</div>
      </Popover>
      <Popover
        className={classNames(s.emojiBtn, s.emoji3)}
        overlayClassName={s.emojiContent}
        // color={base.themeColor2}
        placement='bottom'
        content={<EmojiItem emojiStr={emojiSymbol} />}
        trigger='click'
      >
        <div>🆗</div>
      </Popover>
      <Popover
        className={classNames(s.emojiBtn, s.emoji4)}
        overlayClassName={s.emojiContent}
        // color={base.themeColor2}
        placement='bottom'
        content={<EmojiItem emojiStr={emojiFood} />}
        trigger='click'
      >
        <div>🍎</div>
      </Popover>
    </>
  );
};

export default Emoji;
