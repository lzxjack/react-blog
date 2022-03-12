import { useTitle } from 'ahooks';
import React from 'react';

import { siteTitle } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

const Link: React.FC = () => {
  useTitle(`${siteTitle} | ${Title.Link}`);
  return <>Link</>;
};

export default Link;
