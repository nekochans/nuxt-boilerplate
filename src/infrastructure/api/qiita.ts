import axios, { AxiosError, AxiosResponse } from 'axios';
import { FetchQiitaUser, QiitaUser } from '~/domain/qiita';

export const httpClient = axios.create({
  baseURL: `${process.env.appUrl}/api`,
  timeout: 5000
});

export const fetchQiitaUser = (
  accessToken: string
): Promise<FetchQiitaUser> => {
  return httpClient
    .get<QiitaUser>('/qiita/users', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then((axiosResponse: AxiosResponse) => {
      return Promise.resolve(axiosResponse.data);
    })
    .catch((axiosError: AxiosError) => {
      return Promise.reject(axiosError);
    });
};
