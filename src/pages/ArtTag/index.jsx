import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PageTitle from '../../components/Blog/Content/PageTitle';
import { Pagination } from 'antd';
import { articlesPageSize } from '../../utils/constant';
import { setNavShow, setTagPage, updateTag } from '../../redux/actions';
import useToTop from '../../hooks/useToTop';
import './index.css';

const ArtTag = props => {
    const { tagPage, setTagPage, lastTag, updateTag } = props;
    // 返回顶部
    useToTop(props, true);

    const turnToArticle = title => {
        props.history.push(`/post?title=${title}`);
    };

    const [myTag, setMyTag] = useState('');
    useEffect(() => {
        setMyTag(decodeURI(props.location.search.split('?tag=')[1]));
    }, [props]);

    useEffect(() => {
        if (!myTag) return;
        if (myTag !== lastTag) {
            setTagPage(1);
            updateTag(myTag);
        }
    }, [myTag]);

    return (
        <>
            <PageTitle title={myTag} />
            <div className="standard-page-box theme-color animated bounceInLeft">
                {props.articles
                    .filter(item => item.tags.indexOf(myTag) !== -1)
                    .slice((tagPage - 1) * articlesPageSize, tagPage * articlesPageSize)
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
                        current={tagPage}
                        total={
                            props.articles.filter(item => item.tags.indexOf(myTag) !== -1).length
                        }
                        defaultPageSize={articlesPageSize}
                        showSizeChanger={false}
                        showTitle={false}
                        hideOnSinglePage={false}
                        onChange={page => setTagPage(page)}
                    />
                </div>
            </div>
        </>
    );
};
export default connect(
    state => ({
        articles: state.articles,
        tagPage: state.pageNum.tagPage,
        lastTag: state.lastText.tag,
    }),
    { setNavShow, setTagPage, updateTag }
)(ArtTag);
