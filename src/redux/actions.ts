import {
  SET_ART_SUM,
  SET_AVATAR,
  SET_EMAIL,
  SET_LINK,
  SET_MODE,
  SET_NAME,
  SET_NAV_SHOW
} from './constant';

export const setNavShow = (data: boolean) => ({
  type: SET_NAV_SHOW,
  data
});

export const setArtSum = (data: number) => ({
  type: SET_ART_SUM,
  data
});

export const setName = (data: string) => ({
  type: SET_NAME,
  data
});
export const setEmail = (data: string) => ({
  type: SET_EMAIL,
  data
});
export const setLink = (data: string) => ({
  type: SET_LINK,
  data
});
export const setAvatar = (data: string) => ({
  type: SET_AVATAR,
  data
});

export const setMode = (data: string) => ({
  type: SET_MODE,
  data
});
