import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

const BlogData = props => {
    const turnArticles = () => props.history.push('/articles');
    const turnClasses = () => props.history.push('/classes');
    const turnTags = () => props.history.push('/tags');
    return (
        <div className="animated bounceInRight">
            <div className="aside-card BlogData-box transparent-box">
                <div className="blogData common-hover" onClick={turnArticles}>
                    <div className="type-name">文章</div>
                    <div className="type-num">{props.articleNum}</div>
                </div>
                <div className="blogData common-hover" onClick={turnClasses}>
                    <div className="type-name">分类</div>
                    <div className="type-num">{props.classNum}</div>
                </div>
                <div className="blogData common-hover" onClick={turnTags}>
                    <div className="type-name">标签</div>
                    <div className="type-num">{props.tagNum}</div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(
    connect(
        state => ({
            articleNum: state.articles.length,
            classNum: state.classes.length,
            tagNum: state.tags.length,
        }),
        {}
    )(BlogData)
);
