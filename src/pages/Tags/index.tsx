import React from 'react';

import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import s from './index.scss';

const Tags: React.FC = () => {
  return <Layout title={Title.Tags}>Tags</Layout>;
};

export default Tags;
