<template>
  <div class="dog">
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';

interface IDog extends Vue {
  message: string;
}

export { IDog as interface };

export default {
  data() {
    return {
      message: '🐶'
    };
  }
} as ComponentOptions<IDog>;
</script>

<style scoped>
.dog {
  font-size: 10em;
}
</style>
