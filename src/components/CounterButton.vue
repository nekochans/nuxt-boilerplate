<template>
  <div>
    <button class="button is-info counter-button" @click="increment">
      increment
    </button>
    <button class="button is-danger counter-button" @click="decrement">
      decrement
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CounterButton',
  methods: {
    ...mapActions('counter', ['increment', 'decrement'])
  }
};
</script>

<style scoped>
.counter-button {
  margin: 10px;
}
</style>
