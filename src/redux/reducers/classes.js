import { GET_CLASSES } from '../constant';

const initState = [];

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case GET_CLASSES:
            return data;
        default:
            return preState;
    }
}
