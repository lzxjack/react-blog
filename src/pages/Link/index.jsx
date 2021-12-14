import { useEffect } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import { getLinks } from '../../redux/actions';
import { setNavShow } from '../../redux/actions';
import useToTop from '../../hooks/useToTop';
import './index.css';

const Link = ({ links, getLinks, setNavShow }) => {
    // 返回顶部
    useToTop(setNavShow);
    useEffect(() => {
        const sum = links.length;
        const Num = sum % 3;
        if (Num === 2) {
            const Links = links;
            getLinks([...Links, {}]);
        }
    });

    return (
        <>
            <PageTitle title="友情链接" />
            <div className="standard-page-box theme-color link-page">
                <ul className="links-box animated bounceInRight">
                    {links.map(item => {
                        if (JSON.stringify(item) !== '{}') {
                            return (
                                <li className="link-item theme-color-1" key={item._id}>
                                    <a
                                        href={item.link}
                                        rel="noreferrer"
                                        target="_blank"
                                        className="link-a theme-color-font"
                                    >
                                        <img
                                            src={item.avatar}
                                            alt="avatar"
                                            className="link-avatar"
                                        />
                                        <div className="link-title">{item.name}</div>
                                        <div className="link-descr">{item.descr}</div>
                                    </a>
                                </li>
                            );
                        } else {
                            return <li className="link-null" key="dhfjkqwegb"></li>;
                        }
                    })}
                </ul>
            </div>
        </>
    );
};

export default connect(
    state => ({
        links: state.links,
    }),
    { getLinks, setNavShow }
)(Link);
