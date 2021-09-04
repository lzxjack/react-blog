import { withRouter } from 'react-router-dom';
import { avatarUrl } from '../../../utils/constant';
import './index.css';

const NavMobile = props => {
    const navArr = [
        { name: '主页', to: '/' },
        { name: '文章', to: '/articles' },
        { name: '分类', to: '/classes' },
        { name: '标签', to: '/tags' },
        { name: '图库', to: '/gallery' },
        { name: '说说', to: '/say' },
        { name: '留言', to: '/msg' },
        { name: '友链', to: '/link' },
        { name: '作品', to: '/show' },
        { name: '建站', to: '/log' },
        { name: '关于', to: '/about' },
    ];
    const turnToPage = to => {
        props.history.push(to);
        props.setDrawerShow(false);
    };
    const { pathname } = props.history.location;
    return (
        <>
            <div
                className={
                    props.drawerShow ? 'nav-mobile-mask nav-mobile-mask-in' : 'nav-mobile-mask'
                }
                onClick={() => props.setDrawerShow(false)}
            ></div>
            <div
                className={
                    props.drawerShow
                        ? 'nav-mobile theme-color nav-mobile-in'
                        : 'nav-mobile theme-color'
                }
            >
                <div className="nav-mobile-avatar-box">
                    <img src={avatarUrl} alt="avatar" className="nav-mobile-avatar" />
                </div>
                <div className="nav-nobile-bottom">飞鸟小站</div>
                {navArr.map((item, index) => (
                    <div
                        className={
                            pathname === item.to
                                ? 'nav-mobile-item nav-mobile-active'
                                : 'nav-mobile-item'
                        }
                        key={index}
                        onClick={() => turnToPage(item.to)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </>
    );
};

export default withRouter(NavMobile);
