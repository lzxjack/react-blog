import { ArrowRightOutlined, RedoOutlined } from '@ant-design/icons';
import { useGetState, useRequest, useSafeState } from 'ahooks';
import React from 'react';

import { DB } from '@/utils/apis/dbConfig';
import { getWhereOrderPageSum } from '@/utils/apis/getWhereOrderPageSum';
import { db } from '@/utils/cloudBase';
import { detailPostSize } from '@/utils/constant';

import s from './index.scss';

interface Props {
  page: number;
  setList: Function;
  setTotal: Function;
}

const Search: React.FC<Props> = ({ page, setList, setTotal }) => {
  const [input, setInput] = useSafeState('');
  const [where, setWhere, getWhere] = useGetState(() => ({}));

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
      // manual: true,
      retryCount: 3,
      refreshDeps: [page],
      onSuccess: () => {
        console.log('成功');
        setList(data?.articles.data);
        setTotal(data?.sum.total);
      }
    }
  );

  return (
    <div className={s.searchBox}>
      <input
        type='text'
        placeholder='搜索文章标题...'
        className={s.search}
        value={input}
        onChange={e => {
          setInput?.(e.target.value);
          if (e.target.value === '') {
            setWhere({});
          } else {
            setWhere({
              title: db.RegExp({
                regexp: `${e.target.value}`,
                options: 'i'
              })
            });
          }
        }}
      />
      <div className={s.searchBtn} onClick={() => run?.()}>
        <ArrowRightOutlined />
      </div>
      <div
        className={s.searchBtn}
        onClick={() => {
          setInput?.('');
          setWhere({});
          console.log(getWhere());
          run?.();
        }}
      >
        <RedoOutlined />
      </div>
    </div>
  );
};

export default Search;
