import { storiesOf } from '@storybook/vue';
import catTestData from './catTestData';
// @ts-ignore
import Cat from '@/components/Cat.vue';

storiesOf('Cat', module)
  .add('default', () => ({
    components: { Cat },
    template: '<Cat />'
  }))
  .add('with props', () => ({
    components: { Cat },
    template: `<Cat propsMessage=${catTestData.message} />`
  }));
