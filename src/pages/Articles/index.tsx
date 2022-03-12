import React from 'react';

import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import s from './index.scss';

const Articles: React.FC = () => {
  return <Layout title={Title.Articles}>Articles</Layout>;
};

export default Articles;
