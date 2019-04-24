<template>
  <div class="cat">
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      message: '🐱'
    };
  }
});
</script>

<style scoped>
.cat {
  font-size: 10em;
}
</style>
