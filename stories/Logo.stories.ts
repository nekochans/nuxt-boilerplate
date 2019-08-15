import { storiesOf } from '@storybook/vue';
// @ts-ignore
import Logo from '@/components/Logo.vue';

storiesOf('Logo', module).add('default', () => ({
  components: { Logo },
  template: '<Logo />'
}));
