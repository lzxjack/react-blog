import { useRequest, useSafeState } from 'ahooks';
import React from 'react';

import { getMsgReplys, getPageMsgs } from '@/utils/apis/getMsgs';
import { msgSize } from '@/utils/constant';

import EditBox from './EditBox';
import MsgList from './MsgList';

interface Props {
  postTitle: string;
  title: string;
}

const Comment: React.FC<Props> = ({ postTitle, title }) => {
  const [page, setPage] = useSafeState(1);

  const { data: msgs, loading: msgLoading } = useRequest(getPageMsgs, {
    defaultParams: [postTitle, page, msgSize],
    retryCount: 3
  });

  const { data: replys, loading: replyLoading } = useRequest(getMsgReplys, {
    defaultParams: [postTitle],
    retryCount: 3
  });

  return (
    <div>
      <EditBox />
      <MsgList
        msgs={msgs?.data}
        replys={replys?.data}
        loading={msgLoading || replyLoading}
      />
    </div>
  );
};

export default Comment;
