<template>
  <div class="cat">
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    repeatNumber: {
      type: Number,
      default: 1,
      required: false
    }
  },
  data() {
    return {
      message: '🐱'.repeat(this.repeatNumber)
    };
  }
});
</script>

<style scoped>
.cat {
  font-size: 10em;
}
</style>
