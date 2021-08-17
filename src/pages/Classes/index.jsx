import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';

import './index.css';

const Classes = props => {
    const toSomeArts = myClass => {
        props.history.push(`/artClass?class=${myClass}`);
    };
    return (
        <>
            <PageTitle title="分类" />
            <div className="standard-page-box animated bounceInLeft">
                {props.classes
                    .filter(item => item.count > 0)
                    .map(item => (
                        <div
                            className="class-item"
                            key={item._id}
                            onClick={() => toSomeArts(item.class)}
                        >
                            {item.class}
                            <div className="class-count"> {item.count}</div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default connect(
    state => ({
        classes: state.classes,
    }),
    {}
)(Classes);
