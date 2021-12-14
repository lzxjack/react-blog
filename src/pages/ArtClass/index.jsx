import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PageTitle from '../../components/Blog/Content/PageTitle';
import { Pagination } from 'antd';
import { articlesPageSize } from '../../utils/constant';
import { setNavShow, setClassPage, updateClass } from '../../redux/actions';
import useToTop from '../../hooks/useToTop';

import './index.css';

const ArtClass = ({
    classPage,
    setClassPage,
    lastClass,
    updateClass,
    history,
    location,
    articles,
    setNavShow,
}) => {
    // 返回顶部
    useToTop(setNavShow);

    const turnToArticle = title => {
        history.push(`/post?title=${title}`);
    };

    const [myClass, setMyClass] = useState('');
    useEffect(() => {
        setMyClass(decodeURI(location.search.split('?class=')[1]));
    }, [location.search]);

    useEffect(() => {
        if (!myClass) return;
        if (myClass !== lastClass) {
            setClassPage(1);
            updateClass(myClass);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myClass]);

    return (
        <>
            <PageTitle title={myClass} />
            <div className="standard-page-box theme-color animated bounceInLeft">
                {articles
                    .filter(item => item.classes === myClass)
                    .slice((classPage - 1) * articlesPageSize, classPage * articlesPageSize)
                    .map(item => (
                        <div className="animated bounceInUp" key={item._id}>
                            <div
                                className="art-show-item theme-color-1"
                                onClick={() => turnToArticle(item.titleEng)}
                            >
                                <div className="art-show-title">{item.title}</div>
                                <span className="art-show-date common-hover">
                                    {moment(item.date).format('YYYY-MM-DD')}
                                </span>
                            </div>
                        </div>
                    ))}
                <div className="PageNav-box">
                    <Pagination
                        current={classPage}
                        total={articles.filter(item => item.classes === myClass).length}
                        defaultPageSize={articlesPageSize}
                        showSizeChanger={false}
                        showTitle={false}
                        hideOnSinglePage={false}
                        onChange={page => setClassPage(page)}
                    />
                </div>
            </div>
        </>
    );
};
export default connect(
    state => ({
        articles: state.articles,
        classPage: state.pageNum.classPage,
        lastClass: state.lastText.class,
    }),
    { setNavShow, setClassPage, updateClass }
)(ArtClass);
