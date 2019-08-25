<template>
  <div class="container">
    <profile :qiita-profile="authorizedUser()" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { Context } from '@nuxt/types';
import Profile from '../components/Profile.vue';

export default Vue.extend({
  components: {
    Profile
  },
  computed: {
    ...mapGetters('qiita', ['authorizedUser'])
  },
  async fetch({ store }: Context) {
    await store.dispatch('qiita/fetchUser');
  }
});
</script>
