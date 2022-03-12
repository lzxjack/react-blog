import { useTitle } from 'ahooks';
import React from 'react';

import { siteTitle } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

const Tags: React.FC = () => {
  useTitle(`${siteTitle} | ${Title.Tags}`);
  return <>Tags</>;
};

export default Tags;
