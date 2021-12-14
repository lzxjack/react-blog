import { Pagination } from 'antd';
import { articlesPageSize } from '../../../utils/constant';
import './index.css';

const ArticlesNav = ({ curPage, articleNum, setCurPage }) => (
    <div className="PageNav-box">
        <Pagination
            current={curPage}
            total={articleNum}
            defaultPageSize={articlesPageSize}
            showSizeChanger={false}
            showTitle={false}
            hideOnSinglePage={false}
            onChange={page => setCurPage(page)}
        />
    </div>
);

export default ArticlesNav;
