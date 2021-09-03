import { connect } from 'react-redux';
import PageTitle from '../../../components/Blog/Content/PageTitle';
import { setNavShow } from '../../../redux/actions';
import useToTop from '../../../hooks/useToTop';
import './index.css';

const GalleryOutline = props => {
    // 返回顶部
    useToTop(props, true);
    const turnOne = id => {
        props.history.push(`/gallery/one?id=${id}`);
    };
    return (
        <>
            <PageTitle title="我的图库" />
            <div className="standard-page-box gallery-page-box">
                <ul className="galleryUl animated bounceInUp">
                    {props.galleries.map(item => (
                        <li
                            key={item._id}
                            style={{ backgroundImage: `url(${item.cover})` }}
                            onClick={() => turnOne(item._id)}
                        >
                            <div className="galleryTitleBox">
                                <span>{item.title}</span>
                            </div>
                            <div className="galleryDescr">{item.descr}</div>
                            <div className="galleryMask"></div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default connect(
    state => ({
        galleries: state.galleries,
    }),
    { setNavShow }
)(GalleryOutline);
