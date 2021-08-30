import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { SwapLeftOutlined } from '@ant-design/icons';
import Copyright from './Copyright';
import ArticleContent from './ArticleContent';
import ArticleTags from './ArticleTags';
import Divider from './Divider';
import ArticleAside from './ArticleAside';
import Comment from '../../components/Blog/Content/Comment';
import { setNavShow } from '../../redux/actions';
import moment from 'moment';
import './index.css';

const Post = props => {
    const [classes, setClasses] = useState('');
    const [date, setDate] = useState(null);
    const [tags, setTags] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');

    // 返回顶部
    useEffect(() => {
        window.scrollTo(0, 0);
        props.setNavShow(true);
    }, []);

    useEffect(() => {
        const Title = props.location.search.split('?title=')[1];
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
    const toSomeArts = myClass => {
        props.history.push(`/artClass?class=${myClass}`);
    };
    return (
        <div className="Article-box">
            {/* <div
                className="turn-back-btn common-hover animated bounceInDown"
                onClick={() => props.history.push('/home')}
            >
                <SwapLeftOutlined />
            </div> */}
            <div className="animated bounceInDown">
                <div className="standard-page-title">
                    <span className="article-title">{title}</span>

                    <div className="article-info-box">
                        <span
                            className="article-class common-hover"
                            onClick={() => toSomeArts(classes)}
                        >
                            {classes}
                        </span>
                        <span className="article-date common-hover">
                            {moment(date).format('YYYY-MM-DD HH:mm:ss')}
                        </span>
                    </div>
                </div>
            </div>

            {/* <div className="animated bounceInLeft"> */}
            <div className="standard-page-box">
                <ArticleContent content={content} />
                <ArticleTags tags={tags} />
                <Copyright title={title} url={url} />
                <Divider />
                <Comment isMsg={false} postTitle={props.location.search.split('?title=')[1]} />
            </div>
            {/* </div> */}
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
