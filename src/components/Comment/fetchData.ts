import { getPageMsgs } from '@/utils/apis/getMsgs';
import { getMsgsSum } from '@/utils/apis/getMsgsSum';

export const fetchData = async (postTitle: string, page: number, msgSize: number) => {
  const [msgs, msgsSum] = await Promise.all([
    getPageMsgs(postTitle, page, msgSize),
    getMsgsSum(postTitle)
  ]);

  return {
    msgs,
    msgsSum
  };
};
