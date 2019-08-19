import Cookies from 'universal-cookie';

export default ({ req, store }: any) => {
  if (process.browser) {
    return;
  }

  const cookies = new Cookies(req.headers.cookie);
  const accessToken = cookies.get('QIITA_ACCESS_TOKEN');

  if (accessToken) {
    store.dispatch('qiita/saveAccessToken', { accessToken });
  }
};
