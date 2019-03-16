<template>
  <div class="container">
    <div class="result">
      {{ prefixMessage() }}
      {{ currentCounter().count }}
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
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters('counter', ['currentCounter'])
  },
  methods: {
    ...mapActions('counter', ['increment', 'decrement']),
    prefixMessage(): string {
      return '🐱が';
    },
    suffixMessage(): string {
      return '匹いる。';
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
