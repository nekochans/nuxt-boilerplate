<template>
  <div class="cat">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Cat extends Vue {
  message: string = '🐱';
}
</script>

<style scoped>
.cat {
  font-size: 10em;
}
</style>
