import { shallowMount } from '@vue/test-utils';
import Cat from '../../../../src/components/Cat.vue';
import catTestData from '../../../../stories/catTestData';

describe('🐱', () => {
  it('should be created a Vue instance', () => {
    const message = catTestData.message;
    const wrapper = shallowMount(Cat, { propsData: { propsMessage: message } });
    expect(wrapper.text()).toMatch(message);
  });
});
