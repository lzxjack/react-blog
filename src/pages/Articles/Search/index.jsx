import { connect } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { Select } from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import { isContained } from '../../../utils/functions';
import { setArticlePage } from '../../../redux/actions';
import './index.css';

const Search = ({ articles, getArticle, setArticlePage, classes, tags }) => {
    const { Option } = Select;
    const searchWords = useRef();
    const [searchClass, setSearchClass] = useState(null);
    const [searchTag, setSearchTag] = useState([]);

    useEffect(() => {
        getArticle(articles);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 通过输入文字搜索
    const searchByWords = () => {
        setSearchClass(null);
        setSearchTag([]);
        const keyWords = searchWords.current.value.toLowerCase();
        // 如果输入框内容为空，则展示所有文章
        if (!keyWords) {
            getArticle(articles);
            return;
        }
        // 过滤出搜索到的文章
        const newArticlesShow = articles.filter(
            item => item.title.toLowerCase().indexOf(keyWords) !== -1
        );
        // 将搜索到的文章，放入要显示的state
        getArticle(newArticlesShow);
        setArticlePage(1);
    };
    // 通过选择分类搜索
    const searchByClass = classesName => {
        searchWords.current.value = '';
        setSearchTag([]);
        if (!classesName) {
            getArticle(articles);
            return;
        }
        const newArticlesShow = articles.filter(item => item.classes === classesName);
        getArticle(newArticlesShow);
    };
    // 通过选择标签搜索
    const searchByTag = tagsArr => {
        searchWords.current.value = '';
        setSearchClass(null);
        if (tagsArr.length === 0) {
            getArticle(articles);
            return;
        }
        const articlesLen = articles.length;
        const articlesByTag = [];
        for (let i = 0; i < articlesLen; i++) {
            if (isContained(articles[i].tags, tagsArr)) {
                articlesByTag.push(articles[i]);
            }
        }
        getArticle(articlesByTag);
    };
    // 清空搜索内容
    const resetSearch = () => {
        setArticlePage(1);
        searchWords.current.value = '';
        setSearchClass(null);
        setSearchTag([]);
        getArticle(articles);
    };
    return (
        <div className="Search-box">
            <div className="animated bounceInDown">
                <div className="search-input-box">
                    <input
                        className="search-input theme-color-1"
                        type="text"
                        ref={searchWords}
                        placeholder="搜索文章..."
                        onChange={searchByWords}
                    />
                    <div className="clear-btn theme-color-1 common-hover" onClick={resetSearch}>
                        <RedoOutlined />
                    </div>
                </div>
            </div>

            <div className="search-class-tag-box animated bounceInLeft">
                <Select
                    showSearch
                    size="large"
                    bordered={false}
                    style={{ width: '360px' }}
                    placeholder="请选择文章分类"
                    value={searchClass}
                    onChange={value => {
                        searchByClass(value);
                        setSearchClass(value);
                        setArticlePage(1);
                    }}
                    className="select-class theme-color-1"
                    dropdownClassName="select-dropdown theme-color-1"
                >
                    {classes.map(item => (
                        <Option key={item.class}>{item.class}</Option>
                    ))}
                </Select>

                <div className="blank"></div>

                <Select
                    mode="multiple"
                    showSearch
                    showArrow
                    size="large"
                    maxTagCount={4}
                    bordered={false}
                    style={{ width: '500px' }}
                    placeholder="请选择文章标签"
                    value={searchTag}
                    onChange={value => {
                        searchByTag(value);
                        setSearchTag(value);
                        setArticlePage(1);
                    }}
                    className="select-tag theme-color-1"
                    dropdownClassName="select-dropdown theme-color-1"
                >
                    {tags.map(item => (
                        <Option key={item.tag}>{item.tag}</Option>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        tags: state.tags,
        classes: state.classes,
        articles: state.articles,
    }),
    { setArticlePage }
)(Search);
