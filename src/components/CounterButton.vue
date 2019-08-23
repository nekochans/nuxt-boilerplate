<template>
  <div>
    <button
      class="button is-info counter-button"
      data-test="increment"
      @click="increment"
    >
      increment
    </button>
    <button
      class="button is-danger counter-button"
      data-test="decrement"
      @click="decrement"
    >
      decrement
    </button>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'CounterButton',
  methods: {
    ...mapActions('counter', ['increment', 'decrement'])
  }
});
</script>

<style scoped>
.counter-button {
  margin: 10px;
}
</style>
