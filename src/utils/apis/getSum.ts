import { db } from '../cloudBase';

export const getSum = (dbName: string) =>
  db
    .collection(dbName)
    .count()
    .then(res => res)
    .catch(err => err);
