import { Pagination } from 'antd';
import { articlesPageSize } from '../../../utils/constant';
import './index.css';

const ArticlesNav = props => {
    const { curPage, articleNum, setCurPage } = props;
    return (
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
};

export default ArticlesNav;
