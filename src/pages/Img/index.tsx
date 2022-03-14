import useUrlState from '@ahooksjs/use-url-state';
import React from 'react';

import Layout from '@/components/Layout';

import s from './index.scss';

const Img: React.FC = () => {
  const [query] = useUrlState();

  return <Layout title={query.title}>123</Layout>;
};

export default Img;
