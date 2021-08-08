import { GET_MSGS } from '../constant';

const initState = [];

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_MSGS:
            return data;
        default:
            return preState;
    }
}
