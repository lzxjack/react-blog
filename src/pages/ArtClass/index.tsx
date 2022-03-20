import useUrlState from '@ahooksjs/use-url-state';
import { useRequest, useSafeState, useTitle } from 'ahooks';
import dayjs from 'dayjs';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import DisplayBar from '@/components/DisplayBar';
import Layout from '@/components/Layout';
import MyPagination from '@/components/MyPagination';
import { DB } from '@/utils/apis/dbConfig';
import { getArtClassTag } from '@/utils/apis/getArtClassTag';
import { detailPostSize, siteTitle } from '@/utils/constant';

interface ArtTagType {
  _id: string;
  title: string;
  date: number;
  titleEng: string;
}

const ArtClass: React.FC = () => {
  const [query] = useUrlState();
  useTitle(`${siteTitle} | ${query.class || ''}`);
  const navigate = useNavigate();

  const [page, setPage] = useSafeState(1);

  const { data, loading } = useRequest(
    () =>
      getArtClassTag({
        dbName: DB.Article,
        where: {
          classes: query.class
        },
        page,
        size: detailPostSize,
        sortKey: 'date'
      }),
    {
      retryCount: 3,
      refreshDeps: [page]
    }
  );

  return (
    <Layout title={query.class} loading={loading}>
      {data?.articles.data.map((item: ArtTagType) => (
        <DisplayBar
          key={item._id}
          content={item.title}
          right={dayjs(item.date).format('YYYY-MM-DD')}
          onClick={() => navigate(`/post?title=${encodeURIComponent(item.titleEng)}`)}
        />
      ))}
      <MyPagination
        current={page}
        defaultPageSize={detailPostSize}
        total={data?.sum.total}
        setPage={setPage}
        // scrollToTop={126}
      />
    </Layout>
  );
};

export default ArtClass;
