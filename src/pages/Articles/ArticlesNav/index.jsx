import { Pagination } from 'antd';
import { articlesPageSize } from '../../../utils/constant';
import './index.css';

const ArticlesNav = props => (
    <div className="PageNav-box">
        <Pagination
            current={props.curPage}
            total={props.articleNum}
            defaultPageSize={articlesPageSize}
            showSizeChanger={false}
            showTitle={false}
            hideOnSinglePage={false}
            onChange={page => props.setCurPage(page)}
        />
    </div>
);

export default ArticlesNav;
