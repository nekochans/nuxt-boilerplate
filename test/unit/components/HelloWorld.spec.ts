import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../../../src/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('should be created a Vue instance', () => {
    const message = 'Hello world !';
    const wrapper = shallowMount(HelloWorld, { propsData: { message } });
    expect(wrapper.text()).toMatch(message);
  });
});
