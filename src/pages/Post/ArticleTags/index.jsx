import { withRouter } from 'react-router-dom';
import './index.css';

const ArticleTags = ({ history, tags }) => {
    const toSomeArts = tag => {
        history.push(`/artTag?tag=${tag}`);
    };
    return (
        <div className="standard-page-tags">
            {tags.map(item => (
                <span
                    className="tag theme-color-1 common-hover"
                    key={item}
                    onClick={() => toSomeArts(item)}
                >
                    {item}
                </span>
            ))}
        </div>
    );
};

export default withRouter(ArticleTags);
