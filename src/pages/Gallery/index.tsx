import React from 'react';

import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import s from './index.scss';

const Gallery: React.FC = () => {
  return <Layout title={Title.Gallery}>Gallery</Layout>;
};

export default Gallery;
