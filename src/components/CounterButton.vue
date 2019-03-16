<template>
  <div>
    <button class="button is-info increment" @click="increment">
      increment
    </button>
    <button class="button is-danger decrement" @click="decrement">
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

<style scoped></style>
