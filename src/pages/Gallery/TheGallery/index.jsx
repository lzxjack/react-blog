import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../../components/Blog/Content/PageTitle';
import { Image } from 'antd';
import './index.css';

const TheGallery = props => {
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
                <Image.PreviewGroup>
                    {pics.map(item => (
                        <Image width={440} src={item} />
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
    {}
)(TheGallery);
