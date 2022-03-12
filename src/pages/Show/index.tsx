import React from 'react';

import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import s from './index.scss';

const Show: React.FC = () => {
  return <Layout title={Title.Show}>Show</Layout>;
};

export default Show;
