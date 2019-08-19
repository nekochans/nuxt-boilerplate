import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from '~/store/index';

export interface State {
  accessToken: string;
}

export const types = {
  SAVE_ACCESS_TOKEN: 'SAVE_ACCESS_TOKEN'
};

export const state = (): State => ({
  accessToken: ''
});

export const getters: GetterTree<State, RootState> = {
  accessToken: state => () => {
    return { accessToken: state.accessToken };
  },
  isAuthorized: state => (): boolean => {
    return !!state.accessToken;
  }
};

export interface SaveAccessTokenPayload {
  accessToken: string;
}

export interface Actions<S, R> extends ActionTree<S, R> {
  saveAccessToken(
    context: ActionContext<S, R>,
    payload: SaveAccessTokenPayload
  ): void;
}

export const actions: Actions<State, RootState> = {
  saveAccessToken: ({ commit }, { accessToken }: SaveAccessTokenPayload) => {
    commit(types.SAVE_ACCESS_TOKEN, { accessToken });
  }
};

export const mutations: MutationTree<State> = {
  [types.SAVE_ACCESS_TOKEN]: (
    state: State,
    { accessToken }: SaveAccessTokenPayload
  ): void => {
    state.accessToken = accessToken;
  }
};
