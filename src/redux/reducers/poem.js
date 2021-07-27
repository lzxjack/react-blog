import { GET_POEM } from '../constant';

const initState = {};

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_POEM:
            return data;
        default:
            return preState;
    }
}
