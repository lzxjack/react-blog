import { useSafeState } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import MyPagination from '@/components/MyPagination';
import { detailPostSize } from '@/utils/constant';

import { ArticleType } from '../constant';
import { Title } from '../titleConfig';
import ArtList from './ArtList';
import Search from './Search';

const Articles: React.FC = () => {
  const [page, setPage] = useSafeState(1);
  const [list, setList] = useSafeState<ArticleType[]>([]);
  const [total, setTotal] = useSafeState(0);

  return (
    <Layout title={Title.Articles}>
      <Search page={page} setList={setList} setTotal={setTotal} />
      <ArtList articles={list} />
      <MyPagination
        current={page}
        defaultPageSize={detailPostSize}
        total={total}
        setPage={setPage}
        // scrollToTop={126}
      />
    </Layout>
  );
};

export default Articles;
