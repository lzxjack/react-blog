import Footer from './Footer';
import Content from './Content';
import Nav from './Nav';
import { connect } from 'react-redux';
import { setNavShow } from '../../redux/actions';
import { BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { blogBackGroundImgs, imgNum } from '../../utils/constant';
import './index.css';

const Blog = props => {
    return (
        <div className="Blog-box" style={{ backgroundImage: `url(${blogBackGroundImgs[imgNum]})` }}>
            <Nav />
            <Content />
            <Footer />
            <BackTop
                duration={700}
                visibilityHeight={300}
                onClick={() => props.setNavShow(true)}
                className="BackTop"
            >
                <div className="back-top-btn common-hover">
                    <VerticalAlignTopOutlined />
                </div>
            </BackTop>
        </div>
    );
};

export default connect(() => ({}), { setNavShow })(Blog);
