import { useRequest, useSafeState } from 'ahooks';
import React from 'react';

import { DB } from '@/utils/apis/dbConfig';
import { getWhereOrderData } from '@/utils/apis/getWhereOrderData';
import { _ } from '@/utils/cloudBase';
import { msgSize } from '@/utils/constant';

import MyPagination from '../MyPagination';
import Divider from './Divider';
import EditBox from './EditBox';
import { fetchData } from './fetchData';
import MsgList from './MsgList';
import Placehold from './Placehold';

interface Props {
  titleEng?: string;
  autoScroll?: boolean;
  scrollToTop?: number;
}

const Comment: React.FC<Props> = ({
  titleEng = '',
  autoScroll = false,
  scrollToTop = 0
}) => {
  const [page, setPage] = useSafeState(1);

  // 评论
  const { data: msgsData, loading: msgLoading } = useRequest(
    () =>
      fetchData({
        dbName: DB.Msg,
        where: {
          postTitle: titleEng,
          replyId: _.eq('')
        },
        page,
        size: msgSize,
        sortKey: 'date'
      }),
    {
      retryCount: 3,
      refreshDeps: [page]
    }
  );

  // 回复
  const { data: replys, loading: replyLoading } = useRequest(getWhereOrderData, {
    defaultParams: [
      {
        dbName: DB.Msg,
        where: {
          postTitle: titleEng,
          replyId: _.neq('')
        },
        sortKey: 'date',
        isAsc: true
      }
    ],
    retryCount: 3
  });

  return (
    <div>
      <Divider />
      <EditBox />
      <Placehold msgCount={msgsData?.msgsSum.total} isMsg={!titleEng} />
      <MsgList
        msgs={msgsData?.msgs.data}
        replys={replys?.data}
        loading={msgLoading || replyLoading}
      />
      <MyPagination
        current={page}
        defaultPageSize={msgSize}
        total={msgsData?.msgsSum.total}
        setPage={setPage}
        autoScroll={autoScroll}
        scrollToTop={scrollToTop}
      />
    </div>
  );
};

export default Comment;
