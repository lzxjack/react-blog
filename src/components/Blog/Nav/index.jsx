import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { blogAdminUrl } from '../../../utils/constant';
import { setNavShow } from '../../../redux/actions';
import './index.css';

const Nav = props => {
    useEffect(() => {
        document.body.onmousewheel = event => {
            event = event || window.event;
            props.setNavShow(window.event.wheelDeltaY > 0);
        };
    }, [props]);
    const navArr = [
        { id: 0, name: '图库', to: '/gallery' },
        { id: 1, name: '说说', to: '/say' },
        { id: 2, name: '留言', to: '/msg' },
        { id: 3, name: '友链', to: '/link' },
        { id: 4, name: '作品', to: '/show' },
        { id: 5, name: '建站', to: '/log' },
        { id: 6, name: '关于', to: '/about' },
    ];
    const lenNav = navArr.length;
    const secondNavArr = [
        { id: 0, name: '找文章', to: '/articles' },
        { id: 1, name: '分类', to: '/classes' },
        { id: 2, name: '标签', to: '/tags' },
    ];
    return (
        <>
            <nav className="nav-pc theme-color" id={props.navShow ? '' : 'hiddenNav'}>
                <div className="nav-content">
                    <div className="home-btn common-hover" onClick={() => props.history.push('/')}>
                        <HomeOutlined />
                    </div>
                    <a
                        className="admin-btn common-hover"
                        href={blogAdminUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SettingOutlined />
                    </a>

                    <div className="nav-btn common-hover articles-btn">
                        <div className="articels-second">
                            {secondNavArr.map(item => (
                                <NavLink
                                    className="articels-second-item theme-color common-hover"
                                    activeClassName="theme-color-btn"
                                    to={item.to}
                                    key={item.id}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                        文章
                    </div>
                    {navArr.map((item, index) => (
                        <NavLink
                            className={
                                index === lenNav - 1
                                    ? 'nav-btn common-hover margin-0'
                                    : 'nav-btn common-hover'
                            }
                            activeClassName="theme-color-btn"
                            to={item.to}
                            key={item.id}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default withRouter(
    connect(
        state => ({
            navShow: state.navShow,
        }),
        { setNavShow }
    )(Nav)
);
