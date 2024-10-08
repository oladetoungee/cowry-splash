// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify'],
  },

  //  Title and favicon for the head section
  app: {
    head: {
      title: 'CowrySplash',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    }
  }
})
