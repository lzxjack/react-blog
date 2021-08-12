// import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PageTitle from '../../components/Blog/Content/PageTitle';

import './index.css';

const Classes = props => (
    <>
        <PageTitle title="分类" />
        <div className="standard-page-box animated bounceInLeft">
            {props.classes
                .filter(item => item.count > 0)
                .map(item => (
                    <NavLink
                        className="class-item"
                        to={`/someArticles?class=${item.class}`}
                        key={item._id}
                    >
                        {item.class}
                        <div className="class-count"> {item.count}</div>
                    </NavLink>
                ))}
        </div>
    </>
);

export default connect(
    state => ({
        classes: state.classes,
    }),
    {}
)(Classes);
