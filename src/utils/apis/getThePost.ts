import { DB } from '@/utils/apis/dbConfig';

import { db } from '../cloudBase';

export const getThePost = (titleEng: string) => {
  return db
    .collection(DB.Article)
    .where({
      titleEng
    })
    .get()
    .then(res => res)
    .catch(err => err);
};
