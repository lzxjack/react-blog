import { useState, useEffect } from 'react';
import { db } from '../../../utils/cloudBase';
import './index.css';

const Comment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [comment, setComment] = useState('');
    const [avatar, setAvatar] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    // useEffect(() => {
    //     console.log(window.location.search.);
    // });
    const sendMsg = () => {
        db.collection('comments')
            .add({
                name,
                email,
                link,
                comment,
                date: new Date().getTime(),
                avatar: '',
                title: '',
                replyId: '',
            })
            .then(res => {
                console.log(res);
            });
    };
    // http://q1.qlogo.cn/g?b=qq&nk=1450619802&s=640
    return (
        <div className="Comment-box">
            <div className={showPreview ? 'preview-box preview-in' : 'preview-box preview-out'}>
                <div className="comment-preview"></div>
                <div
                    className="close-preview-btn common-hover"
                    onClick={() => setShowPreview(false)}
                >
                    关闭
                </div>
            </div>
            <div className="comment-edit-box">
                <div className="comment-edit-avatar-box">
                    <img
                        src="https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20201204121004.jpg"
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
                                placeholder="必填"
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
            <div className="comment-show-box"></div>
        </div>
    );
};

export default Comment;
