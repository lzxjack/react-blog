import { db } from '../cloudBase';

export const getData = (dbName: string) =>
  db
    .collection(dbName)
    .get()
    .then(res => res)
    .catch(err => err);
