import './index.css';

const ArticleTags = props => {
    return (
        <div className="standard-page-tags">
            {props.tags.map(item => (
                <span className="tag common-hover" key={item}>
                    {item}
                </span>
            ))}
        </div>
    );
};

export default ArticleTags;
