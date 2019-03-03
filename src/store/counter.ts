import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';

export interface State {
  counter: number;
}

export const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

export const state = (): State => ({
  counter: 0
});

export const getters: GetterTree<State, {}> = {
  currentCounter: state => () => {
    return { counter: state.counter };
  }
};

export interface Actions<S, R> extends ActionTree<S, R> {
  increment(context: ActionContext<S, R>): void;
  decrement(context: ActionContext<S, R>): void;
}

export const actions: Actions<State, {}> = {
  increment: ({ commit }) => {
    commit(types.INCREMENT);
  },
  decrement: ({ commit }) => {
    commit(types.DECREMENT);
  }
};

export const mutations: MutationTree<State> = {
  [types.INCREMENT]: (state): void => {
    state.counter++;
  },
  [types.DECREMENT]: (state): void => {
    state.counter--;
  }
};
