<template>
  <section class="container">
    <Error />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Error from '../components/Error.vue';

export default Vue.extend({
  components: {
    Error
  }
});
</script>
