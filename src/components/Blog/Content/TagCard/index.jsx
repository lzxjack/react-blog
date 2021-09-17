import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';

const TagCard = props => {
    const { history, tags } = props;
    const toSomeArts = tag => {
        history.push(`/artTag?tag=${tag}`);
    };
    return (
        <div className="animated bounceInRight">
            <div className="aside-card TagCard-box theme-color">
                {tags.map(item => (
                    <span
                        className="theTag common-hover"
                        key={item._id}
                        onClick={() => toSomeArts(item.tag)}
                    >
                        {item.tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default withRouter(
    connect(
        state => ({
            tags: state.tags,
        }),
        {}
    )(TagCard)
);
