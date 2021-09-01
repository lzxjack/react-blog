import { connect } from 'react-redux';
import './index.css';

const MyNotice = props => (
    <div className="aside-card MyNotice-box transparent-box">
        <div className="notice">{props.notice}</div>
    </div>
);

export default connect(
    state => ({
        notice: state.notice,
    }),
    {}
)(MyNotice);
