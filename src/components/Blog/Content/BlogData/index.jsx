import { connect } from 'react-redux';
import './index.css';

const BlogData = props => (
    <div className="animated bounceInRight">
        <div className="BlogData-box">
            <div className="blogData common-hover">
                <div className="type-name">文章</div>
                <div className="type-num">{props.articleNum}</div>
            </div>
            <div className="blogData common-hover">
                <div className="type-name">分类</div>
                <div className="type-num">{props.classNum}</div>
            </div>
            <div className="blogData common-hover">
                <div className="type-name">标签</div>
                <div className="type-num">{props.tagNum}</div>
            </div>
        </div>
    </div>
);

export default connect(
    state => ({
        articleNum: state.articles.length,
        classNum: state.classes.length,
        tagNum: state.tags.length,
    }),
    {}
)(BlogData);
