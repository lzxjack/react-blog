// import { useState, useEffect } from 'react';
import PageTitle from '../../components/Blog/Content/PageTitle';
import TimeLine from './TimeLine';
import './index.css';

const Log = () => {
    return (
        <>
            <PageTitle title="建站日志" />
            <div className="standard-page-box">
                <TimeLine />
            </div>
        </>
    );
};

export default Log;
