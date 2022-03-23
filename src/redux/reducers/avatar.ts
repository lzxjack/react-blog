import { SET_AVATAR } from '../constant';

interface Action {
  type: string;
  data: string;
}

const initState = '';

export default function addReducer(preState = initState, action: Action) {
  const { type, data } = action;
  switch (type) {
    case SET_AVATAR:
      return data;
    default:
      return preState;
  }
}
