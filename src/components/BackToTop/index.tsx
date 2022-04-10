import './index.custom.scss';

import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { BackTop } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

import { setNavShow } from '@/redux/actions';

import s from './index.scss';

interface Props {
  setNavShow?: Function;
}

const BackToTop: React.FC<Props> = ({ setNavShow }) => {
  const backTop = () => {
    setNavShow?.(true);
  };

  return (
    <BackTop duration={700} visibilityHeight={300} onClick={backTop} className='BackTop'>
      <div className={s.backTop}>
        <VerticalAlignTopOutlined />
      </div>
    </BackTop>
  );
};

export default connect(() => ({}), {
  setNavShow
})(BackToTop);
