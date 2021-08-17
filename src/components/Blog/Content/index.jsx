// import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../../../pages/About';
import Articles from '../../../pages/Articles';
import Post from '../../../pages/Post';
import Gallery from '../../../pages/Gallery';
import Home from '../../../pages/Home';
import Link from '../../../pages/Link';
import Log from '../../../pages/Log';
import Msg from '../../../pages/Msg';
import Say from '../../../pages/Say';
import Show from '../../../pages/Show';
import Classes from '../../../pages/Classes';
import Tags from '../../../pages/Tags';
import ArtClass from '../../../pages/ArtClass';
import ArtTag from '../../../pages/ArtTag';

import './index.css';

const Content = () => {
    return (
        <>
            <div className="nav-bottm"></div>
            {/* 整个页面 */}
            <div className="Content-box">
                {/* 通栏 */}
                <div className="content-center">
                    <Switch>
                        <Route path="/articles" component={Articles} />
                        <Route path="/artClass" component={ArtClass} />
                        <Route path="/artTag" component={ArtTag} />
                        <Route path="/classes" component={Classes} />
                        <Route path="/tags" component={Tags} />
                        <Route path="/post" component={Post} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/say" component={Say} />
                        <Route path="/msg" component={Msg} />
                        <Route path="/link" component={Link} />
                        <Route path="/show" component={Show} />
                        <Route path="/about" component={About} />
                        <Route path="/log" component={Log} />
                        <Route path="/" exact component={Home} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default Content;
