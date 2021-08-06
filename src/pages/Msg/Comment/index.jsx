import { useState, useEffect } from 'react';
import { db } from '../../../utils/cloudBase';
import { defaultCommentAvatar, pushplusToken, pushplusUrl } from '../../../utils/constant';
import axios from 'axios';
import marked from 'marked';
import useMarkdown from '../../../hooks/useMarkdown';
import { message } from 'antd';
import './index.css';

const Comment = () => {
    useMarkdown();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [comment, setComment] = useState('');
    const [avatar, setAvatar] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    // const [pushTitleText, setPushTitleText] = useState('');
    const [isMsg, setIsMsg] = useState(false);
    // 获取URL信息
    useEffect(() => {
        if (!window.location.search) {
            setIsMsg(true);
            // setPushTitleText('留言板');
            return;
        }
    });
    const regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    // 发布评论
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
        if (!comment) {
            message.info('请输入评论内容！');
            return;
        }
        db.collection('comments')
            .add({
                name,
                email,
                link,
                comment,
                date: new Date().getTime(),
                avatar,
                title: '',
                replyId: '',
            })
            .then(() => {
                message.success('发布评论成功！');
                const title = isMsg ? '留言板有新留言啦!' : '';
                axios({
                    url: pushplusUrl,
                    method: 'get',
                    params: {
                        token: pushplusToken,
                        title,
                        content: comment,
                    },
                })
                    .then(res => {
                        console.log(res);
                        setComment('');
                    })
                    .catch(err => console.error(err));
            });
    };
    const reg_qq = /[1-9][0-9]{3,11}/;
    // 获取QQ头像
    const getQQAvatar = () => {
        if (!reg_qq.test(name)) return;
        const avatarUrl = `http://q1.qlogo.cn/g?b=qq&nk=${name}&s=640`;
        setAvatar(avatarUrl);
        setName('');
    };
    return (
        <div className="Comment-box">
            <div className={showPreview ? 'preview-box preview-in' : 'preview-box preview-out'}>
                <div
                    className="preview-content"
                    dangerouslySetInnerHTML={{
                        __html: marked(comment).replace(/<pre>/g, "<pre id='hljs'>"),
                    }}
                ></div>
                <div
                    className="close-preview-btn common-hover"
                    onClick={() => setShowPreview(false)}
                >
                    关闭
                </div>
            </div>
            <div className={showPreview ? 'preview-mask' : 'preview-mask preview-mask-none'}></div>
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
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />
                    </div>

                    <div className="comment-btns">
                        <div
                            className="comment-preview-btn common-hover"
                            onClick={() => setShowPreview(true)}
                        >
                            预览
                        </div>
                        <div className="comment-send-btn common-hover" onClick={sendMsg}>
                            发送
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment-show-box">
                <div className="comment-show-item">
                    <div className="comment-show-avatar-box">
                        <img
                            src={defaultCommentAvatar}
                            alt="avatar"
                            className="comment-edit-avatar"
                        />
                    </div>
                    <div className="comment-show-content-box">
                        <div className="comment-show-usrInfo">
                            <div className="comment-show-name">飞鸟</div>
                            <div className="comment-show-date">2021-8-4</div>
                        </div>
                        <div className="comment-show-content"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
