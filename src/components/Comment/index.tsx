import { useRequest } from 'ahooks';
import React from 'react';

import { DB } from '@/utils/apis/dbConfig';
import { getWhereOrderData } from '@/utils/apis/getWhereOrderData';
import { defaultCommentAvatar, staleTime } from '@/utils/constant';

import EditBox from './EditBox';
import s from './index.scss';
import MsgList from './MsgList';

interface Props {
  postTitle: string;
  title: string;
}

const Comment: React.FC<Props> = ({ postTitle, title }) => {
  const { data, loading } = useRequest(getWhereOrderData, {
    defaultParams: [
      {
        dbName: DB.Msg,
        where: {
          postTitle
        },
        sortKey: 'date',
        isAsc: false
      }
    ],
    retryCount: 3,
    cacheKey: `${DB.Msg}-${postTitle}`,
    staleTime
  });

  return (
    <div>
      <EditBox />
      <MsgList />
    </div>
  );
};

export default Comment;
