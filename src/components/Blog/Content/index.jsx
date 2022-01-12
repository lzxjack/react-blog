import { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './index.css';

const About = lazy(() => import('../../../pages/About'));
const Articles = lazy(() => import('../../../pages/Articles'));
const Post = lazy(() => import('../../../pages/Post'));
const Gallery = lazy(() => import('../../../pages/Gallery'));
const Home = lazy(() => import('../../../pages/Home'));
const Link = lazy(() => import('../../../pages/Link'));
const Log = lazy(() => import('../../../pages/Log'));
const Msg = lazy(() => import('../../../pages/Msg'));
const Say = lazy(() => import('../../../pages/Say'));
const Show = lazy(() => import('../../../pages/Show'));
const Classes = lazy(() => import('../../../pages/Classes'));
const Tags = lazy(() => import('../../../pages/Tags'));
const ArtClass = lazy(() => import('../../../pages/ArtClass'));
const ArtTag = lazy(() => import('../../../pages/ArtTag'));

const Content = () => (
    <>
        {/* <div className="nav-bottm"></div> */}
        {/* 整个页面 */}
        <div className="Content-box">
            {/* 通栏 */}
            <div className="content-center">
                <Suspense fallback={null}>
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
                </Suspense>
            </div>
        </div>
    </>
);

export default Content;
