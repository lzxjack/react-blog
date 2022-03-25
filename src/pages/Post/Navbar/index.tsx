import './index.custom.scss';

import { MenuFoldOutlined } from '@ant-design/icons';
import { useSafeState } from 'ahooks';
import { Drawer } from 'antd';
import classNames from 'classnames';
import MarkNav from 'markdown-navbar';
import React from 'react';
import { connect } from 'react-redux';

import { setNavShow } from '@/redux/actions';

import s from './index.scss';

interface Props {
  content?: string;
  setNavShow?: Function;
}

const Navbar: React.FC<Props> = ({ content, setNavShow }) => {
  const [visible, setVisible] = useSafeState(false);

  return (
    <>
      <div className={s.hoverBar} onClick={() => setVisible(true)}>
        <MenuFoldOutlined />
      </div>
      <MarkNav
        className={classNames('postNavBar', s.navBar)}
        source={content || ''}
        headingTopOffset={10}
        ordered={false}
        onNavItemClick={() => setNavShow?.(false)}
      />
      <Drawer
        placement='right'
        onClose={() => setVisible(false)}
        visible={visible}
        className={s.drawer}
        width={340}
      >
        <MarkNav
          className='postNavBar'
          source={content || ''}
          headingTopOffset={10}
          ordered={false}
          onNavItemClick={() => setNavShow?.(false)}
        />
      </Drawer>
    </>
  );
};

export default connect(() => ({}), {
  setNavShow
})(Navbar);
