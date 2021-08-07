import { GET_COMMENTS } from '../constant';

const initState = [];

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_COMMENTS:
            return data;
        default:
            return preState;
    }
}
