import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

const BlogData = props => {
    const { history, articleNum, classNum, tagNum } = props;

    return (
        <div className="animated bounceInRight">
            <div className="aside-card BlogData-box theme-color">
                <div className="blogData common-hover" onClick={() => history.push('/articles')}>
                    <div className="type-name">文章</div>
                    <div className="type-num theme-color-font">{articleNum}</div>
                </div>
                <div className="blogData common-hover" onClick={() => history.push('/classes')}>
                    <div className="type-name">分类</div>
                    <div className="type-num theme-color-font">{classNum}</div>
                </div>
                <div className="blogData common-hover" onClick={() => history.push('/tags')}>
                    <div className="type-name">标签</div>
                    <div className="type-num theme-color-font">{tagNum}</div>
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
