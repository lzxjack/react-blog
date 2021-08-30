import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../../components/Blog/Content/PageTitle';
import { SwapLeftOutlined } from '@ant-design/icons';
import { setNavShow } from '../../../redux/actions';
import { Image } from 'antd';
// import LazyLoad from 'react-lazyload';
import './index.css';

const TheGallery = props => {
    // 返回顶部
    useEffect(() => {
        window.scrollTo(0, 0);
        props.setNavShow(true);
    }, [props]);
    const [title, setitle] = useState('');
    const [pics, sePics] = useState([]);
    useEffect(() => {
        const ID = props.location.search.split('?id=')[1];
        const theOne = props.galleries.filter(item => item._id === ID)[0];
        if (theOne) {
            const { title, pics } = theOne;
            setitle(title);
            sePics(pics);
        }
    }, [props]);
    return (
        <>
            <PageTitle title={title} />
            <div className="standard-page-box one-gallery-page-box">
                <div
                    className="turn-back-btn common-hover animated bounceInDown"
                    onClick={() => props.history.go(-1)}
                >
                    <SwapLeftOutlined />
                </div>
                <Image.PreviewGroup>
                    {pics.map((item, index) => (
                        <Image width={360} src={item} key={index} />
                    ))}
                </Image.PreviewGroup>
            </div>
        </>
    );
};

export default connect(
    state => ({
        galleries: state.galleries,
    }),
    { setNavShow }
)(TheGallery);
