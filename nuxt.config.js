import { APP_NAME } from './utils/constants'

export default {
  head: {
    titleTemplate: `%s · ${APP_NAME}`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#a3be8c',
    failedColor: '#bf616a',
    height: '3px',
    throttle: 0
  },
  css: [
    './assets/css/app.scss'
  ],
  plugins: [
    './plugins/init.client'
  ],
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    'nuxt-purgecss'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  messages: {
    error_404: 'Page not found'
  },
  build: {
    // analyze: true
  },
  // package top-level options
  axios: {
  },
  purgeCSS: {
    // enabled: true,
    whitelist: [
      'nuxt-progress-failed'
    ],
    paths: [
      './node_modules/bootstrap/dist/js/bootstrap.js'
    ],
    extractors: () => []
  }
}
