import { SET_MODE } from '../constant';

interface Action {
  type: string;
  data: number;
}

const initState = 0;

export default function addReducer(preState = initState, action: Action) {
  const { type, data } = action;
  switch (type) {
    case SET_MODE:
      return data;
    default:
      return preState;
  }
}
