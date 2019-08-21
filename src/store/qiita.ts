import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex';
import { RootState } from '~/store/index';
import { QiitaUser } from '~/domain/qiita';
import { fetchQiitaUser } from '~/infrastructure/api/qiita';

export interface State {
  accessToken: string;
  user?: QiitaUser;
}

export const types = {
  SAVE_ACCESS_TOKEN: 'SAVE_ACCESS_TOKEN',
  SAVE_USER: 'SAVE_USER'
};

export const state = (): State => ({
  accessToken: ''
});

export const getters: GetterTree<State, RootState> = {
  accessToken: state => (): string => {
    return state.accessToken;
  },
  isAuthorized: state => (): boolean => {
    return !!state.accessToken;
  },
  authorizedUser: state => () => {
    return state.user;
  }
};

export interface SaveAccessTokenPayload {
  accessToken: string;
}

export interface FetchUserPayload {
  accessToken: string;
}

export interface SaveUserPayload {
  user: QiitaUser;
}

export interface Actions<S, R> extends ActionTree<S, R> {
  saveAccessToken(
    context: ActionContext<S, R>,
    payload: SaveAccessTokenPayload
  ): void;
  fetchUser(context: ActionContext<S, R>): void;
}

export const actions: Actions<State, RootState> = {
  saveAccessToken: ({ commit }, { accessToken }: SaveAccessTokenPayload) => {
    commit(types.SAVE_ACCESS_TOKEN, { accessToken });
  },
  fetchUser: async ({ commit, state }) => {
    const user = await fetchQiitaUser(state.accessToken);
    commit(types.SAVE_USER, { user });
  }
};

export const mutations: MutationTree<State> = {
  [types.SAVE_ACCESS_TOKEN]: (
    state: State,
    { accessToken }: SaveAccessTokenPayload
  ): void => {
    state.accessToken = accessToken;
  },
  [types.SAVE_USER]: (state: State, { user }: SaveUserPayload): void => {
    state.user = user;
  }
};
