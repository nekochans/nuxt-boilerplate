import { storiesOf } from '@storybook/vue';
import profileTestData from './profileTestData';
// @ts-ignore
import Profile from '@/components/Profile.vue';

storiesOf('Profile', module).add('with props', () => ({
  components: { Profile },
  template: `<Profile qiita-id=${profileTestData.qiitaId} qiita-name=${profileTestData.qiitaName} qiita-profile-image-url=${profileTestData.qiitaProfileImageUrl} qiita-description=${profileTestData.qiitaDescription} />`
}));
