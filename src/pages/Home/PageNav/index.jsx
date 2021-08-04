import { connect } from 'react-redux';
import { Pagination } from 'antd';
import { homePageSize } from '../../../utils/constant';
import './index.css';

const PageNav = props => (
    <div className="PageNav-box wow bounceInLeft">
        <Pagination
            current={props.curPage}
            total={props.articleNum}
            defaultPageSize={homePageSize}
            showSizeChanger={false}
            showTitle={false}
            onChange={page => props.setCurPage(page)}
        />
    </div>
);

export default connect(
    state => ({
        articleNum: state.articles.length,
    }),
    {}
)(PageNav);
