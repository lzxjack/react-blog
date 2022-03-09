import { SET_NAV_SHOW } from './constant';

export const setNavShow = (data: boolean) => ({
  type: SET_NAV_SHOW,
  data,
});
