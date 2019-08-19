import { NuxtContext } from '~/types';

export default function({ store, redirect, route }: NuxtContext) {
  const notRequiredAuthorization = ['/', '/counter'];

  if (notRequiredAuthorization.includes(route.path)) {
    return;
  }

  if (store.getters['qiita/isAuthorized']() === false) {
    return redirect('/');
  }
}
