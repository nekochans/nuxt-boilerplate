import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { httpClient } from '../../../../../../src/infrastructure/api/qiita';
import { actions, mutations } from '../../../../../../src/store/qiita';

describe('store/qiita/actions/fetchUser', () => {
  const mockAxios = new MockAdapter(httpClient);

  const state = {
    accessToken: ''
  };

  const initStore = () => {
    return {
      state,
      mutations,
      actions
    };
  };

  // @ts-ignore
  let store: Vuex.Store;
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(
      // @ts-ignore
      initStore()
    );
  });

  it('should execute the fetchUser action', async () => {
    const mockResponse = {
      id: 'keitakn',
      name: 'keita koga',
      imageUrl:
        'https://qiita-image-store.s3.amazonaws.com/0/71899/profile-images/1473698980',
      description: '東京でバックエンドエンジニアやってます。'
    };

    mockAxios.onGet('/qiita/users').reply(200, mockResponse);

    await store.dispatch('fetchUser');

    expect(store.state.user).toStrictEqual(mockResponse);
  });
});
