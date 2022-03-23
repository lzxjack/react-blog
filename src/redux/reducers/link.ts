import { SET_LINK } from '../constant';

interface Action {
  type: string;
  data: string;
}

const initState = '';

export default function addReducer(preState = initState, action: Action) {
  const { type, data } = action;
  switch (type) {
    case SET_LINK:
      return data;
    default:
      return preState;
  }
}
