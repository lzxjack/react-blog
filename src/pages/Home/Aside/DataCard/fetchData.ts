import { DB } from '@/utils/apis/dbConfig';
import { getSum } from '@/utils/apis/getSum';
import { _ } from '@/utils/cloudBase';

export const fetchData = async () => {
  const [articles, classes, tags] = await Promise.all([
    getSum(DB.Article, { post: _.eq(true) }),
    getSum(DB.Class),
    getSum(DB.Tag)
  ]);

  return {
    articles,
    classes,
    tags
  };
};
