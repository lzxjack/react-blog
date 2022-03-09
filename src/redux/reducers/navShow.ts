import { SET_NAV_SHOW } from '../constant';

type Action = {
  type: string;
  data: boolean;
};

const initState = true;

export default function addReducer(preState = initState, action: Action) {
  const { type, data } = action;
  switch (type) {
    case SET_NAV_SHOW:
      return data;
    default:
      return preState;
  }
}
