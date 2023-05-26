import { db } from '../cloudBase';

export const getSum = (dbName: string, where?: object) =>
  db
    .collection(dbName)
    .where(where || {})
    .count()
    .then(res => res)
    .catch(err => err);
