import { useEffect } from 'react';
import { connect } from 'react-redux';
import { db, auth, _ } from './utils/cloudBase';
import moment from 'moment';
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
    // 每日诗句
    const getDailyPoem = () => {
        require('jinrishici').load(res => {
            const obj = {
                content: res.data.content,
                title: res.data.origin.title,
                ip: res.ipAddress,
                date: moment().format('YYYY-MM-DD'),
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
                        props.getLogs(res.data);
                        break;
                    }
                    case 'says': {
                        props.getSays(res.data);
                        break;
                    }
                    case 'shows': {
                        props.getShows(res.data);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.loginState]);
    return <>{props.loginState ? <Blog /> : <Loading />}</>;
    // return <>{false ? <Blog /> : <Loading />}</>;
};

export default connect(state => ({ loginState: state.loginState }), {
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
})(App);
