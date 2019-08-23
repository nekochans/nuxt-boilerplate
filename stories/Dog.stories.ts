import { storiesOf } from '@storybook/vue';
// @ts-ignore
import dogTestData from '../test/src/unit/components/dogTestData';
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
