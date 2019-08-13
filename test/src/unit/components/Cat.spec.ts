import { shallowMount } from '@vue/test-utils';
import Cat from '../../../../src/components/Cat.vue';

describe('🐱', () => {
  it('should be created a Vue instance', () => {
    const message = '🐱';
    const wrapper = shallowMount(Cat, { propsData: { message } });
    expect(wrapper.text()).toMatch(message);
  });
});
