import { myAvatar, myDescr, myLink, myName } from '@/utils/constant';

export const useSite = () => {
  const mySite = [
    {
      key: 'name',
      value: myName
    },
    {
      key: 'link',
      value: myLink
    },
    {
      key: 'avatar',
      value: myAvatar
    },
    {
      key: 'descr',
      value: myDescr
    }
  ];

  return { mySite };
};
