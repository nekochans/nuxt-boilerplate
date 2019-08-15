<template>
  <div class="dog">
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    propsMessage: {
      type: String,
      default: '🐶',
      required: false
    }
  },
  data() {
    return {
      message: this.propsMessage
    };
  }
});
</script>

<style scoped>
.dog {
  font-size: 10em;
}
</style>
