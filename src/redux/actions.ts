import { SET_ART_SUM, SET_NAV_SHOW } from './constant';

export const setNavShow = (data: boolean) => ({
  type: SET_NAV_SHOW,
  data
});

export const setArtSum = (data: number) => ({
  type: SET_ART_SUM,
  data
});
