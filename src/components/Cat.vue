<template>
  <div class="cat">
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';

interface ICat extends Vue {
  message: string;
}

export { ICat as interface };

export default {
  data() {
    return {
      message: '🐱'
    };
  }
} as ComponentOptions<ICat>;
</script>

<style scoped>
.cat {
  font-size: 10em;
}
</style>
