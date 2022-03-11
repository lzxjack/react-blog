import React from 'react';
import Card from '@/components/Card';
import dayjs from 'dayjs';
import s from './index.scss';

type Props = {
  title?: string;
  content?: string;
  time?: string;
  tags?: string[];
};

const PostCard: React.FC<Props> = ({ title, content, time, tags }) => {
  return (
    <Card className={s.card}>
      <h1 className={s.title}>{title}</h1>
      <p className={s.content}>
        {content!.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
      </p>
      <div className={s.info}>
        <span className={s.date}>{dayjs(time!).format('YYYY-MM-DD')}</span>
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
