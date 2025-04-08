import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: "append", // can be 'append' or 'remove'
      },
    },
  },
  
  compatibilityDate: '2025-03-24',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],
  

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})