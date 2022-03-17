import React from 'react';

import LayoutLoading from '@/components/LayoutLoading';

import MsgItem from './MsgItem';

interface MsgType {
  avatar?: string;
  content?: string;
  date?: number;
  email?: string;
  link?: string;
  name?: string;
  replyId?: string;
  _id?: string;
}

interface Props {
  msgs?: MsgType[];
  replys?: MsgType[];
  loading?: boolean;
}

const MsgList: React.FC<Props> = ({ msgs, loading }) => {
  const openReplyBox = (id: string) => {};

  return (
    <>
      {loading ? (
        <LayoutLoading />
      ) : (
        msgs?.map((msg: MsgType) => (
          <MsgItem
            key={msg._id}
            _id={msg._id}
            avatar={msg.avatar}
            openReplyBox={openReplyBox}
            link={msg.link}
            name={msg.name}
            date={msg.date}
            content={msg.content}
          />
        ))
      )}
    </>
  );
};

export default MsgList;
