<template>
  <div class="container">
    <profile :qiita-profile="authorizedUser()" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Profile from '../components/Profile.vue';
import { NuxtContext } from '../types/index';

export default Vue.extend({
  components: {
    Profile
  },
  computed: {
    ...mapGetters('qiita', ['authorizedUser'])
  },
  async fetch({ store }: NuxtContext) {
    await store.dispatch('qiita/fetchUser');
  }
});
</script>
