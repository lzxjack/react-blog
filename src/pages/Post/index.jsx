import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Copyright from './Copyright';
import ArticleContent from './ArticleContent';
import ArticleTags from './ArticleTags';
import Divider from './Divider';
import ArticleAside from './ArticleAside';
import Comment from '../../components/Blog/Content/Comment';
import { setNavShow } from '../../redux/actions';
import moment from 'moment';
import useToTop from '../../hooks/useToTop';
import './index.css';

const Post = ({ location, articles, history, setNavShow }) => {
    const [classes, setClasses] = useState('');
    const [date, setDate] = useState(null);
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState(''); // 返回顶部

    useToTop(setNavShow);

    useEffect(() => {
        const Title = location.search.split('?title=')[1];
        const theArticle = articles.filter(item => item.titleEng === Title)[0];
        if (theArticle) {
            const { date, tags, title, content, classes, url } = theArticle;
            setTitle(title);
            setClasses(classes);
            setDate(date);
            setContent(content);
            setTags(tags);
            setUrl(url);
        }
    }, [articles, location.search]);
    const toSomeArts = myClass => {
        history.push(`/artClass?class=${myClass}`);
    };
    return (
        <div className="Article-box">
            <div className="animated bounceInDown">
                <div className="standard-page-title">
                    <h1 className="article-title">{title}</h1>
                    <div className="article-info-box">
                        <span
                            className="article-class theme-color common-hover"
                            onClick={() => toSomeArts(classes)}
                        >
                            {classes}
                        </span>
                        <span className="article-date theme-color common-hover">
                            {moment(date).format('YYYY-MM-DD HH:mm:ss')}
                        </span>
                    </div>
                </div>
            </div>

            <div className="standard-page-box theme-color">
                <ArticleContent content={content} />
                <ArticleTags tags={tags} />
                <Copyright title={title} url={url} />
                <Divider />
                <Comment
                    isMsg={false}
                    postTitle={location.search.split('?title=')[1]}
                    title={title}
                />
            </div>

            <ArticleAside content={content} />
        </div>
    );
};

export default connect(
    state => ({
        articles: state.articles,
    }),
    { setNavShow }
)(Post);
