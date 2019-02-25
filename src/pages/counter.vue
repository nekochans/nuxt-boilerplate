<template>
  <div class="container">
    <div class="result">
      🐱が○○匹いる。
    </div>
    <button class="button is-info increment">
      increment
    </button>
    <button class="button is-danger decrement">
      decrement
    </button>
  </div>
</template>

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
