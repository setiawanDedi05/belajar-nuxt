// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Vision+",
      meta: [{ name: "description", content: "this site for test" }],
    },
  },
  typescript: {
    typeCheck: true
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "@nuxt/icon", "vue3-carousel-nuxt"],
  carousel: {
    prefix: "My",
  },
  $development: {
    nitro: {
      storage: {
        lineup: {
          driver: "fs",
          base: "lineup",
        },
      },
    },
  },
});
