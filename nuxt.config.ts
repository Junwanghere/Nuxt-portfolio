// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  colorMode: {
    classSuffix: ''
  },
  sourcemap: true,
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'min-light',
            dark: 'min-dark'
          }
        }
      }
    }
  }
})
