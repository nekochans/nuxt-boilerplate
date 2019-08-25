import { Context, Middleware } from '@nuxt/types';

const redirectMiddleware: Middleware = ({
  store,
  redirect,
  route
}: Context) => {
  const notRequiredAuthorization = ['/', '/counter'];

  if (notRequiredAuthorization.includes(route.path)) {
    return;
  }

  if (store.getters['qiita/isAuthorized']() === false) {
    return redirect('/');
  }
};

export default redirectMiddleware;
