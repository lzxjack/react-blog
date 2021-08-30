import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import { setNavShow } from '../../redux/actions';
import marked from 'marked';
import hljs from 'highlight.js';
import Switch from './Switch';
import Chart from './Chart';
import './index.css';

const About = props => {
    // 返回顶部
    useEffect(() => {
        window.scrollTo(0, 0);
        props.setNavShow(true);
    }, [props]);
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
    const [isMe, setIsMe] = useState(false);
    return (
        <>
            <PageTitle title="关于" />
            <div className="standard-page-box">
                <div className="about-title-box">
                    <div className={isMe ? 'about-site title-off' : 'about-site'}>关于本站</div>
                    <Switch isMe={isMe} setIsMe={setIsMe} />
                    <div className={isMe ? 'about-me' : 'about-me title-off'}>关于我</div>
                </div>
                {isMe ? (
                    <div
                        className="about-me-box markdownStyle"
                        dangerouslySetInnerHTML={{
                            __html: marked(
                                props.about.filter(item => item.isMe)[0].content
                            ).replace(/<pre>/g, "<pre id='hljs'>"),
                        }}
                    ></div>
                ) : (
                    <div className="about-site-box">
                        <div className="articles-outline">文章分布</div>
                        <div className="site-articles-data">
                            <Chart />
                        </div>
                        <div
                            className="site-text markdownStyle"
                            dangerouslySetInnerHTML={{
                                __html: marked(
                                    props.about.filter(item => !item.isMe)[0].content
                                ).replace(/<pre>/g, "<pre id='hljs'>"),
                            }}
                        ></div>
                    </div>
                )}
            </div>
        </>
    );
};

export default connect(
    state => ({
        about: state.about,
    }),
    { setNavShow }
)(About);
