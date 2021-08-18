import Footer from './Footer';
import Content from './Content';
import Nav from './Nav';
import { imgNum } from '../../utils/constant';
import './index.css';

const Blog = () => {
    const imgs = [
        'https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210818111500.jpg',
        'https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210818111501.png',
        'https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210818111502.jpg',
    ];
    return (
        <div className="Blog-box" style={{ backgroundImage: `url(${imgs[imgNum]})` }}>
            <Nav />
            <Content />
            <Footer />
        </div>
    );
};

export default Blog;
