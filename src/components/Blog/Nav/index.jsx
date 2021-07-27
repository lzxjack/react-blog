import { NavLink } from 'react-router-dom';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { blogAdminUrl } from '../../../utils/constant';
import DarkBtn from './DarkBtn';
import './index.css';

const Nav = () => (
    <nav>
        <div className="nav-content">
            <NavLink className="navlink" to="/home">
                <div className="home-btn">
                    <HomeOutlined />
                </div>
            </NavLink>
            <div className="dark-btn">
                <DarkBtn />
            </div>
            <a className="admin-btn" href={blogAdminUrl} target="_blank" rel="noreferrer">
                <SettingOutlined />
            </a>

            <NavLink className="navlink" to="/articles">
                <div className="nav-btn">文章</div>
            </NavLink>
            <NavLink className="navlink" to="/gallery">
                <div className="nav-btn">图库</div>
            </NavLink>
            <NavLink className="navlink" to="/say">
                <div className="nav-btn">说说</div>
            </NavLink>
            <NavLink className="navlink" to="/msg">
                <div className="nav-btn">留言</div>
            </NavLink>
            <NavLink className="navlink" to="/link">
                <div className="nav-btn">友链</div>
            </NavLink>
            <NavLink className="navlink" to="/show">
                <div className="nav-btn">作品</div>
            </NavLink>
            <NavLink className="navlink" to="/log">
                <div className="nav-btn">建站</div>
            </NavLink>
            <NavLink className="navlink" to="/about">
                <div className="nav-btn margin-0">关于</div>
            </NavLink>
        </div>
    </nav>
);

export default Nav;
