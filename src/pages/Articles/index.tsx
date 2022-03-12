import { useTitle } from 'ahooks';
import React from 'react';

import { siteTitle } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

const Articles: React.FC = () => {
  useTitle(`${siteTitle} | ${Title.Articles}`);
  return <>Articles</>;
};

export default Articles;
