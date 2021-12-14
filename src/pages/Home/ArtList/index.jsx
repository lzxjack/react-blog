import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { homePageSize } from '../../../utils/constant';
import './index.css';

const ArtList = ({ history, articles, curPage }) => {
    const showOneArticle = title => {
        history.push(`/post?title=${title}`);
    };
    return (
        <>
            {articles.slice((curPage - 1) * homePageSize, curPage * homePageSize).map(item => (
                <div key={item._id} className="animated bounceInLeft">
                    <div
                        className="article-item theme-color"
                        onClick={() => showOneArticle(item.titleEng)}
                    >
                        <h1 className="article-item-title">{item.title}</h1>
                        <p className="article-item-abstract">
                            {item.content
                                .replace(/<a(.*?)>(.*?)<\/a>/g, '$2')
                                .replace(/[# |**|`|>]/g, '')}
                        </p>
                        <div className="article-item-info">
                            <span className="article-item-date theme-color-1 common-hover">
                                {moment(item.date).format('YYYY-MM-DD')}
                            </span>
                            <div className="article-item-tags">
                                {item.tags.map(tag => (
                                    <span
                                        className="article-item-tag theme-color-1 common-hover"
                                        key={tag}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default withRouter(
    connect(
        state => ({
            articles: state.articles,
        }),
        {}
    )(ArtList)
);
