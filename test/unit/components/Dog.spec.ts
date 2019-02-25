import { shallowMount } from '@vue/test-utils';
import Dog from '../../../src/components/Dog.vue';

describe('🐶', () => {
  it('should be created a Vue instance', () => {
    const message = '🐶';
    const wrapper = shallowMount(Dog, { propsData: { message } });
    expect(wrapper.text()).toMatch(message);
  });
});
