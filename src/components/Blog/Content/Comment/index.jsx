import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { db, auth } from '../../../../utils/cloudBase';
import {
    defaultCommentAvatar,
    defaultCommentAvatarArr,
    adminUid,
    adminName,
    adminQQ,
    adminQQEmail,
    adminUrl,
    adminUrlCheck,
    avatarUrl,
    APIUrl,
    emojiPeople,
    emojiNature,
    emojiObj,
    emojiPlace,
    emojiSymbol,
} from '../../../../utils/constant';
import { getRandomNum } from '../../../../utils/functions';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import { getComments, getCommentsReply, getMsgs, getMsgsReply } from '../../../../redux/actions';
import { message, Popover, Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.css';

const Comment = props => {
    // 配置highlight
    hljs.configure({
        tabReplace: '',
        classPrefix: 'hljs-',
        languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript', 'Markdown'],
    });
    // 配置marked
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: code => hljs.highlightAuto(code).value,
        gfm: true, //默认为true。 允许 Git Hub标准的markdown.
        tables: true, //默认为true。 允许支持表格语法。该选项要求 gfm 为true。
        breaks: true, //默认为false。 允许回车换行。该选项要求 gfm 为true。
    });

    const [replyId, setReplyId] = useState('');
    const [replyEmail, setReplyEmail] = useState('');
    const [owner, setOwner] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [content, setContent] = useState('');
    const [avatar, setAvatar] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [showReply, setShowReply] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [isReply, setIsReply] = useState(false);
    const [adminBox, setAdminBox] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPwd, setAdminPwd] = useState('');

    const avatarArrLen = defaultCommentAvatarArr.length;

    // 返回是否是管理员
    const adminLogined = () => {
        if (!auth.hasLoginState()) return false;
        if (auth.currentUser.uid === adminUid) return true;
        return false;
    };

    // 从localStorage获取用户评论信息
    useEffect(() => {
        if (adminLogined()) {
            // 管理员已登录
            setName(adminName);
            setEmail(adminQQEmail);
            setLink(adminUrl);
            setAvatar(avatarUrl);
            return;
        }
        const uname = localStorage.getItem('name');
        const uemail = localStorage.getItem('email');
        const ulink = localStorage.getItem('link');
        const uavatar = localStorage.getItem('avatar');
        uname && uname !== adminName && setName(uname);
        uemail && uemail !== adminQQEmail && setEmail(uemail);
        ulink && ulink.indexOf(adminUrlCheck) === -1 && setLink(ulink);
        uavatar && setAvatar(uavatar);
    }, []);
    const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // 从数据库获取评论
    const getCommentsFromDB = () => {
        db.collection('allComments')
            .limit(1000)
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
        if (!adminLogined()) {
            if (
                name === adminQQ ||
                name === adminName ||
                email === adminQQEmail ||
                link.indexOf(adminUrlCheck) !== -1
            ) {
                message.warning('未登录不可以使用管理员账户哦~');
                return;
            }
        }
        // 获取随机头像
        const Avatar = avatar ? avatar : defaultCommentAvatarArr[getRandomNum(0, avatarArrLen - 1)];
        // 加协议
        let linkUrl = link;
        if (linkUrl) {
            const webProtocol = ['http://', 'https://'];
            if (link.indexOf(webProtocol[0]) < 0 && link.indexOf(webProtocol[1]) < 0) {
                linkUrl = `http://${linkUrl}`;
            }
        }
        db.collection('allComments')
            .add({
                name,
                email,
                link: linkUrl,
                content,
                date: new Date().getTime(),
                avatar: Avatar,
                postTitle: props.postTitle,
                replyId: '',
            })
            .then(() => {
                setContent('');
                getCommentsFromDB();
                sendNewEmail();
            });
    };
    // 提醒站长有新评论了000
    const sendNewEmail = () => {
        axios({
            url: `${APIUrl}/email`,
            method: 'post',
            params: {
                flag: 0,
                name,
                search: props.postTitle,
                content,
                title: props.title,
            },
            withCredentials: true,
        })
            .then(res => res.status === 200 && message.success('发布留言成功！'))
            .catch(err => console.error(err));
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
        if (!adminLogined()) {
            if (
                name === adminQQ ||
                name === adminName ||
                email === adminQQEmail ||
                link.indexOf(adminUrlCheck) !== -1
            ) {
                message.warning('未登录不可以使用管理员账户哦~');
                return;
            }
        }
        const Avatar = avatar ? avatar : defaultCommentAvatarArr[getRandomNum(0, avatarArrLen - 1)];
        // 加协议
        let linkUrl = link;
        if (linkUrl) {
            const webProtocol = ['http://', 'https://'];
            if (link.indexOf(webProtocol[0]) < 0 && link.indexOf(webProtocol[1]) < 0) {
                linkUrl = `http://${linkUrl}`;
            }
        }
        db.collection('allComments')
            .add({
                name,
                email,
                link: linkUrl,
                content: replyContent,
                date: new Date().getTime(),
                avatar: Avatar,
                postTitle: props.postTitle,
                replyId,
            })
            .then(() => {
                getCommentsFromDB();
                setShowReply(false);
                setReplyContent('');
                // 回复者和被回复的对象不是同一个人，才发送邮件提醒被回复对象
                if (email !== replyEmail) {
                    sendReplyEmail();
                } else {
                    message.success('回复成功!');
                }
                // 通知站长
                informAdminByEmail();
            });
    };
    // 提醒管理员，有评论收到回复111
    const informAdminByEmail = () => {
        axios({
            url: `${APIUrl}/email`,
            method: 'post',
            params: {
                flag: 1,
                name,
                owner,
                search: props.postTitle,
                content: replyContent,
                title: props.title,
            },
            withCredentials: true,
        })
            .then(res => res.status === 200 && message.success('已通知站长！'))
            .catch(err => console.error(err));
    };
    // 提醒原评论人有人回复222
    const sendReplyEmail = () => {
        axios({
            url: `${APIUrl}/email`,
            method: 'post',
            params: {
                flag: 2,
                name,
                owner,
                email: replyEmail,
                search: props.postTitle,
                content: replyContent,
                title: props.title,
            },
            withCredentials: true,
        })
            .then(res => res.status === 200 && message.success('回复成功'))
            .catch(err => console.error(err));
    };
    const reg_qq = /[1-9][0-9]{3,11}/;
    // 获取QQ头像和QQ邮箱
    const getQQAvatar = () => {
        if (name === 'admin') {
            setName('');
            setAdminBox(true);
            return;
        }
        if (!adminLogined() && name === adminQQ) {
            message.warning('未登录不可以使用管理员账户哦~');
            return;
        }
        if (!reg_qq.test(name)) {
            localStorage.setItem('name', name);
            return;
        }
        if (name === adminQQ) {
            setAvatar(avatarUrl);
            setName(adminName);
            setEmail(adminQQEmail);
            setLink(adminUrl);
        } else {
            const avatarUrl = `https://q1.qlogo.cn/g?b=qq&nk=${name}&s=640`;
            const QQEmail = `${name}@qq.com`;
            setEmail(QQEmail);
            setAvatar(avatarUrl);
            localStorage.setItem('email', QQEmail);
            localStorage.setItem('avatar', avatarUrl);
            setName('');
        }
    };
    // 存邮箱到本地
    const saveEmail = () => {
        localStorage.setItem('email', email);
    };
    // 存个人网址到本地
    const saveLink = () => {
        localStorage.setItem('link', link);
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
    // 打开评论回复框
    const openReplyBox = ID => {
        setShowReply(true);
        setReplyId(ID);
        const Eamil = (props.postTitle ? props.comments : props.msgs).filter(k => k._id === ID)[0]
            .email;
        setReplyEmail(Eamil);
        const owner = (props.postTitle ? props.comments : props.msgs).filter(k => k._id === ID)[0]
            .name;
        setOwner(owner);
    };
    // 关闭评论回复框
    const closeReplyBox = () => {
        setShowReply(false);
        setReplyId('');
        setReplyEmail('');
        setOwner('');
    };
    // 取消管理员登录
    const cancelAdminLogin = () => {
        setAdminBox(false);
        setAdminEmail('');
        setAdminPwd('');
    };
    // 管理员登录
    const adminLogin = () => {
        auth.signInWithEmailAndPassword(adminEmail, adminPwd)
            .then(() => {
                if (adminLogined()) {
                    message.success('登陆成功！');
                    setName(adminName);
                    setEmail(adminQQEmail);
                    setLink(adminUrl);
                    setAvatar(avatarUrl);
                    setAdminBox(false);
                } else {
                    message.warning('登陆失败！');
                }
            })
            .catch(() => {
                message.warning('登陆失败！');
            });
    };
    return (
        <div className="Comment-box">
            {/* 预览框：固定定位 */}
            <div
                className={
                    showPreview
                        ? 'preview-box theme-color preview-in'
                        : 'preview-box theme-color preview-out'
                }
            >
                <div
                    className="close-preview-btn theme-color-1 common-hover"
                    onClick={() => {
                        setShowPreview(false);
                        setIsReply(false);
                    }}
                >
                    ×
                </div>
                <div
                    className="preview-content markdownStyle commentMarkDown"
                    dangerouslySetInnerHTML={{
                        __html: marked(isReply ? replyContent : content).replace(
                            /<pre>/g,
                            "<pre id='hljs'>"
                        ),
                    }}
                ></div>
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
                className={
                    showReply
                        ? 'comment-reply-box theme-color reply-in'
                        : 'comment-reply-box theme-color reply-out'
                }
            >
                <div className="reply-who">
                    回复给「<span className="theme-color-font">{owner}</span>」：
                </div>
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
                            <div className="comment-input-info theme-color-1 flex2">
                                <div className="comment-input-key theme-color-2 common-hover">
                                    昵称
                                </div>
                                <input
                                    type="text"
                                    className="comment-input-value"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    onKeyUp={e => {
                                        if (e.keyCode === 13) getQQAvatar();
                                    }}
                                    placeholder="试试QQ号~"
                                    onBlur={getQQAvatar}
                                />
                            </div>
                            <div className="comment-input-info theme-color-1 flex3">
                                <div className="comment-input-key theme-color-2 common-hover">
                                    邮箱
                                </div>
                                <input
                                    type="text"
                                    className="comment-input-value"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="必填"
                                />
                            </div>
                            <div className="comment-input-info theme-color-1 flex3">
                                <div className="comment-input-key theme-color-2 common-hover">
                                    网址
                                </div>
                                <input
                                    type="text"
                                    className="comment-input-value"
                                    value={link}
                                    onChange={e => setLink(e.target.value)}
                                    placeholder="选填"
                                />
                            </div>
                        </div>
                        <div className="comment-textarea-box theme-color-1">
                            <textarea
                                className="comment-textarea theme-color-1"
                                value={replyContent}
                                onChange={e => setReplyContent(e.target.value)}
                                placeholder="写点什么吗？&#10;可以在「昵称」处填写QQ，自动获取「头像」和「邮箱」~"
                            />
                        </div>

                        <div className="comment-btns">
                            <Popover
                                className="emojiBtn theme-color-2 common-hover"
                                theme-color-2
                                common-hover
                                overlayClassName="emojiContent"
                                color="rgb(42 42 50)"
                                placement="bottom"
                                content={emojiPeople}
                                trigger="click"
                                getPopupContainer={() =>
                                    document.querySelector('.comment-reply-box')
                                }
                            >
                                <Button>😄</Button>
                            </Popover>
                            <Popover
                                className="emojiBtn theme-color-2 common-hover emoji2"
                                overlayClassName="emojiContent"
                                color="rgb(42 42 50)"
                                placement="bottom"
                                content={emojiNature}
                                trigger="click"
                                getPopupContainer={() =>
                                    document.querySelector('.comment-reply-box')
                                }
                            >
                                <Button>☀️</Button>
                            </Popover>
                            <Popover
                                className="emojiBtn theme-color-2 common-hover emoji3"
                                overlayClassName="emojiContent"
                                color="rgb(42 42 50)"
                                placement="bottom"
                                content={emojiObj}
                                trigger="click"
                                getPopupContainer={() =>
                                    document.querySelector('.comment-reply-box')
                                }
                            >
                                <Button>🏀</Button>
                            </Popover>
                            <Popover
                                className="emojiBtn theme-color-2 common-hover emoji4"
                                overlayClassName="emojiContent"
                                color="rgb(42 42 50)"
                                placement="bottom"
                                content={emojiPlace}
                                trigger="click"
                                getPopupContainer={() =>
                                    document.querySelector('.comment-reply-box')
                                }
                            >
                                <Button>⛪</Button>
                            </Popover>
                            <Popover
                                className="emojiBtn theme-color-2 common-hover emoji5"
                                overlayClassName="emojiContent"
                                color="rgb(42 42 50)"
                                placement="bottom"
                                content={emojiSymbol}
                                trigger="click"
                                getPopupContainer={() =>
                                    document.querySelector('.comment-reply-box')
                                }
                            >
                                <Button>🆗</Button>
                            </Popover>
                            <div
                                className="comment-cancel-btn theme-color-2 common-hover"
                                onClick={closeReplyBox}
                            >
                                取消
                            </div>
                            <div
                                className="comment-preview-btn theme-color-2 common-hover"
                                onClick={openReplyPreview}
                            >
                                预览
                            </div>
                            <div
                                className="comment-send-btn theme-color-2 common-hover"
                                onClick={sendReply}
                            >
                                发送
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 留言编辑框 */}
            <div className="comment-edit-box">
                <div className={adminBox ? 'admin-box admin-box-in' : 'admin-box admin-box-out'}>
                    <div className="admin-email-box">
                        <div className="admin-email common-hover">邮箱</div>
                        <input
                            type="text"
                            className="admin-input-email"
                            value={adminEmail}
                            onChange={e => setAdminEmail(e.target.value)}
                        />
                    </div>
                    <div className="admin-pwd-box">
                        <div className="admin-pwd common-hover">密码</div>
                        <input
                            type="password"
                            className="admin-input-pwd"
                            value={adminPwd}
                            onChange={e => setAdminPwd(e.target.value)}
                        />
                    </div>
                    <div className="admin-btns">
                        <div className="admin-login-btn common-hover" onClick={cancelAdminLogin}>
                            取消
                        </div>
                        <div className="admin-login-btn common-hover" onClick={adminLogin}>
                            登录
                        </div>
                    </div>
                </div>
                <div className="comment-edit-avatar-box">
                    <img
                        src={avatar === '' ? defaultCommentAvatar : avatar}
                        alt="avatar"
                        className="comment-edit-avatar"
                    />
                </div>
                <div className="comment-edit-input-box">
                    <div className="comment-input-box">
                        <div className="comment-input-info theme-color-1 flex2">
                            <div className="comment-input-key theme-color-2 common-hover">昵称</div>
                            <input
                                type="text"
                                className="comment-input-value"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                onKeyUp={e => {
                                    if (e.keyCode === 13) getQQAvatar();
                                }}
                                placeholder="试试QQ号~"
                                onBlur={getQQAvatar}
                            />
                        </div>
                        <div className="comment-input-info theme-color-1 flex3">
                            <div className="comment-input-key theme-color-2 common-hover">邮箱</div>
                            <input
                                type="text"
                                className="comment-input-value"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="必填"
                                onBlur={saveEmail}
                            />
                        </div>
                        <div className="comment-input-info theme-color-1 flex3">
                            <div className="comment-input-key theme-color-2 common-hover">网址</div>
                            <input
                                type="text"
                                className="comment-input-value"
                                value={link}
                                onChange={e => setLink(e.target.value)}
                                placeholder="选填"
                                onBlur={saveLink}
                            />
                        </div>
                    </div>
                    <div className="comment-textarea-box theme-color-1">
                        <textarea
                            className="comment-textarea theme-color-1"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder="写点什么吗？&#10;可以在「昵称」处填写QQ号，自动获取「头像」和「QQ邮箱」！"
                        />
                    </div>

                    <div className="comment-btns">
                        {/* emoji表情复制 */}
                        <Popover
                            className="emojiBtn theme-color-2 common-hover"
                            theme-color-2
                            common-hover
                            overlayClassName="emojiContent"
                            color="rgb(42 42 50)"
                            placement="bottom"
                            content={emojiPeople}
                            trigger="click"
                        >
                            <Button>😄</Button>
                        </Popover>
                        <Popover
                            className="emojiBtn theme-color-2 common-hover emoji2"
                            overlayClassName="emojiContent"
                            color="rgb(42 42 50)"
                            placement="bottom"
                            content={emojiNature}
                            trigger="click"
                        >
                            <Button>☀️</Button>
                        </Popover>
                        <Popover
                            className="emojiBtn theme-color-2 common-hover emoji3"
                            overlayClassName="emojiContent"
                            color="rgb(42 42 50)"
                            placement="bottom"
                            content={emojiObj}
                            trigger="click"
                        >
                            <Button>🏀</Button>
                        </Popover>
                        <Popover
                            className="emojiBtn theme-color-2 common-hover emoji4"
                            overlayClassName="emojiContent"
                            color="rgb(42 42 50)"
                            placement="bottom"
                            content={emojiPlace}
                            trigger="click"
                        >
                            <Button>⛪</Button>
                        </Popover>
                        <Popover
                            className="emojiBtn theme-color-2 common-hover emoji5"
                            overlayClassName="emojiContent"
                            color="rgb(42 42 50)"
                            placement="bottom"
                            content={emojiSymbol}
                            trigger="click"
                        >
                            <Button>🆗</Button>
                        </Popover>
                        <div
                            className="comment-preview-btn theme-color-2 common-hover"
                            // onClick={() => setShowPreview(true)}
                            onClick={openMsgPreview}
                        >
                            预览
                        </div>
                        <div
                            className="comment-send-btn theme-color-2 common-hover"
                            onClick={sendMsg}
                        >
                            发送
                        </div>
                    </div>
                </div>
            </div>
            {(props.postTitle
                ? props.comments.filter(item => item.postTitle === props.postTitle)
                : props.msgs
            ).length ? null : (
                <div className="no-comment-box">暂时没有评论~</div>
            )}
            {/* 留言展示区 */}
            <div className="comment-show-box">
                {(props.postTitle
                    ? props.comments.filter(item => item.postTitle === props.postTitle)
                    : props.msgs
                ).map(item => (
                    <div className="comment-show-item" key={item._id}>
                        {/* 头像框 */}
                        <div className="comment-show-avatar-box">
                            <img src={item.avatar} alt="avatar" className="comment-edit-avatar" />
                        </div>
                        {/* 回复框显示按钮 */}
                        <div
                            className="comment-show-reply common-hover"
                            onClick={() => openReplyBox(item._id)}
                        >
                            <MessageOutlined />
                        </div>
                        {/* 内容区 */}
                        <div className="comment-show-content-box">
                            <div className="comment-show-usrInfo">
                                <a
                                    href={item.link}
                                    onClick={item.link ? () => {} : e => e.preventDefault()}
                                    target={item.link ? '_blank' : '_self'}
                                    rel="noreferrer"
                                    className="comment-show-name theme-color-font common-hover"
                                    style={{ cursor: item.link ? 'pointer' : 'default' }}
                                >
                                    {item.name}
                                </a>
                                {item.name === '飞鸟' ? (
                                    <span className="admin-flag">站长</span>
                                ) : null}
                                <span className="comment-show-date">
                                    {moment(item.date).fromNow()}
                                </span>
                            </div>
                            <div
                                className="comment-show-content theme-color-1 markdownStyle commentMarkDown"
                                dangerouslySetInnerHTML={{
                                    __html: marked(item.content).replace(
                                        /<pre>/g,
                                        "<pre id='hljs'>"
                                    ),
                                }}
                            ></div>
                            {/* 回复的消息 */}
                            <div className="comment-show-reply-box">
                                {(props.postTitle ? props.commentsReply : props.msgsReply)
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
                                                        onClick={
                                                            replyItem.link
                                                                ? () => {}
                                                                : e => e.preventDefault()
                                                        }
                                                        target={replyItem.link ? '_blank' : '_self'}
                                                        rel="noreferrer"
                                                        className="comment-show-name theme-color-font common-hover"
                                                        style={{
                                                            cursor: replyItem.link
                                                                ? 'pointer'
                                                                : 'default',
                                                        }}
                                                    >
                                                        {replyItem.name}
                                                    </a>
                                                    {replyItem.name === '飞鸟' ? (
                                                        <span className="admin-flag">站长</span>
                                                    ) : null}
                                                    <span className="comment-show-date">
                                                        {moment(replyItem.date).fromNow()}
                                                    </span>
                                                </div>
                                                <div
                                                    className="comment-show-content theme-color-1 markdownStyle commentMarkDown"
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
        comments: state.comments,
        commentsReply: state.commentsReply,
    }),
    { getComments, getCommentsReply, getMsgs, getMsgsReply }
)(Comment);
