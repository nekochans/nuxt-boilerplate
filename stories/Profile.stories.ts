import { storiesOf } from '@storybook/vue';
import profileTestData from '../test/src/unit/components/profileTestData';
// @ts-ignore
import Profile from '@/components/Profile.vue';

storiesOf('Profile', module)
  .add('should show the default user', () => ({
    components: { Profile },
    template: `<Profile />`
  }))
  .add('should show the test user', () => ({
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
