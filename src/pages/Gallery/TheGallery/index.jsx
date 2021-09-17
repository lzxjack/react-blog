import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../../components/Blog/Content/PageTitle';
import { SwapLeftOutlined } from '@ant-design/icons';
import { setNavShow } from '../../../redux/actions';
import { Image } from 'antd';
import useToTop from '../../../hooks/useToTop';
import './index.css';

const TheGallery = props => {
    const { location, galleries, history } = props;
    // 返回顶部
    useToTop(props, true);
    const [title, setitle] = useState('');
    const [pics, sePics] = useState([]);
    useEffect(() => {
        const ID = location.search.split('?id=')[1];
        const theOne = galleries.filter(item => item._id === ID)[0];
        if (theOne) {
            const { title, pics } = theOne;
            setitle(title);
            sePics(pics);
        }
    }, [location.search, galleries]);
    return (
        <>
            <PageTitle title={title} />
            <div className="standard-page-box theme-color one-gallery-page-box">
                <div
                    className="turn-back-btn theme-color common-hover animated bounceInDown"
                    onClick={() => history.go(-1)}
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
