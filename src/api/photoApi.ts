/* eslint-disable prettier/prettier */
import axiosClient from './axiosClient';

const PhotoApi = {
  getAll: () => {
    const url = 'photos/?client_id=nhFzTaVKqrd1o7IEF5l8MXxuhWpSQyicAInZ2nmjMMg';
    return axiosClient.get(url);
  },
};
export default PhotoApi;
