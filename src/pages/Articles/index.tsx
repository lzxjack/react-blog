import { useRequest, useSafeState } from 'ahooks';
import { message } from 'antd';
import React from 'react';

import Layout from '@/components/Layout';
import LayoutLoading from '@/components/LayoutLoading';
import MyPagination from '@/components/MyPagination';
import { DB } from '@/utils/apis/dbConfig';
import { getWhereOrderPageSum } from '@/utils/apis/getWhereOrderPageSum';
import { detailPostSize } from '@/utils/constant';

import { Title } from '../titleConfig';
import ArtList from './ArtList';
import Search from './Search';

const Articles: React.FC = () => {
  const [page, setPage] = useSafeState(1);
  const [total, setTotal] = useSafeState(0);

  const [isReset, setIsReset] = useSafeState(false);
  const [where, setWhere] = useSafeState(() => ({}));

  const { data, loading, run } = useRequest(
    () =>
      getWhereOrderPageSum({
        dbName: DB.Article,
        where,
        page,
        size: detailPostSize,
        sortKey: 'date'
      }),
    {
      retryCount: 3,
      refreshDeps: [page],
      onSuccess: () => {
        setTotal(data?.sum.total);
        if (isReset) {
          setIsReset(false);
          message.success('重置成功!');
        }
      }
    }
  );

  return (
    <Layout title={Title.Articles}>
      <Search
        page={page}
        setPage={setPage}
        where={where}
        setWhere={setWhere}
        run={run}
        setIsReset={setIsReset}
      />
      {loading ? (
        <LayoutLoading />
      ) : (
        <>
          <ArtList articles={data?.articles.data} />
          <MyPagination
            current={page}
            defaultPageSize={detailPostSize}
            total={total}
            setPage={setPage}
            // scrollToTop={126}
          />
        </>
      )}
    </Layout>
  );
};

export default Articles;
