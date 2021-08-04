import Footer from './Footer';
import Content from './Content';
import Nav from './Nav';
// import useScript from '../../hooks/useScript';
// import { wowUrl, wowConfigUrl } from '../../utils/constant';
import './index.css';

const Blog = () => {
    // useScript(wowUrl, wowConfigUrl);
    return (
        <div className="Blog-box">
            <Nav />
            <Content />
            <Footer />
        </div>
    );
};

export default Blog;
