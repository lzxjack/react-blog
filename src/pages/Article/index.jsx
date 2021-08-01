import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SwapLeftOutlined } from '@ant-design/icons';
import Copyright from './Copyright';
import ArticleContent from './ArticleContent';
import ArticleTags from './ArticleTags';
import Divider from './Divider';
import Comments from './Comments';
import ArticleAside from './ArticleAside';
// import qs from 'qs';
import moment from 'moment';
import './index.css';

const Article = props => {
    const [classes, setClasses] = useState('');
    const [date, setDate] = useState(null);
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');
    useEffect(() => {
        // const param = qs.parse(props.location.search.slice(1)).title;
        const Title = props.location.search.split('?title=')[1];
        // console.log(Title);
        const theArticle = props.articles.filter(item => item.titleEng === Title)[0];
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
            <div
                className="turn-back-btn common-hover animated bounceInDown"
                onClick={() => props.history.push('/home')}
            >
                <SwapLeftOutlined />
            </div>
            <div className="wow bounceInDown" data-wow-duration="0.8s">
                <div className="standard-page-title">
                    <span className="article-title">{title}</span>

                    <div className="article-info-box">
                        <span className="article-class common-hover">{classes}</span>
                        <span className="article-date common-hover">
                            {moment(date).format('YYYY-MM-DD HH:mm:ss')}
                        </span>
                    </div>
                </div>
            </div>

            <div className="wow bounceInLeft" data-wow-duration="0.8s">
                <div className="standard-page-box">
                    <ArticleContent content={content} />
                    <ArticleTags tags={tags} />
                    <Copyright title={title} url={url} />
                    <Divider />
                    <Comments />
                </div>
            </div>
            <ArticleAside content={content} />
        </div>
    );
};

export default connect(
    state => ({
        articles: state.articles,
    }),
    {}
)(Article);
