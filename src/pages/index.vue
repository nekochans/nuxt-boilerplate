<template>
  <section class="container">
    <div>
      <ul>
        <Cat />
        <Logo />
        <Dog />
      </ul>
      <h1 class="title">
        nuxt-boilerplate
      </h1>
      <h2 class="subtitle">
        Nuxt.js Boilerplate
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '../components/Logo.vue';
import Cat from '../components/Cat.vue';
import Dog from '../components/Dog.vue';

export default Vue.extend({
  components: {
    Logo,
    Cat,
    Dog
  }
});
</script>

<style scoped>
ul {
  display: flex;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
