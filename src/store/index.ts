import { Context } from '@nuxt/types';
import { GetterTree, ActionContext, ActionTree } from 'vuex';
import Cookies from 'universal-cookie';
import { State as CounterState } from './counter';
import { State as QiitaState } from './qiita';

export type State = {};

export type RootState = {
  counter: CounterState;
  qiita: QiitaState;
};

export interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit: (
    context: ActionContext<S, R>,
    nuxtContext: Context
  ) => Promise<void>;
}

export const state = () => ({});

export const getters: GetterTree<State, RootState> = {};

export const actions: Actions<State, RootState> = {
  nuxtServerInit: async ({ dispatch }, { req, redirect }: Context) => {
    if (req.headers.cookie) {
      const cookies = new Cookies(req.headers.cookie);
      const accessToken = cookies.get('QIITA_ACCESS_TOKEN');
      if (!accessToken) {
        await dispatch('qiita/saveAccessToken', { accessToken: '' });
        return redirect('/');
      }
    } else {
      await dispatch('qiita/saveAccessToken', { accessToken: '' });
    }
  }
};
