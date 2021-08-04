import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import moment from 'moment';
import './index.css';

const TimeLine = props => (
    <div className="TimeLine-box">
        {props.logs.map(item => (
            <div className="time-line-item" key={item._id}>
                <div className="time-line-text">
                    <div className="time-line-time">
                        <div className="time-dot">
                            <div className="time-dot-in"></div>
                        </div>
                        {moment(item.date).format('YYYY-MM-DD')}
                    </div>
                    <div key={item._id} className="wow bounceInRight" data-wow-duration="0.8s">
                        <ul className="time-line-content">
                            {item.logContent.map(log => (
                                <li key={nanoid()}>{log}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default connect(
    state => ({
        logs: state.logs,
    }),
    {}
)(TimeLine);
