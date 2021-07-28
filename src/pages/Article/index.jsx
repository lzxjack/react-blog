import { useState, useEffect } from 'react';
import useScript from '../../hooks/useScript';
import { twikooUrl, twikooConfigUrl } from '../../utils/constant';
import { connect } from 'react-redux';
import { SwapLeftOutlined } from '@ant-design/icons';
import Copyright from './Copyright';
import ArticleContent from './ArticleContent';
import ArticleTags from './ArticleTags';
import Divider from './Divider';
import Comments from './Comments';
import qs from 'qs';
import moment from 'moment';
import './index.css';

const Article = props => {
    useScript(twikooUrl, twikooConfigUrl);

    const [classes, setClasses] = useState('');
    const [date, setDate] = useState(null);
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');
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
                        <ArticleContent content={content} />
                        <ArticleTags tags={tags} />
                        <Copyright title={title} url={url} />
                        <Divider />
                        <Comments />
                    </div>
                </div>
                <div className="standard-aside-box">Article</div>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        articles: state.articles,
    }),
    {}
)(Article);
