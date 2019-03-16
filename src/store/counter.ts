import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from './index';

export interface State {
  count: number;
}

export const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

export const state = (): State => ({
  count: 0
});

export const getters: GetterTree<State, RootState> = {
  currentCounter: state => () => {
    return { count: state.count };
  }
};

export interface Actions<S, R> extends ActionTree<S, R> {
  increment(context: ActionContext<S, R>): void;
  decrement(context: ActionContext<S, R>): void;
}

export const actions: Actions<State, RootState> = {
  increment: ({ commit }) => {
    commit(types.INCREMENT);
  },
  decrement: ({ commit }) => {
    commit(types.DECREMENT);
  }
};

export const mutations: MutationTree<State> = {
  [types.INCREMENT]: (state: State): void => {
    state.count++;
  },
  [types.DECREMENT]: (state: State): void => {
    state.count--;
  }
};
