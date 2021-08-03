export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'artyshko-andrey-portfolio',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    'bootstrap/dist/css/bootstrap.css',
    'animate.css/animate.compat.css',
    '~/assets/scss/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/infiniteloading', ssr: false },
    {src: '~/plugins/bootstrap.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/css/index.scss',
    ]
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  webfontloader: {
    google: {
      families: ['Montserrat:100,200,300,400,500,600,700,800,900'] //Loads Lato font with weights 400 and 700
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['~/plugins/infiniteloading.js']
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
