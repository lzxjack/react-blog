import { GET_ARTICLES } from '../constant';

const initState = [];

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_ARTICLES:
            return data;
        default:
            return preState;
    }
}
