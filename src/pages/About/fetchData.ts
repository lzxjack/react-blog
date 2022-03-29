import { DB } from '@/utils/apis/dbConfig';
import { getOrderData } from '@/utils/apis/getOrderData';
import { getSum } from '@/utils/apis/getSum';

export const fetchData = async () => {
  const [about, classes, artSum] = await Promise.all([
    getOrderData({ dbName: DB.About }),
    getOrderData({ dbName: DB.Class }),
    getSum(DB.Article)
  ]);

  return {
    about,
    classes,
    artSum
  };
};
