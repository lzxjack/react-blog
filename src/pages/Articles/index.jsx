// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import './index.css';

const Articles = props => {
    return (
        <>
            <PageTitle title="所有文章" />
            <div className="standard-page-box"></div>
        </>
    );
};

export default connect(
    state => ({
        // galleries: state.galleries,
    }),
    {}
)(Articles);
