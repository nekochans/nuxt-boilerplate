import Cookies from 'universal-cookie';
import { Context, Middleware } from '@nuxt/types';

const authCookieMiddleware: Middleware = ({ req, store }: Context) => {
  if (process.browser) {
    return;
  }

  const cookies = new Cookies(req.headers.cookie);
  const accessToken = cookies.get('QIITA_ACCESS_TOKEN');

  if (accessToken) {
    store.dispatch('qiita/saveAccessToken', { accessToken });
  }
};

export default authCookieMiddleware;
