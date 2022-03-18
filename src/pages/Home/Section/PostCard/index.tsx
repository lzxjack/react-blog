import dayjs from 'dayjs';
import React, { MouseEventHandler } from 'react';

import Card from '@/components/Card';

import s from './index.scss';

interface Props {
  title?: string;
  content?: string;
  date?: number;
  tags?: string[];
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const PostCard: React.FC<Props> = ({ title, content, date, tags, onClick }) => {
  return (
    <Card className={s.card} isStatic={true} onClick={onClick}>
      <div className={s.title}>{title}</div>
      <p className={s.content}>
        {content!.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
      </p>
      <div className={s.info}>
        <span className={s.date}>{dayjs(date!).format('YYYY-MM-DD')}</span>
        <div className={s.tags}>
          {tags!.map(tag => (
            <span className={s.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
