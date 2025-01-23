// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@paper-ui/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
          },
        },
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-04-03',
})
