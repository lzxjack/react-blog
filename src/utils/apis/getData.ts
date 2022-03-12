import { db } from '../cloudBase';

export const getData = (config: {
  dbName: string;
  sortKey?: string;
  isAsc?: boolean;
}) => {
  const { dbName, sortKey = '_id', isAsc = false } = config;

  return db
    .collection(dbName)
    .orderBy(sortKey, isAsc ? 'asc' : 'desc')
    .get()
    .then(res => res)
    .catch(err => err);
};
