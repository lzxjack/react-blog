import PubSub from 'pubsub-js';
import React from 'react';

import s from './index.scss';

interface Props {
  emojiStr: string[];
}

const EmojiItem: React.FC<Props> = ({ emojiStr }) => {
  return (
    <>
      {emojiStr.map((item: string, index: number) => {
        return (
          <div
            className={s.emoji}
            key={index}
            onClick={() => PubSub.publish('getEmoji', item)}
          >
            {item}
          </div>
        );
      })}
    </>
  );
};

export default EmojiItem;
