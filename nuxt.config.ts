// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Youtube Disney Nuxt",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "nuxt-icon",
    "vue3-carousel-nuxt",
  ],
  // carousel: {
  //   prefix: "HomeImage",
  // },
  supabase: {
    redirect: false,
  },
});
