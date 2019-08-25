import url from 'url';
import uuid from 'uuid';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { appUrl, clientId, clientSecret } from '../constants/qiita';

export const createAuthorizationState = (): string => {
  return uuid.v4();
};

export const createAuthorizationUrl = (authorizationState: string): string => {
  return url.format({
    protocol: 'https',
    host: 'qiita.com',
    pathname: '/api/v2/oauth/authorize',
    query: {
      client_id: clientId(),
      scope: 'read_qiita',
      state: authorizationState
    }
  });
};

interface IssueAccessTokenResponse {
  client_id: string;
  scopes: string[];
  token: string;
}

export const issueAccessToken = (
  authorizationCode: string
): Promise<IssueAccessTokenResponse> => {
  return axios
    .post<IssueAccessTokenResponse>('https://qiita.com/api/v2/access_tokens', {
      client_id: clientId(),
      client_secret: clientSecret(),
      code: authorizationCode
    })
    .then((axiosResponse: AxiosResponse) => {
      return Promise.resolve(axiosResponse.data);
    })
    .catch((error: AxiosError) => {
      return Promise.reject(error);
    });
};

interface FetchAuthenticatedUserRequest {
  accessToken: string;
}

interface FetchAuthenticatedUserResponse {
  id: string;
  name: string;
  profile_image_url: string;
  description: string;
}

export const fetchAuthenticatedUser = (
  request: FetchAuthenticatedUserRequest
): Promise<FetchAuthenticatedUserResponse> => {
  return axios
    .get<FetchAuthenticatedUserResponse>(
      'https://qiita.com/api/v2/authenticated_user',
      { headers: { Authorization: `Bearer ${request.accessToken}` } }
    )
    .then((axiosResponse: AxiosResponse) => {
      return Promise.resolve(axiosResponse.data);
    })
    .catch((axiosError: AxiosError) => {
      return Promise.reject(axiosError);
    });
};

export const accessTokenCookieName = () => 'QIITA_ACCESS_TOKEN';

export const authorizationStateCookieName = () => 'AUTHORIZATION_STATE';

export const redirectAuthorizedUrl = () => {
  return `${appUrl()}/my`;
};
