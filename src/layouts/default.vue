<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <nuxt-link to="/">
            <img
              alt=""
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </nuxt-link>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light">
              <nuxt-link to="/counter">Counter</nuxt-link>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>redux-next-boilerplate</strong>. The source code is licensed
          <a
            href="https://github.com/nekochans/redux-next-boilerplate/blob/master/LICENSE"
          >
            MIT
          </a>
          . Copyright (c) 2018-2019 nekochans.
        </p>
      </div>
    </footer>
  </div>
</template>
