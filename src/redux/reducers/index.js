import { combineReducers } from 'redux';

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
import msgs from './msgs';
import about from './about';
import msgsReply from './msgsReply';
import commentsReply from './commentsReply';

import siteCount from './siteCount';

import navShow from './navShow';
import notice from './notice';

import pageNum from './pageNum';

export default combineReducers({
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
    msgs,
    msgsReply,
    commentsReply,
    notice,
    pageNum,
});
