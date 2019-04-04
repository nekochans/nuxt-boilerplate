import uuid from 'uuid';
import url from 'url';
import { clientId } from './constants/qiita';

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
