import { useTitle } from 'ahooks';
import React from 'react';

import { siteTitle } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

const Classes: React.FC = () => {
  useTitle(`${siteTitle} | ${Title.Classes}`);
  return <>Classes</>;
};

export default Classes;
