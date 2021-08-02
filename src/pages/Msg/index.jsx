import PageTitle from '../../components/Blog/Content/PageTitle';
// import Comments from '../Article/Comments';
import Divider from '../Article/Divider';
// import useScript from '../../hooks/useScript';
// import { twikooUrl, twikooConfigUrl } from '../../utils/constant';
import './index.css';

const Msg = () => {
    // useScript(twikooUrl, twikooConfigUrl);
    return (
        <>
            <PageTitle title="留言板" />
            <div className="standard-page-box">
                <div className="msg-info animated bounceInLeft">
                    <span>欢迎来到我的博客!</span>
                    <span>可以在这里留言、吐槽，</span>
                    <span>交换友链。</span>
                </div>
                <Divider />
                {/* <Comments /> */}
            </div>
        </>
    );
};

export default Msg;
