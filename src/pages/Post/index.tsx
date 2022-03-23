import useUrlState from '@ahooksjs/use-url-state';
import { useRequest } from 'ahooks';
import React from 'react';

import Comment from '@/components/Comment';
import Layout from '@/components/Layout';
import MarkDown from '@/components/MarkDown';
import { DB } from '@/utils/apis/dbConfig';
import { getWhereData } from '@/utils/apis/getWhereData';
import { staleTime } from '@/utils/constant';

import CopyRight from './CopyRight';
import s from './index.scss';
import Navbar from './Navbar';
import PostTags from './PostTags';

const Post: React.FC = () => {
  const [search] = useUrlState();

  const { data, loading } = useRequest(getWhereData, {
    defaultParams: [DB.Article, { titleEng: search.title }],
    retryCount: 3,
    cacheKey: `${DB.Article}-${search.title}`,
    staleTime
  });

  return (
    <Layout
      title={data?.data[0].title}
      loading={loading}
      classes={data?.data[0].classes}
      date={data?.data[0].date}
      isPost={true}
      rows={14}
    >
      <MarkDown content={data?.data[0].content} className={s.mb} />
      <PostTags tags={data?.data[0].tags} />
      <CopyRight title={data?.data[0].title} titleEng={data?.data[0].titleEng} />
      <Comment titleEng={search.title} title={data?.data[0].title} />
      <Navbar content={data?.data[0].content} />
    </Layout>
  );
};

export default Post;
