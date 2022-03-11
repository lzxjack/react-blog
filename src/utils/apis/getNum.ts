import { db } from '../cloudBase';

export const getNum = (dbName: string) =>
  db
    .collection(dbName)
    .count()
    .then(res => res)
    .catch(err => err);
