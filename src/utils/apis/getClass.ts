import { db } from '../cloudBase';
import { DB } from './dbConfig';

export const getClass = () =>
  db
    .collection(DB.Class)
    .get()
    .then(res => res)
    .catch(err => err);
