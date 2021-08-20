import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { blogAdminUrl } from '../../../utils/constant';
import { setNavShow } from '../../../redux/actions';
// import DarkBtn from './DarkBtn';
import './index.css';

const Nav = props => {
    useEffect(() => {
        document.body.onmousewheel = event => {
            event = event || window.event;
            if (window.event.wheelDeltaY > 0) {
                props.setNavShow(true);
            } else {
                props.setNavShow(false);
            }
        };
    }, [props]);
    return (
        <nav id={props.navShow ? '' : 'hiddenNav'}>
            <div className="nav-content">
                <NavLink className="navlink home-btn common-hover" to="/">
                    <HomeOutlined />
                </NavLink>
                {/* <div className="dark-btn common-hover">
                    <DarkBtn />
                </div> */}
                <a
                    className="admin-btn common-hover"
                    href={blogAdminUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <SettingOutlined />
                </a>

                {/* <NavLink className="navlink nav-btn common-hover" to="/articles">
                    文章
                </NavLink> */}
                <div className="navlink nav-btn common-hover articles-btn">
                    <div className="articels-second">
                        <NavLink className="articels-second-item common-hover" to="/articles">
                            找文章
                        </NavLink>
                        <NavLink className="articels-second-item common-hover" to="/classes">
                            分类
                        </NavLink>
                        <NavLink className="articels-second-item common-hover" to="/tags">
                            标签
                        </NavLink>
                    </div>
                    文章
                </div>
                <NavLink className="navlink nav-btn common-hover" to="/gallery">
                    图库
                </NavLink>
                <NavLink className="navlink nav-btn common-hover" to="/say">
                    说说
                </NavLink>
                <NavLink className="navlink nav-btn common-hover" to="/msg">
                    留言
                </NavLink>
                <NavLink className="navlink nav-btn common-hover" to="/link">
                    友链
                </NavLink>
                <NavLink className="navlink nav-btn common-hover" to="/show">
                    作品
                </NavLink>
                <NavLink className="navlink nav-btn common-hover" to="/log">
                    建站
                </NavLink>
                <NavLink className="navlink nav-btn common-hover margin-0" to="/about">
                    关于
                </NavLink>
            </div>
        </nav>
    );
};

export default connect(
    state => ({
        navShow: state.navShow,
    }),
    { setNavShow }
)(Nav);
