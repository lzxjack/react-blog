import PubSub from 'pubsub-js';
import React from 'react';

import { ADD_EMOJI } from '@/utils/pubsub';

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
          onClick={() => PubSub.publish(ADD_EMOJI, item)}
        >
          {item}
        </div>
      ))}
    </>
  );
};

export default EmojiItem;
