import axios, { AxiosError, AxiosResponse } from 'axios';
import { FetchQiitaUser, QiitaUser } from '~/domain/qiita';

export const fetchQiitaUser = (
  accessToken: string
): Promise<FetchQiitaUser> => {
  const url = `${process.env.appUrl}/api/qiita/users`;
  return axios
    .get<QiitaUser>(url, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then((axiosResponse: AxiosResponse) => {
      return Promise.resolve(axiosResponse.data);
    })
    .catch((axiosError: AxiosError) => {
      return Promise.reject(axiosError);
    });
};
