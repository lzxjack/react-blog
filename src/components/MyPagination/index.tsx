import './pagination.custom.scss';

import { Pagination } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

import { setNavShow } from '@/redux/actions';

import s from './index.scss';

interface Props {
  current?: number;
  defaultPageSize?: number;
  total?: number;
  setPage?: Function;
  scrollToTop?: number;
  autoScroll?: boolean;
  setNavShow?: Function;
}

const MyPagination: React.FC<Props> = ({
  current,
  defaultPageSize = 8,
  total = 0,
  setPage,
  scrollToTop = 0,
  autoScroll = false,
  setNavShow
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
              setNavShow?.(false);
              autoScroll && window.scrollTo(0, scrollToTop);
            }}
          />
        </div>
      ) : null}
    </>
  );
};

export default connect(() => ({}), {
  setNavShow
})(MyPagination);
