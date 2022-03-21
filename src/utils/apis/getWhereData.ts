import { db } from '../cloudBase';

export const getWhereData = (dbName: string, where: object) =>
  db
    .collection(dbName)
    .where(where)
    .get()
    .then(res => res)
    .catch(err => err);
