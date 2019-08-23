import { storiesOf } from '@storybook/vue';
import catTestData from '../test/unit/src/components/catTestData';
// @ts-ignore
import Cat from '@/components/Cat.vue';

storiesOf('Cat', module)
  .add('should be displayed 1 times', () => ({
    components: { Cat },
    template: '<Cat />'
  }))
  .add('should be displayed 3 times', () => ({
    components: { Cat },
    template: `<Cat repeatNumber=${catTestData.repeatNumber} />`
  }));
