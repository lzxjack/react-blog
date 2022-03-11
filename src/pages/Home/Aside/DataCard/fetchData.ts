import { DB } from '@/utils/apis/dbConfig';
import { getNum } from '@/utils/apis/getNum';

export const fetchData = async () => {
  const [articles, classes, tags] = await Promise.all([
    getNum(DB.Article),
    getNum(DB.Class),
    getNum(DB.Tag)
  ]);

  return {
    articles,
    classes,
    tags
  };
};
