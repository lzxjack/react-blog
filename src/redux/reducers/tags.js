import { GET_TAGS } from '../constant';

const initState = [];

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_TAGS:
            return data;
        default:
            return preState;
    }
}
