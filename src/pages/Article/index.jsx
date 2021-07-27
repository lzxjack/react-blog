import { useState, useEffect } from 'react';
import useScript from '../../hooks/useScript';
import { twikooUrl, twikooConfigUrl } from '../../utils/constant';
import { connect } from 'react-redux';
import { SwapLeftOutlined } from '@ant-design/icons';
import CopyIcon from './CopyIcon';
import CopyrightIcon from './CopyrightIcon';
import qs from 'qs';
import marked from 'marked';
import hljs from 'highlight.js';
import moment from 'moment';
import './github-dark.css';
import './index.css';

const Article = props => {
    useScript(twikooUrl, twikooConfigUrl);
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

    const [classes, setClasses] = useState('');
    const [date, setDate] = useState(0);
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');

    const [showCopyInfo, setShowCopyInfo] = useState(false);
    useEffect(() => {
        const param = qs.parse(props.location.search.slice(1)).title;
        const theArticle = props.articles.filter(item => item.titleEng === param)[0];
        if (theArticle) {
            const { date, tags, title, content, classes, url } = theArticle;
            setTitle(title);
            setClasses(classes);
            setDate(date);
            setContent(content);
            setTags(tags);
            setUrl(url);
        }
    }, [props]);

    const copy = () => {
        var copycode = document.getElementById('copycode');
        copycode.select(); // 选择对象
        document.execCommand('Copy'); // 执行浏览器复制命令
    };
    return (
        <div className="Article-box">
            <div className="standard-page-title">
                <div
                    className="turn-back-btn animated bounceInDown"
                    onClick={() => window.history.go(-1)}
                >
                    <SwapLeftOutlined />
                </div>
                <span className="article-title">{title}</span>
                <div className="wow bounceInDown" data-wow-duration="0.8s">
                    <div className="article-info-box">
                        <span className="article-class">{classes}</span>
                        <span className="article-date">
                            {moment(date).format('YYYY-MM-DD HH:mm:ss')}
                        </span>
                    </div>
                </div>
            </div>

            <div className="standard-page-body">
                <div className="wow bounceInLeft" data-wow-duration="0.8s">
                    <div className="standard-page-box">
                        <div
                            className="standard-page-main-content markdownStyle"
                            dangerouslySetInnerHTML={{
                                __html: marked(content).replace(/<pre>/g, "<pre id='hljs'>"),
                            }}
                        ></div>
                        <div className="standard-page-copyright">
                            <CopyrightIcon />
                            <div className="standard-page-copyright-center">
                                <div className="copyright-title">{title}</div>
                                {/* <div className="copyright-url" id="copyright-url-text"> */}
                                <div className="copyright-url" id="copyright-url-text">
                                    {url}
                                    <div className="copy-icon-btn" onClick={copy}>
                                        <CopyIcon />
                                    </div>
                                </div>
                                <div className="copyright-text">
                                    本博客所有文章除特别声明外，均采用
                                    <a
                                        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                                        target="_blank"
                                        className="copyright-name"
                                        rel="noreferrer"
                                    >
                                        CC BY-NC-SA 4.0
                                    </a>
                                    许可协议，转载请注明来自
                                    <a
                                        href="https://lzxjack.top/"
                                        target="_blank"
                                        className="copyright-name"
                                        rel="noreferrer"
                                    >
                                        飞鸟
                                    </a>
                                    。
                                </div>
                            </div>
                        </div>
                        <div className="standard-page-tags"></div>
                        <div className="standard-page-comments">
                            <div id="tcomment"></div>
                        </div>
                    </div>
                </div>
                <div className="standard-aside-box">Article</div>
            </div>
            <div className="copyed-info">复制成功！</div>
        </div>
    );
};

export default connect(
    state => ({
        articles: state.articles,
    }),
    {}
)(Article);
