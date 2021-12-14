import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setNavShow } from '../../../redux/actions';
import './index.css';

const ArticleAside = ({ content, setNavShow }) => {
    const [tocArr, setTocArr] = useState([]);
    useEffect(() => {
        const reg = /(#+)\s+?(.+?)\n/g;
        let regExecRes = null;
        const toc = [];
        while ((regExecRes = reg.exec(content))) {
            toc.push({
                level: regExecRes[1].length,
                title: regExecRes[2],
            });
        }
        setTocArr(toc);
    }, [content]);
    return (
        <div className="aside-box">
            <ul className="aside-ul animated bounceInRight">
                {tocArr.map((item, index) => (
                    <li
                        key={index}
                        className={
                            item.level === 2
                                ? 'tocPadding24'
                                : item.level === 3
                                ? 'tocPadding48'
                                : item.level === 4
                                ? 'tocPadding72'
                                : ''
                        }
                    >
                        <a
                            className="tocLink theme-color-2 common-hover"
                            onClick={() => {
                                setNavShow(false);
                            }}
                            // 目录支持中文、英文大小写、()、/、空格、?、=、-、_
                            href={`#${item.title.split('. ')[0]}-${item.title
                                .split('. ')[1]
                                .toLowerCase()
                                .replace(/\s/g, '-')
                                .replace(/\.|\+|\(|\)|\/|\?|=/g, '')}`}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default connect(() => ({}), { setNavShow })(ArticleAside);
