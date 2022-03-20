import useUrlState from '@ahooksjs/use-url-state';
import { useRequest, useSafeState } from 'ahooks';
import dayjs from 'dayjs';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import DisplayBar from '@/components/DisplayBar';
import Layout from '@/components/Layout';
import MyPagination from '@/components/MyPagination';
import { DB } from '@/utils/apis/dbConfig';
import { getArtClassTag } from '@/utils/apis/getArtClassTag';
import { db } from '@/utils/cloudBase';
import { detailPostSize } from '@/utils/constant';

interface ArtTagType {
  _id: string;
  title: string;
  date: number;
  titleEng: string;
}

const ArtDetail: React.FC = () => {
  const [query] = useUrlState();
  const navigate = useNavigate();

  const [page, setPage] = useSafeState(1);

  const where = query.tag
    ? {
        tags: db.RegExp({
          regexp: `${query.tag}`,
          options: 'i'
        })
      }
    : {
        classes: query.class
      };

  const { data, loading } = useRequest(
    () =>
      getArtClassTag({
        dbName: DB.Article,
        where,
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
    <Layout title={query.tag || query.class} loading={loading}>
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

export default ArtDetail;
