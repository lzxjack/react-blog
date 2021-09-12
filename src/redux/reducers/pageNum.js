import { SET_HOME_PAGE, SET_ARTICLE_PAGE, SET_CLASS_PAGE, SET_TAG_PAGE } from '../constant';

const initState = {
    homePage: 1,
    articlePage: 1,
    classPage: 1,
    tagPage: 1,
};

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case SET_HOME_PAGE:
            return {
                homePage: data,
                articlePage: preState.articlePage,
                classPage: preState.classPage,
                tagPage: preState.tagPage,
            };
        case SET_ARTICLE_PAGE:
            return {
                homePage: preState.homePage,
                articlePage: data,
                classPage: preState.classPage,
                tagPage: preState.tagPage,
            };
        case SET_CLASS_PAGE:
            return {
                homePage: preState.homePage,
                articlePage: preState.articlePage,
                classPage: data,
                tagPage: preState.tagPage,
            };
        case SET_TAG_PAGE:
            return {
                homePage: preState.homePage,
                articlePage: preState.articlePage,
                classPage: preState.classPage,
                tagPage: data,
            };
        default:
            return preState;
    }
}
