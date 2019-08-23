import { shallowMount } from '@vue/test-utils';
import Cat from '../../../../src/components/Cat.vue';
import catTestData from './catTestData';

describe('🐱', () => {
  it('should be displayed 1 times', () => {
    const wrapper = shallowMount(Cat);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be displayed 3 times', () => {
    const wrapper = shallowMount(Cat, { propsData: { repeatNumber: catTestData.repeatNumber } });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
