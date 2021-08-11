import PageTitle from '../../components/Blog/Content/PageTitle';
import Divider from '../Post/Divider';
import Comment from '../../components/Blog/Content/Comment';
import './index.css';

const Msg = () => {
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
                <Comment isMsg={true} postTitle="" />
            </div>
        </>
    );
};

export default Msg;
