import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { getNum } from '@/utils/apis/getNum';

export const fetchData = async () => {
  const [about, classes, artSum] = await Promise.all([
    getData({ dbName: DB.About }),
    getData({ dbName: DB.Class }),
    getNum(DB.Article)
  ]);

  return {
    about,
    classes,
    artSum
  };
};
