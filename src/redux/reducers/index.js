import { combineReducers } from 'redux';

import loginState from './loginState';
import tags from './tags';
import classes from './classes';
import articles from './articles';
import poem from './poem';

import galleries from './galleries';
import links from './links';
import logs from './logs';
import says from './says';
import shows from './shows';
import comments from './comments';
import about from './about';

import siteCount from './siteCount';

import navShow from './navShow';

export default combineReducers({
    loginState,
    tags,
    classes,
    articles,
    poem,
    galleries,
    links,
    logs,
    says,
    shows,
    comments,
    about,
    siteCount,
    navShow,
});
