import { useState, useEffect } from 'react';
import './index.css';

const BlogCard = () => {
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
        <div className="animated bounceInRight">
            <div className="BlogCard-box transparent-box">
                <p className="BlogCard-text">
                    {timeText}, <br />
                    我叫<span className="blogger-name">飞鸟</span>,<br />
                    欢迎来到
                    <br />
                    我的<span className="blog-name">个人博客</span>。
                </p>
                <img
                    src="https://jack-img.oss-cn-hangzhou.aliyuncs.com/img/20210718205847.PNG"
                    alt=""
                    className="avatar"
                />
            </div>
        </div>
    );
};

export default BlogCard;
