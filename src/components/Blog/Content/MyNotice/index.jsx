import { connect } from 'react-redux';
import './index.css';

const MyNotice = ({ notice }) => (
    <div className="animated bounceInRight">
        <div className="aside-card MyNotice-box theme-color">
            <div className="notice">{notice}</div>
        </div>
    </div>
);

export default connect(
    state => ({
        notice: state.notice,
    }),
    {}
)(MyNotice);
