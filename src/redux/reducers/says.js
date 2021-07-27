import { GET_SAYS } from '../constant';

const initState = [];

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_SAYS:
            return data;
        default:
            return preState;
    }
}
