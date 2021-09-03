import { useState } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import Search from './Search';
import ArticlesShow from './ArticlesShow';
import ArticlesNav from './ArticlesNav';
import { setNavShow } from '../../redux/actions';
import useToTop from '../../hooks/useToTop';
import './index.css';

const Articles = props => {
    // 返回顶部
    useToTop(props, true);
    // 需要展示文章的state
    const [articlesShow, setArticlesShow] = useState([]);
    const [curPage, setCurPage] = useState(1);
    return (
        <>
            <PageTitle title="所有文章" />
            <div className="standard-page-box articles">
                <Search getArticle={setArticlesShow} />
                <ArticlesShow articles={articlesShow} curPage={curPage} />
                <ArticlesNav
                    curPage={curPage}
                    setCurPage={setCurPage}
                    articleNum={articlesShow.length}
                />
            </div>
        </>
    );
};

export default connect(() => ({}), { setNavShow })(Articles);
