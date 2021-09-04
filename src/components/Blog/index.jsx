import { useState } from 'react';
import Footer from './Footer';
import Content from './Content';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { connect } from 'react-redux';
import { setNavShow } from '../../redux/actions';
import { BackTop } from 'antd';
import { VerticalAlignTopOutlined, MenuOutlined } from '@ant-design/icons';
import { blogBackGroundImgs, imgNum } from '../../utils/constant';
import './index.css';

const Blog = props => {
    const [drawerShow, setDrawerShow] = useState(false);
    return (
        <div className="Blog-box" style={{ backgroundImage: `url(${blogBackGroundImgs[imgNum]})` }}>
            {/* 正常文档流 */}
            <Nav />
            <Content />
            <Footer />
            {/* 固定定位 */}
            <BackTop
                duration={700}
                visibilityHeight={300}
                onClick={() => props.setNavShow(true)}
                className="BackTop"
            >
                <div className="back-top-btn theme-color common-hover">
                    <VerticalAlignTopOutlined />
                </div>
            </BackTop>
            {/* 全局抽屉 */}
            <NavMobile drawerShow={drawerShow} setDrawerShow={setDrawerShow} />
            {/* 固定定位按钮 */}
            <div className="nav-btn-mobile common-hover" onClick={() => setDrawerShow(true)}>
                <MenuOutlined />
            </div>
        </div>
    );
};

export default connect(() => ({}), { setNavShow })(Blog);
