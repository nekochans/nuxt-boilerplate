import { mount } from '@vue/test-utils';
import Logo from '../../../../src/components/Logo.vue';

describe('Logo', () => {
  it('should be created a Vue instance', () => {
    const wrapper = mount(Logo);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
