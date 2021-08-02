import { useState, useEffect } from 'react';
import { Switch } from 'antd';
import PageTitle from '../../components/Blog/Content/PageTitle';
import './index.css';

const About = () => {
    const [isMe, setIsMe] = useState(false);
    const onChange = checked => {
        setIsMe(checked);
    };
    return (
        <>
            <PageTitle title="关于" />
            <div className="standard-page-box">
                <Switch checked={isMe} onChange={onChange} />
            </div>
        </>
    );
};

export default About;
