import { getArticle } from '@/utils/apis/getArticle';
import { getClass } from '@/utils/apis/getClass';
import { getTag } from '@/utils/apis/getTag';

export const useFetchData = async () => {
  const [articles, classes, tags] = await Promise.all([
    getArticle(),
    getClass(),
    getTag()
  ]);

  return {
    articles,
    classes,
    tags
  };
};
