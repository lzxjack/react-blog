import React from 'react';

import Divider from '@/components/Divider';
import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import s from './index.scss';
import MsgInfo from './MsgInfo';

const Msg: React.FC = () => {
  return (
    <Layout title={Title.Msg}>
      <MsgInfo />
      <Divider />
    </Layout>
  );
};

export default Msg;
