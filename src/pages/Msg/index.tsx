import React from 'react';

import Comment from '@/components/Comment';
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
      <Comment postTitle='' title='留言板' />
    </Layout>
  );
};

export default Msg;
