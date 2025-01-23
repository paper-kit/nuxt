export default defineNuxtConfig({
  modules: ['@paper-ui/nuxt', '@nuxtjs/tailwindcss', '@nuxt/content'],
  devtools: { enabled: true },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  compatibilityDate: '2025-01-09',
})
