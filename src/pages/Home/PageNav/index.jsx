import { connect } from 'react-redux';
import { Pagination } from 'antd';
import { homePageSize } from '../../../utils/constant';
import './index.css';

const PageNav = ({ curPage, articleNum, setCurPage }) => (
    <div className="PageNav-box animated bounceInLeft">
        <Pagination
            current={curPage}
            total={articleNum}
            defaultPageSize={homePageSize}
            showSizeChanger={false}
            showTitle={false}
            onChange={page => setCurPage(page)}
        />
    </div>
);

export default connect(
    state => ({
        articleNum: state.articles.length,
    }),
    {}
)(PageNav);
