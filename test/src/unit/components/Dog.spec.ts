import { shallowMount } from '@vue/test-utils';
import Dog from '../../../../src/components/Dog.vue';
import dogTestData from '../../../../stories/dogTestData';

describe('🐶', () => {
  it('should be created a Vue instance', () => {
    const message = dogTestData.message;
    const wrapper = shallowMount(Dog, { propsData: { propsMessage: message } });
    expect(wrapper.text()).toMatch(message);
  });
});
