import { GET_MSGS_REPLY } from '../constant';

const initState = [];

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_MSGS_REPLY:
            return data;
        default:
            return preState;
    }
}
