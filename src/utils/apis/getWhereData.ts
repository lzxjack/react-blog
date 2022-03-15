import { db } from '../cloudBase';

export const getWhereData = (config: { dbName: string; where: object }) => {
  const { dbName, where } = config;

  return db
    .collection(dbName)
    .where(where)
    .get()
    .then(res => res)
    .catch(err => err);
};
