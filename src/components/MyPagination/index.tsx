import './pagination.custom.scss';

import { Pagination } from 'antd';
import React from 'react';

import s from './index.scss';

interface Props {
  current?: number;
  defaultPageSize?: number;
  total?: number;
  setPage?: Function;
  scrollToTop?: number;
}

const MyPagination: React.FC<Props> = ({
  current,
  defaultPageSize = 8,
  total = 0,
  setPage,
  scrollToTop
}) => {
  return (
    <>
      {total > defaultPageSize ? (
        <div id='myPagination' className={s.pageBox}>
          <Pagination
            current={current}
            total={total}
            defaultPageSize={defaultPageSize}
            showSizeChanger={false}
            showTitle={false}
            onChange={(page: number) => {
              setPage?.(page);
              window.scrollTo(0, document.body.clientHeight - (scrollToTop || 0));
            }}
          />
        </div>
      ) : null}
    </>
  );
};

export default MyPagination;
