import { useState } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import Search from './Search';
import ArticlesShow from './ArticlesShow';
import ArticlesNav from './ArticlesNav';
import { setNavShow, setArticlePage } from '../../redux/actions';
import useToTop from '../../hooks/useToTop';
import './index.css';

const Articles = ({ articlePage, setArticlePage, setNavShow }) => {
    // 返回顶部
    useToTop(setNavShow);
    // 需要展示文章的state
    const [articlesShow, setArticlesShow] = useState([]);
    return (
        <>
            <PageTitle title="所有文章" />
            <div className="standard-page-box articles theme-color">
                <Search getArticle={setArticlesShow} />
                <ArticlesShow articles={articlesShow} curPage={articlePage} />
                <ArticlesNav
                    curPage={articlePage}
                    setCurPage={setArticlePage}
                    articleNum={articlesShow.length}
                />
            </div>
        </>
    );
};

export default connect(
    state => ({
        articlePage: state.pageNum.articlePage,
    }),
    { setNavShow, setArticlePage }
)(Articles);
