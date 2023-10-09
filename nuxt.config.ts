// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Cabin: {
            wght: [400, 500, 600, 700],
            ital: [400, 500, 600, 700],
          },
        },
      },
    ],
    "@nuxtjs/sanity",
  ],
  googleFonts: {
    display: "swap",
  },
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    apiVersion: process.env.NUXT_SANITY_API_VERSION,
    useCdn: true,
  },
});
