import { GET_CUR_PAGE } from '../constant';

const initState = 1;

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_CUR_PAGE:
            return data;
        default:
            return preState;
    }
}
