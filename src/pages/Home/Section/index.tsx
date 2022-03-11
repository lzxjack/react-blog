import './pagination.custom.scss';

import { useRequest, useSafeState } from 'ahooks';
import { Pagination } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

import { storeState } from '@/redux/interface';
import { DB } from '@/utils/apis/dbConfig';
import { getPageData } from '@/utils/apis/getPageData';
import { homeSize } from '@/utils/constant';

import s from './index.scss';
import PostCard from './PostCard';
import PostLoading from './PostLoading';
// import

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
        data?.data.map(({ _id, title, content, date, tags }: theAtc) => (
          <PostCard key={_id} title={title} content={content} date={date} tags={tags} />
        ))
      )}
      <div className={s.box}>
        <Pagination
          current={page}
          total={artSum}
          defaultPageSize={homeSize}
          showSizeChanger={false}
          showTitle={false}
          onChange={page => {
            setPage(page);
            window.scrollTo(0, document.body.clientHeight - 70);
          }}
        />
      </div>
    </section>
  );
};

export default connect((state: storeState) => ({ artSum: state.artSum }))(Section);
