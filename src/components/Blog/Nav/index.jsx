import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { blogAdminUrl } from '../../../utils/constant';
import { setNavShow } from '../../../redux/actions';
import DarkBtn from './DarkBtn';
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
                <NavLink className="navlink" to="/home">
                    <div className="home-btn common-hover">
                        <HomeOutlined />
                    </div>
                </NavLink>
                <div className="dark-btn common-hover">
                    <DarkBtn />
                </div>
                <a
                    className="admin-btn common-hover"
                    href={blogAdminUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <SettingOutlined />
                </a>

                <NavLink className="navlink" to="/articles">
                    <div className="nav-btn common-hover">文章</div>
                </NavLink>
                <NavLink className="navlink" to="/gallery">
                    <div className="nav-btn common-hover">图库</div>
                </NavLink>
                <NavLink className="navlink" to="/say">
                    <div className="nav-btn common-hover">说说</div>
                </NavLink>
                <NavLink className="navlink" to="/msg">
                    <div className="nav-btn common-hover">留言</div>
                </NavLink>
                <NavLink className="navlink" to="/link">
                    <div className="nav-btn common-hover">友链</div>
                </NavLink>
                <NavLink className="navlink" to="/show">
                    <div className="nav-btn common-hover">作品</div>
                </NavLink>
                <NavLink className="navlink" to="/log">
                    <div className="nav-btn common-hover">建站</div>
                </NavLink>
                <NavLink className="navlink" to="/about">
                    <div className="nav-btn common-hover margin-0">关于</div>
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
