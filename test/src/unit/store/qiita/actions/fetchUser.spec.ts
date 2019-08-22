import { createLocalVue } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import Vuex from 'vuex';
import axios from 'axios';
import { actions, mutations } from '../../../../../../src/store/qiita';

const state = {
  accessToken: ''
};

const initStore = () => {
  return cloneDeep({
    state,
    mutations,
    actions
  });
};

jest.mock('axios');

describe('store/qiita/actions/fetchUser', () => {
  // TODO ts-ignoreで誤魔化している箇所が多いので時間がある時に修正する
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
      data: {
        id: 'keitakn',
        name: 'keita koga',
        imageUrl:
          'https://qiita-image-store.s3.amazonaws.com/0/71899/profile-images/1473698980',
        description: '東京でバックエンドエンジニアやってます。'
      }
    };

    // @ts-ignore
    axios.get.mockResolvedValue(mockResponse);

    // @ts-ignore
    await store.dispatch('fetchUser');

    // @ts-ignore
    expect(store.state.user).toStrictEqual(mockResponse.data);
  });
});
