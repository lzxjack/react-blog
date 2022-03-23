import axios, { Method } from 'axios';

export const axiosAPI = (url: string, method: Method, params: object) => {
  return axios({
    url,
    method,
    params,
    withCredentials: true
  })
    .then(res => res.status === 200)
    .catch(() => false);
};
