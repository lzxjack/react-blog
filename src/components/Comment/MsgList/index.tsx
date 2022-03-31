import React from 'react';

import LayoutLoading from '@/components/LayoutLoading';

import { MsgType } from '..';
import s from './index.scss';
import MsgItem from './MsgItem';

interface Props {
  msgs?: MsgType[];
  replys?: MsgType[];
  loading?: boolean;
  replyRun?: Function;
  title?: string;
}

const MsgList: React.FC<Props> = ({ msgs, replys, loading, replyRun, title }) => {
  return (
    <>
      {loading ? (
        <LayoutLoading />
      ) : (
        msgs?.map((msg: MsgType) => {
          return (
            <div key={msg._id} className={s.completeMsg}>
              <MsgItem
                _id={msg._id}
                avatar={msg.avatar}
                link={msg.link}
                name={msg.name}
                date={msg.date}
                content={msg.content}
                email={msg.email}
                isReply={false}
                replyRun={replyRun}
                title={title}
              />
              {replys
                ?.filter(item => item.replyId === msg._id)
                .map((reply: MsgType) => (
                  <MsgItem
                    key={reply._id}
                    _id={reply._id}
                    avatar={reply.avatar}
                    link={reply.link}
                    name={reply.name}
                    date={reply.date}
                    content={reply.content}
                    email={reply.email}
                    isReply={true}
                    replyRun={replyRun}
                    title={title}
                  />
                ))}
            </div>
          );
        })
      )}
    </>
  );
};

export default MsgList;
