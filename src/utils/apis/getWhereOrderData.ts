import { db } from '../cloudBase';

export const getWhereOrderData = (config: {
  dbName: string;
  where: object;
  sortKey?: string;
  isAsc?: boolean;
}) => {
  const { dbName, where, sortKey = '_id', isAsc = false } = config;

  return db
    .collection(dbName)
    .where(where)
    .orderBy(sortKey, isAsc ? 'asc' : 'desc')
    .get()
    .then(res => res)
    .catch(err => err);
};
