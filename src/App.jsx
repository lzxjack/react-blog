import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { db, auth, _ } from './utils/cloudBase';
// import moment from 'moment';
import { login } from './redux/actions';
import {
    getClasses,
    getTags,
    getPoem,
    getArticles,
    getGalleries,
    getSays,
    getLinks,
    getShows,
    getAbout,
    getLogs,
    getSiteCount,
    getComments,
    getCommentsReply,
    getMsgs,
    getMsgsReply,
    getNotice,
} from './redux/actions';
import { count_id } from './utils/constant';
import Loading from './components/Loading';
import Blog from './components/Blog';

const App = props => {
    // 匿名登录函数
    const anonymousLogin = async () => {
        await auth.anonymousAuthProvider().signIn();
        const anonymousLoginState = await auth.getLoginState();
        // 匿名登录状态给redux
        props.login(anonymousLoginState.isAnonymousAuth);
    };
    // 匿名登录
    useEffect(() => {
        // 检验是否已经匿名登录
        if (auth.hasLoginState()) {
            props.login(true);
        } else {
            // 未登录，执行登录流程
            anonymousLogin();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [done, setDone] = useState(false);
    useEffect(() => {
        if (!props.tags.length) return;
        if (!props.classes.length) return;
        if (!props.articles.length) return;
        if (JSON.stringify(props.poem) === '{}') return;
        if (!props.galleries.length) return;
        if (!props.links.length) return;
        if (!props.logs.length) return;
        if (!props.says.length) return;
        if (!props.shows.length) return;
        if (!props.comments.length) return;
        if (!props.commentsReply.length) return;
        if (!props.msgs.length) return;
        if (!props.msgsReply.length) return;
        if (!props.about.length) return;
        if (!props.siteCount) return;
        if (!props.notice) return;
        setDone(true);
    }, [props]);

    // 每日诗句
    const getDailyPoem = () => {
        require('jinrishici').load(res => {
            const obj = {
                content: res.data.content,
                ip: res.ipAddress,
                // date: moment().format('YYYY-MM-DD'),
            };
            props.getPoem(obj);
        });
    };
    // 向数据库获取各类数据
    const getDataFromDB = dbName => {
        db.collection(dbName)
            .get()
            .then(res => {
                switch (dbName) {
                    case 'articles': {
                        res.data.sort((a, b) => b.date - a.date);
                        props.getArticles(res.data);
                        break;
                    }
                    case 'classes': {
                        props.getClasses(res.data);
                        break;
                    }
                    case 'tags': {
                        props.getTags(res.data);
                        break;
                    }
                    case 'about': {
                        props.getAbout(res.data);
                        break;
                    }
                    case 'galleries': {
                        props.getGalleries(res.data);
                        break;
                    }
                    case 'links': {
                        props.getLinks(res.data);
                        break;
                    }
                    case 'logs': {
                        res.data.sort((a, b) => b.date - a.date);
                        props.getLogs(res.data);
                        break;
                    }
                    case 'says': {
                        res.data.sort((a, b) => b.date - a.date);
                        props.getSays(res.data);
                        break;
                    }
                    case 'shows': {
                        props.getShows(res.data);
                        break;
                    }
                    case 'allComments': {
                        const comments = res.data
                            .filter(item => item.postTitle && !item.replyId)
                            .sort((a, b) => b.date - a.date);
                        const commentsReply = res.data.filter(
                            item => item.postTitle && item.replyId
                        );
                        const msgs = res.data
                            .filter(item => !item.postTitle && !item.replyId)
                            .sort((a, b) => b.date - a.date);
                        const msgsReply = res.data.filter(item => !item.postTitle && item.replyId);
                        props.getComments(comments);
                        props.getCommentsReply(commentsReply);
                        props.getMsgs(msgs);
                        props.getMsgsReply(msgsReply);
                        break;
                    }
                    case 'notice': {
                        props.getNotice(res.data[0].notice);
                        break;
                    }
                    default:
                        break;
                }
            });
    };
    const getSiteCountFromDB = () => {
        db.collection('siteCount')
            .doc(count_id)
            .update({
                count: _.inc(1),
            })
            .then(() => {
                db.collection('siteCount')
                    .doc(count_id)
                    .get()
                    .then(res => {
                        props.getSiteCount(res.data[0].count);
                    });
            });
    };
    // 获取各类数据
    useEffect(() => {
        if (!props.loginState) return;
        getSiteCountFromDB();
        getDailyPoem();
        getDataFromDB('articles');
        getDataFromDB('classes');
        getDataFromDB('tags');
        getDataFromDB('about');
        getDataFromDB('galleries');
        getDataFromDB('links');
        getDataFromDB('logs');
        getDataFromDB('says');
        getDataFromDB('shows');
        getDataFromDB('allComments');
        getDataFromDB('notice');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.loginState]);
    return <>{done ? <Blog /> : <Loading />}</>;
};

export default connect(
    state => ({
        loginState: state.loginState,
        tags: state.tags,
        classes: state.classes,
        articles: state.articles,
        poem: state.poem,
        galleries: state.galleries,
        links: state.links,
        logs: state.logs,
        says: state.says,
        shows: state.shows,
        about: state.about,
        siteCount: state.siteCount,
        comments: state.comments,
        commentsReply: state.commentsReply,
        msgs: state.msgs,
        msgsReply: state.msgsReply,
        notice: state.notice,
    }),
    {
        login,
        getClasses,
        getTags,
        getPoem,
        getArticles,
        getGalleries,
        getSays,
        getLinks,
        getShows,
        getAbout,
        getLogs,
        getSiteCount,
        getComments,
        getCommentsReply,
        getMsgs,
        getMsgsReply,
        getNotice,
    }
)(App);
