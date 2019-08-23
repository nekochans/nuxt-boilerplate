import { shallowMount } from '@vue/test-utils';
import Dog from '../../../../src/components/Dog.vue';
import dogTestData from './dogTestData';

describe('🐶', () => {
  it('should be displayed 1 times', () => {
    const wrapper = shallowMount(Dog);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be displayed 3 times', () => {
    const wrapper = shallowMount(Dog, { propsData: { repeatNumber: dogTestData.repeatNumber } });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
