import { db } from '../cloudBase';

// 新
export const getWhereOrderPageData = (config: {
  dbName: string;
  where: object;
  page: number;
  size: number;
  sortKey?: string;
  isAsc?: boolean;
}) => {
  const { dbName, where, sortKey = '_id', isAsc = false, page, size } = config;

  return db
    .collection(dbName)
    .where(where)
    .orderBy(sortKey, isAsc ? 'asc' : 'desc')
    .skip((page - 1) * size)
    .limit(size)
    .get()
    .then(res => res)
    .catch(err => err);
};
