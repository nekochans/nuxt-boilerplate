import { Context } from '@nuxt/vue-app';
import { GetterTree, ActionContext, ActionTree } from 'vuex';
import { State as CounterState } from './counter';

export type State = {};

export type RootState = {
  counter: CounterState;
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
  // eslint-disable-next-line require-await
  nuxtServerInit: async ({ dispatch }, { req }: Context) => {
    // eslint-disable-next-line no-console
    console.log(req.headers);
  }
};
