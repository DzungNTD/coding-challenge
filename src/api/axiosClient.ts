/* eslint-disable prettier/prettier */
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: 'https://api.unsplash.com/',
  // headers: {
  //   "content-type": "application/json",
  // },
  paramsSerializer: {
    encode: (params: any) => queryString.stringify(params),
  },
});
axiosClient.interceptors.request.use(async config => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    // Handle errors
    console.log('error axiosClient: ', error);
    throw error;
  },
);
export default axiosClient;
