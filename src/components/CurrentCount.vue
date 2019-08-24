<template>
  <div class="current-count" data-test="current-count">
    {{ prefixMessage() }}
    {{ currentCounter().count }}
    {{ suffixMessage() }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'CurrentCount',
  computed: {
    ...mapGetters('counter', ['currentCounter'])
  },
  methods: {
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
.current-count {
  font-size: 200%;
}
</style>
