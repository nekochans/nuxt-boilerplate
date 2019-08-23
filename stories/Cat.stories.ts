import { storiesOf } from '@storybook/vue';
// @ts-ignore
import catTestData from '../test/src/unit/components/catTestData';
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
