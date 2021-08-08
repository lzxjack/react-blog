import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { db } from '../../../utils/cloudBase';
import { defaultCommentAvatar, pushplusToken, pushplusUrl } from '../../../utils/constant';
import axios from 'axios';
import marked from 'marked';
import useMarkdown from '../../../hooks/useMarkdown';
import { getComments, getCommentsReply, getMsgs, getMsgsReply } from '../../../redux/actions';
import { message } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.css';

const Comment = props => {
    useMarkdown();
    const [Id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [content, setContent] = useState('');
    const [avatar, setAvatar] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [showReply, setShowReply] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [isReply, setIsReply] = useState(false);
    // const [pushTitleText, setPushTitleText] = useState('');
    const [isMsg, setIsMsg] = useState(false);
    // 获取URL信息
    useEffect(() => {
        if (!window.location.search) {
            setIsMsg(true);
            // setPushTitleText('留言板');
            return;
        }
    }, []);
    const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const getCommentsFromDB = () => {
        db.collection('allComments')
            .get()
            .then(res => {
                const comments = res.data
                    .filter(item => item.postTitle && !item.replyId)
                    .sort((a, b) => b.date - a.date);
                const commentsReply = res.data.filter(item => item.postTitle && item.replyId);
                const msgs = res.data
                    .filter(item => !item.postTitle && !item.replyId)
                    .sort((a, b) => b.date - a.date);
                const msgsReply = res.data.filter(item => !item.postTitle && item.replyId);
                props.getComments(comments);
                props.getCommentsReply(commentsReply);
                props.getMsgs(msgs);
                props.getMsgsReply(msgsReply);
            });
    };
    // 发布留言
    const sendMsg = () => {
        if (!name) {
            message.info('请输入昵称！');
            return;
        }
        if (!email) {
            message.info('请输入邮箱地址！');
            return;
        }
        if (!regEmail.test(email)) {
            message.info('请输入正确的邮箱地址！');
            return;
        }
        if (!content) {
            message.info('请输入留言内容！');
            return;
        }
        db.collection('allComments')
            .add({
                name,
                email,
                link,
                content,
                date: new Date().getTime(),
                avatar,
                postTitle: '',
                replyId: '',
            })
            .then(() => {
                message.success('发布留言成功！');
                getCommentsFromDB();
                const title = isMsg ? '留言板有新留言啦!' : '';
                axios({
                    url: pushplusUrl,
                    method: 'get',
                    params: {
                        token: pushplusToken,
                        title,
                        content,
                    },
                })
                    .then(res => {
                        console.log(res);
                        setContent('');
                    })
                    .catch(err => console.error(err));
            });
    };
    // 发布回复
    const sendReply = () => {
        if (!name) {
            message.info('请输入昵称！');
            return;
        }
        if (!email) {
            message.info('请输入邮箱地址！');
            return;
        }
        if (!regEmail.test(email)) {
            message.info('请输入正确的邮箱地址！');
            return;
        }
        if (!replyContent) {
            message.info('请输入回复内容！');
            return;
        }
        db.collection('allComments')
            .add({
                name,
                email,
                link,
                content: replyContent,
                date: new Date().getTime(),
                avatar,
                postTitle: '',
                replyId: Id,
            })
            .then(() => {
                getCommentsFromDB();
                setShowReply(false);
                setReplyContent('');
                message.success('回复成功！');
            });
    };
    const reg_qq = /[1-9][0-9]{3,11}/;
    // 获取QQ头像和QQ邮箱
    const getQQAvatar = () => {
        if (!reg_qq.test(name)) return;
        const avatarUrl = `http://q1.qlogo.cn/g?b=qq&nk=${name}&s=640`;
        const QQEmail = `${name}@qq.com`;
        setEmail(QQEmail);
        setAvatar(avatarUrl);
        setName('');
    };
    // 打开留言预览框
    const openMsgPreview = () => {
        if (!content) {
            message.info('请写点什么再预览~');
            return;
        }
        setShowPreview(true);
    };
    // 打开回复的预览框
    const openReplyPreview = () => {
        if (!replyContent) {
            message.info('请写点什么再预览~');
            return;
        }
        setIsReply(true);
        setShowPreview(true);
    };
    return (
        <div className="Comment-box">
            {/* 预览框：固定定位 */}
            <div className={showPreview ? 'preview-box preview-in' : 'preview-box preview-out'}>
                <div
                    className="preview-content markdownStyle commentMarkDown"
                    dangerouslySetInnerHTML={{
                        __html: marked(isReply ? replyContent : content).replace(
                            /<pre>/g,
                            "<pre id='hljs'>"
                        ),
                    }}
                ></div>
                <div
                    className="close-preview-btn common-hover"
                    onClick={() => {
                        setShowPreview(false);
                        setIsReply(false);
                    }}
                >
                    关闭
                </div>
            </div>
            {/* 预览框的mask */}
            <div className={showPreview ? 'comment-mask' : 'comment-mask comment-mask-none'}></div>
            {/* 回复框的mask */}
            <div
                className={
                    showReply
                        ? 'comment-mask reply-mask'
                        : 'comment-mask reply-mask comment-mask-none'
                }
            ></div>
            {/* 回复框：固定定位 */}
            <div
                className={showReply ? 'comment-reply-box reply-in' : 'comment-reply-box reply-out'}
            >
                <div className="comment-edit-box" className="comment-edit-box">
                    <div className="comment-edit-avatar-box">
                        <img
                            src={avatar === '' ? defaultCommentAvatar : avatar}
                            alt="avatar"
                            className="comment-edit-avatar"
                        />
                    </div>
                    <div className="comment-edit-input-box">
                        <div className="comment-input-box">
                            <div className="comment-input-info flex2">
                                <div className="comment-input-key common-hover">昵称</div>
                                <input
                                    type="text"
                                    className="comment-input-value"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    onKeyUp={e => {
                                        if (e.keyCode === 13) getQQAvatar();
                                    }}
                                    placeholder="必填"
                                    onBlur={getQQAvatar}
                                />
                            </div>
                            <div className="comment-input-info flex3">
                                <div className="comment-input-key common-hover">邮箱</div>
                                <input
                                    type="text"
                                    className="comment-input-value"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="必填"
                                />
                            </div>
                            <div className="comment-input-info flex3">
                                <div className="comment-input-key common-hover">网址</div>
                                <input
                                    type="text"
                                    className="comment-input-value"
                                    value={link}
                                    onChange={e => setLink(e.target.value)}
                                    placeholder="选填"
                                />
                            </div>
                        </div>
                        <div className="comment-textarea-box">
                            <textarea
                                className="comment-textarea"
                                value={replyContent}
                                onChange={e => setReplyContent(e.target.value)}
                                placeholder="写点什么吗？&#10;可以在「昵称」处填写QQ，自动获取「头像」和「邮箱」~"
                            />
                        </div>

                        <div className="comment-btns">
                            <div
                                className="comment-cancel-btn common-hover"
                                onClick={() => setShowReply(false)}
                            >
                                取消
                            </div>
                            <div
                                className="comment-preview-btn common-hover"
                                onClick={openReplyPreview}
                            >
                                预览
                            </div>
                            <div className="comment-send-btn common-hover" onClick={sendReply}>
                                发送
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 留言编辑框 */}
            <div className="comment-edit-box">
                <div className="comment-edit-avatar-box">
                    <img
                        src={avatar === '' ? defaultCommentAvatar : avatar}
                        alt="avatar"
                        className="comment-edit-avatar"
                    />
                </div>
                <div className="comment-edit-input-box">
                    <div className="comment-input-box">
                        <div className="comment-input-info flex2">
                            <div className="comment-input-key common-hover">昵称</div>
                            <input
                                type="text"
                                className="comment-input-value"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                onKeyUp={e => {
                                    if (e.keyCode === 13) getQQAvatar();
                                }}
                                placeholder="必填"
                                onBlur={getQQAvatar}
                            />
                        </div>
                        <div className="comment-input-info flex3">
                            <div className="comment-input-key common-hover">邮箱</div>
                            <input
                                type="text"
                                className="comment-input-value"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="必填"
                            />
                        </div>
                        <div className="comment-input-info flex3">
                            <div className="comment-input-key common-hover">网址</div>
                            <input
                                type="text"
                                className="comment-input-value"
                                value={link}
                                onChange={e => setLink(e.target.value)}
                                placeholder="选填"
                            />
                        </div>
                    </div>
                    <div className="comment-textarea-box">
                        <textarea
                            className="comment-textarea"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder="写点什么吗？&#10;可以在「昵称」处填写QQ，自动获取「头像」和「邮箱」~"
                        />
                    </div>

                    <div className="comment-btns">
                        <div
                            className="comment-preview-btn common-hover"
                            // onClick={() => setShowPreview(true)}
                            onClick={openMsgPreview}
                        >
                            预览
                        </div>
                        <div className="comment-send-btn common-hover" onClick={sendMsg}>
                            发送
                        </div>
                    </div>
                </div>
            </div>
            {/* 留言列表区 */}
            <div className="comment-show-box">
                {props.msgs.map(item => (
                    <div className="comment-show-item" key={item._id}>
                        {/* 头像框 */}
                        <div className="comment-show-avatar-box">
                            <img src={item.avatar} alt="avatar" className="comment-edit-avatar" />
                        </div>
                        {/* 回复框显示按钮 */}
                        <div
                            className="comment-show-reply common-hover"
                            onClick={() => {
                                setShowReply(true);
                                setId(item._id);
                            }}
                        >
                            <MessageOutlined />
                        </div>
                        {/* 内容区 */}
                        <div className="comment-show-content-box">
                            <div className="comment-show-usrInfo">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="comment-show-name common-hover"
                                >
                                    {item.name}
                                </a>
                                <span className="comment-show-date">
                                    {moment(item.date).format('LLL')}
                                </span>
                            </div>
                            <div
                                className="comment-show-content markdownStyle commentMarkDown"
                                dangerouslySetInnerHTML={{
                                    __html: marked(item.content).replace(
                                        /<pre>/g,
                                        "<pre id='hljs'>"
                                    ),
                                }}
                            ></div>
                            {/* 回复的消息 */}
                            <div className="comment-show-reply-box">
                                {props.msgsReply
                                    .filter(k => k.replyId === item._id)
                                    .map(replyItem => (
                                        <div className="comment-show-item" key={replyItem._id}>
                                            {/* 头像框 */}
                                            <div className="comment-show-avatar-box">
                                                <img
                                                    src={replyItem.avatar}
                                                    alt="avatar"
                                                    className="comment-edit-avatar"
                                                />
                                            </div>
                                            {/* 内容区 */}
                                            <div className="comment-show-content-box">
                                                <div className="comment-show-usrInfo">
                                                    <a
                                                        href={replyItem.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="comment-show-name common-hover"
                                                    >
                                                        {replyItem.name}
                                                    </a>
                                                    <span className="comment-show-date">
                                                        {moment(replyItem.date).format('LLL')}
                                                    </span>
                                                </div>
                                                <div
                                                    className="comment-show-content markdownStyle commentMarkDown"
                                                    dangerouslySetInnerHTML={{
                                                        __html: marked(replyItem.content).replace(
                                                            /<pre>/g,
                                                            "<pre id='hljs'>"
                                                        ),
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default connect(
    state => ({
        msgs: state.msgs,
        msgsReply: state.msgsReply,
    }),
    { getComments, getCommentsReply, getMsgs, getMsgsReply }
)(Comment);
