import { useEffect } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import { setNavShow } from '../../redux/actions';
import './index.css';

const Show = props => {
    // 返回顶部
    useEffect(() => {
        window.scrollTo(0, 0);
        props.setNavShow(true);
    }, [props]);
    return (
        <>
            <PageTitle title="小作品" />
            <div className="standard-page-box gallery-page-box">
                <ul className="galleryUl animated bounceInUp">
                    {props.shows.map(item => (
                        <li key={item._id} style={{ backgroundImage: `url(${item.cover})` }}>
                            <a
                                href={item.link}
                                rel="noreferrer"
                                target="_blank"
                                className="showLink"
                            >
                                <div className="galleryTitleBox">
                                    <span>{item.name}</span>
                                </div>
                                <div className="galleryDescr">{item.descr}</div>
                                <div className="galleryMask"></div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default connect(
    state => ({
        shows: state.shows,
    }),
    { setNavShow }
)(Show);
