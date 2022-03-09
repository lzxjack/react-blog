import { SET_COUNT } from './constant';

export const setCount = (data: number) => ({
  type: SET_COUNT,
  data,
});
