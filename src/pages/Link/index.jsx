import { useEffect } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import { getLinks } from '../../redux/actions';
import './index.css';

const Link = props => {
    useEffect(() => {
        const sum = props.links.length;
        const Num = sum % 3;
        if (Num === 2) {
            const Links = props.links;
            props.getLinks([...Links, {}]);
        }
    });

    return (
        <>
            <PageTitle title="友情链接" />
            <div className="standard-page-box link-page">
                <ul className="links-box animated bounceInRight">
                    {props.links.map(item => {
                        if (JSON.stringify(item) !== '{}') {
                            return (
                                <li className="link-item" key={item._id}>
                                    <a
                                        href={item.link}
                                        rel="noreferrer"
                                        target="_blank"
                                        className="link-a"
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
    { getLinks }
)(Link);
