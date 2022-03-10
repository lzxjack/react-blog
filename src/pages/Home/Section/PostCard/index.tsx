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
    <Card>
      <h1 className='article-item-title'>{title}</h1>
      <p className='article-item-abstract'>
        {content!.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}
      </p>
      <div className='article-item-info'>
        <span className='article-item-date theme-color-1 common-hover'>
          {dayjs(time!).format('YYYY-MM-DD')}
        </span>
        <div className='article-item-tags'>
          {tags!.map(tag => (
            <span className='article-item-tag theme-color-1 common-hover' key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
