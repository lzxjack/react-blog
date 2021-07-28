// import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../../../pages/About';
import Articles from '../../../pages/Articles';
import Article from '../../../pages/Article';
import Gallery from '../../../pages/Gallery';
import Home from '../../../pages/Home';
import Link from '../../../pages/Link';
import Log from '../../../pages/Log';
import Msg from '../../../pages/Msg';
import Say from '../../../pages/Say';
import Show from '../../../pages/Show';

import './index.css';

const Content = () => (
    <>
        <div className="nav-bottm"></div>
        {/* 整个页面 */}
        <div className="Content-box">
            {/* 通栏 */}
            <div className="content-center">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/articles" component={Articles} />
                    <Route path="/article" component={Article} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/say" component={Say} />
                    <Route path="/msg" component={Msg} />
                    <Route path="/link" component={Link} />
                    <Route path="/show" component={Show} />
                    <Route path="/about" component={About} />
                    <Route path="/log" component={Log} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    </>
);

export default Content;
