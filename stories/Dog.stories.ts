import { storiesOf } from '@storybook/vue';
import dogTestData from './dogTestData';
// @ts-ignore
import Dog from '@/components/Dog.vue';

storiesOf('Dog', module)
  .add('default', () => ({
    components: { Dog },
    template: '<Dog />'
  }))
  .add('with props', () => ({
    components: { Dog },
    template: `<Dog propsMessage=${dogTestData.message} />`
  }));
