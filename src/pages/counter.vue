<template>
  <div class="container">
    <CurrentCount />
    <CounterButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CurrentCount from '../components/CurrentCount.vue';
import CounterButton from '../components/CounterButton.vue';

export default Vue.extend({
  components: {
    CurrentCount,
    CounterButton
  }
});
</script>

<style scoped>
.container {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
