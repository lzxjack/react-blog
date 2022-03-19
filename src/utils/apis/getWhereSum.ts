import { db } from '../cloudBase';

export const getWhereSum = (dbName: string, where: object) => {
  return db
    .collection(dbName)
    .where(where)
    .count()
    .then(res => res)
    .catch(err => err);
};
