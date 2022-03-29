import { DB } from '@/utils/apis/dbConfig';
import { getSum } from '@/utils/apis/getSum';

export const fetchData = async () => {
  const [articles, classes, tags] = await Promise.all([
    getSum(DB.Article),
    getSum(DB.Class),
    getSum(DB.Tag)
  ]);

  return {
    articles,
    classes,
    tags
  };
};
