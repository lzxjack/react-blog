// import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { pageSize } from '../../../utils/constant';
import './index.css';

const ArtList = props => {
    const showOneArticle = title => {
        props.history.push(`/article?title=${title}`);
    };
    return (
        <>
            {props.articles
                .slice((props.curPage - 1) * pageSize, props.curPage * pageSize)
                .map(item => (
                    <div key={item._id} className="wow bounceInLeft" data-wow-duration="0.8s">
                        <div className="article-item" onClick={() => showOneArticle(item.titleEng)}>
                            <div className="article-item-title">{item.title}</div>
                            <p className="article-item-abstract">{item.content}</p>
                            <div className="article-item-info">
                                <span className="article-item-date">
                                    {moment(item.date).format('YYYY-MM-DD')}
                                </span>
                                <div className="article-item-tags">
                                    {item.tags.map(tag => (
                                        <span className="article-item-tag" key={tag}>
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
            curPage: state.curPage,
        }),
        {}
    )(ArtList)
);
