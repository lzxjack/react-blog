import { useTitle } from 'ahooks';
import React from 'react';

import { siteTitle } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

const Msg: React.FC = () => {
  useTitle(`${siteTitle} | ${Title.Msg}`);
  return <>Msg</>;
};

export default Msg;
