import { useState } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import marked from 'marked';
import Switch from './Switch';
import Chart from './Chart';
import useMarkdown from '../../hooks/useMarkdown';
import './index.css';

const About = props => {
    useMarkdown();
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
    {}
)(About);
