<template>
  <div class="container">
    <profile :qiita-profile="profile" />
  </div>
</template>

<script>
import Vue from 'vue';
import Profile from '../components/Profile.vue';

export default Vue.extend({
  components: {
    Profile
  },
  data() {
    const qiitaProfile = {
      id: 'qiita',
      name: 'Qiitaキータ',
      imageUrl:
        'https://qiita-image-store.s3.amazonaws.com/0/88/profile-images/1512392618',
      description:
        'Qiita公式アカウントです。Qiitaに関するお問い合わせに反応したり、お知らせなどを発信しています。'
    };

    return {
      profile: qiitaProfile
    };
  }
});
</script>
