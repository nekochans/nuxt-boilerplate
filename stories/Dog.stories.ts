import { storiesOf } from '@storybook/vue';
// @ts-ignore
import Dog from '@/components/Dog.vue';
import dogTestData from '../test/src/unit/components/dogTestData';

storiesOf('Dog', module)
  .add('should be displayed 1 times', () => ({
    components: { Dog },
    template: '<Dog />'
  }))
  .add('should be displayed 3 times', () => ({
    components: { Dog },
    template: `<Dog repeatNumber=${dogTestData.repeatNumber} />`
  }));
