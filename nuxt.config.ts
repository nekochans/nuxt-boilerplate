import { Configuration } from '@nuxt/types';

const nuxtConfig: Configuration = {
  buildModules: ['@nuxt/typescript-build'],
  mode: 'universal',
  srcDir: 'src',
  env: {
    appUrl: process.env.APP_URL || 'http://localhost:3000'
  },
  router: {
    middleware: ['authCookieMiddleware', 'redirectMiddleware'],
    extendRoutes(routes: any, resolve) {
      routes.push({
        name: 'original_error',
        path: '/error',
        props: true,
        component: resolve(__dirname, 'src/pages/error.vue')
      });
    }
  },
  render: {
    compressor: (_req, _res, next) => {
      next();
    }
  },
  serverMiddleware: ['server/bff'],
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js Boilerplate'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (config.module !== undefined) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue|ts)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          });
        }
      }
    }
  }
};

export default nuxtConfig;
