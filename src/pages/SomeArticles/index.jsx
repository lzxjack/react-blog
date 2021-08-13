// import { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
                        <NavLink
                            className="class-item"
                            key={item._id}
                            to={`/post?title=${item.titleEng}`}
                        >
                            {item.title}
                        </NavLink>
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
