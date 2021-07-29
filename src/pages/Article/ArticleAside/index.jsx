import { useState, useEffect } from 'react';
import './index.css';

const ArticleAside = props => {
    const [tocArr, setTocArr] = useState([]);
    useEffect(() => {
        const reg = /(#+)\s+?(.+?)\n/g;
        let regExecRes = null;
        const toc = [];
        while ((regExecRes = reg.exec(props.content))) {
            toc.push({
                level: regExecRes[1].length,
                title: regExecRes[2],
            });
        }
        setTocArr(toc);
    }, [props]);
    // const [isFixed, setIsFixed] = useState(false);
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         // if (window.pageYOffset >= 720) {
    //         if (window.pageYOffset >= 200) {
    //             setIsFixed(true);
    //             console.log(111);
    //         } else {
    //             setIsFixed(false);
    //         }
    //     });
    // });
    return (
        <ul className="standard-aside-box">
            {tocArr.map((item, index) => {
                return (
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
                            className="tocLink"
                            // style={{ position: 'relative', top: '-80px' }}
                            href={`#${item.title.split('. ')[0]}-${item.title.split(' ')[1]}`}
                        >
                            {item.title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default ArticleAside;
