import { useGetState } from 'ahooks';
import PubSub from 'pubsub-js';
import { useEffect, useRef } from 'react';

export const useEmoji = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [_, setStart, getStart] = useGetState(0);
  const [text, setText, getText] = useGetState('');
  useEffect(() => {
    const emoji = PubSub.subscribe('getEmoji', (_, data) => {
      const newText = `${getText().substring(0, getStart())}${data}${getText().substring(
        getStart()
      )}`;
      setText(newText);
      textRef.current?.focus();
    });
    return () => {
      PubSub.unsubscribe(emoji);
    };
  }, []);

  return {
    textRef,
    text,
    setText,
    setStart
  };
};
