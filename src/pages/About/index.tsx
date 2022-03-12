import { useTitle } from 'ahooks';
import React from 'react';

import { siteTitle } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

const About: React.FC = () => {
  useTitle(`${siteTitle} | ${Title.About}`);
  return <>About</>;
};

export default About;
