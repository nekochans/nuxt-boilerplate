<template>
  <main>
    <div class="container has-text-centered">
      <h1 class="title">
        Error
      </h1>
      <h2 class="subtitle">
        {{ message }}
      </h2>
      <nuxt-link to="/">
        TOPページへ
      </nuxt-link>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    errorMessage: {
      type: String,
      default: 'エラーが発生しました🐱',
      required: false
    }
  },
  data() {
    return {
      message: this.errorMessage
    };
  }
});
</script>

<style scoped>
.subtitle {
  padding-top: 1rem;
}
</style>
