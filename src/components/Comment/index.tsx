import { useRequest, useSafeState } from 'ahooks';
import React from 'react';

import { getMsgReplys } from '@/utils/apis/getMsgs';
import { msgSize } from '@/utils/constant';

import MyPagination from '../MyPagination';
import Divider from './Divider';
import EditBox from './EditBox';
import { fetchData } from './fetchData';
import MsgList from './MsgList';

interface Props {
  titleEng?: string;
}

const Comment: React.FC<Props> = ({ titleEng = '' }) => {
  const [page, setPage] = useSafeState(1);

  const { data: msgsData, loading: msgLoading } = useRequest(
    () => fetchData(titleEng, page, msgSize),
    {
      retryCount: 3,
      refreshDeps: [page]
    }
  );

  const { data: replys, loading: replyLoading } = useRequest(getMsgReplys, {
    defaultParams: [titleEng],
    retryCount: 3
  });

  return (
    <div>
      <Divider />
      <EditBox />
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
        scrollToTop={126}
      />
    </div>
  );
};

export default Comment;
