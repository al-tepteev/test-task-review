import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
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