import { useTitle } from 'ahooks';
import React from 'react';

import { siteTitle } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

const Gallery: React.FC = () => {
  useTitle(`${siteTitle} | ${Title.Gallery}`);
  return <>Gallery</>;
};

export default Gallery;
