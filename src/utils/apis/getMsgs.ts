import { DB } from '@/utils/apis/dbConfig';

import { _, db } from '../cloudBase';

export const getPageMsgs = (postTitle: string, page: number, size: number) => {
  return db
    .collection(DB.Msg)
    .where({
      postTitle,
      replyId: _.eq('')
    })
    .orderBy('date', 'desc')
    .skip((page - 1) * size)
    .limit(size)
    .get()
    .then(res => res)
    .catch(err => err);
};

export const getMsgReplys = (postTitle: string) => {
  return db
    .collection(DB.Msg)
    .where({
      postTitle,
      replyId: _.neq('')
    })
    .get()
    .then(res => res)
    .catch(err => err);
};
