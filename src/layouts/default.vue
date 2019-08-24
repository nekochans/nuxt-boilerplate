<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <nuxt-link to="/">🐱トップへ🐱</nuxt-link>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light" href="/oauth/request" data-test="login">
              Qiitaでログイン
            </a>
            <a class="button is-light">
              <nuxt-link to="/counter">Counter</nuxt-link>
            </a>
            <a class="button is-light">
              <nuxt-link to="/my">Myページ</nuxt-link>
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
