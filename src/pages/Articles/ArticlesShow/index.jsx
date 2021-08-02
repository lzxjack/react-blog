import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { articlesPageSize } from '../../../utils/constant';
import './index.css';

const ArticlesShow = props => {
    const turnToArticle = title => {
        props.history.push(`/article?title=${title}`);
    };
    return (
        <>
            {props.articles.length === 0 ? (
                <div className="art-show-none">暂时没有相应文章...</div>
            ) : (
                props.articles
                    .slice((props.curPage - 1) * articlesPageSize, props.curPage * articlesPageSize)
                    .map(item => (
                        <div className="animated bounceInUp" key={item._id}>
                            <div
                                className="art-show-item"
                                onClick={() => turnToArticle(item.titleEng)}
                            >
                                <div className="art-show-title">{item.title}</div>
                                <span className="art-show-date common-hover">
                                    {moment(item.date).format('YYYY-MM-DD')}
                                </span>
                            </div>
                        </div>
                    ))
            )}
        </>
    );
};

export default withRouter(ArticlesShow);
