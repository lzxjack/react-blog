import { _, db } from '../cloudBase';
import { count_id } from '../constant';
import { DB } from './dbConfig';

export const getSiteCount = () =>
  db
    .collection(DB.Count)
    .doc(count_id)
    .update({
      count: _.inc(1)
    })
    .then(() =>
      db
        .collection(DB.Count)
        .doc(count_id)
        .get()
        .then(res => res)
        .catch(err => err)
    )
    .catch(err => err);
