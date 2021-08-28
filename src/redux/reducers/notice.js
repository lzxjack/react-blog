import { GET_NOTICE } from '../constant';

const initState = '';

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_NOTICE:
            return data;
        default:
            return preState;
    }
}
