import { DB } from '@/utils/apis/dbConfig';

import { _, db } from '../cloudBase';

export const getMsgsSum = (postTitle: string) => {
  return db
    .collection(DB.Msg)
    .where({
      postTitle,
      replyId: _.eq('')
    })
    .count()
    .then(res => res)
    .catch(err => err);
};
