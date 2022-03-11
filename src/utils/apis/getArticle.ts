import { db } from '../cloudBase';
import { DB } from './dbConfig';

export const getArticle = () =>
  db
    .collection(DB.Article)
    .get()
    .then(res => res)
    .catch(err => err);
