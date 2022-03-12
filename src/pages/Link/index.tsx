import React from 'react';

import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import s from './index.scss';

const Link: React.FC = () => {
  return <Layout title={Title.Link}>Link</Layout>;
};

export default Link;
