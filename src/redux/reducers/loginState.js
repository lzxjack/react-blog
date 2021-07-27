import { LOGIN } from '../constant';

const initState = false;

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case LOGIN:
            return data;
        default:
            return preState;
    }
}
