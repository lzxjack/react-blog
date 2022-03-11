import { db } from '../cloudBase';

export const getPageData = (config: {
  dbName: string;
  sortKey: string;
  isAsc: boolean;
  page: number;
  size: number;
}) => {
  const { dbName, sortKey, isAsc, page, size } = config;

  return db
    .collection(dbName)
    .orderBy(sortKey, isAsc ? 'asc' : 'desc')
    .skip((page - 1) * size)
    .limit(size)
    .get()
    .then(res => res)
    .catch(err => err);
};
