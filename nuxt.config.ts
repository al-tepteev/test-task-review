import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
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
      'features/*/utils'
    ]
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: "append",
      },
    },
  },
  
  compatibilityDate: '2025-03-24',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],
  
    css: ['~/assets/style/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})