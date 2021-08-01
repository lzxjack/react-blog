import { useState } from 'react';
import PageTitle from '../../components/Blog/Content/PageTitle';
import Search from './Search';
import ArticlesShow from './ArticlesShow';

import './index.css';

const Articles = () => {
    // 需要展示文章的state
    const [articlesShow, setArticlesShow] = useState([]);
    return (
        <>
            <PageTitle title="所有文章" />
            <div className="standard-page-box articles">
                <Search getArticle={setArticlesShow} />
                <ArticlesShow articles={articlesShow} />
            </div>
        </>
    );
};

export default Articles;
