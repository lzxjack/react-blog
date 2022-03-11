import { db } from '../cloudBase';
import { DB } from './dbConfig';

export const getTag = () =>
  db
    .collection(DB.Tag)
    .get()
    .then(res => res)
    .catch(err => err);
