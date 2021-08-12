// import { useEffect } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../components/Blog/Content/PageTitle';

import './index.css';

const SomeArticles = props => {
    return (
        <>
            <PageTitle title={props.location.search.split('?class=')[1]} />
            <div className="standard-page-box animated bounceInLeft">
                {props.articles
                    .filter(item => item.classes === props.location.search.split('?class=')[1])
                    .map(item => (
                        <div className="class-item" key={item._id}>
                            {item.title}
                        </div>
                    ))}
            </div>
        </>
    );
};
export default connect(
    state => ({
        articles: state.articles,
    }),
    {}
)(SomeArticles);
