import { useTitle } from 'ahooks';
import React from 'react';

import { siteTitle } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

const Show: React.FC = () => {
  useTitle(`${siteTitle} | ${Title.Show}`);
  return <>Show</>;
};

export default Show;
