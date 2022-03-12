import { useRequest } from 'ahooks';
import React from 'react';
import { connect } from 'react-redux';

import Layout from '@/components/Layout';
import { setNavShow } from '@/redux/actions';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';
import useTop from '@/utils/hooks/useTop';

import s from './index.scss';
import SayPop from './SayPop';

interface Props {
  setNavShow?: Function;
}

const Say: React.FC<Props> = ({ setNavShow }) => {
  useTop(setNavShow!);

  const { data, loading } = useRequest(getData, {
    defaultParams: [{ dbName: DB.Say, sortKey: 'date' }],
    retryCount: 3,
    cacheKey: DB.Say,
    staleTime
  });

  return (
    <Layout title='自言自语'>
      {data?.data.map(
        ({ _id, content, date }: { _id: string; content: string; date: number }) => (
          <SayPop key={_id} content={content} date={date} className={s.sayItem} />
        )
      )}
    </Layout>
  );
};

export default connect(() => ({}), { setNavShow })(Say);
