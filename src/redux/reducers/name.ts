import { SET_NAME } from '../constant';

interface Action {
  type: string;
  data: string;
}

const initState = '';

export default function addReducer(preState = initState, action: Action) {
  const { type, data } = action;
  switch (type) {
    case SET_NAME:
      return data;
    default:
      return preState;
  }
}
