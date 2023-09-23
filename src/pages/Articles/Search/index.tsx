import { ArrowRightOutlined, RedoOutlined } from '@ant-design/icons';
import { useKeyPress, useSafeState } from 'ahooks';
import { message } from 'antd';
import React, { useRef } from 'react';

import { db } from '@/utils/cloudBase';

import s from './index.scss';

interface Props {
  page: number;
  setPage: Function;
  where: object;
  setWhere: Function;
  run: Function;
}

const Search: React.FC<Props> = ({ page, setPage, where, setWhere, run }) => {
  const [input, setInput] = useSafeState('');
  const inputRef = useRef(null);

  const search = () => {
    if (!input) {
      message.info('请输入关键词再搜索!');
      return;
    }
    setTimeout(() => {
      setWhere({
        title: db.RegExp({
          regexp: `${input}`,
          options: 'i'
        })
      });
      setPage(1);
      run?.();
    }, 0);
  };

  const reset = () => {
    if (JSON.stringify(where) === '{}' && page === 1 && !input) {
      message.info('无需重置!');
      return;
    }
    if (JSON.stringify(where) === '{}' && page === 1) {
      setInput('');
      return;
    }
    setTimeout(() => {
      setInput?.('');
      setWhere({});
      setPage(1);
      run?.();
    }, 0);
  };

  useKeyPress(13, search, {
    target: inputRef
  });

  useKeyPress(27, reset, {
    target: inputRef
  });

  return (
    <div className={s.searchBox}>
      <input
        ref={inputRef}
        autoFocus
        type='text'
        placeholder='搜索文章标题...'
        className={s.search}
        value={input}
        onChange={e => setInput?.(e.target.value)}
      />
      {/* 搜索按钮 */}
      <div className={s.searchBtn} onClick={search}>
        <ArrowRightOutlined />
      </div>
      {/* 重置按钮 */}
      <div className={s.searchBtn} onClick={reset}>
        <RedoOutlined />
      </div>
    </div>
  );
};

export default Search;
