import { storiesOf } from '@storybook/vue';
import dogTestData from '../test/unit/src/components/dogTestData';
// @ts-ignore
import Dog from '@/components/Dog.vue';

storiesOf('Dog', module)
  .add('should be displayed 1 times', () => ({
    components: { Dog },
    template: '<Dog />'
  }))
  .add('should be displayed 3 times', () => ({
    components: { Dog },
    template: `<Dog repeatNumber=${dogTestData.repeatNumber} />`
  }));
