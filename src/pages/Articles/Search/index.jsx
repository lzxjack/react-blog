import { connect } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { Select } from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import { isContained } from '../../../utils/functions';
import './index.css';

const Search = props => {
    const { Option } = Select;
    const searchWords = useRef();
    const [searchClass, setSearchClass] = useState(null);
    const [searchTag, setSearchTag] = useState([]);

    useEffect(() => {
        props.getArticle(props.articles);
    }, [props]);

    // 通过输入文字搜索
    const searchByWords = () => {
        setSearchClass(null);
        setSearchTag([]);
        const keyWords = searchWords.current.value;
        // 如果输入框内容为空，则展示所有文章
        if (!keyWords) {
            props.getArticle(props.articles);
            return;
        }
        // 过滤出搜索到的文章
        const newArticlesShow = props.articles.filter(item => item.title.indexOf(keyWords) !== -1);
        // 将搜索到的文章，放入要显示的state
        props.getArticle(newArticlesShow);
    };
    // 通过选择分类搜索
    const searchByClass = classesName => {
        searchWords.current.value = '';
        setSearchTag([]);
        if (!classesName) {
            props.getArticle(props.articles);
            return;
        }
        const newArticlesShow = props.articles.filter(item => item.classes === classesName);
        props.getArticle(newArticlesShow);
    };
    // 通过选择标签搜索
    const searchByTag = tagsArr => {
        searchWords.current.value = '';
        setSearchClass(null);
        if (tagsArr.length === 0) {
            props.getArticle(props.articles);
            return;
        }
        const articlesLen = props.articles.length;
        const articlesByTag = [];
        for (let i = 0; i < articlesLen; i++) {
            if (isContained(props.articles[i].tags, tagsArr)) {
                articlesByTag.push(props.articles[i]);
            }
        }
        props.getArticle(articlesByTag);
    };
    // 清空搜索内容
    const resetSearch = () => {
        searchWords.current.value = '';
        setSearchClass(null);
        setSearchTag([]);
        props.getArticle(props.articles);
    };
    return (
        <div className="Search-box">
            <div className="animated bounceInDown">
                <div className="search-input-box">
                    <input
                        className="search-input"
                        type="text"
                        ref={searchWords}
                        placeholder="搜索文章..."
                        onChange={searchByWords}
                    />
                    <div className="clear-btn common-hover" onClick={resetSearch}>
                        <RedoOutlined />
                    </div>
                </div>
            </div>

            <div className="search-class-tag-box">
                <div className="animated bounceInLeft">
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
                        }}
                        className="select-class"
                        dropdownClassName="select-dropdown"
                    >
                        {props.classes.map(item => (
                            <Option key={item.class}>{item.class}</Option>
                        ))}
                    </Select>
                </div>

                <div className="blank"></div>
                <div className="animated bounceInRight">
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
                        }}
                        className="select-tag"
                        dropdownClassName="select-dropdown"
                    >
                        {props.tags.map(item => (
                            <Option key={item.tag}>{item.tag}</Option>
                        ))}
                    </Select>
                </div>
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
    {}
)(Search);
