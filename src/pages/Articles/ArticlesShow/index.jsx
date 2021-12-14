import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { articlesPageSize } from '../../../utils/constant';
import './index.css';

const ArticlesShow = ({ history, articles, curPage }) => {
    const turnToArticle = title => {
        history.push(`/post?title=${title}`);
    };
    return (
        <>
            {articles.length === 0 ? (
                <div className="art-show-none">暂时没有相应文章...</div>
            ) : (
                articles
                    .slice((curPage - 1) * articlesPageSize, curPage * articlesPageSize)
                    .map(item => (
                        <div className="animated bounceInUp" key={item._id}>
                            <div
                                className="art-show-item theme-color-1"
                                onClick={() => turnToArticle(item.titleEng)}
                            >
                                <div className="art-show-title">{item.title}</div>
                                <span className="art-show-date theme-color-2 common-hover">
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
