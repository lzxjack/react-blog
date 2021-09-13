import { UPDATE_CLASS, UPDATE_TAG } from '../constant';

const initState = {
    class: '',
    tag: '',
};

export default function addReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case UPDATE_CLASS:
            return {
                class: data,
                tag: preState.tag,
            };
        case UPDATE_TAG:
            return {
                class: preState.class,
                tag: data,
            };
        default:
            return preState;
    }
}
