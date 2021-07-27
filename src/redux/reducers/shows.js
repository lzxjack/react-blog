import { GET_SHOWS } from '../constant';

const initState = [];

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_SHOWS:
            return data;
        default:
            return preState;
    }
}
