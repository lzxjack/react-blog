import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import Divider from '../Post/Divider';
import Comment from '../../components/Blog/Content/Comment';
import { myName, myLink, myAvatar, myDescr } from '../../utils/constant';
import { setNavShow } from '../../redux/actions';
import './index.css';

const Msg = props => {
    // 返回顶部
    useEffect(() => {
        window.scrollTo(0, 0);
        props.setNavShow(true);
    }, [props]);
    const [timeText, setTimeText] = useState('');
    useEffect(() => {
        const hour = new Date().getHours();
        const timeText =
            hour < 6
                ? '凌晨好'
                : hour < 9
                ? '早上好'
                : hour < 11
                ? '上午好'
                : hour < 13
                ? '中午好'
                : hour < 17
                ? '下午好'
                : hour < 19
                ? '傍晚好'
                : '晚上好';
        setTimeText(timeText);
    }, []);
    return (
        <>
            <PageTitle title="留言板" />
            <div className="standard-page-box">
                <div className="msg-info animated bounceInLeft">
                    <div>
                        {timeText}，我叫<span className="green">飞鸟</span>,
                    </div>
                    <div>欢迎来到我的博客!</div>
                    <div>可以在这里留言、吐槽，</div>
                    <div className="green">交换友链。</div>
                </div>
                <div className="my-link">本站链接：</div>
                <div>
                    <span className="link-key">name:</span>
                    <span className="link-value">{myName}</span>
                </div>
                <div>
                    <span className="link-key">link:</span>
                    <span className="link-value">{myLink}</span>
                </div>
                <div>
                    <span className="link-key">avatar:</span>
                    <span className="link-value">{myAvatar}</span>
                </div>
                <div>
                    <span className="link-key">descr:</span>
                    <span className="link-value">{myDescr}</span>
                </div>
                <Divider />
                <Comment isMsg={true} postTitle="" />
            </div>
        </>
    );
};

export default connect(() => ({}), { setNavShow })(Msg);
