import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-03-24',
  devtools: { enabled: true },

  typescript: {
    shim: false
  },
  imports: {
    dirs: [
      // стандартные
      'composables',
      'utils',
      // фичи: сканируем вложенные composables и utils внутри каждой фичи
      'features/*/composables',
      'features/*/utils',
      'features/*/plugins'
    ]
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: "append",
      },
    },
  },

  modules: ['@pinia/nuxt'],
  css: ['~/assets/style/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})