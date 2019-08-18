import { storiesOf } from '@storybook/vue';
import profileTestData from './profileTestData';
// @ts-ignore
import Profile from '@/components/Profile.vue';

storiesOf('Profile', module).add('with props', () => ({
  components: { Profile },
  data() {
    return {
      qiitaProfile: {
        id: profileTestData.id,
        name: profileTestData.name,
        imageUrl: profileTestData.imageUrl,
        description: profileTestData.description
      }
    };
  },
  template: `<Profile :qiita-profile="qiitaProfile" />`
}));
