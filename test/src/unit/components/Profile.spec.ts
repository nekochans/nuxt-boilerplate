import { shallowMount } from '@vue/test-utils';
import Profile from '../../../../src/components/Profile.vue';
import profileTestData from './profileTestData';

describe('components/Profile', () => {
  it('should show the default user', () => {
    const wrapper = shallowMount(Profile);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should show the test user', () => {
    const wrapper = shallowMount(Profile, {
      propsData: { qiitaProfile: profileTestData }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
