import Logo from '../../../src/components/Logo.vue';
import { mount } from '@vue/test-utils';

describe('Logo', () => {
  it('should be created a Vue instance', () => {
    const wrapper = mount(Logo);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
