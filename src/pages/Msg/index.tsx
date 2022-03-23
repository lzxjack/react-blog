import React from 'react';

import Comment from '@/components/Comment';
import Layout from '@/components/Layout';

import { Title } from '../titleConfig';
import MsgInfo from './MsgInfo';

const Msg: React.FC = () => {
  return (
    <Layout title={Title.Msg}>
      <MsgInfo />
      <Comment titleEng='' autoScroll={true} scrollToTop={440 + 370} title='留言板' />
    </Layout>
  );
};

export default Msg;
