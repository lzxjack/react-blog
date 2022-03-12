import React from 'react';

import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import s from './index.scss';

const Msg: React.FC = () => {
  return <Layout title={Title.Msg}>Msg</Layout>;
};

export default Msg;
