import { GET_SITE_COUNT } from '../constant';

const initState = 0;

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_SITE_COUNT:
            return data;
        default:
            return preState;
    }
}
