<template>
  <div class="dog">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dog extends Vue {
  message: string = '🐶';
}
</script>

<style scoped>
.dog {
  font-size: 10em;
}
</style>
