import { homeSize } from '@/utils/constant';

import { SET_ART_SUM } from '../constant';

interface Action {
  type: string;
  data: number;
}

const initState = homeSize;

export default function addReducer(preState = initState, action: Action) {
  const { type, data } = action;
  switch (type) {
    case SET_ART_SUM:
      return data;
    default:
      return preState;
  }
}
