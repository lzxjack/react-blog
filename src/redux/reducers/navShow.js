import { SET_NAV_SHOW } from '../constant';

const initState = true;

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case SET_NAV_SHOW:
            return data;
        default:
            return preState;
    }
}
