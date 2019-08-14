// @ts-ignore
import Cat from '@/components/Cat.vue';
import { storiesOf } from '@storybook/vue';

storiesOf('Cat', module)
  .add('default', () => ({
    components: { Cat },
    template: '<Cat />'
  }))
  .add('with props', () => ({
    components: { Cat },
    template: '<Cat propsMessage="🐱🐱🐱" />'
  }));
