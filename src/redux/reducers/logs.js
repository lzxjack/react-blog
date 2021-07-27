import { GET_LOGS } from '../constant';

const initState = [];

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_LOGS:
            return data;
        default:
            return preState;
    }
}
