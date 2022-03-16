import { MessageOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';

import MarkDown from '@/components/MarkDown';

import s from './index.scss';

dayjs.extend(relativeTime);

interface Props {
  _id?: string;
  avatar?: string;
  openReplyBox?: Function;
  link?: string;
  name?: string;
  date?: number;
  content?: string;
}

const MsgItem: React.FC<Props> = ({
  _id,
  avatar,
  openReplyBox,
  link,
  name,
  date,
  content
}) => {
  return (
    <div className={s.commentItem}>
      <div className={s.avatarBox}>
        <img src={avatar} alt='avatar' className={s.avatar} />
      </div>
      <div className={s.replyBtn} onClick={() => openReplyBox?.(_id)}>
        <MessageOutlined />
      </div>
      <div className={s.contentBox}>
        <div className={s.usrInfo}>
          <a
            href={link}
            // target={item.link ? '_blank' : '_self'}
            rel='noreferrer'
            className={s.name}
            // style={{ cursor: item.link ? 'pointer' : 'default' }}
          >
            {name}
          </a>
          <span className={s.flag}>站长</span>
          <span className={s.date}>{dayjs(date).fromNow()}</span>
        </div>
        <MarkDown content={content || ''} className={s.content} />
      </div>
    </div>
  );
};

export default MsgItem;
