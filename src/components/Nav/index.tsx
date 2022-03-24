import { BgColorsOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { useEventListener, useMemoizedFn } from 'ahooks';
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import { setNavShow } from '@/redux/actions';
import { storeState } from '@/redux/interface';
import { blogAdminUrl } from '@/utils/constant';

import { useLinkList } from './config';
import s from './index.scss';

interface Props {
  navShow?: boolean;
  setNavShow?: Function;
}

const Nav: React.FC<Props> = ({ navShow, setNavShow }) => {
  useEventListener(
    'mousewheel',
    event => {
      event = event || window.event;
      setNavShow!(event.wheelDeltaY > 0);
    },
    { target: document.body }
  );

  const { navArr, secondNavArr } = useLinkList();
  const navigate = useNavigate();

  const toggle = useMemoizedFn(() => {
    const bodyStyle = window.document.getElementsByTagName('body')[0].style;
    bodyStyle.setProperty('--themeColor1', '#ffffff');
    bodyStyle.setProperty('--themeColor1', '#ffffff');
    bodyStyle.setProperty('--themeColor1', '#ffffff');
    bodyStyle.setProperty('--themeColor1', '#ffffff');
    bodyStyle.setProperty('--themeColor1', '#ffffff');
    bodyStyle.setProperty('--themeColor1', '#ffffff');
    bodyStyle.setProperty('--themeColor1', '#ffffff');
    bodyStyle.setProperty('--themeColor1', '#ffffff');
    bodyStyle.setProperty('--themeColor1', '#ffffff');
    bodyStyle.setProperty('--themeColor1', '#ffffff');
  });

  return (
    <nav className={classNames(s.nav, { [s.hiddenNav]: !navShow })}>
      <div className={s.navContent}>
        {/* 主页 */}
        <div className={s.homeBtn} onClick={() => navigate('/')}>
          <HomeOutlined />
        </div>

        {/* 后台管理 */}
        <a className={s.adminBtn} href={blogAdminUrl} target='_blank' rel='noreferrer'>
          <SettingOutlined />
        </a>

        {/* 黑暗模式切换 */}
        <div className={s.darkBen} onClick={toggle}>
          <BgColorsOutlined />
        </div>

        {/* 文章单独按钮 */}
        <div className={s.articlesBtn}>
          <div className={s.articelsSecond}>
            {secondNavArr.map(item => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? s.sedActive : s.articelsSecondItem
                }
                to={item.to}
                key={item.id}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          文章
        </div>

        {/* 其他按钮 */}
        {navArr.map(item => (
          <NavLink
            className={({ isActive }) => (isActive ? s.navActive : s.navBtn)}
            to={item.to}
            key={item.id}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default connect(
  (state: storeState) => ({
    navShow: state.navShow
  }),
  { setNavShow }
)(Nav);
