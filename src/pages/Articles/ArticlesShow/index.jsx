import { withRouter } from 'react-router-dom';
import moment from 'moment';
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
                props.articles.map(item => (
                    <div className="animated bounceInUp">
                        <div
                            className="art-show-item"
                            key={item._id}
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
