import { useRequest, useSafeState } from 'ahooks';
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import MyPagination from '@/components/MyPagination';
import { storeState } from '@/redux/interface';
import { DB } from '@/utils/apis/dbConfig';
import { getPageData } from '@/utils/apis/getPageData';
import { homeSize } from '@/utils/constant';

import s from './index.scss';
import PostCard from './PostCard';
import PostLoading from './PostLoading';

interface theAtc {
  classes: string;
  content: string;
  date: number;
  tags: string[];
  title: string;
  titleEng: string;
  url: string;
  _id: string;
  _openid: string;
}

interface Props {
  artSum?: number;
}

const Section: React.FC<Props> = ({ artSum }) => {
  const navigate = useNavigate();
  const [page, setPage] = useSafeState(1);

  const { data, loading } = useRequest(
    () =>
      getPageData({
        dbName: DB.Article,
        sortKey: 'date',
        isAsc: false,
        page,
        size: homeSize
      }),
    {
      retryCount: 3,
      refreshDeps: [page]
    }
  );

  return (
    <section className={s.section}>
      {loading ? (
        <PostLoading />
      ) : (
        data?.data.map(({ _id, title, content, date, tags, titleEng }: theAtc) => (
          <PostCard
            key={_id}
            title={title}
            content={content}
            date={date}
            tags={tags}
            onClick={() => navigate(`/post?title=${titleEng}`)}
          />
        ))
      )}
      <MyPagination
        current={page}
        defaultPageSize={homeSize}
        total={artSum}
        setPage={setPage}
        scrollToTop={70}
      />
    </section>
  );
};

export default connect((state: storeState) => ({ artSum: state.artSum }))(Section);
