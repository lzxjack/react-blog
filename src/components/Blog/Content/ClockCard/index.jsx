import { useState, useEffect } from 'react';
import './index.css';

const ClockCard = () => {
    useEffect(() => {
        runPerSecond();
        const timeUpdate = setInterval(() => {
            runPerSecond();
        }, 1000);
        return () => {
            clearInterval(timeUpdate);
        };
    });
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const runPerSecond = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const hour = (hours % 12) * (360 / 12) + (360 / 12) * (minutes / 60);
        const minute = minutes * (360 / 60) + (360 / 60) * (seconds / 60);
        const second = seconds * (360 / 60);

        setHour(hour);
        setMinute(minute);
        setSecond(second);
    };

    return (
        <div className="wow bounceInRight" data-wow-duration="0.8s">
            <div className="ClockCard-box">
                <div className="dial"></div>
                <div className="zero"></div>
                <div className="six"></div>
                <div className="three"></div>
                <div className="nine"></div>
                <div className="container">
                    <div className="dot"></div>
                    <div
                        className="point clockMinuteLine"
                        style={{ transform: `rotateZ(${minute}deg)` }}
                    ></div>
                    <div
                        className="point clockHourLine"
                        style={{ transform: `rotateZ(${hour}deg)` }}
                    ></div>
                    <div
                        className="point clockSecondLine"
                        style={{ transform: `rotateZ(${second}deg)` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ClockCard;
