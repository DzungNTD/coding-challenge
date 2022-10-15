/* eslint-disable prettier/prettier */
import {IRequest} from '@services';
import axiosClient from './axiosClient';
const client_id = 'nhFzTaVKqrd1o7IEF5l8MXxuhWpSQyicAInZ2nmjMMg';
const url = 'photos/?client_id=' + client_id;
const photoApi = {
  getAll: () => {
    return axiosClient.get(url);
  },
  getByPage: (params: IRequest) => {
    return axiosClient.get(url, {
      params,
    });
  },
};
export default photoApi;
