<template>
  <div class="container">
    <div class="result">
      {{ prefixMessage() }}
      {{ currentCounter.counter }}
      {{ suffixMessage() }}
    </div>
    <button class="button is-info increment" @click="increment">
      increment
    </button>
    <button class="button is-danger decrement" @click="decrement">
      decrement
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    currentCounter() {
      return this.$store.getters['counter/currentCounter']();
    }
  },
  methods: {
    prefixMessage() {
      return '🐱が';
    },
    suffixMessage() {
      return '匹いる。';
    },
    increment() {
      this.$store.dispatch('counter/increment');
    },
    decrement() {
      this.$store.dispatch('counter/decrement');
    }
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

.result {
  font-size: 200%;
}

.increment {
  margin: 10px;
}

.decrement {
  margin: 10px;
}
</style>
