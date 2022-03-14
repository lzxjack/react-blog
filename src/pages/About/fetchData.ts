import { DB } from '@/utils/apis/dbConfig';
import { getNum } from '@/utils/apis/getNum';
import { getOrderData } from '@/utils/apis/getOrderData';

export const fetchData = async () => {
  const [about, classes, artSum] = await Promise.all([
    getOrderData({ dbName: DB.About }),
    getOrderData({ dbName: DB.Class }),
    getNum(DB.Article)
  ]);

  return {
    about,
    classes,
    artSum
  };
};
