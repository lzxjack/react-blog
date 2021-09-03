import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';
import TimeLine from './TimeLine';
import { setNavShow } from '../../redux/actions';
import useToTop from '../../hooks/useToTop';
import './index.css';

const Log = props => {
    // 返回顶部
    useToTop(props, true);
    return (
        <>
            <PageTitle title="建站日志" />
            <div className="standard-page-box">
                <TimeLine />
            </div>
        </>
    );
};

export default connect(() => ({}), { setNavShow })(Log);
