// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@paper-ui/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  content: { nitro: {
    prerender: {
      failOnError: false, // Não interrompe o build em erros de prerender
    },
  },
  debug: true,
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
  tailwindcss: {
    config: {
      darkMode: 'class',
    },
  },
})
