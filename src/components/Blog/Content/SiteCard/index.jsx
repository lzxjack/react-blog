import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { time } from '../../../../utils/constant';
import './index.css';

const SiteCard = ({ siteCount }) => {
    const [runTime, setRunTime] = useState(0);
    useEffect(() => {
        const nowTime = new Date().getTime();
        const startTime = new Date(time).getTime();
        const runTime = moment(nowTime).diff(moment(startTime), 'days');
        setRunTime(runTime);
    }, []);

    return (
        <div className="animated bounceInRight">
            <div className="aside-card SiteCard-box theme-color">
                <div className="site-data-item common-hover">
                    <span className="site-data-key">总浏览量</span>
                    <span className="site-data-value">{siteCount}次</span>
                </div>
                <div className="site-data-item common-hover">
                    <span className="site-data-key">运行时间</span>
                    <span className="site-data-value">{runTime}天</span>
                </div>
            </div>
        </div>
    );
};

export default connect(
    state => ({
        siteCount: state.siteCount,
    }),
    {}
)(SiteCard);
